import type { LessonSeed } from "./types";

// Theorielessen per hoofdstuk. Body ondersteunt eenvoudige opmaak:
// **vet**, en lijstregels die met "- " beginnen.
export const lessons: LessonSeed[] = [
  // ============================================================= 1. OPENBARE WEG
  {
    category: "openbare-weg",
    slug: "de-openbare-weg",
    title: "De openbare weg",
    intro:
      "De openbare weg is meer dan alleen de rijbaan. Wie de onderdelen van de weg kent, begrijpt meteen waar hij mag rijden, stilstaan en oversteken.",
    estMinutes: 12,
    order: 1,
    sections: [
      {
        heading: "Onderdelen van de openbare weg",
        body:
          "De **openbare weg** omvat alles wat openstaat voor het verkeer: de rijbaan, de bermen, de parkeerstroken, de fietspaden en de trottoirs.\n\n- De **rijbaan** is het deel van de weg voor het rijdende verkeer (auto's, vrachtwagens, motoren).\n- Een **rijstrook** is een duidelijk afgebakend deel van de rijbaan, breed genoeg voor één file auto's.\n- De **berm** ligt naast de rijbaan. De gelijkgrondse berm sluit aan op de rijbaan; de verhoogde berm ligt hoger.\n- Het **trottoir** (voetpad) is bestemd voor voetgangers.",
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20road%20sign%20F12a.svg",
        imageAlt: "Bord begin woonerf",
        quiz: [
          {
            text: "Wat is de rijbaan?",
            explanation:
              "De rijbaan is het deel van de openbare weg dat bestemd is voor het rijdende verkeer. Fietspaden en trottoirs horen daar niet bij.",
            options: [
              { text: "Het deel van de weg bestemd voor het rijdende verkeer", correct: true },
              { text: "Het voetpad langs de weg" },
              { text: "De parkeerstrook" },
              { text: "De middenberm" },
            ],
          },
        ],
      },
      {
        heading: "Bebouwde kom en zones",
        body:
          "Het bord **F1** geeft het begin van de bebouwde kom aan; het bord **F3** het einde. Binnen de bebouwde kom geldt standaard maximum **50 km/u**.\n\nEen **zone 30** (bord F4a tot F4b) legt 30 km/u op in een hele buurt, vaak bij scholen. In een **woonerf** (bord F12a) rij je stapvoets, maximum **20 km/u**, en hebben voetgangers er voorrang en mogen ze de hele breedte gebruiken.",
        quiz: [
          {
            text: "Welke maximumsnelheid geldt standaard binnen de bebouwde kom?",
            explanation:
              "Binnen de bebouwde kom (vanaf bord F1) geldt standaard 50 km/u, tenzij een bord iets anders aangeeft.",
            options: [
              { text: "30 km/u" },
              { text: "50 km/u", correct: true },
              { text: "70 km/u" },
              { text: "20 km/u" },
            ],
          },
        ],
      },
      {
        heading: "Wegmarkeringen",
        body:
          "Witte **doorlopende strepen** mag je niet overschrijden en niet links ervan rijden. **Onderbroken strepen** mag je overschrijden om in te halen of van rijstrook te veranderen, als het veilig is.\n\nGele onderbroken strepen langs de rand betekenen een parkeerverbod; gele doorlopende strepen langs de rand betekenen een verbod om stil te staan én te parkeren.",
      },
    ],
  },

  // ============================================================= 2. WEGGEBRUIKERS
  {
    category: "weggebruikers",
    slug: "de-weggebruikers",
    title: "De weggebruikers",
    intro:
      "Iedereen op de openbare weg is een weggebruiker, maar niet iedereen is even kwetsbaar. Als bestuurder draag je extra verantwoordelijkheid tegenover zwakke weggebruikers.",
    estMinutes: 10,
    order: 1,
    sections: [
      {
        heading: "Zwakke weggebruikers",
        body:
          "**Zwakke weggebruikers** zijn voetgangers, fietsers en bestuurders van tweewielers — zij hebben geen beschermende carrosserie. Kinderen, ouderen en personen met een beperking verdienen bijzondere voorzichtigheid.\n\nAls bestuurder moet je **dubbel voorzichtig** zijn: aangepaste snelheid, voldoende zijdelingse afstand bij het inhalen van een fietser (minstens 1 meter binnen de bebouwde kom, 1,5 meter erbuiten) en steeds bedacht zijn op onverwacht gedrag.",
        quiz: [
          {
            text: "Hoeveel zijdelingse afstand houd je minimaal bij het inhalen van een fietser buiten de bebouwde kom?",
            explanation:
              "Buiten de bebouwde kom houd je minstens 1,5 meter zijdelingse afstand bij het inhalen van een fietser; binnen de bebouwde kom is dat minstens 1 meter.",
            options: [
              { text: "0,5 meter" },
              { text: "1 meter" },
              { text: "1,5 meter", correct: true },
              { text: "2,5 meter" },
            ],
          },
        ],
      },
      {
        heading: "Voetgangers en oversteekplaatsen",
        body:
          "Nadert een voetganger een **oversteekplaats** (zebrapad) of staat hij er duidelijk op te wachten, dan moet je hem laten oversteken en zo nodig stoppen.\n\nVoetgangers die al oversteken hebben altijd voorrang. Inhalen vlak vóór een oversteekplaats is verboden, omdat je dan het zicht op overstekende voetgangers ontneemt.",
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20road%20sign%20F49.svg",
        imageAlt: "Bord oversteekplaats voor voetgangers",
        quiz: [
          {
            text: "Een voetganger stapt op het zebrapad. Wat doe je?",
            explanation:
              "Voetgangers die oversteken of duidelijk de bedoeling tonen over te steken op een oversteekplaats, hebben voorrang. Je stopt zo nodig.",
            isSevere: true,
            options: [
              { text: "Je stopt en laat de voetganger oversteken", correct: true },
              { text: "Je rijdt snel door vóór de voetganger" },
              { text: "Je toetert zodat hij wacht" },
              { text: "Je hebt enkel voorrang te verlenen buiten de bebouwde kom" },
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
      "Een veilige rit begint bij een voertuig in orde. Je moet weten welke documenten je bij je hebt en hoe je je verlichting correct gebruikt.",
    estMinutes: 11,
    order: 1,
    sections: [
      {
        heading: "Boorddocumenten",
        body:
          "Tijdens het rijden heb je deze documenten bij je:\n\n- Je **rijbewijs**\n- Het **inschrijvingsbewijs** van het voertuig\n- Het **keuringsbewijs** (indien het voertuig keuringsplichtig is)\n- Het **verzekeringsbewijs** (groene kaart / verzekeringsattest)\n\nDe boordpapieren moet je kunnen tonen bij een politiecontrole.",
        quiz: [
          {
            text: "Welk document moet je NIET noodzakelijk bij je hebben tijdens het rijden?",
            explanation:
              "De aankoopfactuur van het voertuig hoef je niet bij je te hebben. Rijbewijs, inschrijvingsbewijs, keuringsbewijs en verzekeringsbewijs wel.",
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
        heading: "Verlichting",
        body:
          "Gebruik je lichten correct:\n\n- **Dimlichten** (kruislichten) gebruik je 's nachts en bij slecht zicht (regen, mist).\n- **Grootlichten** (grote lichten) enkel als je niemand verblindt; doof ze voor tegenliggers en voorliggers.\n- **Mistlichten achter** enkel bij dichte mist of zware sneeuw (zicht < 100 m), want ze verblinden anders het achteropkomend verkeer.\n\nOverdag bij goed zicht volstaan de dagrijlichten; in een tunnel ontsteek je je dimlichten.",
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20road%20sign%20A33.svg",
        imageAlt: "Waarschuwingsbord",
        quiz: [
          {
            text: "Wanneer mag je je mistlicht achteraan gebruiken?",
            explanation:
              "Het mistlicht achteraan mag enkel bij dichte mist of zware sneeuwval waarbij het zicht minder dan ongeveer 100 meter bedraagt. Anders verblind je het achterliggend verkeer.",
            options: [
              { text: "Bij dichte mist of zware sneeuw (zicht < 100 m)", correct: true },
              { text: "Altijd 's nachts" },
              { text: "Bij lichte regen" },
              { text: "Wanneer je geparkeerd staat" },
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
      "Snelheid bepaalt je reactie- en remafstand. Naast de wettelijke maxima moet je je snelheid altijd aanpassen aan de omstandigheden.",
    estMinutes: 12,
    order: 1,
    sections: [
      {
        heading: "Maximumsnelheden per wegtype",
        body:
          "De algemene maxima voor een personenauto:\n\n- **Bebouwde kom:** 50 km/u (Brussel: standaard 30 km/u)\n- **Buiten de bebouwde kom:** 70 km/u in Vlaanderen, 90 km/u in Wallonië\n- **Autosnelweg:** 120 km/u (minimaal 70 km/u)\n- **Zone 30 / schoolomgeving:** 30 km/u\n- **Woonerf:** 20 km/u (stapvoets)\n\nEen verkeersbord heeft altijd voorrang op deze algemene regels.",
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20road%20sign%20C43.svg",
        imageAlt: "Bord maximumsnelheid",
        quiz: [
          {
            text: "Wat is in Vlaanderen de standaard maximumsnelheid buiten de bebouwde kom (zonder borden)?",
            explanation:
              "Sinds 2017 geldt in Vlaanderen buiten de bebouwde kom standaard 70 km/u, tenzij een bord een andere snelheid aangeeft. In Wallonië is dat 90 km/u.",
            options: [
              { text: "50 km/u" },
              { text: "70 km/u", correct: true },
              { text: "90 km/u" },
              { text: "120 km/u" },
            ],
          },
        ],
      },
      {
        heading: "Aangepaste snelheid en remafstand",
        body:
          "Je moet je snelheid steeds **aanpassen** aan de omstandigheden: weer, zicht, verkeersdrukte, de toestand van de weg en je voertuig.\n\nJe **stopafstand** = reactieafstand + remafstand. Bij dubbele snelheid wordt de remafstand ongeveer **vier keer** zo lang. Op een natte weg neemt de remafstand sterk toe.\n\nJe moet altijd kunnen stoppen vóór een hindernis die je kunt voorzien.",
        quiz: [
          {
            text: "Wat gebeurt er ongeveer met je remafstand als je snelheid verdubbelt?",
            explanation:
              "De remafstand neemt ongeveer toe met het kwadraat van de snelheid: bij dubbele snelheid wordt hij ongeveer viermaal zo lang.",
            options: [
              { text: "Hij wordt ongeveer 4 keer langer", correct: true },
              { text: "Hij blijft gelijk" },
              { text: "Hij wordt 2 keer langer" },
              { text: "Hij wordt korter" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 5. KRUISEN EN INHALEN
  {
    category: "kruisen-inhalen",
    slug: "kruisen-en-inhalen",
    title: "Kruisen en inhalen",
    intro:
      "Inhalen is een van de gevaarlijkste manoeuvres. Je moet weten waar het mag, hoe je het veilig doet en wanneer je het beter laat.",
    estMinutes: 10,
    order: 1,
    sections: [
      {
        heading: "Inhalen: links en de uitzonderingen",
        body:
          "Je haalt in principe **langs links** in. Toch zijn er uitzonderingen:\n\n- Een bestuurder die **links wil afslaan** en zich al naar het midden heeft begeven, haal je **rechts** in.\n- Op rijbanen met meerdere rijstroken in dezelfde richting binnen de bebouwde kom mag je rechts sneller rijden dan links wanneer de stroken vol zijn.\n\nInhalen mag enkel als de weg vrij genoeg is en je het tegemoetkomend verkeer niet hindert.",
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20road%20sign%20C35.svg",
        imageAlt: "Bord verboden in te halen",
        quiz: [
          {
            text: "Een bestuurder vóór jou heeft zijn richtingaanwijzer naar links aanstaan en bevindt zich in het midden van de rijbaan om af te slaan. Hoe haal je hem in?",
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
        heading: "Waar inhalen verboden is",
        body:
          "Inhalen (van een gespan of voertuig met meer dan twee wielen) is onder meer verboden:\n\n- Op een **overweg**\n- Vlak vóór en op een **oversteekplaats voor voetgangers**\n- Bij **bord C35** (verbod in te halen)\n- Wanneer je het zicht niet hebt, bv. in een bocht of op een helling met onvoldoende zicht\n\nFietsers en bromfietsers mag je wel inhalen waar het verbod enkel voor meersporige voertuigen geldt.",
        quiz: [
          {
            text: "Mag je inhalen vlak vóór een oversteekplaats voor voetgangers?",
            explanation:
              "Nee. Inhalen vlak vóór en op een oversteekplaats voor voetgangers is verboden omdat je het zicht op overstekende voetgangers ontneemt. Dit kan een zware fout zijn.",
            isSevere: true,
            options: [
              { text: "Nee, dat is verboden", correct: true },
              { text: "Ja, als je snel genoeg bent" },
              { text: "Ja, buiten de bebouwde kom" },
              { text: "Ja, als er geen voetganger staat te wachten" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 6. VOORRANG
  {
    category: "voorrang",
    slug: "de-voorrang",
    title: "De voorrang",
    intro:
      "Voorrangsregels bepalen wie eerst mag op een kruispunt. Fouten tegen de voorrang zijn vaak zware fouten op het examen.",
    estMinutes: 13,
    order: 1,
    sections: [
      {
        heading: "Voorrang van rechts",
        body:
          "De **basisregel** in België: op een kruispunt verleen je **voorrang aan elke bestuurder die van rechts komt**, tenzij borden, wegmarkeringen of verkeerslichten iets anders bepalen.\n\nDeze regel geldt ook tegenover fietsers en bromfietsers die van rechts komen. Wie zijn voorrang verliest door een bord (bv. B1 of B5), moet voorrang verlenen, ook aan het verkeer van rechts.",
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20road%20sign%20B17.svg",
        imageAlt: "Bord kruispunt met voorrang van rechts",
        quiz: [
          {
            text: "Je nadert een kruispunt zonder borden of verkeerslichten. Van rechts komt een auto. Wie heeft voorrang?",
            explanation:
              "Zonder borden of lichten geldt de voorrang van rechts: de auto die van rechts komt, heeft voorrang.",
            isSevere: true,
            options: [
              { text: "De auto die van rechts komt", correct: true },
              { text: "Jij, want je rijdt rechtdoor" },
              { text: "Wie het eerst toetert" },
              { text: "De snelste bestuurder" },
            ],
          },
        ],
      },
      {
        heading: "Verkeerstekens en hun volgorde",
        body:
          "Wanneer er meerdere voorrangsregelingen zijn, geldt deze **volgorde**:\n\n1. Bevelen van een **bevoegd persoon** (politie/gemachtigd opzichter)\n2. **Verkeerslichten**\n3. **Verkeersborden** (voorrangsborden)\n4. De **verkeersregels** (zoals voorrang van rechts)\n\nEen agent die het verkeer regelt, gaat dus altijd vóór op een rood licht of een bord.",
        quiz: [
          {
            text: "Een verkeerslicht staat op rood, maar een politieagent geeft je teken om door te rijden. Wat doe je?",
            explanation:
              "Bevelen van een bevoegd persoon hebben voorrang op verkeerslichten. Je volgt de agent en rijdt door.",
            options: [
              { text: "Je volgt de agent en rijdt door", correct: true },
              { text: "Je blijft staan want rood is rood" },
              { text: "Je negeert de agent" },
              { text: "Je wacht tot het licht groen wordt" },
            ],
          },
        ],
      },
      {
        heading: "De rotonde",
        body:
          "Op een **rotonde** met het bord 'verplicht rond te rijden' (D5) samen met 'voorrang verlenen' (B1), moet je voorrang verlenen aan de bestuurders die al op de rotonde rijden. Je richtingaanwijzer gebruik je om de rotonde te verlaten.",
      },
    ],
  },

  // ============================================================= 7. WAAR RIJDEN
  {
    category: "waar-rijden",
    slug: "waar-rijden",
    title: "Waar rijden: plaats op de weg",
    intro:
      "Je plaats op de rijbaan en het juiste gebruik van rijstroken, fiets- en busstroken is essentieel voor een vlotte en veilige verkeersstroom.",
    estMinutes: 9,
    order: 1,
    sections: [
      {
        heading: "Rechts houden",
        body:
          "Je rijdt zo veel mogelijk **rechts**. Op een rijbaan met meerdere rijstroken in dezelfde richting kies je buiten de bebouwde kom de meest rechtse vrije strook; de linkse stroken zijn om in te halen.\n\nNa het inhalen keer je tijdig terug naar rechts, zonder de ingehaalde bestuurder te hinderen.",
        quiz: [
          {
            text: "Op de autosnelweg gebruik je de linkerrijstrook vooral om...",
            explanation:
              "De linkerrijstroken dienen om in te halen. Daarna keer je terug naar de rechterrijstrook.",
            options: [
              { text: "in te halen", correct: true },
              { text: "rustig te blijven rijden" },
              { text: "te bellen" },
              { text: "stil te staan" },
            ],
          },
        ],
      },
      {
        heading: "Fietspaden en busstroken",
        body:
          "Een **fietspad** (twee evenwijdige witte onderbroken strepen of bord D7) is voorbehouden voor fietsers en sommige bromfietsers. Als bestuurder mag je er niet op rijden of parkeren.\n\nEen **busstrook** is voorbehouden voor bussen (en soms taxi's/fietsers). Je mag er niet op rijden, behalve om af te slaan indien toegelaten.",
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20road%20sign%20D7.svg",
        imageAlt: "Bord verplicht fietspad",
        quiz: [
          {
            text: "Mag je met de auto over een fietspad rijden?",
            explanation:
              "Nee, een fietspad is voorbehouden voor fietsers en bepaalde bromfietsers. Auto's mogen er niet op rijden of parkeren.",
            options: [
              { text: "Nee", correct: true },
              { text: "Ja, als er geen fietser is" },
              { text: "Ja, om sneller te rijden" },
              { text: "Ja, altijd" },
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
      "Het verschil tussen stilstaan en parkeren bepaalt waar je je voertuig mag achterlaten en welke borden van toepassing zijn.",
    estMinutes: 10,
    order: 1,
    sections: [
      {
        heading: "Het verschil",
        body:
          "**Stilstaan** is je voertuig korte tijd stoppen om personen te laten in- of uitstappen of om goederen te laden of te lossen — je blijft als het ware ter plaatse bezig.\n\n**Parkeren** is langer stilstaan om een andere reden. Zodra je het voertuig achterlaat zonder te laden/lossen of in/uit te stappen, parkeer je.",
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20road%20sign%20E1.svg",
        imageAlt: "Bord parkeerverbod",
        quiz: [
          {
            text: "Bij bord E1 (parkeerverbod) mag je nog...",
            explanation:
              "Bij een parkeerverbod (E1) mag je nog stilstaan om mensen te laten in- of uitstappen of om te laden en lossen. Parkeren mag niet.",
            options: [
              { text: "stilstaan om te laden/lossen of in/uit te stappen", correct: true },
              { text: "de hele dag parkeren" },
              { text: "niets, ook niet stilstaan" },
              { text: "parkeren met parkeerschijf" },
            ],
          },
        ],
      },
      {
        heading: "Waar parkeren verboden is",
        body:
          "Je mag onder andere niet parkeren of stilstaan:\n\n- Op een **fietspad**, **trottoir** of oversteekplaats\n- Op minder dan **5 meter** vóór een oversteekplaats voor voetgangers\n- Op minder dan **5 meter** van een kruispunt (stilstaan/parkeren beperkt)\n- Voor een **inrit** van eigendommen (behalve je eigen)\n- Op plaatsen voor personen met een handicap zonder geldige kaart\n\nParkeer zo dat je het verkeer niet hindert en anderen veilig kunnen passeren.",
        quiz: [
          {
            text: "Op hoeveel meter vóór een oversteekplaats voor voetgangers mag je niet parkeren?",
            explanation:
              "Je mag niet parkeren of stilstaan binnen de 5 meter vóór een oversteekplaats voor voetgangers, zodat het zicht vrij blijft.",
            options: [
              { text: "5 meter", correct: true },
              { text: "1 meter" },
              { text: "10 meter" },
              { text: "20 meter" },
            ],
          },
        ],
      },
    ],
  },

  // ============================================================= 9. VARIA
  {
    category: "varia",
    slug: "varia-alcohol-ehbo-milieu",
    title: "Varia: alcohol, drugs, EHBO en milieu",
    intro:
      "Dit hoofdstuk bundelt belangrijke onderwerpen rond rijgeschiktheid, ongevallen en milieubewust rijden.",
    estMinutes: 12,
    order: 1,
    sections: [
      {
        heading: "Alcohol en drugs",
        body:
          "De wettelijke alcohollimiet is **0,5 promille** (0,22 mg/l uitgeademde alveolaire lucht). Vanaf die waarde ben je strafbaar.\n\nVoor **professionele bestuurders** (vrachtwagen-, bus- en taxichauffeurs, rijinstructeurs) geldt een strengere limiet van **0,2 promille** (0,09 mg/l).\n\nRijden onder invloed van **drugs** is altijd verboden. Wie betrapt wordt, riskeert een rijverbod en zware boetes. Alcohol en drugs verlengen je reactietijd en geven een vals gevoel van controle.",
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
              { text: "1,0 promille" },
            ],
          },
        ],
      },
      {
        heading: "Bij een ongeval",
        body:
          "Kom je bij een ongeval, dan pas je het principe **'beveiligen – bewaren – bellen – bijstaan'** toe:\n\n- **Beveilig** de plaats: gevarenlichten aan, fluovestje, gevarendriehoek plaatsen.\n- **Bewaar** de toestand bij gewonden; verplaats hen niet onnodig.\n- **Bel** de hulpdiensten op **112**.\n- **Bijstand** verlenen: blus, help, stelp bloedingen indien je kan.\n\nVluchtmisdrijf (doorrijden na een ongeval met gewonden) is een zware overtreding.",
        quiz: [
          {
            text: "Welk noodnummer bel je bij een ongeval met gewonden in België?",
            explanation:
              "112 is het Europese noodnummer voor brandweer en medische hulp; het werkt in heel België en Europa.",
            options: [
              { text: "112", correct: true },
              { text: "100" },
              { text: "911" },
              { text: "101" },
            ],
          },
        ],
      },
      {
        heading: "Milieu en zuinig rijden",
        body:
          "Milieubewust rijden bespaart brandstof en vermindert uitstoot:\n\n- Schakel **tijdig op** naar een hogere versnelling en rij op een gelijkmatige snelheid.\n- Vermijd onnodig **stationair draaien**; zet de motor af bij langer wachten.\n- Hou je **bandenspanning** op peil.\n\nIn veel steden geldt een **lage-emissiezone (LEZ)**: vervuilende voertuigen mogen er niet of moeten zich registreren.",
      },
    ],
  },

  // ============================================================= 10. OVERTREDINGEN
  {
    category: "overtredingen",
    slug: "de-overtredingen",
    title: "Overtredingen en sancties",
    intro:
      "Verkeersovertredingen worden in België ingedeeld in vier graden. Hoe hoger de graad, hoe zwaarder de straf.",
    estMinutes: 9,
    order: 1,
    sections: [
      {
        heading: "De vier graden",
        body:
          "Overtredingen zijn ingedeeld in **vier graden**:\n\n- **Eerste graad:** lichte overtredingen zonder direct gevaar (bv. geen richtingaanwijzer gebruiken). Onmiddellijke inning ± € 58.\n- **Tweede graad:** onrechtstreeks gevaar voor anderen. ± € 116.\n- **Derde graad:** rechtstreeks gevaar (bv. door rood rijden, gsm in de hand). ± € 174.\n- **Vierde graad:** zeer zwaar, ernstig gevaar voor personen. ± € 473 en in principe dagvaarding.\n\n(Bedragen 2026, exclusief administratieve toeslag.)",
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
        heading: "Rijverbod en herstel",
        body:
          "Bij zwaardere overtredingen kan de rechter een **verval van het recht tot sturen** (rijverbod) opleggen, van 8 dagen tot 5 jaar. Voor beginnende bestuurders (rijbewijs minder dan 2 jaar) is een rijverbod bij sommige zware overtredingen zelfs verplicht.\n\nNa een rijverbod kan je verplicht worden examens (theorie, praktijk, medisch, psychologisch) opnieuw af te leggen.",
      },
    ],
  },

  // ============================================================= 11. VERKEERSBORDEN
  {
    category: "verkeersborden",
    slug: "de-verkeersborden",
    title: "Verkeersborden herkennen",
    intro:
      "Verkeersborden zijn ingedeeld in categorieën met een herkenbare vorm en kleur. Wie de logica kent, herkent snel de betekenis.",
    estMinutes: 12,
    order: 1,
    sections: [
      {
        heading: "Gevaars-, verbods- en gebodsborden",
        body:
          "- **Gevaarsborden** (type A): driehoekig met rode rand, waarschuwen voor gevaar.\n- **Verbodsborden** (type C): rond met rode rand, verbieden iets (bv. C43 maximumsnelheid, C35 verboden in te halen).\n- **Gebodsborden** (type D): rond en blauw, leggen iets verplicht op (bv. D7 verplicht fietspad).",
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20road%20sign%20A51.svg",
        imageAlt: "Gevaarsbord andere gevaren",
        quiz: [
          {
            text: "Een rond bord met rode rand is meestal een...",
            explanation:
              "Ronde borden met een rode rand zijn verbodsborden (type C). Driehoekige borden met rode rand zijn gevaarsborden; ronde blauwe borden zijn gebodsborden.",
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
        heading: "Voorrangs- en aanwijzingsborden",
        body:
          "- **Voorrangsborden** (type B): regelen de voorrang. B1 (omgekeerde driehoek) = voorrang verlenen; B5 (achthoek) = stop; B9 = voorrangsweg.\n- **Aanwijzingsborden** (type F): blauw, geven nuttige informatie (bv. F1 bebouwde kom, F19 eenrichtingsweg, F12a woonerf).\n- **Onderborden** vullen het hoofdbord aan met bv. afstand, richting of doelgroep.",
        imageUrl:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Belgian%20road%20sign%20B5.svg",
        imageAlt: "Stopbord B5",
        quiz: [
          {
            text: "Welke vorm heeft het stopbord?",
            explanation:
              "Het stopbord (B5) is achthoekig (octagoon) en rood. Je moet er volledig stoppen en voorrang verlenen.",
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
    ],
  },
];
