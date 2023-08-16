---
title: 202304222038 Uitvoering - Ventilatiesysteem
slug: 2023-04-22
date: 2023-04-22
tags: huis, ventilatie, uitvoering
public: true
sticker: 1f528
---

# 202304222038 Uitvoering - Ventilatiesysteem
#zettel 
## Algemeen
### Ventilatienorm
In België moet je voldoen aan de norm *NBN D 50-001* - komt min of meer op het volgende neer (zie [bron](https://www.rubanzelfbouw.be/ventilatie-eisen-welke-debieten-laten-berekenen/)):
$$\max\left( 3.6\ \dfrac{m^3}{h} \text{per m² vloeroppervlakte}; \text{min. ventilatieeis}\right)$$
Telkens geldt er ook een minimum ventilatieeis, afhankelijk van de functie van de kamer - zie ventilatie gids [Ruban](https://cdn-5ff617b4c1ac19100810f99c.closte.com/wp-content/uploads/Ruban_Whitepaper_Ventilatie_0919_V2.pdf)
![[Pasted image 20230423105407.png]]
> [!seealso] Ventilatievoorziening in woongebouwen
> Zie ook het document [Ventilatievoorziening in woongebouwen](https://navigator.emis.vito.be/detail?woId=60268&woLang=nl) dat onderdeel uitmaakt van het energiebesluit. Het vormt een **aanvulling** op de norm *NBN D 50-001*. 

### Basisontwerp ![[easykit.png|100]]
#### Ontwerp *gelijkvloers*
| Kamer            | Type                                                | $m^3/h$ ontworpen |
| ---------------- | --------------------------------------------------- | ----------------- |
| Techniche ruimte | <mark style="background: #FF5582A6;">Afvoer</mark>  | $50$              |
| WC gelijkvloers  | <mark style="background: #FF5582A6;">Afvoer</mark>  | $25$              |
| Woonkamer/living | <mark style="background: #ADCCFFA6;">Aanvoer</mark> | $65$              |
| Eetplaats        | <mark style="background: #ADCCFFA6;">Aanvoer</mark> | $65$              |
| Keuken           | <mark style="background: #FF5582A6;">Afvoer</mark>  | $2\times58$       |
| Wasplaats        | <mark style="background: #FF5582A6;">Afvoer</mark>  | $50$              |

#### Ontwerp *eerste verdieping*
| Kamer            | Type                                                | $m^2/h$ ontworpen |
| ---------------- | --------------------------------------------------- | ----------------- |
| Slaapkamer K1    | <mark style="background: #ADCCFFA6;">Aanvoer</mark>  | $42$              |
| Slaapkamer K2  |<mark style="background: #ADCCFFA6;">Aanvoer</mark>  | $54$              |
| Slaapkamer K3 | <mark style="background: #ADCCFFA6;">Aanvoer</mark> | $72$              |
| Badkamer        | <mark style="background: #FF5582A6;">Afvoer</mark> | $57$              |

### Overspraak
Er is **kans** op <mark style="background: #FF5582A6;">overspraak</mark> tussen **kamer K1** en **kamer K2**, door de lengte van de leidingen naar de andere zones, zal het daar wel geringer zijn - prijs geluidsdemper? 
| Figuur                                    | Uitleg                                                                              |
| ----------------------------------------- | ----------------------------------------------------------------------------------- |
| ![[Pasted image 20230423182201.png\|50%]] | Het oor is voornamelijk gevoelig voor frequenties tussen $500$ en $8000\ \text{Hz}$ - zie [bron](https://audiologieboek.nl/content/2-2-12-gevoeligheid-van-het-oor/) |
| ![[Pasted image 20230423182452.png\|50%]] | Geluidsreductie voor een ROnde geluidsdemper diameter 180mm - lengte 600mm met 50mm isolatie - zie [ventilatieland](https://www.ventilatieland.be/artikel/20406/ronde-geluiddemper-diameter-180-mm-lengte-600-mm-50-mm-isolatie.html) - prijs ca. 90 euro                                                                                   |

### Beschikbare buizen
Volgende debieten zijn mogelijk per type leiding - bron ![[easykit.png|60]]
| Buis                         | Debiet                     | Functie         |
| ---------------------------- | -------------------------- | --------------- |
| Uniflex $\unicode{8960}63mm$ | tot $25\ m^2/h$ (per buis) | Verdeel leiding |
| Buis $\unicode{8960}125mm$   | tot $75\ m^2/h$            | Verdeel leiding |
| Buis $\unicode{8960}180mm$   | tot $450\ m^2/h$           | Hoofdleiding    | 

Technische fiche van **gegalvaniseerde kokers** is terug te vinden [hier](https://www.luchtwinkel.be/sites/default/files/productdownloads/SR_Technische_fiche_0.pdf). 

> [!danger] Drukverlies leidingen
> Voor Uniflex leidingen $\unicode{8960}63mm$ is er bij $25\ m^3/h$ een aanzienlijk drukverlies, namelijk 4 Pa/m, het toestel moet deze drukverliezen compenseren, dus dit zal vertalen in een hoger energieverbruik voor eenzelfde werking - [bron](https://www.ventilairgroup.be/be-nl/producten/luchtkanalen/uniflexplus+-rond/fs---flexibele-luchtverdeelslang/groups/g+c+a+view), zie ook de [technische fiche](https://www.ventilairgroup.be/media/files/Tech%20sheet_FS50-63-75-90_ML.pdf)  ![[Pasted image 20230422224638.png]] Zie ook drukverliezen volgens *Darcy-Weibach* - [wiki](https://en.wikipedia.org/wiki/Darcy%E2%80%93Weisbach_equation) ![[Pasted image 20230425205347.png]] Je kan informatie terug vinden inzake drukverliezen door wrijving op de fiche van de leverancier - voorbeeld **gegalvaniseerde kokers** - zie [Lindab](https://www.luchtwinkel.be/sites/default/files/productdownloads/SR_Technische_fiche_0.pdf) ![[Pasted image 20230425210943.png]]

Anderzijds kun je ook, op basis van de **oppervlakte van de doorsnede** van de buis, het debiet bepalen - zie [leren ventileren](https://www.lerenventileren.be/content/debiet-snelheid-en-druk) 

> [!warning] Rechthoekige kokers
> <mark style="background: #FF5582A6;">Niet beschikbaar</mark> bij ![[easykit.png|60]] - **Rechthoekige** koker  $300\text{mm}\times80\text{mm}$ heeft een oppervlakte van $24\;000\text{mm}^{2}$ en vertaalt zich in het volgende:
> - Equivalente diameter = ca. $175\text{mm}$
> - *Hydraulische* diameter ([wiki](https://en.wikipedia.org/wiki/Hydraulic_diameter))= ca. $126\text{mm}$ = $D_h=4\tfrac{A}{P}$

| Grafiek debiet | Hydraulische diameter |
| -------------- | --------------------- |
|      ![[Pasted image 20230425203149.png\|50%]]          | ![[Pasted image 20230425204135.png\|50%]]                      |

Deze opmerking werd ook gemaakt op volgend [blog](https://www.rubanzelfbouw.be/welke-kanalen-kies-ik-het-best-voor-mijn-ventilatie/) ![[Pasted image 20230423082559.png]]

## Aanvoer- en afvoerleidingen
De aanvoer moet naar de volgende kamers + aantal leidingen. Het ontwerp werd gemaakt door ![[easykit.png|60]]. De buizen leg je elke **75 cm à 100 cm** vast met montageband. 

> [!danger] Ventilatie zolder
> Momententeel zat de ventilatie van de zolder niet in het ontwerp. Eventueel moeten we nog 2 T-stukken extra voorzien op de $\unicode{8960}180$ en dan met een overgang naar buisjes (3 stuks) van $\unicode{8960}63$

| Kamer     | Aantal buizen diam 63 | Oplossing                                          | Lengte                  | Aandacht                                                                                                                             |     |
| --------- | --------------------- | -------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --- |
| K1        | 2                     | Aanvoer via galva buis - T-stuk                    |                         | Zorg ervoor dat aanzuiging min of meer centraal zit ten opzicht van het eerste venterdeel (op +- 80cm van de centrale dragende muur) |     |
| K2        | 3                     | Aanvoer via galve buis - T-stuk                    |                         | Zorg ervoor dat aanzuiging min of meer centraal zit ten opzicht van het eerste venterdeel (op +- 80cm van de centrale dragende muur) |     |
| K3        | 3                     | Aanvoer via $3\times\unicode{8960}63$ - zie figuur | 50cm + 500 + 80 = 630cm | Sluit de leidingen aan die de box verticaal verlaten, want de extra weerstand word gecompenseert door een kortere leiding lengte     |     |
| Living    | 3                     | Aanvoer via $3\times\unicode{8960}63$ - zie figuur | 370cm                   | Verticaal aangesloten op box, geen draadspanner, kan perfect                                                                         |     |
| Eetplaats | 3                     | Aanvoer via $3\times\unicode{8960}63$ - zie figuur | 450cm + 380 = 830cm     | Deze sluiten we horizontaal rechts aan op de verdeeldoos                                                                             |     |

![[Drawing 2023-04-22 20.41.45.excalidraw|100%]]
![[202304222038 Uitvoering - Ventilatiesysteem 2023-04-22 21.59.30.excalidraw|100%]]
> [!question] Vervanging 11x buis $\unicode{8960}63mm$
> Eventueel te vervangen met een platte koker $80x300mm$, laat immers een debiet toe van $259\ m^3/h$ bij een snelheid van $3\ m/s$, wat het equivalent is van 10,36 buizen Uniflex $\unicode{8960}63mm$, drukverlies beperkt tot $1.1\ Pa/m$ - zie [ventielatieland](https://www.ventilatieland.be/artikel/27413/instortkanaal-300x80-lengte-15m.html) ![[Pasted image 20230422223508.png]]

Voor de afvoer van de **open keuken** ($=2\times58$), **wasplaats** ($=50$) en **badkamer** ($=57$) komt dit neer op een gecummuleerd volume van ca. $223\tfrac{m^3}{h}$, dus met (zie tabel onder bronnen) de *Uniflex buizen* zou je voor het debiet van ca. $58\tfrac{m^3}{h}$ neerkomen op een snelheid van ca. $2.5\tfrac{m}{s}$ bij $3$ slangen van $\unicode{8960}63\text{mm}$. Dus, moeten we hetzelfde volume (neem aan $250\tfrac{m^3}{h}$) door buizen van $\unicode{8960}125\text{mm}$ lozen aan dezelfde snelheid, dan komt dit neer op een volume van $110\tfrac{m^3}{h}$ per buis, of **$3$ buizen $\unicode{8960}125\text{mm}$ in totaal**. Als je voor een buis van $150$ dezelfde berekening doet, maar dan met een snelheid van $2\tfrac{m}{s}$ dan kom je uit op  $127\tfrac{m^3}{h}$ - dus nees 2 buizen 150 van zolder naar keuken en wasplaats. 

> [!info] Afzuiging **badkamer** + **keuken** + **wasplaat** 
> Langsheen de muur zouden **$3$ buizen $\unicode{8960}125\text{mm}$** moeten lopen. De vraag rest, <mark style="background: #FFB86CA6;">hoe verbind je die met één buis van $\unicode{8960}180$?</mark>

![[202304222038 Uitvoering - Ventilatiesysteem 2023-04-23 09.50.03.excalidraw|100%]]
Tussen het raam en de vloer hebben we maar 90cm. Dus 2 T-stukken (elk T stuk zo'n 35cm- op elkaar is geen optie. Eerder zo iets als hieronder, is wel custom. Voorbeeld van mogelijke verbinding - zie website [Lemmens](https://www.lemmenswarmtepompen.be/ventilatie) uit Destelbergen (dicht bij ons)
![[Pasted image 20230427210546.png]]

Dit zouden we kunnen doen met *zadelstukken*, *verdeeldozen* en/of ** - zie [website](https://www.spirototaal.nl/zadelstuk-op-buis-o180mm-met-90-aftakking-o125mm-symmetrisch.html)
| *Zadelstuk*                                                                                           | *Verdeelbox*                                                                                          |  *Flens/Vlak zadelstuk*                                                                                         |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| [Spiro](https://www.spirototaal.nl/zadelstuk-op-buis-o180mm-met-90-aftakking-o125mm-symmetrisch.html) | [Spiro](https://www.spirototaal.nl/zadelstuk-op-buis-o180mm-met-90-aftakking-o125mm-symmetrisch.html) | [Spiro](https://www.spirototaal.nl/flens-vlak-zadelstuk-voor-spirobuis-o-125mm-safe.html) |
| ![[Pasted image 20230427211449.png\|200]]                                                             | ![[Pasted image 20230427212056.png\|200]]                                                             | ![[Pasted image 20230427212327.png\|200]]                                                 |

Plaatsen van een zadelstuk - zie bron [ventilatieland](https://www.ventilatieland.be/artikel/15534/boordring-180mm-h-90mm.html)
![[Pasted image 20230427215536.png]]
![[Pasted image 20230427215906.png]]
Op Dobbit TV zag ik dit ![[Pasted image 20230427214532.png]]
<iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/rowSesBe21M?start=16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Ventielen
Plaatsing ventiel = $30\ cm$ verwijderd van rand van de kant (![[easykit.png|60]])

Bij **plaating in plafond**, minimaal $50$ à $70\ cm$ van de muren verwijderen. 

> [!tip]
> Plaats de **ventielen** voor afvoer <mark style="background: #FF5582A6;">niet in</mark> de **douche**, maar wel **in de buurt ervan**. Als je ze in de douche zelf plaatst kan dit een tochgevoel geven - Bron = [ventilatiegids Ruban](https://cdn-5ff617b4c1ac19100810f99c.closte.com/wp-content/uploads/Ruban_Whitepaper_Ventilatie_0919_V2.pdf)

## Uitlaten
De uitlaat ter hoogte van het **dak** moet voldoen aan de volgende beschrijving:
> In bijlage AII-1.2 2) van de norm NBN D 50-001 dient voor daken met een helling groter dan 23° volgende bepaling toegevoegd te worden: “In elk geval moet de hoogte van de uitmonding boven het dak minstens 0,5 m bedragen.”

Deze aanvulling werd toegevoegd in [Ventilatievoorzieningen in woongebouwen](https://navigator.emis.vito.be/detail?woId=60268&woLang=nl) dat deel uitmaakt van het Energiebesluit

## Uitzonderingen op de regelgeving
Zie het Energiebesluit - [Ventilatievoorzieningen in woongebouwen](https://navigator.emis.vito.be/detail?woId=60268&woLang=nl)

> In ruimten die **nog niet afgewerkt zijn op het moment van de EPB-aangifte** maar die ontworpen zijn om een van de functies beschreven in tabel 1 van NBN D50-001 te vervullen, moeten de **minimaal vereiste ventilatiedebieten voor die functie gerealiseerd kunnen worden**. In afgewerkte ruimtes die ontworpen en gebouwd zijn om een van de functies beschreven in tabel 1 van NBN D50-001 te vervullen, maar die tijdelijk een ander gebruik hebben, moeten de minimaal vereiste ventilatiedebieten uit deze tabel gerealiseerd kunnen worden voor de functie waarvoor de ruimte ontworpen en gebouwd is.

> [!attention] Zolderruimte
> De zolder kan ingezet worden als slaapkamer/bureau, dus moet hier de mogelijkheid bestaan het ventilatiesysteem uit te breiden. Aanvoer en afvoer moeten wel in balans zijn, dus inregelen van de ventielen zou opnieuw nodig kunnen zijn

## Bestelling
| Artikel                                                        | Aantal                                        | Link                                                                                                                             | Doel                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spiraalbuis $\unicode{8960}180$ - lengte 1,5m                  | <mark style="background: #BBFABBA6;">3</mark>                                             | [Ventilatieland](https://www.ventilatieland.be/artikel/22708/spiraalbuis-o-180mm-lengte-1-5-meter-gegalvaniseerd.html)           | Doe de buis in 2 = 2 x 75. Hierop 3 zadelstukken aanbrengen 125mm - ook nog stukken buis nodig voor traject                                                                                                                                                     |
| Deksel voor Buis $\unicode{8960}125$                           | 2                                             |                                                                                                                                  | Voor extra T-stukken naar zolder                                                                                                                                                                                                                                                                |
| Deksel voor Buis $\unicode{8960}180$                           | 2 + 2 = 4                                     | [Ventilatieland](https://www.ventilatieland.be/artikel/22914/spiro-deksel-o-180mm-voor-spiraalbuis-gegalvaniseerd.html?s=deksel) | Voor het afsluiten van de twee kokers; ook voor de 2 Tstukken die we klaar steken voor de zolder te verluchten (easykit vragen of dat dan op die tweede buis voor supply moet) - ook nog één ter hoogte van overgangen naar $\unicode{8960}150$ naar de beneden |
| Zadelstuk $\unicode{8960}125$ op buis van $\unicode{8960}180$  | 6                                             | [Ventilatieland](https://www.ventilatieland.be/artikel/22787/zadelstuk-o-180-200mm-125mm-90-gegalvaniseerd.html)                 | Je moet wel het zadelstuk monter waar er geen felsnaad zit, afstand flensnaad = exact 12.5cm - dus een stuk buis van 75 is ideaal, want je wil niet de zadels naast elkaar, dus eerder 5x12.5 + overschot = 6,25cm telkens over                                 |
| Ronde spiraalbocht 30° $\unicode{8960}125$                     | 10                                            | [Ventilatieland](https://www.ventilatieland.be/artikel/23375/ronde-spiraal-bocht-30-o-125mm-voor-spiraalbuis.html)               | Om ervoor te zorgen dat we de buizen $\unicode{8960}125$ tegen de muur kunnen leggen. Bovenste buis zullen we mogelijks wat lager moeten leggen, vandaar 4 extra stuks                                                                                          |
| Spiraalbuis $\unicode{8960}125$ - 3m                           | <mark style="background: #BBFABBA6;">6</mark>                                             | [Ventilatieland](https://www.ventilatieland.be/artikel/22743/spiraalbuis-o-125mm-lengte-3-meter-gegalvaniseerd.html)             | Om van de ene naar de andere kant te gaan, is 6m in lengte - 3 buizen nodig                                                                                                                                                                                     |
| Reductiestuk $\unicode{8960}180$ naar $\unicode{8960}125$      | <mark style="background: #FF5582A6;">0</mark> |                                                                                                                                  | Voor overgang naar bocht $\unicode{8960}125$ in dakkapel boven badkamer                                                                                                                                                                                         |
| Ronde spiraalbocht 45° $\unicode{8960}180$                     | 5                                             | [Ventilatieland](https://www.ventilatieland.be/artikel/22878/ronde-spiraal-bocht-45-o-180mm-voor-spiraalbuis.html)               | Voor de buizen onder te brengen in de dakoversteken                                                                                                                                                                                                             |
| Ronde spiraalbocht 30° $\unicode{8960}180$                     | 1                                             |                                                                                                                                  | Voor aansluiting op T-stuk voor verdeling badkamer/beneden                                                                                                                                                                                                      |
| Spiraalbuis $\unicode{8960}150$ - lengte 1,5m                  | 4                                             |                                                                                                                                  | Nodige lengte per buis = $15 + 255 + 22 = 292$ of pakweg 3m - overgang zolder naar keuken en wasplaats                                                                                                                                                          |
| Verbindingsstuk $\unicode{8960}150$                            | 2                                             |                                                                                                                                  | Verbinding (dus in buis) voor buizen $\unicode{8960}150$ tussen de verdiepen                                                                                                                                                                                    |
| T-stuk $\unicode{8960}180$ met afkoppeling $\unicode{8960}150$ | 2                                             |                                                                                                                                  | Voor aankoppeling naar beneden                                                                                                                                                                                                                                  |
| Verbindingsmof $\unicode{8960}180$                             | 6                                             |                                                                                                                                  | We hebben er reeds 2, 3 nodig ter hoogte van de ventilatieunit, 3 andere zijde                                                                                                                                                                                  |
| Ronde spiraalbocht 90° van $\unicode{8960}180$                 | 1                                             |                                                                                                                                  | Voor onder de dakkapel boven badkamer                                                                                                                                                                                                                           |
| T-stuk $\unicode{8960}180$ met afkoppeling $\unicode{8960}125$ | 5                                             |                                                                                                                                  | Dus 2 voor naar de kamers K1 en K1, 2 voor de zolder (toekomst) en 1 voor naar de badkamer                                                                                                                                                                      |
| Spiraalbuis ⌀125 - 1,5m                                        | <mark style="background: #BBFABBA6;">1</mark>                                             |                                                                                                                                  | Voor overgang naar de ventielen in de dakkapellen                                                                                                                                                                                                               |



## Bronnen
Zelfbouwgids ventilatie - zie [hier](https://cdn-5ff617b4c1ac19100810f99c.closte.com/wp-content/uploads/Ruban_Whitepaper_Ventilatie_0919_V2.pdf)
Leren ventileren - zie [hier](https://www.lerenventileren.be/content/debiet-snelheid-en-druk)
https://belglas.files.wordpress.com/2016/04/ventilatiedocumentresidentieel.pdf

### Technische fiches
| Product           | Fiche |
| ----------------- | ----- |
| Uniflex leidingen | [Ventilair](https://www.ventilairgroup.be/media/files/down%20load/Uniflexplus+.pdf)      |

| [Uniflex](https://www.ventilatieland.be/files/uniflexplus-flexibel-luchtsysteem-capaciteit_8188760076822.pdf)                                    | Deel 2                                    | 
| ----------------------------------------- | ----------------------------------------- | 
| ![[Pasted image 20230427203530.png\|50%]] | ![[Pasted image 20230427203406.png\|50%]] | 


## Uitvoering

![[Pasted image 20230501132737.png]]

Project snijlijn buis diam 180 met buis 150. 

Algemeen, polair stelsel:
$x_{r} = \cos(\alpha) \times r$
$y_{r} = \sin(\alpha) \times r$

Doorsnede $180\ mm$ - polair stelsel 
$x_{180} = \cos(\alpha) \times 180$
$y_{180} = \sin(\alpha) \times 180$

Hier loodrecht op komt er een buis van diameter $150 mm$, we willen het in het vlak projecteren van de doorsnede van $150\ mm$, dus we zullen $\beta$ gebruiken in onze finale formule. 
$x_{150} = \cos(\beta) \times 150$
$y_{150} = \sin(\beta) \times 150$

De project komt er eigenlijk op neer om de $x$ van de tweede vergelijking te vertalen in de $r$ van de eerste vergelijking, er is dus een vertaling van $x_{150}$ naar een $r$, dus wat is $r$ in functie van $x_{150}$. 

Dus $r = 180 \times \alpha$, anderzijds moeten we $\alpha$ berekenen uit de $x$-coordinaat van de buis $\unicode{8960}150\ mm$, we kennen de schuine zijde $=180\ mm$. Dus $\alpha = \arcsin(\dfrac{x_{150}}{180\ mm})$

Dus uiteindelijk is $r$ gelijk aan $180\times\arcsin(\dfrac{x_{150}}{180\ mm})$. De projectie komt dan overéén met de volgende coordinaten, in cartesiaans stelsel:

$x_{projectie} = 180\times\arcsin(\dfrac{x_{150}}{180\ mm})=180\times\arcsin(\dfrac{\cos(\beta)\times150}{180\ mm})$
$y_{projectie}=\sin(\beta) \times 150$

![[202304222038 Uitvoering - Ventilatiesysteem 2023-05-09 17.24.27.excalidraw]]



## Similar story?
The following list contains an overview of all **zettels** that have been created with the **same tags** assigned.
```dataview
list
from #zettel
```