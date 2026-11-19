# Java 10 – Dy ekrane, nje gjendje dhe kontrolli i lejeve

## Projekti
RideShare Mobile

Repository: https://github.com/alberinastublla/rideshare-mobile

## Qellimi
Testimi i roleve dhe kontrollit te pronesise se udhetimeve.

## Funksionalitetet
- Hyrja me GitHub.
- Ndarja e roleve udhetar dhe shofer.
- Ndryshimi i ores vetem nga shoferi i autorizuar.
- Kontrolli i pronesise ne server dhe databaze.
- Shfaqja e mesazheve te suksesit dhe refuzimit.

## Prova 1 – Udhetari
Pritshmeria: Udhetari nuk mund te ndryshoje oren.
Rezultati: Kaloi. Formulari nuk u shfaq per udhetarin.

## Prova 2 – Perdoruesi pa hyrje
Pritshmeria: Perdoruesi pa hyrje nuk ka formular per ndryshimin e ores.
Rezultati: Kaloi.

## Prova 3 – Shoferi i autorizuar
Pritshmeria: Shoferi ndryshon oren e udhetimit te vet.
Vezhgimi: U shfaq mesazhi "Ora u ruajt me sukses".
Ne databaze udhetimi 2 kishte oren 08:25.
Rezultati: Kaloi.

## Prova 4 – Ndryshimi i ID-se ne formular
Hapat: Ndryshova vleren e fshehur te ID-se nga 2 ne 1 permes Chrome DevTools dhe dergova formularin.
Pritshmeria: Serveri duhet ta refuzoje ndryshimin e udhetimit te nje shoferi tjeter.
Vezhgimi: U shfaq mesazhi "Nuk ke leje per kete udhetim. Ora nuk ndryshoi."
Ne Neon, udhetimi 1 mbeti 08:00 dhe udhetimi 2 mbeti 08:25.
Rezultati: Kaloi.

## Siguria
Kontrolli i rolit dhe pronesise realizohet ne server.
ID-ja e shoferit merret nga sesioni dhe nuk besohet nga formulari.

## Ndihma nga AI
Perdora ChatGPT per udhezime teknike, kontrollin e kodit dhe dokumentimin e testeve.
Rezultatet u verifikuan ne aplikacion dhe ne databazen Neon.
