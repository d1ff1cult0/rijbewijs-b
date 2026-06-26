import type { LessonSeed } from "./types";

const sign = (code: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    `Belgian road sign ${code}.svg`
  )}`;

// Hoofdstukken 9–11: Varia, Overtredingen, Verkeersborden.
export const lessons3: LessonSeed[] = [
  // ============================================================= 9. VARIA
  {
    category: "varia",
    slug: "varia-alcohol-ehbo-milieu",
    title: "Varia: alcohol, drugs, EHBO en milieu",
    intro:
      "Dit hoofdstuk bundelt belangrijke onderwerpen die met je rijgeschiktheid en met verantwoordelijkheid in het verkeer te maken hebben: alcohol en drugs, vermoeidheid en medicatie, wat te doen bij een ongeval (EHBO), gevaarlijke stoffen, en milieubewust rijden. Het zijn thema's die in het echte examen geregeld terugkomen en die in de praktijk levens kunnen redden.",
    estMinutes: 19,
    order: 1,
    sections: [
      {
        heading: "Alcohol achter het stuur",
        body:
          "Alcohol vertraagt je reactietijd, vermindert je concentratie en beoordelingsvermogen, en geeft een **vals gevoel van controle** — een gevaarlijke combinatie.\n\nDe wettelijke limieten in België:\n\n- voor een **gewone bestuurder** ben je strafbaar vanaf **0,5 promille** in het bloed (0,22 mg/l uitgeademde alveolaire lucht);\n- voor **professionele bestuurders** (vrachtwagen-, bus- en taxichauffeurs, rijinstructeurs) geldt een strengere limiet van **0,2 promille** (0,09 mg/l).\n\nDe sancties lopen op met de hoeveelheid: van een onmiddellijke inning bij lichte overschrijding tot een onmiddellijke intrekking van het rijbewijs, een dagvaarding en zelfs een **alcoholslot** (een toestel dat de motor pas laat starten na een geslaagde ademtest). Voor **beginnende bestuurders** (rijbewijs minder dan 2 jaar) gelden bij bepaalde overtredingen strengere, soms verplichte sancties.",
        quiz: [
          {
            text: "Vanaf welke alcoholconcentratie in het bloed ben je als gewone bestuurder strafbaar?",
            explanation:
              "De algemene wettelijke limiet is 0,5 promille in het bloed (0,22 mg/l uitgeademde lucht). Voor professionele bestuurders is dat strenger: 0,2 promille.",
            isSevere: true,
            options: [
              { text: "0,5 promille", correct: true },
              { text: "0,2 promille" },
              { text: "0,8 promille" },
              { text: "1,2 promille" },
            ],
          },
        ],
      },
      {
        heading: "Drugs, medicatie en vermoeidheid",
        body:
          "**Drugs** in het verkeer zijn altijd verboden. Bij een speekseltest die positief is, riskeer je een onmiddellijke intrekking van je rijbewijs en zware sancties — er geldt in de praktijk een nultolerantie.\n\nOok **geneesmiddelen** kunnen je rijvaardigheid aantasten. Let op de pictogrammen en de bijsluiter: sommige medicijnen maken slaperig of vertragen je reacties. Vraag bij twijfel raad aan je arts of apotheker en rij niet als het middel je rijgeschiktheid beïnvloedt.\n\n**Vermoeidheid** is even gevaarlijk als alcohol: ze verlengt je reactietijd en kan leiden tot **microslaap** — enkele seconden wegdommelen waarin je tientallen meters 'blind' aflegt. De enige goede oplossing is **stoppen en rusten** (een korte slaap, frisse lucht, eventueel cafeïne). Op lange ritten neem je best om de twee uur een pauze. Het raam openzetten of de radio luider zetten lost niets op.",
        quiz: [
          {
            text: "Je bent erg moe tijdens een lange rit. Wat is de beste oplossing?",
            explanation:
              "Bij vermoeidheid moet je stoppen en rusten. Doorrijden met slaap is levensgevaarlijk; microslaap kan fataal aflopen.",
            options: [
              { text: "Stoppen en rusten", correct: true },
              { text: "Sneller rijden om er sneller te zijn" },
              { text: "Het raam openzetten en doorrijden" },
              { text: "De radio luider zetten en doorrijden" },
            ],
          },
        ],
      },
      {
        heading: "Bij een ongeval: beveiligen, bewaren, bellen, bijstaan",
        body:
          "Kom je bij een ongeval, dan pas je het principe **'beveiligen – bewaren – bellen – bijstaan'** toe:\n\n- **Beveiligen**: maak de plaats veilig. Zet je gevarenlichten aan, trek je fluohesje aan vóór je uitstapt en plaats de gevarendriehoek op voldoende afstand (op de autosnelweg ongeveer 100 meter).\n- **Bewaren**: verplaats gewonden niet onnodig, om bijkomend letsel te voorkomen — tenzij er onmiddellijk levensgevaar is (bv. brand).\n- **Bellen**: verwittig de hulpdiensten via het noodnummer **112**. Geef rustig de plaats, het aantal slachtoffers en de aard van de verwondingen door.\n- **Bijstaan**: verleen hulp binnen je mogelijkheden (een bloeding stelpen, een bewusteloze in stabiele zijligging leggen, geruststellen).\n\nNa een ongeval met enkel blikschade vul je samen een **aanrijdingsformulier** in. Doorrijden na een ongeval om je aan de vaststellingen te onttrekken is **vluchtmisdrijf** — een zware overtreding.",
        quiz: [
          {
            text: "Welk noodnummer bel je bij een ongeval met gewonden in België?",
            explanation:
              "112 is het Europese noodnummer voor brandweer en dringende medische hulp; het werkt in heel België en Europa.",
            options: [
              { text: "112", correct: true },
              { text: "911" },
              { text: "0800" },
              { text: "1722" },
            ],
          },
          {
            text: "Mag je een gewonde uit een voertuig halen na een ongeval?",
            explanation:
              "In principe verplaats je een gewonde niet, om bijkomend letsel te vermijden — tenzij er onmiddellijk levensgevaar is, zoals bij brand.",
            options: [
              { text: "Enkel bij onmiddellijk levensgevaar (bv. brand)", correct: true },
              { text: "Altijd, zo snel mogelijk" },
              { text: "Nooit, in geen geval" },
              { text: "Enkel als hij erom vraagt" },
            ],
          },
        ],
      },
      {
        heading: "Gevaarlijke stoffen en pech onderweg",
        body:
          "Voertuigen die **gevaarlijke stoffen** vervoeren, dragen oranje **ADR-borden** en gevaarsetiketten. Hou er extra afstand van en wees voorzichtig; bij een ongeval met zo'n voertuig blijf je op afstand en verwittig je meteen de hulpdiensten met zo veel mogelijk info van de borden.\n\nBij **pech** of een ongeval:\n\n- zet je voertuig zo veel mogelijk uit de weg (op de pechstrook of de berm);\n- ontsteek je **gevarenlichten** en trek je **fluohesje** aan vóór je uitstapt;\n- plaats de **gevarendriehoek** op voldoende afstand;\n- ga bij een autosnelweg achter de **vangrail** staan wachten, nooit op de rijbaan of pechstrook zelf.\n\nEen rood waarschuwingslampje op je dashboard wijst meestal op een ernstig probleem (olie-, rem- of motordruk): stop dan zo snel mogelijk op een veilige plaats en controleer de oorzaak.",
      },
      {
        heading: "Milieubewust en zuinig rijden",
        body:
          "Je rijstijl beïnvloedt rechtstreeks je brandstofverbruik en de uitstoot. Milieubewust rijden bespaart geld én vermindert vervuiling:\n\n- schakel **tijdig op** naar een hogere versnelling en rij op een **gelijkmatige** snelheid;\n- anticipeer op het verkeer zodat je minder hard hoeft te remmen en op te trekken;\n- vermijd onnodig **stationair draaien**; zet de motor af bij langer wachten;\n- hou je **bandenspanning** op peil en vermijd overbodig gewicht of een dakkoffer die je niet gebruikt.\n\nIn veel steden geldt een **lage-emissiezone (LEZ)**: de meest vervuilende voertuigen mogen er niet binnen of moeten zich vooraf registreren. Let op de borden die het begin (F117) en einde (F118) van zo'n zone aanduiden, om boetes te vermijden.",
        quiz: [
          {
            text: "Wat is een lage-emissiezone (LEZ)?",
            explanation:
              "Een LEZ is een stadszone waar de meest vervuilende voertuigen geweerd worden (of zich moeten registreren), om de luchtkwaliteit te verbeteren.",
            options: [
              { text: "Een zone waar vervuilende voertuigen geweerd worden", correct: true },
              { text: "Een zone waar je gratis mag parkeren" },
              { text: "Een zone enkel voor elektrische steps" },
              { text: "Een zone op de autosnelweg" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 10. OVERTREDINGEN
  {
    category: "overtredingen",
    slug: "de-overtredingen",
    title: "Overtredingen en sancties",
    intro:
      "Wie de regels overtreedt, riskeert een sanctie. In België worden verkeersovertredingen ingedeeld in vier graden, van licht tot zeer zwaar, met telkens hogere boetes. Daarnaast kan een rechter een rijverbod opleggen en bijkomende maatregelen zoals herstelexamens of een alcoholslot. In dit hoofdstuk leer je de vier graden met voorbeelden en bedragen, het verschil tussen een onmiddellijke inning, een minnelijke schikking en een dagvaarding, en wat een rijverbod inhoudt.",
    estMinutes: 16,
    order: 1,
    sections: [
      {
        heading: "De vier graden van overtredingen",
        body:
          "Overtredingen op het verkeersreglement zijn ingedeeld in **vier graden**. Hoe hoger de graad, hoe zwaarder de straf, want de graad weerspiegelt het gevaar dat de overtreding veroorzaakt:\n\n- **Eerste graad**: lichte overtredingen zonder direct of indirect gevaar (bv. geen richtingaanwijzer gebruiken, de gordel niet dragen).\n- **Tweede graad**: overtredingen die **onrechtstreeks** gevaar opleveren voor anderen.\n- **Derde graad**: overtredingen die de verkeersveiligheid **rechtstreeks** in gevaar brengen (bv. door een rood licht rijden, rijden met de gsm in de hand).\n- **Vierde graad**: zeer zware overtredingen die de veiligheid van personen **ernstig** in gevaar brengen.\n\nOvertredingen waaraan geen graad is toegekend, zijn standaard van de eerste graad.",
        quiz: [
          {
            text: "Onder welke graad valt rijden met de gsm in de hand?",
            explanation:
              "Rijden met de telefoon in de hand brengt de verkeersveiligheid rechtstreeks in gevaar en is een overtreding van de derde graad.",
            options: [
              { text: "Derde graad", correct: true },
              { text: "Eerste graad" },
              { text: "Tweede graad" },
              { text: "Geen overtreding" },
            ],
          },
        ],
      },
      {
        heading: "Boetes en bedragen (2026)",
        body:
          "De bedragen hangen af van de graad en van de manier waarop de zaak wordt afgehandeld. Voor de **onmiddellijke inning** gelden in 2026 ongeveer deze bedragen (exclusief een administratieve toeslag van € 10,67):\n\n- **eerste graad**: ± € 58;\n- **tweede graad**: ± € 116;\n- **derde graad**: ± € 174;\n- **vierde graad**: ± € 473 (en in principe een dagvaarding).\n\nBetaal je niet meteen, dan kan een **minnelijke schikking** of een **dagvaarding** volgen, waarbij de bedragen oplopen. De rechter kan een **geldboete** opleggen die voor zware overtredingen tot enkele duizenden euro's kan bedragen, te vermeerderen met opdeciemen en gerechtskosten.\n\nGoed om te weten: België kent (voorlopig) **geen puntenrijbewijs**. De sancties verlopen via boetes, rijverbod en eventueel herstelexamens.",
        quiz: [
          {
            text: "Hoeveel bedraagt de onmiddellijke inning voor een overtreding van de eerste graad (2026)?",
            explanation:
              "Voor een eerstegraadsovertreding bedraagt de onmiddellijke inning ongeveer € 58 (exclusief administratieve toeslag).",
            options: [
              { text: "± € 58", correct: true },
              { text: "± € 174" },
              { text: "± € 473" },
              { text: "± € 10" },
            ],
          },
        ],
      },
      {
        heading: "Inning, schikking of dagvaarding",
        body:
          "Er zijn verschillende manieren waarop een overtreding wordt afgehandeld:\n\n- **Onmiddellijke inning**: de politie stelt voor om meteen een bedrag te betalen. Betaal je, dan is de zaak in principe afgehandeld.\n- **Minnelijke schikking**: het parket stelt een (hoger) bedrag voor om vervolging te vermijden; betaal je, dan stopt de procedure.\n- **Dagvaarding**: je moet voor de **politierechtbank** verschijnen. De rechter beslist over de straf (geldboete, rijverbod ...). Bij een vierdegraadsovertreding word je in principe altijd gedagvaard.\n\nNaast deze strafrechtelijke weg bestaan er ook **gemeentelijke administratieve sancties (GAS)** voor bepaalde lichte overtredingen (zoals sommige parkeerovertredingen), die de gemeente zelf afhandelt.",
        quiz: [
          {
            text: "Wat is het verschil tussen een minnelijke schikking en een dagvaarding?",
            explanation:
              "Bij een minnelijke schikking betaal je een bedrag en is de zaak afgehandeld; bij een dagvaarding moet je voor de politierechtbank verschijnen, die de straf bepaalt.",
            options: [
              { text: "Schikking = betalen en afgehandeld; dagvaarding = voor de rechtbank", correct: true },
              { text: "Er is geen verschil" },
              { text: "Een schikking is altijd duurder" },
              { text: "Een dagvaarding is gratis" },
            ],
          },
        ],
      },
      {
        heading: "Rijverbod en herstelmaatregelen",
        body:
          "Bij zwaardere overtredingen kan de rechter een **verval van het recht tot sturen** opleggen — een **rijverbod** van **8 dagen tot 5 jaar**, en in zware gevallen langer of zelfs definitief.\n\nBelangrijke punten:\n\n- bij een **vierdegraadsovertreding** is een rijverbod in principe **verplicht**;\n- voor **beginnende bestuurders** (rijbewijs minder dan 2 jaar) is een rijverbod bij bepaalde zware overtredingen eveneens **verplicht**;\n- na een rijverbod kan je verplicht worden om **opnieuw examens** af te leggen: theoretisch, praktisch, medisch en/of psychologisch;\n- bij alcoholproblematiek kan een **alcoholslot** worden opgelegd.\n\nRijden tijdens een rijverbod is een ernstig misdrijf met zware gevolgen. Het rijverbod begint pas te lopen nadat je je rijbewijs hebt ingeleverd bij de griffie.",
        quiz: [
          {
            text: "Voor wie is een rijverbod bij bepaalde zware overtredingen verplicht?",
            explanation:
              "Voor wie sinds minder dan twee jaar houder is van het rijbewijs B (beginnende bestuurder) is een rijverbod bij bepaalde overtredingen verplicht.",
            options: [
              { text: "Voor beginnende bestuurders (rijbewijs < 2 jaar)", correct: true },
              { text: "Voor iedereen ouder dan 60" },
              { text: "Enkel voor vrachtwagenchauffeurs" },
              { text: "Voor niemand" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 11. VERKEERSBORDEN
  {
    category: "verkeersborden",
    slug: "de-verkeersborden",
    title: "Verkeersborden herkennen",
    intro:
      "Verkeersborden zijn de taal van de weg. Ze zijn ingedeeld in categorieën met elk een herkenbare vorm en kleur, en wie die logica begrijpt, herkent snel de betekenis van een bord dat hij nog nooit zag. In dit hoofdstuk overlopen we de gevaarsborden, voorrangsborden, verbodsborden, gebodsborden en aanwijzingsborden, samen met de onderborden en de regels rond tijdelijke borden. Combineer dit hoofdstuk met de borden-trainer om alles goed in te oefenen.",
    estMinutes: 20,
    order: 1,
    sections: [
      {
        heading: "De logica achter vorm en kleur",
        body:
          "Elke bordcategorie heeft een eigen **vorm en kleur**, zodat je de aard van het bord al van ver herkent, nog voor je het symbool kunt lezen:\n\n- **Gevaarsborden** (type A): **driehoekig** met een **rode rand** en een wit veld met zwart symbool. Ze **waarschuwen** voor een gevaar.\n- **Voorrangsborden** (type B): bijzondere vormen (omgekeerde driehoek, achthoek, ruit) die de **voorrang** regelen.\n- **Verbodsborden** (type C): **rond** met een **rode rand**. Ze **verbieden** iets.\n- **Gebodsborden** (type D): **rond** en **blauw**. Ze **verplichten** iets.\n- **Aanwijzingsborden** (type F): meestal **rechthoekig of vierkant** en **blauw**. Ze geven **informatie**.\n\nOnthoud dus: rood = verbieden of waarschuwen, blauw = verplichten of informeren, driehoek = gevaar, rond = gebod of verbod.",
        imageUrl: sign("A51"),
        imageAlt: "Gevaarsbord A51 — andere gevaren",
        quiz: [
          {
            text: "Een rond bord met een rode rand is in het algemeen een...",
            explanation:
              "Ronde borden met een rode rand zijn verbodsborden (type C). Ronde blauwe borden zijn gebodsborden; driehoeken met rode rand zijn gevaarsborden.",
            options: [
              { text: "verbodsbord", correct: true },
              { text: "gevaarsbord" },
              { text: "aanwijzingsbord" },
              { text: "gebodsbord" },
            ],
          },
        ],
      },
      {
        heading: "Gevaarsborden (type A)",
        body:
          "Gevaarsborden waarschuwen je voor een gevaar verderop, zodat je je gedrag op tijd kunt aanpassen (vertragen, extra opletten). Ze zijn driehoekig met een rode rand. Binnen de bebouwde kom staan ze vlak voor het gevaar, buiten de bebouwde kom meestal ongeveer 150 meter ervoor.\n\nVeelvoorkomende gevaarsborden:\n\n- **A1** — gevaarlijke bocht (naar links of rechts);\n- **A15** — gladde rijbaan;\n- **A21** — oversteekplaats voor voetgangers;\n- **A23** — plaats waar veel kinderen komen (bv. school);\n- **A25** — oversteekplaats voor fietsers;\n- **A31** — werken;\n- **A33** — verkeerslichten;\n- **A51** — andere (niet nader bepaalde) gevaren, vaak met een onderbord.\n\nJe hoeft niet altijd te stoppen of te remmen, maar je past je waakzaamheid en snelheid aan het aangekondigde gevaar aan.",
        imageUrl: sign("A23"),
        imageAlt: "Gevaarsbord A23 — kinderen",
        quiz: [
          {
            text: "Welke vorm en kleur hebben gevaarsborden?",
            explanation:
              "Gevaarsborden (type A) zijn driehoekig met een rode rand en een wit veld met zwart symbool.",
            options: [
              { text: "Driehoekig met rode rand", correct: true },
              { text: "Rond en blauw" },
              { text: "Achthoekig en rood" },
              { text: "Vierkant en blauw" },
            ],
          },
        ],
      },
      {
        heading: "Voorrangsborden (type B)",
        body:
          "De voorrangsborden hebben opvallende, unieke vormen zodat je ze ook bij slecht zicht of van achteren herkent:\n\n- **B1** — omgekeerde driehoek: **voorrang verlenen** aan het kruisende verkeer (stoppen hoeft niet altijd);\n- **B5** — achthoek ('STOP'): **volledig stoppen** en voorrang verlenen;\n- **B9** — gele ruit: **voorrangsweg**; het verkeer uit de zijwegen moet jou voorrang verlenen;\n- **B11** — gele ruit met balk: **einde voorrangsweg**;\n- **B15** / **B17** — kruispunt waar je voorrang hebt, respectievelijk waar de voorrang van rechts geldt;\n- **B19** / **B21** — bij een versmalling: voorrang verlenen aan, respectievelijk voorrang hebben op tegenliggers.\n\nDe achthoekige vorm van het stopbord is uniek: zelfs als de tekst onleesbaar zou zijn, herken je het bord aan zijn vorm.",
        imageUrl: sign("B1"),
        imageAlt: "Voorrangsbord B1 — voorrang verlenen",
        quiz: [
          {
            text: "Welke vorm heeft het stopbord?",
            explanation:
              "Het stopbord (B5) is achthoekig (octagoon) en rood. Bij dit bord moet je volledig stoppen en voorrang verlenen.",
            isSevere: true,
            options: [
              { text: "Achthoekig (octagoon)", correct: true },
              { text: "Rond" },
              { text: "Driehoekig" },
              { text: "Vierkant" },
            ],
          },
        ],
      },
      {
        heading: "Verbodsborden (type C)",
        body:
          "Verbodsborden zijn rond met een rode rand en verbieden iets. Veel van deze borden komen op het examen terug:\n\n- **C1** — verboden richting (niet inrijden);\n- **C3** — verboden toegang in beide richtingen voor iedere bestuurder;\n- **C21** — verboden voor voertuigen zwaarder dan aangeduid;\n- **C23** — verboden voor vrachtwagens;\n- **C29** — verboden boven een bepaalde hoogte;\n- **C31** — verboden af te slaan (in de richting van de pijl);\n- **C33** — verboden om te keren;\n- **C35** — verboden in te halen (C37 = einde van dat verbod);\n- **C43** — maximumsnelheid (C45 = einde van die beperking).\n\nEen verbod geldt vanaf het bord tot het volgende kruispunt of tot een eindbord, tenzij anders aangegeven met een onderbord.",
        imageUrl: sign("C43"),
        imageAlt: "Verbodsbord C43 — maximumsnelheid",
        quiz: [
          {
            text: "Wat betekent een bord C43?",
            explanation:
              "Bord C43 legt een maximumsnelheid op (het getal op het bord). Een verkeersbord heeft altijd voorrang op de algemene snelheidsregels.",
            options: [
              { text: "Maximumsnelheid", correct: true },
              { text: "Aanbevolen snelheid" },
              { text: "Minimumsnelheid" },
              { text: "Einde snelheidsbeperking" },
            ],
          },
        ],
      },
      {
        heading: "Gebods- en aanwijzingsborden (type D en F)",
        body:
          "**Gebodsborden** (type D) zijn rond en blauw en leggen iets verplicht op:\n\n- **D1** — verplichte rijrichting (pijl);\n- **D5** — verplicht rond te rijden (rotonde);\n- **D7** — verplicht fietspad;\n- **D9 / D10** — pad voor voetgangers en fietsers (gescheiden of gemeenschappelijk).\n\n**Aanwijzingsborden** (type F) zijn meestal blauw en rechthoekig en geven nuttige informatie:\n\n- **F1 / F3** — begin / einde bebouwde kom;\n- **F4a / F4b** — begin / einde zone 30;\n- **F12a / F12b** — begin / einde woonerf;\n- **F19** — eenrichtingsweg;\n- **F45** — doodlopende weg;\n- **F49 / F50** — oversteekplaats voor voetgangers / fietsers;\n- **F103** — begin voetgangerszone; **F117 / F118** — begin / einde lage-emissiezone.\n\nDe parkeerborden (E1 parkeerverbod, E3 stilstaan- en parkeerverbod, E9 parkeren toegelaten) regelen waar je je voertuig mag achterlaten.",
        imageUrl: sign("D7"),
        imageAlt: "Gebodsbord D7 — verplicht fietspad",
        quiz: [
          {
            text: "Welke vorm en kleur hebben gebodsborden?",
            explanation:
              "Gebodsborden (type D) zijn rond en blauw met een wit symbool; ze leggen iets verplicht op (bv. D7 verplicht fietspad).",
            options: [
              { text: "Rond en blauw", correct: true },
              { text: "Driehoekig met rode rand" },
              { text: "Rond met rode rand" },
              { text: "Achthoekig" },
            ],
          },
        ],
      },
      {
        heading: "Onderborden en tijdelijke borden",
        body:
          "Een **onderbord** staat onder een hoofdbord en **vult het aan** met extra informatie, bijvoorbeeld:\n\n- een **afstand** ('over 100 m') of een **lengte** waarover iets geldt;\n- een **richting** (een pijl);\n- een **doelgroep** of uitzondering (bv. 'uitgezonderd plaatselijk verkeer' of de M-borden die regels voor fietsers verfijnen);\n- een **tijdsaanduiding** (bv. enkel op bepaalde uren of dagen).\n\n**Tijdelijke borden** (vaak op een gele achtergrond, bv. bij wegenwerken) hebben **voorrang** op de vaste borden en markeringen ter plaatse. Zie je een geel werfbord dat iets anders zegt dan de gewone signalisatie, dan volg je het gele bord.\n\nTen slotte: bij conflicterende aanwijzingen geldt de algemene rangorde — een bevoegd persoon gaat vóór de lichten, de lichten vóór de borden, en de borden vóór de algemene verkeersregels.",
        quiz: [
          {
            text: "Een tijdelijk geel werfbord spreekt de vaste signalisatie tegen. Wat volg je?",
            explanation:
              "Tijdelijke (werf)borden hebben voorrang op de vaste borden en markeringen. Je volgt dus het gele werfbord.",
            options: [
              { text: "Het tijdelijke gele werfbord", correct: true },
              { text: "Het vaste bord" },
              { text: "De wegmarkering op de grond" },
              { text: "Je mag zelf kiezen" },
            ],
          },
        ],
      },
    ],
  },
];
