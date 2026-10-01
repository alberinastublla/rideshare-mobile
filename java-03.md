# Raporti - Java 3

## Prova 1
- **Hapat:** Hapa faqen kryesore `/` në shfletues dhe kalova në pamjen e telefonit (Mobile View në DevTools).
- **Rezultati real:** Faqja shfaq saktësisht 3 kartat e udhëtimeve me të gjitha detajet dhe nuk ka scroll horizontal në telefon.

## Prova 2
- **Hapat:** Klikova te karta e dytë për të parë detajet, kontrollova butonin te karta e tretë dhe provova të hap adresën `/udhetimi/99`.
- **Rezultati real:** Klikimi i kartës 2 shfaqi vendtakimin 'Te stacioni kryesor'. Karta 3 e ka butonin 'Nuk ka vende të lira' të çaktivizuar. Adresa `/udhetimi/99` shfaq me sukses faqe me mesazhin 'Udhëtimi nuk u gjet'.

## Prova 3
- **Hapat:** Klikova butonin 'Kërko vend' te karta e parë dhe pastaj përdora butonin e kthimit mbrapa.
- **Rezultati real:** Klikimi i butonit shfaqi faqen e kërkesës me mesazhin 'Simulim: Në pritje', ndërsa butonat e navigimit të kthimit funksionojnë plotësisht saktë.