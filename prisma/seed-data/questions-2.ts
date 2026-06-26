import type { QuestionSeed } from "./types";

// Hoofdstukken 5–8: Kruisen en inhalen, De voorrang, Waar rijden, Stilstaan en parkeren.
export const questions2: QuestionSeed[] = [
  // ===================================================== 5. KRUISEN EN INHALEN
  {
    category: "kruisen-inhalen",
    text: "Langs welke kant haal je in principe in?",
    explanation:
      "Je haalt in principe langs links in. Er zijn uitzonderingen, bv. een bestuurder die naar links afslaat haal je rechts in.",
    difficulty: "EASY",
    options: [
      { text: "Langs links", correct: true },
      { text: "Langs rechts" },
      { text: "Langs de kant die je verkiest" },
      { text: "Inhalen mag nooit" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Een bestuurder vóór jou slaat links af en staat al in het midden van de rijbaan. Hoe haal je hem in?",
    explanation:
      "Wie links wil afslaan en zich naar het midden heeft begeven, haal je uitzonderlijk langs rechts in.",
    difficulty: "MEDIUM",
    options: [
      { text: "Langs rechts", correct: true },
      { text: "Langs links" },
      { text: "Je mag niet inhalen" },
      { text: "Je duwt hem opzij" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Mag je inhalen vlak vóór een oversteekplaats voor voetgangers?",
    explanation:
      "Neen. Inhalen vlak vóór en op een oversteekplaats voor voetgangers is verboden omdat je het zicht ontneemt. Dit is een ernstige fout.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, dat is verboden", correct: true },
      { text: "Ja, als je snel rijdt" },
      { text: "Ja, buiten de bebouwde kom" },
      { text: "Ja, als er niemand wacht" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Wat betekent het bord C35?",
    explanation:
      "Bord C35 verbiedt het inhalen langs links van gespannen en voertuigen met meer dan twee wielen. Fietsers en bromfietsers mag je nog wel inhalen.",
    difficulty: "MEDIUM",
    options: [
      { text: "Verboden in te halen (meersporige voertuigen)", correct: true },
      { text: "Einde inhaalverbod" },
      { text: "Verplicht in te halen" },
      { text: "Maximumsnelheid" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Mag je inhalen op een overweg?",
    explanation:
      "Neen, inhalen op een overweg met spoorstaven is verboden. Het is een gevaarlijke plaats waar je niet wil vastzitten.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, dat is verboden", correct: true },
      { text: "Ja, als de slagbomen open zijn" },
      { text: "Ja, altijd" },
      { text: "Ja, als er geen trein komt" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Wat doe je vóór je begint in te halen?",
    explanation:
      "Je controleert je spiegels en dode hoek, geeft tijdig je richtingaanwijzer aan en verzekert je dat de weg ver genoeg vrij is.",
    difficulty: "EASY",
    options: [
      { text: "Spiegels en dode hoek controleren en richting aangeven", correct: true },
      { text: "Gewoon uitwijken zonder te kijken" },
      { text: "Toeteren en gas geven" },
      { text: "Je lichten doven" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Je wordt zelf ingehaald. Wat doe je?",
    explanation:
      "Je houdt zoveel mogelijk rechts en versnelt niet. Je laat de inhalende bestuurder vlot passeren.",
    difficulty: "EASY",
    options: [
      { text: "Rechts houden en niet versnellen", correct: true },
      { text: "Versnellen om hem te beletten" },
      { text: "Naar links uitwijken" },
      { text: "Plots remmen" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Op een smalle weg komt een tegenligger. De doorgang wordt moeilijk. Wat is de regel?",
    explanation:
      "Bij kruisen houd je rechts en vertraag je. Als kruisen onmogelijk is, wijkt de bestuurder uit aan wiens kant de hindernis (bv. geparkeerde auto) staat.",
    difficulty: "MEDIUM",
    options: [
      { text: "Rechts houden, vertragen; wie de hindernis aan zijn kant heeft wacht", correct: true },
      { text: "De grootste auto heeft altijd voorrang" },
      { text: "De snelste rijdt eerst" },
      { text: "Beiden gas geven" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Mag je een file links inhalen door op de pechstrook te rijden?",
    explanation:
      "Neen, de pechstrook is enkel voor noodgevallen. Inhalen via de pechstrook is verboden en gevaarlijk.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, de pechstrook is enkel voor noodgevallen", correct: true },
      { text: "Ja, bij file mag dat" },
      { text: "Ja, als je traag rijdt" },
      { text: "Ja, met je gevarenlichten aan" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Wanneer mag je niet inhalen wegens onvoldoende zicht?",
    explanation:
      "Je haalt niet in in een bocht, op een helling of bij mist/duisternis wanneer je niet ver genoeg vrij zicht hebt om veilig terug in te voegen.",
    difficulty: "MEDIUM",
    options: [
      { text: "In bochten of op hellingen met onvoldoende zicht", correct: true },
      { text: "Altijd, ook met goed zicht" },
      { text: "Enkel 's nachts op de autosnelweg" },
      { text: "Nooit, inhalen mag altijd" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Een tram staat stil aan een halte zonder verhoogd perron en reizigers stappen uit. Wat doe je?",
    explanation:
      "Je stopt om de uit- en instappende reizigers veilig te laten oversteken naar het trottoir.",
    isSevere: true,
    difficulty: "HARD",
    options: [
      { text: "Stoppen en de reizigers veilig laten oversteken", correct: true },
      { text: "Snel voorbij de tram rijden" },
      { text: "Toeteren" },
      { text: "Achteruitrijden" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Mag je tijdens het inhalen de doorlopende witte streep overschrijden?",
    explanation:
      "Neen, een doorlopende streep mag je niet overschrijden. Inhalen waarbij je die streep moet kruisen, is dus niet toegelaten.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, een doorlopende streep mag je niet overschrijden", correct: true },
      { text: "Ja, kort even mag" },
      { text: "Ja, met richtingaanwijzer" },
      { text: "Ja, als je snel terugkeert" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Je nadert een autobus van het geregeld vervoer die binnen de bebouwde kom wil wegrijden en richting aangeeft. Wat is je plicht?",
    explanation:
      "Binnen de bebouwde kom moet je vertragen en zo nodig stoppen om de bus te laten wegrijden. Buiten de bebouwde kom heeft de bus deze voorrang niet.",
    difficulty: "MEDIUM",
    options: [
      { text: "Vertragen en de bus laten wegrijden", correct: true },
      { text: "Snel voorbijrijden" },
      { text: "De bus moet wachten" },
      { text: "Toeteren en doorrijden" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Wat is een veilige regel om te bepalen of je genoeg ruimte hebt om in te halen?",
    explanation:
      "Je mag pas inhalen als je zeker bent dat je de manoeuvre veilig kan voltooien zonder tegenliggers te hinderen en zonder gevaar bij het terugkeren.",
    difficulty: "EASY",
    options: [
      { text: "Pas inhalen als je de hele manoeuvre veilig kan voltooien", correct: true },
      { text: "Inhalen en zien wat er gebeurt" },
      { text: "Inhalen zolang je toetert" },
      { text: "Inhalen tot iemand remt" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Na het inhalen keer je terug naar rechts...",
    explanation:
      "Je keert tijdig en zonder de ingehaalde bestuurder te hinderen terug naar de rechterrijstrook.",
    difficulty: "EASY",
    options: [
      { text: "tijdig en zonder de ingehaalde bestuurder te hinderen", correct: true },
      { text: "zo laat mogelijk, vlak voor hem snijden" },
      { text: "nooit, je blijft links" },
      { text: "enkel als hij toetert" },
    ],
  },
  {
    category: "kruisen-inhalen",
    text: "Mag je een prioritair voertuig met sirene inhalen?",
    explanation:
      "Je haalt een prioritair voertuig in functie nooit in; je maakt er net plaats voor. Je volgt het ook niet van dichtbij.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, je maakt er plaats voor", correct: true },
      { text: "Ja, om sneller weg te zijn" },
      { text: "Ja, als het traag rijdt" },
      { text: "Ja, langs rechts" },
    ],
  },

  // ===================================================== 6. DE VOORRANG
  {
    category: "voorrang",
    text: "Wat is de basisregel voor voorrang op een kruispunt zonder borden of lichten?",
    explanation:
      "Zonder borden, markeringen of lichten geldt de voorrang van rechts: je verleent voorrang aan elke bestuurder die van rechts komt.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Voorrang aan de bestuurder die van rechts komt", correct: true },
      { text: "Voorrang aan wie rechtdoor rijdt" },
      { text: "Voorrang aan de snelste" },
      { text: "Voorrang aan de grootste wagen" },
    ],
  },
  {
    category: "voorrang",
    text: "Geldt de voorrang van rechts ook tegenover een fietser die van rechts komt?",
    explanation:
      "Ja, de voorrang van rechts geldt ook tegenover fietsers en bromfietsers die van rechts komen.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Ja, ook fietsers van rechts hebben voorrang", correct: true },
      { text: "Neen, fietsers hebben nooit voorrang" },
      { text: "Enkel binnen de bebouwde kom" },
      { text: "Enkel op de autosnelweg" },
    ],
  },
  {
    category: "voorrang",
    text: "Wat is de juiste volgorde van de voorrangsregelingen?",
    explanation:
      "De volgorde: 1) bevelen van een bevoegd persoon, 2) verkeerslichten, 3) verkeersborden, 4) de verkeersregels (zoals voorrang van rechts).",
    difficulty: "HARD",
    options: [
      { text: "Bevoegd persoon > lichten > borden > verkeersregels", correct: true },
      { text: "Verkeersregels > borden > lichten > agent" },
      { text: "Lichten > agent > borden > regels" },
      { text: "Borden > agent > lichten > regels" },
    ],
  },
  {
    category: "voorrang",
    text: "Een verkeerslicht staat groen, maar een agent gebaart je te stoppen. Wat doe je?",
    explanation:
      "Bevelen van een bevoegd persoon gaan vóór op verkeerslichten. Je stopt, ook al staat het licht op groen.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Je stopt, de agent gaat vóór het licht", correct: true },
      { text: "Je rijdt door, groen is groen" },
      { text: "Je toetert" },
      { text: "Je versnelt" },
    ],
  },
  {
    category: "voorrang",
    text: "Wat moet je doen bij het bord B1 (omgekeerde driehoek)?",
    explanation:
      "Bij B1 'voorrang verlenen' moet je voorrang geven aan het verkeer op de kruisende weg. Je moet niet noodzakelijk stoppen als de weg vrij is.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Voorrang verlenen aan het kruisende verkeer", correct: true },
      { text: "Altijd volledig stoppen" },
      { text: "Je hebt voorrang" },
      { text: "Niets, gewoon doorrijden" },
    ],
  },
  {
    category: "voorrang",
    text: "Wat is verplicht bij het bord B5 (stop)?",
    explanation:
      "Bij een stopbord moet je volledig tot stilstand komen aan de stopstreep en voorrang verlenen, ook als de weg vrij lijkt.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Volledig stoppen en voorrang verlenen", correct: true },
      { text: "Enkel vertragen" },
      { text: "Je hebt voorrang" },
      { text: "Toeteren en doorrijden" },
    ],
  },
  {
    category: "voorrang",
    text: "Je rijdt op een voorrangsweg (bord B9). Wat betekent dat?",
    explanation:
      "Op een voorrangsweg moet het verkeer van de zijwegen, ook van rechts, jou voorrang verlenen. Let toch op want niet iedereen respecteert dit.",
    difficulty: "MEDIUM",
    options: [
      { text: "Het verkeer van de zijwegen moet jou voorrang verlenen", correct: true },
      { text: "Jij moet altijd voorrang verlenen" },
      { text: "Je moet stoppen aan elk kruispunt" },
      { text: "De voorrang van rechts geldt nog steeds tegen jou" },
    ],
  },
  {
    category: "voorrang",
    text: "Op een rotonde met bord B1: aan wie verleen je voorrang?",
    explanation:
      "Bij een rotonde met 'voorrang verlenen' verleen je voorrang aan de bestuurders die al op de rotonde rijden.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Aan de bestuurders die al op de rotonde rijden", correct: true },
      { text: "Aan wie de rotonde wil oprijden" },
      { text: "Aan niemand, je hebt voorrang" },
      { text: "Aan de bestuurder rechts van je buiten de rotonde" },
    ],
  },
  {
    category: "voorrang",
    text: "Je wil links afslaan op een kruispunt. Aan wie verleen je voorrang?",
    explanation:
      "Bij links afslaan verleen je voorrang aan de tegemoetkomende bestuurders die rechtdoor rijden of rechts afslaan, én aan het verkeer dat eventueel voorrang heeft.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Aan de tegenliggers die rechtdoor of rechts afslaan", correct: true },
      { text: "Aan niemand" },
      { text: "Enkel aan voetgangers" },
      { text: "Enkel aan fietsers" },
    ],
  },
  {
    category: "voorrang",
    text: "Wat betekent een oranje-geel knipperend verkeerslicht?",
    explanation:
      "Een oranje-geel knipperlicht betekent: vrije doorgang met verhoogde voorzichtigheid. De normale voorrangsregels (bv. voorrang van rechts of borden) blijven gelden.",
    difficulty: "MEDIUM",
    options: [
      { text: "Vrije doorgang met verhoogde voorzichtigheid; normale regels gelden", correct: true },
      { text: "Je moet altijd stoppen" },
      { text: "Je hebt altijd voorrang" },
      { text: "Het licht is defect, negeer het" },
    ],
  },
  {
    category: "voorrang",
    text: "Wat doe je bij een vast oranje-geel licht?",
    explanation:
      "Een vast oranje licht betekent stoppen, tenzij je zo dicht genaderd bent dat veilig stoppen niet meer mogelijk is.",
    difficulty: "MEDIUM",
    options: [
      { text: "Stoppen, tenzij je niet meer veilig kan stoppen", correct: true },
      { text: "Versnellen om nog door te rijden" },
      { text: "Gewoon doorrijden" },
      { text: "Toeteren" },
    ],
  },
  {
    category: "voorrang",
    text: "Een rood licht met een groene pijl naar rechts brandt. Wat mag je?",
    explanation:
      "Bij rood met een groene pijl mag je in de richting van de pijl afslaan, na voorrang te verlenen aan andere weggebruikers, vooral voetgangers en fietsers.",
    difficulty: "HARD",
    options: [
      { text: "In de richting van de pijl afslaan na voorrang te verlenen", correct: true },
      { text: "Rechtdoor rijden" },
      { text: "Niets, rood is rood" },
      { text: "Links afslaan" },
    ],
  },
  {
    category: "voorrang",
    text: "Je verlaat een tankstation/parking en rijdt de openbare weg op. Wie heeft voorrang?",
    explanation:
      "Wie van een eigendom of parking de openbare weg oprijdt, voert een manoeuvre uit en moet voorrang verlenen aan alle weggebruikers op de weg.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Het verkeer op de openbare weg; jij verleent voorrang", correct: true },
      { text: "Jij, want je komt van rechts" },
      { text: "Niemand heeft voorrang" },
      { text: "De fietsers moeten wachten" },
    ],
  },
  {
    category: "voorrang",
    text: "Twee bestuurders willen allebei links afslaan en komen recht tegenover elkaar. Hoe kruisen ze?",
    explanation:
      "Wanneer twee tegenliggers beiden links afslaan, draaien ze in principe vóór elkaar (links om links), tenzij de plaatsgesteldheid het anders vereist.",
    difficulty: "HARD",
    options: [
      { text: "Ze draaien vóór elkaar (links om links)", correct: true },
      { text: "De snelste eerst" },
      { text: "De grootste wagen eerst" },
      { text: "Beiden stoppen voor altijd" },
    ],
  },
  {
    category: "voorrang",
    text: "Geldt de voorrang van rechts onbeperkt, ook als de rechtse bestuurder uit een verboden richting komt?",
    explanation:
      "Voorrang van rechts geldt niet voor een bestuurder die uit een verboden rijrichting komt of een onreglementair manoeuvre uitvoert; maar bij twijfel blijf je voorzichtig.",
    difficulty: "HARD",
    options: [
      { text: "Neen, niet wie uit een verboden richting komt; blijf wel voorzichtig", correct: true },
      { text: "Ja, altijd onbeperkt" },
      { text: "Neen, voorrang van rechts bestaat niet" },
      { text: "Enkel 's nachts" },
    ],
  },
  {
    category: "voorrang",
    text: "Je nadert een onbewaakte overweg (zonder slagbomen). Wat doe je?",
    explanation:
      "Bij een overweg zonder slagbomen nader je traag, kijk je goed in beide richtingen en steek je enkel over als de baan vrij is.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Traag naderen, goed kijken en enkel oversteken als het vrij is", correct: true },
      { text: "Snel oversteken zonder kijken" },
      { text: "Op de sporen wachten" },
      { text: "Toeteren en doorrijden" },
    ],
  },
  {
    category: "voorrang",
    text: "Een voetganger steekt over op een kruispunt waar jij afslaat. Wie heeft voorrang?",
    explanation:
      "De voetganger die de rijbaan oversteekt die jij inrijdt bij het afslaan, heeft voorrang. Je laat hem oversteken.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "De voetganger", correct: true },
      { text: "Jij, want je rijdt al" },
      { text: "Niemand" },
      { text: "De voetganger moet wachten" },
    ],
  },
  {
    category: "voorrang",
    text: "Wat betekent een gele ruit met witte rand (voorrangsweg) die wegvalt (bord B11)?",
    explanation:
      "Bord B11 geeft het einde van de voorrangsweg aan. Vanaf dan geldt opnieuw de gewone voorrang van rechts.",
    difficulty: "MEDIUM",
    options: [
      { text: "Einde voorrangsweg; opnieuw voorrang van rechts", correct: true },
      { text: "Begin van een voorrangsweg" },
      { text: "Verboden richting" },
      { text: "Parkeerverbod" },
    ],
  },
  {
    category: "voorrang",
    text: "Mag je een kruispunt oprijden als je ziet dat je er niet voorbij geraakt (file voorbij het kruispunt)?",
    explanation:
      "Neen, je mag een kruispunt niet blokkeren. Je wacht vóór het kruispunt tot je er volledig over kan, zelfs bij groen licht.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, je mag het kruispunt niet blokkeren", correct: true },
      { text: "Ja, bij groen mag je altijd oprijden" },
      { text: "Ja, en je wacht middenin" },
      { text: "Ja, met gevarenlichten aan" },
    ],
  },
  {
    category: "voorrang",
    text: "Wie heeft voorrang: een bestuurder op een aardeweg of een bestuurder op een verharde weg?",
    explanation:
      "Wie van een aardeweg (onverharde weg) komt en een verharde weg oprijdt, moet voorrang verlenen aan het verkeer op de verharde weg.",
    difficulty: "HARD",
    options: [
      { text: "De bestuurder op de verharde weg heeft voorrang", correct: true },
      { text: "De bestuurder op de aardeweg heeft voorrang" },
      { text: "Wie van rechts komt, ongeacht de weg" },
      { text: "De snelste" },
    ],
  },
  {
    category: "voorrang",
    text: "Hoe gebruik je je richtingaanwijzer op een rotonde?",
    explanation:
      "Je geeft geen richting bij het oprijden, maar je gebruikt je richtingaanwijzer naar rechts zodra je de rotonde wil verlaten.",
    difficulty: "MEDIUM",
    options: [
      { text: "Rechts aangeven net voor je de rotonde verlaat", correct: true },
      { text: "Links aangeven bij het verlaten" },
      { text: "Nooit een richting aangeven" },
      { text: "Altijd links aangeven op de rotonde" },
    ],
  },

  // ===================================================== 7. WAAR RIJDEN
  {
    category: "waar-rijden",
    text: "Aan welke kant van de rijbaan rijd je in principe?",
    explanation:
      "Je rijdt zo veel mogelijk rechts. De linkerrijstroken zijn bedoeld om in te halen of vooraan af te slaan.",
    difficulty: "EASY",
    options: [
      { text: "Zo veel mogelijk rechts", correct: true },
      { text: "In het midden" },
      { text: "Zo veel mogelijk links" },
      { text: "Waar je wil" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Waarvoor dient de linkerrijstrook op de autosnelweg?",
    explanation:
      "De linkerrijstroken dienen om in te halen. Na het inhalen keer je terug naar rechts.",
    difficulty: "EASY",
    options: [
      { text: "Om in te halen", correct: true },
      { text: "Om rustig te cruisen" },
      { text: "Om te parkeren" },
      { text: "Voor traag verkeer" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Mag je met de auto over een verplicht fietspad (bord D7) rijden?",
    explanation:
      "Neen, een verplicht fietspad is voorbehouden voor fietsers en bepaalde bromfietsers. Auto's mogen er niet rijden of parkeren.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Neen", correct: true },
      { text: "Ja, als er geen fietser is" },
      { text: "Ja, om in te halen" },
      { text: "Ja, om te parkeren" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Mag je op een busstrook rijden?",
    explanation:
      "Een busstrook is voorbehouden voor bussen (en soms taxi's/fietsers). Je mag er in principe niet op rijden, behalve om af te slaan als dat toegelaten is.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, behalve om af te slaan indien toegelaten", correct: true },
      { text: "Ja, altijd" },
      { text: "Ja, bij file" },
      { text: "Ja, om te parkeren" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Op een rijbaan met twee rijstroken in jouw richting binnen de bebouwde kom: mag je vrij de meest geschikte strook kiezen?",
    explanation:
      "Binnen de bebouwde kom op een weg met meerdere rijstroken mag je de strook kiezen die het best past bij je bestemming.",
    difficulty: "MEDIUM",
    options: [
      { text: "Ja, binnen de bebouwde kom mag je de gepaste strook kiezen", correct: true },
      { text: "Neen, altijd uiterst rechts" },
      { text: "Neen, altijd links" },
      { text: "Enkel de middenstrook" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Wat is 'rits-rijden' (ritssluiting)?",
    explanation:
      "Bij een versmalling rij je door tot het einde van je rijstrook en voeg je beurtelings in met de andere strook (om de beurt), wat de doorstroming bevordert.",
    difficulty: "MEDIUM",
    options: [
      { text: "Beurtelings invoegen aan het einde van een versmallende strook", correct: true },
      { text: "Zo snel mogelijk vooraan invoegen" },
      { text: "Nooit invoegen" },
      { text: "Op de pechstrook rijden" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Wat betekent een witte pijl op de rijstrook die naar links wijst?",
    explanation:
      "Voorselectiepijlen geven aan welke richting je vanuit die rijstrook moet volgen. Een pijl naar links betekent dat die strook bestemd is om links af te slaan.",
    difficulty: "MEDIUM",
    options: [
      { text: "Die rijstrook is bestemd om links af te slaan", correct: true },
      { text: "Je moet er parkeren" },
      { text: "Verboden richting" },
      { text: "Je mag er rechtdoor rijden" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Mag je achteruitrijden op de autosnelweg?",
    explanation:
      "Neen, achteruitrijden, keren of stilstaan op de autosnelweg is verboden en zeer gevaarlijk.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Neen, dat is verboden en zeer gevaarlijk", correct: true },
      { text: "Ja, als je je afrit miste" },
      { text: "Ja, op de pechstrook" },
      { text: "Ja, traag" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Wat is een fietsstraat?",
    explanation:
      "In een fietsstraat (aangeduid met borden/markering) mogen auto's de fietsers niet inhalen en geldt maximum 30 km/u. Fietsers mogen de hele rijstrook gebruiken.",
    difficulty: "MEDIUM",
    options: [
      { text: "Een straat waar auto's fietsers niet mogen inhalen, max. 30 km/u", correct: true },
      { text: "Een straat enkel voor auto's" },
      { text: "Een autosnelweg voor fietsers" },
      { text: "Een parkeerstraat" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Je nadert een rotonde. Welke rijstrook gebruik je als je de eerste afrit neemt?",
    explanation:
      "Voor de eerste afrit blijf je in principe op de rechterrijstrook van de rotonde en geef je rechts aan.",
    difficulty: "MEDIUM",
    options: [
      { text: "De rechterrijstrook, met rechts aangeven", correct: true },
      { text: "De linkerrijstrook" },
      { text: "Het midden" },
      { text: "Maakt niet uit" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Mag je een doorlopende witte streep overschrijden om een geparkeerde auto te ontwijken?",
    explanation:
      "Een doorlopende streep mag je niet overschrijden. Je wacht tot de weg vrij is en je veilig kan passeren wanneer de markering het toelaat.",
    difficulty: "HARD",
    options: [
      { text: "Neen, een doorlopende streep mag je niet overschrijden", correct: true },
      { text: "Ja, altijd" },
      { text: "Ja, met je gevarenlichten aan" },
      { text: "Ja, als je toetert" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Op een weg met het bord F19 (eenrichtingsverkeer) mag je...",
    explanation:
      "Bij eenrichtingsverkeer (F19) mag je enkel in de aangeduide richting rijden. Tegen de richting inrijden is verboden (bord C1 aan de andere kant).",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "enkel in de aangeduide richting rijden", correct: true },
      { text: "in beide richtingen rijden" },
      { text: "achteruit de straat inrijden" },
      { text: "tegen de richting rijden bij file" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Waar plaats je je op de rijbaan als je links wil afslaan?",
    explanation:
      "Vóór het afslaan naar links begeef je je tijdig naar links (tegen de aslijn), na je spiegels en richtingaanwijzer.",
    difficulty: "MEDIUM",
    options: [
      { text: "Tijdig naar links, tegen de aslijn", correct: true },
      { text: "Uiterst rechts" },
      { text: "Op het fietspad" },
      { text: "In het midden van het kruispunt" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Mag je rechts inhalen wanneer de rijstroken binnen de bebouwde kom vol staan?",
    explanation:
      "Binnen de bebouwde kom, op een weg met meerdere rijstroken, mag je in de rechterstrook sneller rijden dan in de linkerstrook wanneer de stroken vol verkeer staan; dat geldt niet als 'inhalen'.",
    difficulty: "HARD",
    options: [
      { text: "Ja, binnen de bebouwde kom bij volle rijstroken mag dat", correct: true },
      { text: "Neen, nooit rechts voorbijrijden" },
      { text: "Enkel op de autosnelweg" },
      { text: "Enkel 's nachts" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Wat doe je als je rijstrook ophoudt (bord 'rijstrook vermindert')?",
    explanation:
      "Je voegt tijdig en veilig in op de doorlopende rijstrook, bij voorkeur via ritssluiting, zonder anderen te hinderen.",
    difficulty: "MEDIUM",
    options: [
      { text: "Tijdig en veilig invoegen, bij voorkeur via ritssluiting", correct: true },
      { text: "Doorrijden tot je niet meer verder kan en forceren" },
      { text: "Stoppen op je strook" },
      { text: "Achteruitrijden" },
    ],
  },
  {
    category: "waar-rijden",
    text: "Mag je stilstaan of rijden op een gemarkeerde 'verdrijvingsstrook' (witte schuine strepen)?",
    explanation:
      "Een verdrijvingsstrook (arcering met schuine strepen) mag je niet gebruiken om te rijden of stil te staan; ze scheidt verkeersstromen.",
    difficulty: "HARD",
    options: [
      { text: "Neen, je rijdt of staat er niet op", correct: true },
      { text: "Ja, om te parkeren" },
      { text: "Ja, om in te halen" },
      { text: "Ja, bij file" },
    ],
  },

  // ===================================================== 8. STILSTAAN EN PARKEREN
  {
    category: "stilstaan-parkeren",
    text: "Wat is het verschil tussen stilstaan en parkeren?",
    explanation:
      "Stilstaan is kort stoppen om personen te laten in-/uitstappen of te laden/lossen. Parkeren is langer stilstaan om een andere reden.",
    difficulty: "EASY",
    options: [
      { text: "Stilstaan = kort voor in/uitstappen of laden/lossen; parkeren = langer", correct: true },
      { text: "Er is geen verschil" },
      { text: "Stilstaan mag enkel 's nachts" },
      { text: "Parkeren is altijd verboden" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Wat mag je nog bij bord E1 (parkeerverbod)?",
    explanation:
      "Bij parkeerverbod (E1) mag je nog stilstaan om mensen te laten in-/uitstappen of om te laden en lossen. Parkeren mag niet.",
    difficulty: "MEDIUM",
    options: [
      { text: "Stilstaan om in/uit te stappen of te laden/lossen", correct: true },
      { text: "De hele dag parkeren" },
      { text: "Niets, ook niet stilstaan" },
      { text: "Parkeren met schijf" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Wat betekent bord E3?",
    explanation:
      "Bord E3 betekent dat zowel stilstaan als parkeren verboden is op die plaats.",
    difficulty: "MEDIUM",
    options: [
      { text: "Verboden stil te staan én te parkeren", correct: true },
      { text: "Enkel parkeerverbod" },
      { text: "Parkeren toegelaten" },
      { text: "Begin bebouwde kom" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Op hoeveel meter vóór een oversteekplaats voor voetgangers mag je niet parkeren of stilstaan?",
    explanation:
      "Je mag niet parkeren of stilstaan binnen de 5 meter vóór een oversteekplaats voor voetgangers, zodat het zicht vrij blijft.",
    difficulty: "MEDIUM",
    options: [
      { text: "5 meter", correct: true },
      { text: "1 meter" },
      { text: "10 meter" },
      { text: "20 meter" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Mag je parkeren op een fietspad?",
    explanation:
      "Neen, parkeren of stilstaan op een fietspad is verboden. Je dwingt fietsers dan tot een gevaarlijke uitwijkbeweging.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Neen, dat is verboden", correct: true },
      { text: "Ja, kort even" },
      { text: "Ja, als er geen fietser is" },
      { text: "Ja, met gevarenlichten" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Mag je parkeren op een plaats voorbehouden voor personen met een handicap zonder de juiste kaart?",
    explanation:
      "Neen, deze plaatsen zijn voorbehouden voor houders van een geldige parkeerkaart voor personen met een handicap.",
    difficulty: "EASY",
    options: [
      { text: "Neen, enkel met geldige parkeerkaart", correct: true },
      { text: "Ja, als er plaats is" },
      { text: "Ja, kort even" },
      { text: "Ja, 's nachts" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Hoe gebruik je de parkeerschijf (blauwe zone)?",
    explanation:
      "In een blauwe zone plaats je je parkeerschijf op het aankomstuur (afgerond naar het volgende halfuur) zichtbaar achter de voorruit, en respecteer je de toegelaten duur.",
    difficulty: "MEDIUM",
    options: [
      { text: "Schijf zichtbaar plaatsen op het aankomstuur en de duur respecteren", correct: true },
      { text: "Geen schijf nodig" },
      { text: "De schijf op de eindtijd zetten" },
      { text: "De schijf in de koffer leggen" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Mag je dubbelparkeren (naast een geparkeerde auto)?",
    explanation:
      "Dubbelparkeren is verboden: je staat dan op de rijbaan en hindert het verkeer.",
    difficulty: "EASY",
    options: [
      { text: "Neen, dat is verboden", correct: true },
      { text: "Ja, kort even" },
      { text: "Ja, met gevarenlichten" },
      { text: "Ja, om te laden/lossen onbeperkt" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Aan welke kant parkeer je op een tweerichtingsweg binnen de bebouwde kom?",
    explanation:
      "Op een tweerichtingsweg parkeer je aan de rechterkant, in de rijrichting. Aan de linkerkant parkeren mag enkel in eenrichtingsstraten.",
    difficulty: "MEDIUM",
    options: [
      { text: "Aan de rechterkant, in de rijrichting", correct: true },
      { text: "Aan de linkerkant" },
      { text: "In het midden" },
      { text: "Op het trottoir" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Mag je parkeren vóór een inrit van andermans eigendom?",
    explanation:
      "Neen, je mag niet parkeren voor de inrit van eigendommen, behalve voor je eigen inrit (en als je voertuig de nummerplaat van de woning niet hindert volgens lokale regels).",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, behalve voor je eigen inrit", correct: true },
      { text: "Ja, altijd" },
      { text: "Ja, kort even" },
      { text: "Ja, 's nachts" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Mag je op een kruispunt of binnen 5 meter ervan parkeren?",
    explanation:
      "Je mag niet parkeren of stilstaan op een kruispunt of dichter dan 5 meter ervan, omdat dit het zicht en de doorgang belemmert.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, niet op of binnen 5 meter van een kruispunt", correct: true },
      { text: "Ja, op de hoek" },
      { text: "Ja, kort even" },
      { text: "Ja, met schijf" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Hoe parkeer je correct ten opzichte van de rijrichting?",
    explanation:
      "Je parkeert evenwijdig met de rand van de rijbaan, in de rijrichting, behalve waar dwars- of schuinparkeren is aangeduid.",
    difficulty: "EASY",
    options: [
      { text: "Evenwijdig met de rand, in de rijrichting (tenzij anders aangeduid)", correct: true },
      { text: "Altijd dwars" },
      { text: "Tegen de rijrichting in" },
      { text: "Op het voetpad" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Mag je een geparkeerd voertuig verlaten met de motor draaiend?",
    explanation:
      "Wanneer je je voertuig verlaat, leg je de motor stil, haal je de sleutel weg en beveilig je het voertuig (handrem, vergrendelen).",
    difficulty: "EASY",
    options: [
      { text: "Neen, motor stilleggen en het voertuig beveiligen", correct: true },
      { text: "Ja, laat de motor maar draaien" },
      { text: "Ja, voor de verwarming" },
      { text: "Ja, met de deuren open" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Mag je parkeren op een plaats waar je het uitzicht op een verkeersbord of -licht belemmert?",
    explanation:
      "Neen, je mag niet zo parkeren dat je een verkeersbord of verkeerslicht onzichtbaar maakt voor andere weggebruikers.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, dat is verboden", correct: true },
      { text: "Ja, kort even" },
      { text: "Ja, als het bord klein is" },
      { text: "Ja, 's nachts" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Wat is 'betalend parkeren'?",
    explanation:
      "In een betalende zone moet je een parkeerticket nemen aan de automaat (of via app) en zichtbaar leggen, en de toegelaten duur respecteren.",
    difficulty: "EASY",
    options: [
      { text: "Een zone waar je voor het parkeren moet betalen via ticket of app", correct: true },
      { text: "Gratis parkeren met schijf" },
      { text: "Verboden te parkeren" },
      { text: "Parkeren enkel voor vrachtwagens" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Mag je stilstaan of parkeren op een verhoogde berm of trottoir?",
    explanation:
      "In principe parkeer je niet op het trottoir of de verhoogde berm, tenzij borden of markeringen dit uitdrukkelijk toelaten.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, tenzij borden of markeringen het toelaten", correct: true },
      { text: "Ja, altijd" },
      { text: "Ja, met twee wielen erop" },
      { text: "Ja, 's nachts" },
    ],
  },
  {
    category: "stilstaan-parkeren",
    text: "Op een helling parkeer je. Wat is een goede voorzorg?",
    explanation:
      "Op een helling trek je de handrem stevig aan, zet je een versnelling in (of P) en draai je de wielen zo dat de auto bij wegrollen naar de stoeprand draait.",
    difficulty: "HARD",
    options: [
      { text: "Handrem aan, versnelling/P, wielen naar de stoeprand draaien", correct: true },
      { text: "In neutraal laten staan" },
      { text: "Enkel de handrem licht aantrekken" },
      { text: "Niets, gewoon parkeren" },
    ],
  },
];
