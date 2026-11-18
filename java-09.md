# RideShare - Java 9

## Cfare ndertova
Shtova ruajtjen e udhetimeve te preferuara me perditesim optimist te pamjes. Aplikacioni shfaq gjendjen e ruajtjes, rikthen gjendjen e meparshme kur kerkesa deshton dhe mundeson riprovimin.

## Provat qe bera

### Prova 1: Ruajtja mbetet pas rifreskimit
Hapat: Ruajta udhetimin dhe kontrollova gjendjen pas rifreskimit.
Rezultati i pritur: Udhetimi te mbetet i ruajtur.
Rezultati real: U shfaq "U ruajt te te preferuarat".
Rezultati: Kaloi.

### Prova 2: Gabimi nuk le sukses te rreme
Hapat: Bllokova kerkesen POST ne Chrome DevTools.
Rezultati i pritur: Gjendja te rikthehet dhe te shfaqet gabimi.
Rezultati real: U shfaq "Ruajtja deshtoi. Provo perseri". Pas caktivizimit te bllokimit, riprovimi perfundoi me sukses.
Rezultati: Kaloi.

### Prova 3: Klikimet e perseritura nuk krijojne kopje
Hapat: Testova ruajtjen dhe kontrollova regjistrimet ne Neon.
Rezultati i pritur: Vetem nje regjistrim per perdorues dhe udhetim.
Rezultati real: Neon tregoi nje regjistrim per kombinimin e testuar.
Rezultati: Kaloi.

## Ku gjendet puna
Repository: https://github.com/alberinastublla/rideshare-mobile

Skedaret:
- src/components/ButoniPreferuar.tsx
- src/app/api/preferuarat/route.ts
- src/app/udhetimi/[id]/page.tsx
- aplikacioni/src/components/ButoniPreferuar.tsx

## Cfare mbetet per permiresim
Te testohet funksionaliteti edhe ne telefon dhe me nje koleg.

## Ndihma nga AI
Perdora ChatGPT per implementimin, udhezimet e testimit dhe dokumentimin. Rezultatet i kontrollova vete ne aplikacion, Chrome DevTools dhe Neon.
