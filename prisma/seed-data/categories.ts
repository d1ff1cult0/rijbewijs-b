import type { CategorySeed } from "./types";

// 11 hoofdstukken volgens de officiële Belgische examenindeling.
// examWeight = aantal vragen dat standaard uit deze categorie in een
// proefexamen van 50 vragen wordt getrokken (som = 50).
export const categories: CategorySeed[] = [
  {
    slug: "openbare-weg",
    name: "De openbare weg",
    description:
      "Indeling van de weg: rijbaan, rijstroken, vluchtheuvels, bermen, fietspaden, trottoirs en de betekenis van wegmarkeringen.",
    examWeight: 3,
    order: 1,
    icon: "Route",
    color: "#0ea5e9",
  },
  {
    slug: "weggebruikers",
    name: "De weggebruikers",
    description:
      "Voetgangers, fietsers, bestuurders en zwakke weggebruikers. Gedrag, plaats op de weg en onderlinge verantwoordelijkheden.",
    examWeight: 4,
    order: 2,
    icon: "Users",
    color: "#8b5cf6",
  },
  {
    slug: "de-auto",
    name: "De auto",
    description:
      "Technische eisen, verlichting, boorddocumenten, banden, zichtbaarheid en veilig gebruik van het voertuig.",
    examWeight: 4,
    order: 3,
    icon: "Car",
    color: "#f59e0b",
  },
  {
    slug: "snelheid",
    name: "De snelheid",
    description:
      "Maximumsnelheden per wegtype en gewest, aangepaste snelheid, remafstand en zones met bijzondere beperkingen.",
    examWeight: 5,
    order: 4,
    icon: "Gauge",
    color: "#ef4444",
  },
  {
    slug: "kruisen-inhalen",
    name: "Kruisen en inhalen",
    description:
      "Veilig kruisen van tegenliggers en correct inhalen: waar het mag, waar het verboden is en hoe je het uitvoert.",
    examWeight: 4,
    order: 5,
    icon: "ArrowLeftRight",
    color: "#14b8a6",
  },
  {
    slug: "voorrang",
    name: "De voorrang",
    description:
      "Voorrang van rechts, voorrangsborden, verkeerslichten, bevelen van de politie en bijzondere voorrangsregels.",
    examWeight: 7,
    order: 6,
    icon: "Diamond",
    color: "#eab308",
  },
  {
    slug: "waar-rijden",
    name: "Waar rijden",
    description:
      "Plaats op de rijbaan, rijstroken, fietspaden, busstroken, bijzonder overrijdbare beddingen en rijrichting.",
    examWeight: 4,
    order: 7,
    icon: "SignpostBig",
    color: "#3b82f6",
  },
  {
    slug: "stilstaan-parkeren",
    name: "Stilstaan en parkeren",
    description:
      "Het verschil tussen stilstaan en parkeren, waar het verboden is, en de regels voor parkeerschijf en betalend parkeren.",
    examWeight: 5,
    order: 8,
    icon: "ParkingSquare",
    color: "#6366f1",
  },
  {
    slug: "varia",
    name: "Varia",
    description:
      "Alcohol en drugs, vermoeidheid, EHBO, ongevallen, gevaarlijke stoffen, milieu en algemene techniek.",
    examWeight: 4,
    order: 9,
    icon: "ShieldAlert",
    color: "#22c55e",
  },
  {
    slug: "overtredingen",
    name: "Overtredingen",
    description:
      "De vier graden van verkeersovertredingen, de bijhorende boetes en sancties zoals rijverbod.",
    examWeight: 3,
    order: 10,
    icon: "Scale",
    color: "#f43f5e",
  },
  {
    slug: "verkeersborden",
    name: "Verkeersborden",
    description:
      "Gevaarsborden, verbodsborden, gebodsborden, voorrangsborden, aanwijzingsborden en onderborden herkennen en begrijpen.",
    examWeight: 7,
    order: 11,
    icon: "Octagon",
    color: "#dc2626",
  },
];
