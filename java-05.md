# Java 5 - Hyrja me GitHub dhe ndryshimi me leje

## Qellimi
Lidhja e hyrjes me GitHub dhe kontrolli i lejeve per ndryshimin e ores se udhetimit ne RideShare.

## Prova 1 - Hyrja dhe dalja
Provova hyrjen me GitHub dhe daljen nga llogaria.
Pas hyrjes, paneli shfaqi emrin dhe rolin shofer.
Pas rifreskimit, sesioni mbeti aktiv.
Pas daljes, paneli kerkoi hyrje perseri.

Rezultati: Prova kaloi.

## Prova 2 - Ndryshimi i lejuar
Hyra si shofer i udhetimit me ID 2.
Ndryshova oren nga 08:15 ne 08:25 permes panelit.
Aplikacioni shfaqi mesazhin "Ora u ruajt me sukses".
Ne Neon SQL Editor konfirmova qe ora ishte 08:25.
Pas testimit, e riktheva ne 08:15.

Rezultati: Prova kaloi.

## Prova 3 - Refuzimi pa leje
Ndryshova perkohesisht ID e formularit nga 2 ne 1.
Serveri refuzoi ndryshimin dhe shfaqi mesazhin
"Nuk ke leje per kete udhetim. Ora nuk ndryshoi."
Ne Neon konfirmova qe ID 1 mbeti 08:00.
Riktheva ID e formularit ne 2.

Rezultati: Prova kaloi.

## Perfundimi
Hyrja me GitHub funksionon.
Roli dhe pronari kontrollohen ne server duke perdorur Neon.
Shoferi mund te ndryshoje oren e udhetimit te vet,
por nuk mund te ndryshoje udhetimin e shoferit tjeter.

## Cfare do te permiresoj
Do te permiresoj pamjen e panelit dhe funksionet
per krijimin dhe rezervimin e udhetimeve.

## Ndihma nga AI
Perdora AI per udhezime teknike, rregullimin e gabimeve,
kontrollin e kodit dhe testimin e aplikacionit.
