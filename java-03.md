# RideShare — Java 3

## Çfarë ndërtova
Ndërtova listën me tri udhëtime fiktive, kartën e ripërdorshme, faqen e detajeve, kërkesën demonstrative, mesazhin për udhëtimin që nuk u gjet dhe stilet bazë për telefon.

## Provat që bëra

### Prova 1: Lista në telefon
- **Hapat:** Kontrollova faqen kryesore lokale.
- **Rezultati real:** U përgjigj me kodin 200 dhe përmbante saktësisht tri karta; CSS e shfaq listën në një kolonë si parazgjedhje.

### Prova 2: Detajet e udhëtimit të dytë
- **Hapat:** Hapa /udhetimi/2, /udhetimi/3 dhe /udhetimi/99.
- **Rezultati real:** Faqja /udhetimi/2 u përgjigj me kodin 200 dhe shfaqi vendtakimin "Te stacioni kryesor". Te /udhetimi/3 u shfaq "Nuk ka vende të lira", ndërsa /udhetimi/99 u përgjigj me kodin 404 dhe mesazhin "Udhëtimi nuk u gjet".

### Prova 3: Kërkesa në pritje
- **Hapat:** Hapa /udhetimi/2/kerkesa dhe kontrollova lidhjet e kthimit.
- **Rezultati real:** Faqja u përgjigj me kodin 200 dhe shfaqi "Simulim: Në pritje". Lidhja e kthimit te detajet është në faqe; nga detajet ka lidhje për t'u kthyer te lista.

## Çfarë do të përmirësoj
Do ta provoj pamjen dhe prekjen e lidhjeve në emulimin e telefonit me një koleg, sepse këtu verifikova përgjigjet lokale të faqeve, jo ndërveprimin në pajisje.

## Ndihma nga AI
AI më ndihmoi t'i vendos skedarët sipas shembullit të ushtrimit; kontrollova vetë ndërtimin dhe përgjigjet e faqeve lokale me ESLint, Next.js build dhe kërkesa HTTP.