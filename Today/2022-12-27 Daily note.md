---
title: Today 2022-12-27
slug: 2022-12-27
date: 2022-12-27
tags: systemd
public: true
---

# Today 2022-12-27
#note/daily #mood/happy
<< [[20221226]] | [[20221228]] >>
## Cmd `Systemd`
*Services* are typically installed in two paths, `/etc/systemd/system` for administrator *services* and `/usr/lib/systemd/system` for packages installed by the user itself. 

To **print** the content of a *service*, regardless it's location, use `systemctl cat <service>` . To **replace** a unit file, you can use `systemctl edit --full <service>`. A drop-in replacement is handled using `systemctl edit <service>` in which a *diff* will be created. This will create a new folder `/usr/lib/systemd/system/<service>.d/` that will contain a new `<service>.service` file that will be loaded as a **compliment** of the original file. If you want to revert to the original, you can apply `systemctl revert <service>`. 

`````ad-info
collapse: True
```python
# code snippet
import pandas as pd
```
`````

## Cmd `cloud-init`
All data regarding `cloud-init` is stored in the `/var/lib/cloud` path. 

## Cmd `nmap`
The command `nmap` stands for `n`etwork `map`per. It's a versatile tool. Run `curl cht.sh/nmap` to get an extensive *cheatsheet* of what can be done with `nmap`. 

```ad-example
title: Explore the port opened on your local system
collapse: True
To explore the ports which are opened on your system. The `-p` flag is needed if you want to scan beyond the by default range of `1-1024`. Use `--top-ports 10` to limit the scan to the 10 most used ports.
~~~bash
# You can also specify a range using `-p 0-65535` for example
nmap -p- localhost
~~~
Their are a couple of alternatives available:
- You could use `netstat -aln` to show *all* (`-a`) *listening* (`-l`) ports, presented in their *numerical* format (`-n` and not the service name like in `/etc/services`).
- You could use `ss` which stands for `s`ocket `s`taticstics. To restrict it to only listening ports, use `ss -l`. 
- You could use `lsof -i` which stands for *list* (`ls` part) `o`pen `f`iles. The `-i` flag limits the output to *network connections*. In the output, the **PID** is listed which is responsible for opening the *network connection*.
```

## Cmd `iptables`
Now adays, `ufw` or `u`ncomplicated `f`ire`w`all is used more often because it simplifies configuration of `iptables` a lot. However, I doubt it's as strong. 

```ad-example
title: Show all rules
Show all rules in `iptables` with their line numbering that can be used to remove rules
~~~bash
# Alternatively, you could use `iptables -nL --line-numbers`
iptables -L INPUT --line-numbers
~~~
To delete a line based on it's line number, use `iptables -D INPUT <line-number>`
```

```ad-example
title: NAT rule
This will create a *NAT* rule to translate all traffic from the `192.168.0.0/24` subnet to the host's public IP
~~~bash
iptables -t nat -A POSTROUTING -s 192.168.0.0/24 -j MASQUERADE
~~~
```

```ad-example
title: Forward traffic between interfaces
collapse: True
First, lets have a look which *chains* exits using `iptables -vL FORWARD --line-numbers`. `iptables` applies rules chronologically, with the first rules having a higher priority than the bottom ones. 

We used it to configure **wireguard** (see [`wg-quick`](https://www.wireguard.com/quickstart/)). A `systemd` *service* is registered to run a script whenever **wireguard** is activated. This can be seens using `systemctl cat wg-quick@.service`. It's a `oneshot` service, but with `RemainAfterExit=yes` set to make it traceble and keep it's status after running the script.
~~~
iptables -A FORWARD -i wg0 -j ACCEPT 
iptables -A FORWARD -o wg0 -j ACCEPT  
iptables -t nat -A POSTROUTING -o ens3 -j MASQUERADE 
~~~
To delete these rules, just replace the `-A` flag with `-D` 
```

## Cmd `ip`
A command line tool to handle *network interfaces*, *routes* and *adresses*. It provided a set of tools to **manage networking** in the **linux kernel**.  List all *interfaces* using `ip -c link` and all *adresses* using `ip -c address`. The `-c` flag is used to just introduce some color 😊. To show all *routes* on the system, use `ip -c route show`. 

```ad-example
title: Routing table
collapse: True
In the *routing table*, the `default` applies whenever no more specific rule is applied. For example, everything in the subnet `10.0.2.0/24` will to routed to the `wg0` interface and not to the default `envs3` interface. 
~~~bash
default via 10.0.0.1 dev ens3 proto dhcp src 10.0.0.39 metric 100
10.0.0.0/24 dev ens3 proto kernel scope link src 10.0.0.39
10.0.2.0/24 dev wg0 proto kernel scope link src 10.0.2.1
~~~
To set the *default gateway* to `192.0.2.1` via the interface `eth0`, run `ip route add default via 192.0.2.1 dev eth0`. However, also `route add default gw 192.0.2.1 eth0` can be used, which is more widely available. Again, to list *all interfaces*, you could also use `route -n get` or ever `netstat -nr`.   

To add a route for a *subnet*, use:
~~~bash
route add -net 10.0.3.0 netmask 255.255.255.0 gw 10.0.3.1 dev <interface>
~~~
```

## What's going on?
The following list contains an overview of all **today** notes that have been created within a timespan of  **3 days before and after** the creation of this **daily note**. 

```dataview
list
from "Today"
where file.ctime >= date(2022-12-24) and file.ctime <= date(2022-12-30) 
```

## Similar story?
The following list contains an overview of all **journals** that have been created with the **same tags** assigned.
```dataview
list
from #systemd
```