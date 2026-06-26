import type { LessonSeed } from "./types";

const sign = (code: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    `Belgian road sign ${code}.svg`
  )}`;

// Hoofdstukken 1–4: De openbare weg, De weggebruikers, De auto, De snelheid.
export const lessons1: LessonSeed[] = [
  // ============================================================= 1. OPENBARE WEG
  {
    category: "openbare-weg",
    slug: "de-openbare-weg",
    title: "De openbare weg",
    intro:
      "Voor je leert hoe je je in het verkeer moet gedragen, moet je weten wáár je je precies bevindt. De openbare weg bestaat uit veel meer dan alleen de rijbaan: bermen, fietspaden, trottoirs, parkeerstroken en allerlei zones met elk hun eigen regels. In dit hoofdstuk leer je elk onderdeel herkennen, samen met de markeringen op het wegdek en de belangrijkste zones zoals de bebouwde kom, de zone 30 en het woonerf. Wie de opbouw van de weg begrijpt, begrijpt meteen veel verkeersregels die er logisch uit voortvloeien.",
    estMinutes: 18,
    order: 1,
    sections: [
      {
        heading: "Wat is de openbare weg?",
        body:
          "De **openbare weg** is elke weg die toegankelijk is voor het publiek: niet enkel straten en lanen, maar ook pleinen, parkeerterreinen die voor iedereen open zijn, en wegen op privédomein die vrij gebruikt mogen worden. Zodra een weg openstaat voor het verkeer in het algemeen, geldt er de wegcode.\n\nDe openbare weg bestaat uit verschillende delen die elk een eigen functie en eigen regels hebben. Het is belangrijk dat je die delen kunt benoemen, want veel regels in de wegcode verwijzen er rechtstreeks naar (bijvoorbeeld 'je mag niet parkeren op het trottoir' of 'fietsers rijden op het fietspad').\n\nDe twee hoofdgroepen zijn:\n\n- de delen voor het **rijdende verkeer**: de rijbaan met haar rijstroken;\n- de delen voor **specifieke weggebruikers** of voor stilstaande voertuigen: trottoirs, fietspaden, bermen en parkeerstroken.",
      },
      {
        heading: "De rijbaan en de rijstroken",
        body:
          "De **rijbaan** is het deel van de openbare weg dat bestemd is voor het rijdende verkeer in het algemeen (auto's, vrachtwagens, motorfietsen, bromfietsen ...). Trottoirs, fietspaden en bermen horen er níét bij — dat is een klassieke examenvalkuil.\n\nEen **rijstrook** is een deel van de rijbaan dat door overlangse markeringen (witte strepen) is afgebakend en breed genoeg is voor één file auto's. Op een brede weg liggen er soms meerdere rijstroken naast elkaar in dezelfde richting.\n\nEnkele begrippen die je moet kennen:\n\n- **Rijbaan met één rijstrook in elke richting**: het meest voorkomende geval; je houdt rechts.\n- **Rijbaan met meerdere rijstroken in dezelfde richting**: de linkse stroken dienen vooral om in te halen of voor te sorteren.\n- **Gescheiden rijbanen**: twee rijbanen gescheiden door een middenberm of een verhoogde rand, zoals op een autosnelweg.\n- **Aslijn**: de (al dan niet gemarkeerde) denkbeeldige of getekende lijn in het midden die de rijrichtingen scheidt.",
        quiz: [
          {
            text: "Welk onderdeel hoort NIET bij de rijbaan?",
            explanation:
              "De rijbaan is bestemd voor het rijdende verkeer. Het trottoir is voorbehouden voor voetgangers en maakt geen deel uit van de rijbaan.",
            options: [
              { text: "Het trottoir", correct: true },
              { text: "Een rijstrook" },
              { text: "De aslijn" },
              { text: "Een inhaalstrook" },
            ],
          },
        ],
      },
      {
        heading: "Trottoir, berm en parkeerstrook",
        body:
          "Naast de rijbaan liggen delen voor voetgangers, voor stilstaande voertuigen of als veiligheidsruimte.\n\n- Het **trottoir** (voetpad) is meestal verhoogd en ligt langs de rijbaan. Het is voorbehouden voor voetgangers; als bestuurder mag je er niet op rijden, stilstaan of parkeren (behalve om het over te steken naar een inrit).\n- De **berm** ligt tussen de rijbaan en bijvoorbeeld een gracht of veld. Een **gelijkgrondse berm** ligt op hetzelfde niveau als de rijbaan; een **verhoogde berm** ligt hoger. Buiten de bebouwde kom mogen voetgangers en soms fietsers de begaanbare berm gebruiken.\n- De **parkeerstrook** is een strook naast de rijbaan, specifiek bedoeld om voertuigen te laten parkeren.\n\nOp een autosnelweg ken je ook de **pechstrook** (vluchtstrook): die ligt rechts van de rijstroken en is uitsluitend voor noodgevallen. Je mag er niet op rijden of stoppen zonder geldige reden.",
        quiz: [
          {
            text: "Wat is het verschil tussen een gelijkgrondse en een verhoogde berm?",
            explanation:
              "Een gelijkgrondse berm ligt op hetzelfde niveau als de rijbaan; een verhoogde berm ligt hoger (zoals een verhoogd voetpad).",
            options: [
              { text: "De gelijkgrondse ligt op hetzelfde niveau, de verhoogde hoger", correct: true },
              { text: "Er is geen verschil" },
              { text: "De verhoogde berm is altijd een fietspad" },
              { text: "De gelijkgrondse berm is enkel voor auto's" },
            ],
          },
        ],
      },
      {
        heading: "Het fietspad",
        body:
          "Een **fietspad** is voorbehouden voor fietsers en sommige bromfietsers. Het wordt op twee manieren aangeduid:\n\n- door het verkeersbord **D7** (rond, blauw, met een witte fiets): een **verplicht** fietspad dat fietsers moeten volgen als het berijdbaar is;\n- door **twee evenwijdige witte onderbroken strepen** op de rijbaan (het 'gemarkeerde' fietspad).\n\nAls bestuurder van een auto mag je niet op het fietspad rijden, stilstaan of parkeren. Een fietspad oversteken (bijvoorbeeld om een inrit op te rijden) mag wel, op voorwaarde dat je voorrang verleent aan de fietsers.\n\nLet ook op nieuwere inrichtingen zoals de **fietsstraat** (auto's zijn 'te gast', mogen fietsers niet inhalen en rijden maximaal 30 km/u) en het **fietspad in twee richtingen**, waar fietsers van beide kanten kunnen komen.",
        imageUrl: sign("D7"),
        imageAlt: "Bord D7 — verplicht fietspad",
      },
      {
        heading: "Wegmarkeringen op het wegdek",
        body:
          "Markeringen op de grond geven, net als borden, instructies. Je moet ze kunnen lezen.\n\n**Overlangse witte strepen** (in de rijrichting):\n\n- Een **doorlopende (volle) streep** mag je niet overschrijden en je mag er niet links van rijden. Ze scheidt rijstroken of rijrichtingen waar manoeuvres gevaarlijk zijn.\n- Een **onderbroken (gestreepte) streep** mag je overschrijden om in te halen of van rijstrook te veranderen, als het veilig is.\n- Bij een **dubbele streep (doorlopend + onderbroken)** geldt de streep aan jouw kant: ligt de volle lijn aan jouw kant, dan mag je niet overschrijden.\n\n**Gele strepen langs de rand** van de rijbaan:\n\n- een gele **onderbroken** streep = **parkeerverbod**;\n- een gele **doorlopende** streep = verbod om **stil te staan én te parkeren**.\n\nDaarnaast bestaan er **dwarsmarkeringen**, zoals de **stopstreep** (volle witte lijn waar je volledig stopt bij een stopbord of rood licht), de **dwarse onderbroken streep** bij 'voorrang verlenen', en de **omgekeerde driehoeken (haaientanden)** op het wegdek die de voorrang aanduiden.",
        quiz: [
          {
            text: "Wat betekent een gele doorlopende streep langs de boordsteen?",
            explanation:
              "Een gele doorlopende streep langs de rand betekent dat je er niet mag stilstaan én niet mag parkeren. De onderbroken gele streep betekent enkel parkeerverbod.",
            options: [
              { text: "Verbod om stil te staan en te parkeren", correct: true },
              { text: "Enkel parkeerverbod, stilstaan mag" },
              { text: "Verplicht parkeren" },
              { text: "Begin van een fietspad" },
            ],
          },
          {
            text: "Mag je een doorlopende witte streep overschrijden om in te halen?",
            explanation:
              "Neen. Een doorlopende streep mag nooit overschreden worden; inhalen waarbij je die lijn moet kruisen is dus verboden.",
            isSevere: true,
            options: [
              { text: "Neen, nooit", correct: true },
              { text: "Ja, als je snel terugkeert" },
              { text: "Ja, met je richtingaanwijzer aan" },
              { text: "Ja, buiten de bebouwde kom" },
            ],
          },
        ],
      },
      {
        heading: "De bebouwde kom en de zone 30",
        body:
          "Bepaalde zones hebben hun eigen standaardregels, vooral inzake snelheid.\n\nDe **bebouwde kom** begint bij het bord **F1** (witte plaatsnaam op blauwe achtergrond) en eindigt bij het bord **F3**. Binnen de bebouwde kom geldt standaard een maximumsnelheid van **50 km/u**. In het Brussels Hoofdstedelijk Gewest is de standaard sinds 2021 zelfs **30 km/u**.\n\nEen **zone 30** wordt aangeduid met het bord **F4a** (begin) en **F4b** (einde). In heel die zone geldt **30 km/u**, vaak in schoolomgevingen en woonbuurten. De beperking geldt voor de hele zone, niet enkel ter hoogte van het bord — dat is belangrijk: je hoeft het bord niet bij elk kruispunt opnieuw te zien.\n\nVanaf 1 september 2026 geldt bovendien aan elke **verhoogde inrichting** (verkeersdrempel, plateau) automatisch 30 km/u, ook zonder zonebord.",
        imageUrl: sign("F4a"),
        imageAlt: "Bord F4a — begin zone 30",
        quiz: [
          {
            text: "Geldt de snelheidsbeperking in een zone 30 enkel ter hoogte van het bord?",
            explanation:
              "Neen, in een zone 30 geldt 30 km/u in de héle zone, van het beginbord (F4a) tot het eindbord (F4b).",
            options: [
              { text: "Neen, in de hele zone tot het eindbord", correct: true },
              { text: "Ja, enkel bij het bord" },
              { text: "Ja, enkel op kruispunten" },
              { text: "Enkel overdag" },
            ],
          },
        ],
      },
      {
        heading: "Het woonerf en bijzondere zones",
        body:
          "Het **woonerf** (en het 'erf') wordt aangeduid met het bord **F12a** (begin) en **F12b** (einde). Hier primeert het wonen op het verkeer. De regels zijn streng:\n\n- je rijdt **stapvoets**, maximaal **20 km/u**;\n- **voetgangers mogen de hele breedte** van de openbare weg gebruiken en kinderen mogen er spelen;\n- je mag voetgangers niet in gevaar brengen of hinderen, en parkeren mag enkel op de daarvoor gemarkeerde plaatsen.\n\nAndere bijzondere zones die je moet herkennen:\n\n- **Voetgangerszone** (bord F103/F105): enkel voor voetgangers; gemotoriseerd verkeer mag er in principe niet in.\n- **Schoolstraat**: een straat die tijdens bepaalde uren (begin en einde van de schooldag) wordt afgesloten voor gemotoriseerd verkeer.\n- **Fietsstraat**: auto's mogen er fietsers niet inhalen en rijden maximaal 30 km/u.\n- **Autosnelweg** (F5/F7) en **autoweg** (F9/F11): wegen met bijzondere toegangs- en snelheidsregels.",
        quiz: [
          {
            text: "Welke maximumsnelheid geldt in een woonerf?",
            explanation:
              "In een woonerf rij je stapvoets: maximaal 20 km/u. Voetgangers mogen er de hele breedte van de weg gebruiken en kinderen mogen er spelen.",
            options: [
              { text: "20 km/u (stapvoets)", correct: true },
              { text: "30 km/u" },
              { text: "50 km/u" },
              { text: "10 km/u" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 2. WEGGEBRUIKERS
  {
    category: "weggebruikers",
    slug: "de-weggebruikers",
    title: "De weggebruikers",
    intro:
      "Het verkeer is een samenspel van heel verschillende gebruikers: voetgangers, fietsers, bromfietsers, automobilisten, vrachtwagens, bussen en trams. Niet iedereen is even snel of even goed beschermd. Als automobilist bestuur je een zwaar voertuig en draag je daarom een grote verantwoordelijkheid tegenover de 'zwakke' weggebruikers. In dit hoofdstuk leer je wie welke plaats inneemt, hoe je je gedraagt tegenover kwetsbare gebruikers, en welke bijzondere regels gelden voor bussen, trams en prioritaire voertuigen.",
    estMinutes: 18,
    order: 1,
    sections: [
      {
        heading: "Wie is wie? Belangrijke definities",
        body:
          "De wegcode maakt een duidelijk onderscheid tussen soorten weggebruikers, en de regels hangen vaak af van die categorie.\n\n- Een **bestuurder** is iedereen die een voertuig leidt of trek-, last- of rijdieren geleidt. Een fietser is dus ook een bestuurder; een voetganger niet.\n- Een **voetganger** verplaatst zich te voet. Ook wie een fiets of bromfiets aan de hand voortduwt, of zich verplaatst met een rolstoel of een voortbewegingstoestel aan stapvoets tempo, wordt als voetganger beschouwd.\n- **Zwakke weggebruikers** zijn voetgangers, fietsers en bestuurders van tweewielige bromfietsen — zij hebben geen beschermende carrosserie.\n\nBinnen de zwakke weggebruikers verdienen **kinderen, ouderen en personen met een beperking** bijzondere aandacht. Zij reageren trager of onvoorspelbaarder, en als bestuurder moet je daar rekening mee houden.",
        quiz: [
          {
            text: "Is een fietser een bestuurder volgens de wegcode?",
            explanation:
              "Ja. Een bestuurder is iedereen die een voertuig leidt; een fiets is een voertuig, dus een fietser is een bestuurder. Een voetganger is geen bestuurder.",
            options: [
              { text: "Ja, een fietser is een bestuurder", correct: true },
              { text: "Neen, een fietser is een voetganger" },
              { text: "Enkel op het fietspad" },
              { text: "Enkel buiten de bebouwde kom" },
            ],
          },
        ],
      },
      {
        heading: "Dubbele voorzichtigheid tegenover zwakke weggebruikers",
        body:
          "Als automobilist moet je **dubbel voorzichtig** zijn tegenover zwakke weggebruikers. Dat betekent concreet:\n\n- je past je snelheid aan en blijft alert in de buurt van fietsers en voetgangers;\n- je houdt voldoende **zijdelingse afstand** bij het inhalen van een fietser: minstens **1 meter** binnen de bebouwde kom en minstens **1,5 meter** erbuiten;\n- je houdt rekening met onverwacht gedrag (een kind dat plots de straat op loopt, een fietser die uitwijkt voor een put);\n- je let extra op bij het **afslaan**: bij het rechts afslaan kan je een fietser in je dode hoek over het hoofd zien.\n\nDe gedachte achter deze regels is dat een fout van een zwakke weggebruiker veel ernstiger gevolgen heeft dan een fout van een automobilist met carrosserie, gordel en airbags.",
        quiz: [
          {
            text: "Hoeveel zijdelingse afstand houd je minstens bij het inhalen van een fietser buiten de bebouwde kom?",
            explanation:
              "Buiten de bebouwde kom houd je minstens 1,5 meter afstand; binnen de bebouwde kom minstens 1 meter.",
            options: [
              { text: "1,5 meter", correct: true },
              { text: "0,5 meter" },
              { text: "1 meter" },
              { text: "3 meter" },
            ],
          },
        ],
      },
      {
        heading: "Voetgangers en oversteekplaatsen",
        body:
          "Voetgangers stappen in principe op het trottoir of, bij gebrek daaraan, op een begaanbare berm. Is er geen van beide, dan mogen ze op de rand van de rijbaan stappen — buiten de bebouwde kom bij voorkeur **links**, zodat ze het tegemoetkomend verkeer zien aankomen.\n\nOm over te steken moeten voetgangers de **oversteekplaats** (zebrapad) gebruiken als die zich op minder dan ongeveer 30 meter bevindt.\n\nVoor jou als bestuurder gelden duidelijke plichten:\n\n- nadert een voetganger een oversteekplaats of staat hij duidelijk te wachten om over te steken, dan moet je hem **laten oversteken** en zo nodig **stoppen**;\n- voetgangers die al aan het oversteken zijn, hebben **altijd voorrang**;\n- je mag **niet inhalen** vlak vóór een oversteekplaats, want zo ontneem je jezelf en anderen het zicht op overstekende voetgangers.\n\nHet niet verlenen van voorrang aan een overstekende voetganger is een zware fout.",
        imageUrl: sign("F49"),
        imageAlt: "Bord F49 — oversteekplaats voor voetgangers",
        quiz: [
          {
            text: "Een voetganger staat duidelijk te wachten aan een zebrapad. Wat doe je?",
            explanation:
              "Je moet hem laten oversteken en zo nodig stoppen. Voetgangers die oversteken of dat duidelijk willen doen op een oversteekplaats, hebben voorrang.",
            isSevere: true,
            options: [
              { text: "Vertragen en hem laten oversteken, zo nodig stoppen", correct: true },
              { text: "Snel doorrijden vóór hem" },
              { text: "Toeteren zodat hij wacht" },
              { text: "Enkel stoppen buiten de bebouwde kom" },
            ],
          },
        ],
      },
      {
        heading: "Fietsers en bromfietsers",
        body:
          "Fietsers volgen het fietspad als dat berijdbaar is en aan hun rechterkant ligt. Waar geen fietspad is, rijden ze op de rijbaan, zo veel mogelijk rechts.\n\nEnkele regels die je als automobilist moet kennen:\n\n- fietsers mogen **met twee naast elkaar** rijden, behalve wanneer kruisen daardoor onmogelijk wordt; buiten de bebouwde kom moeten ze achter elkaar gaan rijden zodra er tegenliggers naderen;\n- aan een **fietsoversteek** (bord F50) laat je overstekende fietsers en bromfietsers veilig oversteken; zij naderen sneller dan voetgangers, dus kijk goed;\n- waar het bord **B22** staat, mag een fietser bij een rood of oranje licht toch **rechts afslaan** na voorrang te verlenen; verwacht dit dus;\n- **bromfietsen** worden ingedeeld in klasse A (max. 25 km/u) en klasse B (max. 45 km/u); afhankelijk van de plaats en borden moeten of mogen zij het fietspad gebruiken.\n\nGeef fietsers altijd de ruimte en tijd die ze nodig hebben; reken nooit op het feit dat zij voor jou zullen wijken.",
      },
      {
        heading: "Bussen, trams en prioritaire voertuigen",
        body:
          "Sommige voertuigen hebben bijzondere rechten.\n\n**Lijnbussen**: binnen de bebouwde kom moet je een bus van het geregeld vervoer die zijn richtingaanwijzer gebruikt om van een halte weg te rijden, laten vertrekken. Je vertraagt en stopt zo nodig. Buiten de bebouwde kom heeft de bus die voorrang niet.\n\n**Trams**: een tram heeft door zijn lange remafstand en vaste sporen een bevoorrechte positie. Je hindert nooit een tram en geeft hem in veel situaties voorrang. Een tram mag je in principe **rechts** inhalen (omdat hij op de sporen in het midden of links rijdt). Stopt een tram aan een halte zonder verhoogd perron en stappen er reizigers uit, dan moet je stoppen om hen veilig naar het trottoir te laten gaan.\n\n**Prioritaire voertuigen** (ziekenwagen, brandweer, politie) met **blauw zwaailicht én sirene** zijn in opdracht. Je moet er **onmiddellijk plaats voor maken**: ga aan de kant, stop zo nodig, en hou je aan een vrije doorgang — desnoods door (veilig) tot stilstand te komen vóór een streep. Je mag een prioritair voertuig in functie nooit inhalen of van dichtbij volgen.",
        quiz: [
          {
            text: "Een ziekenwagen nadert met zwaailicht en sirene. Wat is je plicht?",
            explanation:
              "Je maakt onmiddellijk plaats en stopt zo nodig, zodat het prioritaire voertuig vlot kan doorrijden. Je mag het niet volgen of inhalen.",
            isSevere: true,
            options: [
              { text: "Onmiddellijk plaats maken en zo nodig stoppen", correct: true },
              { text: "Versnellen om uit de weg te zijn" },
              { text: "Gewoon je weg vervolgen" },
              { text: "Er vlak achter blijven rijden" },
            ],
          },
        ],
      },
      {
        heading: "Gemachtigde opzichters en groepen",
        body:
          "Een **gemachtigd opzichter** (vaak herkenbaar aan een fluovest en een rood-met-wit bordje) mag het verkeer stilleggen om bijvoorbeeld kinderen aan een school veilig te laten oversteken. Steekt hij zijn bordje op of geeft hij een stopteken, dan **moet je stoppen** — hij heeft daarvoor de wettelijke bevoegdheid.\n\nJe mag bepaalde **groepen** niet doorsnijden of hinderen:\n\n- een **rij voetgangers** in groep (bv. een schoolklas);\n- een **stoet**, betoging of processie;\n- een **militaire colonne** of een groep wielertoeristen onder begeleiding.\n\nWacht in dat geval tot de groep volledig voorbij is of tot een begeleider je doorlaat. Het verkeer veilig en vlot houden voor groepen kwetsbare gebruikers heeft voorrang op je eigen tijdwinst.",
        quiz: [
          {
            text: "Een gemachtigd opzichter steekt zijn bordje op om kinderen te laten oversteken. Wat doe je?",
            explanation:
              "Je moet stoppen. Een gemachtigd opzichter heeft de bevoegdheid om het verkeer stil te leggen voor overstekende kinderen.",
            isSevere: true,
            options: [
              { text: "Stoppen en de kinderen laten oversteken", correct: true },
              { text: "Doorrijden, hij heeft geen gezag" },
              { text: "Toeteren en traag voorbijrijden" },
              { text: "Enkel stoppen als er een agent bij staat" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 3. DE AUTO
  {
    category: "de-auto",
    slug: "de-auto",
    title: "De auto: techniek, verlichting en documenten",
    intro:
      "Een veilige rit begint bij een voertuig dat in orde is en bij een bestuurder die zijn wagen kent. In dit hoofdstuk leer je welke documenten je verplicht bij je moet hebben, hoe je je verlichting correct gebruikt in alle omstandigheden, welke technische eisen gelden voor banden, remmen en zichtbaarheid, en welke veiligheidsuitrusting verplicht is. Ook de regels rond gordeldracht, kinderzitjes en het gebruik van de gsm komen aan bod — kleine zaken die in het echte examen vaak terugkomen.",
    estMinutes: 19,
    order: 1,
    sections: [
      {
        heading: "Boorddocumenten",
        body:
          "Tijdens het rijden moet je een aantal documenten kunnen voorleggen bij een politiecontrole. Voor een gewone personenwagen zijn dat:\n\n- je **rijbewijs** (geldig en van de juiste categorie, hier categorie B);\n- je **identiteitskaart**;\n- het **inschrijvingsbewijs** van het voertuig (het 'kentekenbewijs');\n- het **keuringsbewijs** en het gelijkvormigheidsattest, voor zover het voertuig keuringsplichtig is;\n- het **verzekeringsbewijs** (de groene kaart of het verzekeringsattest).\n\nDe aankoopfactuur van de wagen hoef je níét bij je te hebben. Zorg dat je documenten geldig zijn: rijden met een vervallen keuring of zonder geldige verzekering levert zware problemen op.",
        quiz: [
          {
            text: "Welk document moet je NIET noodzakelijk bij je hebben tijdens het rijden?",
            explanation:
              "De aankoopfactuur hoef je niet bij je te hebben. Rijbewijs, identiteitskaart, inschrijvingsbewijs, keuringsbewijs en verzekeringsbewijs wel.",
            options: [
              { text: "De aankoopfactuur van de wagen", correct: true },
              { text: "Het rijbewijs" },
              { text: "Het inschrijvingsbewijs" },
              { text: "Het verzekeringsbewijs" },
            ],
          },
        ],
      },
      {
        heading: "De technische keuring",
        body:
          "De **technische keuring** controleert of je voertuig veilig en milieuvriendelijk is. Voor een gewone personenwagen geldt:\n\n- de **eerste keuring** is verplicht na **4 jaar**;\n- daarna moet de wagen **jaarlijks** worden gekeurd;\n- bij **verkoop** aan een particulier is een keuring 'verkoop' verplicht.\n\nNa de keuring krijg je een keuringsbewijs en een vignet. Een wagen die niet (tijdig) gekeurd is of een rood keuringsbewijs heeft, mag in principe niet of slechts beperkt op de openbare weg.\n\nDe keuring betekent niet dat je tussendoor niets hoeft te doen: jij blijft als bestuurder verantwoordelijk om je voertuig in goede staat te houden (banden, verlichting, remmen, ruitenwissers ...).",
      },
      {
        heading: "Verlichting correct gebruiken",
        body:
          "Je verlichting dient om te **zien** en om **gezien te worden**. Je moet de juiste lichten op het juiste moment gebruiken:\n\n- **Standlichten (breedtelichten)**: kleine lichten om het voertuig zichtbaar te maken bij stilstand of schemering.\n- **Dimlichten (kruislichten)**: je gebruikt ze 's nachts, bij verminderd zicht (regen, mist, sneeuw) en in tunnels. Ze verlichten de weg zonder anderen te verblinden.\n- **Grootlichten (wegcode/grote lichten)**: enkel te gebruiken als je niemand verblindt. Je dooft ze tijdig voor tegenliggers en voor een voorligger die je oprijdt.\n- **Mistlicht vooraan**: toegelaten bij mist, sneeuw of hevige regen.\n- **Mistlicht achteraan**: enkel bij **dichte mist of zware sneeuw met zicht onder ongeveer 100 meter**, anders verblind je het achterliggend verkeer.\n- **Dagrijlichten**: branden automatisch overdag en volstaan bij goed zicht; ze vervangen de dimlichten niet bij slecht zicht of duisternis.\n- **Gevarenlichten** (alle knipperlichten samen): om te waarschuwen bij panne, bij het einde van een file of bij traag rijden door een defect.",
        imageUrl: sign("A33"),
        imageAlt: "Gevaarsbord (verkeerslichten)",
        quiz: [
          {
            text: "Wanneer mag je je mistlicht achteraan gebruiken?",
            explanation:
              "Enkel bij dichte mist of zware sneeuw waarbij het zicht minder dan ongeveer 100 meter bedraagt. Anders verblind je het achterliggend verkeer.",
            options: [
              { text: "Bij dichte mist of zware sneeuw (zicht < 100 m)", correct: true },
              { text: "Altijd 's nachts" },
              { text: "Bij lichte regen" },
              { text: "Wanneer je geparkeerd staat" },
            ],
          },
          {
            text: "Wat doe je met je grootlichten als er een tegenligger nadert?",
            explanation:
              "Je dooft (dimt) je grootlichten tijdig zodat je de tegenligger niet verblindt. Verblinding kan tot ernstige ongevallen leiden.",
            isSevere: true,
            options: [
              { text: "Tijdig dimmen naar dimlichten", correct: true },
              { text: "Aanhouden, hij dimt wel" },
              { text: "Knipperen met de grootlichten" },
              { text: "De lichten volledig doven" },
            ],
          },
        ],
      },
      {
        heading: "Banden, remmen en hulpsystemen",
        body:
          "De **banden** zijn je enige contact met de weg. Daarom gelden er minimumeisen:\n\n- de **profieldiepte** moet over de hele omtrek en breedte minstens **1,6 mm** bedragen;\n- de **bandenspanning** moet correct zijn: een te lage spanning verhoogt het verbruik en de slijtage, verlengt de remafstand en vergroot het risico op een klapband;\n- in de winter geven winterbanden meer grip bij koude, sneeuw en ijzel.\n\nModerne wagens hebben **hulpsystemen** die je veiligheid verhogen:\n\n- **ABS** (antiblokkeersysteem) voorkomt dat de wielen blokkeren bij hard remmen, zodat je tijdens een noodstop kunt blijven sturen;\n- **ESP/ESC** (stabiliteitscontrole) helpt slippen voorkomen;\n- deze systemen zijn een hulp, geen vrijbrief: bij gladheid of hoge snelheid blijven de natuurkundige grenzen gelden.",
        quiz: [
          {
            text: "Wat is de wettelijke minimale profieldiepte van autobanden?",
            explanation:
              "De profieldiepte moet minstens 1,6 mm bedragen over de hele omtrek en breedte. Te gladde banden verlengen de remafstand sterk, zeker bij nat wegdek.",
            options: [
              { text: "1,6 mm", correct: true },
              { text: "0,5 mm" },
              { text: "3 mm" },
              { text: "5 mm" },
            ],
          },
        ],
      },
      {
        heading: "Inzittenden beveiligen: gordel en kinderzitjes",
        body:
          "De **veiligheidsgordel** is een van de doeltreffendste manieren om letsel bij een ongeval te voorkomen. Hij houdt je op je plaats en voorkomt dat je tegen het stuur of de ruit slaat of uit het voertuig wordt geslingerd.\n\nDe regels:\n\n- **alle inzittenden**, zowel voor- als achteraan, moeten de gordel dragen als die aanwezig is;\n- de **bestuurder** is verantwoordelijk voor het correct beveiligen van passagiers **jonger dan 18 jaar**;\n- de gordel werkt samen met de **airbag** — een airbag zonder gordel is zelfs gevaarlijk.\n\nKinderen kleiner dan **135 cm** moeten worden vervoerd in een **kinderbeveiligingssysteem** dat aangepast is aan hun lengte en gewicht (maxicosi, kinderzitje of zitverhoger). Plaats een kinderzitje met de rug naar de rijrichting nooit op een passagiersplaats met een actieve frontale airbag.",
        quiz: [
          {
            text: "Tot welke lichaamslengte moeten kinderen in een aangepast kinderbeveiligingssysteem zitten?",
            explanation:
              "Kinderen kleiner dan 135 cm moeten in een aan hun maat aangepast kinderzitje of zitverhoger worden vervoerd.",
            options: [
              { text: "Kinderen kleiner dan 135 cm", correct: true },
              { text: "Enkel baby's" },
              { text: "Tot 6 jaar, ongeacht de lengte" },
              { text: "Er geldt geen verplichting" },
            ],
          },
        ],
      },
      {
        heading: "Verplichte uitrusting, gsm en zichtbaarheid",
        body:
          "Je moet bepaalde **uitrusting** aan boord hebben:\n\n- een **gevarendriehoek** (om het achteropkomend verkeer te waarschuwen bij een stilstaand voertuig);\n- een **brandblusser**;\n- een **verbandkist** (EHBO-kit);\n- een **fluohesje**, dat je aantrekt vóór je uitstapt bij een panne of ongeval op de (auto)snelweg.\n\nHet vasthouden van een **gsm** tijdens het rijden is verboden — het is een overtreding van de derde graad. Gebruik een handenvrij systeem of stop op een veilige plaats. Afleiding achter het stuur is een van de belangrijkste oorzaken van ongevallen.\n\nZorg ten slotte dat je altijd **goed zicht** hebt en **goed gezien** wordt: een propere voorruit en spiegels, werkende ruitenwissers, schone lichten en nummerplaten, en in de winter een volledig ijs- en sneeuwvrije ruit voor je vertrekt.",
        quiz: [
          {
            text: "Onder welke categorie valt rijden met de gsm in de hand?",
            explanation:
              "Een gsm in de hand houden tijdens het rijden brengt de verkeersveiligheid rechtstreeks in gevaar en is een overtreding van de derde graad.",
            options: [
              { text: "Een overtreding van de derde graad", correct: true },
              { text: "Geen overtreding" },
              { text: "Een overtreding van de eerste graad" },
              { text: "Enkel verboden voor beginnende bestuurders" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 4. SNELHEID
  {
    category: "snelheid",
    slug: "de-snelheid",
    title: "De snelheid",
    intro:
      "Snelheid is een van de belangrijkste factoren in het verkeer: ze bepaalt hoeveel tijd je hebt om te reageren, hoe lang je remafstand is en hoe ernstig een ongeval afloopt. In dit hoofdstuk leer je de wettelijke maximumsnelheden per wegtype en gewest, maar vooral ook het begrip 'aangepaste snelheid': rijden volgens de omstandigheden. We bekijken reactieafstand, remafstand en stopafstand, de invloed van weer en wegdek, en enkele bijzondere regels zoals de snelheidsbeperking bij dichte mist.",
    estMinutes: 18,
    order: 1,
    sections: [
      {
        heading: "Maximumsnelheden per wegtype",
        body:
          "Voor een personenauto gelden in België deze algemene maximumsnelheden (tenzij borden iets anders aangeven):\n\n- **Bebouwde kom**: 50 km/u (in Brussel standaard 30 km/u).\n- **Buiten de bebouwde kom**: 70 km/u in Vlaanderen, 90 km/u in Wallonië.\n- **Autosnelweg**: 120 km/u, met een minimum van 70 km/u op de stroken waar normaal sneller wordt gereden.\n- **Autoweg**: in principe 120 km/u.\n- **Zone 30 / schoolomgeving**: 30 km/u.\n- **Woonerf**: 20 km/u (stapvoets).\n\nOnthoud de gulden regel: een **verkeersbord heeft altijd voorrang** op deze algemene regels. Staat er een bord C43 met '50' buiten de bebouwde kom, dan rij je 50, ook al zou daar normaal 70 of 90 gelden.",
        imageUrl: sign("C43"),
        imageAlt: "Bord C43 — maximumsnelheid",
        quiz: [
          {
            text: "Wat is in Vlaanderen de standaard maximumsnelheid buiten de bebouwde kom?",
            explanation:
              "In Vlaanderen geldt sinds 2017 standaard 70 km/u buiten de bebouwde kom, tenzij een bord een andere snelheid aangeeft. In Wallonië is dat 90 km/u.",
            options: [
              { text: "70 km/u", correct: true },
              { text: "90 km/u" },
              { text: "50 km/u" },
              { text: "120 km/u" },
            ],
          },
        ],
      },
      {
        heading: "Aangepaste snelheid: rijden volgens de omstandigheden",
        body:
          "De wettelijke maximumsnelheid is een **bovengrens**, geen verplichting. Je moet je snelheid voortdurend **aanpassen** aan de omstandigheden, en die snelheid kan veel lager liggen dan het maximum.\n\nFactoren waarmee je rekening houdt:\n\n- het **weer** en het **zicht** (regen, mist, sneeuw, fel tegenlicht);\n- de **toestand van de weg** (nat, glad, ongelijk, bladeren, grind);\n- de **verkeersdrukte** en de aanwezigheid van zwakke weggebruikers (school, markt, woonbuurt);\n- de **toestand van je voertuig en je lading**;\n- je **eigen toestand** (vermoeidheid, concentratie).\n\nDe kernregel luidt: je moet altijd kunnen **stoppen vóór een hindernis die je kunt voorzien**. Kan je dat bij de gereden snelheid niet, dan rij je te snel — ongeacht wat het bord toelaat.",
        quiz: [
          {
            text: "Wat betekent 'aangepaste snelheid'?",
            explanation:
              "Je snelheid afstemmen op de omstandigheden (weer, zicht, verkeer, wegdek, je voertuig), zodat je altijd kunt stoppen voor een voorzienbare hindernis — ook al rij je onder het wettelijke maximum.",
            options: [
              { text: "Je snelheid afstemmen op de omstandigheden, ook onder het maximum", correct: true },
              { text: "Altijd exact het maximum rijden" },
              { text: "Zo traag mogelijk rijden" },
              { text: "Enkel de borden volgen, het weer telt niet" },
            ],
          },
        ],
      },
      {
        heading: "Reactieafstand, remafstand en stopafstand",
        body:
          "Wanneer je plots moet stoppen, leg je nog een hele afstand af. Die **stopafstand** bestaat uit twee delen:\n\n- de **reactieafstand**: de afstand die je aflegt tijdens je reactietijd (gemiddeld ongeveer 1 seconde) vóór je begint te remmen. Bij 50 km/u leg je in 1 seconde al zo'n 14 meter af.\n- de **remafstand**: de afstand die je aflegt tijdens het eigenlijke remmen.\n\n**Stopafstand = reactieafstand + remafstand.**\n\nBelangrijk: de remafstand neemt toe met het **kwadraat** van de snelheid. Als je snelheid **verdubbelt**, wordt de remafstand ongeveer **vier keer** zo lang. Bij vermoeidheid, alcohol of afleiding wordt je reactietijd langer, en bij een nat of glad wegdek wordt de remafstand veel langer.",
        quiz: [
          {
            text: "Wat gebeurt er ongeveer met je remafstand als je snelheid verdubbelt?",
            explanation:
              "De remafstand neemt toe met het kwadraat van de snelheid: bij dubbele snelheid wordt hij ongeveer vier keer zo lang.",
            options: [
              { text: "Hij wordt ongeveer 4 keer langer", correct: true },
              { text: "Hij wordt 2 keer langer" },
              { text: "Hij blijft gelijk" },
              { text: "Hij wordt korter" },
            ],
          },
          {
            text: "Waaruit bestaat de totale stopafstand?",
            explanation:
              "De stopafstand is de som van de reactieafstand (tijdens je reactietijd) en de remafstand (tijdens het remmen).",
            options: [
              { text: "Reactieafstand + remafstand", correct: true },
              { text: "Enkel de remafstand" },
              { text: "Enkel de reactieafstand" },
              { text: "De afstand tot het volgende bord" },
            ],
          },
        ],
      },
      {
        heading: "Volgafstand en de 2-secondenregel",
        body:
          "Om bij plots remmen niet op je voorligger te botsen, hou je voldoende **volgafstand**. Een eenvoudige vuistregel is de **2-secondenregel**:\n\n- kies een vast punt langs de weg (een paal, een bord);\n- wanneer je voorligger dat punt passeert, tel je 'eenentwintig, tweeëntwintig';\n- bereik jij het punt vóór je klaar bent met tellen, dan rij je te dicht.\n\nBij **slecht weer** (regen, mist, sneeuw) verdubbel je die afstand naar minstens 3 à 4 seconden, omdat je remafstand dan veel langer is. Op de autosnelweg helpt afstand houden ook om kettingbotsingen te vermijden.\n\nAbnormaal **traag rijden** zonder reden, waardoor je het verkeer hindert, is trouwens óók verboden: je verstoort dan de normale doorstroming en lokt gevaarlijke inhaalmanoeuvres uit.",
        quiz: [
          {
            text: "Welke volgafstand wordt in goede omstandigheden aangeraden?",
            explanation:
              "De 2-secondenregel: hou minstens 2 seconden afstand tot je voorligger. Bij slecht weer verhoog je dat naar 3 à 4 seconden.",
            options: [
              { text: "Minstens 2 seconden", correct: true },
              { text: "Een halve seconde" },
              { text: "Zo dicht mogelijk om file te vermijden" },
              { text: "Afstand maakt niet uit" },
            ],
          },
        ],
      },
      {
        heading: "Bijzondere snelheidsregels",
        body:
          "Naast de algemene maxima zijn er bijzondere situaties:\n\n- Bij **dichte mist, zware sneeuw of hevige regen** met een zicht van **minder dan 100 meter** mag je nooit sneller dan **50 km/u** rijden, op géén enkel wegtype — ook niet op de autosnelweg.\n- Op de **autosnelweg** geldt een **minimumsnelheid** van 70 km/u op de stroken waar normaal sneller wordt gereden; te traag rijden is er gevaarlijk.\n- In een **schoolomgeving** geldt meestal 30 km/u; rij er extra waakzaam, want kinderen kunnen plots oversteken.\n- Vanaf **1 september 2026** geldt aan elke **verhoogde inrichting** (verkeersdrempel, plateau) automatisch 30 km/u, ook zonder zonebord.\n\nVoor **beginnende bestuurders** gelden in België dezelfde maximumsnelheden als voor anderen, maar wel strengere sancties bij overtredingen.",
        quiz: [
          {
            text: "Bij dichte mist met een zicht van ongeveer 50 meter: welke snelheid mag je niet overschrijden?",
            explanation:
              "Bij zicht onder 100 meter (dichte mist, zware sneeuw, hevige regen) mag je nooit sneller dan 50 km/u rijden, ongeacht het wegtype.",
            isSevere: true,
            options: [
              { text: "50 km/u", correct: true },
              { text: "70 km/u" },
              { text: "90 km/u" },
              { text: "120 km/u" },
            ],
          },
        ],
      },
    ],
  },
];
