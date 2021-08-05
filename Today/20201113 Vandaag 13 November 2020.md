---
title: 
date: 2020-11-13
tags: 
slug: 
---

# Vandaag 13 November 2020
> Raspberry Pi als PaaS - Part 1

> PaaS - `Platform as a Service`
## Doelstelling
Ik had het idee om een *Zettlekasten*[^1] systeem op te zetten die zowel te bereiken was m'n laptop als op m'n iOS devices. Bovendien voorzie ik mijn notities van *Frontmatter* en heb ik het doel om een [Gatsby](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog) aan te maken om m'n notities ook beschikbaar te maken op het web.

Op mijn iPad heb ik [Working Copy](https://workingcopyapp.com/) en [Editorial](http://omz-software.com/editorial/) geinstalleerd. Deze zouden me toe moeten laten om ook op de iPad m'n Zettlekasten systeem uit te bouwen. Editorial laat toe om custom scripts te schrijven in *Python* om bijvoorbeeld een *Today* note aan te maken, of om afbeeldingen in te voegen. Om ongestoord notities te kunnen aanmaken op zowel de iPad als m'n laptop, zou ik een *Git* version control systeem opzetten op de *Raspberry Pi*.  

## Uitwerking
### Raspberry Pi
Op *Github* kwam ik twee interessante projecten tegen. In het verleden ging ik al even aan de slag met [Dokku](https://github.com/dokku/dokku), een *PaaS* implementatie op basis van Docker Containers. Op zich een interessante oplossing, maar al snel bleek het minder interessant voor de *Raspberry Pi*. Veel Docker images zijn niet gecompileerd voor een ARM processor. Een andere uitwerking, [Piku](https://github.com/piku/piku) biedt een antwoord op deze tekortkomingen. 

> `piku`, inspired by `dokku`, allows you do `git push` deployments to your own servers.

Enerzijds wens ik mijn notities openbaar en toegankelijk te maken en anderzijds wens ik een eenvoudige manier te voorzien om notities te synchroniseren tussen verschillende apparaten. Eingelijk bestaat m'n oplossing dus uit twee verschillende projecten:
1. Zettlekasten - *Git* repository om notities centraal op te slaan en uit te wisselen tussen de verschillende apparaten
3. Gatsby blog - *Git* repository die periodiek of bij een update van de *Zettlekasten* een statische *Gatsby* website aanmaakt. 

Het eerste deelproject kan een `bare Git repository` zijn op de Raspberry Pi. Hoe dan ook moet de *Raspberry Pi* opereren als een `git server`. Ik koos er voor om *GitLab community edition* te installeren. [Installatie](https://medium.com/@kevalpatel2106/create-your-own-git-server-using-raspberry-pi-and-gitlab-f64475901a66) 

### Open netwerk Raspberry Pi

Om van buitenaf de `Git repository` te bereiken moet de *Raspberry Pi* te bereiken zijn van buitenaf. Het IP adres van de Pi is variabel. Om de *Pi* bereikbaar te maken dacht ik direct aan een service zoals [noip.com](https://www.noip.com/), een zogenaamde *Dynamic DNS service*. 

Een installatiegids voor de NoIP DUC `Dynamic Update Client` vind je terug op hun [website](https://www.noip.com/support/knowledgebase/install-ip-duc-onto-raspberry-pi/). Na de installatie configureer je de poorten die je wenst open te zetten voor het ip-adres van je *Pi*. 

Een bijkomend probleem die ik heb is dat de router geen *Port Forwarding* toe laat. Dit probleem kan opgelost worden door een *VPN* op te zetten naar een server met een statisch ip-adres. Hiervoor heb je een *VPS* of *Vertial Private Server* nodig zoals [Amazon EC2](https://aws.amazon.com/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc). De *VPS* treedt op als *host* terwijl de *Raspberry Pi* de *client* is. Eén mogelijke uitwerking wordt [hier](http://billpatrianakos.me/blog/2019/07/12/access-a-raspberry-pi-from-anywhere-without-port-forwarding/) beschreven. Voorbeeld van een *VPS* is [Vultr](https://www.vultr.com/products/cloud-compute/#pricing) wat je 2.5 euro per maand kost - zie [tip](https://jordancrawford.kiwi/home-server-without-portforward/).

[Ngrok](https://dashboard.ngrok.com/get-started/setup) kan ook ingezet worden om *http* services of *ssh* te delen. Met de gratie versie wordt wel telkens een nieuw adres aangemaakt wanneer je *ngrok* start.
- Webservice open zetten `ngrok http 80`
- SSH tunnel open zetten `ngrok tcp 22`
Om *Ngrok* bij het opstarten te starten, kunnen we gebruik maken van [pm2](https://pm2.keymetrics.io) een process manager gemaakt in *NodeJs*. Dit kan ook met *Systemd* gemaakt worden. 

```bash
vim touch /lib/systemd/system/ngrok.service
```

De service configureer je als volgt:

```ngrok.service
[Unit]
Description=Ngrok
After=multi-user.target

[Service]
Type=simple
ExecStart=/usr/bin/ngrok start -config /home/pi/.ngrok2/ngrok.yml --all
Restart=on-abort

[Install]
WantedBy=multi-user.target
```

Nadien start je de service op:

```bash
systemctl daemon-reload
sudo systemctl enable ngrok.service
sudo systemctl start ngrok.service
```

Om de *url* op te halen waarop de tunnel actief is, kun je het volgende gebruiken, dit met [jq](https://github.com/stedolan/jq) dat je kan downloaden via `sudo apt-get install jq`:

```bash
curl --silent http://127.0.0.1:4040/api/tunnels | jq '.tunnels[0].public_url'
```

Om enkel het ip-adres te bekomen van het *Ngrok* endpoint.

```bash
curl --silent http://127.0.0.1:4040/api/tunnels | jq '.tunnels[0].public_url' | xargs host | awk '/has address/ { print $4 ; exit }'
```

UPDATE: Maak gebruik van [telebit](https://telebit.cloud/) om je *SSH* tunnel open te zetten. Het gebruik is heel gelijkaardig aan *Ngrok*, maar het is gratis + vaste domeinnaam!

Telebit wordt geïnstalleerd in je gebruikersfolder, maar ik heb het verzet zodat het gemakkelijk bruikbaar wordt:
```bash
sudo mv ~/telebit /usr/bin/telebit
```

Nu gebruik je `telebit ssh auto` om een *SSH* tunnel op te zetten of `telebit http 80` om de webserver op poort 80 open te zetten naar het web. 

De website is te bereiken via [sharp-snake-13.telebit.io](https://sharp-snake-13.telebit.io/). Verbinding maken via ssh doe je als volgt:

```bash
ssh -o ProxyCommand='openssl s_client -connect %h:443 -servername %h -quiet' pi@sharp-snake-13.telebit.io
```

### Interessante blogpost
Ander interessante blogposts die ik tegen kwam tijdens m'n onderzoek:
- [JuJens] - Deploy to your test server with git hooks
- [Chen Huijing] - Tunneling services for exposing localhost to the web
- [coolaj86] - How tunneling services like 'Localtunnel' works without SSH?
- [spokes] - Self-hosted tunnel service
- [telebit relay] - Self-hosted tunnel service

[JuJens]: https://www.jujens.eu/posts/en/2018/Sep/09/deploy-test-git-hooks/
[Chen Huijing]: https://chenhuijing.com/blog/tunnelling-services-for-exposing-localhost-to-the-web/#%F0%9F%91%9F
[coolaj86]: https://stackoverflow.com/questions/52596901/how-tunneling-services-like-localtunnel-works-without-ssh
[spokes]: https://docs.packetriot.com/spokes/
[telebit relay]: https://git.coolaj86.com/coolaj86/telebit.js#mac--linux

[^1]: Een *Zettlekasten* in het Duits vertaal je simpelweg tot een *Fichebak*. De *Zettlekasten method* is geïnspireerd op de werkwijze die *Niklas Luhmann* hanteerde doorheen zijn leven - zie [zettelkasten.de](https://zettelkasten.de/) voor meer informatie.

