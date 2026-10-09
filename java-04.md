# RideShare — Java 4: Lidhja me Databazën Neon

## Çfarë ndërtova
Lidha aplikacionin RideShare me databazën PostgreSQL në Neon përmes Vercel. Të dhëna fiktive lexohen dinamikisht nga tabela `udhetimet`.

## Provat që bëra

### Prova 1: Ndryshimi ruhet në databazë
- **Hapat:** Në Neon SQL Editor ekzekutova `UPDATE udhetimet SET ora = '08:25' WHERE id = '2';` dhe rifreskova faqeve lokale.
- **Rezultati real:** Karta 2 dhe faqja e detajeve shfaqën orën e re 08:25 pa ndryshuar kodin. Pas kthimit në 08:15, faqja u përditësua përsëri saktë.

### Prova 2: Lista bosh nuk është gabim lidhjeje
- **Hapat:** Ndryshova kushtin në query në `FROM udhetimet WHERE false ORDER BY id`.
- **Rezultati real:** Faqja kryesore shfaqi mesazhin "Nuk ka udhëtime për momentin." pa dhënë gabim lidhjeje.

### Prova 3: Lidhja mungon dhe pastaj rikthehet
- **Hapat:** Riemërtova variablën `DATABASE_URL` në `.env.local` dhe rinisa serverin.
- **Rezultati real:** Faqja shfaqi mesazhin "Nuk u lidhëm me databazën. Provo përsëri." Pas rikthimit të emrit, aplikacioni punoi përsëri.

## Çfarë do të përmirësoj
Do të shtojmë formularin për krijimin dhe rezervimin e udhëtimeve reale direkt nga ndërfaqja.

## Ndihma nga AI
AI më ndihmoi të konfiguroj lidhjen me `@neondatabase/serverless` dhe të shkruaj query-t SQL.