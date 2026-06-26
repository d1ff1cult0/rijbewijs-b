import type { SignSeed } from "./types";

// Afbeeldingen komen van Wikimedia Commons (vrije licenties) via Special:FilePath,
// dat altijd doorverwijst naar het juiste SVG-bestand op basis van de bestandsnaam.
// Bestandsnaamconventie: "Belgian road sign <code>.svg".
const img = (file: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}`;

const sign = (code: string) => img(`Belgian road sign ${code}.svg`);

export const signs: SignSeed[] = [
  // ---------------------------------------------------------------- GEVAARSBORDEN (A)
  { code: "A1a", name: "Gevaarlijke bocht naar links", group: "GEVAAR", imageUrl: sign("A1a"), meaning: "Waarschuwt voor een gevaarlijke bocht naar links. Pas je snelheid aan en blijf rechts." },
  { code: "A1b", name: "Gevaarlijke bocht naar rechts", group: "GEVAAR", imageUrl: sign("A1b"), meaning: "Waarschuwt voor een gevaarlijke bocht naar rechts. Pas je snelheid aan." },
  { code: "A1c", name: "Dubbele bocht, eerste naar links", group: "GEVAAR", imageUrl: sign("A1c"), meaning: "Twee opeenvolgende gevaarlijke bochten, de eerste naar links." },
  { code: "A3", name: "Gevaarlijke daling", group: "GEVAAR", imageUrl: sign("A3"), meaning: "Steile afdaling. Schakel tijdig terug en gebruik de motor om te remmen." },
  { code: "A5", name: "Steile helling (stijging)", group: "GEVAAR", imageUrl: sign("A5"), meaning: "Steile stijging. Houd rekening met traag optrekkend verkeer." },
  { code: "A7a", name: "Versmalling van de rijbaan", group: "GEVAAR", imageUrl: sign("A7a"), meaning: "De rijbaan versmalt langs beide zijden. Verleen indien nodig voorrang." },
  { code: "A9", name: "Beweegbare brug", group: "GEVAAR", imageUrl: sign("A9"), meaning: "Waarschuwt voor een beweegbare brug." },
  { code: "A13", name: "Verkeersdrempel (oneffen rijbaan)", group: "GEVAAR", imageUrl: sign("A13"), meaning: "Oneffen rijbaan of verkeersdrempel. Verminder je snelheid." },
  { code: "A14", name: "Verkeersdrempel", group: "GEVAAR", imageUrl: sign("A14"), meaning: "Waarschuwt voor een verkeersdrempel (verhoogde inrichting)." },
  { code: "A15", name: "Gladde rijbaan", group: "GEVAAR", imageUrl: sign("A15"), meaning: "De rijbaan kan glad zijn. Vergroot je afstand en rem zacht." },
  { code: "A21", name: "Oversteekplaats voor voetgangers", group: "GEVAAR", imageUrl: sign("A21"), meaning: "Waarschuwt voor een oversteekplaats voor voetgangers verderop." },
  { code: "A23", name: "Plaats waar veel kinderen komen", group: "GEVAAR", imageUrl: sign("A23"), meaning: "Let op kinderen, bv. nabij een school. Rij traag en oplettend." },
  { code: "A25", name: "Oversteekplaats voor fietsers", group: "GEVAAR", imageUrl: sign("A25"), meaning: "Waarschuwt voor fietsers en bromfietsers die kunnen oversteken." },
  { code: "A31", name: "Werken", group: "GEVAAR", imageUrl: sign("A31"), meaning: "Wegenwerken. Verminder je snelheid en let op signalisatie en wegwerkers." },
  { code: "A33", name: "Verkeerslichten", group: "GEVAAR", imageUrl: sign("A33"), meaning: "Waarschuwt voor verkeerslichten verderop." },
  { code: "A39", name: "Tweerichtingsverkeer", group: "GEVAAR", imageUrl: sign("A39"), meaning: "Verkeer in beide richtingen, bv. na een stuk eenrichtingsverkeer." },
  { code: "A41", name: "Overweg met slagbomen", group: "GEVAAR", imageUrl: sign("A41"), meaning: "Spoorwegovergang met slagbomen verderop." },
  { code: "A51", name: "Andere gevaren", group: "GEVAAR", imageUrl: sign("A51"), meaning: "Algemeen gevaar dat niet door een specifiek bord wordt aangeduid; vaak met onderbord." },

  // ---------------------------------------------------------------- VOORRANGSBORDEN (B)
  { code: "B1", name: "Voorrang verlenen", group: "VOORRANG", imageUrl: sign("B1"), meaning: "Omgekeerde driehoek: verleen voorrang aan bestuurders op de kruisende weg. Je moet niet noodzakelijk stoppen." },
  { code: "B5", name: "Stop", group: "VOORRANG", imageUrl: sign("B5"), meaning: "Verplicht stoppen en voorrang verlenen. Je moet volledig tot stilstand komen aan de stopstreep." },
  { code: "B7", name: "Stop op 150 m", group: "VOORRANG", imageUrl: sign("B7"), meaning: "Kondigt een stopbord (B5) op ongeveer 150 meter aan." },
  { code: "B9", name: "Voorrangsweg", group: "VOORRANG", imageUrl: sign("B9"), meaning: "Je rijdt op een voorrangsweg: het verkeer van rechts moet jou voorrang verlenen." },
  { code: "B11", name: "Einde voorrangsweg", group: "VOORRANG", imageUrl: sign("B11"), meaning: "Einde van de voorrangsweg. Vanaf hier geldt opnieuw de voorrang van rechts." },
  { code: "B15", name: "Kruispunt met voorrang", group: "VOORRANG", imageUrl: sign("B15"), meaning: "Je nadert een kruispunt waar je voorrang hebt." },
  { code: "B17", name: "Kruispunt met voorrang van rechts", group: "VOORRANG", imageUrl: sign("B17"), meaning: "Kruispunt waar de algemene regel van voorrang van rechts geldt." },
  { code: "B19", name: "Smalle doorgang — voorrang verlenen aan tegenliggers", group: "VOORRANG", imageUrl: sign("B19"), meaning: "Bij een versmalling moet je voorrang verlenen aan tegemoetkomend verkeer." },
  { code: "B21", name: "Smalle doorgang — voorrang op tegenliggers", group: "VOORRANG", imageUrl: sign("B21"), meaning: "Bij een versmalling heb jij voorrang op tegemoetkomend verkeer." },

  // ---------------------------------------------------------------- VERBODSBORDEN (C)
  { code: "C1", name: "Verboden richting (eenrichting)", group: "VERBOD", imageUrl: sign("C1"), meaning: "Verboden in te rijden: je rijdt tegen de toegelaten richting in." },
  { code: "C3", name: "Verboden toegang in beide richtingen", group: "VERBOD", imageUrl: sign("C3"), meaning: "Verboden toegang voor iedere bestuurder, in beide richtingen." },
  { code: "C5", name: "Verboden voor motorvoertuigen", group: "VERBOD", imageUrl: sign("C5"), meaning: "Verboden toegang voor motorvoertuigen met meer dan twee wielen." },
  { code: "C9", name: "Verboden voor bromfietsen", group: "VERBOD", imageUrl: sign("C9"), meaning: "Verboden toegang voor bromfietsen." },
  { code: "C11", name: "Verboden voor fietsers", group: "VERBOD", imageUrl: sign("C11"), meaning: "Verboden toegang voor fietsers." },
  { code: "C19", name: "Verboden voor voetgangers", group: "VERBOD", imageUrl: sign("C19"), meaning: "Verboden toegang voor voetgangers." },
  { code: "C21", name: "Verboden voor voertuigen boven bepaalde massa", group: "VERBOD", imageUrl: sign("C21"), meaning: "Toegang verboden voor voertuigen waarvan de massa hoger is dan aangeduid." },
  { code: "C23", name: "Verboden voor vrachtwagens", group: "VERBOD", imageUrl: sign("C23"), meaning: "Verboden toegang voor vrachtwagens." },
  { code: "C29", name: "Verboden boven bepaalde hoogte", group: "VERBOD", imageUrl: sign("C29"), meaning: "Toegang verboden voor voertuigen hoger dan aangeduid (incl. lading)." },
  { code: "C31", name: "Verboden af te slaan", group: "VERBOD", imageUrl: sign("C31a"), meaning: "Verboden de richting aangeduid door de pijl te volgen (bv. links afslaan)." },
  { code: "C33", name: "Verboden om te keren", group: "VERBOD", imageUrl: sign("C33"), meaning: "Verboden te keren (U-bocht) tot aan het volgende kruispunt." },
  { code: "C35", name: "Verboden in te halen", group: "VERBOD", imageUrl: sign("C35"), meaning: "Verboden links in te halen (geldt niet t.o.v. tweewielers)." },
  { code: "C43", name: "Maximumsnelheid", group: "VERBOD", imageUrl: sign("C43"), meaning: "Beperkt de snelheid tot het aangeduide getal (bv. 30, 50, 70 km/u)." },
  { code: "C45", name: "Einde maximumsnelheid", group: "VERBOD", imageUrl: sign("C45"), meaning: "Einde van de opgelegde maximumsnelheid." },

  // ---------------------------------------------------------------- GEBODSBORDEN (D)
  { code: "D1a", name: "Verplicht rechtdoor", group: "GEBOD", imageUrl: sign("D1a"), meaning: "Verplichte rijrichting: rechtdoor." },
  { code: "D1", name: "Verplichte rijrichting (pijl)", group: "GEBOD", imageUrl: sign("D1d"), meaning: "Geeft de verplichte rijrichting aan met een pijl." },
  { code: "D5", name: "Verplicht rond te rijden (rotonde)", group: "GEBOD", imageUrl: sign("D5"), meaning: "Verplicht de rotonde te volgen in de aangeduide richting." },
  { code: "D7", name: "Verplicht fietspad", group: "GEBOD", imageUrl: sign("D7"), meaning: "Verplicht fietspad: fietsers en sommige bromfietsers moeten dit volgen." },
  { code: "D9", name: "Deel voor voetgangers en fietsers (gescheiden)", group: "GEBOD", imageUrl: sign("D9a"), meaning: "Pad verdeeld in een deel voor voetgangers en een deel voor fietsers." },
  { code: "D10", name: "Gemeenschappelijk pad voetgangers/fietsers", group: "GEBOD", imageUrl: sign("D10"), meaning: "Gedeeld pad voor voetgangers en fietsers samen." },
  { code: "D11", name: "Verplicht pad voor voetgangers", group: "GEBOD", imageUrl: sign("D11"), meaning: "Verplicht pad voorbehouden voor voetgangers." },

  // ---------------------------------------------------------------- AANWIJZINGSBORDEN (F) + parkeren (E)
  { code: "E1", name: "Parkeerverbod", group: "AANWIJZING", imageUrl: sign("E1"), meaning: "Verboden te parkeren. Stilstaan (om te laden/lossen of in/uit te stappen) blijft toegelaten." },
  { code: "E3", name: "Stilstaan en parkeren verboden", group: "AANWIJZING", imageUrl: sign("E3"), meaning: "Verboden te stilstaan én te parkeren." },
  { code: "E9a", name: "Parkeren toegelaten", group: "AANWIJZING", imageUrl: sign("E9a"), meaning: "Hier mag je parkeren (eventueel met bijkomende voorwaarden op onderbord)." },
  { code: "F1", name: "Begin bebouwde kom", group: "AANWIJZING", imageUrl: sign("F1a"), meaning: "Begin van de bebouwde kom: standaard geldt hier maximum 50 km/u." },
  { code: "F3", name: "Einde bebouwde kom", group: "AANWIJZING", imageUrl: sign("F3a"), meaning: "Einde van de bebouwde kom." },
  { code: "F4a", name: "Begin zone 30", group: "AANWIJZING", imageUrl: sign("F4a"), meaning: "Begin van een zone waar maximum 30 km/u geldt tot het eindbord." },
  { code: "F4b", name: "Einde zone 30", group: "AANWIJZING", imageUrl: sign("F4b"), meaning: "Einde van de zone 30." },
  { code: "F5", name: "Begin autosnelweg", group: "AANWIJZING", imageUrl: sign("F5"), meaning: "Begin van de autosnelweg: bijzondere regels en snelheden (max. 120 km/u) gelden." },
  { code: "F7", name: "Einde autosnelweg", group: "AANWIJZING", imageUrl: sign("F7"), meaning: "Einde van de autosnelweg." },
  { code: "F12a", name: "Begin woonerf", group: "AANWIJZING", imageUrl: sign("F12a"), meaning: "Begin woonerf: stapvoets rijden (max. 20 km/u), voetgangers mogen de hele weg gebruiken." },
  { code: "F19", name: "Eenrichtingsweg", group: "AANWIJZING", imageUrl: sign("F19"), meaning: "Eenrichtingsverkeer: je mag enkel in de richting van de pijl rijden." },
  { code: "F45", name: "Doodlopende weg", group: "AANWIJZING", imageUrl: sign("F45"), meaning: "Doodlopende weg." },
  { code: "F49", name: "Oversteekplaats voor voetgangers", group: "AANWIJZING", imageUrl: sign("F49"), meaning: "Duidt een oversteekplaats voor voetgangers (zebrapad) aan." },
  { code: "F50", name: "Oversteekplaats voor fietsers", group: "AANWIJZING", imageUrl: sign("F50"), meaning: "Duidt een oversteekplaats voor fietsers en bromfietsers aan." },
  { code: "F99a", name: "Voorbehouden weg (voetgangers, fietsers, ruiters)", group: "AANWIJZING", imageUrl: sign("F99a"), meaning: "Weg voorbehouden voor voetgangers, fietsers, ruiters en speedpedelecs." },
  { code: "F103", name: "Begin voetgangerszone", group: "AANWIJZING", imageUrl: sign("F103"), meaning: "Begin van een voetgangerszone." },
];
