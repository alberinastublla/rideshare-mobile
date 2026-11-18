# Java 8 – Vendndodhja

## Projekti
RideShare Mobile

Repository: https://github.com/alberinastublla/rideshare-mobile

## Qellimi
Implementimi i vendndodhjes ne aplikacion duke kerkuar lejen vetem pas klikimit te perdoruesit dhe duke ofruar vendtakim manual.

## Funksionalitetet
- Butoni "Perdor vendndodhjen time".
- Kerkimi i lejes vetem pas klikimit.
- Shfaqja e koordinatave te vendndodhjes.
- Mundesia "Shkruaj vendtakimin".
- Trajtimi i refuzimit te lejes.
- Trajtimi i vendndodhjes se padisponueshme.

## Provat

### Prova 1 – Pranimi i lejes
Hapat: Vendosa koordinata fiktive ne Chrome DevTools Sensors dhe klikova butonin e vendndodhjes.

Pritshmeria: Aplikacioni te shfaqe koordinatat e testimit.

Vezhgimi: U shfaq pika e nisjes me koordinatat 42.6600 dhe 21.1600.

Rezultati: Kaloi.

### Prova 2 – Vendndodhja e padisponueshme
Hapat: Zgjodha "Location unavailable" ne Sensors dhe klikova butonin.

Pritshmeria: Aplikacioni te shfaqe mesazh gabimi dhe te lejoje vendtakimin manual.

Vezhgimi: U shfaq mesazhi se vendndodhja nuk eshte e disponueshme. Vendtakimi manual funksionoi.

Rezultati: Kaloi.

### Prova 3 – Refuzimi i lejes
Hapat: Bllokova lejen e vendndodhjes ne Chrome dhe klikova butonin.

Pritshmeria: Refuzimi te mos e bllokoje perdoruesin.

Vezhgimi: U shfaq mesazhi "Leja u refuzua. Mund ta shkruash vendtakimin."

Rezultati: Kaloi.

### Prova 4 – Vendtakimi manual
Hapat: Shkrova "Hyrja kryesore e AAB" ne fushen e vendtakimit.

Pritshmeria: Vendtakimi te shfaqet pa pasur nevoje per vendndodhje.

Vezhgimi: U shfaq "Vendtakimi i shkruar: Hyrja kryesore e AAB".

Rezultati: Kaloi.

## Privatësia
Per testimin e vendndodhjes u perdoren koordinata fiktive. Nuk u publikua adresa reale e perdoruesit.

## Kontrolli teknik
Komanda npm run build perfundoi me sukses. U shfaq nje paralajmerim CSS per @theme inline.

## Ndihma nga AI
Perdora ChatGPT per udhezime teknike, implementimin e komponentit Vendndodhja, zgjidhjen e gabimeve dhe dokumentimin e provave.

Testet u realizuan dhe rezultatet u verifikuan ne aplikacion.

## Prova me nje hyrje te re

**Hyrja qe provova:** Shkrova "Biblioteka" dhe e konfirmova. Pastaj shkrova "Parkingu" pa e konfirmuar. Ne fund provova konfirmimin me fushe bosh.

**Parashikimi im para klikimit:** Vendtakimi i konfirmuar duhet te mbetet "Biblioteka" derisa te konfirmohet nje vendtakim tjeter. Fusha bosh duhet te shfaqe gabim.

**Cfare pashe realisht:** "Biblioteka" mbeti e konfirmuar. Kur provova fushen bosh, u shfaq mesazhi "Shkruaj nje vendtakim para konfirmimit." dhe zgjedhja e meparshme nuk u fshi.

**Skedari dhe funksioni qe e shpjegojne:** src/app/udhetimi/[id]/kerkesa/Vendndodhja.tsx, funksioni konfirmoVendtakimin.

**Cfare kuptova ose korrigjova:** Vendtakimi duhet te ndryshoje vetem pas konfirmimit. Shtova kontrollin per tekst bosh dhe ruajtjen e vendtakimit te konfirmuar.
