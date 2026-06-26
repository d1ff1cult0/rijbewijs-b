import type { QuestionSeed } from "./types";

const img = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;
const sign = (code: string) => img(`Belgian road sign ${code}.svg`);

// Hoofdstukken 9–11: Varia, Overtredingen, Verkeersborden.
export const questions3: QuestionSeed[] = [
  // ===================================================== 9. VARIA
  {
    category: "varia",
    text: "Vanaf welke alcoholconcentratie in het bloed ben je als gewone bestuurder strafbaar?",
    explanation:
      "De algemene wettelijke limiet is 0,5 promille in het bloed (0,22 mg/l uitgeademde lucht).",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "0,5 promille", correct: true },
      { text: "0,2 promille" },
      { text: "0,8 promille" },
      { text: "1,2 promille" },
    ],
  },
  {
    category: "varia",
    text: "Welke strengere alcohollimiet geldt voor professionele bestuurders (bus, vrachtwagen, taxi)?",
    explanation:
      "Voor professionele bestuurders geldt een strengere limiet van 0,2 promille (0,09 mg/l uitgeademde lucht).",
    difficulty: "MEDIUM",
    options: [
      { text: "0,2 promille", correct: true },
      { text: "0,5 promille" },
      { text: "0,8 promille" },
      { text: "0,0 promille" },
    ],
  },
  {
    category: "varia",
    text: "Wat is het effect van alcohol op je rijgedrag?",
    explanation:
      "Alcohol verlengt je reactietijd, vermindert je concentratie en beoordelingsvermogen, en geeft een vals gevoel van controle.",
    difficulty: "EASY",
    options: [
      { text: "Langere reactietijd en slechter beoordelingsvermogen", correct: true },
      { text: "Snellere reacties" },
      { text: "Beter zicht 's nachts" },
      { text: "Geen enkel effect" },
    ],
  },
  {
    category: "varia",
    text: "Mag je rijden onder invloed van drugs?",
    explanation:
      "Neen, rijden onder invloed van drugs is altijd verboden en wordt zwaar bestraft met o.a. rijverbod.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Neen, dat is altijd verboden", correct: true },
      { text: "Ja, in kleine hoeveelheden" },
      { text: "Ja, als je je goed voelt" },
      { text: "Ja, op de autosnelweg" },
    ],
  },
  {
    category: "varia",
    text: "Je bent moe tijdens een lange rit. Wat is de beste oplossing?",
    explanation:
      "Bij vermoeidheid stop je en rust je (een korte slaap, frisse lucht, koffie). Doorrijden met slaap is levensgevaarlijk.",
    difficulty: "EASY",
    options: [
      { text: "Stoppen en rusten", correct: true },
      { text: "Sneller rijden om er sneller te zijn" },
      { text: "Het raam open en doorrijden tot je erbij neervalt" },
      { text: "Harder de radio zetten en doorrijden" },
    ],
  },
  {
    category: "varia",
    text: "Welk noodnummer bel je in België bij een ongeval met gewonden?",
    explanation:
      "112 is het Europese noodnummer voor brandweer en dringende medische hulp en werkt in heel België en Europa.",
    difficulty: "EASY",
    options: [
      { text: "112", correct: true },
      { text: "911" },
      { text: "100 voor de politie" },
      { text: "0800" },
    ],
  },
  {
    category: "varia",
    text: "Wat is de juiste volgorde bij een ongeval?",
    explanation:
      "Het principe is: beveiligen (de plaats veilig maken), bewaren (gewonden niet onnodig verplaatsen), bellen (112) en bijstaan (hulp verlenen).",
    difficulty: "MEDIUM",
    options: [
      { text: "Beveiligen – bewaren – bellen – bijstaan", correct: true },
      { text: "Bellen – wegrijden – vergeten" },
      { text: "Bijstaan – versnellen – beveiligen" },
      { text: "Niets doen en doorrijden" },
    ],
  },
  {
    category: "varia",
    text: "Wat is vluchtmisdrijf?",
    explanation:
      "Vluchtmisdrijf is doorrijden na betrokkenheid bij een ongeval om zich aan de vaststellingen te onttrekken. Dat is een zware overtreding.",
    isSevere: true,
    difficulty: "MEDIUM",
    options: [
      { text: "Doorrijden na een ongeval om vaststellingen te ontlopen", correct: true },
      { text: "Te snel wegrijden aan een licht" },
      { text: "Vergeten te tanken" },
      { text: "Op de vluchtstrook rijden" },
    ],
  },
  {
    category: "varia",
    text: "Waar dient de gevarendriehoek voor?",
    explanation:
      "De gevarendriehoek waarschuwt het achteropkomend verkeer voor je stilstaand voertuig. Je plaatst hem op voldoende afstand (bv. ± 100 m op de autosnelweg).",
    difficulty: "EASY",
    options: [
      { text: "Het achteropkomend verkeer waarschuwen voor je stilstaand voertuig", correct: true },
      { text: "Je auto versieren" },
      { text: "Sneller mogen rijden" },
      { text: "De politie roepen" },
    ],
  },
  {
    category: "varia",
    text: "Wat is een lage-emissiezone (LEZ)?",
    explanation:
      "Een LEZ is een stadszone waar de meest vervuilende voertuigen niet (of enkel mits registratie/betaling) mogen rijden, om de luchtkwaliteit te verbeteren.",
    difficulty: "MEDIUM",
    options: [
      { text: "Een zone waar vervuilende voertuigen geweerd worden", correct: true },
      { text: "Een zone waar je gratis mag parkeren" },
      { text: "Een zone enkel voor elektrische steps" },
      { text: "Een autosnelwegzone" },
    ],
  },
  {
    category: "varia",
    text: "Hoe rijd je milieuvriendelijk en zuinig?",
    explanation:
      "Schakel tijdig op naar een hogere versnelling, rij gelijkmatig, vermijd onnodig stationair draaien en houd je bandenspanning op peil.",
    difficulty: "EASY",
    options: [
      { text: "Tijdig opschakelen, gelijkmatig rijden, banden op spanning", correct: true },
      { text: "Altijd in lage versnelling rijden" },
      { text: "Hard optrekken en hard remmen" },
      { text: "De motor laten draaien bij stilstand" },
    ],
  },
  {
    category: "varia",
    text: "Een geneesmiddel vermeldt 'kan de rijvaardigheid beïnvloeden'. Wat doe je?",
    explanation:
      "Sommige medicijnen maken slaperig of verminderen je reactievermogen. Lees de bijsluiter, vraag advies aan arts of apotheker en rij niet als het je rijgeschiktheid aantast.",
    difficulty: "MEDIUM",
    options: [
      { text: "De bijsluiter volgen en niet rijden als het je rijgeschiktheid aantast", correct: true },
      { text: "Gewoon rijden, medicijnen tellen niet" },
      { text: "Dubbele dosis nemen" },
      { text: "Alcohol erbij nemen" },
    ],
  },
  {
    category: "varia",
    text: "Wat doe je bij een beginnende motorbrand in je voertuig?",
    explanation:
      "Stop veilig, zet iedereen in veiligheid op een veilige afstand, verwittig de hulpdiensten (112) en gebruik je brandblusser enkel als het veilig kan.",
    difficulty: "HARD",
    options: [
      { text: "Stoppen, inzittenden in veiligheid brengen, 112 bellen", correct: true },
      { text: "Doorrijden tot het vanzelf dooft" },
      { text: "Het raam sluiten en wachten" },
      { text: "Water op de brandstoftank gieten" },
    ],
  },
  {
    category: "varia",
    text: "Wat is het gevolg van vermoeidheid achter het stuur, vergelijkbaar met alcohol?",
    explanation:
      "Vermoeidheid verlengt, net als alcohol, je reactietijd en vermindert je waakzaamheid; microslaap van enkele seconden kan fataal zijn.",
    difficulty: "MEDIUM",
    options: [
      { text: "Langere reactietijd en risico op microslaap", correct: true },
      { text: "Scherper zicht" },
      { text: "Betere concentratie" },
      { text: "Geen enkel risico" },
    ],
  },
  {
    category: "varia",
    text: "Een beginnende bestuurder (rijbewijs < 2 jaar) wordt betrapt op zwaar drankgebruik achter het stuur. Wat is bijzonder?",
    explanation:
      "Voor wie minder dan 2 jaar zijn rijbewijs B heeft, is bij bepaalde zware overtredingen een rijverbod (verval) verplicht. Beginnende bestuurders worden strenger aangepakt.",
    difficulty: "HARD",
    options: [
      { text: "Een rijverbod is bij bepaalde zware overtredingen verplicht", correct: true },
      { text: "Er gelden lagere boetes" },
      { text: "Er zijn geen gevolgen" },
      { text: "Enkel een waarschuwing" },
    ],
  },
  {
    category: "varia",
    text: "Wat is de beste houding bij gladheid (ijzel of sneeuw)?",
    explanation:
      "Rij trager, vergroot je volgafstand, vermijd bruuske stuur-, rem- en gasbewegingen en gebruik zo nodig winterbanden.",
    difficulty: "EASY",
    options: [
      { text: "Trager rijden, grotere afstand, geen bruuske bewegingen", correct: true },
      { text: "Sneller rijden om snel weg te zijn" },
      { text: "Hard remmen bij elke bocht" },
      { text: "Dicht achter de voorligger blijven" },
    ],
  },
  {
    category: "varia",
    text: "Mag je een gewonde uit een voertuig halen na een ongeval?",
    explanation:
      "In principe verplaats je een gewonde niet, tenzij er onmiddellijk levensgevaar is (bv. brand), om bijkomend letsel te vermijden.",
    difficulty: "MEDIUM",
    options: [
      { text: "Enkel bij onmiddellijk levensgevaar (bv. brand)", correct: true },
      { text: "Altijd, zo snel mogelijk" },
      { text: "Nooit, in geen geval" },
      { text: "Enkel als hij erom vraagt" },
    ],
  },
  {
    category: "varia",
    text: "Wat is het nut van een veiligheidsgordel bij een aanrijding?",
    explanation:
      "De gordel houdt je op je plaats en voorkomt dat je tegen het stuur, de ruit of uit het voertuig wordt geslingerd. Hij verkleint de kans op zware verwondingen sterk.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Hij voorkomt dat je wordt weggeslingerd en vermindert letsel", correct: true },
      { text: "Hij dient enkel voor het comfort" },
      { text: "Hij heeft geen nut bij lage snelheid" },
      { text: "Hij is enkel voor de bestuurder nuttig" },
    ],
  },

  // ===================================================== 10. OVERTREDINGEN
  {
    category: "overtredingen",
    text: "In hoeveel graden zijn verkeersovertredingen in België ingedeeld?",
    explanation:
      "Verkeersovertredingen zijn ingedeeld in vier graden. Hoe hoger de graad, hoe zwaarder de straf.",
    difficulty: "EASY",
    options: [
      { text: "Vier graden", correct: true },
      { text: "Twee graden" },
      { text: "Drie graden" },
      { text: "Vijf graden" },
    ],
  },
  {
    category: "overtredingen",
    text: "Onder welke graad valt een overtreding zonder direct of indirect gevaar (bv. geen richtingaanwijzer gebruiken)?",
    explanation:
      "Lichte overtredingen zonder direct of indirect gevaar zijn overtredingen van de eerste graad (onmiddellijke inning ± € 58).",
    difficulty: "MEDIUM",
    options: [
      { text: "Eerste graad", correct: true },
      { text: "Tweede graad" },
      { text: "Derde graad" },
      { text: "Vierde graad" },
    ],
  },
  {
    category: "overtredingen",
    text: "Onder welke graad valt rijden met de gsm in de hand of door een rood licht rijden?",
    explanation:
      "Deze overtredingen brengen de verkeersveiligheid rechtstreeks in gevaar en zijn van de derde graad (onmiddellijke inning ± € 174).",
    difficulty: "MEDIUM",
    options: [
      { text: "Derde graad", correct: true },
      { text: "Eerste graad" },
      { text: "Tweede graad" },
      { text: "Geen overtreding" },
    ],
  },
  {
    category: "overtredingen",
    text: "Wat gebeurt er in principe bij een overtreding van de vierde graad?",
    explanation:
      "Bij een vierdegraadsovertreding (zeer zwaar, ernstig gevaar voor personen) word je in principe altijd gedagvaard voor de rechtbank en is een rijverbod verplicht.",
    isSevere: true,
    difficulty: "HARD",
    options: [
      { text: "Je wordt in principe gedagvaard; rijverbod is verplicht", correct: true },
      { text: "Enkel een waarschuwing" },
      { text: "Een boete van € 10" },
      { text: "Niets" },
    ],
  },
  {
    category: "overtredingen",
    text: "Hoeveel bedraagt de onmiddellijke inning voor een overtreding van de eerste graad (2026)?",
    explanation:
      "Voor een eerstegraadsovertreding bedraagt de onmiddellijke inning ongeveer € 58 (exclusief administratieve toeslag).",
    difficulty: "MEDIUM",
    options: [
      { text: "± € 58", correct: true },
      { text: "± € 174" },
      { text: "± € 473" },
      { text: "± € 10" },
    ],
  },
  {
    category: "overtredingen",
    text: "Wat is een 'verval van het recht tot sturen'?",
    explanation:
      "Dat is een rijverbod: de rechter ontzegt je het recht om te rijden, van 8 dagen tot 5 jaar, afhankelijk van de overtreding.",
    difficulty: "MEDIUM",
    options: [
      { text: "Een rijverbod opgelegd door de rechter", correct: true },
      { text: "Een korting op de boete" },
      { text: "Een extra rijles" },
      { text: "Een nieuwe nummerplaat" },
    ],
  },
  {
    category: "overtredingen",
    text: "Voor wie is een rijverbod bij bepaalde zware overtredingen verplicht?",
    explanation:
      "Voor wie sinds minder dan twee jaar houder is van het rijbewijs B (beginnende bestuurder) is een rijverbod bij bepaalde overtredingen verplicht.",
    difficulty: "HARD",
    options: [
      { text: "Voor beginnende bestuurders (rijbewijs < 2 jaar)", correct: true },
      { text: "Voor iedereen ouder dan 60" },
      { text: "Enkel voor vrachtwagenchauffeurs" },
      { text: "Voor niemand" },
    ],
  },
  {
    category: "overtredingen",
    text: "Wat kan na een rijverbod als bijkomende voorwaarde worden opgelegd?",
    explanation:
      "Na een rijverbod kan je verplicht worden om opnieuw examens af te leggen: theoretisch, praktisch, medisch en/of psychologisch.",
    difficulty: "MEDIUM",
    options: [
      { text: "Opnieuw theorie-, praktijk-, medisch en/of psychologisch examen", correct: true },
      { text: "Een gratis nieuwe wagen" },
      { text: "Niets" },
      { text: "Enkel een waarschuwing" },
    ],
  },
  {
    category: "overtredingen",
    text: "Wat is een 'onmiddellijke inning'?",
    explanation:
      "Een onmiddellijke inning is een boete die je meteen kan betalen om vervolging te vermijden, voorgesteld door de politie bij lichtere overtredingen.",
    difficulty: "MEDIUM",
    options: [
      { text: "Een boete die je meteen betaalt om vervolging te vermijden", correct: true },
      { text: "Een verplichte rijles" },
      { text: "Een rijverbod" },
      { text: "Een belasting" },
    ],
  },
  {
    category: "overtredingen",
    text: "Wat is het 'alcoholslot'?",
    explanation:
      "Een alcoholslot (alcolock) is een toestel dat de motor pas laat starten na een geslaagde ademtest. Een rechter kan dit opleggen na alcoholmisbruik in het verkeer.",
    difficulty: "HARD",
    options: [
      { text: "Een toestel dat starten pas toelaat na een geslaagde ademtest", correct: true },
      { text: "Een slot op je tankdop" },
      { text: "Een korting op je verzekering" },
      { text: "Een type rijbewijs" },
    ],
  },
  {
    category: "overtredingen",
    text: "Onder welke graad valt het niet dragen van de veiligheidsgordel meestal?",
    explanation:
      "Het niet dragen van de gordel is een overtreding van de eerste graad, maar blijft gevaarlijk: bij een ongeval verhoogt het sterk het letselrisico.",
    difficulty: "MEDIUM",
    options: [
      { text: "Eerste graad", correct: true },
      { text: "Derde graad" },
      { text: "Vierde graad" },
      { text: "Geen overtreding" },
    ],
  },
  {
    category: "overtredingen",
    text: "Wie betaalt de administratieve toeslag bovenop de onmiddellijke inning (2026)?",
    explanation:
      "Bovenop de onmiddellijke inning komt een administratieve toeslag van € 10,67 (tarief 2026).",
    difficulty: "HARD",
    options: [
      { text: "De overtreder, ± € 10,67 bovenop de inning", correct: true },
      { text: "De verzekering" },
      { text: "Niemand" },
      { text: "De gemeente" },
    ],
  },
  {
    category: "overtredingen",
    text: "Tegen welke maatregel kan de politie overgaan bij rijden onder zware invloed van alcohol?",
    explanation:
      "De politie kan je rijbewijs onmiddellijk intrekken (voor een aantal dagen) en je voertuig (laten) takelen. Daarna volgt eventueel vervolging.",
    difficulty: "MEDIUM",
    options: [
      { text: "Onmiddellijke intrekking van het rijbewijs", correct: true },
      { text: "Een gratis taxi naar huis" },
      { text: "Niets" },
      { text: "Een waarschuwingsbrief volgende maand" },
    ],
  },
  {
    category: "overtredingen",
    text: "Wat is het verschil tussen een minnelijke schikking en een dagvaarding?",
    explanation:
      "Bij een minnelijke schikking betaal je een bedrag en is de zaak afgehandeld; bij een dagvaarding moet je voor de politierechtbank verschijnen.",
    difficulty: "HARD",
    options: [
      { text: "Schikking = betalen en afgehandeld; dagvaarding = voor de rechtbank", correct: true },
      { text: "Er is geen verschil" },
      { text: "Een schikking is altijd duurder" },
      { text: "Een dagvaarding is gratis" },
    ],
  },

  // ===================================================== 11. VERKEERSBORDEN (met afbeeldingen)
  {
    category: "verkeersborden",
    text: "Welke betekenis heeft dit bord?",
    explanation:
      "Dit is bord B1 'voorrang verlenen' (omgekeerde driehoek). Je verleent voorrang aan het kruisende verkeer; stoppen is niet altijd nodig.",
    isSevere: true,
    difficulty: "EASY",
    imageUrl: sign("B1"),
    imageAlt: "Omgekeerde rode driehoek",
    options: [
      { text: "Voorrang verlenen", correct: true },
      { text: "Stoppen en voorrang verlenen" },
      { text: "Voorrangsweg" },
      { text: "Verboden richting" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat moet je doen bij dit bord?",
    explanation:
      "Dit is het stopbord B5 (achthoek). Je moet volledig stoppen aan de stopstreep en voorrang verlenen.",
    isSevere: true,
    difficulty: "EASY",
    imageUrl: sign("B5"),
    imageAlt: "Rood achthoekig stopbord",
    options: [
      { text: "Volledig stoppen en voorrang verlenen", correct: true },
      { text: "Enkel vertragen" },
      { text: "Je hebt voorrang" },
      { text: "Verboden te parkeren" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord B9 duidt een voorrangsweg aan: het verkeer uit de zijwegen moet jou voorrang verlenen.",
    difficulty: "MEDIUM",
    imageUrl: sign("B9"),
    imageAlt: "Gele ruit met witte rand",
    options: [
      { text: "Voorrangsweg", correct: true },
      { text: "Einde voorrangsweg" },
      { text: "Voorrang verlenen" },
      { text: "Parkeerplaats" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat geeft dit bord aan?",
    explanation:
      "Bord C1 betekent 'verboden richting': je mag deze straat niet inrijden (meestal de tegenrichting van een eenrichtingsstraat).",
    isSevere: true,
    difficulty: "EASY",
    imageUrl: sign("C1"),
    imageAlt: "Rond rood bord met witte horizontale balk",
    options: [
      { text: "Verboden richting (niet inrijden)", correct: true },
      { text: "Verplicht rechtdoor" },
      { text: "Voorrang verlenen" },
      { text: "Einde van alle verbodsbepalingen" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord C3 betekent 'verboden toegang in beide richtingen' voor iedere bestuurder.",
    difficulty: "EASY",
    imageUrl: sign("C3"),
    imageAlt: "Rond bord met rode rand en witte achtergrond",
    options: [
      { text: "Verboden toegang voor iedere bestuurder", correct: true },
      { text: "Voorrangsweg" },
      { text: "Parkeren toegelaten" },
      { text: "Verplicht fietspad" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord C43 legt een maximumsnelheid op (het getal op het bord). Een verkeersbord heeft altijd voorrang op de algemene snelheidsregels.",
    difficulty: "EASY",
    imageUrl: sign("C43"),
    imageAlt: "Rond bord met rode rand en een getal",
    options: [
      { text: "Maximumsnelheid", correct: true },
      { text: "Aanbevolen snelheid" },
      { text: "Minimumsnelheid" },
      { text: "Einde snelheidsbeperking" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord C35 verbiedt het inhalen langs links van voertuigen met meer dan twee wielen. Fietsers en bromfietsers mag je nog inhalen.",
    difficulty: "MEDIUM",
    imageUrl: sign("C35"),
    imageAlt: "Rond bord met twee auto's, een rode",
    options: [
      { text: "Verboden in te halen", correct: true },
      { text: "Verplicht in te halen" },
      { text: "Einde inhaalverbod" },
      { text: "Tweerichtingsverkeer" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Tot welke categorie behoort dit bord en wat betekent het?",
    explanation:
      "Bord D1 is een gebodsbord (rond, blauw): het geeft de verplichte rijrichting aan met een pijl.",
    difficulty: "MEDIUM",
    imageUrl: sign("D1d"),
    imageAlt: "Rond blauw bord met witte pijl",
    options: [
      { text: "Gebodsbord: verplichte rijrichting", correct: true },
      { text: "Verbodsbord: verboden richting" },
      { text: "Gevaarsbord" },
      { text: "Voorrangsbord" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord D7 (rond, blauw) duidt een verplicht fietspad aan: fietsers en bepaalde bromfietsers moeten het volgen; auto's mogen er niet op.",
    difficulty: "EASY",
    imageUrl: sign("D7"),
    imageAlt: "Rond blauw bord met witte fiets",
    options: [
      { text: "Verplicht fietspad", correct: true },
      { text: "Fietsen verboden" },
      { text: "Oversteekplaats voor fietsers" },
      { text: "Parkeren voor fietsen" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit driehoekige bord met rode rand?",
    explanation:
      "Bord A21 is een gevaarsbord dat waarschuwt voor een oversteekplaats voor voetgangers verderop.",
    difficulty: "MEDIUM",
    imageUrl: sign("A21"),
    imageAlt: "Driehoekig bord met voetganger op zebrapad",
    options: [
      { text: "Gevaar: oversteekplaats voor voetgangers", correct: true },
      { text: "Verboden voor voetgangers" },
      { text: "Oversteekplaats (aanwijzing)" },
      { text: "Voetgangerszone" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord A23 is een gevaarsbord dat waarschuwt voor een plaats waar veel kinderen komen (bv. nabij een school).",
    isSevere: true,
    difficulty: "EASY",
    imageUrl: sign("A23"),
    imageAlt: "Driehoekig bord met twee kinderen",
    options: [
      { text: "Gevaar: plaats waar veel kinderen komen", correct: true },
      { text: "Speelstraat" },
      { text: "Verboden voor kinderen" },
      { text: "School gesloten" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat waarschuwt dit gevaarsbord?",
    explanation:
      "Bord A15 waarschuwt voor een gladde rijbaan. Pas je snelheid aan en vermijd bruuske manoeuvres.",
    difficulty: "MEDIUM",
    imageUrl: sign("A15"),
    imageAlt: "Driehoekig bord met slippende auto",
    options: [
      { text: "Gladde rijbaan", correct: true },
      { text: "Steile helling" },
      { text: "Werken" },
      { text: "Verkeersdrempel" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord A31 waarschuwt voor werken (wegenwerken). Verminder je snelheid en let op wegwerkers en signalisatie.",
    difficulty: "EASY",
    imageUrl: sign("A31"),
    imageAlt: "Driehoekig bord met werkman",
    options: [
      { text: "Gevaar: werken", correct: true },
      { text: "Speeltuin" },
      { text: "Einde van de werken" },
      { text: "Parkeerverbod" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat geeft dit bord aan?",
    explanation:
      "Bord A51 (driehoek met uitroepteken) waarschuwt voor 'andere gevaren', meestal nader bepaald op een onderbord.",
    difficulty: "MEDIUM",
    imageUrl: sign("A51"),
    imageAlt: "Driehoekig bord met uitroepteken",
    options: [
      { text: "Andere (niet nader bepaalde) gevaren", correct: true },
      { text: "Verboden richting" },
      { text: "Voorrangsweg" },
      { text: "Einde bebouwde kom" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord F1 geeft het begin van de bebouwde kom aan. Daar geldt standaard 50 km/u.",
    difficulty: "EASY",
    imageUrl: sign("F1a"),
    imageAlt: "Wit-blauw bord met gebouwen, begin bebouwde kom",
    options: [
      { text: "Begin van de bebouwde kom", correct: true },
      { text: "Einde van de bebouwde kom" },
      { text: "Woonerf" },
      { text: "Parkeerzone" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord F12a geeft het begin van een woonerf aan: stapvoets rijden (max. 20 km/u), voetgangers mogen de hele weg gebruiken en kinderen mogen er spelen.",
    isSevere: true,
    difficulty: "MEDIUM",
    imageUrl: sign("F12a"),
    imageAlt: "Blauw bord met huizen, spelende kinderen en auto (woonerf)",
    options: [
      { text: "Begin woonerf (stapvoets, max. 20 km/u)", correct: true },
      { text: "Speelstraat enkel in de zomer" },
      { text: "Parkeerterrein" },
      { text: "Voetgangerszone zonder auto's" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord F4a geeft het begin van een zone 30 aan: in de hele zone geldt maximum 30 km/u tot het eindbord (F4b).",
    difficulty: "EASY",
    imageUrl: sign("F4a"),
    imageAlt: "Bord begin zone 30",
    options: [
      { text: "Begin zone 30", correct: true },
      { text: "Einde zone 30" },
      { text: "Maximaal 30 enkel hier, niet verderop" },
      { text: "Minimumsnelheid 30" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord F19 duidt een openbare weg met eenrichtingsverkeer aan: je mag enkel in de richting van de pijl rijden.",
    difficulty: "EASY",
    imageUrl: sign("F19"),
    imageAlt: "Blauw bord met witte pijl naar boven, eenrichting",
    options: [
      { text: "Eenrichtingsweg (rijden in de richting van de pijl)", correct: true },
      { text: "Verplicht rechtdoor voor iedereen" },
      { text: "Verboden richting" },
      { text: "Voorrangsweg" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat duidt dit bord aan?",
    explanation:
      "Bord F49 duidt een oversteekplaats voor voetgangers (zebrapad) aan.",
    difficulty: "EASY",
    imageUrl: sign("F49"),
    imageAlt: "Blauw bord met voetganger op zebrapad",
    options: [
      { text: "Oversteekplaats voor voetgangers", correct: true },
      { text: "Verboden voor voetgangers" },
      { text: "Voetgangerszone" },
      { text: "Gevaar voetgangers" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord E1 duidt een parkeerverbod aan. Stilstaan om te laden/lossen of in/uit te stappen blijft wel toegelaten.",
    difficulty: "MEDIUM",
    imageUrl: sign("E1"),
    imageAlt: "Rond blauw bord met rode rand en schuine streep",
    options: [
      { text: "Parkeerverbod", correct: true },
      { text: "Verboden stil te staan en te parkeren" },
      { text: "Parkeren toegelaten" },
      { text: "Einde bebouwde kom" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Wat betekent dit bord?",
    explanation:
      "Bord E3 betekent dat zowel stilstaan als parkeren verboden is.",
    difficulty: "MEDIUM",
    imageUrl: sign("E3"),
    imageAlt: "Rond blauw bord met rode rand en rood kruis",
    options: [
      { text: "Verboden stil te staan en te parkeren", correct: true },
      { text: "Enkel parkeerverbod" },
      { text: "Parkeren toegelaten" },
      { text: "Voorrang verlenen" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Welke vorm en kleur hebben gevaarsborden in België?",
    explanation:
      "Gevaarsborden (type A) zijn driehoekig met een rode rand en een witte achtergrond met een zwart symbool.",
    difficulty: "EASY",
    options: [
      { text: "Driehoekig met rode rand", correct: true },
      { text: "Rond en blauw" },
      { text: "Achthoekig en rood" },
      { text: "Vierkant en blauw" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Welke vorm en kleur hebben gebodsborden?",
    explanation:
      "Gebodsborden (type D) zijn rond en blauw met een wit symbool; ze leggen iets verplicht op.",
    difficulty: "EASY",
    options: [
      { text: "Rond en blauw", correct: true },
      { text: "Driehoekig met rode rand" },
      { text: "Rond met rode rand" },
      { text: "Achthoekig" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Waarvoor dient een onderbord?",
    explanation:
      "Een onderbord vult het hoofdbord aan met bijkomende informatie, bv. een afstand, een richting, een tijdsduur of een doelgroep.",
    difficulty: "MEDIUM",
    options: [
      { text: "Het vult het hoofdbord aan met extra info (afstand, doelgroep ...)", correct: true },
      { text: "Het vervangt het hoofdbord" },
      { text: "Het heeft geen betekenis" },
      { text: "Het geldt enkel voor voetgangers" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Een rond bord met rode rand is in het algemeen een...",
    explanation:
      "Ronde borden met een rode rand zijn verbodsborden (type C). Ronde blauwe borden zijn gebodsborden.",
    difficulty: "EASY",
    options: [
      { text: "verbodsbord", correct: true },
      { text: "gevaarsbord" },
      { text: "aanwijzingsbord" },
      { text: "voorrangsbord" },
    ],
  },
  {
    category: "verkeersborden",
    text: "Welke vorm heeft het stopbord?",
    explanation:
      "Het stopbord (B5) is achthoekig (octagoon) en rood. Bij dit bord moet je volledig stoppen.",
    isSevere: true,
    difficulty: "EASY",
    options: [
      { text: "Achthoekig", correct: true },
      { text: "Rond" },
      { text: "Driehoekig" },
      { text: "Vierkant" },
    ],
  },
];
