# RideShare · Java 7

Ruaje si **java-07.md**, pranë README në rrënjën e repository-t tënd. Plotëso me vëzhgimet e tua dhe plotëso çdo vend bosh përpara dorëzimit. Ruaj titujt dhe etiketat. Para/Pas janë dy URL të plota commit-esh nga i njëjti repository, me kodin e plotë prej 40 shenjash.

Pas Commit dhe Push, hap formularin e lëndës për **Java 7** dhe vendos linkun kryesor të repository-t. Rezultati vjen te komenti **Kontrolli automatik i dorëzimit**, nga github-actions[bot], në Issue-n tënd. Lexo 5/5 dhe çdo ✅/❌; nëse korrigjon, bëj Push dhe komento **rikontrollo** te i njëjti Issue. 5/5 është kontroll teknik, jo notë.

## Rasti im
GitHub: alberinastublla
Kodi: P7-059
Skenari i zgjedhur (numri dhe titulli, nga Rastet 1–5): Rasti 1 - Lista dhe detajet
ID i udhëtimit në projektin tim: 2
Të dhënat fiktive të rastit: Mitrovicë → AAB, 08:25, 3 vende. Ora për provën e re: 08:30.

## Parashikimi
Pres që në listë të shfaqen tri udhëtimet me orën dhe vendet e lira. Kur ta hap udhëtimin me ID 2, pres të shfaqen detajet e sakta të atij udhëtimi. Nëse hap një ID që nuk ekziston, si 999, pres të shfaqet mesazhi "Udhëtimi nuk u gjet". Kërkesa për vend duhet të paraqitet si simulim, jo si rezervim i konfirmuar. Para kodimit: çfarë pret në listë, detaje dhe te skenari që zgjodhe? Shkruaj me fjalët e tua.

## Dy probleme
1. Kur hapa /udhetimi/999, aplikacioni shfaqi gabimin standard 404 ne anglisht, pa shpjegim dhe pa lidhje per kthim te lista.
2. Ne shfletues, titulli i faqes shfaqej "Create Next App" ne vend te emrit RideShare. Kjo mund ta hutoje perdoruesin.

## Korrigjimi
Skedari: aplikacioni/src/app/udhetimi/[id]/not-found.tsx

Krijova skedarin not-found.tsx per te permiresuar mesazhin kur kerkohet nje udhetim qe nuk ekziston.
Me pare shfaqej gabimi standard 404 ne anglisht.
Pas korrigjimit shfaqet mesazhi "Udhetimi nuk u gjet" dhe lidhja "Kthehu te lista".
E testova me ID 999 dhe konfirmova qe kthimi te lista funksionon.
## Versionet
Para: https://github.com/alberinastublla/rideshare-mobile/commit/8adb3c8dcc554c8d252d08b6a676398ae3892ee3
Pas: https://github.com/alberinastublla/rideshare-mobile/commit/d74d215269f0f71005549c8d10d6bd6ea7cd6de4

## Provat që bëra
### Prova 1
Hapat: Hapa listen e udhetimeve, pastaj udhetimin me ID 2 dhe klikova "Kerko vend".
Pritshmëria: Te shfaqen detajet e udhetimit te zgjedhur dhe kerkesa te jete vetem simulim.
Vëzhgimi: U shfaq Fushe Kosove - AAB, ora 08:15, me 1 vend te lire. Pas klikimit u shfaq "Simulim: Ne pritje" dhe sqarimi qe kerkesa nuk u dergua te shoferi.
### Prova 2
Hapat: Hapa /udhetimi/999 para dhe pas korrigjimit.
Pritshmëria: Te shfaqet nje mesazh i qarte kur udhetimi nuk ekziston dhe nje lidhje per kthim te lista.
Vëzhgimi: Para korrigjimit shfaqej gabimi standard 404 ne anglisht. Pas korrigjimit u shfaq "Udhetimi nuk u gjet" dhe lidhja "Kthehu te lista". E klikova lidhjen dhe lista me tri udhetime u hap me sukses.

### Prova 3
Hapat: Hapa udhetimin me ID 3, Lipjan - AAB, qe kishte 0 vende te lira.
Pritshmëria: Aplikacioni te mos lejoje kerkese per vend kur nuk ka vende te lira.
Vëzhgimi: U shfaq mesazhi "Nuk ka vende te lira" dhe butoni ishte i caktivizuar. Aplikacioni nuk premtoi rezervim.

## Ndryshimi i ri
Si hyrje tjeter provova udhetimin me ID 3, Lipjan - AAB, me 0 vende te lira.
Parashikova qe butoni per kerkese te ishte i caktivizuar.
Rezultati ishte sipas pritshmerise: u shfaq "Nuk ka vende te lira".
Kete prove e bera vete; demonstrimi para kolegut nuk eshte kryer ende.

## Ndihma nga AI
Perdora ChatGPT per udhezime teknike, shembullin e parashikimit, krijimin e kodit te faqes 404 dhe dokumentimin e provave.
Vete kontrollova aplikacionin ne shfletues, testova ID 2, ID 999 dhe udhetimin me 0 vende.
Verifikova qe korrigjimi funksionon dhe lidhja kthen perdoruesin te lista.

