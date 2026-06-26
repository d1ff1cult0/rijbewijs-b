# 🚗 Rijbewijs B — Theorie & Oefenplatform (België)

Een moderne, volledig Nederlandstalige (Vlaams) webapplicatie om de theorie voor
het **Belgische rijbewijs B** te studeren én te oefenen. Alle inhoud — regels,
verkeersborden, snelheidslimieten en voorrangsregels — is gebaseerd op de
**Belgische wegcode** (niet op Nederlandse of andere wetgeving).

> ⚠️ **Disclaimer** — Dit is onafhankelijk oefenmateriaal. Het is geen officiële
> examensimulatie. De officiële examenstof en het examen bij **GOCA** (de erkende
> Belgische examencentra) blijven steeds leidend. Verkeersregels kunnen wijzigen;
> raadpleeg bij twijfel [wegcode.be](https://www.wegcode.be) en
> [vlaanderen.be](https://www.vlaanderen.be).

---

## ✨ Functionaliteit

- **Theorielessen** — 11 hoofdstukken volgens de officiële Belgische examenindeling,
  met uitleg, afbeeldingen en interactieve tussentijdse herhalingsvraagjes
  (mini-quizzes met directe feedback).
- **Proefexamens** — 50 vragen in het officiële format, geslaagd vanaf **41/50**,
  met **zware fouten** (5 strafpunten; 2 zware fouten = direct buizen), een
  aftellende **timer**, randomisatie en een gedetailleerd overzicht achteraf.
- **Oefenen** — vrij oefenen per categorie of **adaptief** (meer vragen uit je
  zwakke categorieën), telkens met directe feedback en uitleg.
- **Borden-trainer** — flashcards om alle verkeersborden te leren, per categorie
  of door elkaar geschud.
- **Foutenboek** — herhaal gericht de vragen die je eerder fout had.
- **Voortgangsdashboard** — score per categorie, zwakke punten en recente pogingen.
- **Dag/nacht-thema** en volledig **responsive** (mobielvriendelijk).

De app werkt **zonder login**: je voortgang wordt anoniem bijgehouden via een
cookie en in de database.

## 🧱 Tech stack

| Onderdeel    | Keuze                                             |
| ------------ | ------------------------------------------------- |
| Framework    | **Next.js** (App Router, TypeScript)              |
| ORM          | **Prisma**                                        |
| Database     | **PostgreSQL**                                     |
| Styling      | **Tailwind CSS** + shadcn-stijl componenten        |
| Iconen       | lucide-react                                       |
| Deployment   | **Docker Compose** (app op poort **3022**)         |

---

## 🚀 Snel starten met Docker (aanbevolen)

Vereist: Docker + Docker Compose.

```bash
docker compose up --build
```

Dit doet alles automatisch:

1. start een PostgreSQL-database;
2. bouwt de Next.js-app;
3. zet het databaseschema klaar (`prisma db push`);
4. vult de database met seed-data (theorielessen, 200+ vragen, verkeersborden);
5. start de app.

Open vervolgens **http://localhost:3022**.

De seed is **idempotent**: bij een herstart wordt de database niet overschreven
en blijft je voortgang bewaard. Wil je de database volledig opnieuw vullen, zet
dan `FORCE_SEED=1` (zie hieronder) of verwijder het `pgdata`-volume:

```bash
docker compose down -v   # verwijdert ook de database-data
docker compose up --build
```

---

## 🛠️ Lokale ontwikkeling

Vereist: Node.js 20+ en een bereikbare PostgreSQL-database.

1. **Dependencies installeren**

   ```bash
   npm install
   ```

2. **Database configureren** — kopieer `.env.example` naar `.env` en pas de
   `DATABASE_URL` aan. Snel een database opzetten met Docker:

   ```bash
   docker run --name rijbewijsb-pg -e POSTGRES_USER=rijbewijs \
     -e POSTGRES_PASSWORD=rijbewijs -e POSTGRES_DB=rijbewijsb \
     -p 5432:5432 -d postgres:16-alpine
   ```

   `.env`:

   ```
   DATABASE_URL="postgresql://rijbewijs:rijbewijs@localhost:5432/rijbewijsb?schema=public"
   ```

3. **Schema pushen en seeden**

   ```bash
   npm run db:push     # maakt de tabellen aan
   npm run db:seed     # vult de database met inhoud
   ```

4. **Ontwikkelserver starten** (op poort 3022)

   ```bash
   npm run dev
   ```

   Open **http://localhost:3022**.

### Handige scripts

| Script               | Wat het doet                                            |
| -------------------- | ------------------------------------------------------- |
| `npm run dev`        | Ontwikkelserver op poort 3022                            |
| `npm run build`      | Productiebuild (incl. `prisma generate`)                |
| `npm start`          | Productieserver op poort 3022                            |
| `npm run db:push`    | Schema naar de database pushen                           |
| `npm run db:seed`    | Seed-data laden (slaat over indien al aanwezig)          |
| `npm run db:reset`   | Database leegmaken én opnieuw vullen                     |
| `npm run db:studio`  | Prisma Studio openen                                     |
| `npx tsx scripts/validate-seed.ts` | De seed-data valideren (zonder database)  |

> `FORCE_SEED=1 npm run db:seed` forceert een volledige herseeding.

---

## 🗃️ Datamodel (Prisma)

Het schema staat in [`prisma/schema.prisma`](prisma/schema.prisma):

- **Category** — de 11 hoofdstukken, met een `examWeight` (aantal vragen per
  categorie in een proefexamen, samen 50).
- **TheoryLesson** → **TheorySection** — theorielessen opgedeeld in secties
  (met optionele afbeelding) en bijhorende mini-quizvragen.
- **Question** + **Option** — vragen met type (`EXAM` of `THEORY`),
  moeilijkheidsgraad, categorie, optionele afbeelding-URL, uitleg en een vlag
  `isSevere` voor **zware fouten**.
- **TrafficSign** — verkeersborden voor de borden-trainer.
- **ExamAttempt** + **UserAnswer** — resultaten en antwoorden per (anonieme)
  sessie, voor het dashboard en het foutenboek.

De seed-data staat in [`prisma/seed-data/`](prisma/seed-data/) en bevat o.a.
**200+ examenvragen** verdeeld over alle categorieën, 11 theorielessen en
ruim 60 verkeersborden.

## 🇧🇪 Belgische regelgeving — geverifieerd

De inhoud is gebaseerd op officiële Belgische bronnen, o.a.:

- Examenformat (50 vragen, 41/50 geslaagd, puntensysteem, zware fouten) — GOCA /
  [vlaanderen.be](https://www.vlaanderen.be) /
  [gratisrijbewijsonline.be](https://www.gratisrijbewijsonline.be).
- Snelheidslimieten (50 bebouwde kom, 70 Vlaanderen / 90 Wallonië buiten de kom,
  120 autosnelweg, zone 30, woonerf 20) — [veiligverkeer.be](https://www.veiligverkeer.be) /
  [wegcode.be](https://www.wegcode.be).
- Alcohollimieten (0,5 ‰ algemeen, 0,2 ‰ voor professionele bestuurders) —
  [wegcode.be](https://www.wegcode.be) /
  [mobilit.belgium.be](https://mobilit.belgium.be).
- Overtredingen in 4 graden en de bijhorende boetes (tarieven 2026) —
  [wegcode.be — overtredingen per graad](https://www.wegcode.be/nl/verkeersovertredingen/overtredingen-per-graad).

Afbeeldingen van verkeersborden komen van **Wikimedia Commons** (vrije licenties)
via `Special:FilePath`, om licentieproblemen te vermijden.

## 📁 Projectstructuur

```
prisma/
  schema.prisma          # datamodel
  seed.ts                # seed-orchestrator (idempotent)
  seed-data/             # categorieën, lessen, vragen (200+), borden
scripts/
  validate-seed.ts       # standalone validatie van de seed-data
src/
  app/                   # App Router-pagina's (theorie, examen, oefenen, ...)
    api/attempt/         # API: poging aanmaken en indienen
  components/            # UI- en feature-componenten
  lib/                   # prisma, examenlogica, vraagselectie, helpers
Dockerfile
docker-compose.yml       # app (poort 3022) + postgres
```

## 📝 Licentie & gebruik

Educatief oefenmateriaal. De officiële examenstof bij GOCA blijft leidend.
