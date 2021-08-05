---
title:
slug: 
date: 2020-11-14
tags: 
public: true
---

# Vandaag 14 November 2020
> Raspberry Pi als PaaS - Part 2  

Dit is de tweede post waarin ik op zoek ga naar een *Git repository* voor m'n notities. Zie [[20201113 Vandaag 13 November 2020|Rasberry Pi als PaaS - Part 1]] voor de aanzet van de blogposts. 

## Git Repository op de Raspberry Pi
> Tip: deze [blogpost](https://dev.to/kodaman2/setting-up-raspberry-pi-as-a-git-server-230f) bevat een overzicht van te stappen om een *Git Server* op te zetten met [gitea]. De gids bevat bovendien ook een overzicht voor het configureren van een statisch lokaal ip-adres, het gebruik van no-ip,...

We installeren [gitea] volgens de beschrijvingen op [blog](https://yiqiwang.me/2020/07/10/install-gitea-on-the-raspberry-pi-3b/) van Yiqi Wang. De laatste versie van [gitea] werkt namelijk niet op de *Pi*, vandaar dat er verwezen wordt naar de blogpost.

### Uitwerking zonder [gitea]

Omdat ik [gitea] niet aan de praat kreeg wou ik manueel nieuwe repositories aanmaken.

We zijn het ondertussen zo gewoon om iets als het volgende uit te voeren:

```bash
git clone git@github.com:rebot/notes.git
```

Er wordt een SSH tunnel opgezet voor de gebruiker `git` naar de host `github.com` en de map `rebot/notes.git` dat zich bevind in de gebruikersmap van de gebruiker `git` wordt gecloned. 

Eenzelfde principe willen we opzetten op de *Pi*. Eerst en vooral dienen we een nieuwe gebruiker op te zetten. Hiervoor verwijzen we naar de installatiegids van [gitea]. We nemen bondig de kernzaken over.
1. Maak een nieuwe gebruiker `git` aan met het volgende commando:
```bash
adduser \
   --system \
   --shell /bin/bash \
   --gecos 'Git Version Control' \
   --group \
   --disabled-password \
   --home /home/git \
   git
```

2. Activeer de nieuwe gebruiker met `sudo su - git`.
3. Maak een nieuwe #repository aan `mkdir -p ~/rebot/notes.git` waarbij `rebot` een gebruiker voorsteld. Zo kun je de repository wat ordelijk houden.
4. Voeg de repository toe aan je lokale copy op je computer:
```bash
git remote add origin git@raspberrypi.local:rebot/notes.git
```
5. Zorg ervoor dat je public ssh key (zie `ls ~/.ssh/id_*` voor de beschikbare sleutels) toegevoegd wordt aan de `~/.ssh/authorized_keys` van de *.git* gebruiker. Heb je nog géén, dan maak je eenvoudig een rsa key aan met `ssh-keygen -o`. Kopier de sleutel op je klipbord met `cat ~/.ssh/id_rsa.pub | pbcopy`
6. Voeg de sleutel toe aan de *git* gebruiker op de *Pi* met `echo "<de sleutel>" >> ~/.ssh/authorized_keys`. Nu kun je je code pushen naar de *repository*

## De notities *mounten* in een ander project
Ik heb het idee te werken met [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) om de notities te *mounten* in het [Gatsby] project dat dienst doet als m'n frontend. 
>Submodules allow you to keep a Git repository as a subdirectory of another Git repository. This lets you clone another repository into your project and keep your commits separate.

Om een bestaand project aan een nieuw toe te voegen, voer je `git submodule add <locatie-submodule> <path-naam>` uit. Voer ter controle `git status` uit. Hier zie je nu een onderscheidt tussen de actieve repository en de submodules. 

Wanneer je een project cloont met *submodules*, dan dien je twee commando's uit te voeren. Een 1ste `git submodule init` initialiseert de configuratie uit het lokaal configuratiebestand dat meekwam bij de `git clone`. Ten tweede `git submodule update` om alle data van de submodulus binnen te halen. Je kan de twee combineren met `git submodule update --init --recursive` om ook submodulus met submodulus volledig te downloaden. Bij aanvang kan je ook gewoon `git clone --recurse-submodules <repository>` uitvoeren.

Om submodulus up te daten, voer je het volgende script uit:

```bash
git submodule update --remote
```

Om wijzigingen in het hoogdproject en submodules van de upstream server te downloaden, voer je `git pull --recurse-submodules` uit.

De [Gatsby] website zou kunnen gebouwd worden op een vast tijdstip elke dag (bijvoorbeeld 's nachts). Een script wordt uitgevoerd waarbij eerst de submodules (repository: `rebot/notes.git`) worden herladen en nadien de statische website wordt opgebouwd.

Anderen volgden de zelfde filosofie - zie deze [issue](https://github.com/gatsbyjs/gatsby/issues/6606).
# Interessante blogposts
- [https://hackaday.com/2016/09/20/expose-your-raspberry-pi/](https://hackaday.com/2016/09/20/expose-your-raspberry-pi/)
- [https://golb.hplar.ch/2019/01/expose-server-vpn.html](https://golb.hplar.ch/2019/01/expose-server-vpn.html)
- [https://stackoverflow.com/questions/21535979/git-submodule-update-from-post-receive-hook](https://stackoverflow.com/questions/21535979/git-submodule-update-from-post-receive-hook)

[gitea]: https://gitea.io/en-us/
[Gatsby]: https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog

