import type { LessonSeed } from "./types";

const sign = (code: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    `Belgian road sign ${code}.svg`
  )}`;

// Hoofdstukken 5–8: Kruisen en inhalen, De voorrang, Waar rijden, Stilstaan en parkeren.
export const lessons2: LessonSeed[] = [
  // ============================================================= 5. KRUISEN EN INHALEN
  {
    category: "kruisen-inhalen",
    slug: "kruisen-en-inhalen",
    title: "Kruisen en inhalen",
    intro:
      "Kruisen (een tegenligger passeren) en inhalen (een voorganger voorbijsteken) zijn manoeuvres waarbij voertuigen elkaar van dichtbij passeren. Inhalen is zelfs een van de gevaarlijkste handelingen in het verkeer, omdat je daarbij vaak de rijstrook van het tegemoetkomend verkeer gebruikt. In dit hoofdstuk leer je langs welke kant je inhaalt en wanneer er uitzonderingen gelden, waar inhalen verboden is, hoe je het manoeuvre veilig uitvoert, en hoe je correct kruist op smalle wegen.",
    estMinutes: 17,
    order: 1,
    sections: [
      {
        heading: "Kruisen: tegenliggers veilig passeren",
        body:
          "**Kruisen** is een tegenligger passeren die uit de tegenovergestelde richting komt. De basisregels zijn eenvoudig maar belangrijk:\n\n- je houdt voldoende **rechts**;\n- je vermindert zo nodig je **snelheid**;\n- je houdt een veilige **zijdelingse afstand**, zeker tegenover fietsers en voetgangers.\n\nWanneer de doorgang **te smal** is om vlot te kruisen (bijvoorbeeld door een geparkeerde wagen of een versmalling), geldt een duidelijke regel: de bestuurder aan wiens kant de **hindernis** staat, moet wachten en het tegemoetkomend verkeer laten passeren.\n\nBij sommige versmallingen regelen borden de voorrang: bord **B19** betekent dat jij voorrang moet verlenen aan tegenliggers, bord **B21** betekent dat jij voorrang hebt.",
        imageUrl: sign("B19"),
        imageAlt: "Bord B19 — voorrang verlenen aan tegenliggers bij versmalling",
        quiz: [
          {
            text: "Op een smalle weg staat aan jouw kant een geparkeerde auto, en er komt een tegenligger. Wie wacht?",
            explanation:
              "De bestuurder aan wiens kant de hindernis (de geparkeerde auto) staat, moet wachten en de tegenligger laten passeren.",
            options: [
              { text: "Jij, want de hindernis staat aan jouw kant", correct: true },
              { text: "De tegenligger" },
              { text: "De snelste van de twee" },
              { text: "De grootste wagen" },
            ],
          },
        ],
      },
      {
        heading: "Inhalen: langs links, met uitzonderingen",
        body:
          "Je haalt in principe **langs links** in. Toch zijn er enkele belangrijke **uitzonderingen** waarbij je rechts inhaalt of voorbijrijdt:\n\n- een bestuurder die **links wil afslaan** en zich al naar het midden van de rijbaan heeft begeven, haal je **langs rechts** in;\n- een **tram** rijd je in principe **rechts** voorbij, omdat hij midden of links op de rijbaan rijdt;\n- op een rijbaan met **meerdere rijstroken in dezelfde richting binnen de bebouwde kom** mag je in de rechterstrook sneller rijden dan in de linkerstrook wanneer de stroken vol staan — dat geldt niet als 'inhalen'.\n\nVoor je begint in te halen, moet je zeker zijn dat je de **hele manoeuvre veilig kunt voltooien** zonder tegenliggers te hinderen en zonder gevaar bij het terugkeren naar rechts.",
        quiz: [
          {
            text: "Een bestuurder vóór jou staat met zijn richtingaanwijzer naar links in het midden van de rijbaan om af te slaan. Hoe haal je hem in?",
            explanation:
              "Wie links wil afslaan en zich naar het midden heeft begeven, haal je uitzonderlijk langs rechts in.",
            options: [
              { text: "Langs rechts", correct: true },
              { text: "Langs links" },
              { text: "Je mag niet inhalen" },
              { text: "Je toetert en wacht" },
            ],
          },
        ],
      },
      {
        heading: "Het inhaalmanoeuvre stap voor stap",
        body:
          "Een veilig inhaalmanoeuvre verloopt in duidelijke stappen:\n\n- **Kijken**: controleer je spiegels en je **dode hoek**, en kijk of niemand jóu al aan het inhalen is.\n- **Aankondigen**: geef tijdig je **richtingaanwijzer** naar links aan.\n- **Uitwijken en inhalen**: trek vlot op, hou voldoende zijdelingse afstand (zeker bij fietsers) en blijf niet onnodig lang naast de ander hangen.\n- **Terugkeren**: keer **tijdig** en zonder de ingehaalde bestuurder te hinderen terug naar rechts, met je richtingaanwijzer naar rechts.\n\nWord je zelf ingehaald, dan **hou je rechts en versnel je niet**. Je laat de inhalende bestuurder vlot passeren. Versnellen om iemand het inhalen te beletten, is gevaarlijk en verboden.",
        quiz: [
          {
            text: "Je wordt ingehaald. Wat doe je?",
            explanation:
              "Je houdt zoveel mogelijk rechts en versnelt niet, zodat de inhalende bestuurder vlot en veilig kan passeren.",
            options: [
              { text: "Rechts houden en niet versnellen", correct: true },
              { text: "Versnellen om hem te beletten" },
              { text: "Naar links uitwijken" },
              { text: "Plots remmen" },
            ],
          },
        ],
      },
      {
        heading: "Waar inhalen verboden is",
        body:
          "Inhalen van een gespan of een voertuig met meer dan twee wielen is onder meer **verboden**:\n\n- vlak vóór en op een **oversteekplaats voor voetgangers**;\n- op een **overweg** (spoorwegovergang);\n- bij het bord **C35** (verboden in te halen) tot het einde van het verbod (C37);\n- in een **bocht** of op een **helling** wanneer je onvoldoende vrij zicht hebt;\n- wanneer je daarvoor een **doorlopende witte streep** zou moeten overschrijden;\n- wanneer je nadert tot een kruispunt waar je geen voorrang hebt.\n\nLet op de nuance: het inhaalverbod voor 'voertuigen met meer dan twee wielen' belet niet dat je een **fietser of bromfietser** mag inhalen, op voorwaarde dat je dat veilig en met voldoende afstand doet.\n\nInhalen via de **pechstrook** om een file voorbij te steken is verboden: de pechstrook is enkel voor noodgevallen.",
        imageUrl: sign("C35"),
        imageAlt: "Bord C35 — verboden in te halen",
        quiz: [
          {
            text: "Mag je inhalen vlak vóór een oversteekplaats voor voetgangers?",
            explanation:
              "Neen. Inhalen vlak vóór en op een oversteekplaats voor voetgangers is verboden, omdat je het zicht op overstekende voetgangers ontneemt. Dit kan een zware fout zijn.",
            isSevere: true,
            options: [
              { text: "Neen, dat is verboden", correct: true },
              { text: "Ja, als je snel genoeg bent" },
              { text: "Ja, buiten de bebouwde kom" },
              { text: "Ja, als er niemand staat te wachten" },
            ],
          },
          {
            text: "Mag je een file links inhalen door over de pechstrook te rijden?",
            explanation:
              "Neen, de pechstrook is uitsluitend voor noodgevallen. Erover rijden om een file in te halen is verboden en gevaarlijk.",
            isSevere: true,
            options: [
              { text: "Neen, de pechstrook is enkel voor noodgevallen", correct: true },
              { text: "Ja, bij file mag dat" },
              { text: "Ja, als je traag rijdt" },
              { text: "Ja, met je gevarenlichten aan" },
            ],
          },
        ],
      },
      {
        heading: "Bijzondere situaties bij kruisen en inhalen",
        body:
          "Enkele situaties verdienen extra aandacht:\n\n- Een **tram die stilstaat aan een halte** zonder verhoogd perron, terwijl reizigers in- of uitstappen: je moet **stoppen** zodat zij veilig naar het trottoir kunnen oversteken.\n- Een **prioritair voertuig** in functie (zwaailicht + sirene) haal je nooit in; je maakt er plaats voor en volgt het niet van dichtbij.\n- Bij **slecht zicht** (mist, duisternis, hevige regen) hou je je inhaalmanoeuvres tot een minimum, want je overziet de situatie onvoldoende.\n- Op wegen met **één rijstrook per richting** is geduld vaak de veiligste keuze: liever even achter een trager voertuig blijven dan een riskant inhaalmanoeuvre forceren.\n\nDe gouden regel blijft: bij de minste twijfel haal je **niet** in.",
        quiz: [
          {
            text: "Een tram staat stil aan een halte zonder verhoogd perron en reizigers stappen uit. Wat doe je?",
            explanation:
              "Je stopt om de uit- en instappende reizigers veilig te laten oversteken naar het trottoir.",
            isSevere: true,
            options: [
              { text: "Stoppen en de reizigers veilig laten oversteken", correct: true },
              { text: "Snel voorbij de tram rijden" },
              { text: "Toeteren en doorrijden" },
              { text: "Achteruitrijden" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 6. DE VOORRANG
  {
    category: "voorrang",
    slug: "de-voorrang",
    title: "De voorrang",
    intro:
      "Voorrangsregels bepalen wie als eerste mag op een kruispunt of in een conflictsituatie. Ze zijn essentieel om botsingen te vermijden, en fouten tegen de voorrang behoren tot de zwaarste fouten op het theorie-examen. In dit hoofdstuk leer je de basisregel (de voorrang van rechts), de juiste volgorde van de verschillende voorrangsregelingen, de betekenis van de verkeerslichten en voorrangsborden, en hoe je je gedraagt op een rotonde en bij het afslaan.",
    estMinutes: 20,
    order: 1,
    sections: [
      {
        heading: "De voorrang van rechts",
        body:
          "De **basisregel** in België is de **voorrang van rechts**: op een kruispunt verleen je voorrang aan **elke bestuurder die van rechts komt**, tenzij borden, wegmarkeringen of verkeerslichten iets anders bepalen.\n\nEnkele belangrijke punten:\n\n- de voorrang van rechts geldt ook tegenover **fietsers en bromfietsers** die van rechts komen — dat wordt op het examen vaak getest;\n- wie zijn voorrang **verliest** door een bord (bv. B1 'voorrang verlenen' of B5 'stop'), moet voorrang verlenen aan ál het kruisende verkeer, ook aan dat wat van links komt;\n- de voorrang van rechts geldt **niet** voor een bestuurder die uit een **verboden rijrichting** komt of een onreglementair manoeuvre uitvoert — maar bij twijfel blijf je altijd voorzichtig.\n\nHet niet verlenen van voorrang van rechts is een klassieke en zware fout.",
        imageUrl: sign("B17"),
        imageAlt: "Bord B17 — kruispunt met voorrang van rechts",
        quiz: [
          {
            text: "Je nadert een kruispunt zonder borden of verkeerslichten. Van rechts komt een fietser. Wie heeft voorrang?",
            explanation:
              "Zonder borden of lichten geldt de voorrang van rechts, ook tegenover fietsers. De fietser die van rechts komt, heeft voorrang.",
            isSevere: true,
            options: [
              { text: "De fietser die van rechts komt", correct: true },
              { text: "Jij, want je bestuurt een auto" },
              { text: "Wie het eerst toetert" },
              { text: "Jij, want je rijdt rechtdoor" },
            ],
          },
        ],
      },
      {
        heading: "De volgorde van de voorrangsregelingen",
        body:
          "Soms zijn er meerdere voorrangsaanwijzingen tegelijk. Dan geldt deze vaste **rangorde** (van sterkst naar zwakst):\n\n- **1. Bevelen van een bevoegd persoon** (een politieagent of gemachtigd opzichter die het verkeer regelt);\n- **2. Verkeerslichten**;\n- **3. Verkeersborden** (de voorrangsborden);\n- **4. De verkeersregels** zelf (zoals de voorrang van rechts).\n\nPraktisch betekent dit: een agent die het verkeer regelt, gaat vóór op een rood licht; een verkeerslicht gaat vóór op een voorrangsbord; en een voorrangsbord gaat vóór op de algemene voorrang van rechts.\n\nDeze hiërarchie onthouden helpt je in complexe situaties altijd de juiste beslissing nemen.",
        quiz: [
          {
            text: "Een verkeerslicht staat op rood, maar een politieagent gebaart je om door te rijden. Wat doe je?",
            explanation:
              "Bevelen van een bevoegd persoon staan bovenaan de rangorde en gaan vóór op verkeerslichten. Je volgt de agent en rijdt door.",
            options: [
              { text: "Je volgt de agent en rijdt door", correct: true },
              { text: "Je blijft staan, rood is rood" },
              { text: "Je negeert de agent" },
              { text: "Je wacht tot het licht groen wordt" },
            ],
          },
        ],
      },
      {
        heading: "De verkeerslichten",
        body:
          "De driekleurige verkeerslichten geef je nauwgezet op:\n\n- **Groen**: je mag doorrijden als de weg vrij is (je mag een kruispunt niet oprijden als je er niet over geraakt).\n- **Vast oranje-geel**: stoppen, tenzij je zo dicht genaderd bent dat je niet meer veilig kunt stoppen.\n- **Rood**: volledig stoppen aan de stopstreep.\n- **Knipperend oranje-geel**: vrije doorgang met **verhoogde voorzichtigheid**; de normale voorrangsregels (borden of voorrang van rechts) blijven gelden.\n\nBijzondere lichten:\n\n- een **groene pijl** laat je toe in die richting te rijden, ook als de andere lichten rood zijn, na voorrang te verlenen;\n- een **rood licht met een afzonderlijke groene pijl naar rechts** laat je toe rechts af te slaan na voorrang te verlenen aan andere weggebruikers, vooral voetgangers en fietsers;\n- aparte **fietslichten** en de borden B22/B23 laten fietsers onder voorwaarden toe af te slaan of door te rijden bij rood.",
        quiz: [
          {
            text: "Wat betekent een knipperend oranje-geel verkeerslicht?",
            explanation:
              "Vrije doorgang met verhoogde voorzichtigheid. De normale voorrangsregels (voorrang van rechts of de borden ter plaatse) blijven van toepassing.",
            options: [
              { text: "Vrije doorgang met verhoogde voorzichtigheid; normale regels gelden", correct: true },
              { text: "Je moet altijd stoppen" },
              { text: "Je hebt altijd voorrang" },
              { text: "Het licht is defect, negeer het" },
            ],
          },
        ],
      },
      {
        heading: "De voorrangsborden",
        body:
          "De voorrangsborden (type B) regelen wie voorgaat:\n\n- **B1** (omgekeerde driehoek): **voorrang verlenen**. Je geeft voorrang aan het kruisende verkeer, maar je moet niet noodzakelijk stoppen als de weg vrij is.\n- **B5** (achthoek, 'STOP'): **volledig stoppen** aan de stopstreep en voorrang verlenen, ook als de weg vrij lijkt.\n- **B9** (gele ruit): je rijdt op een **voorrangsweg**; het verkeer uit de zijwegen moet jou voorrang verlenen.\n- **B11**: **einde van de voorrangsweg**; vanaf dan geldt opnieuw de voorrang van rechts.\n- **B15** en **B17**: kruispunt waar je voorrang hebt, respectievelijk waar de voorrang van rechts geldt.\n\nLet op: ook al heb je voorrang (bv. op een voorrangsweg), blijf altijd waakzaam — niet iedereen respecteert de regels.",
        imageUrl: sign("B5"),
        imageAlt: "Bord B5 — stop",
        quiz: [
          {
            text: "Wat is verplicht bij het stopbord (B5)?",
            explanation:
              "Bij een stopbord moet je volledig tot stilstand komen aan de stopstreep en voorrang verlenen, ook als de weg vrij lijkt.",
            isSevere: true,
            options: [
              { text: "Volledig stoppen en voorrang verlenen", correct: true },
              { text: "Enkel vertragen" },
              { text: "Je hebt voorrang" },
              { text: "Toeteren en doorrijden" },
            ],
          },
        ],
      },
      {
        heading: "De rotonde",
        body:
          "Een **rotonde** wordt meestal aangeduid met het bord **D5** ('verplicht rond te rijden') samen met **B1** ('voorrang verlenen'). De regels:\n\n- bij het **oprijden** verleen je **voorrang aan de bestuurders die al op de rotonde rijden**;\n- je geeft **geen** richtingaanwijzer bij het oprijden;\n- je gebruikt je richtingaanwijzer naar **rechts** zodra je de rotonde wil **verlaten**;\n- voor de **eerste afrit** blijf je doorgaans op de rechterrijstrook.\n\nHou rekening met fietsers op of rond de rotonde: afhankelijk van de inrichting hebben zij soms voorrang. Rij rustig en kijk goed voor je invoegt of uitvoegt.",
        imageUrl: sign("D5"),
        imageAlt: "Bord D5 — verplicht rond te rijden (rotonde)",
        quiz: [
          {
            text: "Op een rotonde met bord B1: aan wie verleen je voorrang bij het oprijden?",
            explanation:
              "Je verleent voorrang aan de bestuurders die al op de rotonde rijden.",
            isSevere: true,
            options: [
              { text: "Aan de bestuurders die al op de rotonde rijden", correct: true },
              { text: "Aan wie de rotonde nog wil oprijden" },
              { text: "Aan niemand, je hebt voorrang" },
              { text: "Aan de bestuurder rechts buiten de rotonde" },
            ],
          },
        ],
      },
      {
        heading: "Afslaan en het kruispunt vrijhouden",
        body:
          "Bij het **afslaan** gelden bijkomende voorrangsregels:\n\n- wil je **links afslaan**, dan verleen je voorrang aan de **tegemoetkomende** bestuurders die rechtdoor rijden of rechts afslaan;\n- wil je **rechts of links afslaan**, dan verleen je voorrang aan de **voetgangers en fietsers** die de rijbaan oversteken die jij inrijdt;\n- komen twee tegenliggers elkaar tegen die **beiden links afslaan**, dan draaien ze in principe vóór elkaar (links om links), tenzij de plaatsgesteldheid het anders vereist.\n\nTen slotte: je mag een **kruispunt nooit blokkeren**. Zie je dat je er door file niet volledig overgeraakt, dan wacht je vóór het kruispunt — ook bij groen licht. Zo voorkom je dat je het kruisende verkeer vastzet wanneer jouw licht weer op rood springt.",
        quiz: [
          {
            text: "Je wil links afslaan op een kruispunt. Aan wie verleen je voorrang?",
            explanation:
              "Bij links afslaan verleen je voorrang aan de tegemoetkomende bestuurders die rechtdoor rijden of rechts afslaan (en aan overstekende voetgangers/fietsers).",
            isSevere: true,
            options: [
              { text: "Aan de tegenliggers die rechtdoor of rechts afslaan", correct: true },
              { text: "Aan niemand" },
              { text: "Enkel aan voertuigen achter jou" },
              { text: "Enkel buiten de bebouwde kom" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 7. WAAR RIJDEN
  {
    category: "waar-rijden",
    slug: "waar-rijden",
    title: "Waar rijden: plaats op de weg",
    intro:
      "Waar je je precies op de rijbaan plaatst, bepaalt mee hoe vlot en veilig het verkeer verloopt. In dit hoofdstuk leer je het principe van rechts houden, het juiste gebruik van rijstroken en inhaalstroken, hoe je correct invoegt via ritssluiting, en welke delen van de weg (fietspad, busstrook, verdrijvingsvlak, pechstrook) je niet mag gebruiken. Ook eenrichtingsverkeer en het oprijden van de autosnelweg komen aan bod.",
    estMinutes: 16,
    order: 1,
    sections: [
      {
        heading: "Rechts houden",
        body:
          "De grondregel is dat je **zo veel mogelijk rechts** rijdt. Concreet:\n\n- op een rijbaan met **één rijstrook per richting** blijf je rechts;\n- op een rijbaan met **meerdere rijstroken in dezelfde richting buiten de bebouwde kom** kies je de meest rechtse vrije strook; de linkse stroken dienen om in te halen of voor te sorteren;\n- na het **inhalen** keer je tijdig terug naar rechts, zonder de ingehaalde bestuurder te hinderen.\n\nBinnen de bebouwde kom, op een weg met meerdere rijstroken, mag je wel vrij de rijstrook kiezen die het best bij je bestemming past.\n\nHet doel van rechts houden is dubbel: het houdt de linkerstroken vrij voor wie sneller wil of moet, en het maakt het verkeer voorspelbaar.",
        quiz: [
          {
            text: "Waarvoor dient de linkerrijstrook op de autosnelweg?",
            explanation:
              "De linkerrijstroken dienen om in te halen. Daarna keer je terug naar de rechterrijstrook.",
            options: [
              { text: "Om in te halen", correct: true },
              { text: "Om rustig te blijven cruisen" },
              { text: "Om te parkeren" },
              { text: "Voor traag verkeer" },
            ],
          },
        ],
      },
      {
        heading: "Rijstroken kiezen, voorsorteren en ritssluiting",
        body:
          "Op kruispunten met meerdere rijstroken geven **voorselectiepijlen** op het wegdek aan welke richting je vanuit elke strook moet volgen. Een pijl naar links betekent dat die strook bestemd is om links af te slaan. Kies tijdig de juiste strook en wissel niet meer op het laatste moment.\n\nBij een **versmalling** waar een rijstrook ophoudt, pas je **ritssluiting** toe: je rijdt door tot het einde van je rijstrook en voegt **beurtelings** (om de beurt) in met de doorlopende strook. Dat houdt de doorstroming vlot en vermindert files. Forceer niet vooraan in te voegen en blokkeer de andere strook niet.\n\nVan rijstrook veranderen doe je altijd na controle van je spiegels en dode hoek, en met je richtingaanwijzer.",
        quiz: [
          {
            text: "Wat is 'ritssluiting' (ritsen)?",
            explanation:
              "Bij een versmalling rijd je door tot het einde van je rijstrook en voeg je beurtelings in met de andere strook. Dat bevordert de doorstroming.",
            options: [
              { text: "Beurtelings invoegen aan het einde van een versmallende strook", correct: true },
              { text: "Zo snel mogelijk vooraan invoegen" },
              { text: "Nooit invoegen" },
              { text: "Op de pechstrook gaan rijden" },
            ],
          },
        ],
      },
      {
        heading: "Fietspad, busstrook en bijzondere bedding",
        body:
          "Bepaalde delen van de weg zijn voorbehouden en mag je als automobilist niet gebruiken:\n\n- het **fietspad** (bord D7 of twee witte onderbroken strepen) is voor fietsers en sommige bromfietsers; je rijdt, stilstaat of parkeert er niet;\n- een **busstrook** is voorbehouden voor bussen (en soms taxi's of fietsers); je rijdt er niet op, behalve om af te slaan als dat uitdrukkelijk is toegelaten;\n- een **bijzonder overrijdbare bedding** (vaak voor bus of tram) mag je enkel in welbepaalde gevallen overrijden, bv. om af te slaan of een hindernis te ontwijken;\n- een **verdrijvingsvlak** (witte arcering met schuine strepen) scheidt verkeersstromen; je rijdt of staat er niet op.\n\nDe **pechstrook** ten slotte is enkel voor noodgevallen — niet om te rijden of een file in te halen.",
        imageUrl: sign("D7"),
        imageAlt: "Bord D7 — verplicht fietspad",
        quiz: [
          {
            text: "Mag je met de auto op een verdrijvingsvlak (witte schuine strepen) rijden of stilstaan?",
            explanation:
              "Neen. Een verdrijvingsvlak scheidt verkeersstromen; je mag er niet op rijden en er niet op stilstaan of parkeren.",
            options: [
              { text: "Neen, dat mag niet", correct: true },
              { text: "Ja, om te parkeren" },
              { text: "Ja, om in te halen" },
              { text: "Ja, bij file" },
            ],
          },
        ],
      },
      {
        heading: "Eenrichtingsverkeer en rijrichting",
        body:
          "Op een weg met **eenrichtingsverkeer** (bord **F19**) mag je enkel in de aangeduide richting rijden. Aan de andere kant van die straat staat bord **C1** ('verboden richting'): daar mag je niet inrijden, want je zou tegen de toegelaten richting in rijden.\n\nIn sommige eenrichtingsstraten geldt een uitzondering voor fietsers, aangeduid met een onderbord: zij mogen er in **beide richtingen** rijden (de zogenaamde 'fietsdoorsteek' of tegenrichting voor fietsers). Verwacht dus tegemoetkomende fietsers, ook in een straat die voor jou eenrichting is.\n\n**Keren** (een U-bocht maken) en **achteruitrijden** moeten veilig gebeuren en zijn op bepaalde plaatsen verboden — bijvoorbeeld op de autosnelweg, waar keren en achteruitrijden ten strengste verboden en levensgevaarlijk zijn.",
        imageUrl: sign("F19"),
        imageAlt: "Bord F19 — eenrichtingsweg",
        quiz: [
          {
            text: "Mag je achteruitrijden of keren op de autosnelweg?",
            explanation:
              "Neen. Achteruitrijden, keren of stilstaan op de autosnelweg is verboden en zeer gevaarlijk.",
            isSevere: true,
            options: [
              { text: "Neen, dat is verboden en zeer gevaarlijk", correct: true },
              { text: "Ja, als je je afrit miste" },
              { text: "Ja, op de pechstrook" },
              { text: "Ja, traag en voorzichtig" },
            ],
          },
        ],
      },
      {
        heading: "De autosnelweg op- en afrijden",
        body:
          "De autosnelweg heeft bijzondere regels voor het in- en uitvoegen:\n\n- je rijdt de autosnelweg op via de **versnellingsstrook** (oprit); daar pas je je snelheid aan die van het verkeer op de rijbaan aan en voeg je veilig in, zonder het doorgaand verkeer te dwingen af te remmen;\n- het verkeer op de autosnelweg moet het invoegen vergemakkelijken waar mogelijk, maar de invoegende bestuurder heeft géén absolute voorrang;\n- je verlaat de autosnelweg via de **vertragingsstrook** (afrit); je gaat tijdig naar rechts en remt pas af op de afrit zelf, niet op de doorgaande rijstrook.\n\nOp de autosnelweg gebruik je de linkerstroken enkel om in te halen en keer je daarna terug naar rechts. Hou steeds voldoende volgafstand, zeker bij hoge snelheid.",
        quiz: [
          {
            text: "Hoe rijd je correct de autosnelweg op?",
            explanation:
              "Via de versnellingsstrook pas je je snelheid aan die van het verkeer aan en voeg je veilig in, zonder het doorgaand verkeer te doen afremmen.",
            options: [
              { text: "Via de versnellingsstrook op snelheid komen en veilig invoegen", correct: true },
              { text: "Stoppen op het einde van de oprit en wachten" },
              { text: "Meteen naar de linkerstrook gaan" },
              { text: "Invoegen en het doorgaand verkeer doen remmen" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 8. STILSTAAN EN PARKEREN
  {
    category: "stilstaan-parkeren",
    slug: "stilstaan-en-parkeren",
    title: "Stilstaan en parkeren",
    intro:
      "Stilstaan en parkeren lijken hetzelfde, maar de wegcode maakt een belangrijk onderscheid dat bepaalt waar en hoe lang je je voertuig mag achterlaten. In dit hoofdstuk leer je het verschil tussen beide, de plaatsen waar stilstaan of parkeren verboden is, hoe je reglementair parkeert, en hoe je omgaat met de parkeerschijf (blauwe zone) en betalend parkeren. Ook de voorzorgen bij het verlaten van je voertuig komen aan bod.",
    estMinutes: 17,
    order: 1,
    sections: [
      {
        heading: "Het verschil tussen stilstaan en parkeren",
        body:
          "Het onderscheid is eenvoudig maar cruciaal:\n\n- **Stilstaan** is je voertuig gedurende de tijd die nodig is laten stoppen om **personen te laten in- of uitstappen** of om **goederen te laden of te lossen**. Je blijft als het ware ter plaatse bezig.\n- **Parkeren** is je voertuig langer laten stilstaan **om een andere reden** dan in/uitstappen of laden/lossen. Zodra je je voertuig achterlaat zonder die bezigheid, parkeer je.\n\nDit onderscheid bepaalt welke borden gelden. Bij een **parkeerverbod** (bord E1) mag je nog wel **stilstaan**; bij een verbod om **stil te staan én te parkeren** (bord E3) mag zelfs dat niet meer.",
        imageUrl: sign("E1"),
        imageAlt: "Bord E1 — parkeerverbod",
        quiz: [
          {
            text: "Wat mag je nog bij bord E1 (parkeerverbod)?",
            explanation:
              "Bij een parkeerverbod mag je nog stilstaan om personen te laten in- of uitstappen of om te laden en lossen. Parkeren mag niet.",
            options: [
              { text: "Stilstaan om in/uit te stappen of te laden/lossen", correct: true },
              { text: "De hele dag parkeren" },
              { text: "Niets, ook niet stilstaan" },
              { text: "Parkeren met parkeerschijf" },
            ],
          },
        ],
      },
      {
        heading: "Waar stilstaan en parkeren verboden is",
        body:
          "Je mag **niet stilstaan en niet parkeren**:\n\n- op een **fietspad**, een **trottoir** (tenzij toegelaten) of een **oversteekplaats**;\n- op minder dan **5 meter** vóór een oversteekplaats voor voetgangers;\n- op de rijbaan bij een gele doorlopende streep langs de rand;\n- op een plaats waar je het **zicht** op een verkeersbord of -licht belemmert.\n\nDaarnaast mag je **niet parkeren** (stilstaan mag soms nog wel):\n\n- op minder dan **1 meter** vóór of achter een ander geparkeerd voertuig als je het hindert, en zo dat je het verkeer hindert;\n- vóór de **inrit** van eigendommen, behalve voor je eigen inrit;\n- op plaatsen voorbehouden voor **personen met een handicap** zonder geldige kaart;\n- op een **kruispunt** of binnen **5 meter** ervan;\n- ter hoogte van een **bushalte** (binnen de gemarkeerde of wettelijke afstand).\n\nParkeer altijd zo dat anderen veilig kunnen passeren en dat je niemand hindert.",
        quiz: [
          {
            text: "Op hoeveel meter vóór een oversteekplaats voor voetgangers mag je niet parkeren of stilstaan?",
            explanation:
              "Je mag niet parkeren of stilstaan binnen de 5 meter vóór een oversteekplaats voor voetgangers, zodat het zicht vrij blijft.",
            options: [
              { text: "5 meter", correct: true },
              { text: "1 meter" },
              { text: "10 meter" },
              { text: "20 meter" },
            ],
          },
          {
            text: "Mag je parkeren op een plaats voor personen met een handicap zonder geldige kaart?",
            explanation:
              "Neen. Deze plaatsen zijn voorbehouden voor houders van een geldige parkeerkaart voor personen met een handicap.",
            options: [
              { text: "Neen, enkel met een geldige kaart", correct: true },
              { text: "Ja, als er plaats is" },
              { text: "Ja, kort even" },
              { text: "Ja, 's nachts" },
            ],
          },
        ],
      },
      {
        heading: "Reglementair parkeren",
        body:
          "Als je wél mag parkeren, doe je dat correct:\n\n- je parkeert **evenwijdig** met de rand van de rijbaan, in de **rijrichting**, behalve waar dwars- of schuinparkeren is aangeduid;\n- op een tweerichtingsweg parkeer je aan de **rechterkant**; aan de linkerkant parkeren mag enkel in **eenrichtingsstraten**;\n- je laat voldoende ruimte zodat het verkeer (en zeker fietsers) veilig kan passeren;\n- je belemmert geen inritten, garagepoorten of de doorgang van hulpdiensten.\n\nIn sommige straten geldt **beurtelings parkeren** (borden E5/E7): je parkeert dan de ene helft van de maand aan de ene kant, de andere helft aan de overkant. Let goed op de data op het bord.",
        quiz: [
          {
            text: "Aan welke kant parkeer je op een tweerichtingsweg?",
            explanation:
              "Op een tweerichtingsweg parkeer je aan de rechterkant, in de rijrichting. Aan de linkerkant parkeren mag enkel in eenrichtingsstraten.",
            options: [
              { text: "Aan de rechterkant, in de rijrichting", correct: true },
              { text: "Aan de linkerkant" },
              { text: "In het midden" },
              { text: "Op het trottoir" },
            ],
          },
        ],
      },
      {
        heading: "Blauwe zone, parkeerschijf en betalend parkeren",
        body:
          "In een **blauwe zone** mag je gratis parkeren voor een beperkte duur, op voorwaarde dat je je **parkeerschijf** gebruikt:\n\n- je plaatst de schijf zichtbaar achter de voorruit;\n- je zet de pijl op het **aankomstuur**, afgerond naar het volgende halfuur;\n- je respecteert de **toegelaten duur** (vaak twee uur).\n\nIn een **betalende zone** neem je een ticket aan de parkeerautomaat (of via een app) en leg je het zichtbaar achter de voorruit, of je registreert je nummerplaat. Ook hier respecteer je de toegelaten tijd.\n\nHou er rekening mee dat het niet (correct) gebruiken van de schijf of het overschrijden van de tijd een **parkeerretributie** of boete oplevert.",
        quiz: [
          {
            text: "Hoe gebruik je de parkeerschijf in een blauwe zone?",
            explanation:
              "Je plaatst de schijf zichtbaar achter de voorruit met de pijl op het aankomstuur (afgerond naar het volgende halfuur) en respecteert de toegelaten duur.",
            options: [
              { text: "Zichtbaar plaatsen op het aankomstuur en de duur respecteren", correct: true },
              { text: "Geen schijf nodig" },
              { text: "De schijf op de eindtijd zetten" },
              { text: "De schijf in het handschoenkastje leggen" },
            ],
          },
        ],
      },
      {
        heading: "Je voertuig veilig achterlaten",
        body:
          "Wanneer je je voertuig verlaat, neem je een aantal **voorzorgen**:\n\n- leg de **motor stil** en haal de sleutel uit het contact;\n- trek de **handrem** aan en zet een versnelling in (of stand P bij een automaat);\n- **vergrendel** het voertuig;\n- let bij het openen van je portier op naderende fietsers en ander verkeer (de 'Dutch reach': openen met de hand het verst van de deur, zodat je automatisch omkijkt).\n\nParkeer je op een **helling**, dan draai je bovendien je wielen zo dat de wagen bij wegrollen naar de stoeprand draait, en je laat een automaat in stand P met de handrem stevig aangetrokken.\n\nLaat ten slotte nooit kinderen of dieren achter in een afgesloten wagen bij warm weer — de temperatuur kan er snel levensgevaarlijk oplopen.",
        quiz: [
          {
            text: "Wat doe je met de motor wanneer je je geparkeerde voertuig verlaat?",
            explanation:
              "Je legt de motor stil, haalt de sleutel weg, trekt de handrem aan en vergrendelt het voertuig. De motor laten draaien bij een onbeheerd voertuig is niet toegelaten.",
            options: [
              { text: "De motor stilleggen en het voertuig beveiligen", correct: true },
              { text: "De motor laten draaien voor de verwarming" },
              { text: "De motor laten draaien, dat mag altijd" },
              { text: "De deuren openlaten" },
            ],
          },
        ],
      },
    ],
  },
];
