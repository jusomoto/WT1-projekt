# Be a Mineonaire

## Inhaltsverzeichnis

- [Einleitung](#intro)
- [Erfahrung aus Paperclip](#experience)
- [Designkonzept](#design)
- [Meilensteinplan](#milestone)

<a name="intro"></a>

## Einleitung

### Grundkonzept
Das Spiel "Be a Mineonaire" handelt um die Erzeugung von Bitcoins und dessen sich stetig veränderten Kurs. Der Spieler wird mit einem einzigen Gerät starten und wird so, seine ersten Bitcoins minen. Durch diese Erträge ist der Spieler in der Lage sich neue bessere Hardware zu leisten oder seine bestehende Hardware upzugraden. Der Spieler wird durch Events im Spiel die zufällig auftreten auf Laune gehalten. Beispiele wären hier: ein Crash des Kurses oder Investitionsmöglichkeiten in innovative Ideen. Dies dient einerseits dazu, dem Spieler bei jeder Runde einen anderen Spielverlauf zu ermöglichen.

### Start

Man beginnt mit einem PC, dadurch verdient man Bitcoins und kann weitere Hardware oder Upgrades kaufen.
Als Story wäre angedacht, das man als Student auf einer technischen Fachhochschule ist
und dort erstmals mit dem Bitcoin in Berührung kommt und man sich entschließt Bitcoins zu minen.

### Verlauf des Spiels

- der Kurs vom Bitcoin verändert sich alle 30 Sekunden und beginnt bei einem geringen Wert.
- Im Laufe des Spiels muss der Spieler ebenso seine Rechnungen für Miete & Strom quartalsweise bezahlen. 
- Hier kann es zu privaten Events kommen wie einem Autounfall oder unvorhergesehene Ausgaben. 
- Das Spiel startet 2017 und läuft bis 2041
- Upgrades erzeugen mehr BTC/Sekunde
- Upgrades & Neuerwerbungen erhöhen die Rechnungen
- News Feed für vergangene Ereignisse


### Ziel

Ziel des Spieles ist es, in möglichst kürzerster Zeit 1 Million Dollar zu verdienen. Dies kann auf unterschiedlichster Möglichkeit und nicht alleine durch Mining erzielt werden. Die Zeit bis dorthin wird gespeichert und in die Rangliste eingetragen.
Ist das Jahr 2041 erreicht endet das Spiel automatisch.

### frühzeitiger Spielabbruch

Das Spiel ist vorzeitig vorbei, wenn der Spieler 0 USD & 0 BTC besitzt.

<a name="experience"></a>

## Erfahrung aus Paperclip

### Positive Eindrücke und Einflüsse

Paperclip ist im Großen und Ganzen ein Click &amp; Wait Spiel, eine Idee, die wir auch in unserem Spiel
verwenden wollten. Zuerst müssen die Büroklammern händisch hergestellt werden, anschließend kann die Produktion gesteigert und automatisiert werden um im Endeffekt noch produktiver zu werden und schneller sein Ziel zu erreichen. Schnell dreht sich in Paperclip jedoch nicht mehr alles nur um Papierklammern, es kommt der Aktienmarkt ins Spiel, in einem kasinoähnlichen Modus kann Glückspiel betrieben werden, Drohnen können gebaut werden und schließlich die ganze Galaxie erforscht werden.
Obwohl die Grundidee von Paper Clip sehr simple ist, hat es trotzdem großen Spaß gemacht die verschiedenen Möglichkeiten zu erforschen. Es war doch sehr interessant zu sehen was mit einfachen Mitteln alles möglich ist. Beim Beginn des Spiels weiß man nicht wirklich worauf man sich einlässt, was einen erwarten wird, so muss man durch ausprobieren und herumklicken, eine gute Strategie finden. Eine ähnliche Grundidee wollten wir also schnell auch in unser Spiel bringen.
Dazu stellten wir uns folgende Fragen?

- Was wäre eine interessante Mission?
- Welches Thema ist aktuell?
- Wie kann man diese Themen in ein Browsergame bringen?

### Negative Eindrücke

Das Design von Paperclip, ist wohl auch bewusst eher einfach gehalten, dadurch wirkt das Spiel designtechnisch schnell ausladend.
Es zählt wie so oft der erste Eindruck, ein paar gezielt eingesetzte
CSS-Elemente hätten dem Spiel sicher gutgetan, um eine Atmosphäre zu erzeugen bei der man sich wohlfühlt. Es wirkt zumindest von der Designseite aus so, als hätte sich hier niemand mühe gegeben, dadurch leidet das ganze Erlebnis.
Paperclip verliert sehr schnell den Hang zur Realität und wird stark überzeichnet. Dieser Effekt ist natürlich gewollt von den Entwicklern, lässt einen als Spieler aber etwas ratlos zurück. Eine solch starke Überzeichnung streben wird nicht an.
Weiters wäre eine Art Geschichte im Spiel interessant gewesen, um sich mit dem gespielten Charakter (Leiter einer Papierklammerfabrik?) identifizieren zu können.
Dem Spiel fehlt auch der Wettbewerb, interessant wäre zum Beispiel eine Rangliste, in der man seine Leistungen mit anderen Spielern weltweit vergleichen kann. Denkbar wäre hier folgendes Szenario:
Wer schafft es als erster 1 Milliarde Paperclips zu erzeugen?

### Fazit

Paperclip erreicht mit einfachen Mitteln doch einiges, im Sinne von „Weniger ist mehr“. Obwohl es doch sehr überzeichnet ist, macht es Spaß herauszufinden wohin die Reise gehen wird, wenn man erstmal beginnt Büroklammern herzustellen.

<a name="design"></a>

## Designkonzept

Bei unserem Design ist es uns wichtig, dass der User nicht mit zu vielen Informationen auf einmal erschlagen wird. Dies wollen wir durch "Tabs" in der Navigation realisieren. Unser Spiel wird mobil genauso spielbar sein wie am PC. Das Responsive Design wollen wir mittels Bootstrap v4 umsetzen.

![Layout][logo]

[logo]: https://raw.githubusercontent.com/Blackscr33n/WT1-projekt/master/mockup_bam.png "Layout Mockup"


<a name="milestone"></a>

## Meilensteinplan

| #        | Name          | Datum         | 
|:--------:|:-------------:|:-------------:|
| 1.1      | Projektstart| 6.12.17  |
| 1.2      | Projekt-setup| 10.12.17  |
| 2.1      | Design: endgültiges Layout| 15.12.17 |
| 2.2      | Design: Gestaltung| 26.12.17 |
| 2.3      | Design: Animationen| 31.12.17 |
| 3.1      | Functional: Algorithmus "zufällige" Events| 15.12.17 |
| 3.2      | Functional: Zeitablauf| 17.12.17 |
| 3.3      | Functional: Eventslistener| 22.12.17 |
| 3.4      | Functional: lokale Datenbank| 20.12.17 |
| 3.5      | Functional: Mining Earnings & Hardware| 28.12.17 |
| 3.6      | Functional: Algorithmus Kursentwicklung| 10.12.17 |
| 4.1      | Testing: abgeschlossen | 08.01.17 |
| 4.2      | Testing: gefundene Bugs behoben | 15.01.17 |
| 5.1      | Ende: Projektabschluss & Abgabe | 20.01.18 |


----------------

Feedback von Hr. Ertl:


Sie waehlen ein dem Zeitgeist entsprechendes Thema. Ich gehe davon aus das sie nur simulierte Bitcoins minen und keine echten.

Anbei ein paar Kommentare mit denen sie dann intern weiter diskutieren koennen:

- die Erkenntnisse von Paperclip sind plausibel und gut gewaehlt.

- zur Spielmechanik: wie bauen sie die externen Events wie unvorhergesehene Ausgaben ein? Haben sie hier eine Storyline anhand von Schwellwerten?

- wie lange dauert ein Spiel geplanterweise in Minuten/Stunden bis man 1x durch ist?

- das UI sieht ansprechend und aufgeraeumt aus. Wird es auch eine Hilfefunktion geben damit man weiss was man tun muss?

- wie gehen sie mit dem Thema Hiscore/speichern um?

- der Meilensteinplan ist aeusserst genau. Wie stellen sie sicher das sie hier jederzeit am richtigen Weg sind und alle Meilensteine einhalten? Gibt es einen Projekt-Review Cycle?

- wie sieht ihr Testplan genau aus?

- @Technologien: verwenden sie ausserhalb von Bootstrap noch andere Libs?
