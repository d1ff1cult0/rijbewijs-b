import type { QuestionSeed } from "./types";

// Hoofdstukken 1–4: De openbare weg, De weggebruikers, De auto, De snelheid.
export const questions1: QuestionSeed[] = [
  // ===================================================== 1. DE OPENBARE WEG
  {
    category: "openbare-weg",
    text: "Wat verstaat men onder de 'rijbaan'?",
    explanation:
      "De rijbaan is het deel van de openbare weg dat bestemd is voor het rijdende verkeer. Fietspaden en trottoirs maken er geen deel van uit.",
    difficulty: "EASY",
    options: [
      { text: "Het deel van de weg bestemd voor het rijdende verkeer", correct: true },
      { text: "Het voetpad" },
      { text: "Het fietspad" },
      { text: "De parkeerstrook" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat is een 'rijstrook'?",
    explanation:
      "Een rijstrook is een door overlangse markeringen afgebakend deel van de rijbaan dat breed genoeg is voor één file auto's.",
    difficulty: "EASY",
    options: [
      { text: "Een afgebakend deel van de rijbaan, breed genoeg voor één file auto's", correct: true },
      { text: "Een strook naast de weg om te parkeren" },
      { text: "Een verhoogd deel voor voetgangers" },
      { text: "De middenberm tussen twee rijbanen" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat betekent een witte doorlopende streep op het midden van de rijbaan?",
    explanation:
      "Een doorlopende witte streep mag je niet overschrijden en je mag er niet links van rijden. Ze scheidt de rijrichtingen waar inhalen gevaarlijk zou zijn.",
    difficulty: "MEDIUM",
    options: [
      { text: "Je mag de streep niet overschrijden", correct: true },
      { text: "Je mag vrij inhalen" },
      { text: "Ze duidt een fietspad aan" },
      { text: "Ze heeft geen enkele betekenis" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat geven gele onderbroken strepen langs de rand van de rijbaan aan?",
    explanation:
      "Gele onderbroken strepen langs de boordsteen of rand betekenen een parkeerverbod op die plaats.",
    difficulty: "MEDIUM",
    options: [
      { text: "Een parkeerverbod", correct: true },
      { text: "Een fietssuggestiestrook" },
      { text: "Verplicht parkeren" },
      { text: "Het einde van de bebouwde kom" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat is het verschil tussen een gelijkgrondse en een verhoogde berm?",
    explanation:
      "Een gelijkgrondse berm ligt op hetzelfde niveau als de rijbaan, een verhoogde berm ligt hoger (bv. een verhoogd trottoir).",
    difficulty: "EASY",
    options: [
      { text: "De gelijkgrondse berm ligt op hetzelfde niveau als de rijbaan, de verhoogde hoger", correct: true },
      { text: "Er is geen verschil" },
      { text: "De verhoogde berm is altijd een fietspad" },
      { text: "De gelijkgrondse berm is enkel voor auto's" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Op een autosnelweg, wat is de pechstrook?",
    explanation:
      "De pechstrook (vluchtstrook) is uitsluitend bestemd voor noodgevallen. Je mag er niet rijden of stilstaan zonder geldige reden.",
    difficulty: "MEDIUM",
    options: [
      { text: "Een strook enkel voor noodgevallen", correct: true },
      { text: "Een extra rijstrook bij druk verkeer" },
      { text: "Een strook om in te halen" },
      { text: "Een parkeerstrook voor vrachtwagens" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat is een 'oversteekplaats voor voetgangers'?",
    explanation:
      "Dat is een door witte banden (zebrapad) gemarkeerd deel van de rijbaan waar voetgangers voorrang hebben bij het oversteken.",
    difficulty: "EASY",
    options: [
      { text: "Een door witte banden gemarkeerd deel waar voetgangers oversteken", correct: true },
      { text: "Een fietspad" },
      { text: "Een busstrook" },
      { text: "Een parkeervak" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat duidt het bord F1 aan?",
    explanation:
      "Bord F1 markeert het begin van de bebouwde kom. Daar geldt standaard een maximumsnelheid van 50 km/u.",
    difficulty: "EASY",
    options: [
      { text: "Het begin van de bebouwde kom", correct: true },
      { text: "Het einde van de bebouwde kom" },
      { text: "Een woonerf" },
      { text: "Een autosnelweg" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat is een woonerf?",
    explanation:
      "Een woonerf (bord F12a) is een zone waar wonen primeert. Je rijdt er stapvoets (max. 20 km/u) en voetgangers mogen de hele breedte van de weg gebruiken.",
    difficulty: "MEDIUM",
    options: [
      { text: "Een zone waar je stapvoets rijdt en voetgangers de hele weg mogen gebruiken", correct: true },
      { text: "Een gewone straat met 50 km/u" },
      { text: "Een parkeerterrein" },
      { text: "Een autosnelweg in de stad" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Mag je op de gelijkgrondse berm rijden met de auto?",
    explanation:
      "In principe rijd je op de rijbaan. De berm is niet bedoeld om op te rijden, behalve in uitzonderlijke gevallen (bv. om een hindernis te vermijden) en zonder anderen in gevaar te brengen.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, in principe rijd je op de rijbaan", correct: true },
      { text: "Ja, altijd toegelaten" },
      { text: "Ja, om sneller te rijden" },
      { text: "Ja, om te parkeren waar je wil" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat betekenen verkeersgeleiders of vluchtheuvels op de rijbaan?",
    explanation:
      "Het zijn verhoogde eilandjes die het verkeer geleiden. Je houdt ze rechts, tenzij borden of markeringen anders aangeven.",
    difficulty: "MEDIUM",
    options: [
      { text: "Verhoogde eilandjes die het verkeer geleiden; je houdt ze in principe rechts", correct: true },
      { text: "Plaatsen om te parkeren" },
      { text: "Decoratie zonder functie" },
      { text: "Fietspaden" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Een fietspad wordt aangeduid door...",
    explanation:
      "Een fietspad wordt aangeduid door het bord D7, of door twee evenwijdige witte onderbroken strepen op de rijbaan.",
    difficulty: "EASY",
    options: [
      { text: "Het bord D7 of twee evenwijdige witte onderbroken strepen", correct: true },
      { text: "Een gele doorlopende streep" },
      { text: "Een rood bord met witte balk" },
      { text: "Een achthoekig bord" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat is een 'bijzonder overrijdbare bedding'?",
    explanation:
      "Dat is een deel van de weg (vaak voor bus of tram) dat je enkel in welbepaalde gevallen mag overrijden, bv. om af te slaan of een hindernis te ontwijken.",
    difficulty: "HARD",
    options: [
      { text: "Een deel dat je enkel in welbepaalde gevallen mag overrijden", correct: true },
      { text: "Een gewone rijstrook" },
      { text: "Een parkeervak" },
      { text: "Een trottoir" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat geldt op een 'erf' of in een 'fietsstraat' voor de snelheid?",
    explanation:
      "In een fietsstraat geldt maximum 30 km/u en mogen auto's fietsers niet inhalen. In een (woon)erf rijd je stapvoets (max. 20 km/u).",
    difficulty: "MEDIUM",
    options: [
      { text: "In een fietsstraat max. 30 km/u en geen fietsers inhalen", correct: true },
      { text: "Overal 50 km/u" },
      { text: "Geen snelheidsbeperking" },
      { text: "Altijd 70 km/u" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Waar bevindt het trottoir zich normaal en voor wie is het bestemd?",
    explanation:
      "Het trottoir ligt langs de rijbaan en is bestemd voor voetgangers. Bestuurders mogen er niet op rijden of parkeren.",
    difficulty: "EASY",
    options: [
      { text: "Langs de rijbaan, bestemd voor voetgangers", correct: true },
      { text: "In het midden van de rijbaan, voor fietsers" },
      { text: "Op de autosnelweg, voor traag verkeer" },
      { text: "Overal waar je wil parkeren" },
    ],
  },
  {
    category: "openbare-weg",
    text: "Wat betekent een gele doorlopende streep langs de boordsteen?",
    explanation:
      "Een gele doorlopende streep langs de rand betekent een verbod om er stil te staan én te parkeren.",
    difficulty: "MEDIUM",
    options: [
      { text: "Verbod om stil te staan en te parkeren", correct: true },
      { text: "Enkel parkeerverbod, stilstaan mag" },
      { text: "Verplicht parkeren" },
      { text: "Begin van een fietspad" },
    ],
  },

  // ===================================================== 2. DE WEGGEBRUIKERS
  {
    category: "weggebruikers",
    text: "Wie zijn 'zwakke weggebruikers'?",
    explanation:
      "Zwakke weggebruikers zijn voetgangers, fietsers en bestuurders van tweewielers — zij hebben geen beschermende carrosserie en zijn extra kwetsbaar.",
    difficulty: "EASY",
    options: [
      { text: "Voetgangers, fietsers en bestuurders van tweewielers", correct: true },
      { text: "Vrachtwagenchauffeurs" },
      { text: "Buschauffeurs" },
      { text: "Politievoertuigen" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Hoeveel zijdelingse afstand houd je minstens bij het inhalen van een fietser binnen de bebouwde kom?",
    explanation:
      "Binnen de bebouwde kom houd je minstens 1 meter zijdelingse afstand bij het inhalen van een fietser; buiten de bebouwde kom is dat minstens 1,5 meter.",
    difficulty: "MEDIUM",
    options: [
      { text: "1 meter", correct: true },
      { text: "0,5 meter" },
      { text: "1,5 meter" },
      { text: "2 meter" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Een voetganger steekt over op een zebrapad. Wat is je plicht?",
    explanation:
      "Voetgangers die oversteken of duidelijk willen oversteken op een oversteekplaats hebben voorrang. Je stopt zo nodig. Dit niet respecteren is een zware fout.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Stoppen en de voetganger laten oversteken", correct: true },
      { text: "Toeteren en doorrijden" },
      { text: "Versnellen om vóór hem te zijn" },
      { text: "Enkel stoppen buiten de bebouwde kom" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Een bus met het bord 'bus' wil vertrekken van een halte binnen de bebouwde kom en geeft richting aan. Wat doe je?",
    explanation:
      "Binnen de bebouwde kom moet je een lijnbus laten vertrekken die zijn richtingaanwijzer gebruikt. Je vermindert snelheid en stopt zo nodig.",
    difficulty: "MEDIUM",
    options: [
      { text: "Je laat de bus voorgaan en vertrekt vertraagt zo nodig", correct: true },
      { text: "Je rijdt snel voorbij" },
      { text: "De bus moet altijd op jou wachten" },
      { text: "Je toetert" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Wat doe je als je een blinde voetganger met een witte stok ziet?",
    explanation:
      "Een witte stok duidt op een blinde of slechtziende. Je bent extra voorzichtig en verleent voorrang bij het oversteken.",
    difficulty: "EASY",
    options: [
      { text: "Extra voorzichtig zijn en hem laten oversteken", correct: true },
      { text: "Toeteren zodat hij weet dat je er bent" },
      { text: "Gewoon doorrijden" },
      { text: "Versnellen" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Kinderen spelen langs de weg in een woonwijk. Hoe pas je je rijgedrag aan?",
    explanation:
      "Kinderen zijn onvoorspelbaar. Je vermindert je snelheid, blijft alert en bent klaar om te stoppen.",
    difficulty: "EASY",
    options: [
      { text: "Snelheid verminderen en klaar zijn om te stoppen", correct: true },
      { text: "Toeteren en doorrijden" },
      { text: "Niets veranderen" },
      { text: "Versnellen om snel weg te zijn" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Mag een fietser onder bepaalde voorwaarden door het rood rijden om rechts af te slaan?",
    explanation:
      "Waar het bord B22 staat, mag een fietser bij rood of oranje licht rechts afslaan, na voorrang te verlenen aan andere weggebruikers.",
    difficulty: "HARD",
    options: [
      { text: "Ja, waar bord B22 staat, na voorrang te verlenen", correct: true },
      { text: "Nooit" },
      { text: "Altijd, overal" },
      { text: "Enkel 's nachts" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Wie moet voorrang verlenen bij het verlaten van een parkeerplaats?",
    explanation:
      "Wie een manoeuvre uitvoert (zoals wegrijden van een parkeerplaats) moet voorrang verlenen aan de andere weggebruikers.",
    difficulty: "MEDIUM",
    options: [
      { text: "De bestuurder die wegrijdt (manoeuvre uitvoert)", correct: true },
      { text: "Het doorgaand verkeer" },
      { text: "De fietsers" },
      { text: "Niemand" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Een prioritair voertuig nadert met zwaailicht en sirene. Wat doe je?",
    explanation:
      "Je maakt onmiddellijk plaats, zo nodig door te stoppen of opzij te gaan, zelfs als je daarvoor (veilig) over een witte streep moet.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Onmiddellijk plaats maken en zo nodig stoppen", correct: true },
      { text: "Gewoon doorrijden" },
      { text: "Versnellen om uit de weg te zijn" },
      { text: "Wachten tot het voertuig toetert" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Waar moeten voetgangers stappen als er geen trottoir of berm is?",
    explanation:
      "Bij gebrek aan trottoir of begaanbare berm mogen voetgangers op de rijbaan stappen, zo dicht mogelijk bij de rand; buiten de bebouwde kom bij voorkeur links zodat ze tegenliggers zien.",
    difficulty: "HARD",
    options: [
      { text: "Op de rand van de rijbaan, buiten de kom bij voorkeur links", correct: true },
      { text: "In het midden van de rijbaan" },
      { text: "Op het fietspad, altijd" },
      { text: "Ze mogen niet op straat komen" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Wat is een 'bestuurder' volgens de wegcode?",
    explanation:
      "Een bestuurder is iedereen die een voertuig leidt of trek- of lastdieren geleidt. Een voetganger is geen bestuurder.",
    difficulty: "EASY",
    options: [
      { text: "Iedereen die een voertuig leidt of dieren geleidt", correct: true },
      { text: "Enkel wie een auto bestuurt" },
      { text: "Enkel een vrachtwagenchauffeur" },
      { text: "Een voetganger" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Mogen fietsers met twee naast elkaar rijden?",
    explanation:
      "Fietsers mogen met twee naast elkaar rijden, behalve wanneer kruisen niet mogelijk is. Buiten de bebouwde kom moeten ze achter elkaar gaan rijden bij naderend tegemoetkomend verkeer.",
    difficulty: "MEDIUM",
    options: [
      { text: "Ja, behalve wanneer kruisen onmogelijk wordt", correct: true },
      { text: "Nooit" },
      { text: "Altijd, ongeacht het verkeer" },
      { text: "Enkel op de autosnelweg" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Een gemachtigd opzichter (bv. aan een school) steekt zijn bord op om kinderen te laten oversteken. Wat doe je?",
    explanation:
      "Je moet stoppen. De gemachtigde opzichter heeft de bevoegdheid om het verkeer stil te leggen voor overstekende kinderen.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Stoppen en de kinderen laten oversteken", correct: true },
      { text: "Doorrijden, hij heeft geen gezag" },
      { text: "Toeteren" },
      { text: "Enkel vertragen" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Wat is je houding tegenover een tram?",
    explanation:
      "Een tram die rechtdoor rijdt of het verkeer kruist, heeft in veel gevallen voorrang. Je hindert nooit een tram en houdt rekening met zijn lange remafstand.",
    difficulty: "MEDIUM",
    options: [
      { text: "De tram niet hinderen; hij heeft vaak voorrang", correct: true },
      { text: "Altijd vóór de tram kruisen" },
      { text: "De tram moet altijd wachten" },
      { text: "Naast de tramsporen parkeren" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Mag je een rij militairen, een stoet of een groep kinderen onderbreken?",
    explanation:
      "Je mag een rij voetgangers in colonne, een stoet of een militaire colonne niet doorsnijden.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, je mag ze niet doorsnijden", correct: true },
      { text: "Ja, als je voorzichtig bent" },
      { text: "Ja, met je richtingaanwijzer aan" },
      { text: "Ja, buiten de bebouwde kom" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Wanneer moeten voetgangers de oversteekplaats gebruiken?",
    explanation:
      "Als er een oversteekplaats is op minder dan ongeveer 30 meter, moeten voetgangers die gebruiken om de rijbaan over te steken.",
    difficulty: "MEDIUM",
    options: [
      { text: "Als er een op minder dan ± 30 meter is", correct: true },
      { text: "Nooit" },
      { text: "Enkel 's nachts" },
      { text: "Enkel buiten de bebouwde kom" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Een fietser steekt de rijbaan over op een fietsoversteek (bord F50). Wat doe je?",
    explanation:
      "Je nadert traag en laat overstekende fietsers/bromfietsers veilig oversteken; je houdt er rekening mee dat ze sneller naderen dan voetgangers.",
    difficulty: "MEDIUM",
    options: [
      { text: "Traag naderen en hen veilig laten oversteken", correct: true },
      { text: "Toeteren en doorrijden" },
      { text: "Versnellen" },
      { text: "Op het fietspad parkeren" },
    ],
  },
  {
    category: "weggebruikers",
    text: "Wat is de algemene regel als je twijfelt of een voetganger wil oversteken?",
    explanation:
      "Bij twijfel handel je voorzichtig: verminder snelheid, wees klaar om te stoppen en geef de zwakke weggebruiker het voordeel van de twijfel.",
    difficulty: "EASY",
    options: [
      { text: "Voorzichtig handelen en klaar zijn om te stoppen", correct: true },
      { text: "Gewoon doorrijden" },
      { text: "Versnellen" },
      { text: "Toeteren tot hij wegloopt" },
    ],
  },

  // ===================================================== 3. DE AUTO
  {
    category: "de-auto",
    text: "Welke documenten moet je tijdens het rijden bij je hebben?",
    explanation:
      "Je hebt je rijbewijs, het inschrijvingsbewijs, het keuringsbewijs (indien van toepassing) en het verzekeringsbewijs bij je.",
    difficulty: "EASY",
    options: [
      { text: "Rijbewijs, inschrijvingsbewijs, keuringsbewijs en verzekeringsbewijs", correct: true },
      { text: "Enkel je rijbewijs" },
      { text: "Enkel het verzekeringsbewijs" },
      { text: "De aankoopfactuur van de wagen" },
    ],
  },
  {
    category: "de-auto",
    text: "Wanneer gebruik je je dimlichten (kruislichten)?",
    explanation:
      "Dimlichten gebruik je 's nachts en overdag bij verminderd zicht (regen, mist, sneeuw) en in tunnels.",
    difficulty: "EASY",
    options: [
      { text: "'s Nachts, bij slecht zicht en in tunnels", correct: true },
      { text: "Nooit" },
      { text: "Enkel op de autosnelweg" },
      { text: "Enkel bij zonnig weer" },
    ],
  },
  {
    category: "de-auto",
    text: "Wanneer mag je je grootlichten NIET gebruiken?",
    explanation:
      "Je mag geen grootlichten gebruiken wanneer je een tegenligger of voorligger kunt verblinden. Je dimt dan tijdig.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Wanneer je tegenliggers of voorliggers kan verblinden", correct: true },
      { text: "Op een verlaten weg in het donker" },
      { text: "Buiten de bebouwde kom zonder verlichting" },
      { text: "Wanneer er niemand in de buurt is" },
    ],
  },
  {
    category: "de-auto",
    text: "Wanneer mag je het mistlicht achteraan gebruiken?",
    explanation:
      "Het mistlicht achteraan mag enkel bij dichte mist of zware sneeuw met zicht onder ± 100 m. Anders verblind je het achterliggend verkeer.",
    difficulty: "MEDIUM",
    options: [
      { text: "Enkel bij dichte mist of zware sneeuw (zicht < 100 m)", correct: true },
      { text: "Altijd 's nachts" },
      { text: "Bij lichte regen" },
      { text: "Wanneer je geparkeerd staat" },
    ],
  },
  {
    category: "de-auto",
    text: "Hoe vaak moet een gewone personenwagen (ouder dan 4 jaar) in principe naar de keuring?",
    explanation:
      "Een personenwagen moet voor het eerst gekeurd worden na 4 jaar en daarna jaarlijks (en bij verkoop aan een particulier).",
    difficulty: "MEDIUM",
    options: [
      { text: "Jaarlijks vanaf 4 jaar oud", correct: true },
      { text: "Om de 5 jaar" },
      { text: "Nooit" },
      { text: "Enkel bij verkoop" },
    ],
  },
  {
    category: "de-auto",
    text: "Wat is de wettelijke minimale profieldiepte van autobanden?",
    explanation:
      "De banden moeten over de hele omtrek en breedte minstens 1,6 mm profiel hebben. Te gladde banden verlengen de remafstand sterk.",
    difficulty: "MEDIUM",
    options: [
      { text: "1,6 mm", correct: true },
      { text: "0,5 mm" },
      { text: "3 mm" },
      { text: "5 mm" },
    ],
  },
  {
    category: "de-auto",
    text: "Wat is het gevolg van een te lage bandenspanning?",
    explanation:
      "Een te lage bandenspanning verhoogt het brandstofverbruik en de slijtage, verlengt de remafstand en vergroot het risico op een klapband.",
    difficulty: "EASY",
    options: [
      { text: "Meer verbruik, meer slijtage en risico op een klapband", correct: true },
      { text: "Betere wegligging zonder nadelen" },
      { text: "Niets, het maakt niet uit" },
      { text: "Minder verbruik" },
    ],
  },
  {
    category: "de-auto",
    text: "Waarvoor dient de hoofdsteun in de auto?",
    explanation:
      "De hoofdsteun, correct ingesteld op ooghoogte, beschermt je nek bij een aanrijding (whiplash).",
    difficulty: "EASY",
    options: [
      { text: "Je nek beschermen bij een aanrijding", correct: true },
      { text: "Comfortabel slapen" },
      { text: "De radio beter horen" },
      { text: "Hij heeft geen functie" },
    ],
  },
  {
    category: "de-auto",
    text: "Wie moet de veiligheidsgordel dragen in de auto?",
    explanation:
      "Alle inzittenden, voor- én achteraan, moeten de gordel dragen als die aanwezig is. De bestuurder is verantwoordelijk voor passagiers jonger dan 18 jaar.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Alle inzittenden, voor- en achteraan", correct: true },
      { text: "Enkel de bestuurder" },
      { text: "Enkel de voorpassagier" },
      { text: "Niemand is verplicht" },
    ],
  },
  {
    category: "de-auto",
    text: "Tot welke leeftijd/lengte moeten kinderen in een aangepast kinderzitje vervoerd worden?",
    explanation:
      "Kinderen kleiner dan 135 cm moeten in een aan hun maat aangepast kinderbeveiligingssysteem worden vervoerd.",
    difficulty: "MEDIUM",
    options: [
      { text: "Kinderen kleiner dan 135 cm", correct: true },
      { text: "Enkel baby's" },
      { text: "Tot 6 jaar, ongeacht de lengte" },
      { text: "Geen enkele verplichting" },
    ],
  },
  {
    category: "de-auto",
    text: "Wat moet je verplicht aan boord hebben in je auto?",
    explanation:
      "Je moet minstens een gevarendriehoek, een brandblusser, een verbandkist en een fluohesje aan boord hebben.",
    difficulty: "MEDIUM",
    options: [
      { text: "Gevarendriehoek, brandblusser, verbandkist en fluohesje", correct: true },
      { text: "Enkel een gsm" },
      { text: "Een reserveband en niets anders" },
      { text: "Geen enkele uitrusting" },
    ],
  },
  {
    category: "de-auto",
    text: "Wanneer moet je je fluohesje aantrekken?",
    explanation:
      "Bij een panne of ongeval op de autosnelweg of autoweg trek je je fluohesje aan vooraleer je uitstapt, zodat je goed zichtbaar bent.",
    difficulty: "EASY",
    options: [
      { text: "Bij een panne of ongeval op (auto)snelweg, vóór je uitstapt", correct: true },
      { text: "Nooit" },
      { text: "Enkel bij regen" },
      { text: "Enkel in de garage" },
    ],
  },
  {
    category: "de-auto",
    text: "Wat duidt een rood waarschuwingslampje op het dashboard meestal aan?",
    explanation:
      "Een rood lampje wijst doorgaans op een ernstig probleem (bv. olie- of remdruk). Je stopt zo snel mogelijk veilig en controleert.",
    difficulty: "MEDIUM",
    options: [
      { text: "Een ernstig probleem; veilig stoppen en controleren", correct: true },
      { text: "Dat alles in orde is" },
      { text: "Dat je sneller mag rijden" },
      { text: "Dat de radio aan staat" },
    ],
  },
  {
    category: "de-auto",
    text: "Waarvoor dient het ABS-systeem?",
    explanation:
      "ABS (antiblokkeersysteem) voorkomt dat de wielen blokkeren bij hard remmen, zodat je kan blijven sturen tijdens een noodstop.",
    difficulty: "MEDIUM",
    options: [
      { text: "Voorkomen dat de wielen blokkeren zodat je kan blijven sturen", correct: true },
      { text: "Sneller optrekken" },
      { text: "Minder verbruiken" },
      { text: "De airco regelen" },
    ],
  },
  {
    category: "de-auto",
    text: "Wat doe je met je gsm tijdens het rijden?",
    explanation:
      "Een gsm in de hand houden tijdens het rijden is verboden (overtreding van de derde graad). Gebruik een handenvrij systeem of stop veilig.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Niet in de hand houden; gebruik handenvrij of stop veilig", correct: true },
      { text: "Vrij bellen met de gsm in de hand" },
      { text: "Sms'en is toegelaten" },
      { text: "Filmen tijdens het rijden" },
    ],
  },
  {
    category: "de-auto",
    text: "Wat is het nut van de gevarenlichten (knipperlichten alle vier samen)?",
    explanation:
      "Gevarenlichten waarschuwen andere weggebruikers, bv. bij een panne, bij het einde van een file of wanneer je traag rijdt door een defect.",
    difficulty: "EASY",
    options: [
      { text: "Andere weggebruikers waarschuwen bij gevaar of panne", correct: true },
      { text: "Aangeven dat je mag dubbelparkeren" },
      { text: "Sneller mogen rijden" },
      { text: "Aangeven dat je de radio luid zet" },
    ],
  },
  {
    category: "de-auto",
    text: "Mag je een aanhangwagen met je rijbewijs B trekken?",
    explanation:
      "Met rijbewijs B mag je een aanhangwagen trekken zolang de toegelaten massa binnen de grenzen blijft (in principe tot 3.500 kg totale combinatie, met uitbreiding tot 4.250 kg onder voorwaarden). Zwaardere combinaties vragen rijbewijs BE.",
    difficulty: "HARD",
    options: [
      { text: "Ja, binnen de toegelaten massagrenzen", correct: true },
      { text: "Nooit" },
      { text: "Altijd, ongeacht het gewicht" },
      { text: "Enkel met rijbewijs C" },
    ],
  },
  {
    category: "de-auto",
    text: "Waarom moet je je voorruit en lichten schoon en vrij houden?",
    explanation:
      "Een vuile ruit of vuile lichten verminderen je zicht en je zichtbaarheid. Je moet steeds een goed uitzicht hebben en gezien worden.",
    difficulty: "EASY",
    options: [
      { text: "Om goed te zien en goed gezien te worden", correct: true },
      { text: "Enkel voor de esthetiek" },
      { text: "Het heeft geen belang" },
      { text: "Om sneller te rijden" },
    ],
  },

  // ===================================================== 4. DE SNELHEID
  {
    category: "snelheid",
    text: "Wat is de standaard maximumsnelheid binnen de bebouwde kom?",
    explanation:
      "Binnen de bebouwde kom geldt standaard 50 km/u. In Brussel is dat sinds 2021 standaard 30 km/u.",
    difficulty: "EASY",
    options: [
      { text: "50 km/u", correct: true },
      { text: "70 km/u" },
      { text: "30 km/u" },
      { text: "90 km/u" },
    ],
  },
  {
    category: "snelheid",
    text: "Wat is in Vlaanderen de standaard maximumsnelheid buiten de bebouwde kom (geen borden)?",
    explanation:
      "In Vlaanderen geldt buiten de bebouwde kom standaard 70 km/u (sinds 2017), tenzij borden anders aangeven. In Wallonië is dat 90 km/u.",
    difficulty: "MEDIUM",
    options: [
      { text: "70 km/u", correct: true },
      { text: "90 km/u" },
      { text: "50 km/u" },
      { text: "120 km/u" },
    ],
  },
  {
    category: "snelheid",
    text: "Wat is de maximumsnelheid op de autosnelweg voor een personenauto?",
    explanation:
      "Op de autosnelweg geldt 120 km/u als maximum en 70 km/u als minimum (op de stroken waar normaal sneller wordt gereden).",
    difficulty: "EASY",
    options: [
      { text: "120 km/u", correct: true },
      { text: "130 km/u" },
      { text: "100 km/u" },
      { text: "90 km/u" },
    ],
  },
  {
    category: "snelheid",
    text: "Wat is de minimumsnelheid die normaal op de autosnelweg geldt?",
    explanation:
      "Op de autosnelweg mag je niet trager rijden dan 70 km/u op de rijstroken waar normaal sneller wordt gereden, om het verkeer niet te hinderen.",
    difficulty: "MEDIUM",
    options: [
      { text: "70 km/u", correct: true },
      { text: "50 km/u" },
      { text: "Er is geen minimum" },
      { text: "90 km/u" },
    ],
  },
  {
    category: "snelheid",
    text: "Welke snelheid geldt in een zone 30?",
    explanation:
      "In een zone 30 (bord F4a tot F4b) mag je maximum 30 km/u rijden. Deze zones liggen vaak in schoolomgevingen en woonbuurten.",
    difficulty: "EASY",
    options: [
      { text: "30 km/u", correct: true },
      { text: "50 km/u" },
      { text: "20 km/u" },
      { text: "10 km/u" },
    ],
  },
  {
    category: "snelheid",
    text: "Welke snelheid geldt in een woonerf?",
    explanation:
      "In een woonerf (bord F12a) rij je stapvoets: maximum 20 km/u. Voetgangers en spelende kinderen mogen er de hele weg gebruiken.",
    difficulty: "EASY",
    options: [
      { text: "20 km/u (stapvoets)", correct: true },
      { text: "30 km/u" },
      { text: "50 km/u" },
      { text: "5 km/u" },
    ],
  },
  {
    category: "snelheid",
    text: "Een bord C43 geeft '50' aan, maar je rijdt buiten de bebouwde kom waar 70 zou gelden. Welke snelheid respecteer je?",
    explanation:
      "Een verkeersbord heeft altijd voorrang op de algemene regels. Het bord C43 met '50' beperkt je dus tot 50 km/u.",
    difficulty: "MEDIUM",
    options: [
      { text: "50 km/u, want het bord heeft voorrang", correct: true },
      { text: "70 km/u" },
      { text: "Je mag kiezen" },
      { text: "90 km/u" },
    ],
  },
  {
    category: "snelheid",
    text: "Wat houdt 'aangepaste snelheid' in?",
    explanation:
      "Je moet je snelheid steeds aanpassen aan de omstandigheden (weer, zicht, verkeer, toestand van weg en voertuig), ook al ligt ze onder het wettelijke maximum.",
    difficulty: "MEDIUM",
    options: [
      { text: "Je snelheid afstemmen op de omstandigheden, ook onder het maximum", correct: true },
      { text: "Altijd het maximum rijden" },
      { text: "Altijd zo traag mogelijk rijden" },
      { text: "Enkel de borden volgen, weer telt niet" },
    ],
  },
  {
    category: "snelheid",
    text: "Wat gebeurt er ongeveer met je remafstand bij dubbele snelheid?",
    explanation:
      "De remafstand neemt toe met het kwadraat van de snelheid: bij dubbele snelheid wordt hij ongeveer vier keer zo lang.",
    difficulty: "MEDIUM",
    options: [
      { text: "Hij wordt ongeveer 4 keer langer", correct: true },
      { text: "Hij wordt 2 keer langer" },
      { text: "Hij blijft gelijk" },
      { text: "Hij wordt korter" },
    ],
  },
  {
    category: "snelheid",
    text: "Waaruit bestaat de totale stopafstand?",
    explanation:
      "De stopafstand = reactieafstand (afstand tijdens je reactietijd) + remafstand (afstand tijdens het remmen).",
    difficulty: "MEDIUM",
    options: [
      { text: "Reactieafstand + remafstand", correct: true },
      { text: "Enkel de remafstand" },
      { text: "Enkel de reactieafstand" },
      { text: "De afstand tot het volgende bord" },
    ],
  },
  {
    category: "snelheid",
    text: "Hoe beïnvloedt een natte rijbaan je remafstand?",
    explanation:
      "Op een natte weg vermindert de grip en wordt de remafstand aanzienlijk langer. Je past je snelheid en volgafstand aan.",
    difficulty: "EASY",
    options: [
      { text: "De remafstand wordt langer", correct: true },
      { text: "De remafstand wordt korter" },
      { text: "Geen invloed" },
      { text: "De auto stopt sneller" },
    ],
  },
  {
    category: "snelheid",
    text: "Welke volgafstand wordt aangeraden in goede omstandigheden?",
    explanation:
      "Een veelgebruikte vuistregel is de 2-secondenregel: houd minstens 2 seconden afstand tot je voorligger; bij slecht weer meer.",
    difficulty: "MEDIUM",
    options: [
      { text: "Minstens 2 seconden tot je voorligger", correct: true },
      { text: "Een halve seconde" },
      { text: "Zo dicht mogelijk om file te vermijden" },
      { text: "Geen, afstand maakt niet uit" },
    ],
  },
  {
    category: "snelheid",
    text: "Mag je traag rijden om andere bestuurders te hinderen of te 'pesten'?",
    explanation:
      "Abnormaal traag rijden zonder reden, waardoor je het verkeer hindert, is verboden. Je belemmert dan de normale doorstroming.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, abnormaal traag rijden zonder reden is verboden", correct: true },
      { text: "Ja, dat mag altijd" },
      { text: "Ja, op de autosnelweg" },
      { text: "Ja, binnen de bebouwde kom" },
    ],
  },
  {
    category: "snelheid",
    text: "Aan een schoolpoort staat een zone met bord 'school' en snelheidsbeperking. Wat doe je?",
    explanation:
      "In schoolomgevingen geldt vaak 30 km/u. Je rijdt traag en extra waakzaam omdat er veel kinderen kunnen oversteken.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Traag en extra waakzaam rijden (vaak 30 km/u)", correct: true },
      { text: "Gewoon 50 km/u blijven rijden" },
      { text: "Versnellen om snel weg te zijn" },
      { text: "Toeteren zodat kinderen wachten" },
    ],
  },
  {
    category: "snelheid",
    text: "Wat is het verband tussen snelheid en de ernst van een ongeval?",
    explanation:
      "Hoe hoger de snelheid, hoe groter de botsenergie en dus de ernst van de verwondingen. Snelheid verkleint ook je reactiemarge.",
    difficulty: "EASY",
    options: [
      { text: "Hogere snelheid maakt ongevallen ernstiger", correct: true },
      { text: "Snelheid heeft geen invloed" },
      { text: "Sneller rijden is altijd veiliger" },
      { text: "Enkel bij regen telt snelheid" },
    ],
  },
  {
    category: "snelheid",
    text: "Wat betekent het einde van een zone 30 (bord F4b)?",
    explanation:
      "Voorbij bord F4b eindigt de zone 30. Je valt terug op de algemene snelheid die voor die plaats geldt (bv. 50 km/u binnen de kom).",
    difficulty: "MEDIUM",
    options: [
      { text: "De zone 30 eindigt; de algemene snelheid geldt opnieuw", correct: true },
      { text: "Je moet nog trager rijden" },
      { text: "Je mag meteen 120 rijden" },
      { text: "Er verandert niets" },
    ],
  },
  {
    category: "snelheid",
    text: "Wat is sinds 1 september 2026 nieuw bij verhoogde inrichtingen (verkeersdrempels)?",
    explanation:
      "Vanaf 1 september 2026 geldt aan elke verhoogde inrichting automatisch 30 km/u, ook zonder bijkomend zonebord.",
    difficulty: "HARD",
    options: [
      { text: "Er geldt automatisch 30 km/u, ook zonder zonebord", correct: true },
      { text: "Er geldt automatisch 50 km/u" },
      { text: "Verkeersdrempels worden verboden" },
      { text: "Er verandert niets" },
    ],
  },
  {
    category: "snelheid",
    text: "Je rijbewijs B heb je sinds 1 jaar. Geldt voor jou een lagere maximumsnelheid?",
    explanation:
      "Neen, in België gelden voor beginnende bestuurders dezelfde maximumsnelheden. Wel zijn er strengere sancties bij bepaalde overtredingen.",
    difficulty: "MEDIUM",
    options: [
      { text: "Neen, dezelfde maxima gelden, maar strengere sancties", correct: true },
      { text: "Ja, 20 km/u trager overal" },
      { text: "Ja, enkel op de autosnelweg" },
      { text: "Ja, max. 90 op de autosnelweg" },
    ],
  },
  {
    category: "snelheid",
    text: "Mag je op een autoweg (bord F9) 120 km/u rijden?",
    explanation:
      "Op een autoweg geldt in principe 120 km/u (tenzij borden anders bepalen), net zoals op de autosnelweg, maar met andere toegangsregels.",
    difficulty: "HARD",
    options: [
      { text: "Ja, in principe 120 km/u, tenzij borden anders bepalen", correct: true },
      { text: "Neen, maximum 50" },
      { text: "Neen, autowegen bestaan niet" },
      { text: "Enkel 's nachts" },
    ],
  },
  {
    category: "snelheid",
    text: "Bij mist met zicht van ongeveer 50 meter, welke maximumsnelheid mag je niet overschrijden?",
    explanation:
      "Bij dichte mist, zware sneeuw of hevige regen met zicht onder 100 meter mag je nooit sneller dan 50 km/u rijden, ongeacht het wegtype.",
    difficulty: "HARD",
    options: [
      { text: "50 km/u", correct: true },
      { text: "70 km/u" },
      { text: "90 km/u" },
      { text: "120 km/u" },
    ],
  },
];
