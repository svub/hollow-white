import { Book } from "./shared/entities";

const book: Book = (({
 "title": "Hollow White",
 "chapters": [
  {
   "id": "0",
   "title": "Vorwort",
   "sections": [
    {
     "id": "001",
     "title": "Hollow White",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Bevor du ins Abenteuer eintauchst, achte bitte darauf, dass du <em>nicht</em>&nbsp;in einem <em>privaten Tab</em>&nbsp;bist, damit deine aktuelle Leseposition und Gesamtfortschritt automatisch gespeichert werden kann.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Hollow White</em>&nbsp;ist ein interaktives Mystery-Textadventure mit einer Dauer von zirka zwei bis drei Stunden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben dem künstlerischen Gedanken der Geschichte von <em>Hollow White</em>, stehen deine Entscheidungen im Mittelpunkt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Deine Entscheidungen haben Auswirkungen auf die Geschichte.</em></p>"
      }
     ],
     "next": [
      {
       "title": "Entscheidun­gen",
       "chapterId": "0",
       "sectionId": "002"
      }
     ]
    },
    {
     "id": "002",
     "title": "Entscheidungen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Unzählige Entscheidungen trifft der Mensch in seinem Leben. Viele davon im Sekundentakt. Gemeinsam formen wir damit unsere Realität, unsere Gefühle und unsere Beziehungen. Unsere Entscheidungen haben Einfluss auf uns selbst und die Welt um uns herum.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In jeder Sekunde liegt es somit in unserer Hand, wie die nächste ihren Lauf nimmt. Ein kleiner Funke kann ein ganzes Universum entstehen lassen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kurz gesagt, Sie da draußen und Ihre zu treffenden Entscheidungen sind jetzt unsere letzte Hoffnung!«</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 1",
       "chapterId": "1",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "1",
   "title": "Ella",
   "sections": [
    {
     "id": "001",
     "title": "»Ella, wach auf! Wach auf!«",
     "elements": [
      {
       "type": "state",
       "id": "snow",
       "modifier": "=1"
      },
      {
       "type": "state",
       "id": "rose",
       "modifier": "=2"
      },
      {
       "type": "state",
       "id": "crash",
       "modifier": "=0"
      },
      {
       "type": "paragraph",
       "text": "<p>Erschreckt reißt du im&nbsp;allerletzten&nbsp;Moment&nbsp;das Lenkrad zur Seite, um dem gähnenden Abgrund, der sich neben dir erstreckt, auszuweichen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Diese eine Sekunde hätte dich und den alten Karren fast in die eisigen&nbsp;einsamen Abgründe der verschneiten Berglandschaft von&nbsp;<em>White Valley</em> katapultiert. Doch das grelle Pfeifen der Tankanzeige bringt dich zurück aus deinem Sekundenschlaf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Puls schießt rasend schnell nach oben und du bleibst erst einmal am verschneiten Straßenrand stehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zitternd ziehst du deine klammernden Hände vom Lenkrad und suchst etwas im Seitenfach. Eine Packung Kaugummis. Durch die Kälte steinhart geworden, kaust du mühsam den etwas modrigen Geschmack nach Minze. Kalt läuft es dir beim Schlucken die Kehle hinunter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du drehst den wackligen Rückspiegel zu dir. Dein Spiegelbild wirkt müde und erschöpft. Deine dunklen Augen schaffen es kaum noch, sich offenzuhalten, und deine Lippen sind blass und spröde. Du fährst durch deine langen Haare und steckst dir diese hinters Ohr.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit kraftloser Stimme sprichst du zu dir. »Durchhalten, du musst durchhalten, <em>Ella</em>.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du drehst den Zündschlüssel um und setzt deine Reise durch die weiße Schneelandschaft fort.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der dichte Schneefall und die einbrechende Dunkelheit erschweren mehr und mehr die Sicht, als du den Bergpass verlässt und ein weiß&nbsp;geschmücktes Waldgebiet erreichst. Die Last des Schnees&nbsp;drückt die Äste der Tannen nach unten. In der Ferne schimmert ein Licht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine&nbsp;leuchtende Neonröhre flackert.&nbsp;Du fährst mit dem letzten Tropfen Sprit in die trostlos wirkende Tankstelle ein. Weit und breit kein Mensch – alles ist in Dunkelheit getaucht. Du ziehst den rostigen Tankrüssel aus der Säule und lässt das Benzin laufen. Danach betrittst du den Laden, der sehr viel größer ist, als er von außen erscheint. Sofort sticht dir ein intensiv beißender Geruch in die Nase. Instinktiv hältst du die Luft an und versuchst, mit so wenig Atemzügen wie möglich auszukommen. Niemand da. An der Kasse drückst du auf eine kleine Klingel, doch es bleibt still. Nur der schrille Ton hallt bis durch die hinteren Gänge.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In einer Ecke flackert eine Lampe.</p>"
      }
     ],
     "next": [
      {
       "title": "Umsehen",
       "chapterId": "1",
       "sectionId": "002"
      },
      {
       "title": "Tankstelle verlassen",
       "chapterId": "1",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "002",
     "title": "Umsehen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du dich der flackernden Lampe näherst, erstarrst du vor Schreck. Ein großer Schatten zeichnet sich plötzlich vor dir ab und eine riesige&nbsp;Gestalt kommt zielgerichtet auf dich zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Junge Dame! Kann ich Ihnen helfen?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dir verschlägt es die Sprache.&nbsp;Du bekommst keinen einzigen Ton heraus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Tut mir leid, wenn ich Sie erschreckt habe. Ich muss eingeschlafen sein. Wir haben ein Problem mit dem Stromnetz hier draußen. Alles stockfinster hier, noch dazu&nbsp;dieser fürchterliche Gestank. Unsere Kühlung ist ausgefallen und einige Lebensmittel haben angefangen, schlecht zu werden. Zumindest funktioniert noch der Notfallgenerator für die Tanksäulen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du drückst dem groß gewachsenen hageren Mann einen zerknitterten&nbsp;Geldschein in die Hand und fragst nach der nächsten Übernachtungsmöglichkeit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ein gutes Stück die Straße hinunter. <em>Motel Midnight</em>«, erwidert der Tankwart mit seiner kratzigen&nbsp;Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zurück beim Auto angekommen tastest du&nbsp;in deiner Jackentasche nach dem Autoschlüssel und ziehst einen Gegenstand&nbsp;hervor.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein altes Diktiergerät mit Kassette.&nbsp;Als du es so betrachtest, fällt dir auf, dass der Autoschlüssel noch im Zündschloss steckt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Diese Müdigkeit. Zeit, sich auszuruhen. Du setzt dich ins Auto und drehst gähnend den Zündschlüssel um, um die Heizung&nbsp;zu aktivieren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Was für ein wohltuendes Gefühl, als die Wärme über deinen Rücken&nbsp;durch deinen Körper läuft, in dieser eisig kalten und stillen Nacht.</p>"
      }
     ],
     "next": [
      {
       "title": "Kurz entspannen",
       "chapterId": "1",
       "sectionId": "004"
      },
      {
       "title": "Sofort weiter",
       "chapterId": "1",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "003",
     "title": "Tankstelle verlassen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Dir ist das alles nicht geheuer und du beschließt, die Tankstelle schleunigst zu verlassen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zurück beim Auto angekommen, tastest du in deiner Jackentasche nach dem Autoschlüssel und ziehst einen Gegenstand&nbsp;hervor.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein altes Diktiergerät mit Kassette. Als du dieses so betrachtest, fällt dir auf, dass der Autoschlüssel noch im Zündschloss steckt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Diese Müdigkeit. Zeit sich auszuruhen. Du setzt dich ins Auto und drehst gähnend den Zündschlüssel um, um die Heizung&nbsp;zu aktivieren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Was für ein wohltuendes Gefühl, als die Wärme durch deinen Körper läuft, in dieser eisig kalten und stillen Nacht.</p>"
      }
     ],
     "next": [
      {
       "title": "Kurz ent­spannen",
       "chapterId": "1",
       "sectionId": "004"
      },
      {
       "title": "Sofort weiter",
       "chapterId": "1",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "004",
     "title": "Kurz entspannen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du fährst auf den gegenüberliegenden Parkplatz und drehst den Sitz nach hinten. Nach wenigen Sekunden fallen dir bereits die Augen vor Müdigkeit zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du beginnst zu träumen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du aufwachst, findest du dich in purer Dunkelheit wieder. Sofort überkommt dich ein panisches Gefühl der Enge,&nbsp;du&nbsp;beginnst schwer zu atmen.&nbsp;Orientierungslos stößt du mit deinen Händen an etwas Weiches.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist das Lenkrad des Autos, welches mit einem&nbsp;künstlichen&nbsp;Fell ummantelt ist. Blind tastest du dich weiter zum Lichtschalter und drückst diesen mehrmals. Es fühlt sich an wie in einem Sarg. Die Scheiben sind komplett mit Schnee bedeckt. Als du heftig am Griff des Türöffners&nbsp;ziehst&nbsp;und kräftig gegen die Tür drückst, geht diese nur einen kleinen Spalt auf. Mit voller Körperkraft drückst du stärker dagegen und schaffst es schließlich, dich aus dem komplett&nbsp;eingeschneiten Auto zu befreien.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach Luft ringend, reibst du dir die kalten Hände und befreist&nbsp;die Scheiben vom Schnee.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zitternd setzt du dich zurück ins&nbsp;Auto.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Heizung beginnt zu arbeiten.&nbsp;Als die Scheiben wieder frei sind, fährst du los. Dein Puls ist hoch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaltest das Diktiergerät aus deiner Jackentasche an,&nbsp;um eine Sprachnachricht aufzunehmen:</p>"
      },
      {
       "type": "style",
       "classes": "recording",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Wo bin ich hier nur gelandet! Heute ist der dritte Tag, glaube ich. Ich bin immer noch im verschneiten Gebiet namens White Valley unterwegs. Es ist unerträglich kalt und noch ein gutes Stück nach Snow Peaks. Ich hoffe, dass ich dort weitere Hinweise zu meiner Spur zu Hannah finde.«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Als du die Aufnahme beendest, erscheint vor dir die Schrift <em>Motel Midnight</em>, welche in die dunkle Nacht strahlt.</p>"
      }
     ],
     "next": [
      {
       "title": "Motel Midnight",
       "chapterId": "1",
       "sectionId": "006"
      },
      {
       "title": "Weiter­fahren",
       "chapterId": "1",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "005",
     "title": "Sofort weiter",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du weiterfährst, schaltest du das Diktiergerät aus deiner Jackentasche an und beginnst zu sprechen:</p>"
      },
      {
       "type": "style",
       "classes": "recording",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Der dritte Tag, glaube ich. Ich bin immer noch im verschneiten Gebiet namens White Valley unterwegs. Es ist unerträglich kalt und noch ein gutes Stück nach Snow Peaks. Ich hoffe, dass ich dort weitere Hinweise zu meiner Spur zu&nbsp;Hannah&nbsp;finde.«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Als du die Aufnahme beendest, erscheint vor dir die Schrift <em>Motel Midnight</em>, welche in die dunkle Nacht strahlt.</p>"
      }
     ],
     "next": [
      {
       "title": "Motel Midnight",
       "chapterId": "1",
       "sectionId": "006"
      },
      {
       "title": "Weiter­fahren",
       "chapterId": "1",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "006",
     "title": "Motel Midnight",
     "elements": [
      {
       "type": "state",
       "id": "midnight",
       "modifier": "+1"
      },
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>An der&nbsp;Rezeption des <em>Motel&nbsp;Midnight</em>&nbsp;sitzt eine gemütliche ältere Dame mit dicker Brille und einem mit mehreren Schneeflocken verzierten rosa Wollpullover.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ziemlich spät unterwegs, junge Dame. Zimmer 55, Treppe hoch und links den Gang entlang«, sagt sie und gibt dir den Zimmerschlüssel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst diesen und schleifst dich mit letzten Kräften die Treppe hoch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Todmüde schließt du dein Zimmer auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein abgewracktes Bild empfängt dich. Der Teppichboden hat bereits die eine oder andere Flüssigkeit in sich aufgesaugt. Die Wände könnten wieder einen Anstrich gebrauchen. Es riecht nach Reinigungsmittel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Total müde machst du das Licht aus und ziehst die Vorhänge zu. Du schaffst es gerade noch, deine Schuhe auszuziehen und fällst direkt in das quietschende Bett und schläfst ein.</p>"
      },
      {
       "type": "addItem",
       "id": "motelmidnight"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Hollow White, ooh Hollow White …</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Grelle Lichtstrahlen blitzen durch die Vorhänge.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du öffnest deine Augen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Noch etwas wacklig auf den Beinen stehst du auf und machst die Vorhänge auf. Der Zauber der verschneiten Landschaft von <em>White Valley</em>&nbsp;zieht dich wie magisch in ihren Bann. Es ist so unglaublich hell. Der Schnee strahlt, blendet schon fast durch seine Helligkeit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einer warmen Dusche stehst du lange Zeit vor dem Spiegel und betrachtest die unter deine Haut gestochenen Zeichnungen. An deinen Handgelenken befinden sich filigrane schwarze Linien. Diese Zeichnungen haben&nbsp;eine gewisse Ästhetik, aber auch etwas Unheimliches. Sichtlich angeschlagen von den letzten Tagen wandert dein Blick auf den Spiegel. Tiefe Augenränder. Du siehst richtig mitgenommen aus. Etwas Puder und Make-up trägst&nbsp;du auf die dunklen Schatten. Hastig ziehst du dir den roten Strickpulli über und schlüpfst in die schwarzgraue Jeans. Mit deinen von der Kälte rissig gewordenen, schmerzenden Händen&nbsp;streichst du dir deine dunklen schwarzen Haare nach hinten und bindest diese zu einem Zopf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du fertig angezogen bist, geht es mit neuer Kraft in Richtung Rezeption des Motels.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die&nbsp;ältere Dame sitzt wieder am Empfang, dreht sich auf deine Frage nach dem Weg nach <em>Snow Peaks</em>&nbsp;mit ihrem Stuhl 90 Grad zur Seite, kritzelt mit einem Stift etwas auf eine Packung Streichhölzer und drückt dir diese in die Hand.</p>"
      },
      {
       "type": "addItem",
       "id": "matches"
      },
      {
       "type": "paragraph",
       "text": "<p>»Auf der Rückseite finden Sie die Wegbeschreibung. Beehren Sie uns bald wieder,&nbsp;junge Dame.&nbsp;Wir haben übrigens 24 Stunden geöffnet. Täglich!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bist in dem Moment etwas abgelenkt von ihrem verzierten rosa Strickpullover, neben den gehäkelten Schneeflocken sind vereinzelt kleine Rentiere eingestickt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zusätzlich zu den Streichhölzern nimmst du noch einen&nbsp;kleinen roten Apfel aus der an der Rezeption platzierten Obstschale. Nach einigen hastigen Bissen hast du den kompletten Apfel verputzt, verabschiedest dich freundlich bei der Dame und gehst zurück zum Auto.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach mehreren Anläufen springt die alte Karre schließlich an&nbsp;– die Kälte macht nicht nur dir zu schaffen. Du setzt deine Reise durch die zauberhafte weiße Schneelandschaft fort.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einigen Stunden ununterbrochener Fahrt hörst du seltsame Geräusche – nein, es ist nicht dein Magen. Es ist erst ein dumpfes undefinierbares Klopfen, woraus schnell ein heftiges Schleifen wird. Bevor du reagieren kannst, schießt&nbsp;dicker Rauch wie eine&nbsp;Fontäne aus dem Motorenraum. Mit etwas Glück landest du etwas ruppig, dennoch unversehrt in einem schneebedeckten&nbsp;Straßengraben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du die Tür öffnest und aus dem Auto steigst, siehst du weit und breit nur verschneite Wälder und keine Menschenseele. Verdammt. Du bekommst&nbsp;Angst und die Dunkelheit bricht herein.</p>"
      }
     ],
     "next": [
      {
       "title": "Beim Auto bleiben",
       "chapterId": "1",
       "sectionId": "008"
      },
      {
       "title": "Auto verlassen",
       "chapterId": "1",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "007",
     "title": "Weiterfahren",
     "elements": [
      {
       "type": "state",
       "id": "crash",
       "modifier": "+2"
      },
      {
       "type": "state",
       "id": "karma",
       "modifier": "-3"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einigen Stunden ununterbrochener Fahrt hörst du seltsame Geräusche – könnte dein Magen sein. Es ist erst ein dumpfes undefinierbares Klopfen, woraus schnell ein heftiges Schleifen wird. Plötzlich schießt&nbsp;dicker Rauch wie eine Fontäne&nbsp;aus dem Motorenraum.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hektisch reißt du das Lenkrad zur Seite. Das Fahrzeug kommt ins Rutschen und du verlierst jegliche Kontrolle. Über einen Schneehügel hinweg dreht sich das Auto zur Seite, überschlägt sich mehrfach und landet völlig demoliert mit zersplitterten Scheiben abseits der Straße im Schnee. Du spürst noch die harten Schläge, bevor es dir schwarz vor Augen wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du öffnest langsam deine Augen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Alles um dich herum dreht sich und steht auf dem Kopf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du versuchst dich zu orientieren, doch dir ist so schwindlig, dass du alles doppelt siehst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Überall Scherben. Die Frontscheibe ist zersprungen und du riechst Benzin. Blut läuft dir über das Gesicht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Unter Schock versuchst du den Gurt zu lösen, aber du hast keine Chance. Dir wird es bei jeder Bewegung schwindlig.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schreist vor Schmerz und Hilflosigkeit und kämpfst gegen die Ohnmacht an, aber es wird dir immer wieder schwarz vor Augen, bis du erneut dein Bewusstsein verlierst.</p>"
      }
     ],
     "next": [
      {
       "title": "Klänge in der Dunkelheit",
       "chapterId": "1",
       "sectionId": "015"
      }
     ]
    },
    {
     "id": "008",
     "title": "Beim Auto warten",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Der Qualm aus dem Motorenraum hat sich mittlerweile gelegt und du sitzt gut eingepackt im Auto. Dein knurrender Magen ist kaum zu überhören und die Kaugummis sind leer. Als du das Handschuhfach öffnest, findest du eine Schachtel Zigaretten der Marke <em>Ghost Fellows</em>.</p>"
      },
      {
       "type": "addItem",
       "id": "ghostfellows"
      },
      {
       "type": "state",
       "id": "ghostfellows",
       "modifier": "=1"
      }
     ],
     "next": [
      {
       "title": "Widerstehen",
       "chapterId": "1",
       "sectionId": "009"
      },
      {
       "title": "Eine ist keine",
       "chapterId": "1",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "009",
     "title": "Widerstehen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du kurbelst mühsam die Fensterscheibe herunter&nbsp;und schleuderst die Schachtel mit voller Kraft in die eisig kalte Dunkelheit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du etwas stolz in die Dunkelheit blickst, siehst du für einen kurzen Moment durch die Tannen ein Licht in der Ferne schimmern.</p>"
      },
      {
       "type": "state",
       "id": "ghostfellows",
       "modifier": "=0"
      }
     ],
     "next": [
      {
       "title": "Zum Licht",
       "chapterId": "1",
       "sectionId": "013"
      },
      {
       "title": "Im Auto bleiben",
       "chapterId": "1",
       "sectionId": "011"
      }
     ]
    },
    {
     "id": "010",
     "title": "Eine ist Keine",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "if",
       "condition": "ITEM matches",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Du zündest dir mit den Streichhölzern aus dem <em>Motel Midnight</em>&nbsp;eine Zigarette an.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein starker Reizhusten überkommt dich nach dem ersten Zug und der kalte Rauch brennt furchtbar in deiner Lunge.&nbsp;Während du mit dem Hustenkrampf zu kämpfen hast, fährt wie aus dem Nichts ein Transporter an dir vorbei.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du reißt hustend die Beifahrertür auf und läufst schnell&nbsp;den sich entfernenden Rücklichtern des Fahrzeuges hinterher. Doch der Fahrer reagiert&nbsp;nicht.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Als sich dein Husten legt, stehst du allein und verlassen in der eisig dunklen und kalten Nacht.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "ITEM matches",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Mühsam suchst du nach einem Feuerzeug oder Streichhölzern, um dir eine Zigarette der <em>Ghost Fellows</em>&nbsp;anzustecken.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Nervös und ungeduldig kramst du in den Seitenfächern und wirfst noch einmal einen Blick genauer ins Handschuhfach.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du bist mit deiner Suche nach Feuer so beschäftigt, dass du gar nicht merkst, wie ein Fahrzeug an der Straße an dir vorbeifährt.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du reißt hektisch die Beifahrertür auf und läufst schnell den sich entfernenden Rücklichtern des Fahrzeuges hinterher. Doch der Fahrer reagiert nicht.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du schreist noch hinterher, doch keine Chance, weiterhin stehst du allein und verlassen in der eisig dunklen und kalten Nacht.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Auto verlassen",
       "chapterId": "1",
       "sectionId": "014"
      },
      {
       "title": "Zurück zum Auto",
       "chapterId": "1",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "011",
     "title": "Im Auto bleiben",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Es wird immer kälter&nbsp;in dieser stillen Nacht. Deine Augen fallen zu. Du bist müde und erschöpft. Immer wieder versuchst du, dich wachzuhalten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Kälte raubt dir den Verstand und du fängst an zu fluchen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du verlässt das Auto.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Lange Zeit läufst du die Straße entlang. Nur verschneite Bäume, die Straße und du. Jede Ecke gleicht der anderen. In den Wäldern lauert die Dunkelheit, bis du plötzlich ein flackerndes Licht wahrnimmst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit letzten Kräften verlässt du die Straße und stapfst durch den tiefen Schnee.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es wird kälter. Deine Kräfte lassen immer mehr nach. Schritt für Schritt. Verzweifelt rufst du nach Hilfe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wo ist das flackernde Licht nur hin?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich kommst du ins Rutschen und stürzt einen verschneiten Abhang hinunter. Du knallst auf etwas&nbsp;Hartes und es wird dunkel.</p>"
      }
     ],
     "next": [
      {
       "title": "Klänge in der Dunkelheit",
       "chapterId": "1",
       "sectionId": "015"
      }
     ]
    },
    {
     "id": "012",
     "title": "Zurück zum Auto",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du sitzt wieder im Auto und wartest vergeblich, dass noch einmal jemand die Straße entlang kommt. Es ist unerträglich kalt. Kaum mehr auszuhalten. Du musst dich bewegen, damit du nicht einschläfst und erfrierst. Die Kälte zwingt dich, das Auto zu verlassen und der Straße zu folgen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es wird kälter und kälter. Du bist müde und erschöpft. Deine Kräfte lassen deutlich nach. Schritt für Schritt. Verzweifelt rufst du nach Hilfe, doch keine Spur von einem Lebenszeichen weit und breit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du beißt die Zähne zusammen und läufst weiter. Mittlerweile hat es angefangen,&nbsp;richtig stark zu schneien, sodass deine Sicht nur auf wenige Meter begrenzt ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Kälte raubt dir den Verstand und du fängst an zu fluchen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich kommst du ins Rutschen und stürzt einen verschneiten Abhang hinunter. Du knallst auf etwas&nbsp;Hartes und es wird dunkel.</p>"
      }
     ],
     "next": [
      {
       "title": "Klänge in der Dunkelheit",
       "chapterId": "1",
       "sectionId": "015"
      }
     ]
    },
    {
     "id": "013",
     "title": "Zum Licht",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Eine kleine Ewigkeit vergeht und du stapfst immer weiter durch den tiefen Schnee. Das Licht des Mondes scheint durch die Äste und schenkt dir vereinzelt etwas Sicht. Es wird allmählich kälter und die eisige&nbsp;Temperatur dringt immer mehr durch deine dicke gefütterte Kleidung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du fröstelst immer mehr und es wird kälter und kälter. Du bist müde und erschöpft. Deine Kräfte lassen deutlich nach. Schritt für Schritt. Verzweifelt rufst du, aber es ist still in dieser dunklen, verschneiten Nacht. Keine Spur von dem flackernden Licht, einer Siedlung oder einem Lebenszeichen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du beißt die Zähne zusammen und läufst weiter. Mittlerweile hat es angefangen, richtig stark zu schneien, sodass deine Sicht nur auf wenige Meter begrenzt ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich kommst du ins Rutschen und stürzt einen verschneiten Abhang hinunter. Du knallst auf etwas&nbsp;Hartes und es wird dunkel.</p>"
      }
     ],
     "next": [
      {
       "title": "Klänge in der Dunkelheit",
       "chapterId": "1",
       "sectionId": "015"
      }
     ]
    },
    {
     "id": "014",
     "title": "Auto verlassen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du losgehst, ist es stockdunkel. Das Licht des Mondes, welches durch die verschneiten Äste scheint und sich auf der vereisten Straßenfläche spiegelt, schenkt dir etwas Licht. Du stapfst durch den tiefen Schnee. Die Temperatur fällt und fällt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Kälte frisst sich immer mehr durch deine dicke Kleidung. Es wird kälter&nbsp;und kälter. Du bist müde und erschöpft. Deine Kräfte lassen deutlich nach. Du beißt die Zähne zusammen und läufst weiter. Mittlerweile hat es angefangen zu schneien, sodass&nbsp;deine Sicht nur auf wenige Meter begrenzt ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich kommst du ins Rutschen und stürzt einen verschneiten Abhang hinunter. Du knallst auf etwas&nbsp;Hartes und es wird dunkel.</p>"
      }
     ],
     "next": [
      {
       "title": "Klänge in der Dunkelheit",
       "chapterId": "1",
       "sectionId": "015"
      }
     ]
    },
    {
     "id": "015",
     "title": "Klänge in der Dunkelheit",
     "elements": [
      {
       "type": "if",
       "condition": "STATE Crash > 0",
       "elements": [
        {
         "type": "style",
         "classes": "note-black",
         "elements": [
          {
           "type": "paragraph",
           "text": "<p>»Hollow White,&nbsp;ooh&nbsp;Hollow White, höre die&nbsp;Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit so fern. Der weiten Stille entrissen, gereist hier her. Kam nach Snow Peaks. Ooh Snow Peaks, ooh Snow Peaks.«</p>"
          }
         ]
        },
        {
         "type": "paragraph",
         "text": "<p>Langsam öffnest du die Augen. Dir ist sehr schwindlig. Du hörst dumpf eine Stimme, die zu dir spricht.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein Mann Ende dreißig&nbsp;mit Vollbart sitzt vor dir.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Sie sind wach!&nbsp;Fällt mir ein Stein vom Herzen!«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du schaust dich um und merkst, dass du auf einem Sofa neben einem warmen Kamin liegst.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Vor dem flackernden Feuer siehst du einen weißen Husky.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Der Mann reicht dir eine Tasse Tee, welchen du erst mal dankend annimmst. Der warme Duft von frischer Minze und Ingwer strömt in deine Nase.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Wo … bin… ich?«, fragst du benommen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Sie sind in einem Randgebiet von <em>White Valley</em>.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Mein Name ist <em>Albert</em>.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein Wunder, dass Sie noch am Leben sind! Mein Hund <em>Snow</em> und ich haben ihr brennendes Auto mehrere Meter von der Straße geschleudert gefunden und konnten Sie in letzter Sekunde aus den Flammen befreien.«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Als du zu Albert sprechen willst, spürst du plötzlich einen starken stechenden Schmerz an deiner linken Wange. Instinktiv langst du hin und merkst den Verband in deinem Gesicht.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Ich habe die Scherbe entfernt und die Wunde verarztet. Wird einige Tage dauern, bis der Schnitt wieder verheilt ist. Ruhen Sie sich erst einmal aus. Wir sprechen später«, sagt Albert.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Crash > 0",
       "elements": [
        {
         "type": "style",
         "classes": "note-black",
         "elements": [
          {
           "type": "paragraph",
           "text": "<p>»Hollow White, ooh Hollow White, höre die Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit so fern. Der weiten Stille entrissen, gereist hier her. Kam nach Snow Peaks. Ooh Snow Peaks, ooh Snow Peaks.«</p>"
          }
         ]
        },
        {
         "type": "paragraph",
         "text": "<p>Mit einem dröhnenden Schädel wachst du neben dem flackernden Feuer eines Kamins auf. Du schaust dich etwas benommen um und hörst ein Pfeifen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein Mann Ende dreißig mit Vollbart kommt aus dem Nebenraum und begrüßt dich freudig. »Endlich, Sie sind wach. Wie geht es Ihnen? Sie waren&nbsp;eine Zeit lang bewusstlos.«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Als er dir einen heißen Tee reicht, nimmst du diesen erst einmal&nbsp;dankend an. Der warme Duft von frischer Minze und Ingwer strömt in deine Nase.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Wo … bin … ich?«, fragst du benommen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Sie sind in einem Randgebiet von <em>White Valley</em>.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Mein Name ist <em>Albert</em>.«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du schaust Albert an.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Sie …&nbsp;Sie haben&nbsp;mich gefunden?«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Er schaut bescheiden zur Seite und sagt: »Eigentlich mein alter Herr hier.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Sein Name ist <em>Snow</em>«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Neben dem Bett liegt ein schneeweißer Husky, mit ein paar schwarzen Flecken im Gesicht.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Wir haben Schreie gehört und Sie bewusstlos in der Nähe unserer kleinen Holzhütte hier gefunden. Ihrem Kopf sollte es in ein paar Tagen wieder besser gehen. Sie hatten richtig viel Glück.«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du kraulst dem Hund die Ohren. Ganz anhänglich, mit&nbsp;treuen Augen,&nbsp;schaut dich Snow an. Albert gibt dir dein Diktiergerät. »Das hier lag neben Ihnen im Schnee.&nbsp;Ruhen Sie sich aus. Wir reden nach dem Essen weiter.«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Albert verlässt den Raum. Erschöpft fallen dir die Augen zu im wohligen Schein des warmen Kaminfeuers.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du beginnst zu träumen.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Hollow White, ooh Hollow White, höre die&nbsp;Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit …«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Laute Schüsse wecken dich aus deinem Schlaf. Du springst erschrocken auf und schaust aus dem Fenster. Wegen des starken Schneefalls und der weiß bedeckten Wälder um die Hütte ist nichts zu sehen.</p>"
      }
     ],
     "next": [
      {
       "title": "Ver­schwinden",
       "chapterId": "1",
       "sectionId": "016"
      },
      {
       "title": "Umsehen",
       "chapterId": "1",
       "sectionId": "017"
      }
     ]
    },
    {
     "id": "016",
     "title": "Verschwinden",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Durch die Hintertür bei der Küche versuchst du zu verschwinden. Am Türgriff zerrend rüttelst du, doch die Tür ist verschlossen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Verängstigt wandert dein Blick auf die Kellertür. Du reißt diese auf und stürmst die Treppe nach unten. Doch nach wenigen Treppenstufen bremst dich die Dunkelheit. Vergebens tastest du nach einem Lichtschalter. Nichts.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hastest die Stufen wieder hoch und stehst völlig außer Atem in der Küche, als ruckartig die Tür der Hütte aufgeht und der kalte Schnee hineinweht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert betritt gefolgt von Snow den Eingang. In der rechten Hand eine Flinte, in der Linken einen geschossenen Hasen. »Alles in Ordnung?«,&nbsp;außer Atem&nbsp;antwortest du mit einem kurzen und erleichterten&nbsp;»Ja«.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Beim Essen erzählst du von der&nbsp;Autopanne und deiner Reise nach <em>Snow Peaks</em>. Albert bietet dir an, dich mit seinem Truck in das Städtchen zu bringen, sobald der starke Schneesturm aufgehört hat. Du nimmst das Angebot dankend an und gibst Snow die Überreste vom Abendessen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sie können mein Zimmer so lange nehmen, ich werde mit Snow ins Wohnzimmer vor den Kamin ziehen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bevor Albert die Hütte noch einmal verlässt, sagst du zu ihm:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Albert! Danke. Mein Name ist …&nbsp;<em>Ella</em>.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert lächelt dir zu, pfeift Snow zu sich und verlässt die Hütte. Du machst es dir in Alberts Zimmer gemütlich. Die letzten Tage haben dich sehr mitgenommen und dein Kopf macht dir immer noch zu schaffen.</p>"
      }
     ],
     "next": [
      {
       "title": "Hinlegen",
       "chapterId": "1",
       "sectionId": "018"
      },
      {
       "title": "Zimmer durchsuchen",
       "chapterId": "1",
       "sectionId": "019"
      }
     ]
    },
    {
     "id": "017",
     "title": "Umsehen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du läufst ins Kaminzimmer und rufst nach Albert und Snow. Keiner da. Nachdem du dich Schutz suchend&nbsp;hinter dem Kamin verschanzt hast, hörst du es von draußen bellen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Tür geht auf und der kalte Schnee weht in die warme Hütte. Albert betritt gefolgt von Snow den Eingang. In der rechten Hand eine Flinte, in der Linken einen geschossenen Hasen. »Alles in Ordnung?«, beruhigt antwortest du mit einem kurzen und erleichterten »Ja«.</p>"
      },
      {
       "type": "addItem",
       "id": "cabin"
      },
      {
       "type": "paragraph",
       "text": "<p>Beim Essen erzählst du von der&nbsp;Autopanne und deiner Reise nach <em>Snow Peaks</em>. Albert bietet dir an, dich mit seinem Truck in das Städtchen zu bringen, sobald der starke Schneesturm aufgehört hat. Du nimmst das Angebot dankend an und gibst Snow die Überreste vom Abendessen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sie können mein Zimmer so lange benutzen, ich werde mit Snow ins Wohnzimmer vor den Kamin ziehen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bevor Albert die Hütte noch einmal&nbsp;verlässt, sagst du zu ihm:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Albert! Danke. Mein Name ist …&nbsp;<em>Ella</em>.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert lächelt dir zu, pfeift Snow zu sich und verlässt die Hütte. Du machst es dir in Alberts Zimmer gemütlich. Die letzten Tage haben dich sehr mitgenommen und dein Kopf macht dir immer noch zu schaffen.</p>"
      }
     ],
     "next": [
      {
       "title": "Hinlegen",
       "chapterId": "1",
       "sectionId": "018"
      },
      {
       "title": "Zimmer durchsuchen",
       "chapterId": "1",
       "sectionId": "019"
      }
     ]
    },
    {
     "id": "018",
     "title": "Hinlegen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du dich ins Bett legst und deinen Kopf zur Seite drehst, um die Augen zu schließen, fallen dir&nbsp;flüchtig die Bilder auf Alberts Nachtisch auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf einem siehst du eine junge Frau und Albert an einem winterlichen See. Im Hintergrund ist ein Städtchen, umgeben von Bergen. »Ob das <em>Snow Peaks</em>&nbsp;ist?«, denkst du dir. Die beiden wirken sehr glücklich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es macht den Anschein, dass sich Albert komplett aus dem Stadtleben zurückgezogen hat, er hat sich äußerlich sehr verändert. Der volle Bart. Sein Blick. Sehr viel ernster und eine dir bisher noch unbeschreibliche Traurigkeit in seinen Augen. Die Aufnahmen scheinen etwas älter zu sein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf einem anderen Bild ist Snow als Welpe zu sehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schließt deine Augen. Draußen tobt weiterhin ein eisiger Schneesturm.</p>"
      }
     ],
     "next": [
      {
       "title": "Einige Tage später",
       "chapterId": "1",
       "sectionId": "020"
      }
     ]
    },
    {
     "id": "019",
     "title": "Zimmer durchsuchen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Leise und vorsichtig öffnest du eine Schublade nach der anderen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben einigen winterfesten Kleidungsstücken, wie Pullover, Hosen, Schals, Hand- und Winterschuhen findest du auch Frauenkleidung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du wirst kurz nervös.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ist Albert die Person, für welche er sich ausgibt?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du suchst weiter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du Alberts Nachttisch betrachtest, findest du einen Ring und ein Bild. Er ist darauf zu sehen, zusammen mit einer jungen Frau. Die beiden wirken sehr glücklich. Im Hintergrund ist ein Städtchen, umgeben von Bergen. »Ob das <em>Snow Peaks</em> ist?«, denkst du dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es macht den Anschein, dass sich Albert komplett aus dem Stadtleben zurückgezogen hat, er hat sich äußerlich sehr verändert. Der volle Bart. Sein Blick. Sehr viel ernster und eine dir bisher noch unbeschreibliche Traurigkeit in seinen Augen. Die Aufnahmen scheinen etwas älter zu sein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf einem anderen Bild ist Snow als Welpe zu sehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schließt beruhigt die Nachttischschublade und setzt dich in den Schaukelstuhl am Fenster. Draußen tobt ein eisiger Schneesturm.</p>"
      }
     ],
     "next": [
      {
       "title": "Einige Tage später",
       "chapterId": "1",
       "sectionId": "020"
      }
     ]
    },
    {
     "id": "020",
     "title": "Einige Tage später",
     "elements": [
      {
       "type": "style",
       "classes": "recording",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Drei Tage bin ich nun bei Albert und Snow. Ich will mir gar nicht ausmalen, was geschehen wäre, wenn die beiden mich nicht gefunden hätten. Ich hoffe, der Sturm legt sich bald, damit ich weiter meiner Spur nach Hannah in Snow Peaks folgen kann.«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Als du die Tonaufnahme mit dem Diktiergerät beendest, klopft es an der Tür. Albert kommt schnaufend und unruhig ins Zimmer. Du schaust ihn besorgt an. Er atmet tief durch und erzählt, dass ihm seit Tagen etwas sehr seltsam erscheint. Du schluckst und fragst, was er genau meint?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Er erzählt, dass es vor Tagen einen großen Stromausfall gegeben hat&nbsp;und er seitdem nichts mehr von seinem Kontakt aus <em>Snow Peaks</em>&nbsp;gehört hat. Auch Snow scheint etwas&nbsp;zu spüren. Als du ihm so zuhörst, gehen dir Gedanken der letzten Tage durch den Kopf. Du erinnerst dich an den ersten Tag, als du in <em>White Valley</em> ohne jegliche Erinnerung aufgewacht bist.</p>"
      }
     ],
     "next": [
      {
       "title": "Erinnerung an Tag 1",
       "chapterId": "1",
       "sectionId": "021"
      }
     ]
    },
    {
     "id": "021",
     "title": "Erinnerung an Tag 1",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du denkst an den ersten Tag zurück, als du plötzlich im Auto aufgewacht bist. Fassungslos, verstört und ohne einen Funken Erinnerung&nbsp;hattest du eine gefühlte Ewigkeit auf den&nbsp;leeren Beifahrersitz gestarrt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die dicken Schneeflocken haben sich auf&nbsp;die Autoscheiben gesetzt. Ohne jegliches Zeitgefühl hast du apathisch immer wieder in Schleife die Aufnahme des Tonbandes&nbsp;angehört, welches du in einer kleinen Tasche zusammen mit dem Diktiergerät, etwas Geld, einem Foto und ein paar anderen lebensnotwendigen Utensilien gefunden hast.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zitternd vor Kälte hast du den Motor gestartet und bist einfach losgefahren.</p>"
      }
     ],
     "next": [
      {
       "title": "Zurück in die Realität",
       "chapterId": "1",
       "sectionId": "022"
      }
     ]
    },
    {
     "id": "022",
     "title": "Zurück in die Realität",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Alles in Ordnung, Ella?«, fragt dich Albert und reißt dich aus deinen Gedanken. Du schaust ihn&nbsp;an und fragst, was hier vor sich geht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich bin mir nicht sicher, aber es spricht einiges dafür, dass sich etwas wiederholt, das vor 70&nbsp;Jahren begonnen hat und sich immer wieder erneut ereignet. Damals zu Beginn sind hunderte von Menschen spurlos verschwunden und nie wieder aufgetaucht, als eine Art Stern in <em>Snow Peaks</em>&nbsp;eingeschlagen ist. Die Einwohner sprechen vom sogenannten <em>Hollow White</em>«, antwortet Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei Alberts Worten fällt dir sofort eine Aufnahme auf deinem Tonbandgerät ein. Du spulst das Band etwas zurück und drückst auf die Abspieltaste.</p>"
      }
     ],
     "next": [
      {
       "title": "Ton­auf­nahme abspielen",
       "chapterId": "1",
       "sectionId": "023"
      }
     ]
    },
    {
     "id": "023",
     "title": "Tonaufnahme abspielen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Eine junge Kinderstimme eines Mädchens ist zu hören.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella, komm Ella&nbsp;…&nbsp;sing doch mit&nbsp;…</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Hollow White, ooh Hollow White, höre die Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit so fern. Der weiten Stille entrissen, gereist hierher. Kam nach Snow Peaks. Ooh Snow Peaks, ooh Snow Peaks …«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Die singende Stimme des Mädchens verschwindet und es ist nur noch Stille und Rauschen zu hören.</p>"
      }
     ],
     "next": [
      {
       "title": "Ton­auf­nahme beenden",
       "chapterId": "1",
       "sectionId": "024"
      }
     ]
    },
    {
     "id": "024",
     "title": "Tonaufnahme beenden",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ohne dass du es kontrollieren kannst, laufen dir dicke Tränen über die Wangen und du beginnst zu erzählen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich kann mich an nichts, wirklich gar nichts mehr erinnern. Ich bin plötzlich mit&nbsp;dem alten Auto im Nirgendwo in <em>White Valley</em>&nbsp;gestanden. Es war noch hell und hat geschneit. In meinen Armen&nbsp;diese Tasche, in welcher&nbsp;ich das Tonbandgerät, ein Foto und andere Sachen fand. Albert, ich weiß nicht einmal, wer ich bin! Ich habe mein Gedächtnis verloren. Meine einzige Spur zu meiner Person sind auf diesem Tonbandgerät und dem Foto.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ziehst etwas mühsam ein zerknittertes&nbsp;Bild&nbsp;aus der Hosentasche. Ein kleines Mädchen mit rötlichen Haaren, um die sieben&nbsp;Jahre alt, ist darauf&nbsp;zu sehen. Sie sitzt auf einem kleinen Steinfels.&nbsp;Als ihr das Foto betrachtet, drehst du dieses um und zeigst Albert die Rückseite. In kindlicher Schrift sind folgende Worte darauf geschrieben:</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Für Ella, ich habe Dich lieb.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Deine Hannah</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Albert reicht dir&nbsp;tröstend ein Taschentuch. Du wischst dir&nbsp;die Tränen aus deinen Augen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich bin einfach drauflos gefahren an diesem eisigen Tag, mit&nbsp;dieser quälenden Leere in mir. Ich muss sie unbedingt finden, Albert. Ich muss <em>Hannah</em>&nbsp;finden!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert schaut nachdenklich in die flackernden Flammen des Kamins und sagt, dass er verstehen&nbsp;kann, wie sich dieser Schmerz anfühlt. Er steht auf, atmet tief durch und geht zum Fenster.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir müssen schnell nach <em>Snow Peaks</em>&nbsp;und herausfinden, was hier vor sich geht«.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit einem Nicken stimmst du ihm zu.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Crash > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Bevor es losgeht, stehst du vor dem Badezimmerspiegel und betrachtest die Schnittwunde in deinem Gesicht. Es tut immer noch weh. Vorsichtig, machst du diese sauber, klebst ein Pflaster darauf und gehst nach draußen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Der Schneesturm hat sich mittlerweile gelegt und die Sonnenstrahlen glitzern auf dem eisigen Schneemantel von <em>White Valley</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert verstaut das Gepäck für die Reise auf der Ladefläche seines Trucks. Snow springt auf den Rücksitz und macht dir somit den Platz auf dem&nbsp;Beifahrersitz frei.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr verlasst zusammen die alte Holzhütte und beginnt euren gemeinsamen Weg nach <em>Snow Peaks</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 1",
       "chapterId": "1",
       "sectionId": "025"
      }
     ]
    },
    {
     "id": "025",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 2",
       "chapterId": "2",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "2",
   "title": "Der Weg nach Snow Peaks",
   "sections": [
    {
     "id": "001",
     "title": "»Ooh Snow Peaks, ooh Snow Peaks …«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Dicke Schneeflocken landen auf der Frontscheibe von Alberts Truck und werden vom Scheibenwischer weggeschoben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert schaltet das Autoradio an, aber auf allen Kanälen sind nur Rauschen und verzerrte Störsignale zu hören. Anscheinend sind sogar die Radiosender in der Gegend vom Stromausfall betroffen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich hoffe, es ist nichts Schlimmes geschehen«, sagt Albert mit besorgter Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Verunsichert schaust du ihn an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella, du musst wissen, <em>Snow Peaks</em>&nbsp;ist keine typische Kleinstadt. Seit dem <em>Hollow White</em>&nbsp;verschwinden immer wieder Einwohner auf unerklärliche Weise. Die Angst ist groß. Viele Menschen haben den Ursprungsort seither im Zentrum verlassen und sich an die äußeren Stadtgrenzen zurückgezogen. Aber selbst dort ist man nicht sicher. Einige Gebäude stehen leer und sind mit der Zeit verfallen. Es wirkt gespenstisch, wenn sich der Nebel tief in die nahezu verlassenen Straßen und Gassen legt. Die Stadt birgt viele Geheimnisse und Gefahren, aber ich habe das Gefühl, dass wir genau dort Antworten zu dir und Hannah&nbsp;finden.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Alberts Worte über <em>Snow Peaks</em>&nbsp;sind furchteinflößend, dennoch wecken sie auch Hoffnung&nbsp;in dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Zeit vergeht und du wirst auf einige Kassetten im Seitenfach aufmerksam. Neugierig stöberst du und findest einen noch verpackten Hundeknochen.</p>"
      }
     ],
     "next": [
      {
       "title": "Snow geben",
       "chapterId": "2",
       "sectionId": "002"
      },
      {
       "title": "Knochen zurücklegen",
       "chapterId": "2",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "002",
     "title": "Snow geben",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Freudig und mit dem Schwanz wedelnd verfolgt dich Snows Blick, als du die Verpackung des Hundeknochens aufreißt und ihm vorsichtig gibst. Albert lächelt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es knackt und knirscht.&nbsp;Snow kaut den harten Knochen. Anschließend legt er anhänglich und zufrieden seinen Kopf an die Seite deines Oberschenkels und döst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Er scheint dich zu mögen«, sagt Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit einem zufriedenen Lächeln im Gesicht&nbsp;streichst du Snow behutsam über sein weiches Fell. Ganz friedlich und vertraut geht sein Atem auf und ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist noch eine gute halbe Tagesreise nach <em>Snow Peaks</em>&nbsp;und ihr genießt die Musik von Alberts Mixtapes. Im Moment läuft passend zu eurem Roadtrip <em>»The Ride« von Lord Neon</em>.</p>"
      },
      {
       "type": "addItem",
       "id": "lordneon"
      },
      {
       "type": "paragraph",
       "text": "<p>Durch den Bass und den rhythmischen Synthesizer kommst du immer mehr ins Tagträumen. Die Zeit vergeht sehr viel schneller und angenehmer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einer kurzen Weile hält Albert den Truck an und bleibt an der Straßenseite stehen. Als du aussteigst, spürst du ein kribbelndes Gefühl, als würden hunderte von Ameisen deine Beine hochkrabbeln. Du musst dir erst einmal die Füße etwas vertreten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Snow springt nach dir aus der Beifahrertür und läuft direkt in den tiefen Schnee.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert steht bereits einige Meter vor euch an einem erhöhten Abhang mit einer alten Kamera.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Komm schon, Ella«, sagt er.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Kribbeln in deinen Beinen lässt nach. Mit lockerem Schritt näherst du dich ihm auf den kleinen Felsvorsprung. Es geht sehr tief nach unten, Albert nimmt dich am Arm.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schulter an Schulter erstreckt sich vor euch ein atemberaubender Ausblick. Der weitläufige wilde Fluss des <em>Ice Rivers</em>, der bis in die weit entfernten Gewässer des <em>Frozen Lakes</em>&nbsp;bei <em>Snow Peaks</em>&nbsp;fließt. Umschlossen von großen verschneiten Tannen in einer unbefleckten Landschaft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert macht ein Foto von dir. Als sich dieses aus der Kamera schiebt, bist du ganz aufgeregt. Gespannt schaust du auf das sich entwickelnde Ergebnis. Langsam zeichnen sich erste Konturen und Umrisse ab. Du bist überwältigt vom Ergebnis des Schwarz-Weiß-Bildes. Albert hat den Moment perfekt eingefangen.</p>"
      },
      {
       "type": "addItem",
       "id": "photo-ella"
      },
      {
       "type": "paragraph",
       "text": "<p>Snow wälzt sich immer noch verspielt im Schnee, als es langsam&nbsp;zurück zum Truck geht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr fahrt weiter, aber nach nur wenigen Minuten bleibt Albert erneut mit dem Fahrzeug stehen. Eine vor euch liegende Brücke hat sichtlich unter dem Schneesturm der letzten Tage gelitten. Sie ist der einzige Weg über den Fluss – nur noch ein kleines Stück bis nach <em>Snow Peaks</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Mit Auto überqueren",
       "chapterId": "2",
       "sectionId": "004"
      },
      {
       "title": "Zu Fuß überqueren",
       "chapterId": "2",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "003",
     "title": "Knochen zurücklegen",
     "elements": [
      {
       "type": "state",
       "id": "snow",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Snow schaut dich bettelnd an, aber du bist viel zu sehr mit deinen eigenen Gedanken beschäftigt und starrst auf die weiße Landschaft. Mit traurigem Blick legt er sich auf die Rückbank des Trucks und senkt seinen Kopf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einer Weile hält Albert den Truck an und zeigt auf den Ausblick des <em>Ice River</em>, der weitläufig in die Gewässer des <em>Frozen Lakes</em>&nbsp;fließt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine vor euch liegende Brücke hat sichtlich unter dem Schneesturm der letzten Tage gelitten. Sie ist der einzige Weg über den Fluss – nur noch ein kleines Stück bis nach <em>Snow Peaks</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Mit Auto überqueren",
       "chapterId": "2",
       "sectionId": "004"
      },
      {
       "title": "Zu Fuß überqueren",
       "chapterId": "2",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "004",
     "title": "Mit Auto überqueren",
     "elements": [
      {
       "type": "state",
       "id": "snow",
       "modifier": "-1"
      },
      {
       "type": "state",
       "id": "truck",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr gut die Hälfte der Brücke mit dem Auto passiert habt, reißt plötzlich eine Befestigung der Stahlträger und schwingt nur wenige Meter knapp an Alberts Truck vorbei. Ein großer Teil der Statik wird abgerissen – die Brücke beginnt sich zu neigen. Das Fahrzeug kommt ins Rutschen. Albert versucht zu bremsen, um das Schlimmste zu vermeiden, aber die glatte Eisfläche lässt euch keine Chance. Du erstarrst vor Schreck: Das Auto neigt&nbsp;sich an der Kante in die reißende Tiefe des <em>Ice Rivers</em>!</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es vergehen nur wenige Sekunden, bis das Auto mit der Stoßstange in den Fluss eintaucht. Ihr hört den Fluss unter euch durchrauschen und spürt wie er am Auto zerrt. Noch bevor ihr euch besinnen könnt, werdet ihr samt des Trucks von der Strömung mitgerissen.</p>"
      }
     ],
     "next": [
      {
       "title": "Im Wasser",
       "chapterId": "2",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "005",
     "title": "Zu Fuß überqueren",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als ihr gut über die Hälfte zu Fuß die Brücke passiert habt, reißt plötzlich eine Befestigung der Stahlträger und schwingt nur wenige Meter knapp an euch vorbei. Ein großer Teil des Fundamentes wird weggerissen und die Brücke beginnt sich zu neigen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du erstarrst vor Schreck! Einen Moment später verlieren deine Füße den Halt. Unsanft knallst du auf den Boden und beginnst zu rutschen. Voller Panik krallen sich deine Hände an den Asphalt – vergeblich. Statt Halt zu finden, spürst du bloß, wie dein Körper weiter rutscht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In letzter Sekunde packt dich Alberts fester Griff an deinem Handgelenk, der dich wieder nach oben hievt. Um Haaresbreite schafft ihr es auf die andere Seite.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Vollkommen außer Atem seht ihr, wie der größte Teil des Brücken-Mittelstücks weggebrochen ist und vom reißenden Fluss vertrieben wird. Es gibt keine Chance, auf die andere Seite der Brücke zurück zum Truck zu gelangen. Völlig starr steht ihr da, den Blick auf die zerstörte Brücke, als euch klar wird, dass ihr um Haaresbreite noch einmal davongekommen seid. Das Schmerzen deiner Finger holt dich in die Wirklichkeit zurück. Es wird kalt, ihr müsst weiter. Nachdem ihr alle weiteren Schritte abgewägt habt, entscheidet ihr euch, den Weg weiter entlang des Flussufers nach <em>Snow Peaks</em>&nbsp;zu nehmen.</p>"
      }
     ],
     "next": [
      {
       "title": "Wandern",
       "chapterId": "2",
       "sectionId": "008"
      }
     ]
    },
    {
     "id": "006",
     "title": "Im Wasser",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ein fast unwirklicher Moment, den du im Auto erlebst – geschützt und gefangen werdet ihr von der unberechenbaren Strömung des <em>Ice Rivers</em> mitgerissen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein mächtiger Schlag löst deine Schockstarre. Das Fahrzeug hat sich zwischen zwei großen Felsen verkantet. Wasser dringt an einigen Stellen langsam ein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Verzweifelt versuchst du, dich aus dem immer mehr sinkenden Truck zu befreien.</p>"
      }
     ],
     "next": [
      {
       "title": "Scheibe herunterrollen",
       "chapterId": "2",
       "sectionId": "007"
      },
      {
       "title": "Nach Albert & Snow sehen",
       "chapterId": "2",
       "sectionId": "009"
      }
     ]
    },
    {
     "id": "007",
     "title": "Scheibe herunterrollen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du rollst die Scheibe herunter und befreist dich aus der verhängnisvollen Falle. Vorsichtig steigst du über das Beifahrerfenster auf eine der massiven Felsbänke. Gleichzeitig haben sich Albert und Snow durch das Schiebedach auf das Dach des Trucks gerettet.&nbsp;Plötzlich neigt sich mit lauten Ächzen das Fahrzeug in das rauschende Gewässer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Truck wird mit einem mächtigen Schlag aus dem Halt der Felsbänke gerissen und von der wilden Strömung in die kalten Tiefen gesaugt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert springt im letzten Moment mit Snow mit einem großen Satz zu dir auf die Felsbank. Es ist rutschig.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Blitzschnell greifst du nach Alberts Ärmel und ziehst ihn mit voller Kraft zu dir. Nass, unterkühlt und unter Schock merkst du jetzt erst, wie stark dein Körper zittert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Da vorne, zu der Fischerhütte«, sagt Albert komplett außer Atem.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr brecht die Tür der Hütte auf und sucht nach einer Möglichkeit, euch schnell zu wärmen.</p>"
      }
     ],
     "next": [
      {
       "title": "Gegenseitig wärmen",
       "chapterId": "2",
       "sectionId": "011"
      },
      {
       "title": "Sich umsehen",
       "chapterId": "2",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "008",
     "title": "Wandern",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Zusammen wandert ihr entlang des Flussbettes. Snow läuft ein kleines Stück voraus. Nach einer Weile wird der wilde Fluss etwas ruhiger und ihr setzt euch auf einen umgefallenen Baumstamm, der leicht ins Wasser ragt, um kurz auszuruhen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ein Stückchen weiter gibt es eine Fischerhütte, wo wir über Nacht unser Lager aufschlagen können«, meint Albert, doch bevor er mit dem Satz fortfährt, läuft Snow wie vom Blitz getroffen bellend flussabwärts. Albert ruft noch hinterher, aber Snow hört nicht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eilig packt&nbsp;ihr alles ein und folgt Snow, doch er ist zu schnell und ihr verliert ihn aus dem Blick.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Leicht außer Atem bleibt ihr stehen, als sich vor euch der <em>Ice River</em>&nbsp;aufgabelt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr hört Snow in der Ferne bellen, könnt aber nicht einschätzen, woher es genau kommt. Es könnte, da der Fluss hier sehr viel seichter ist, auf der anderen Seite des Flusses von der Fischerhütte kommen oder weiter flussabwärts von der linken Flussgabelung.</p>"
      }
     ],
     "next": [
      {
       "title": "Flussabwärts",
       "chapterId": "2",
       "sectionId": "008b"
      },
      {
       "title": "Zur Fischerhütte",
       "chapterId": "2",
       "sectionId": "008c"
      }
     ]
    },
    {
     "id": "008b",
     "title": "Flussabwärts",
     "elements": [
      {
       "type": "state",
       "id": "snow",
       "modifier": "-1"
      },
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr schlagt den Weg flussabwärts ein. Der <em>Ice River</em>&nbsp;teilt sich an dieser Stelle und wird sehr viel reißender. Snows Bellen ist kaum noch zu hören und wird vom lauten Rauschen der Strömung überschattet. Du schaffst es kaum, mit Albert Schritt zu halten, als er plötzlich ruckartig vor dir stehen bleibt und dich hastig am Arm greift.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es geht viele Meter steil hinunter, vor euch erstreckt sich ein klaffender Wasserfall.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Vorsicht, Ella! Keinen Schritt weiter. Snow muss vorhin doch über den Fluss sein. Schnell zurück Richtung Fischerhütte«, sagt Albert außer Atem.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr lauft das Stück zurück, bis zu der Stelle, wo sich der <em>Ice River</em>&nbsp;gabelt. Der Fluss ist hier durch die seichten Tiefen und ruhigen Strömungen zu überqueren.</p>"
      }
     ],
     "next": [
      {
       "title": "Zur Fischerhütte",
       "chapterId": "2",
       "sectionId": "008c"
      }
     ]
    },
    {
     "id": "008c",
     "title": "Zur Fischerhütte",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Auf der anderen Seite seht ihr die Fischerhütte, von der Albert gesprochen hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr klettert über einige Felsbänke, um auf die andere Seite des Ufers zu gelangen. Die Steine sind sehr nass und rutschig. Vorsichtig überquert ihr Stein für Stein den reißenden Fluss. Kurz bevor ihr das Ufer erreicht, kommt Albert ins Rutschen. Du schaffst es gerade noch seine Hand zu greifen, doch sein Gewicht reißt ihn und dich bis zur Taille ins eiskalte Wasser.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Klamotten saugen sich schnell voll. Und der stechende Schmerz der Kälte beißt sich in die Haut. Mit voller Kraft stemmt ihr euch gegen die Strömung des <em>Ice Rivers</em>&nbsp;und schafft es Hand in Hand auf die andere Seite.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Am Ufer angekommen merkst du sofort, wie stark dein Körper zittert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella, schnell in die&nbsp;Fischerhütte!«, ruft Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr lauft in Windeseile zu der Hütte.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Tür ist verschlossen. Albert nimmt Anlauf und wirft sich mit aller Kraft dagegen und bricht diese mit einem lauten Knall auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schnell sucht ihr im Inneren der Hütte eine Möglichkeit, euch zu wärmen.</p>"
      }
     ],
     "next": [
      {
       "title": "Gegenseitig wärmen",
       "chapterId": "2",
       "sectionId": "011"
      },
      {
       "title": "Sich umsehen",
       "chapterId": "2",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "009",
     "title": "Nach Albert & Snow sehen",
     "elements": [
      {
       "type": "state",
       "id": "snow",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du kommst aus deiner Schockstarre wieder zu dir. Mit panischem Blick schaust du suchend nach Albert. Der Fahrersitz ist leer. Keine Spur von ihm und Snow. Plötzlich greift dich etwas an der Schulter und packt dich kräftig an deiner Jacke.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert der sich über das Schiebedach des Trucks mit Snow gerettet hat, reicht dir hektisch von oben seine Hand.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Truck neigt sich immer mehr in die reißenden Tiefen, als Albert dich hochzieht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein lauter Schlag ertönt und der Truck löst sich von den beiden Felsbänken. Im selben Augenblick wird das Fahrzeug von der gewaltigen Strömung wie ein Streichholz in die eiskalten Tiefen des <em>Ice Rivers</em>&nbsp;gesogen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Außer Atem liegt ihr auf einem der massiven Felsbrocken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kurz bevor der Truck in die Tiefen gerissen wurde, konntet ihr euch mit einem Sprung vom Dach des Fahrzeugs auf die umliegende Felsbank retten. Eure Klamotten haben sich teils mit Wasser vollgesaugt und erst jetzt merkst du, wie stark dein Körper zittert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Da vorne, zu der Fischerhütte!«, ruft Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr springt über die Felsbänke zum Ufer und erreicht die Hütte.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Tür ist verschlossen. Albert nimmt Anlauf und wirft sich mit aller Kraft dagegen und bricht diese mit einem lauten Knall auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schnell sucht ihr im Inneren der Hütte eine Möglichkeit euch zu wärmen.</p>"
      }
     ],
     "next": [
      {
       "title": "Gegenseitig wärmen",
       "chapterId": "2",
       "sectionId": "011"
      },
      {
       "title": "Sich umsehen",
       "chapterId": "2",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "010",
     "title": "Sich umsehen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die stickig alte, modrige Luft sticht dir sofort in die Nase. Es scheint schon lange niemand mehr hier drin gewesen zu sein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist unerträglich kalt und ihr seid bis auf die Knochen durchgefroren. Jede Sekunde zählt. Albert zieht hastig seine Jacke aus, streift sich den patschnassen Pullover über den Kopf und schlüpft aus der nassen Hose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schnell«, ruft er, »Zieh dich aus! In dem nassen Zeug erfrieren wir.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Erst zögerst du, aber da die Kälte unerträglich ist und dein Körper immer noch unkontrolliert zittert, trennst auch du dich von Jacke, Pullover und Hose. Nur noch in Unterwäsche stehst du da. Mittlerweile hat Albert ein paar Decken gefunden. Zwei wirft er dir zu. Ihr wickelt euch ein, um eure Körper aufzuwärmen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zitternd legst du dich auf eines der Feldbetten, die im Raum stehen. Geschwächt fallen dir die Augen zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du stehst auf einer Eisfläche eines zugefrorenen Sees. Es ist Nacht. In der Ferne hörst du Hannahs&nbsp;Stimme, die das Lied von <em>Snow Peaks</em>&nbsp;singt:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Hollow White, ooh Hollow White, höre die Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit so fern. Der weiten Stille entrissen, gereist hier her. Kam nach Snow Peaks. Ooh Snow Peaks, ooh Snow Peaks.«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Das Wasser des Sees färbt sich plötzlich rot und ein unerträgliches lautes Summen ertönt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein lauter Knall reißt dich aus deinem Traum.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zwei laute Schüsse fallen. Dein Blick sucht erschrocken nach Albert. Keine Spur von ihm.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein weiterer Schuss fällt in der Nähe der Hütte.</p>"
      }
     ],
     "next": [
      {
       "title": "Draußen umsehen",
       "chapterId": "2",
       "sectionId": "012"
      },
      {
       "title": "Hütte verriegeln",
       "chapterId": "2",
       "sectionId": "013"
      }
     ]
    },
    {
     "id": "011",
     "title": "Gegenseitig wärmen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich spürst du Alberts Hände. »Das muss runter«, sagt er. Zuerst reißt er dir die Jacke herunter. Erschrocken blickst du zu ihm, doch seine Arme greifen nach deinem Pullover. Einen Moment später hat er ihn dir über den Kopf gezogen. »Mach weiter, in dem nassen Zeug erfrieren wir«, ruft er. Nun beginnt er, sich selbst auszuziehen. Die Jacke. Den Pullover. Die Hose. Auch du schlüpfst aus deiner nassen Jeans.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dann kommt Albert auf dich zu mit einer dicken Wolldecke. »Nicht falsch verstehen«, sagt er und schließt dich in seine Arme. Eng drückt ihr euch aneinander, während er die Wolldecke um euch wickelt. Du merkst, wie das heftige Zittern nachlässt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Langsam wird es wärmer und schon lange hast du nicht mehr so eine Wärme und Geborgenheit gespürt. Ihr legt euch, immer noch zusammengerollt, auf ein altes Feldbett in der Hütte, um euch auszuruhen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Erschöpft fallen dir die Augen zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du stehst auf einer Eisfläche eines zugefrorenen Sees. Es ist Nacht. In der Ferne hörst du Hannahs Stimme, die das Lied von <em>Snow Peaks</em>&nbsp;singt:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Hollow White, ooh Hollow White, höre die Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit so fern. Der weiten Stille entrissen, gereist hier her. Kam nach Snow Peaks. Ooh Snow Peaks, ooh Snow Peaks.«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Das Wasser des Sees färbt sich plötzlich rot und ein unerträgliches lautes Summen ertönt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein lauter Knall reißt dich aus deinem Traum.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zwei laute Schüsse fallen. Deine Hand tastet nach Albert. Doch er liegt nicht neben dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein weiterer Schuss fällt in der Nähe der Hütte.</p>"
      }
     ],
     "next": [
      {
       "title": "Draußen umsehen",
       "chapterId": "2",
       "sectionId": "012"
      },
      {
       "title": "Hütte verriegeln",
       "chapterId": "2",
       "sectionId": "013"
      }
     ]
    },
    {
     "id": "012",
     "title": "Draußen umsehen",
     "elements": [
      {
       "type": "state",
       "id": "first-aid",
       "modifier": "+1"
      },
      {
       "type": "state",
       "id": "snow",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>In Eile durchstöberst du einen Schrank und eine alte Holztruhe und findest ein paar Kleidungsstücke. Hose und Pullover sind dir beide zu groß, doch du bist froh, wieder etwas Trockenes am Leib zu spüren. Neben der Kleidung liegt ein alter Verbandskasten.</p>"
      },
      {
       "type": "addItem",
       "id": "first-aid"
      },
      {
       "type": "paragraph",
       "text": "<p>Vorsichtig öffnest du die aufgebrochene Holztür&nbsp;der Hütte, welche sich nur noch durch ihr Gewicht leicht schließen lässt. Draußen weht dir direkt der kalte Schnee ins Gesicht. Als du dich umsiehst, fallen dir sofort Fußspuren und vereinzelte Blutflecken im Schnee auf, welche sich bis in die bereits dunklen Ecken des Waldes ziehen.</p>"
      }
     ],
     "next": [
      {
       "title": "Den Spuren folgen",
       "chapterId": "2",
       "sectionId": "014"
      },
      {
       "title": "Hütte verriegeln",
       "chapterId": "2",
       "sectionId": "013"
      }
     ]
    },
    {
     "id": "013",
     "title": "Hütte verriegeln",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit einem klapprigen Holzstuhl versuchst du, die Tür stärker zu verriegeln. Die Scharniere hat es am Türgriff regelrecht aus dem Rahmen gesprengt, als Albert diese zuvor aufgebrochen hat. Mühsam klemmst du die Stuhllehne zwischen den noch innen hängenden Türgriff, sodass sich die Füße am Boden verkeilen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich hörst du Schreie.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist Albert, der sich der Hütte nähert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella … Ella … Ella, lass mich rein!«, ruft er.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Stuhl klemmt. Eilig rüttelst du und reißt diesen wieder aus deiner Konstruktion.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert stößt mit einem Fuß die Tür auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Er steht komplett blutverschmiert vor dir und hält Snow in seinen Armen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schnell&nbsp;Ella!&nbsp;Hilf mir … Snow ist schwer verletzt!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Erschreckt starrst du die beiden an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Was ist passiert? Was ist mit Snow geschehen?«, fragst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert legt Snow vorsichtig auf den Boden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Siehst du die Bisse und Schnittwunden …, etwas hat ihn in den Wäldern angegriffen.«</p>"
      },
      {
       "type": "if",
       "condition": "ITEM First-aid",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Dir fällt sofort der Verbandskasten ein. Dein Körper zittert wie verrückt.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Instinktiv und ohne zu zögern beginnt ihr die Wunden und Schnitte bestmöglich zu verarzten, um die Blutungen zu stoppen.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "ITEM First-aid",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Du suchst die Hütte nach Verbandszeug ab. Dein Körper zittert wie verrückt, nur diesmal nicht vor Kälte. In der Eile findest du nur ein Stück alten Stoff, mit dem ihr Snow verarztet.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Wir müssen schleunigst nach <em>Snow Peaks</em>&nbsp;zu einem alten Bekannten. Er kann helfen«, sagt Albert mit besorgter Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Vorsichtig wickelt er Snow in eine Decke und ihr schaut euch um, um einen Weg nach <em>Snow Peaks</em>&nbsp;zu finden.</p>"
      }
     ],
     "next": [
      {
       "title": "Weg am Fluss entlang",
       "chapterId": "2",
       "sectionId": "018"
      },
      {
       "title": "Wald absuchen",
       "chapterId": "2",
       "sectionId": "019"
      }
     ]
    },
    {
     "id": "014",
     "title": "Den Spuren folgen",
     "elements": [
      {
       "type": "state",
       "id": "snow",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du folgst den Spuren und entfernst dich immer mehr von der Hütte. Es ist totenstill. Vereinzelt hörst du es Rascheln und wie der Schnee unter deinen Füßen knirscht. Immer wieder wandert dein Blick nach links und rechts. Es fühlt sich an, als würde dich etwas beobachten. Als du über einen umgefallenen Baumstamm steigst, rutschst du ab und landest im kalten Schnee. Vor dir bewegt sich etwas langsam aus der Dunkelheit in deine Richtung. Du siehst nur zwei leuchtende Augen, die auf dich gerichtet sind und sich nähern. Dir bleibt der Atem stehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein lauter Schuss. Schnee fällt von den Bäumen, mehrere Vögel schrecken auf und fliegen davon.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mehrere schnelle Schatten huschen an dir vorbei und flüchten in die Dunkelheit des Waldes.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert kommt dir mit schnellem Schritt entgegen. In seinen Armen trägt er einen verletzten, blutverschmierten Snow.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zurück in der Hütte angekommen, sieht es nicht gut aus für Snow. Krallen und Bisse haben tiefe Schnitte in seinem Fleisch hinterlassen.</p>"
      }
     ],
     "next": [
      {
       "title": "Snow verarzten",
       "chapterId": "2",
       "sectionId": "016"
      },
      {
       "title": "Albert verarztet Snow",
       "chapterId": "2",
       "sectionId": "017"
      }
     ]
    },
    {
     "id": "016",
     "title": "Snow verarzten",
     "elements": [
      {
       "type": "state",
       "id": "snow",
       "modifier": "+1"
      },
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "if",
       "condition": "ITEM First-aid",
       "elements": [
        {
         "type": "state",
         "id": "snow",
         "modifier": "+1"
        },
        {
         "type": "paragraph",
         "text": "<p>Dir fällt sofort der Verbandskasten ein. Hektisch reißt du den mit einem roten Kreuz gekennzeichneten Deckel ab. Darin befinden sich nun Alkohol, eine Schere, Wattetupfer und ausreichend Verbandmaterial.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Instinktiv und ohne zu zögern beginnst du die Wunden und Schnitte bestmöglich zu verarzten, um die Blutungen zu stoppen. Snow versucht mit letzten Kräften sich zu wehren, doch Albert hält ihn fest.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir müssen schleunigst nach <em>Snow Peaks</em>&nbsp;zu einem alten Bekannten. Er kann helfen«, sagt er mit besorgter Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bist fertig und Snow ist vorerst bestmöglich versorgt, dennoch dürft ihr keine Zeit verlieren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Vorsichtig wickelt Albert seinen treuen Begleiter in eine Decke und ihr verlasst die Hütte.</p>"
      }
     ],
     "next": [
      {
       "title": "Weg am Fluss entlang",
       "chapterId": "2",
       "sectionId": "018"
      },
      {
       "title": "Wald absuchen",
       "chapterId": "2",
       "sectionId": "019"
      }
     ]
    },
    {
     "id": "017",
     "title": "Albert verarztet Snow",
     "elements": [
      {
       "type": "state",
       "id": "snow",
       "modifier": "-1"
      },
      {
       "type": "if",
       "condition": "ITEM First-aid",
       "elements": [
        {
         "type": "state",
         "id": "snow",
         "modifier": "+1"
        },
        {
         "type": "paragraph",
         "text": "<p>Dir fällt sofort der Verbandskasten ein. Hektisch reißt du den mit einem roten Kreuz gekennzeichneten Deckel ab. Darin befinden sich nun Alkohol, eine Schere, Wattetupfer und ausreichend Verbandmaterial.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Albert gibt sein bestes und beginnt Snow zu verarzten, aber man spürt ihm die starke Anspannung und Nervosität an. Die Wunden und Schnitte sind vorerst ausreichend versorgt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Zeit läuft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Vorsichtig wickelt er Snow in eine Decke und ihr schaut euch um, um einen Weg nach <em>Snow Peaks</em>&nbsp;zu finden.</p>"
      }
     ],
     "next": [
      {
       "title": "Weg am Fluss entlang",
       "chapterId": "2",
       "sectionId": "018"
      },
      {
       "title": "Wald absuchen",
       "chapterId": "2",
       "sectionId": "019"
      }
     ]
    },
    {
     "id": "018",
     "title": "Weg am Fluss entlang",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ein kleines Stück, nicht weit von der Hütte entfernt, findet ihr ein kleines Fischerboot. Wackelig legt Albert Snow vorsichtig hinein und stößt euch mit einem der Paddel vom Ufer ab. Die Strömung des <em>Ice Rivers</em> bringt euch weiter flussabwärts Richtung <em>Snow Peaks</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Alberts Aufmerksamkeit ist auf den Fluss und Snow gerichtet.</p>"
      }
     ],
     "next": [
      {
       "title": "Mit Albert sprechen",
       "chapterId": "2",
       "sectionId": "020"
      },
      {
       "title": "Albert nicht stören",
       "chapterId": "2",
       "sectionId": "021"
      }
     ]
    },
    {
     "id": "019",
     "title": "Wald absuchen",
     "elements": [
      {
       "type": "state",
       "id": "snow",
       "modifier": "-1"
      },
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr stapft durch den Schnee immer weiter bergauf und immer tiefer in den Wald. Aber&nbsp;weit und breit nichts zu sehen. Nach einer Stunde müsst ihr euch eingestehen, dass ihr nur wertvolle Zeit verloren habt. Und Snows Zustand verschlechtert sich weiter. Als ihr weiter unten wieder am Fluss ankommt, habt ihr dennoch Glück und findet ein kleines Fischerboot.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wackelig legt Albert Snow vorsichtig hinein und stößt euch mit einem der Paddel vom Ufer ab. Die Strömung des <em>Ice Rivers</em> bringt euch weiter flussabwärts Richtung <em>Snow Peaks</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Alberts Aufmerksamkeit ist auf den Fluss und Snow gerichtet.</p>"
      }
     ],
     "next": [
      {
       "title": "Mit Albert sprechen",
       "chapterId": "2",
       "sectionId": "020"
      },
      {
       "title": "Albert nicht stören",
       "chapterId": "2",
       "sectionId": "021"
      }
     ]
    },
    {
     "id": "020",
     "title": "Mit Albert sprechen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du kannst nicht glauben, wie knapp ihr heute mit dem Leben davongekommen seid.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst behutsam Alberts Hand.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Albert, Snow ist stark. Er wird es schaffen! Ich glaube fest daran.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert schaut dich für einen kurzen Moment mit einem erleichterten Blick an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich muss ununterbrochen daran denken, wie es war, als ich Snow damals gefunden habe. Er war noch ein Welpe, unterernährt und schwach im Schnee gelegen. Die Chancen standen schlecht um ihn, aber er hat es geschafft. Er wird es wieder schaffen! Aber&nbsp;dennoch habe ich Angst. Angst, auch noch ihn zu verlieren …«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schmiegst dich an Albert und schenkst ihm etwas Ruhe.&nbsp;Die Reise in dem kleinen Fischerboot geht weiter flussabwärts.</p>"
      }
     ],
     "next": [
      {
       "title": "Bei Mitgefühl bleiben",
       "chapterId": "2",
       "sectionId": "023"
      },
      {
       "title": "Die Frau auf dem Bild?",
       "chapterId": "2",
       "sectionId": "022"
      }
     ]
    },
    {
     "id": "021",
     "title": "Albert nicht stören",
     "elements": [
      {
       "type": "state",
       "id": "snow",
       "modifier": "-1"
      },
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du sagst kein Wort. In deinem Kopf herrschen wilde Gedanken. Was ist hier los? Dich überkommt die Angst, Tränen rollen über deine Wangen, du versuchst sie zu verstecken, machst dir Mut, atmest tief durch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schweigend geht es den Fluss abwärts, bis ihr mit dem Boot an einer kleinen Anlegestelle anlegt. Albert hebt Snow vorsichtig aus dem Boot und trägt ihn. Ab hier geht es ein Stück zu Fuß bergauf weiter. Ihr stapft durch den tiefen Schnee. Du kannst nur schwer Schritt halten. Oben angekommen, zeigt Albert auf die Lichter einer im Schnee halb versunkenen Stadt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir sind da – <em>Snow Peaks</em>.«</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 2",
       "chapterId": "2",
       "sectionId": "024"
      }
     ]
    },
    {
     "id": "022",
     "title": "Die Frau auf dem Bild?",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Vielleicht nicht der beste Moment, aber du fragst nach der Frau auf dem Bild in Alberts Hütte.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das auf dem Bild am <em>Frozen Lake</em> ist meine Frau <em>Judy</em>. Wir waren oft dort und haben viel Zeit verbracht. Einer der schönsten Plätze in <em>Snow Peaks</em>«, sagt Albert und schaut dich mit Trauer erfülltem Blick an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy&nbsp;…&nbsp;ich habe sie vor einigen Jahren verloren …«, sagt er mit schwerer Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schluckst, »… Albert … ich wusste ja nicht … tut mir sehr leid&nbsp;…«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Snow winselt in dem Moment laut auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert beugt sich zu ihm, »Alles wird gut, alter Freund, wir sind bald da.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bereust es etwas, dass du ihn in dieser unpassenden Situation gefragt hast.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr treibt weiter flussabwärts und erreicht schließlich eine kleine Anlegestelle. Albert hebt Snow vorsichtig aus dem Boot und trägt ihn. Ab hier geht es ein Stück zu Fuß bergauf weiter. Ihr stapft durch den tiefen Schnee. Die Sonne geht bereits unter. Oben angekommen, zeigt Albert auf die Lichter einer im Schnee halb versunkenen Stadt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir sind da – <em>Snow Peaks</em>.«</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 2",
       "chapterId": "2",
       "sectionId": "024"
      }
     ]
    },
    {
     "id": "023",
     "title": "Bei Mitgefühl bleiben",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du legst deine Hand neben Alberts und spürst Snows langsamen und schweren Atem.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Halte durch, alter Freund«, sagt Albert mit sanfter Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr&nbsp;treibt weiter flussabwärts&nbsp;und erreicht&nbsp;schließlich eine kleine Anlegestelle. Albert hebt Snow vorsichtig aus dem Boot und trägt ihn. Ab hier geht es ein Stück zu Fuß bergauf weiter. Ihr stapft durch den tiefen Schnee. Die Sonne geht bereits unter. Oben angekommen, zeigt Albert auf die Lichter einer im Schnee halb versunkenen Stadt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Willkommen in <em>Snow Peaks</em>.«</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 2",
       "chapterId": "2",
       "sectionId": "024"
      }
     ]
    },
    {
     "id": "024",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><a class=\"skip-link\" href=\"javascript:document.documentElement.scrollTo({ top: 100000, behavior: 'smooth' })\">Überspringen</a></p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 2: Der Weg nach Snow Peaks</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine spannungsgeladene Reise beginnt, in welcher Ella, Albert und Snow ums nackte Überleben in der eisigen und gefährlichen Landschaft von White Valley kämpfen. Snow wird dabei stark verletzt.</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 3",
       "chapterId": "3",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "3",
   "title": "Der Hollow White",
   "sections": [
    {
     "id": "001",
     "title": "Etwas außerhalb von Snow Peaks",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Es ist bereits dunkel geworden. Ihr betretet den Vorgarten eines noch etwas außerhalb liegenden Anwesens.&nbsp;An der großen Haustür befindet sich ein Ring zum Klopfen in Form eines Löwens.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hektisch&nbsp;klopft Albert dreimal.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es dauert etwas, bis eine ältere Dame die massive Tür einen kleinen Spalt öffnet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es ist spät! Wer ist da und was&nbsp;wollen Sie?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»<em>Marie</em>, ich bin es … Albert.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es dauert einen kurzen Moment, der euch dennoch wie eine Ewigkeit vorkommt. Die schwere Tür geht auf. Neben Marie steht ein alter Mann mit grauen Haaren, dicker Hornbrille und einem aus Eschenholz geschnitzten Krückstock vor euch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Albert! Junge! Was ist passiert? Was ist mit Snow?«</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tick Tack Tick Tack Ti…</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Wie hypnotisiert sitzt du umgeben von Kerzenlicht in einem elegant antik geschmückten Wohnzimmer und starrst auf das Pendel einer tickenden Standuhr. Dick eingewickelt in Decken spürst du langsam wieder die Wärme durch deinen Körper fließen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Marie kommt rein und serviert dir einen heißen Tee.&nbsp;Dankend nimmst du einen kleinen Schluck. Der Geschmack und Duft von Kräutern, Zimt und etwas Ingwer strömt durch deine Sinne.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du setzt die Tasse ab und beobachtest weiter das Pendel der Standuhr. Als würde die Zeit langsamer schlagen, kommt es dir vor.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der ältere Mann und Albert treten aus einem Nebenzimmer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Er ist bald wieder auf den Beinen«, sagt der Mann und klopft Albert&nbsp;leicht auf die Schulter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Danke <em>Frank</em>, ihr seid unsere Rettung!«, sagt Albert erleichtert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Frank legt den Krückstock zur Seite und setzt sich langsam in seinen Sessel. Er stopft seine Pfeife, zündet diese an und pustet einen kräftigen Rauchring ins Kerzenlicht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Albert, mein Junge, wo hast du die letzten Jahre nur gesteckt? Wir haben uns große Sorgen gemacht und wer ist deine Begleitung?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdem ihr euch gegenseitig flüchtig vorgestellt habt, bittet Albert dich und Marie, mit Frank unter vier Augen sprechen zu können.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Crash > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Lass mich noch die Wunde von Ella&nbsp;ansehen«, unterbricht Frank.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Vorsichtig nimmt er dir das Pflaster ab. Mit etwas Watte und Alkohol tupft er die Wunde ab und macht diese sauber.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Ein ganz schön tiefer Schnitt. Ein Stück weiter unten und … Ella, Sie haben sehr viel Glück gehabt! Gut verheilt, aber die Narbe werden sie ihr Leben lang mit sich tragen.«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Frank gibt dir noch etwas Salbe und setzt sich zurück zu Albert.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du bedankst dich und verlässt den Raum.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Nach Snow sehen",
       "chapterId": "3",
       "sectionId": "002"
      },
      {
       "title": "Zu Marie gehen",
       "chapterId": "3",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "002",
     "title": "Nach Snow sehen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du öffnest leise die Tür und betrittst den Raum, aus dem Frank und Albert vorhin gekommen sind. Ein starker Kontrast zum antiken Wohnzimmer, das direkt mit diesem verbunden ist. Der sterile Raum, der zum Großteil mit glatten Kacheln und einem hochwertigen Kunststoffboden ausgelegt ist, gleicht einem Operationsraum einer Arztpraxis. Einige Geräte, Lichter an den Decken, Aufbewahrungsboxen, anatomischen Bilder an den Wänden und diverse Instrumente, wie Scheren, Skalpelle und Schläuche, stechen dir sofort ins Auge, obwohl das Licht durch die Kerzen sehr gedämmt ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Snow liegt in der Mitte des Raumes betäubt unter dem OP-Tisch auf einer Decke. Du gehst zu ihm, bückst dich und streichst behutsam über sein weißes Fell. Seine Atmung ist langsam und schwer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Tapferer Junge«, sagt Marie, die in dem Moment den Operationsraum hinter dir betritt und leise die Tür schließt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wie die Zeit vergeht, ich erinnere mich noch, als Albert den kleinen Kerl das erste Mal zu uns gebracht hat. Der Kleine war schwach. Aber&nbsp;er hat es geschafft. Frank konnte ihm schon einmal das Leben retten.«</p>"
      }
     ],
     "next": [
      {
       "title": "Nach Stromausfall fragen",
       "chapterId": "3",
       "sectionId": "004"
      },
      {
       "title": "Nach Frank fragen",
       "chapterId": "3",
       "sectionId": "004b"
      }
     ]
    },
    {
     "id": "003",
     "title": "Zu Marie gehen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>In der Küche sitzt Marie an einem kleinen Esstisch und liest in einer Zeitung. Eine kleine Kerze brennt und beleuchtet den Raum.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella, bitte setzen Sie sich doch und leisten mir Gesellschaft. Die beiden haben sich nach den Jahren bestimmt einiges zu erzählen. Seit Frank im Ruhestand und die Praxis geschlossen ist, haben wir nicht oft Besuch hier draußen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der alte Holzstuhl gibt ein lautes Geräusch von sich, als du diesen zu dir ziehst und dich hinsetzt.</p>"
      }
     ],
     "next": [
      {
       "title": "Nach Stromausfall fragen",
       "chapterId": "3",
       "sectionId": "004"
      },
      {
       "title": "Nach Frank fragen",
       "chapterId": "3",
       "sectionId": "004b"
      }
     ]
    },
    {
     "id": "004",
     "title": "Nach Stromausfall fragen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Der heftige Schneesturm hat einige Außengebiete und auch kurzzeitig <em>Snow Peaks</em>&nbsp;komplett vom Stromnetz abgeschnitten. Zum Glück hatten wir noch einige Kerzen und Vorräte im Keller und unser Kachelofen hat uns die Zeit lang warm gehalten. Aber hoffentlich ist der Strom bald wieder zurück, auch wenn mir das gemütliche Kerzenlicht sehr gefällt. Es ist nicht das erste Mal, dass wir hier draußen vom Stromnetz abgeschnitten sind.«</p>"
      }
     ],
     "next": [
      {
       "title": "Die erste Nacht in Snow Peak",
       "chapterId": "3",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "004b",
     "title": "Nach Frank fragen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Frank und Albert kennen sich schon sehr lange. Albert hat uns damals viel bei der Renovierung unseres Anwesens geholfen. Und wie Männer so sind, haben die beiden viel Zeit beim Angeln am <em>Ice River</em>&nbsp;zusammen verbracht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aber es gab nichts, was die beiden mehr beschäftigt hat, als die Geschichte von <em>Snow Peaks</em>&nbsp;und dem <em>Hollow White</em> Ereignis. Der Tag, an dem ein Planet, eine Art Stern&nbsp;hier eingeschlagen ist und mehr als hunderte von Menschen spurlos verschwunden sind. Unvorstellbar, dass es das Fleckchen hier noch gibt. So ein Naturphänomen gab es noch nie in der Geschichte der Menschheit. Sie&nbsp;müssen sich unbedingt die Gedenkstätte im Zentrum ansehen.«</p>"
      }
     ],
     "next": [
      {
       "title": "Die erste Nacht in Snow Peak",
       "chapterId": "3",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "005",
     "title": "Die erste Nacht in Snow Peaks",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die Zeit vergeht und Marie erzählt dir über das Leben in <em>Snow Peaks</em>, von ihrem Leben außerhalb der Stadt und den aktuellen lokalen Nachrichten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Komplett erschöpft, aber erleichtert hörst du ihrer beruhigenden Stimme einfach nur zu und hältst dich mit Mühe wach. Ihre Art strahlt etwas sehr Vertrautes und friedliches aus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Standuhr im Wohnzimmer schlägt Mitternacht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Oh, ich habe ganz die Zeit vergessen. Ich hoffe, ich habe Sie nicht zu sehr mit meinen Geschichten ermüdet. Sie müssen sehr müde sein. Ich bringe Sie auf Ihr Zimmer. Sie und Albert können die nächsten Tage bei uns bleiben. Seien Sie unser Gast.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust dankend zu Marie, die dich zu deinem Gästezimmer im ersten Stock begleitet. Die Treppe knarzt unter euren Füßen. Oben angekommen betrittst du den mit Holz verkleideten gemütlichen Raum. Eine Kerze steht auf dem Nachtschrank. Marie wünscht dir eine gute&nbsp;Nacht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit letzten Kräften legst du deine Kleidung ab, machst dich im Badezimmer fertig und wirfst dich ins weiche Bett. Du pustest noch schnell die Kerze aus und schläfst sofort ein.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Hollow White, ooh Hollow White, höre die Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit so fern. Der weiten Stille entrissen, gereist hier her. Kam nach Snow Peaks. Ooh Snow Peaks, ooh Snow Peaks.«</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Am nächsten Tag",
       "chapterId": "3",
       "sectionId": "005b"
      }
     ]
    },
    {
     "id": "005b",
     "title": "Am nächsten Tag",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du am nächsten Morgen aufwachst, weckt dich das grelle Tageslicht, das hell in das Zimmer durch das Fenster strahlt. Es scheint schon später Vormittag zu sein. Den Schlaf hast du gebraucht und seit Langem nicht mehr so tief und fest geschlafen. Du machst dich in dem kleinen Badezimmer nebenan fertig und ziehst dir frische Kleidung, welche Marie dir hingelegt hat, an. Ein weißer warmer Pullover, eine wärmere Schneehose und feste Schuhe. Die Sachen wirken neben einem dazu passenden Mantel sehr elegant und passen dir wie angegossen, lassen dich aber auch etwas älter aussehen.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "state",
         "id": "karma",
         "modifier": "-3"
        },
        {
         "type": "paragraph",
         "text": "<p>Es herrscht Totenstille in dem großen Anwesen, welche durch die knarzende Treppe, die du nach unten gehst, gebrochen wird. Du betrittst die Küche von Marie und Frank.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Frank steht mit verlorenem Blick vor dem Fenster und starrt in die weiße unendliche Landschaft. Im Hintergrund hörst du die schweren Schläge der Standuhr.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Er bemerkt dich und dreht sich langsam zu dir.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Ella«, es fällt ihm sichtlich schwer, die Worte hervorzubringen, »Snow hat die Nacht nicht überstanden«. Seine Stimme ist schwerfällig und voller Trauer.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du bist schockiert und kannst es anfänglich gar nicht begreifen. Erinnerungen aus den letzten Tagen steigen in dir auf. Auf einmal fährt es dir wie ein Schlag durch deine Gedanken. Hättet ihr seinen Tod verhindern können?</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Albert ist neben sich und recht früh in die Stadt&nbsp;gefahren. Er kommt später wieder zurück, aber er braucht jetzt Zeit«, sagt Frank.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du hörst, wie das Wetter durch ein kleines Küchenradio im Hintergrund durchgesagt wird.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Schnee, liebe Leute. Viel Schnee, zieht euch warm an!«, tönt es durch den Lautsprecher.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Zumindest ist der Strom endlich seit heute früh wieder da«, sagt Frank und versucht von dem Thema Snow etwas abzukommen.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "state",
         "id": "karma",
         "modifier": "+3"
        },
        {
         "type": "paragraph",
         "text": "<p>Als du die Treppe nach unten gehst und die Küche betrittst, begrüßt dich Snow freudig mit Gebelle. Er liegt auf einer flauschigen Decke und trägt eine Halskrause zum Schutz um seinen Kopf, damit er sich nicht die Wunden leckt und die Nähte aufgehen. Du kraulst ihn vorsichtig am Kopf. Ganz treu sieht er dich an.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Frank betritt die Küche und setzt seine Brille auf.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Guten Morgen, Ella. Gut geschlafen? Wie geht es Ihnen? Unser Snow hat das schlimmste überstanden. Uns fällt allen ein großer Stein vom Herzen. Albert ist bereits in die Stadt gefahren, um etwas zu erledigen, er sollte in ein paar Stunden zurück sein. Mit euch scheint auch der Strom wieder gekommen sein.«</p>"
        },
        {
         "type": "addItem",
         "id": "snow-lebt"
        },
        {
         "type": "paragraph",
         "text": "<p>Du hörst, wie das Wetter durch ein kleines Küchenradio durchgesagt wird.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Schnee, liebe Leute von <em>Snow Peaks</em>. Viel Schnee, zieht euch warm an!«, tönt es durch den Lautsprecher.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Kaffee",
       "chapterId": "3",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "006",
     "title": "Kaffee",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Du setzt dich fassungslos und traurig auf den etwas klapprigen Holzstuhl in der Küche. Dir gehen die letzten Tage durch den Kopf. Wie oft seid ihr mit dem Leben davon gekommen in der erbarmungslosen Landschaft von <em>White Valley</em> und doch musste nun Snow mit seinem Leben bezahlen. Hättet ihr sein Leben retten können, wenn ihr anders gehandelt hättet? Diese Frage quält dich am meisten.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Marie stellt dir eine heiße Tasse frischen Kaffee auf den Tisch.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Der feine Duft von gerösteten Bohnen lässt dich alles um dich herum vergessen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Milch und Zucker?«, fragt Marie.</p>"
      }
     ],
     "next": [
      {
       "title": "Schwarzer Kaffee",
       "chapterId": "3",
       "sectionId": "007"
      },
      {
       "title": "Milch und Zucker",
       "chapterId": "3",
       "sectionId": "008"
      }
     ]
    },
    {
     "id": "007",
     "title": "Schwarzer Kaffee",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du nimmst einen großen Schluck schwarzen Kaffee.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dir fehlt jegliche Erinnerung, wann du das letzte Mal einen so guten Kaffee hattest.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust zu Marie und sagst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Verd…«</p>"
      },
      {
       "type": "addItem",
       "id": "coffee"
      },
      {
       "type": "paragraph",
       "text": "<p>In dem Moment legt Frank die Zeitung zur Seite und unterbricht dich unabsichtlich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella, Sie und Albert haben die letzten Tage ganz schön was durchgemacht! Aber entschuldigen Sie, ich wollte Ihnen nicht ins Wort fallen …«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Marie, der Kaffee ist wunderbar«, sagst du mit einem Lächeln.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Frank setzt seinen Satz fort.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Albert hat uns von Ihrer Odyssee hierher erzählt. Wir sind sehr erleichtert, dass Sie es zu uns geschafft haben. <em>White Valley</em>&nbsp;mit seiner eisigen Kälte hat schon einige den letzten Atemzug gekostet.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ich kann nicht fassen, was Snow passiert ist. Was zieht&nbsp;Sie in diese gefährliche und tödliche Gegend?«</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Was zieht Sie&nbsp;in diese Gegend?«</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Von Hannah erzählen",
       "chapterId": "3",
       "sectionId": "009"
      },
      {
       "title": "Hannah verschweigen",
       "chapterId": "3",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "008",
     "title": "Milch und Zucker",
     "elements": [
      {
       "type": "if",
       "condition": "STATE Truck < 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Aus einer kleinen Kanne schüttest du etwas Milch in deinen Kaffee. Kurz musst du an den Moment denken, wie Alberts Truck in die Tiefen des <em>Ice Rivers</em>&nbsp;gerissen wurde, als du in der Tasse siehst, wie sich der Kaffee wie ein kleiner Strudel mit der Milch vermischt.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst zwei Würfelzucker und gibst diese vorsichtig in die Tasse und rührst mit einem kleinen Silberlöffel um.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Frank legt die Zeitung zur Seite.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella,&nbsp;Sie und Albert haben die letzten Tage ganz schön was durchgemacht. Er hat uns von Ihrer Odyssee hierher erzählt. Wir sind sehr froh, dass Sie es zu uns geschafft haben. <em>White Valley</em>&nbsp;mit seiner eisigen Kälte hat schon einige den letzten Atemzug gekostet.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ich kann nicht fassen, was Snow passiert ist.&nbsp;Was zieht Sie in diese gefährliche und tödliche Gegend?«</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Was zieht Sie&nbsp;in diese Gegend?«</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Von Hannah erzählen",
       "chapterId": "3",
       "sectionId": "009"
      },
      {
       "title": "Hannah verschweigen",
       "chapterId": "3",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "009",
     "title": "Von Hannah erzählen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du erzählst Marie und Frank von Hannah. Während du sprichst, kämpfst du immer wieder mit deinen Gefühlen und kannst die eine oder andere Träne nicht zurückhalten. Du schätzt es von ganzem Herzen, dass die beiden dir einfach nur mit viel Mitgefühl und Beistand zuhören.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Marie schaut dich an und nimmt behutsam deine Hände. »Ella, Kind, es tut uns unbeschreiblich leid, was Sie gerade durchstehen. Wir beten, dass es Ihrer kleinen Hannah gut geht und Sie sie finden.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Frank betrachtet das Tonbandgerät.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das Lied, welches Sie uns vorhin vorgespielt haben, das Lied stammt aus einem alten Reim. Der gefallene Stern ist der <em>Kalte Stern</em>&nbsp;an der Absturzstelle im Zentrum der Stadt. Es geht in den Zeilen um das Geschehnis des <em>Hollow White</em>. Sie sollten sich das unbedingt ansehen. Es ist nicht zu übersehen. Die Einwohner nennen diesen Bereich auch einfach die <em>Kuppel</em>, aufgrund des gewölbten Eingangsbereichs.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bedankst dich für die Hilfe und Gastfreundschaft bei Marie und Frank. Selten bist du so warmherzigen Menschen begegnet, wie den beiden. Marie gibt dir noch einige warme Kleidungsstücke mit. Als du umgezogen bist, machst du dich auf in das Städtchen.</p>"
      }
     ],
     "next": [
      {
       "title": "Willkommen in Snow Peaks",
       "chapterId": "3",
       "sectionId": "011"
      }
     ]
    },
    {
     "id": "010",
     "title": "Hannah verschweigen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du setzt vorsichtig die Tasse ab und schaust zu Frank.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das Städtchen <em>Snow Peaks</em>&nbsp;und dessen Geheimnisse«, sagst du und versuchst deine Suche nach Hannah zu verschweigen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Frank erwidert:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Dann sind Sie hier genau richtig! Besuchen Sie am besten als Erstes das Zentrum unseres idyllischen Städtchens. Der <em>Kalte Stern</em>&nbsp;im Zentrum ist ein unglaubliches Naturphänomen, was man gesehen haben muss. Die Einwohner nennen diesen Bereich auch einfach die <em>Kuppel</em>, aufgrund des gewölbten Eingangsbereichs.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bedankst dich für die Hilfe und Gastfreundschaft bei Marie und Frank. Marie gibt dir noch einige warme Kleidungsstücke mit. Als du umgezogen bist, machst du dich auf in das Städtchen.</p>"
      }
     ],
     "next": [
      {
       "title": "Willkommen in Snow Peaks",
       "chapterId": "3",
       "sectionId": "011"
      }
     ]
    },
    {
     "id": "011",
     "title": "Willkommen in Snow Peaks",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Willkommen in <em>Snow Peaks</em>«, liest du auf dem aus Holz geschnitzten Ortsschild und betrittst das halb im Schnee vergrabene Städtchen.</p>"
      },
      {
       "type": "addItem",
       "id": "snowpeaks"
      },
      {
       "type": "paragraph",
       "text": "<p>Menschen laufen auf den Straßen und Kinder spielen in den schneebedeckten Vorgärten. Alles macht einen ganz normalen Anschein. Nur dieses permanente Schneechaos ist unerklärlich. Einige höhere Häuser verschwinden direkt in einer Wolkenwand aus Schneenebel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdem du einige Straßen passiert hast, erreichst du einen etwas ruhigeren Teil der Stadt: einen kleinen Park. Das Laternenlicht, welches auch tags scheint, schimmert durch den dichten Fall der Schneeflocken. Du siehst vor dir etwas Schwarzes&nbsp;am Boden liegen. Ein toter Vogel.</p>"
      }
     ],
     "next": [
      {
       "title": "Vogel begraben",
       "chapterId": "3",
       "sectionId": "012"
      },
      {
       "title": "Vogel liegen lassen",
       "chapterId": "3",
       "sectionId": "013"
      }
     ]
    },
    {
     "id": "012",
     "title": "Vogel begraben",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit etwas Schnee begräbst du den schwarzen Vogel unter einem Baum und deckst dabei etwas auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine kleine silberne Münze. Ein Kopf ist auf der einen Seite darauf zu sehen und auf der Rückseite die Buchstaben H. W. in einem Hexagon.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du&nbsp;steckst die Münze ein.</p>"
      },
      {
       "type": "addItem",
       "id": "coin"
      },
      {
       "type": "state",
       "id": "coin",
       "modifier": "=1"
      },
      {
       "type": "paragraph",
       "text": "<p>Von dem erhöhten Hügel aus erblickst du die verschneite Landschaft um <em>Snow Peaks</em>.&nbsp;Ein fantastischer Ausblick auf den außerhalb liegenden <em>Frozen Lake</em>. Dir sticht sofort eine zentral liegende monumentale Anlage ins Auge, die aus der gewaltigen Nebelwand aus der Stadt ragt.&nbsp;Das muss die sogenannte <em>Kuppel</em> sein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>An einigen durch die schwere Schneelast umgefallenen Bäumen entlang, verlässt du den Park und gehst Richtung Stadtmitte.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Überall siehst du eingeschneite Fahrzeuge. Manche sind komplett mit Schnee bedeckt und wurden wahrscheinlich schon seit längerer Zeit nicht mehr genutzt oder sogar ausgegraben. Nur einige große Fahrzeuge zur Schneeräumung sind hier unterwegs und machen die Straßen und Wege frei. Einer der Fahrer winkt dir freundlich zu und schiebt mit der großen Schaufel seines Fahrzeuges eine Riesenmenge an Schnee zu einem Berg. Du winkst zurück und setzt deinen Fußmarsch fort.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du dem Stadtzentrum langsam näher kommst, betrachtest du die alten Gebäude in diesem Stadtteil, dessen Türen und Fenster zum Teil mit Holzbrettern zugenagelt sind. „Betreten verboten!“, wurde mit weißer Farbe darauf geschmiert. Viele der umliegenden Läden sind geschlossen und mit Metallgittern verriegelt. Die höheren Gebäude verschwinden bis in die tief liegenden Nebelwolken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nur sehr wenige Menschen sind hier und in den anliegenden Gassen unterwegs. Allein die Straßenlampen erzeugen einen angenehmen warmen Schein in dieser trüben Anmutung. Genau wie Albert es beschrieben hat. Gespenstisch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einem längeren Fußmarsch erreichst du endlich dein Ziel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Blick wird sofort von dem monumentalen Komplex&nbsp;im Zentrum der Stadt angezogen. Eine riesige Architektur, aus welcher, leicht schräg in der Ferne, die Spitze eines massiven Felsens in die Höhe ragt und im Schneenebel am Himmel verschwindet. Der komplette vordere Bereich am Eingang ist mit vielen großen Scheiben verkleidet und gleicht mit seiner Form als Ganzes, tatsächlich einer <em>Kuppel</em>. Einige massive Stahlträger ziehen sich bis in den oberen Bereich des Daches und stützen die Konstruktion. Das Glas ist komplett beschlagen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Einige Meter vor dem Eingang betrachtest du eine Tafel mit folgenden Zeilen:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>In Gedenken an die Verschwundenen des Hollow White</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Dir geht die Textzeile des Reims mit dem gefallenen Stern durch den Kopf.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»… ooh Hollow White, höre die Gesänge des fallenden Sterns … «</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Der Empfang am Einlass der <em>Kuppel</em>&nbsp;ist nicht besetzt.</p>"
      }
     ],
     "next": [
      {
       "title": "Kuppel betreten",
       "chapterId": "3",
       "sectionId": "014"
      },
      {
       "title": "Warten",
       "chapterId": "3",
       "sectionId": "015"
      }
     ]
    },
    {
     "id": "013",
     "title": "Vogel liegen lassen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du folgst weiter der lang gezogenen Straße Richtung Stadtmitte, die sich geradeaus durch das Städtchen zieht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Überall siehst du eingeschneite Fahrzeuge. Manche sind komplett mit Schnee bedeckt und wurden wahrscheinlich schon seit längerer Zeit nicht mehr genutzt oder sogar ausgegraben. Nur einige große Fahrzeuge zur Schneeräumung sind hier unterwegs und machen die Straßen und Wege frei. Einer der Fahrer winkt dir freundlich zu und schiebt mit der großen Schaufel seines Fahrzeuges eine Riesenmenge an Schnee zu einem Berg. Du winkst zurück und setzt deinen Fußmarsch fort.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du dem Stadtzentrum langsam näher kommst, betrachtest du die alten Gebäude in diesem Stadtteil, dessen Türen und Fenster zum Teil mit Holzbrettern zugenagelt sind. „Betreten verboten!“, wurde mit weißer Farbe darauf geschmiert. Viele der umliegenden Läden sind geschlossen und mit Metallgittern verriegelt. Die höheren Gebäude verschwinden bis in die tief liegenden Nebelwolken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nur sehr wenige Menschen sind hier und in den anliegenden Gassen unterwegs. Allein die Straßenlampen erzeugen einen angenehmen warmen Schein in dieser trüben Anmutung. Genau wie Albert es beschrieben hat. Gespenstisch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einem längeren Fußmarsch erreichst du endlich dein Ziel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Blick wird sofort von dem monumentalen Komplex im Zentrum der Stadt angezogen. Eine riesige Architektur, aus welcher, leicht schräg in der Ferne, die Spitze eines massiven Felsens in die Höhe ragt und im Schneenebel am Himmel verschwindet. Der komplette vordere Bereich am Eingang ist mit vielen großen Scheiben verkleidet und gleicht mit seiner Form als Ganzes, tatsächlich einer <em>Kuppel</em>. Einige massive Stahlträger ziehen sich bis in den oberen Bereich des Daches und stützen die Konstruktion. Das Glas ist komplett beschlagen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Einige Meter vor dem Eingang betrachtest du eine Tafel mit folgenden Zeilen:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>In Gedenken an die Verschwundenen des Hollow White</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Dir geht die Textzeile des Reims mit dem gefallenen Stern durch den Kopf.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»… ooh Hollow White, höre die Gesänge des fallenden Sterns … «</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Der Empfang am Einlass der <em>Kuppel</em> ist nicht besetzt.</p>"
      }
     ],
     "next": [
      {
       "title": "Kuppel betreten",
       "chapterId": "3",
       "sectionId": "014"
      },
      {
       "title": "Warten",
       "chapterId": "3",
       "sectionId": "015"
      }
     ]
    },
    {
     "id": "014",
     "title": "Kuppel betreten",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Jetzt erst wird dir noch einmal bewusst, wie leer gefegt die Straßen, Plätze und Geschäfte sind, die sich in unmittelbarer Nähe zur <em>Kuppel</em>&nbsp;befinden. Es ist fast schon unheimlich still und der kalte Schnee saust um deine Ohren. Am Empfang ist weit und breit niemand zu sehen. Es wird langsam kalt und du beschließt nicht zu warten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du steigst über die Absperrung und betrittst die <em>Kuppel</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Temperatur ist um einiges wärmer als draußen, es liegt kein Zentimeter Schnee.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Im&nbsp;Gegensatz&nbsp;zu draußen herrscht hier das pure Leben. Alles ist grün&nbsp;und sogar einige Vögel zwitschern von den beeindruckend hohen Ästen hinunter. Die Anlage ist riesig. Du läufst an kleineren bepflanzten Gärten vorbei. Der frische Duft von Kräutern, Obst und Blumen liegt in der Luft. Aus der Ferne siehst du einige Gärtner und Arbeiter, die sich um die Anlage kümmern. Es wirkt alles märchenhaft, fast schon paradiesisch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist so warm, dass du den Mantel, den dir Marie gegeben hat, ausziehst&nbsp;und um deinen Arm legst. Du läufst eine bewachsene Passage mit vielen hohen Bäumen und Sträuchern entlang, bis der untere Teil des <em>Kalten Sterns</em> vor dir emporragt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Von der Erde des Kraters umschlungen&nbsp;reicht das gigantische Gestein bis weit ins Geäst und darüber hinaus. Fasziniert läufst du im Kreis um das massive Naturschauwerk. Um den <em>Kalten Stern</em>&nbsp;hat sich Wasser zu einem kleinen See angesammelt. Du nimmst alles intensiv wahr, bis die Anwesenheit einer weiß gekleideten Dame dich aus deiner Faszination herausreißt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Guten Tag, Sie sind nicht von hier?«</p>"
      }
     ],
     "next": [
      {
       "title": "»Nein«",
       "chapterId": "3",
       "sectionId": "016"
      },
      {
       "title": "»Warum fragen Sie?«",
       "chapterId": "3",
       "sectionId": "017"
      }
     ]
    },
    {
     "id": "015",
     "title": "Warten",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du so wartest, gehen dir die Ereignisse an der Fischerhütte durch den Kopf. Die Bilder von Snow. Das Blut. Du kannst diese nur schwer loslassen.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Es ist furchtbar, was mit Snow passiert ist.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ihr habt in der entsprechenden Situation richtig gehandelt. Snow ist mit Riesenglück, mit dem Leben davongekommen.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Kuppel betreten",
       "chapterId": "3",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "016",
     "title": "»Nein«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die <em>Dame in Weiß</em>&nbsp;streicht sich etwas hektisch über ihre linke Wange. Der dunkelrote Lippenstift ist der einzige Farbakzent auf ihrer weißen Haut und ihren glatten, nach hinten gebundenen, weißen langen Haaren. Ihr Blick wandert direkt zu dir zurück und sie beginnt zu sprechen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Entschuldigen Sie die direkte Frage, aber ich arbeite hier und wir müssen alle Besucher am Empfang in unseren Büchern registrieren. Eine Sicherheitsvorschrift, wissen Sie. Und ein neues Gesicht fällt in <em>Snow Peaks</em>&nbsp;sofort auf.«</p>"
      }
     ],
     "next": [
      {
       "title": "»Neues Gesicht?«",
       "chapterId": "3",
       "sectionId": "018"
      },
      {
       "title": "»Sicherheits­vorschrift?«",
       "chapterId": "3",
       "sectionId": "019"
      }
     ]
    },
    {
     "id": "017",
     "title": "»Warum fragen Sie?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Deine direkte und etwas verwunderte Reaktion bringt die <em>Dame in Weiß</em> leicht, aber nur kurz in Verlegenheit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der dunkelrote Lippenstift ist der einzige Farbakzent auf ihrer weißen Haut und ihren glatten, nach hinten gebundenen weißen langen Haaren. Ihr Blick wandert etwas verunsichert direkt zu dir zurück und sie beginnt zu sprechen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Entschuldigen Sie die direkte Frage, aber ich arbeite hier und wir müssen alle Besucher am Empfang in unseren Büchern registrieren. Eine Sicherheitsvorschrift, wissen Sie. Und ein neues Gesicht fällt in <em>Snow Peaks</em>&nbsp;sofort auf.«</p>"
      }
     ],
     "next": [
      {
       "title": "»Neues Gesicht?«",
       "chapterId": "3",
       "sectionId": "018"
      },
      {
       "title": "»Sicherheits­vorschrift?«",
       "chapterId": "3",
       "sectionId": "019"
      }
     ]
    },
    {
     "id": "018",
     "title": "»Neues Gesicht?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Wissen Sie«, antwortet die Dame in Weiß, »wir haben recht selten Besucher hier in der <em>Kuppel</em>&nbsp;und es ist sehr ruhig. Neben unseren Mitarbeitern in den Gärten und zur Instandhaltung der Anlage haben wir nur wenige Gäste in der <em>Kuppel</em>. Vereinzelt einige Anwohner, die hier ihre Runden drehen. Die meisten jedoch meiden diesen Ort.«</p>"
      }
     ],
     "next": [
      {
       "title": "»Sicherheits­vorschrift?«",
       "chapterId": "3",
       "sectionId": "019"
      }
     ]
    },
    {
     "id": "019",
     "title": "»Sicherheitsvorschrift?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Als der <em>Kalte Stern</em> vor über 70 Jahren hier an diesem Ort eingeschlagen ist, sind viele Menschen in der Umgebung spurlos verschwunden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bis heute weiß man nicht, was mit ihnen passiert ist. Einige sprechen von der Apokalypse, andere von einer Art Phänomen, welches der <em>Kalte Stern</em>&nbsp;mit auf die Erde gebracht hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Unter uns, ein einzigartiges Naturphänomen des Universums, wenn Sie mich fragen. Ein Stern, der auf unsere Erde gefallen und erloschen ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dieses Ereignis wurde damals <em>Hollow White</em>&nbsp;genannt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In der Zwischenzeit gab es leider immer wieder einzelne Vorfälle des Verschwindens. Gerade die Bewohner scheuen dieses Denkmal.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aufgrund dieser historischen Geschehnisse und der Einzelfälle müssen wir jeden Besucher registrieren, für den Fall, dass hier jemand plötzlich in der <em>Kuppel</em>&nbsp;verschwindet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ich drücke jetzt einmal bei Ihnen ein Auge zu. Es ist ja zum Glück schon länger nichts mehr passiert in <em>Snow Peaks</em>.«</p>"
      }
     ],
     "next": [
      {
       "title": "»Kuppel?«",
       "chapterId": "3",
       "sectionId": "020"
      },
      {
       "title": "»Verschwun­dene?«",
       "chapterId": "3",
       "sectionId": "021"
      }
     ]
    },
    {
     "id": "020",
     "title": "»Kuppel?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Die <em>Kuppel</em>&nbsp;hier im Zentrum von <em>Snow Peaks</em>&nbsp;ist neben unserem <em>Observatorium</em>&nbsp;außerhalb der Stadt eine Gedenkstätte an die <em>Verschwundenen des Hollow White</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dieses Monument wurde erst viele Jahre nach dem <em>Hollow White</em> aufgebaut.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Name <em>Snow Peaks</em>&nbsp;ist durch die Spitzen des <em>Kalten Sterns</em>, die in die Höhen ragen, und den konstanten Witterungsverhältnissen außerhalb der <em>Kuppel</em>&nbsp;entstanden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie müssen wissen, es herrscht seit dem Ereignis nur noch eine Jahreszeit in <em>Snow Peaks</em>. Die Vegetation hier in der <em>Kuppel</em>&nbsp;ist bis heute unerklärlich. Es ist davon auszugehen, dass von dem <em>Kalten Stern</em>&nbsp;eine uns unerklärliche Energie ausgeht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aber ich will Sie jetzt nicht um Ihre Zeit bringen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Haben Sie noch Fragen?«</p>"
      }
     ],
     "next": [
      {
       "title": "Mehr erfahren",
       "chapterId": "3",
       "sectionId": "022"
      },
      {
       "title": "Gespräch beenden",
       "chapterId": "3",
       "sectionId": "023"
      }
     ]
    },
    {
     "id": "021",
     "title": "»Verschwundene?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Das weiß leider niemand, nur dass damals an den Orten der <em>Verschwunden</em>&nbsp;seltsame Artefakte in Form kleiner Steinplatten aufgetaucht sind. Diese sogenannten <em>Splitter</em> werden im <em>Observatorium</em>&nbsp;etwas außerhalb der Stadt verwahrt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Jetzt wissen Sie die wichtigsten geschichtlichen Hintergründe zum <em>Hollow White</em>. Wollen Sie noch mehr über die Zeit vor <em>Snow Peaks</em>&nbsp;erfahren?«</p>"
      }
     ],
     "next": [
      {
       "title": "Mehr erfahren",
       "chapterId": "3",
       "sectionId": "022"
      },
      {
       "title": "Gespräch beenden",
       "chapterId": "3",
       "sectionId": "023"
      }
     ]
    },
    {
     "id": "022",
     "title": "Mehr erfahren",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Alten Aufzeichnungen zufolge war vor der Entstehung von <em>Snow Peaks</em>&nbsp;hier eine Ansiedlung von Dörfern, die sich um das Städtchen <em>Rivers End</em>&nbsp;gruppierten. Ein sehr grünes und bewachsenes Gebiet noch vor der Zeit von <em>White Valley</em>. So angesehen, dass immer wieder Kriege um die Ländereien hier geführt wurden. Aber das alles wird überschattet durch die Geschehnisse des <em>Hollow White</em>.«</p>"
      }
     ],
     "next": [
      {
       "title": "Gespräch beenden",
       "chapterId": "3",
       "sectionId": "023"
      }
     ]
    },
    {
     "id": "023",
     "title": "Gespräch beenden",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Es hat mich gefreut, Ihnen etwas über unser Städtchen erzählen zu können. Kommen Sie gerne wieder, aber bitte vergessen Sie das nächste Mal nicht, sich vorne anzumelden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ich begleite Sie noch mit zum Ausgang.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bevor du die <em>Kuppel</em>&nbsp;verlässt, reicht dir die Dame in Weiß zum Abschied eine kleine hell strahlende Rose.</p>"
      },
      {
       "type": "addItem",
       "id": "rose"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sie ist speziell behandelt, damit sie die Kälte draußen übersteht. Zum Gedenken an die <em>Verschwundenen des Hollow White</em>. Ich wünsche Ihnen einen schönen Aufenthalt in <em>Snow Peaks</em>.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du die <em>Kuppel</em>&nbsp;verlässt, ist dein Blick noch lange Zeit auf den <em>Kalten Stern</em>&nbsp;gerichtet.</p>"
      }
     ],
     "next": [
      {
       "title": "In die Altstadt gehen",
       "chapterId": "3",
       "sectionId": "024"
      }
     ]
    },
    {
     "id": "024",
     "title": "In die Altstadt gehen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>An die <em>Kuppel</em>&nbsp;angrenzend, begibst du dich durch die kleinen engen Passagen und Gassen der Altstadt von <em>Snow Peaks</em>. Im Gegensatz zum trostlosen Stadtkern wirkt es hier lebendiger und es sind mehr Menschen unterwegs.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben den Leuten, an denen du vorbeiläufst, bemerkst du einen Mann mit zerlumpter Kleidung an einer bröckeligen Hauswand auf dem kalten Boden sitzen. Um ihn herum Kartons, aus welchen er sich eine Art Obdach gebaut hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Eine kleine Spende für die <em>Verschwundenen des Hollow White</em>«, steht auf einem Stück Karton.</p>"
      }
     ],
     "next": [
      {
       "title": "Etwas geben",
       "chapterId": "3",
       "sectionId": "025"
      },
      {
       "title": "Ignorieren",
       "chapterId": "3",
       "sectionId": "026"
      }
     ]
    },
    {
     "id": "025",
     "title": "Etwas geben",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du in deinen Taschen wühlst, merkst du, dass du nichts von Wert bei dir hast.</p>"
      },
      {
       "type": "if",
       "condition": "STATE coin > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Als du die Hand schon aus deiner rechten Tasche ziehen willst, spürst du etwas Kaltes.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Eine Münze. Die Münze, die du vorhin gefunden hast.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du gibst diese dem Mann, der etwas irritiert auf die Zeichnungen auf deinem Handgelenk starrt.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Er schnappt sich die Münze und haut in Windeseile ab.</p>"
        },
        {
         "type": "state",
         "id": "coin",
         "modifier": "=2"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE coin > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Der Alte wird auf deine Zeichnungen auf deinem Handgelenk aufmerksam, schaut als hätte er einen Geist gesehen und haut in Windeseile ab.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Verdutzt schaust du noch etwas dem Mann hinterher, der fast schon panisch in einer dunklen Seitengasse verschwindet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Einige Straßen weiter machst du eine kurze Pause im <em>Stardust</em>. Ein kleines Restaurant mit gemütlicher Bar.</p>"
      },
      {
       "type": "addItem",
       "id": "stardustdiner"
      },
      {
       "type": "paragraph",
       "text": "<p>Leider hast du kein Geld dabei, daher reicht es&nbsp;nur, um sich kurz aufzuwärmen und auf der Toilette einen Schluck Leitungswasser zu trinken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du das <em>Stardust</em>&nbsp;verlassen willst, ruft dir der Barkeeper hinter der Theke hinterher.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wollen Sie schon gehen?«</p>"
      }
     ],
     "next": [
      {
       "title": "Mit Barkeeper sprechen",
       "chapterId": "3",
       "sectionId": "027"
      },
      {
       "title": "Stardust verlassen",
       "chapterId": "3",
       "sectionId": "028"
      }
     ]
    },
    {
     "id": "026",
     "title": "Ignorieren",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ignorierst den Obdachlosen und machst eine kurze Pause im <em>Stardust</em>. Ein kleines Restaurant mit gemütlicher Bar.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Leider reicht es nur, um sich kurz aufzuwärmen und auf der Toilette einen Schluck Leitungswasser zu trinken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du das <em>Stardust</em>&nbsp;verlassen willst, ruft dir der Barkeeper hinter der Theke hinterher.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wollen Sie schon gehen?«</p>"
      }
     ],
     "next": [
      {
       "title": "Mit Barkeeper sprechen",
       "chapterId": "3",
       "sectionId": "027"
      },
      {
       "title": "Stardust verlassen",
       "chapterId": "3",
       "sectionId": "028"
      }
     ]
    },
    {
     "id": "027",
     "title": "Mit Barkeeper sprechen",
     "elements": [
      {
       "type": "if",
       "condition": "STATE coin = 1",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Ich habe nicht mehr als diese eine Münze«, sagst du.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Der gemütliche Herr mit dem gezwirbelten Bart hinter der Bar lächelt freundlich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Kommen Sie, ich lade Sie auf einen warmen Kaffee und den besten Käsekuchen in <em>Snow Peaks</em>&nbsp;ein.«</p>"
      },
      {
       "type": "addItem",
       "id": "cheesecake"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir haben nicht oft neue Gesichter hier in der Stadt. Mein Name ist <em>Johnny</em>, mir gehört der Laden«.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Johnny beginnt zu erzählen:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Uns gibt es fast schon so lang wie den <em>Hollow White</em>&nbsp;selbst. Mein Vater hat einige Jahre nach den damaligen Geschehnissen die Stadt mit aufgebaut und das <em>Stardust</em>&nbsp;gegründet. Unser Restaurant war der Treffpunkt der Stadt und immer gut besucht. Die Leute sind von überall hierhergekommen, um den besten Kuchen von <em>Snow Peaks</em>&nbsp;oder einen unserer Drinks zu bekommen. Das Kuchenrezept stammt übrigens von meiner Mutter. Florierende Zeiten waren das.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als meine Eltern gestorben sind, habe ich das Stardust übernommen. Ich bin stolz, den Lebenstraum meiner Familie weiterführen zu können – ich spüre immer noch die Liebe und Verbundenheit meiner Eltern, wenn ich täglich die Türe aufschließe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aber die Zeiten sind hart. Immer mehr Gäste meiden mittlerweile den Bereich um den <em>Kalten Stern</em>. Einwohner verschwinden spurlos. Angst und Unsicherheit breiten sich in unserem Städtchen aus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es gibt sogar eine Bewegung, die den Untergang der Welt predigt. Halt dich bloß von diesen Spinnern fern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist schwer, in so einer Zeit den Laden zu halten. Aber meine Eltern haben immer gesagt: Die wahre Lebenskunst besteht darin, im Alltäglichen das Wunderbare zu sehen. Daher schön, dass es doch noch Gäste in unser <em>Stardust</em> schaffen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gespannt hörst du Johnny zu und genießt den noch warmen Käsekuchen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Kaffee aus dem <em>Stardust</em>&nbsp;ist ein Traum. Die Zeit vergeht wie im Flug und es ist Zeit&nbsp;aufzubrechen. Als du dich verabschiedest, bedankst du dich herzlich bei Johnny.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Bis bald, Ella, schön dich kennengelernt zu haben«, winkt Johnny und wischt mit einem nassen Lappen über den Tresen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du das <em>Stardust</em>&nbsp;verlässt und dich auf den Rückweg machst, siehst du überraschenderweise Albert mit einer unbekannten Frau in eine kleine Seitengasse einbiegen.</p>"
      }
     ],
     "next": [
      {
       "title": "Albert rufen",
       "chapterId": "3",
       "sectionId": "029"
      },
      {
       "title": "Unauffällig folgen",
       "chapterId": "3",
       "sectionId": "030"
      }
     ]
    },
    {
     "id": "028",
     "title": "Stardust verlassen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ignorierst den Barkeeper und verlässt das <em>Stardust</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Draußen hat es angefangen, kräftiger zu schneien. Du läufst ein kleines Stück die Straße entlang und stellst dich geschützt unter eine Überdachung. Maries Mantel hält dich warm. Lange Zeit stehst du dort und schaust gedankenverloren in das unendliche Weiß. Als der Schneefall etwas nachlässt, beschließt du dich auf den Rückweg zu machen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Überraschenderweise siehst du in der Ferne Albert mit einer unbekannten Frau in eine kleine Seitengasse einbiegen.</p>"
      }
     ],
     "next": [
      {
       "title": "Albert rufen",
       "chapterId": "3",
       "sectionId": "029"
      },
      {
       "title": "Unauffällig folgen",
       "chapterId": "3",
       "sectionId": "030"
      }
     ]
    },
    {
     "id": "029",
     "title": "Albert rufen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Albert hört dich nicht aus der Ferne.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du läufst ihm und der unbekannten Dame hinterher und biegst in die Seitengasse ein, aber keine Spur von ihm. Als du dich umsiehst,&nbsp;entdeckst du schließlich, wie er und die Fremde in einem unscheinbaren Seiteneingang verschwinden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du folgst den beiden. Als du den Seiteneingang erreichst, siehst du ein Schild oberhalb der Eingangstür:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>„Antiquariat“</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Klopfen",
       "chapterId": "3",
       "sectionId": "031"
      },
      {
       "title": "Leise betreten",
       "chapterId": "3",
       "sectionId": "032"
      }
     ]
    },
    {
     "id": "030",
     "title": "Unauffällig folgen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Unauffällig folgst du Albert und der Dame.&nbsp;Die beiden laufen mit schnellem Schritt immer tiefer in die eng verschachtelten Gassen ein. Kein Mensch ist hier unterwegs. Es ist unheimlich ruhig und dunkel. Nur an wenigen Stellen bricht das Licht durch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich verlierst du die beiden aus deinem Blickfeld, als diese schlagartig abbiegen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du läufst etwas schneller und siehst noch, wie zwei Schatten in einem Seiteneingang verschwinden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du diesen erreichst, hängt oberhalb des Eingangs ein Schild:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>„Antiquariat“</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Klopfen",
       "chapterId": "3",
       "sectionId": "031"
      },
      {
       "title": "Leise betreten",
       "chapterId": "3",
       "sectionId": "032"
      }
     ]
    },
    {
     "id": "031",
     "title": "Klopfen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die Unbekannte öffnet aufgebracht die Tür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wer sind Sie? Wir haben geschlossen!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hinter ihr steht Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der starke Geruch von alten Büchern liegt in der Luft, als du das alte, etwas muffige Antiquariat betrittst. Gefolgt von Albert und der unbekannten Dame.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert ist die Situation sichtlich unangenehm. Die Frau ist empört.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Jahre ist es her, Albert. Jahre! Jetzt tauchst du hier wie aus dem Nichts auf und wirst auch noch beschattet!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»<em>Patricia</em>, das ist Ella, Ella, meine Zwillingsschwester Patricia«, sagt Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia schaut dich kurz angebunden an und dreht sich zurück zu Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Kein Lebenszeichen, nichts! Wir dachten, dir wär’ was passiert in den <em>White Valleys</em>! Du kannst dir gar nicht vorstellen, was für Sorgen ich mir um dich gemacht habe!«</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>SIRENEN ERTÖNEN</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich gehen in der Stadt laute Sirenen los.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Von draußen sind Schreie zu hören. Es knallen Türen und Leute rufen panisch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Körper beginnt zu zittern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schnell, hier lang!«, ruft Patricia angsterfüllt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr folgt ihr in Windeseile die Treppe hinab. Hinter einem Bücherregal verbirgt sich eine geheime Tür. Es geht einen Kellerabgang herunter in einen miefigen und stockdunklen Keller.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die schwere Tür fällt hinter euch zu.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 3",
       "chapterId": "3",
       "sectionId": "034"
      }
     ]
    },
    {
     "id": "032",
     "title": "Leise betreten",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du öffnest leise die nicht abgeschlossene Tür und betrittst das Antiquariat. Hinter einem Bücherregal versteckt lauschst du. Die Unbekannte ist unüberhörbar verärgert und beklagt immer wieder, wie Albert ihr das die ganzen Jahre nur antun konnte.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Während du lauschst, seilt sich neben dir langsam eine riesige schwarze Spinne ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als&nbsp;die Spinne sich vor deinem Gesicht platziert, haust du panisch um dich und schreist. Albert kommt und blickt überrascht zu dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella! Was machst du hier?«</p>"
      }
     ],
     "next": [
      {
       "title": "Spinne",
       "chapterId": "3",
       "sectionId": "033"
      }
     ]
    },
    {
     "id": "033",
     "title": "Spinne",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Der starke Geruch von alten Büchern liegt in der Luft. Du hast immer noch das Gefühl, dass das achtbeinige Ungeheuer auf deinen Haaren sitzt und fährst dir mehrfach mit deiner Hand durch das Haar.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert ist die Situation sichtlich sehr unangenehm, die unbekannte Frau schaut euch mit einem empörten Blick an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Jahre ist es her, Albert. Jahre! Jetzt tauchst du hier wie aus dem Nichts auf und wirst auch noch beschattet!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»<em>Patricia</em>, das ist Ella, Ella, meine Zwillingsschwester Patricia«, sagt Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia schaut dich kurz angebunden an und dreht sich zurück zu Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Kein Lebenszeichen, nichts! Wir dachten, dir wär’ was passiert in den <em>White Valleys</em>!«</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>SIRENEN ERTÖNEN</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich gehen in der Stadt laute Sirenen los.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Von draußen sind Schreie zu hören. Es knallen Türen und Leute rufen panisch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Körper beginnt zu zittern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schnell, hier lang!«, ruft Patricia angsterfüllt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr folgt ihr in Windeseile die Treppe herunter. Hinter einem Bücherregal verbirgt sich eine geheime Tür. Es geht einen Kellerabgang herunter in einen miefigen und stockdunklen Keller.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die schwere Tür fällt hinter euch zu.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 3",
       "chapterId": "3",
       "sectionId": "034"
      }
     ]
    },
    {
     "id": "034",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><a class=\"skip-link\" href=\"javascript:document.documentElement.scrollTo({ top: 100000, behavior: 'smooth' })\">Überspringen</a></p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 2: Der Weg nach Snow Peaks</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine spannungsgeladene Reise beginnt, in welcher Ella, Albert und Snow ums nackte Überleben in der eisigen und gefährlichen Landschaft von White Valley kämpfen. Snow wird dabei stark verletzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 3: Der Hollow White</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Ella und Albert mit letzten Kräften das verschneite Städtchen Snow Peaks erreichen, treffen sie auf alte Freunde von Albert. Frank, einem pensionierten Arzt und seiner Frau Marie, die etwas außerhalb der Stadt in einem größeren Anwesen leben.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise erliegt Snow an seinen Wunden. Gedanken plagen Ella. Hätte Snow gerettet werden können? Mit diesem ungewissen Gefühl setzt sie ihre Suche fort.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow kann in letzter Sekunde von Frank gerettet werden. Albert und Ella sind mit einem großen Schrecken davongekommen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Am ersten Tag in der Stadt lüftet Ella viele Geheimnisse rund um Snow Peaks und deren Einwohner. So erfährt sie vom sagenumwobenen Geschehnis des Hollow White, einer Art Naturphänomen vor über 70 Jahren in der Vergangenheit, bei welchem Bewohner von Snow Peaks spurlos verschwunden sind. Seitdem ist die Stadt in Alarmbereitschaft und es gibt immer wieder Einzelfälle des Verschwindens.</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 4",
       "chapterId": "4",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "4",
   "title": "Die Verschwundenen",
   "sections": [
    {
     "id": "001",
     "title": "Sirenen heulen in Snow Peaks",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>In kurzen Abständen wiederholt sich das aufbauende Heulen der Sirenen in <em>Snow Peaks</em>. Eine unerträgliche Anspannung und Angst liegt in der Luft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Obwohl ihr in einem tiefen Kellergewölbe unterhalb des Antiquariats Schutz gefunden habt, dringt das bedrohliche Geräusch bis zu euch in die Tiefe vor.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Luft ist feucht, leicht modrig und kratzt in deinem Hals. Es riecht muffig und ist kalt. Du bekommst nur schwer Luft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Streichholz geht an und eine kleine Flamme erhellt den finsteren Kellerraum. Patricia zündet eine Kerze an und stellt diese auf einen kleinen runden Tisch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Um euch stehen noch mehr alte Bücher in hohen Regalen, aufgereiht bis zur Decke. Albert stützt sich über die Lehne eines alten Holzstuhls und atmet schwer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zitternd fragst du, was gerade passiert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia wischt sich über ihre Augen und spricht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es ist schon lange her, als ich das letzte Mal die Sirenen gehört habe. Aber immer, wenn diese schrecklichen Töne in der Stadt aufheulen, erzeugt es eine tiefe Furcht in mir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es scheint einen Zusammenhang mit dem <em>Kalten Stern</em> zu geben. Die Sirenen ertönen, wenn dort etwas geschieht, was für uns bisher unerklärlich ist. Meistens verschwinden danach spurlos Menschen hier in <em>Snow Peaks</em>.&nbsp;Das letzte Mal war es mein Bruder, der kurz daraufhin nicht mehr da war.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert richtet sich langsam auf und beginnt mit demütiger Stimme zu seiner Schwester zu sprechen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es tut mir unbeschreiblich leid, dass ich so lange abgetaucht bin. Die Geschehnisse damals haben mich völlig aus der Bahn geworfen. Ich konnte keinen klaren Gedanken mehr fassen und war nicht mehr ich selbst. Ich habe Jahre in den <em>White Valleys</em>&nbsp;gebraucht, um wieder zu mir zu finden. Bitte verzeih mir …«</p>"
      }
     ],
     "next": [
      {
       "title": "Das Geheimnis",
       "chapterId": "4",
       "sectionId": "001b"
      }
     ]
    },
    {
     "id": "001b",
     "title": "Das Geheimnis",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Patricia schaut Albert betroffen an und reagiert mitfühlend.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Erinnerst du dich, als wir das letzte Mal hier unten in diesem dunklen Keller Schutz gesucht haben?«, fragt sie Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert setzt sich und beginnt zu erzählen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es ist sehr lange her und wie ein Traum, der mich jede Nacht aufs Neue aufsucht …</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Noch vor der Zeit von <em>Snow Peaks</em>&nbsp;als das Städtchen <em>Rivers End</em> genannt wurde. Während des Geschehnisses des <em>Hollow White</em>&nbsp;stand die Stadt in Alarmbereitschaft und die Sirenen ertönten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In meinen Träumen sehe ich immer wieder uns als Kinder, wie wir mit unserem Vater in diesen Keller flüchteten. Er selbst ist noch einmal raus um unsere Mutter zu suchen und da muss es passiert sein. Ein unvorstellbarer Schlag&nbsp;erschütterte die Erde, ein unerträgliches Summen ertönte. Es wurde plötzlich dunkel!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia übernimmt das Wort.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich kann mich nur daran erinnern, wie wir völlig verängstigt den dunklen Keller verlassen haben und sich alles um uns verändert hatte. Unsere Eltern waren verschwunden und wir wurden von Fremden in ein Waisenhaus gebracht. Wir waren noch zu klein, um zu verstehen, was uns in diesem Moment passiert ist.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ziehst einen Stuhl zu dir und setzt dich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ihr seid <em>Verschwundene des Hollow White</em>? Wie ist das möglich?«, fragst du verunsichert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ja, Ella«, antwortet Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir waren Kinder, als vor 70 Jahren in dieser einen Sekunde der <em>Kalte Stern</em>&nbsp;in <em>Rivers End</em>&nbsp;eingeschlagen ist. Es muss in diesem Moment etwas mit der Zeit geschehen sein …«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert unterbricht seinen Satz und schaut dich ernst an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Der <em>Hollow White</em> … in dieser einen Sekunde sind wir um die 40 Jahre später hier im Keller in <em>Snow Peaks</em>&nbsp;aufgewacht … wir sind aus der Vergangenheit in die Zukunft gesprungen …«</p>"
      }
     ],
     "next": [
      {
       "title": "»40 Jahre später?«",
       "chapterId": "4",
       "sectionId": "002"
      }
     ]
    },
    {
     "id": "002",
     "title": "»40 Jahre später?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Skeptisch schaust du zu Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich weiß, das klingt ziemlich verrückt. Wir haben es lange Zeit selbst nicht glauben können. Doch als wir alle Teile nach Jahrzehnten unserer Suche zusammen hatten, ergaben viele unserer Fragen endlich Sinn.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert nimmt ein altes Buch aus einem Bücherregal, pustet den Staub ab und reicht es dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Unser Familienbuch.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du die alten Geburtsurkunden durchblätterst, kannst du deinen Augen nicht trauen. Albert und Patricia sind vor 78 Jahren geboren. 8 Jahre vor dem Geschehnis des <em>Hollow White</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Misstrauen legt sich etwas.</p>"
      }
     ],
     "next": [
      {
       "title": "»Andere Verschwundene?«",
       "chapterId": "4",
       "sectionId": "003"
      },
      {
       "title": "Keller verlassen",
       "chapterId": "4",
       "sectionId": "004"
      }
     ]
    },
    {
     "id": "003",
     "title": "»Andere Verschwundene?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du klappst das Familienbuch zu und fragst nach anderen <em>Verschwundenen</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich kenne&nbsp;keinen Fall, der auf weitere <em>Verschwundene</em>&nbsp;hier in dieser Zeit in <em>Snow Peaks</em> hinweist. Zumindest niemand, der sich öffentlich bekannt hat. Aber es ist auch nicht verwunderlich. Es ist nie gewiss, wie die Menschen reagieren. Es könnte sogar gefährlich sein, wenn die falschen Leute davon erfahren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gerade in Anbetracht dieser gefährlichen Bewegung&nbsp;des <em>Schwarzen Kreis</em>, eine Art Untergrund-Organisation, die den <em>Hollow White</em>&nbsp;und die Angst der Menschen nutzt und nichts Gutes im Schilde führt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir können von Glück sprechen, dass uns Frank seither geholfen hat, unser Erscheinen geheim zu halten«, antwortet Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia unterbricht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Hört ihr? Die Sirenen haben aufgehört!«</p>"
      }
     ],
     "next": [
      {
       "title": "Keller verlassen",
       "chapterId": "4",
       "sectionId": "004"
      }
     ]
    },
    {
     "id": "004",
     "title": "Keller verlassen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Zusammen geht ihr zurück nach oben ins Antiquariat. Deine Augen brennen&nbsp;und müssen sich an das Licht gewöhnen. Die Sirenen sind mittlerweile wieder verstummt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es herrscht eine bedrückende Stimmung und kein Mensch ist auf den Straßen unterwegs.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ob wieder jemand in Snow Peaks verschwunden ist?</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia bietet dir und Albert an, die Nacht bei ihr zu bleiben, da es bereits recht spät ist, um noch aufzubrechen. Sie bringt dich in ein Dachgeschosszimmer im dritten Stockwerk oberhalb des Antiquariats. Ein kleines Zimmerchen mit Schrägen und weitem Ausblick auf die in Nebel getauchten Dächer von <em>Snow Peaks</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du setzt dich auf das weiche Bett. Noch immer beschäftigt dich das heutige Ereignis und Patricias und Alberts Vergangenheit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Warum hast du die Stadt noch nicht verlassen?«, fragst du sie.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia schaut nachdenklich aus dem Fenster.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Marie und Frank stellen mir auch immer wieder diese Frage und bieten mir an zu ihnen nach draußen außerhalb von <em>Snow Peaks</em>&nbsp;zu ziehen. Aber wie bei den anderen Einwohnern, die hier nahe der <em>Kuppel</em> noch leben, fällt es mir schwer unser Haus aufzugeben. Es ist alles, was uns übrig geblieben ist, verstehst du?&nbsp;In diesem Zimmer hat sich nach unserem Wissen unser Vater oft zurückgezogen. Wir haben viele alte Briefe und Zeichnungen von ihm gefunden. Oft stelle ich mir hier in unserem Haus, ein Leben ohne dem <em>Hollow White</em> vor«, sagt Patricia melancholisch, mit glasigen Augen.</p>"
      }
     ],
     "next": [
      {
       "title": "Patricia umarmen",
       "chapterId": "4",
       "sectionId": "005"
      },
      {
       "title": "Ins Bett gehen",
       "chapterId": "4",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "005",
     "title": "Patricia umarmen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du überlegst nicht lange und umarmst Patricia.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr Schmerz, der sich förmlich tief in ihr Herz gebohrt hat, ist stark zu spüren. Es muss furchtbar gewesen sein, was sie und Albert als Kinder durch den Zeitsprung durchgemacht haben, auch wenn bereits viele Jahrzehnte vergangen sind.</p>"
      }
     ],
     "next": [
      {
       "title": "Ins Bett gehen",
       "chapterId": "4",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "006",
     "title": "Ins Bett gehen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du wünschst Patricia eine gute Nacht und schließt die Tür hinter dir ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die ganze Nacht bekommst du trotz deiner Müdigkeit kaum ein Auge zu. Du wälzt dich hin und her. Zu viele Gedanken schwirren dir durch den Kopf. Der <em>Hollow White</em>, Alberts und Patricias Zeitsprung, Hannahs Verschwinden und vor allem: die&nbsp;Frage nach dir selbst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Morgen bricht herein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein feiner Duft strömt durch den alten Hausgang bis hoch ins Dachgeschoss.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du gehst die Treppengeschosse hinunter in die Küche, wo Albert gerade Frühstück zubereitet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Guten Morgen Ella, komm, setz dich. Du wirst Kraft brauchen für den heutigen Tag«, sagt Albert und serviert dir einen warmen, duftenden Crêpe.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "addItem",
         "id": "crepe"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich muss gleich zu Marie und Frank, um zu sehen, ob es den beiden gut geht, nach dem gestrigen Alarm.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ich hoffe auch, dass es Snow wieder besser geht!« sagt er.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Wir müssen uns noch um Snows Begräbnis kümmern.«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du merkst den Schmerz, der hinter diesen Worten steckt.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Es ist nicht zu glauben, dass Snow nicht mehr bei euch ist.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Albert, es tut mir so unendlich leid«, antwortest du, doch Albert weicht aus.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich habe Patricia gebeten, dass sie dir heute die Stadt zeigt, um die Geschehnisse rund um den <em>Hollow White</em>&nbsp;und unsere Geschichte besser zu verstehen. Ich hoffe, du findest weitere Spuren zu Hannah.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert steht auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir sehen uns heute Abend bei Marie und Frank«, sagt er und verlässt durch eine Hintertür die Küche.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia kommt in dem Moment hinein, begrüßt dich und leistet dir Gesellschaft. Ihr unterhaltet euch über den gestrigen Tag und zieht euch warm an, um gemeinsam das Haus zu verlassen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als sie die Vordertür des Antiquariats hinter euch abschließt, schneit es wieder.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Es ist furchtbar, was mit Snow passiert ist. <em>White Valley</em>&nbsp;ist wunderschön, aber auch gefährlich. Immer wieder hört man von Unfällen dort.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Hätte ich das mit Snow gewusst, wäre ich wahrscheinlich mit meinem Bruder nicht so schroff umgesprungen. Ich bin so froh, dass er wieder zurück ist.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ihr habt die letzten Tage ziemlich was durchgemacht. Danke, dass du bei ihm gewesen bist«, sagt Patricia.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Ich habe das mit Snow von Albert gehört. Da habt ihr ziemliches Glück gehabt! Man hört immer wieder von Unfällen in <em>White Valley</em>. Das Gebiet ist wunderschön, aber auch sehr gefährlich«, sagt Patricia.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Schneit es hier wirklich ununterbrochen in <em>Snow Peaks</em>?«, fragst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Seit dem <em>Hollow White</em> gibt es kaum einen Tag, an dem es nicht schneit«, sagt Patricia.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Komm, wir müssen ein gutes Stück aus der Stadt heraus und haben noch einen längeren Fußmarsch vor uns«.</p>"
      }
     ],
     "next": [
      {
       "title": "Die Stadt verlassen",
       "chapterId": "4",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "007",
     "title": "Die Stadt verlassen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als ihr den Stadtrand erreicht, fallen dir vereinzelt schwarze Kreise, die an die Außenmauern geschmiert sind, auf.</p>"
      }
     ],
     "next": [
      {
       "title": "Nach den schwarzen Kreisen fragen",
       "chapterId": "4",
       "sectionId": "008"
      },
      {
       "title": "Nach dem Weg fragen",
       "chapterId": "4",
       "sectionId": "009"
      }
     ]
    },
    {
     "id": "008",
     "title": "Nach den schwarzen Kreisen fragen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Was sind das für Zeichnungen an den Wänden?«, fragst du Patricia.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie wirft einen flüchtigen Blick auf die Mauer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Diese Symbole sind von der Bewegung des&nbsp;<em>Schwarzen Kreis</em>.&nbsp;Eine im Untergrund agierende Sekte, die den <em>Hollow White</em>&nbsp;als apokalyptisches Zeichen interpretiert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist nicht viel bekannt, wer die Fäden zieht und für diese Schmierereien in der Stadt verantwortlich ist. Ich würde dem keine Beachtung schenken«, sagt Patricia.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr lauft an einem alten <em>Friedhof</em>&nbsp;vorbei und steht vor einem riesigen Gemäuer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»<em>Das Observatorium</em>«, sagt Patricia. »Neben den Toten ruhen hier die <em>Verschwundenen</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Zum Observatorium",
       "chapterId": "4",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "009",
     "title": "Nach dem Weg fragen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Wo gehen wir hin?«, fragst du Patricia.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Zum <em>Observatorium</em>, einer Art Ruhestätte der <em>Verschwundenen des Hollow White</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schau, da vorne. Wir sind gleich da. Siehst du das riesige kantige Gebäude&nbsp;neben dem etwas verwachsenen <em>Friedhof</em>?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben den Toten ruhen hier die&nbsp;<em>Verschwundenen</em>«, sagt Patricia.</p>"
      }
     ],
     "next": [
      {
       "title": "Zum Observatorium",
       "chapterId": "4",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "010",
     "title": "Zum Observatorium",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ihr betretet den futuristisch gebauten Empfangsbereich des <em>Observatoriums</em>. Die kantigen Formen der Architektur und die puristische Innenausstattung lassen den hell beleuchteten Raum wie ein leer stehendes Museum erscheinen. Das Licht spiegelt sich an den glatten Oberflächen des Bodens und blendet. Aus einem in Helligkeit getauchten endlos wirkenden Gang kommt euch jemand entgegen. Eine <em>Dame in Weiß</em>, ähnlich der Dame aus der Kuppel.</p>"
      },
      {
       "type": "addItem",
       "id": "observatorium"
      },
      {
       "type": "paragraph",
       "text": "<p>»Guten Tag, kann ich Ihnen helfen?«</p>"
      }
     ],
     "next": [
      {
       "title": "Nach den gestrigen Sirenen fragen",
       "chapterId": "4",
       "sectionId": "011"
      },
      {
       "title": "Zur Gedenkstätte",
       "chapterId": "4",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "011",
     "title": "Nach den gestrigen Sirenen fragen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Nach dem Stromausfall in den letzten Tagen musste das Sicherheitssystem am <em>Kalten Stern</em>&nbsp;instandgesetzt werden. Leider ist der Alarm dabei losgegangen. Das hat natürlich für eine ziemliche Aufregung gesorgt. Wir hoffen, es kehrt schnell wieder Ruhe in unserem Städtchen ein. Zum Glück gab es diesmal keinen Fall des Verschwindens. Die lokale Zeitung ist informiert. <em>Snow Peaks</em>&nbsp;wird zu diesem Ausfall zeitnah aufgeklärt.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia bedankt sich für die Information und fragt nach der Nummer 222.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die weiß gekleidete Frau entschuldigt sich kurz und kommt nach ein paar Minuten zu euch zurück.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Kommen Sie, in den letzten Jahren hat sich hier viel verändert«, sagt sie.</p>"
      }
     ],
     "next": [
      {
       "title": "Zur Gedenkstätte",
       "chapterId": "4",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "012",
     "title": "Zur Gedenkstätte",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Bitte hier lang«, sagt die Dame in Weiß.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam folgt ihr der Frau eine steile Steintreppe hinunter und durchquert eine enge unterirdische Passage, bis ihr den Eingang einer großen Halle betretet. Ein überwältigender Anblick, was hier tief unter der Erde geschaffen wurde. Der riesige Raum gleicht einer majestätischen unterirdischen Kathedrale.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hunderte von kleinen quadratischen Glaswürfeln, die beleuchtet sind, stehen bis weit ans Ende hintereinander aufgereiht und erhellen den Weg.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das muss die zweite Gedenkstätte sein, von der die Frau aus der Kuppel erzählt hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Dame in Weiß verabschiedet sich ab diesem Bereich von euch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gespannt schaust du sofort in eine der ersten beleuchteten Vitrinen und siehst einen kleinen glatten Stein mit spitzen Kanten, der in dieser aufbewahrt wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Siehst du, Ella, in den beleuchteten Vitrinen befinden sich die gefundenen <em>Splitter</em> der <em>Verschwundenen des Hollow White</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist eine Art symbolischer Gedenkkasten, der an die <em>Verschwundenen</em> erinnert. Das <em>Observatorium</em>&nbsp;ist ein Ort, um den Trauernden etwas Verbliebenes zu hinterlassen. Ähnlich wie der <em>Friedhof</em>&nbsp;draußen, nur anders«, sagt Patricia.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Im Hintergrund steht eine andere Dame in Weiß. Die Frau wirft euch einen kontrollierenden Blick zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Komm, Ella, das ist nicht unsere Nummer. Hier geht es lang«, sagt Patricia.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zusammen lauft ihr Würfel für Würfel die lang gezogene unterirdische Halle entlang, bis ihr den Würfel mit der Nummer 222 erreicht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf dem leuchtenden Glaswürfel ist diesmal ein kleines Schildchen mit Gravur befestigt.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»In Gedenken an die verschwundenen Kinder des Hollow White.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Patricia Blake und Albert Blake«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Fasziniert betrachtest du die beiden Edelstein ähnlichen Splitter. Nicht größer als ein Daumen reflektiert das Licht auf den glatten dunklen Flächen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Direkt daneben fällt dir noch ein leerer Glaswürfel ohne Beleuchtung auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du fragst:</p>"
      }
     ],
     "next": [
      {
       "title": "»Das sind eure Splitter?«",
       "chapterId": "4",
       "sectionId": "013"
      },
      {
       "title": "»Was ist mit dem leeren Glaswürfel?«",
       "chapterId": "4",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "013",
     "title": "»Das sind eure Splitter?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Ja, Ella. Das sind unsere Splitter, die am Ort unseres Verschwindens gefunden wurden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit der Hilfe von Frank konnten wir nach vielen Jahren der Suche unsere Splitter hier im <em>Observatorium</em> ausfindig machen. Wahrscheinlich haben unsere Eltern sie damals dort hinterlassen. Das konnten wir nie genau herausfinden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aber mittlerweile ist das alles so lange her. Ich hatte fast mit der Sache abgeschlossen, doch dann ist das mit Judy passiert und Albert ist verschwunden.«</p>"
      }
     ],
     "next": [
      {
       "title": "»Was ist mit Judy geschehen?«",
       "chapterId": "4",
       "sectionId": "016"
      },
      {
       "title": "»Was ist mit dem leeren Glaswürfel?«",
       "chapterId": "4",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "014",
     "title": "»Was ist mit dem leeren Glaswürfel?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Das ist der Gedenkplatz von Alberts Frau Judy.&nbsp;Ihr Splitter konnte bis heute nicht gefunden werden«, antwortet Patricia.</p>"
      }
     ],
     "next": [
      {
       "title": "»Was ist mit Judy geschehen?«",
       "chapterId": "4",
       "sectionId": "016"
      }
     ]
    },
    {
     "id": "016",
     "title": "»Was ist mit Judy geschehen?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Vor einigen Jahren gab es den letzten offiziellen Vorfall des Verschwindens in <em>Snow Peaks</em>.&nbsp;Sirenen ertönten. Die ganze Stadt geriet in Angst und Panik. Ich war allein zu Hause, als Albert plötzlich mitten in der Nacht vollkommen verzweifelt zu mir kam. Er meinte Judy sei weg. So hatte ich ihn noch nie erlebt. Er ist dann noch einmal los – das war das letzte Mal, dass ich ihn gesehen habe, bevor er sich in den Wäldern zurückgezogen hat«, antwortet Patricia.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bist sprachlos. Judy gehört zu den Verschwundenen von <em>Snow Peaks</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdenklich blickst du auf die leere Vitrine von Judy, bevor ihr die Halle zurück und die Treppenstufen nach oben geht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Am Ausgang trifft ihr auf die Frau in Weiß.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Kann ich Ihnen noch helfen meine Damen?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du atmest tief durch. Dir bleibt fast die Stimme weg vor Aufregung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»… wir sind auf der Suche nach einem verschwundenen Kind namens <em>Hannah</em>&nbsp;und einer Frau namens <em>Ella</em> …«, antwortest du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Dame in Weiß überlegt kurz.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Warten Sie bitte einen Moment hier«, sagt sie.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die nächsten Minuten des Wartens sind fast unerträglich, deine Nervosität steigert sich bis ins Unermessliche. Voller Hoffnung spürst du deinen eigenen schnellen Herzschlag in deinem Brustkorb klopfen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Endlich kommt die Frau in Weiß zurück.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich habe unsere Einträge der gefundenen Splitter gründlich durchsucht. Leider liegt uns keine Zuordnung zu den beiden Namen vor. Es tut mir sehr leid«, antwortet sie.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia schaut dich mitfühlend an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Keine neue Spur zu Hannah und dir. Die Enttäuschung steht dir ins Gesicht geschrieben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr das&nbsp;<em>Observatorium</em>&nbsp;verlasst, betretet ihr den danebenliegenden eingeschneiten <em>Friedhof</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Friedhof",
       "chapterId": "4",
       "sectionId": "017"
      }
     ]
    },
    {
     "id": "017",
     "title": "Friedhof",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Es ist ein kleiner <em>Friedhof</em>, geschützt von einer umlaufend roten Steinmauer und vielen alten Fichten. Über ein verrostetes Tor betretet ihr die Ruhestätte der Toten von <em>Snow Peaks</em>. Vereinzelt ragen Steinkreuze der Gräber aus dem hohen Schnee. Ihr geht einen kleinen verschneiten Weg entlang, bis ihr eine Abzweigung links abbiegt. Der Bereich ist von den Fichten etwas geschützt, sodass nicht alles im tiefen Schnee verschwindet. Unter einem der Bäume endet die Abzweigung und Patricia bleibt stehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dort steht der Grabstein von Patricias und Alberts Eltern.</p>"
      }
     ],
     "next": [
      {
       "title": "Rose aufs Grab legen",
       "chapterId": "4",
       "sectionId": "018"
      },
      {
       "title": "Patricias Hand nehmen",
       "chapterId": "4",
       "sectionId": "019"
      }
     ]
    },
    {
     "id": "018",
     "title": "Rose aufs Grab legen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hast immer noch die Rose aus der Kuppel an deinem Mantel angesteckt. Sanft nimmst du diese ab und legst diese aufs Grab von Patricias und Alberts Eltern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Patricia weiß deine Geste sehr zu schätzen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr steht eine kurze Weile in Stille dort und sagt kein Wort, bis Patricia das Schweigen bricht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Verschwinden oder Tod: Macht es einen Unterschied …?«</p>"
      }
     ],
     "next": [
      {
       "title": "Zurück zu Albert",
       "chapterId": "4",
       "sectionId": "020"
      }
     ]
    },
    {
     "id": "019",
     "title": "Patricias Hand nehmen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du nimmst Patricias Hand und ihr betrachtet das Grab von Patricias und Alberts Eltern. Ihr steht eine kurze Weile in Stille dort und sagt kein Wort, bis Patricia das Schweigen bricht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Verschwinden oder Tod: Macht es einen Unterschied …?«</p>"
      }
     ],
     "next": [
      {
       "title": "Zurück zu Albert",
       "chapterId": "4",
       "sectionId": "020"
      }
     ]
    },
    {
     "id": "020",
     "title": "Zurück zu Albert",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die Dämmerung bricht ein, als ihr nach einem langen Fußmarsch zurück bei Marie und Franks Anwesen ankommt. Patricia verabschiedet sich bei dir, bevor Frank sie mit dem Auto zurück zum <em>Antiquariat</em>&nbsp;bringt.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>An der Tür begrüßt dich Snow freudig und läuft etwas wacklig auf den Beinen und schwanzwedelnd ins Wohnzimmer.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Albert umarmt dich.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Ein ereignisreicher Tag, nicht wahr?«.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Das kann man wohl sagen, ein Städtchen mit vielen Geheimnissen. Ich bin froh, dass es Snow besser geht«, antwortest du.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Albert versucht sich nichts anmerken zu lassen, aber der Tod von Snow muss ihm sehr nahe gehen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Nach dem Abendessen unterhältst du dich noch eine Weile mit Marie.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als sie und Frank zu Bett gehen, setzt sich Albert zu dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Tut mir leid, dass du zu dir und Hannah heute nichts weiter herausfinden konntest.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gib nicht auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir suchen morgen zusammen weiter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Lass uns jetzt versuchen, auf andere Gedanken zu kommen. Ich habe in Franks kleinen Bar einen feinen Gin gefunden«, sagt Albert.</p>"
      }
     ],
     "next": [
      {
       "title": "»Gerne einen Gin«",
       "chapterId": "4",
       "sectionId": "021"
      },
      {
       "title": "»Lieber eine Zigarette«",
       "chapterId": "4",
       "sectionId": "024"
      }
     ]
    },
    {
     "id": "021",
     "title": "»Gerne einen Gin«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»<em>Aesthesis Gin</em>, ein ganz spezieller hier aus <em>Snow Peaks</em>«, sagt Albert, nimmt den Verschluss ab und hält dir die schön verzierte Flasche vor die Nase.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Duft von frischen Wacholderbeeren und würzigen Kräutern steigt dir in die Nase.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ein echter Geheimtipp, bekommt man nicht alle Tage. Der Brenner erstellt jedes Jahr nur eine sehr limitierte Anzahl seines Gins«, sagt Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Was darf ich dir mixen?«</p>"
      }
     ],
     "next": [
      {
       "title": "Hollow White Mule Gin",
       "chapterId": "4",
       "sectionId": "022"
      },
      {
       "title": "Gin Peaks",
       "chapterId": "4",
       "sectionId": "023"
      }
     ]
    },
    {
     "id": "022",
     "title": "Hollow White Mule Gin",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Albert geht kurz in die Küche. Gespannt hörst du, wie er den <em>Hollow White Mule Gin</em>&nbsp;zubereitet.</p>"
      },
      {
       "type": "addItem",
       "id": "gin-mule"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das Rezept hat mir Johnny aus dem <em>Stardust</em>&nbsp;verraten, als ich früher bei ihm als Aushilfe an der Bar gearbeitet habe. Es ist schon lange her, aber das Rezept ist immer noch ein Klassiker.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Cheers Ella!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst einen ersten Schluck. Albert hat nicht zu viel versprochen. Ein wirkliches Geschmackserlebnis.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdem ihr einige Schlücke getrunken habt, lässt dich die Frage nach <em>Judy</em>&nbsp;nicht los. Du fragst Albert, was mit ihr geschehen ist.</p>"
      }
     ],
     "next": [
      {
       "title": "Albert erzählt von Judy",
       "chapterId": "4",
       "sectionId": "025"
      }
     ]
    },
    {
     "id": "023",
     "title": "Gin Peaks",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Albert geht kurz in die Küche. Gespannt hörst du, wie er den Gin Tonic zubereitet.</p>"
      },
      {
       "type": "addItem",
       "id": "gin-peaks"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das Rezept hat mir Johnny aus dem <em>Stardust</em>&nbsp;verraten, als ich früher bei ihm als Aushilfe an der Bar gearbeitet habe. Es ist schon lange her, aber das Rezept ist immer noch ein Klassiker.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Cheers Ella!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst einen ersten Schluck. Albert hat nicht zu viel versprochen. Ein wirkliches Geschmackserlebnis.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdem ihr einige Schlücke des Cocktails getrunken habt, schaust du Albert an. Dich lässt die Frage nach <em>Judy</em>&nbsp;nicht los. Du fragst ihn, was mit ihr&nbsp;geschehen ist.</p>"
      }
     ],
     "next": [
      {
       "title": "Judy",
       "chapterId": "4",
       "sectionId": "025"
      }
     ]
    },
    {
     "id": "024",
     "title": "»Lieber eine Zigarette«",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich selbst rauche nicht mehr. Du weißt ja, wie schädlich es sein kann, aber ich denke, wir haben noch eine Reservepackung«, sagt Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach paar Minuten kommt er zurück ins Wohnzimmer und reicht dir eine Schachtel <em>Ghost Fellows</em>.</p>"
      },
      {
       "type": "addItem",
       "id": "ghostfellows"
      },
      {
       "type": "if",
       "condition": "ITEM ghostfellow",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Oh, die kommen dir doch stark bekannt vor. Beim letzten Mal hast du nicht so gute Erfahrungen damit gemacht. Aber das Bedürfnis danach ist zu groß.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Albert reicht dir Feuer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein starker Reizhusten überkommt dich nach dem ersten Zug und der Rauch brennt furchtbar in deiner Lunge.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert lacht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdem sich dein Husten beruhigt hat, schaust du Albert an. Dich lässt die Frage nach <em>Judy</em> nicht los. Du fragst ihn, was damals geschehen ist.</p>"
      }
     ],
     "next": [
      {
       "title": "Judy",
       "chapterId": "4",
       "sectionId": "025"
      }
     ]
    },
    {
     "id": "025",
     "title": "Judy",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Albert nimmt einen kräftigen Schluck, stellt das Glas auf den Tisch und beginnt zu erzählen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es war an einem verschneiten Abend. Das Licht hat wie Kristalle auf den Laternen geglitzert. Judy und ich sind am <em>Frozen Lake</em> spazieren gewesen. Es war ruhig und still. Nur wir beide.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei einem Steg hat sie mir gesagt, ich sollte meine Augen kurz schließen, sie hätte eine Überraschung für mich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ich die Augen schloss, lauschte ich dem Wasser des Sees und wartete.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich gingen in der Stadt die Sirenen los und ein unbeschreiblich lautes Summen war zu hören. Es gab einen Knall. Alles ging so schnell. Es war unbeschreiblich hell. Als ich meine Augen wieder öffnete, war Judy von der einen auf die andere Sekunde verschwunden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Keine Spur von ihr.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ich habe jede Ecke nach ihr abgesucht. Ich dachte, ich verliere meinen Verstand.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich hörte ich ein leises Winseln. Mitten im kalten Schnee lag ein weißer Welpe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es war Snow.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert nimmt zittrig das Glas vom Tisch und trinkt mit einem Zug das Glas leer. Du merkst, wie stark er mit seinen Gefühlen kämpft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich wusste gar nicht, wie mir geschah. Noch Tage danach wurde der <em>Frozen Lake</em>&nbsp;nach ihr abgesucht, aber keine Spur von Judy.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es war das letzte Mal, dass ich sie gesehen habe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das einzige, was mir in dieser Nacht geblieben ist, ist Snow …«, sagt Albert.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Aber auch er wurde mir jetzt noch genommen«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Und Patricia?« fragst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich liebe meine Schwester, auch wenn wir beide Sturköpfe sein können. Sie konnte Judy nie so richtig ausstehen. Ich glaube, sie hat es nicht leiden können, dass ich mehr Zeit mit Judy als mit ihr verbracht habe. Als Judy verschwunden ist, bin ich ein paar Tage danach mit Snow in die Hütte gefahren, wo wir uns das erste Mal begegnet sind. Ich war fertig mit dieser Welt, mit dem <em>Hollow White</em>&nbsp;und habe mich in Trauer und Stille in die Wälder zurückgezogen. Ich brauchte Zeit, um nachzudenken.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du verstehst jetzt, warum Albert sich in die Hütte zurückgezogen hat. Einige Teile setzen sich jetzt doch Stück für Stück zusammen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dennoch gehen dir viele Frage durch den Kopf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hat dein Erscheinen auch etwas mit dem <em>Hollow White</em> zu tun und wo ist Hannah?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist bereits sehr spät und Albert bringt dich zu deinem Gästezimmer im ersten Stock.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Gute Nacht Ella«, sagt er und geht in das gegenüberliegende Gästezimmer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du deine Zimmertüre schließt, fällst du todmüde ins Bett. Was für ein Tag in <em>Snow Peaks</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Traum",
       "chapterId": "4",
       "sectionId": "026"
      }
     ]
    },
    {
     "id": "026",
     "title": "Traum",
     "elements": [
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Hollow White, ooh Hollow White, höre die Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit so fern. Der weiten Stille entrissen, gereist hier her. Kam nach Snow Peaks. Ooh Snow Peaks, ooh Snow Peaks.«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du stehst mitten auf einem zugefrorenen See. Es ist dunkel und Geräusche von brechendem Eis sind zu hören. Ein lautes unerträgliches Summen ertönt.</p>"
      }
     ],
     "next": [
      {
       "title": "Stehen bleiben",
       "chapterId": "4",
       "sectionId": "027"
      },
      {
       "title": "Loslaufen",
       "chapterId": "4",
       "sectionId": "028"
      }
     ]
    },
    {
     "id": "027",
     "title": "Stehen bleiben",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du bewegst dich keinen Millimeter, bis es auf einmal unter deinen Füßen mächtig zu knacken beginnt.&nbsp;Riesige Risse tun sich auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Eis bricht durch und reißt dir direkt den Halt unter deinen Füßen weg. Du hast keine Chance, dich an der spiegelglatten Oberfläche festzuhalten und tauchst ins eiskalte Wasser. Ein surrealer Moment.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In einem unheimlichen schwarzen Raum hörst du Schreie in der Ferne.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella! Wach auf! Wach auf!</p>"
      }
     ],
     "next": [
      {
       "title": "Du wachst auf",
       "chapterId": "4",
       "sectionId": "029"
      }
     ]
    },
    {
     "id": "028",
     "title": "Loslaufen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du läufst so schnell, wie du kannst los. Hinter dir hörst du das Eis brechen. Als du ruckartig stehen bleibst. Vor dir erstreckt sich eine offene Stelle. Du versuchst noch einen Weg zurückzufinden, doch dir zieht es bereits die Füße unter dir weg. Du hast keine Chance, dich an der spiegelglatten Oberfläche festzuhalten und tauchst ins eiskalte Wasser.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein surrealer Moment.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In einem unheimlichen schwarzen Raum hörst du Schreie in der Ferne.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella! Wach auf! Wach auf!</p>"
      }
     ],
     "next": [
      {
       "title": "Du wachst auf",
       "chapterId": "4",
       "sectionId": "029"
      }
     ]
    },
    {
     "id": "029",
     "title": "Du wachst auf",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Erschreckt wachst du auf und tastest hektisch nach der Nachttischlampe. Durch deine schnelle unkontrollierte Bewegung in der Dunkelheit stößt du an einen Gegenstand, der auf den Boden fällt und zerspringt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du die Lampe einschaltest, siehst du die zersprungenen Teile deines Tonbandgerätes auf dem Boden liegen. Neben dem Band und dem Batteriefach kommt ein kleiner roter Splitter&nbsp;zum Vorschein. Ein Splitter, wie du ihn auch im <em>Observatorium</em> gesehen hast.</p>"
      },
      {
       "type": "addItem",
       "id": "splitter-recorder"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert kommt ins Zimmer reingestürmt.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Dahinter Snow.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Was ist passiert? Alles in Ordnung? Ich habe Schreie gehört!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Standuhr in der unteren Etage schlägt Mitternacht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr sitzt zusammen in deinem Zimmer und starrt auf den roten Splitter aus dem Tonbandgerät. Im Gegensatz zu den Splittern im <em>Observatorium</em>&nbsp;scheint dieser etwas zu leuchten.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Woher kommt dieser Splitter nur?</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Albert bricht die Stille.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella, es ist mir unangenehm, aber ich muss dir was erzählen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In der Nacht, als Judy verschwunden ist, habe ich auch einen leuchtenden Splitter gefunden. Ich war so verzweifelt und wollte ihr Verschwinden einfach nicht wahrhaben, dass ich diesen vor Wut und Trauer in den <em>Frozen Lake</em>&nbsp;geworfen habe.«</p>"
      }
     ],
     "next": [
      {
       "title": "Zum Frozen Lake",
       "chapterId": "4",
       "sectionId": "030"
      }
     ]
    },
    {
     "id": "030",
     "title": "Zum Frozen Lake",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ihr zögert nicht lange, schnappt euch die Schlüssel von Franks Auto und fahrt Mitten in der Nacht zum <em>Frozen Lake</em>,&nbsp;um nach Judys&nbsp;Splitter zu suchen.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow bellt als ihr aus dem Fahrzeug aussteigt.&nbsp;Vorsichtig, hebt Albert ihn vom Rücksitz.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Langsam, alter Freund«, sagt Albert behutsam.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist neblig, dunkel und kalt. An einigen Teilen ist der See zugefroren. An der Stelle, wo Albert den Splitter hineingeworfen hat, ist die Eisschicht an einigen Stellen unterbrochen. Das diesige Licht des Mondes, das durch den Nebel scheint, reicht gerade aus, dass ihr neben den Taschenlampen ein bisschen Sicht habt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr steigt über einen Steg in ein kleines Anglerboot und rudert langsam hinaus&nbsp;auf den See. Viele Stellen sind komplett zugefroren, dennoch ist in diesem Bereich das Wasser seltsamerweise offen und strahlt eine regelrechte Wärme aus.&nbsp;Obwohl schon viele Jahre seit Judys Verschwinden vergangen sind, kann sich Albert noch gut an den Ort dieses tragischen Geschehens erinnern.&nbsp;Als ihr euch nähert, fängt der&nbsp;Splitter aus dem Tonbandgerät wie wild zu leuchten und summen an. Das dunkle Wasser färbt sich an einer Stelle hellrot. Albert hat sich mit einer Tauchermaske und Neoprenanzug ausgestattet,&nbsp;holt tief Luft und springt direkt ins kalte Wasser. Es wird ganz ruhig. Der&nbsp;Splitter&nbsp;in deiner Hand hat aufgehört zu leuchten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kleine Wellen schlagen von allen Seiten auf das Ruderboot ein. Deine Sicht ist auf wenige Meter beschränkt. Die Zeit scheint stillzustehen. Kein Zeichen von Albert. Du schaust in das dunkle Wasser.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow wird unruhig und beginnt zu bellen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Er müsste doch längst schon wieder aufgetaucht sein?«, denkst du dir, als plötzlich etwas blitzartig aus dem dunklen Wasser schießt.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow bellt laut!</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Schreck fährt dir durch deine Glieder gefolgt von Erleichterung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist Albert, der sich am Boot festhält und nach Luft ringt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ziehst ihn mit aller Kraft zu dir, wo er nach einem kurzen Moment am Boden des Bootes liegen bleibt und anfängt zu lachen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich habe da unten völlig die Orientierung verloren. Das rote Licht ist plötzlich erloschen, als ich nach dem Splitter gegriffen habe.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In seiner anderen Hand hält er den&nbsp;Splitter von Judy.</p>"
      },
      {
       "type": "addItem",
       "id": "splitter-judy"
      },
      {
       "type": "paragraph",
       "text": "<p>»Jetzt, schnell nach Hause ins Warme«, schnauft er.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow schleckt ihm freudig über sein nasses Gesicht.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Die Splitter",
       "chapterId": "4",
       "sectionId": "033"
      }
     ]
    },
    {
     "id": "033",
     "title": "Die Splitter",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Es ist noch stockdunkel, als ihr mit Franks Auto in das Anwesen einbiegt. Albert schließt vorsichtig die Haustür auf und legt den Autoschlüssel zurück, bevor ihr leise die knarzende Treppe nach oben in dein Zimmer im ersten Stock geht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr breitet eine Decke auf dem Boden aus&nbsp;und legt den Splitter aus deinem Diktiergerät und den Splitter von Judy direkt nebeneinander.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert schaltet das Licht aus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das, was vor euch geschieht, ist unglaublich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die beiden Splitter stahlen in leicht pulsierenden Abständen ein rötliches warmes Licht aus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Fasziniert schaust du zu Albert. Er lacht, kann aber sein starkes Zittern nicht verbergen. Der Sprung ins eiskalte Wasser scheint ihn trotz der Ausrüstung doch etwas unterkühlt zu haben.</p>"
      }
     ],
     "next": [
      {
       "title": "Albert wärmen",
       "chapterId": "4",
       "sectionId": "034"
      },
      {
       "title": "Eine Decke bringen",
       "chapterId": "4",
       "sectionId": "035"
      }
     ]
    },
    {
     "id": "034",
     "title": "Albert wärmen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du setzt dich neben Albert und umarmst ihn wärmend. Dir gehen die letzten gemeinsamen Tage durch den Kopf. Eure erste Begegnung, die Reise nach <em>Snow Peaks</em>&nbsp;und auch der Moment in der Hütte, als du ihn das erste Mal ganz nah bei dir gespürt hast. Albert ist dir mehr als nur ans Herz gewachsen. Es ist ein so vertrautes Gefühl in seiner Nähe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit einem schlechten Gewissen schaust du zu Judys Splitter, der immer wieder aufleuchtet. Dein Herz beginnt wie wild zu schlagen, als du merkst, dass sich eure Blicke begegnen. Ihr beide könnt eure Gefühle zueinander nicht mehr zurückhalten. Es beginnt mit einfachen zärtlichen Küssen, die immer leidenschaftlicher werden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr zieht euch aus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nackt liegt ihr eng umschlungen in deinem Bett und spürt euch ganz nah. Ein Schauer fährt durch deinen Körper.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sinnlich lässt du dich fallen, bis du friedlich in Alberts Armen einschläfst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Im Hintergrund pulsieren die beiden Splitter.</p>"
      }
     ],
     "next": [
      {
       "title": "Der Traum",
       "chapterId": "4",
       "sectionId": "036"
      }
     ]
    },
    {
     "id": "035",
     "title": "Eine Decke bringen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du legst Albert behutsam eine Decke über seine Schultern, setzt dich neben ihn und schmiegst sanft deinen Kopf an seine&nbsp;Schulter. Dir gehen die letzten gemeinsamen Tage durch den Kopf. Eure erste Begegnung, die Reise nach <em>Snow Peaks</em>&nbsp;und auch der Moment in der Hütte, als du ihn das erste Mal ganz nah bei dir gespürt hast. Albert ist dir mehr als nur ans Herz gewachsen. Es ist ein so vertrautes Gefühl in seiner Nähe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr schaut lange auf die beiden leuchtenden Splitter, sagt aber kein Wort, bis Albert den Moment ergreift und dir einen Kuss gibt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du musst kurz an Judy denken, aber kannst deine Gefühle für ihn auch nicht mehr zurückhalten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr küsst euch leidenschaftlich und schaut euch lange Zeit in die Augen, bis du friedlich in Alberts Armen einschläfst und zu träumen beginnst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Im Hintergrund pulsieren die beiden Splitter.</p>"
      }
     ],
     "next": [
      {
       "title": "Der Traum",
       "chapterId": "4",
       "sectionId": "036"
      }
     ]
    },
    {
     "id": "036",
     "title": "Der Traum",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Pures Schwarz umhüllt dich wie ein Schleier in einem Raum der Unendlichkeit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst den Duft von Rosen wahr, als plötzlich vor dir eine riesige Rosenhecke emporragt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Tausende von hell leuchtenden Rosen. Die Sonne blitzt durch die einzelnen Rosenblätter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In der Ferne hörst du Stimmen. Stimmen, die erlöschen und sich schlagartig in Schreie verwandelt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein schwarzer Kreis schiebt sich über die Sonne. Alles wird schwarz.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Rosen beginnen ihre Blätter zu verlieren. Eine nach der anderen verwelkt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Verzerrte Schreie ertönen. Schreie, die nicht aufhören.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Ella, wach auf! Wach auf!«</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 4",
       "chapterId": "4",
       "sectionId": "037"
      }
     ]
    },
    {
     "id": "037",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><a class=\"skip-link\" href=\"javascript:document.documentElement.scrollTo({ top: 100000, behavior: 'smooth' })\">Überspringen</a></p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 2: Der Weg nach Snow Peaks</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine spannungsgeladene Reise beginnt, in welcher Ella, Albert und Snow ums nackte Überleben in der eisigen und gefährlichen Landschaft von White Valley kämpfen. Snow wird dabei stark verletzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 3: Der Hollow White</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Ella und Albert mit letzten Kräften das verschneite Städtchen Snow Peaks erreichen, treffen sie auf alte Freunde von Albert. Frank, einem pensionierten Arzt und seiner Frau Marie, die etwas außerhalb der Stadt in einem größeren Anwesen leben.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise erliegt Snow an seinen Wunden. Gedanken plagen Ella. Hätte Snow gerettet werden können? Mit diesem ungewissen Gefühl setzt sie ihre Suche fort.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow kann in letzter Sekunde von Frank gerettet werden. Albert und Ella sind mit einem großen Schrecken davongekommen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Am ersten Tag in der Stadt lüftet Ella viele Geheimnisse rund um Snow Peaks und deren Einwohner. So erfährt sie vom sagenumwobenen Geschehnis des Hollow White, einer Art Naturphänomen vor über 70 Jahren in der Vergangenheit, bei welchem Bewohner von Snow Peaks spurlos verschwunden sind. Seitdem ist die Stadt in Alarmbereitschaft und es gibt immer wieder Einzelfälle des Verschwindens.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 4: Die Verschwundenen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella trifft auf Alberts Zwillingsschwester Patricia. Die beiden Geschwister offenbaren ihr, dass sie selbst zu den Verschwundenen des Hollow White gehören und als Kinder ganze 40 Jahre später in der Zeit aufgewacht sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Um weiter der Spur zu Hannah zu folgen, besucht Patricia mit Ella das Observatorium, einen Ort, an dem die sogenannten Splitter aufbewahrt werden. Mysteriöse Steine, die an den Plätzen der Verschwundenen gefunden wurden und für die Verbliebenen zum Gedenken aufbewahrt werden. So zeigt Patricia, ihren und Alberts Splitter, der dort schon lange Zeit aufbewahrt wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz der neuen Erkenntnisse tappt Ella auf der Suche nach Hannah weiter im Dunkeln, bis sie eines Nachts in ihrem Tonbandgerät zufällig einen Splitter und daraufhin gemeinsam mit Albert den Splitter von seiner Frau Judy finden. Judy ist vor einigen Jahren in einer Nacht spurlos am Frozen Lake verschwunden. Albert hat sich nach diesem tragischen Verlust in die Wälder von White Valley trauernd zurückgezogen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella und Albert kommen sich auf ihrer Reise immer näher und können ihre Gefühle zueinander nicht mehr verstecken. Als sie neben Albert einschläft, hat sie eine Vision in einem Traum. Ist sie selbst auch eine Verschwundene aus einer anderen Zeit?</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 5",
       "chapterId": "5",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "5",
   "title": "Die Flucht",
   "sections": [
    {
     "id": "001",
     "title": "60 Jahre später",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Sirenen heulen in der Ferne durch die kalte Mitternacht der dunklen Gassen von <em>Snow Peaks</em>. Kein Mensch ist auf den Straßen. In den Häusern ist es dunkel, nur vereinzelt flackern Kerzenlichter an den Fensterläden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zwei dunkle Schatten schleichen durch die düsteren Gassen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Warte&nbsp;<em>Cara</em>«, flüsterst du mit leiser Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»<em>Judy</em>,&nbsp;wir müssen uns beeilen. Wir dürfen keine Zeit verlieren, sonst finden sie uns«, antwortet Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr in eine kleine Seitengasse einbiegt, hält dich Cara am Arm fest. »Achtung, Judy!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Aufglühen einer Zigarette zeichnet sich einige Meter weit entfernt in der Dunkelheit ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zwei Wachen laufen durch die vernebelten Gassen ihre Patrouille. Einer biegt in eine dunkle Seitengasse ab. Der andere bleibt stehen, zieht kurz an seiner Zigarette und bläst den warmen Rauch in die kühle Nachtluft. Es fängt an zu regnen, große Regentropfen prasseln mit lautem Geplätscher auf die umliegenden Dächer und Tonnen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Soldat hustet und stellt sich unter einen vom Regen geschützten Seiteneingang. Er versperrt euch den weiteren Durchgang durch die Gasse.</p>"
      }
     ],
     "next": [
      {
       "title": "Vorbei­schleichen",
       "chapterId": "5",
       "sectionId": "002"
      },
      {
       "title": "Ablenken",
       "chapterId": "5",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "002",
     "title": "Vorbeischleichen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Leise schleichst du dich im Schutz der Dunkelheit an den alten massiven Tonnen vorbei. Schritt für Schritt, doch plötzlich klirrt es laut unter deinen Füßen und das Geräusch einer von dir weg rollenden Flasche ist nicht zu überhören.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du zuckst zusammen und bleibst wie gelähmt stehen. Der Wachmann lässt ruckartig die Zigarette fallen, zieht seine Waffe und nähert sich mit raschen Schritten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Keine Bewegung! Hände langsam nach oben!«</p>"
      }
     ],
     "next": [
      {
       "title": "Wache beruhigen",
       "chapterId": "5",
       "sectionId": "004"
      },
      {
       "title": "Hände hoch",
       "chapterId": "5",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "003",
     "title": "Ablenken",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du nimmst eine der herumstehenden Flaschen vom Boden und wirft diese mit aller Kraft auf die gegenüberliegenden Tonnen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das laute Zerbrechen des Glases ist im Geprassel des Regens nicht zu überhören.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Wache lässt ruckartig die Zigarette fallen und zieht blitzschnell seine Waffe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr nutzt den Moment, lauft lautlos an den großen Tonnen vorbei und biegt unbemerkt in die nächste Seitengasse ein. Geschützt von der Dunkelheit durchquert ihr die engen Straßen.</p>"
      }
     ],
     "next": [
      {
       "title": "Entkommen",
       "chapterId": "5",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "004",
     "title": "Wache beruhigen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Es vergehen Sekunden. Du zitterst am ganzen Körper. Die Waffe des Wachmanns ist direkt auf deine Brust gerichtet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Bitte, nicht schießen. Ich bin unbewaffnet!«, sagst du eingeschüchtert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Langsam gehst du in die Knie.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es ist Ausgangssperre um die Zeit!«, entgegnet der Wachmann mit drohender Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit erhobenen Armen ziehst du vorsichtig etwas von deinem rechten Ringfinger.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In den Augen des Wachmanns funkelt die Gier.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Bitte, lassen Sie mich gehen«, erwiderst du flehend.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Wache hält weiterhin die Waffe auf dich und nimmt langsam mit der linken Hand den goldenen Ring aus deiner Hand und packt diesen in seine Uniform.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Verschwinde, bevor ich es mir anders überlege!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du stehst langsam auf und läufst mit panischer Angst in die nächste Seitengasse.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara kommt dir entgegen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy, ist alles in Ordnung? Ich habe mir schon Sorgen gemacht. Was hat so lange gedauert?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Lass uns weiter und keine Zeit verlieren«, flüsterst du kurz angebunden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara schaut besorgt, nimmt dich an der Hand. Zusammen durchquert ihr weiter die kleinen engen Seitengassen.</p>"
      }
     ],
     "next": [
      {
       "title": "Entkommen",
       "chapterId": "5",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "005",
     "title": "Hände hoch",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Bitte nicht schießen … bitte …«, flehst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Wachmann ist jeden Moment bereit, die Waffe abzufeuern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es ist Ausgangssperre um die Zeit«, entgegnet er mit befehlender Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es vergehen Sekunden. Du zitterst am ganzen Körper. Die Waffe des Wachmanns ist direkt auf deine Brust gerichtet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich geht nur ein paar Meter neben ihm eine Scheibe zu Bruch. Der Wachmann dreht sich hektisch zur Seite.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein flinker Schatten&nbsp;entwaffnet ihn, ein zweiter gezielter Hieb lässt ihn zu Boden gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara lässt die Holzlatte fallen. »Der ist erst einmal bedient. Das war knapp. Los, schnell weg von hier!«</p>"
      }
     ],
     "next": [
      {
       "title": "Entkommen",
       "chapterId": "5",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "006",
     "title": "Entkommen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als ihr tiefer in die Gasse kommt, wird es dunkler. Keine Menschenseele außerhalb des Sicherheitsbereichs am Stadtrand.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einigen Minuten steht ihr vor der riesigen Stadtmauer. Überall befinden sich Propagandaplakate überschmiert von kreisförmigen Zeichnungen mit weißer Farbe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara schaut sich in alle Richtungen um.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»So, ab hier müssen wir durch die Kanalisation«, sagt&nbsp;sie und öffnet leise den dampfenden Kanaldeckel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der beißende Gestank steigt dir sofort in die Nase und die dunkle Kanalisation wirkt nicht gerade einladend. Das kalte, schmelzende Eiswasser prasselt an den Wänden von oben nur so herunter. Es dampft. Ihr lauft über Gitter und müsst über einige Schächte klettern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir haben noch ein Stück Weg vor uns«, sagt Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr durch die Kloake stapft, sprichst du zu Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Meinst du, sie kann uns wirklich helfen?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy, ich bin mir sicher, sie ist unsere einzige Chance aus diesem Alptraum zu entkommen, vertrau mir«, ermutigt dich&nbsp;Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr nach einiger Zeit am Ende der verwinkelten Schächte ankommt, steht ihr vor einer großen verrosteten Stahltür. »Das muss es sein«, sagt Cara und klopft mehrmals an die massive Tür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kein Lebenszeichen. Ihr wartet eine Zeit lang.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Beim erneuten Klopfen hört ihr hinter der Tür Geräusch und ein kleines Sichtfenster schiebt sich auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zwei leuchtende Augen blitzen durch den kleinen schmalen Schlitz.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das Kennwort?«</p>"
      }
     ],
     "next": [
      {
       "title": "»Roter Riese!«",
       "chapterId": "5",
       "sectionId": "007"
      },
      {
       "title": "»?«",
       "chapterId": "5",
       "sectionId": "008"
      }
     ]
    },
    {
     "id": "007",
     "title": "»Roter Riese!«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Roter Riese!«, antwortest du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Sichtschlitz geht zu, ein kurzer Moment vergeht und die schwere Stahltür wird langsam und leise geöffnet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara schaut dich erstaunt an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Josef hat mir auf unserer Flucht vom <em>Roten Riesen</em>&nbsp;erzählt. Er meinte, das sei wichtig bei unserer Ankunft«, sagst du und zuckst mit den Schultern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Kommt schon! Sie wartet bereits auf euch!«, sagt der große Mann, der von der Dunkelheit umschlungen wird.</p>"
      }
     ],
     "next": [
      {
       "title": "Der Widerstand",
       "chapterId": "5",
       "sectionId": "009"
      }
     ]
    },
    {
     "id": "008",
     "title": "»?«",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Sichtschlitz geht wieder zu. Nichts tut sich. Verzweifelt schaust du zu Cara. Als sich eure hilflosen Blicke treffen, geht plötzlich die schwere Metalltür auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Lassen wir diese Formalitäten. Kommt schon! Sie wartet bereits auf euch«, sagt der große Mann, der von der Dunkelheit umschlungen wird.</p>"
      }
     ],
     "next": [
      {
       "title": "Der Widerstand",
       "chapterId": "5",
       "sectionId": "009"
      }
     ]
    },
    {
     "id": "009",
     "title": "Der Widerstand",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die massive Stahltür fällt schwer hinter euch zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr folgt einem engen Gang, entlang dem hallenden Echo eurer Schritte.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Unbekannte muss sich sichtlich bücken, damit er mit seinem Kopf nicht an die tiefe Decke anstößt. Obwohl er in eurem Alter zu sein scheint, wirkt er mit seiner strengen und kühlen Art älter und bedrohlich. Ihr sagt nichts. Nach einigen Metern geht es paar Treppenstufen hinauf und ihr betretet einen Keller mit vielen Büchern und alten antiken Möbel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kerzen brennen an einem gedeckten Tisch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Willkommen«, begrüßt euch eine ältere Dame, die im Schatten des Kerzenlichts am Ende des großen Tisches sitzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Bitte, setzt euch.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der große Mann reicht euch zwei warme Decken und stellt sich etwas abseits hinter die Dame.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Danke <em>Charlie</em>«, sagt sie herzlich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr setzt euch direkt an das andere Ende des Tisches. Die Frau bietet euch Tee an, welchen ihr&nbsp;euch aus einer edel verzierten Kanne in zwei vor euch stehende Tassen gießt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es dampft in der kalten und dunklen Kellerluft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du mit langsamen Schlucken trinkst, vergisst du kurz alles um dich herum: dein Misstrauen, die Erschöpfung und deine Angst, die seit eurer Flucht ständige Begleiter sind. Du erinnerst dich nicht&nbsp;mehr, wann du das letzte Mal warmen Tee getrunken hast.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Frau beginnt zu sprechen. Sie hat eine sehr angenehme warme Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich bin <em>Rose</em>. Wer seid ihr und wer hat euch zu mir geschickt?«</p>"
      }
     ],
     "next": [
      {
       "title": "Cara antwortet",
       "chapterId": "5",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "010",
     "title": "Cara antwortet",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Mein Name ist Cara und das ist Judy. Wir kommen aus dem westlichen <em>Lager der Erschienenen</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Josef</em>, so wurde er zumindest von den Gefangenen im Lager genannt.&nbsp;Von ihm haben wir das erste Mal von eurer <em>Gegenbewegung</em> gehört und er hat uns geholfen, aus dem Westlager zu entkommen. Leider hat er es selbst nicht geschafft. Das letzte war euer Aufenthaltsort, den er uns mitgeben konnte, bevor er bei der Flucht vom <em>Schwarzen Kreis</em>&nbsp;gefangen wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Verhältnisse im Lager haben sich in den letzten Monaten extrem verschlechtert. Die Menschen leiden sehr darunter. Der <em>Schwarze Kreis</em> hat alles unter seiner Kontrolle. Die Lebensmittelrationen wurden gekürzt, immer mehr von uns erkrankten und verendeten elendig. Es sind auch vereinzelt Menschen verschwunden und nicht mehr aufgetaucht.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose schaut nachdenklich zur Seite und betrachtet ein Gemälde an der Wand. Durch das Kerzenlicht erkennt ihr schwach eine Frau und einen Mann, elegant gekleidet vor einer Rosenhecke.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beginnt zu sprechen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es ist schon lange her, noch vor dem Tod meines Mannes <em>Pete</em>. Eine Zeit ohne Regime. Als <em>Snow Peaks</em>&nbsp;sich von der Vergangenheit langsam erholte und florierte. Dennoch hat es der <em>Schwarze Kreis</em> geschafft, das alles zu zerstören. Die Angst hat alles verändert.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose schaut zu euch und fragt nach eurer Person.</p>"
      }
     ],
     "next": [
      {
       "title": "Cara sprechen lassen",
       "chapterId": "5",
       "sectionId": "012"
      },
      {
       "title": "Selbst antworten",
       "chapterId": "5",
       "sectionId": "013"
      }
     ]
    },
    {
     "id": "012",
     "title": "Cara sprechen lassen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Cara spricht zu Rose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir beide sind <em>Erschienene des Hollow White</em>.&nbsp;So wie bei den meisten anderen Erschienenen&nbsp;konnten wir uns nach dem Erwachen an nichts erinnern. Es war nicht schwer für den <em>Schwarzen Kreis</em>&nbsp;uns zu finden und ins westliche Lager außerhalb von <em>Snow Peaks</em>&nbsp;zu bringen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Jetzt sind wir seit zwei Tagen auf der Flucht und werden vom <em>Schwarzen Kreis</em>&nbsp;gesucht, haben seither nichts gegessen und nicht geschlafen. Ich will nicht wissen, was mit uns geschieht, wenn sie uns finden. Wir haben unser Leben aufs Spiel gesetzt. Judy hat sogar ihr ungeborenes Kind in der Zeit dort verloren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr seid ehrlich gesagt unsere letzte Hoffnung. Josef hat uns versichert, dass ihr uns helfen könnt.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beginnt zu sprechen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es tut mir sehr leid, was euch widerfahren ist. Ich habe unsere <em>Gegenbewegung</em>&nbsp;vor etlichen Jahren gegründet. Wir kämpfen für alles, was der <em>Schwarze Kreis</em> in den letzten Jahrzehnten zerstört hat. Deren Ideale und blinder Fanatismus sind das Abscheulichste, was der&nbsp;Menschheit in dem letzten Jahrhundert passieren konnte. Erschreckend, wie schnell das alles ging. Wie Hunderte von Menschen, die hier plötzlich erschienen sind, behandelt wurden. Jeder auf diesem Planeten hat seinen Platz und eine Heimat verdient! Egal in welcher Zeit«.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust voller Hoffnung zu Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose fährt fort.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir haben mittlerweile eine wachsende Untergrundorganisation aufgebaut, wir werden immer mehr und suchen weiter Anhänger, um unser Untergrundnetzwerk zu verstärken. Allerdings&nbsp;müssen wir aufpassen. Wir leben in einer Zeit, in der Korruption und Verrat keine Seltenheit ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bitte folgt mir.«</p>"
      }
     ],
     "next": [
      {
       "title": "Rose folgen",
       "chapterId": "5",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "013",
     "title": "Selbst antworten",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du atmest tief durch und beginnst zu sprechen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Cara und ich sind <em>Erschienene des Hollow White</em>.&nbsp;So wie alle anderen Erschienenen sind auch wir hier an jenem Tag erwacht und konnten uns an nichts erinnern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es ist schon so lange her, doch ich werde es nie vergessen. Es war furchtbar.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schluckst und sprichst weiter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Nachdem sie mich gefunden haben, hat mich der <em>Schwarze Kreis</em>&nbsp;direkt ins westliche Lager gebracht, wo ich nach wenigen Wochen sehr krank geworden bin. Zum Glück war Cara bei mir, sonst hätte ich es wahrscheinlich nicht geschafft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei den Untersuchungen war mein Zustand bereits kritisch und es kam heraus, dass ich schwanger war. Ich wurde sofort ins Krankenhaus von <em>Snow Peaks</em>&nbsp;verlegt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Viele Monate müssen dort vergangenen sein, ich kann mich an diese Zeit kaum erinnern. Ich wurde sofort unter starke Medikamente gesetzt und war lange Zeit nicht bei Bewusstsein.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hältst kurz inne, schwere Tränen laufen deine Wangen hinunter und du fängst an zu weinen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich habe nicht einmal mitbekommen, wie ich mein Kind bei der Geburt verloren&nbsp;habe …«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara nimmt dich tröstend in die Arme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie spricht zu Rose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ihr seid unsere einzige Hoffnung! Wir werden vom <em>Schwarzen Kreis</em>&nbsp;gesucht. Den Ausbruch aus dem Lager würden wir mit unserem Leben bezahlen, sollten sie uns erwischen. Wir können nicht mehr zurück. Josef hat uns versichert, dass ihr uns helfen könnt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beginnt zu sprechen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy, das mit deinem Kind und was euch widerfahren ist, tut mir unendlich leid. Ich habe unsere <em>Gegenbewegung</em>&nbsp;vor etlichen Jahren gegründet. Wir kämpfen für alles, was der <em>Schwarze Kreis</em>&nbsp;in den letzten Jahrzehnten zerstört hat. Deren Ideale und blinder Fanatismus sind das Abscheulichste, was dem Menschen in dem letzten Jahrhundert passieren konnte. Erschreckend, wie schnell das alles ging. Wie Hunderte von Menschen, die hier plötzlich erschienen sind, behandelt wurden. Jeder auf diesem Planeten hat seinen Platz und eine Heimat verdient! Egal in welcher Zeit«.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust voller Hoffnung, aber auch erstaunt zu Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose fährt fort.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir haben mittlerweile eine wachsende Untergrundorganisation aufgebaut, wir werden immer mehr und suchen weiter Anhänger, um unser Untergrundnetzwerk zu verstärken. Aber wir müssen aufpassen. Wir leben in einer Zeit, in der Korruption und Verrat keine Seltenheit ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Bitte folgt mir.«</p>"
      }
     ],
     "next": [
      {
       "title": "Rose folgen",
       "chapterId": "5",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "014",
     "title": "Rose folgen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ihr geht die dunkle Kellertreppe nach oben. Eine Geheimtür öffnet sich und ihr steht mitten in einem alten <em>Antiquariat</em>. Der Geruch von Papier liegt in der Luft. Etwas modrig. Über eine Hintertür im Innenhof gelangt ihr in eine mehrstöckige Wohnung oberhalb des <em>Antiquariats</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Im dritten Obergeschoss gibt es ein Zimmer, das frei ist. Ihr könnt vorerst hier bleiben, aber ihr müsst sehr vorsichtig sein und dürft das Haus nicht verlassen. Charlie wird auf euch aufpassen und euch in unseren Schutzkodex&nbsp;einweisen. Diesen müsst ihr strengstens einhalten! Jetzt kommt erst einmal in die Küche, ihr seid ja vollkommen ausgehungert.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dankbar schaust du zu Rose, die deinen Blick mit einer unbeschreiblichen Güte in ihren Augen erwidert und dir ein hoffnungsvolles Lächeln schenkt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdem ihr euch etwas gestärkt habt, macht ihr es euch in dem kleinen Zimmer im dritten Obergeschosse gemütlich. Ihr seid todmüde. Die ersten Tage holt ihr viel Schlaf nach. Leider habt ihr nicht viel Bewegungsspielraum in Roses Haus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr beschäftigt euch mit diversen Büchern aus Roses Bibliothek und werdet von Charlie in den Schutzkodex eingeführt. Neben den Leitsätzen zeigt euch Charlie wichtige Überlebensregeln, falls es ernst wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wochen vergehen und obwohl ein Tag dem anderen gleicht, bleibt die Angst. Die Angst vom <em>Schwarzen Kreis</em>&nbsp;entdeckt zu werden und den schweren Konsequenzen. Euch ist klar, dass euer Leben auf dem Spiel steht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du eines Morgens die Treppe in den zweiten Stock hinuntergehst, siehst du, wie Rose aus einem Zimmer kommt und es mit einem Schlüssel verschließt. Sie schaut sich vorsichtig um. Etwas verbirgt sie vor euch. Als sie deine Anwesenheit bemerkt, zuckt sie kurz zusammen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Guten Morgen, Judy. Du hast mir einen kleinen Schrecken eingejagt!&nbsp;Wie war deine Nacht?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Entschuldige Rose, ich wollte dich nicht erschrecken. Die Nacht war gut. Langsam gewöhne ich mich wieder daran, in einem echten Bett zu schlafen«, sagst du dankbar.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose schaut dich behutsam an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Komm mit nach unten in die Küche, ich habe Neuigkeiten für dich und Cara.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr unten das Wohnzimmer betretet, sitzt Charlie auf einem der Sessel und blättert in einem alten Buch. Er sieht nicht ganz so munter wie sonst aus. Hinter euch kommt Cara rein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Guten Morgen Charles«, grinst Cara. »Wie war dein freier Abend gestern? Kann es sein, dass du erst heute früh zurückgekommen bist?« Charlie schenkt Cara ein gequältes Lächeln und verlässt das Wohnzimmer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose setzt sich in ihren Sessel, als ihr Hauskater <em>Platon</em>&nbsp;aus der Küche träge zu gelaufen kommt&nbsp;und neben ihr auf dem Sitzpolster schnurrend Platz nimmt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose nimmt eine Schachtel vom Tisch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Für euch! Macht schon, schaut rein!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr öffnet sie vorsichtig.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zwei Fläschchen mit einer Art Tinte.</p>"
      },
      {
       "type": "addItem",
       "id": "ink"
      },
      {
       "type": "paragraph",
       "text": "<p>Fragend schaut ihr zu Rose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das ist spezielle Tinte, mit der ihr euch eine neue Identität und einen neuen Rang fälschen könnt. Es ist keine Garantie, dass ihr sicher durch die Straßen von <em>Snow Peaks</em>&nbsp;kommt, dennoch fliegt ihr nicht sofort auf oder werdet mit den Fahndungslisten verglichen. Charlie kann helfen, die Tinte auf&nbsp;eure Handflächen zu stechen. Achtet aber auch darauf, dass ihr euch optisch verändert und euch ein neues Erscheinungsbild verpasst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr seid bestimmt noch in den Fahndungsregistern&nbsp;gelistet. Bleibt bitte vorsichtig. Euch soll niemand erkennen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wenig später sitzt ihr im Badezimmer, als Charlie den letzten Stich der Linie auf deinem Handgelenk zieht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Erleichtert starrst du auf deine Haut, welche noch von den Stichen sehr gereizt und rot angeschwollen ist.&nbsp;Mehrere filigrane Linien bedecken nun eure Handinnenfläche.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Charlie packt die Ausrüstung zusammen und erklärt euch, dass die Schwellungen die nächsten Tage abklingen werden. Er verlässt das Badezimmer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr beide schaut in den Spiegel und diskutiert über eure Veränderung.</p>"
      }
     ],
     "next": [
      {
       "title": "Haare ab",
       "chapterId": "5",
       "sectionId": "015"
      },
      {
       "title": "Haare färben",
       "chapterId": "5",
       "sectionId": "016"
      }
     ]
    },
    {
     "id": "015",
     "title": "Haare ab",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdem ihr euch die Haare abgeschnitten habt, schaut ihr in den Spiegel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara hat sich komplett alle Haare abrasiert.&nbsp;Es ist ungewohnt, aber es steht ihr. Du hast einen kurzen Bob und die Haare dunkel gefärbt. Ihr seid auf den ersten Blick wirklich nicht wiederzuerkennen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr zurück ins Wohnzimmer kommt, pfeift euch Charlie hinterher.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Charles, du Charmeur!«, zwinkert ihm Cara frech zu.</p>"
      }
     ],
     "next": [
      {
       "title": "Stadtleben",
       "chapterId": "5",
       "sectionId": "016b"
      }
     ]
    },
    {
     "id": "016",
     "title": "Haare färben",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "state",
       "id": "haare",
       "modifier": "=1"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdem ihr euch die Haare gefärbt habt, schaut ihr in den Spiegel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara hat versucht, sich die Haare aufzuhellen. Dabei sind ihre Haare fast grau geworden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Deine Haare hingegen sind nun dunkler.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr zurück ins Wohnzimmer kommt, schaut euch Charlie schräg an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Was glotzt du so!«, fährt ihn Cara verunsichert an.</p>"
      }
     ],
     "next": [
      {
       "title": "Stadtleben",
       "chapterId": "5",
       "sectionId": "016b"
      }
     ]
    },
    {
     "id": "016b",
     "title": "Stadtleben",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Es vergehen einige Wochen. Vorsichtig mischt ihr euch ins Stadtleben in <em>Snow Peaks</em>, tätigt Einkäufe und erledigt kleinere Aufgaben für Rose, indem ihr einfache Kurier-Jobs übernehmt. Der Alltag bietet weitaus mehr Abwechslung als die Wochen davor, dennoch ist die Angst euer täglicher Begleiter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Stadt wimmelt nur so von Stadtwachen und Patrouillen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Überall hängen Propagandaplakate des <em>Schwarzen Kreis</em>&nbsp;und vereinzelt die Gesuchtenanzeigen, einige sogar mit hohen Summen an Kopfgeld.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Was ist das für ein Leben in <em>Snow Peaks</em>&nbsp;im Gegensatz zu den Zuständen in den Lagern, als ob die Menschen da draußen nicht existieren würden!«, sagt Cara wütend.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hörst nicht ganz aufmerksam zu und bist etwas abgelenkt. Der Anblick, der sich vor euch auftuenden Kuppel, zieht dich in ihren Bann.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Cara, hast du so was schon einmal gesehen«?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ja, da drin ist er. Josef hat mir davon erzählt, als wir noch im Lager waren. Der <em>Kalte Stern</em>,&nbsp;der den <em>Hollow White</em>&nbsp;erzeugt und uns in diese abartige Zeit katapultiert hat! Judy, hast du dir die Zukunft so vorgestellt?«, fragt Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Voller Wut ballt sie eine Faust und schlägt an eines der Propaganda-Plakate. Die Aufmerksamkeit der Sicherheitswache an der Kuppel ist sofort auf euch gerichtet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Was ist hier los! Identifizieren Sie sich, sofort!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nervös zieht ihr die Ärmel von euren Handflächen, um die bereits sauber und verheilten Linien vorzuzeigen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Soldat scannt mehrfach über die Linien und gleicht die darin erhaltenen Informationen mit seinem System ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bedrückende Ungewissheit, Stille.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einem kurzen Funkspruch scheint eure neue Identität durchzugehen.</p>"
      },
      {
       "type": "if",
       "condition": "STATE haare > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Dennoch schaut der Soldat skeptisch.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Dein Herz schlägt wie verrückt. Du bekommst vor Angst keinen einzigen Ton heraus.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Da seid ihr ja!«, ruft plötzlich Charlie, der überraschenderweise neben euch aus einer Nebengasse auftaucht. Er schiebt euch zur Seite und konfrontiert direkt den Soldaten. Ihr geht einige Schritte zurück. Aus kurzer Distanz bekommt ihr mit, wie er mit dem Wachmann diskutiert und diesem etwas unauffällig zusteckt.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Die Wache klopft ihm auf die Schulter und geht zurück Richtung Kuppel.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Charlie kommt mit hastigen Schritten direkt auf euch zu und zerrt euch etwas Abseits vom Geschehen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Kann man euch wirklich keine Minute allein lassen? Ihr könnt euch glücklich schätzen, dass ich den Wachmann kenne. Bei einem anderen wäre das heute nicht gut ausgegangen!«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Danke, Charlie«, sagt ihr mit demütiger Stimme.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE haare > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Das nächste Mal kommen Sie nicht so einfach davon«, droht der Soldat und verlässt das Geschehen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Nervös schaut ihr euch um und atmet tief durch. Das wäre fast schiefgegangen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Abends als ihr Zuhause ankommt, ist es dunkel und still. Rose ist wieder nicht da.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Seit Tagen ist sie unterwegs und wenn sie kurz das Haus betritt, verschwindet sie sofort für Stunden in ihrem geheimnisvollen Zimmer und verschließt hinter sich die Tür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es vergehen Tage, als du eines Abends allein in deinem Zimmer sitzt. Charlie hat seinen freien Tag, keine Spur von Rose und auch Cara ist unauffindbar. Es ist still in der Wohnung, bis du plötzlich aus den unteren Etagen etwas zu Bruch gehen hörst.</p>"
      }
     ],
     "next": [
      {
       "title": "Nachsehen",
       "chapterId": "5",
       "sectionId": "017"
      },
      {
       "title": "Verstecken",
       "chapterId": "5",
       "sectionId": "018"
      }
     ]
    },
    {
     "id": "017",
     "title": "Nachsehen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du gehst leise die Treppen hinunter und blickst vorsichtig ins Wohnzimmer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein zerbrochenes Gefäß liegt auf dem Boden und der knusprige Inhalt verstreut auf dem Teppich. Der Täter sitzt auch nicht weit weg von dir und schleckt sich sein Fell. Als du Platon, den gut genährten Kater von Rose so siehst, fällt dir ein Schlüssel an seinem Halsband auf.</p>"
      }
     ],
     "next": [
      {
       "title": "Schlüssel nehmen",
       "chapterId": "5",
       "sectionId": "019"
      },
      {
       "title": "Platon füttern",
       "chapterId": "5",
       "sectionId": "020"
      }
     ]
    },
    {
     "id": "018",
     "title": "Verstecken",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du dich in der hinteren Ecke des Wandschranks versteckst, bist du erst einmal still. Es ist nichts mehr zu hören, als sich plötzlich die Tür in dein Zimmer langsam öffnet. Das Blut gefriert in deinen Adern. Du hältst die Luft an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Schatten springt auf dein Bett.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Platon!&nbsp;Du hast mich zu Tode erschreckt!«.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Kater von Rose schleckt sich das Fell und schnurrt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Erleichtert setzt du dich neben ihn und kraulst ihm das Fell. Als du über seinen weichen Kopf streichelst, merkst du etwas an seinen Hals. Eine Art Halsband mit einem daran hängenden Schlüssel. Vorsichtig nimmst diesen ab.</p>"
      },
      {
       "type": "addItem",
       "id": "key-rose"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du ihn betrachtest, kommt dir sofort Roses verschlossenes Zimmer in den Sinn. Du schleichst die Treppe nach unten und stehst vor ihrer Tür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust dich noch einmal um und klopfst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nichts passiert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du den Schlüssel ins Schloss steckst, beginnt deine Hand zu zittern. Ist es richtig, in Roses Privatsphäre zu schnüffeln, denkst du dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz Zweifel drehst du den Schlüssel weiter nach rechts.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Schloss springt plötzlich auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Tür ist offen.</p>"
      }
     ],
     "next": [
      {
       "title": "Roses Zimmer betreten",
       "chapterId": "5",
       "sectionId": "021"
      }
     ]
    },
    {
     "id": "019",
     "title": "Schlüssel nehmen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du versuchst, den Schlüssel vorsichtig von seinem Hals zu nehmen, läuft Platon blitzschnell die Treppe hinauf. Der Kater ist flinker als gedacht. Schnell geht es die Treppenstufen nach ob, wo er es sich in deinem Zimmer im Bett gemütlich gemacht hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du&nbsp;setzt dich neben ihn, kraulst ihm das Fell und versuchst noch einmal vorsichtig, den Schlüssel&nbsp;von seinem Hals zu nehmen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Voilà, da ist der Schlüssel.</p>"
      },
      {
       "type": "addItem",
       "id": "key-rose"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du ihn betrachtest, kommt dir sofort Roses verschlossenes Zimmer in den Sinn. Du schleichst die Treppe nach unten und stehst vor ihrer Tür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust dich noch einmal um und klopfst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nichts passiert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du den Schlüssel ins Schloss steckst, beginnt deine Hand zu zittern. Ist es richtig, in Roses Privatsphäre zu schnüffeln, denkst du dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz Zweifel drehst du den Schlüssel weiter nach rechts.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Schloss springt plötzlich auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Tür ist offen.</p>"
      }
     ],
     "next": [
      {
       "title": "Roses Zimmer betreten",
       "chapterId": "5",
       "sectionId": "021"
      }
     ]
    },
    {
     "id": "020",
     "title": "Platon füttern",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Platon lässt es sich richtig schmecken und ist in dem Moment abgelenkt. Träge und mit vollem Bauch macht er es sich gemütlich und schläft ein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaffst es mit Leichtigkeit, den Schlüssel vorsichtig von seinem Hals zu nehmen. Das kann nur der Schlüssel zu Roses Zimmer sein. Du gehst die Treppe nach oben und stehst vor ihrer Tür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust dich noch einmal um und klopfst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nichts passiert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du den Schlüssel ins Schloss steckst, beginnt deine Hand zu zittern. Ist es richtig, in Roses Privatsphäre zu schnüffeln, denkst du dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz Zweifel drehst du den Schlüssel weiter nach rechts.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Schloss springt plötzlich auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Tür ist offen.</p>"
      }
     ],
     "next": [
      {
       "title": "Roses Zimmer betreten",
       "chapterId": "5",
       "sectionId": "021"
      }
     ]
    },
    {
     "id": "021",
     "title": "Roses Zimmer betreten",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du betrittst das abgedunkelte Zimmer. Bevor du eine Kerze anzündest, empfängt dich ein blumiger antiker Duft. Die ganzen Wände sind mit Büchern und Regalen bedeckt. Ein wunderschöner alter Holztisch mit einem riesigen Buch sticht dir ins Auge. Daneben eine Vase mit Rosen und ein Bild von ihrem Mann Pete.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das auf dem Tisch liegende Buch mit einem edlen Ledereinband zeigt eine Gravur und Wappen mit den Initialen H. W., was wahrscheinlich für <em>Hollow White</em>&nbsp;steht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dich plagt ein schlechtes Gewissen. Normalerweise ist es nicht deine Art, in privaten Angelegenheiten zu schnüffeln, aber deine Neugierde ist zu stark. Womit beschäftigt sich Rose die ganze Zeit und was hält sie versteckt?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Vorsichtig blätterst du durch das schwere Buch. Es scheint sich um eine Art Sammlung von verschiedenen historischen und privaten Aufzeichnungen zu handeln. Eine Art Tagebuch mit vielen Zeichnungen, Kurzgeschichten und Notizen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du das Buch wieder zuklappst, fällt ein loser Zettel auf den Boden. Eine Reihe von Zahlen ist darauf notiert. Es scheint eine Zahlenkombination zu sein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du fährst mit den Fingern über den Ledereinband des Buches und überlegst, wofür diese Zahlenkombination sein könnte.</p>"
      }
     ],
     "next": [
      {
       "title": "Zimmer absuchen",
       "chapterId": "5",
       "sectionId": "022"
      },
      {
       "title": "Keller absuchen",
       "chapterId": "5",
       "sectionId": "023"
      }
     ]
    },
    {
     "id": "022",
     "title": "Zimmer absuchen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du ziehst ein Buch nach dem anderen aus den Regalen und suchst nach etwas, was in Beziehung zu der Zahlenkombination stehen könnte. Aus manchen Ecken kommt dir der Staub nur so entgegen.&nbsp;Du hustest.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In einem weiteren Regal stößt du auf eine kleine Plattensammlung. Wahrscheinlich noch von Pete, denkst du dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sofort sticht dir das Plattencover von <em>Lord Neon</em>&nbsp;ins Auge. Was für eine Rarität, die Platte ist über 70 Jahre alt.</p>"
      },
      {
       "type": "addItem",
       "id": "lordneon2"
      },
      {
       "type": "paragraph",
       "text": "<p>Leider ist weiter nichts zu finden. Als du Roses Zimmer verlässt, schaust du dich ein letztes Mal um. Dir ist wichtig, dass sich alles im vorgefundenen Zustand befindet, bevor du die Tür wieder hinter dir abschließt. In der Küche angekommen setzt du dich und trinkst einen Schluck Wasser.</p>"
      }
     ],
     "next": [
      {
       "title": "Keller absuchen",
       "chapterId": "5",
       "sectionId": "023"
      }
     ]
    },
    {
     "id": "023",
     "title": "Keller absuchen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du so grübelst, erinnerst du dich an den Keller, wo ihr Rose das erste Mal begegnet seid. Du gehst hinunter und öffnest die Tür des <em>Antiquariats</em>. Es ist dunkel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du zündest eine Kerze an und betrittst den geheimen Kellerabgang, der sich versteckt hinter einem Regal befindet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Herz klopft. Du willst nicht erwischt werden und Roses gewonnenes Vertrauen aufs Spiel setzen. Trotzdem treibt dich die Neugierde Stufe für Stufe langsam die Treppe nach unten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich hörst du hinter dir ein klickendes Geräusch eines Mechanismus. Bevor du dich umsiehst, schließt sich die Geheimtür hinter dir.</p>"
      }
     ],
     "next": [
      {
       "title": "Rückzug",
       "chapterId": "5",
       "sectionId": "024"
      },
      {
       "title": "In den Keller",
       "chapterId": "5",
       "sectionId": "025"
      }
     ]
    },
    {
     "id": "024",
     "title": "Rückzug",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Mit aller Kraft versuchst du die schwere Stahltür zu öffnen. Keine Chance. Sie bewegt sich keinen Millimeter. Du tastest nach einem Schalter, findest aber keinen. Dir bleibst nichts anderes übrig, als einen anderen Weg zu suchen.</p>"
      }
     ],
     "next": [
      {
       "title": "In den Keller",
       "chapterId": "5",
       "sectionId": "025"
      }
     ]
    },
    {
     "id": "025",
     "title": "In den Keller",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Auf einer der Treppenstufen findest du eine Kerze und Streichhölzer. Du zündest diese an und gehst die Treppe bis ganz nach unten in den Keller. Der feuchte Geruch von alten Büchern sticht dir unangenehm in die Nase.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Erinnerungen an eure Flucht aus dem Lager und an den Tag, als ihr mit Rose hier zum ersten Mal saßt, gehen dir durch deine Gedanken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Suchend stehst du im kalten und dunklen Raum.</p>"
      }
     ],
     "next": [
      {
       "title": "Regale absuchen",
       "chapterId": "5",
       "sectionId": "026"
      },
      {
       "title": "Gemälde absuchen",
       "chapterId": "5",
       "sectionId": "027"
      }
     ]
    },
    {
     "id": "026",
     "title": "Regale absuchen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du findest zwischen einigen Büchern zur Stadt <em>Snow Peaks</em>&nbsp;einen Brief, welcher in einer Art Bürgerbuch eingelegt ist. Mit Handschrift geschrieben liest du folgende Zeilen:</p>"
      },
      {
       "type": "addItem",
       "id": "pete-letter"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Meine liebe Rose,</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>es ist einer der Tage, an denen man nach Hause kommt und dankbar ist, jemanden wie Dich gefunden zu haben. Der Mensch ist für mich unbegreiflich. Ich verstehe einfach nicht, wie es dazu kommen konnte, dass der Schwarze Kreis so viele unterstützende Stimmen im Kabinett auf sich vereinte.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ich habe immer an Snow Peaks geglaubt. Jetzt fühle ich mich fehl am Platz und hilflos. Ich werde mein Amt als Bürgermeister niederlegen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ich danke Dir für Deinen Beistand in dieser schwierigen Zeit.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>In ewiger Liebe</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Pete</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Unter seinem Namen ist eine Rose gezeichnet.</p>"
      }
     ],
     "next": [
      {
       "title": "Gemälde absuchen",
       "chapterId": "5",
       "sectionId": "027"
      }
     ]
    },
    {
     "id": "027",
     "title": "Gemälde absuchen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die Kerze, die du angezündet hast, ist schon über die Hälfte abgebrannt, als du vor dem Gemälde von Rose und Pete stehst. Es hängt leicht schief. Als du dieses genauer betrachtest, fällt dir dahinter etwas auf. Vorsichtig hebst du es ab und findest einen Tresor mit Zahlenschloss vor.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das muss es sein. Du nimmst die Zahlenkombination aus deiner Tasche und drehst die entsprechende Reihenfolge.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei der letzten Zahl hörst du ein feines Klicken und der Tresor öffnet sich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Einige Aufzeichnungen und antiker Schmuck befinden sich darin. Du breitest die Unterlagen auf dem alten Tisch vor dir aus und betrachtest die einzelnen Blätter mit dem Kerzenlicht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du erstarrst beim Anblick.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Fotos zeigen dich in der Zeit im westlichen Lager und im Krankenhaus während deiner Schwangerschaft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben den Bildern liegen ausgeschnittene Zeitungsartikel mit folgenden Schlagzeilen:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Frau mit ungeborenem Kind unter den Erschienenen«, »Zustand der Frau bei den Erschienenen kritisch«, »Frau der Erschienenen verliert Kind.«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du legst zitternd die Unterlagen zur Seite, Tränen laufen dir über die Wangen. Verzweifelt suchst du weiter.&nbsp;Im Augenwinkel fällt dir eine Art Patientenbericht auf, den du dir ansiehst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du kannst nicht glauben, was du liest:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p><em>Ausschnitte des Patientenberichtes von Judy:</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Bericht 1:</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Die Patientin wurde vom westlichen Lager zu uns eingeliefert.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Auf Befehl des Schwarzen Kreis ist die Behandlung der Frau auf höchster Sicherheit- und Geheimstufe durchzuführen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Der Gesundheitszustand ist kritisch.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Bericht 2:</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wir haben die Patientin in einen streng geheimen medizinischen Trakt verlegt. Ihr Zustand ist sehr kritisch.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wir müssen die Medikation erhöhen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Bericht 3:</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Der Zustand der Patientin und des Babys haben sich stabilisiert.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Bericht 4:</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Dem Kind geht es im Mutterleib gut. Die Patientin ist noch im Wachkoma. Die Geburt wird in einer Woche erwartet.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Bericht 5:</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Das Baby ist geboren und in die Obhut von Schwester Rose gegeben.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Bericht 6:</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Die Patientin ist wieder wach. Ihr Zustand akzeptabel. Dennoch nicht ansprechbar.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Bericht 7:</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Patientin wurde zurück ins westliche Lager der Erschienenen gebracht.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Informationen an Schwarzen Kreis übergeben.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du starrst geschockt auf die Berichte und liest immer wieder Bericht 5.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Mein Kind ist am Leben!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Den Mechanismus der verschlossenen Kellertür, die sich öffnet und die kommenden Schritte nimmst du gar nicht wahr, bis du Roses Stimme hörst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy! Was machst du hier unten?«.</p>"
      }
     ],
     "next": [
      {
       "title": "Resignieren",
       "chapterId": "5",
       "sectionId": "028"
      },
      {
       "title": "Rose bedrohen",
       "chapterId": "5",
       "sectionId": "029"
      }
     ]
    },
    {
     "id": "028",
     "title": "Resignieren",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Rose setzt sich neben dich und zündet eine zweite Kerze an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich wollte, dass du es von mir erfährst, Judy, das musst du mir glauben.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust weiterhin apathisch auf die vor dir liegenden Aufzeichnungen und Fotos.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dir wird schwindlig. Rose hilft dir, dich auf ein altes Sofa zu legen.</p>"
      }
     ],
     "next": [
      {
       "title": "Judys Kind",
       "chapterId": "5",
       "sectionId": "028b"
      }
     ]
    },
    {
     "id": "029",
     "title": "Rose bedrohen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du packst voller Wut und Verzweiflung Rose und stellst sie zur Rede.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy, ich bitte dich. Ich kann Dir alles erklären. Bitte beruhige dich, bitte …« Zitternd und neben der Spur stehst du vor Rose. Dir wird ganz schwindlig.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose hilft dir, dich auf ein altes Sofa zu legen.</p>"
      }
     ],
     "next": [
      {
       "title": "Judys Kind",
       "chapterId": "5",
       "sectionId": "028b"
      }
     ]
    },
    {
     "id": "028b",
     "title": "Judys Kind",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Rose reicht dir ein Glas Wasser. Als sich der Schwindel wieder legt, beginnt sie zu erzählen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich war Krankenschwester des <em>Snow Peaks Krankenhauses</em>. Nach Petes&nbsp;Tod habe ich mich versetzen lassen und bin auf die Neugeborenenstation gekommen. Die Geburt jedes einzelnen Kindes hat mir sehr viel Kraft in dieser schweren und einsamen Zeit gegeben. Als das Regime immer mehr an Macht und Einfluss gewann, hat sich alles geändert. Das Gesundheitssystem wurde nur noch gewissen Schichten von Menschen zugänglich gemacht. Einige von unseren Ärzten wurden zwar direkt in die Lager geschickt, aber die nötigen Ressourcen bei Weitem nicht abgedeckt. Da drin ist die Hölle auf Erden ausgebrochen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eines Tages bekamen wir eine Patientin aus dem Westlager eingeliefert. Als ich dich das erste Mal sah, warst du in einem sehr kritischen Zustand. Ein Wunder, dass du und dein Baby überlebt haben. Dein gesundheitlicher Zustand hat sich über die Wochen und Monate hin stabilisiert. Am Tag der Geburt war ich die verantwortliche Schwester und Hebamme, die deine Tochter <em>Hannah</em>&nbsp;zur Welt gebracht hat. Es war ein unglaublicher Moment. Doch der Moment der Freude und des Glücks hielt nicht lange an. Mir wurde befohlen, dein Kind aufzunehmen und du wurdest zurück ins Lager gebracht.</p>"
      }
     ],
     "next": [
      {
       "title": "»Wo ist mein Kind?«",
       "chapterId": "5",
       "sectionId": "030"
      },
      {
       "title": "Rose anschreien",
       "chapterId": "5",
       "sectionId": "031"
      }
     ]
    },
    {
     "id": "030",
     "title": "»Wo ist mein Kind?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Rose«, sagst du mit aufgelöster und verzweifelter Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wo ist mein Kind?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose nimmt dich in die Arme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy, ich weiß es nicht, ich weiß es leider wirklich nicht. Der <em>Schwarze Kreis</em>&nbsp;hat mir deine Hannah vor Jahren genommen. Es war furchtbar, als sie damals plötzlich mitten in der Nacht maskiert vor mir standen und sie mir gewaltvoll entrissen haben. Die Bilder gehen mir bis heute nicht mehr aus dem Kopf. Ich bin seither ununterbrochen auf der Suche nach ihr.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Charlie und Cara eilen die Treppe herunter und erblicken dich und die aufgelöste Rose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Verstreut liegen auf dem Boden die Zeitungsartikel und Aufzeichnungen über Judy.</p>"
      }
     ],
     "next": [
      {
       "title": "Caras Trost zulassen",
       "chapterId": "5",
       "sectionId": "032"
      },
      {
       "title": "Cara abweisen",
       "chapterId": "5",
       "sectionId": "033"
      }
     ]
    },
    {
     "id": "031",
     "title": "Rose anschreien",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wo ist sie, Rose? Bring mich sofort zu ihr.« Du packst Rose und reißt an ihrer Bluse. Verzweifelt flehst du sie an, während du auf deine Knie sinkst und dein Kopf kraftlos an ihr Bein lehnst. »Wo ist sie, Rose?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose nimmt dich in die Arme. »Ich weiß es nicht Judy, ich weiß es leider wirklich nicht. Der <em>Schwarze Kreis</em> hat mir deine Hannah vor Jahren genommen. Es war furchtbar, als sie damals plötzlich mitten in der Nacht maskiert vor mir standen und sie entführt haben. Die Bilder gehen mir bis heute nicht mehr aus dem Kopf. Ich bin seither ununterbrochen auf der Suche nach ihr«.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Charlie und Cara eilen die Treppe herunter und erblicken dich weinend in den Armen von Rose liegen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Verstreut liegen auf dem Boden die Zeitungsartikel und Aufzeichnungen über Judy.</p>"
      }
     ],
     "next": [
      {
       "title": "Caras Trost zulassen",
       "chapterId": "5",
       "sectionId": "032"
      },
      {
       "title": "Cara abweisen",
       "chapterId": "5",
       "sectionId": "033"
      }
     ]
    },
    {
     "id": "032",
     "title": "Caras Trost zulassen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara nimmt dich in ihre Arme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Warum hast du mir nie erzählt, dass mein Baby überlebt hat? Du wusstest von alledem …«, schluchzt du vorwurfsvoll.</p>"
      }
     ],
     "next": [
      {
       "title": "Cara erklären lassen",
       "chapterId": "5",
       "sectionId": "034"
      },
      {
       "title": "Wütend auf Cara sein",
       "chapterId": "5",
       "sectionId": "035"
      }
     ]
    },
    {
     "id": "033",
     "title": "Cara abweisen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Du wusstest von alledem … woher kommen die ganzen Aufzeichnungen von mir her?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara, ich habe dir vertraut. Du warst wie eine Schwester für mich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Warum hast du mir nie erzählt, dass mein Baby überlebt hat? Du wusstest, wie sehr ich darunter leide«, sagst du tief verletzt.</p>"
      }
     ],
     "next": [
      {
       "title": "Cara erklären lassen",
       "chapterId": "5",
       "sectionId": "034"
      },
      {
       "title": "Wütend auf Cara sein",
       "chapterId": "5",
       "sectionId": "035"
      }
     ]
    },
    {
     "id": "034",
     "title": "Cara erklären lassen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Es tut mir so unendlich leid, Judy«, erwidert Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich wurde damals vom <em>Schwarzen Kreis</em> gezwungen, dich zu beschatten. Mir wurde mit dem Tod gedroht. Mit Rose zusammen haben wir einen Weg gefunden, dass wir nun hier sind. Ich konnte dir nicht von Hannah erzählen, bitte versteh mich, wir haben das alles zum Schutz für dich und deine kleine Hannah getan.«</p>"
      }
     ],
     "next": [
      {
       "title": "Verständnis zeigen",
       "chapterId": "5",
       "sectionId": "036"
      },
      {
       "title": "Wütend auf Cara sein",
       "chapterId": "5",
       "sectionId": "035"
      }
     ]
    },
    {
     "id": "035",
     "title": "Wütend auf Cara sein",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du läufst die Treppen bis ganz nach oben in dein Zimmer und sperrst&nbsp;dich in deinem Zimmer ein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara ist aufgelöst und weint. »Lass sie, Cara. Gib ihr Zeit«, sagt Rose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Einige Tage vergehen und du gehst Rose, Charlie und Cara zunächst einmal aus dem Weg.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es gibt keine Sekunde, an der du nicht an Hannah denkst. Viele Jahre hattest du mit dieser schrecklichen Lüge gelebt. Doch Hannah lebt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eines Abends klopft es an die Zimmertür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist Rose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy, ich muss dir was zeigen. Es ist wichtig. Es geht um Hannah. Bitte zieh dich an.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose legt dir einige schwarze Sachen in deiner Größe hin. Eine warme Jacke, wasserfeste Schuhe und einen Rundschal.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir dürfen bei unserem kleinen Ausflug auf keinen Fall erkannt werden«, sagt sie.</p>"
      }
     ],
     "next": [
      {
       "title": "Mit Rose aufbrechen",
       "chapterId": "5",
       "sectionId": "037"
      }
     ]
    },
    {
     "id": "036",
     "title": "Verständnis zeigen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Wut geht in Trauer über, aber auch Dankbarkeit für die Unterstützung deiner Freunde. In Tränen liegen Cara und du euch in den Armen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du verstehst, weshalb Rose und Cara so gehandelt haben, aber deine Gefühle sind im Augenblick zu stark und überwältigen dich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du läufst die Treppen bis ganz nach oben in dein Zimmer und sperrst&nbsp;dich in deinem Zimmer ein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Einige Tage vergehen, die du ausschließlich in deinem Zimmer bist. Du versuchst, das alles zu verarbeiten. Rose, Charlie und Cara geben dir die Zeit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es gibt keine Sekunde, an der du nicht an Hannah denkst. Viele Jahre hattest du mit dieser schrecklichen Lüge gelebt. Doch Hannah lebt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es klopft eines Abends an die Zimmertür. Es ist Rose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy, ich muss dir was zeigen. Es ist wichtig. Es geht um Hannah. Bitte zieh dich an«.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose legt dir einige schwarze Sachen in deiner Größe hin. Eine warme Jacke, feste Schuhe und einen Rundschal.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir dürfen bei unserem kleinen Ausflug auf keinen Fall erkannt werden«, sagt sie.</p>"
      }
     ],
     "next": [
      {
       "title": "Mit Rose aufbrechen",
       "chapterId": "5",
       "sectionId": "037"
      }
     ]
    },
    {
     "id": "037",
     "title": "Mit Rose aufbrechen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ihr zieht euch warm an und verlasst spät abends Roses Wohnung durch den geheimen Keller in die Kanalisation.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine Weile lang wechselt ihr kein Wort. Dann bricht Rose das Schweigen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy, ich wollte immer nur das Beste für dein Kind und dich. Als&nbsp;der <em>Schwarze Kreis</em>&nbsp;mir Hannah damals wegnahm, ist in mir erneut eine Welt zusammengebrochen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Diese schreckliche Nacht werde ich nie vergessen, als die Anhänger des <em>Schwarzen Kreis</em>&nbsp;wie Schatten in meinem Schlafzimmer standen. Eine Frau in dunkler Kluft mit einer <em>roten Armbinde</em>&nbsp;hat mich mit einer Waffe bedroht, während die anderen zu Hannah sind. Ich bin in Panik geraten und habe versucht, mich mit einem Kerzenständer zur Wehr zu setzen. Ich hatte keine Chance&nbsp;und wurde mit einem gezielten Schuss betäubt. Mir wurde sofort schwarz vor Augen.&nbsp;Als ich am nächsten Tag wieder zu mir kam, war es totenstill im ganzen Haus. Hannah war weg.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dieser schlimme Moment war der Wendepunkt, an dem ich mir geschworen habe, mit all meiner Kraft gegen dieses Geschwür, dieses unmenschliche System anzukämpfen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose steht vor einer Leiter, die nach oben führt. Als ihr den Schacht hinaufklettert und den Kanaldeckel anhebt,&nbsp;hilft dir Charlie, der bereits oben in einem Wasserhäuschen auf euch wartet. »Gerade ist es ruhig, aber passt auf und seid vorsichtig«, sagt er leise.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr zieht euch die Kapuzen der Jacken über den Kopf und den Rundschal über euer Gesicht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr das Häuschen verlasst, bemerkst du, dass ihr euch mitten in einem der Gärten der Kuppel beim <em>Kalten Stern</em>&nbsp;befindet. Es ist stockdunkel. Als ihr einige Schritte durch die finsteren Gärten geht, fallen dir sofort die Dornenranken auf. Es muss hier einmal ein blühender Garten gewesen sein. Leider sind davon nur noch struppiges Geäst und Dornen übrig. Leise verlasst ihr die Gärten über ein kleines Tor und nähert euch dem Zentrum der Kuppel des <em>Kalten Sterns</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beginnt leise zu dir zu sprechen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Nun ist der <em>Hollow White</em>&nbsp;schon 130 Jahre her und immer noch tauchen Menschen auf, so wie du, als du vor einigen Jahren hier erschienen bist. Ich werde diesen Tag nie vergessen, als plötzlich die Lager außerhalb der Stadt errichtet wurden. Es war schrecklich, die ganzen verlorenen Menschen ohne jegliche Erinnerungen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bis heute ist der&nbsp;<em>Schwarze Kreis</em>&nbsp;besessen davon, dieses Geheimnis zu lüften. Ist es das wirklich wert, dafür unsere Menschlichkeit aufzugeben?«, sagt Rose in einem verbitterten, verletzten Ton.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr steht vor dem massiven, in die Höhe ragenden&nbsp;<em>Kalten Stern</em>. In der Dunkelheit zwischen dem Geäst ist nicht viel zu sehen. Trotzdem bist du von diesem Anblick wie hypnotisiert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Deine Hannah wurde nach unseren Informationsquellen vor wenigen Tagen hier gesehen. Wir müssen vorsichtig die Umgebung absuchen«.</p>"
      }
     ],
     "next": [
      {
       "title": "Westbereich absuchen",
       "chapterId": "5",
       "sectionId": "038"
      },
      {
       "title": "Nordbereich absuchen",
       "chapterId": "5",
       "sectionId": "039"
      }
     ]
    },
    {
     "id": "038",
     "title": "Westbereich absuchen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ihr sucht vorsichtig den westlichen Bereich der <em>Kuppel</em> ab, aber keine Spur. Der komplette Bereich ist mit einem riesigen&nbsp;Zaun eingegrenzt. In der Dunkelheit findet ihr keinen Durchgang. Ihr geht ein Stück direkt am <em>Kalten Stern</em>&nbsp;entlang.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>So nah warst du dem <em>Kalten Stern</em>&nbsp;noch nie. Aufgeregt legst du deine Hand auf den massiven Stein, während du mit Rose überlegst, was ihr als Nächstes tun könntet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Doch du ziehst schnell erschrocken deine Hand wieder zurück.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Laute Sirenen ertönen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In der <em>Kuppel</em> geht der Alarm an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose zerrt an dir. »Schnell Judy, sie haben uns entdeckt, wir müssen sofort weg hier.«</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 5",
       "chapterId": "5",
       "sectionId": "040"
      }
     ]
    },
    {
     "id": "039",
     "title": "Nordbereich absuchen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ihr sucht den nördlichen Bereich der <em>Kuppel</em> ab und sieht, wie ein auffälliges Militärfahrzeug vor einer riesigen Säule steht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir müssen vorsichtig sein, die Soldaten des&nbsp;<em>Schwarzen Kreis</em>&nbsp;sind bewaffnet und patrouillieren hier in regelmäßigen Abständen«, flüstert Rose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aus kurzer Entfernung schaut ihr auf das säulenartige Gemäuer. Es scheint eine Art Aufzug zu sein, welcher nach oben und unten führt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>So nah warst du dem <em>Kalten Stern</em>&nbsp;noch nie. Aufgeregt legst du deine Hand auf den massiven Stein, während du mit Rose überlegst, was ihr als Nächstes tun könntet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich ertönen laute Sirenen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ziehst erschrocken deine Hand zurück.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In der <em>Kuppel</em> geht der Alarm an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose zerrt an dir. »Schnell Judy, sie haben uns entdeckt, wir müssen sofort weg hier.«</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 5",
       "chapterId": "5",
       "sectionId": "040"
      }
     ]
    },
    {
     "id": "040",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><a class=\"skip-link\" href=\"javascript:document.documentElement.scrollTo({ top: 100000, behavior: 'smooth' })\">Überspringen</a></p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 2: Der Weg nach Snow Peaks</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine spannungsgeladene Reise beginnt, in welcher Ella, Albert und Snow ums nackte Überleben in der eisigen und gefährlichen Landschaft von White Valley kämpfen. Snow wird dabei stark verletzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 3: Der Hollow White</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Ella und Albert mit letzten Kräften das verschneite Städtchen Snow Peaks erreichen, treffen sie auf alte Freunde von Albert. Frank, einem pensionierten Arzt und seiner Frau Marie, die etwas außerhalb der Stadt in einem größeren Anwesen leben.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise erliegt Snow an seinen Wunden. Gedanken plagen Ella. Hätte Snow gerettet werden können? Mit diesem ungewissen Gefühl setzt sie ihre Suche fort.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow kann in letzter Sekunde von Frank gerettet werden. Albert und Ella sind mit einem großen Schrecken davongekommen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Am ersten Tag in der Stadt lüftet Ella viele Geheimnisse rund um Snow Peaks und deren Einwohner. So erfährt sie vom sagenumwobenen Geschehnis des Hollow White, einer Art Naturphänomen vor über 70 Jahren in der Vergangenheit, bei welchem Bewohner von Snow Peaks spurlos verschwunden sind. Seitdem ist die Stadt in Alarmbereitschaft und es gibt immer wieder Einzelfälle des Verschwindens.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 4: Die Verschwundenen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella trifft auf Alberts Zwillingsschwester Patricia. Die beiden Geschwister offenbaren ihr, dass sie selbst zu den Verschwundenen des Hollow White gehören und als Kinder ganze 40 Jahre später in der Zeit aufgewacht sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Um weiter der Spur zu Hannah zu folgen, besucht Patricia mit Ella das Observatorium, einen Ort, an dem die sogenannten Splitter aufbewahrt werden. Mysteriöse Steine, die an den Plätzen der Verschwundenen gefunden wurden und für die Verbliebenen zum Gedenken aufbewahrt werden. So zeigt Patricia, ihren und Alberts Splitter, der dort schon lange Zeit aufbewahrt wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz der neuen Erkenntnisse tappt Ella auf der Suche nach Hannah weiter im Dunkeln, bis sie eines Nachts in ihrem Tonbandgerät zufällig einen Splitter und daraufhin gemeinsam mit Albert den Splitter von seiner Frau Judy finden. Judy ist vor einigen Jahren in einer Nacht spurlos am Frozen Lake verschwunden. Albert hat sich nach diesem tragischen Verlust in die Wälder von White Valley trauernd zurückgezogen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella und Albert kommen sich auf ihrer Reise immer näher und können ihre Gefühle zueinander nicht mehr verstecken. Als sie neben Albert einschläft, hat sie eine Vision in einem Traum. Ist sie selbst auch eine Verschwundene aus einer anderen Zeit?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 5: Die Flucht</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir springen in der Geschichte ganze 60 Jahre in die Zukunft. Dunkle Zeiten herrschen in Snow Peaks. Der Schwarze Kreis, ein grausames Regime, ist an der Macht, kontrolliert das System und unterdrückt die Bevölkerung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir begleiten Judy, die nach ihrem Verschwinden in Snow Peaks in dieser Zeit aufgewacht ist. Seit ihrem Erscheinen wird sie neben vielen anderen Erschienenen in einem der außerhalb liegenden Lagern gefangen gehalten. Zusammen mit ihrer Freundin Cara gelingt ihr eines Tages die Flucht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die beiden treffen auf die Widerstandsgruppe, eine Bewegung, die seit Jahren aus dem Untergrund gegen den Schwarzen Kreis kämpft. Rose, die Gründerin des Widerstands, gebietet Judy und Cara Unterschlupf, doch sie verheimlicht etwas. So findet Judy eines Tages heraus, dass Rose unter dem drohenden Befehl des Schwarzen Kreises ihr bereits als Krankenschwester begegnet ist und ihre für tot geglaubte Tochter Hannah bei der Geburt genommen hat. Judys Tochter Hannah lebt, wurde aber vor einigen Jahren vom Schwarzen Kreis der Obhut von Rose wieder entrissen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beteuert, dass sie unter drohendem Befehl des Schwarzen Kreises handelte und ihr aller Leben auf dem Spiel stand. So zeigt sie Judy eines Nachts ein Schlupfloch zur streng bewachten Kuppel, wo Hannah das letzte Mal gesehen wurde.</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 6",
       "chapterId": "6",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "6",
   "title": "Die Höhle",
   "sections": [
    {
     "id": "001",
     "title": "Tief unterhalb der Erde am Kalten Stern",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du betrachtest die massive Spitze des <em>Kalten Sterns</em>, die sich durch die Decke einer tief liegenden Höhle bohrt. Ein orange-rötliches Licht flackert auf deinem weißen, glatten Schutzanzug und im Hintergrund blinken unterschiedliche Instrumente an einer ominösen Apparatur. Wasser läuft an einigen Wänden von der Decke hinunter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist nass und die Luft ist feucht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit deinen Stiefeln stehst du im seichten Wasser, auf dessen Oberfläche sich das Licht beeindruckend spiegelt. Die Spitze des <em>Kalten Sterns</em>&nbsp;pulsiert leuchtend und es summt leise nur wenige Meter vor dir. Vorsichtig steckst du etwas zurück in die Seitentasche deines Anzugs.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»<em>Georgy!</em>«, sagt eine Stimme hinter dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du drehst dich um und <em>Dean</em>, ein Mann in gleiche Montur, steht vor dir. Er nimmt seine Schutzmaske ab, wischt sich zittrig den Schweiß von der Stirn und atmet tief durch. Er wirkt nervös.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Dean, alles in Ordnung?«, fragst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dean schaut auf die blinkenden Lichter im Hintergrund.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Georgy, die Geräte reagieren zum Teil wieder … trotzdem habe ich ein sehr ungutes Gefühl bei der ganzen Sache.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wie lief es mit dem Splitter?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du wirfst einen Blick auf die Spitze des <em>Kalten Sterns</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich glaube,&nbsp;wir haben es hinbekommen. Ich konnte diesmal keine gravierenden&nbsp;Indifferenzen messen. Das Summen hört auf, sobald der Splitter wieder verdeckt wird. Die Verbindung scheint halbwegs intakt zu sein. Lass uns das Sicherheitssystem wieder aktivieren und die nächsten Schritte planen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dean schaut skeptisch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Georgy, es hat Wochen gedauert, alles zu rekonstruieren. Viele der zerstörten Instrumente sind nicht mehr richtig funktionsfähig. Unser Vorgehen ist riskant«, sagt er mit zweifelnder Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich weiß, aber wir müssen diesen letzten Versuch mit der uns noch vorhandenen Apparatur wagen. Du und ich, wir beide sind es Ella schuldig, das zu beenden, was wir angefangen haben. Sonst wäre alles umsonst gewesen. Wir bekommen es hin! Mit dem letzten roten Splitter in unserer Hand können wir womöglich alles rückgängig machen«, antwortest du hoffnungsvoll.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dean schnauft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Mich quälen auch die Gedanken an Ellas Verschwinden, aber was garantiert uns, dass dann wieder alles beim Alten ist, wenn wir die Apparatur zum Laufen bekommen. Liegen wir mit unseren Hypothesen richtig oder rufen wir vielleicht sogar noch mehr kausale Katastrophen und weitere Opfer der Zeit hervor. Wir sollten uns genau überlegen, wofür wir den letzten Splitter einsetzen«, sagt Dean schwermütig.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust kritisch auf die sich vor dir erstreckende Spitze des <em>Kalten Sterns</em>, welche sich schräg horizontal zu euch neigt und die dahinterliegende, mit Notizen behängte, im Schatten liegende Steinwand verdeckt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Vor tausenden von Jahren hat der Mensch in Höhlen mit Kreide auf die Wände gekritzelt und die Evolution hat seinen Lauf genommen. Und jetzt stehen wir hier, kurz vor dem Ende der Menschheit, und ich kann es nicht fassen. Unser Planet und Sonnensystem stirbt!</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist unsere allerletzte Chance. Uns bleibt keine andere Wahl. Dean, möchtest du aufgeben und den Rest deines Lebens in einer Zelle verrotten und mit dem Wissen sterben, es nicht versucht zu haben?«, sagst du verzweifelt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Nein, natürlich nicht Georgy, aber das rechtfertigt und entschuldigt nicht im Geringsten unsere Entscheidungen, Fehleinschätzungen und Auswirkungen. Versetze dich in die Lage, was wir, du, Ella und ich hunderten von Menschen womöglich angetan haben. Wir sind nicht besser, als die da draußen!«</p>"
      }
     ],
     "next": [
      {
       "title": "»Höre mir zu, Dean«",
       "chapterId": "6",
       "sectionId": "002"
      },
      {
       "title": "»Konzen­triere dich, Dean!«",
       "chapterId": "6",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "002",
     "title": "»Höre mir zu, Dean«",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du legst deine Hände auf Deans Schultern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Dean, höre mir genau zu. Die Menschen hätten vor 130 Jahren beim Absturz des <em>Kalten Sterns</em>&nbsp;keine Sekunde überlebt. Wir haben die richtigen Entscheidungen getroffen. Für die Menschen und die Wissenschaft. Der <em>Hollow White</em> hätte sie alle von der einen auf die andere Sekunde ausgelöscht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es war die richtige Entscheidung, sie alle hier herzuholen.«</p>"
      }
     ],
     "next": [
      {
       "title": "»Konzen­triere dich, Dean!«",
       "chapterId": "6",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "003",
     "title": "»Konzentriere dich, Dean!«",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>»Konzentriere dich jetzt bitte wieder auf das Wesentliche unserer Arbeit. Wir können uns derartige Selbstzweifel und Schuldzuschreibungen wirklich nicht erlauben, gerade jetzt nicht. Reiß dich zusammen, ich brauche dich, Dean. Und zwar jetzt und das dringender denn je.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dean dreht dir den Rücken zu und starrt auf die Kreidezeichnungen. Viele Linien und Verknüpfungen sind auf die Wände gezeichnet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schau dir die Menschen draußen in den Lagern an, Georgy.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ist diese Hölle auf Erden dort die große Rettung vor dem <em>Hollow White</em>&nbsp;oder haben wir nicht jeden einzelnen in eine grausame Dystopie katapultiert?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Weder Erinnerungen, noch Identität und Heimat sind ihnen geblieben. Es ist grausam. Als wir mit den Tonbändern experimentiert und diese durch die Zeit geschickt haben, fand ich es noch amüsant. Aber Menschen, Georgy!</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ich will nicht wissen, was mit all denen passiert ist, die wir nicht hierherholen konnten. Sie sind verloren, für immer. Verlorene der Zeit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wer sind wir, dass wir über Leben und Tod bestimmen, Georgy? Vielleicht waren wir es sogar und haben mit unseren Experimenten die Verlorenen ausgelöscht. Wer gibt uns das Recht, sich in die Gesetze des Universums einzumischen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du setzt dich hin und atmest tief.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Glaubst du, es fällt mir leicht? Unter der Fuchtel dieses unmenschlichen Systems, wie eine Marionette gegen das Ende unserer Welt und für die Rettung unserer Spezies zu kämpfen? Es ist eine Frage der Zeit, bis sie uns nicht mehr brauchen und uns wie die armen Hunde in diese Käfige sperren. Wir haben getan, wozu uns der&nbsp;<em>Schwarze Kreis</em> gezwungen hat. Sonst wären wir alle nicht mehr am Leben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das letzte Mal. Bitte vertraue mir. Lass uns unsere Arbeit zu Ende bringen und zusammen das Gleichgewicht in der Zeit wiederherstellen. Sobald unsere Instrumente wieder laufen, können wir hier weg. Der <em>Schwarze Kreis</em>&nbsp;darf unsere Arbeit nicht in die Finger bekommen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Moment, ich höre was«, weicht Dean aus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Tür des Aufzugs, welcher in die tiefe Höhle führt, geht auf und zwei Soldaten betreten die Forschungsstätte.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schluss für heute! Es geht wieder zurück, ihr Laborratten!«</p>"
      }
     ],
     "next": [
      {
       "title": "Wache beleidigen",
       "chapterId": "6",
       "sectionId": "004"
      },
      {
       "title": "Befehl folgen",
       "chapterId": "6",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "004",
     "title": "Wache beleidigen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "state",
       "id": "rebell",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du spuckst der Wache ins Gesicht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kurze Zeit später.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdem du mit einem brummenden Schädel und blutiger Nase im Sicherheitstransporter an der Oberfläche der <em>Kuppel</em> wieder zu dir kommst, reicht dir Dean ein Tuch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das war ja sehr clever, Georgy! Damit machst du die Situation nur noch schwerer. Aber ich bin bei dir, mein Freund, ich werde dich unterstützen, zusammen schaffen wir es«, sagt Dean und schaut dir überzeugt in die Augen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In diesem Moment ertönt der Alarm in der Kuppel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Aktivität am <em>Kalten Stern</em>!«, ertönt ein Funkspruch durch die Funkgeräte der Soldaten, welche in Windeseile mit gezogenen Waffen Richtung Zentrum der Kuppel laufen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist kurze Zeit still, bis du Blitze in der Kuppel siehst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schüsse fallen in der Dunkelheit.</p>"
      }
     ],
     "next": [
      {
       "title": "Warten",
       "chapterId": "6",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "005",
     "title": "Befehl folgen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Georgy und Dean von den beiden Sicherheitswachen des Regimes über den Aufzug nach oben in den gepanzerten Transporter gebracht werden, geht auf einmal in der Kuppel der Alarm los.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Aktivität am <em>Kalte Stern</em>!«, ertönt ein Funkspruch durch die Funkgeräte der Soldaten, welche mit Windeseile mit gezogenen Waffen Richtung Zentrum der Kuppel laufen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dean nutzt den kurzen Moment und wendet sich dir zu: »Ich bin bei dir, mein Freund, zusammen schaffen wir es.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist kurze Zeit still, bis es laut beim <em>Kalten Stern</em>&nbsp;aufblitzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schüsse fallen in der Dunkelheit.</p>"
      }
     ],
     "next": [
      {
       "title": "Warten",
       "chapterId": "6",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "006",
     "title": "Warten",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Es vergeht fast eine halbe Stunde, bis die beiden Wachen zurück zum Fahrzeug kommen. Nur rauschende Sprachfetzen des Funkspruchs sind zu hören. »Negativ! …« … Rauschen … »Eindringlinge, drei Unbekannte. Verloren … «</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die beiden Soldaten steigen in den vorderen, von euch abgetrennten Bereich des Fahrzeuges und starten den Motor. Eine gepanzerte Einheit übernimmt den Schichtwechsel. Verstärkung trifft ein, um den Bereich der Kuppel zu sichern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach dieser Hektik werdet ihr zurück in das westliche <em>Lager der Erschienenen&nbsp;des Hollow White</em>&nbsp;gebracht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Während der Fahrt starrst du nachdenklich ins Leere. Dir gehen die letzten Wochen durch den Kopf. Immer noch keine neue Spur von Ella. Immer wieder erwischst du dich, wie du mit dem Gedanken spielst, ob sie noch lebt, aber du kämpfst stark dagegen an, du möchtest sie nicht aufgeben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr die Kontrolltore des Lagers passiert, ist es mitten in der Nacht und stockdunkel. Durch die abgedunkelten&nbsp;Scheiben ist kaum etwas zu erkennen, außer die Umrisse einzelner Scheinwerfer, die voluminöse Lichtkreise in die Dunkelheit strahlen. Eine quälende Müdigkeit fährt durch deine Glieder.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das gepanzerte Fahrzeug bleibt stehen und einer der Soldaten öffnet die Tür. Ein blendend heller Scheinwerfer ist nun auf euch gerichtet. Drumherum umschlingt euch pure Dunkelheit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als euch die Soldaten aus dem Fahrzeug zerren, wird Dean von einem der Soldaten mit Gewalt aus dem Licht gezogen.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rebell > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Mit dir sind wir noch nicht fertig, Freundchen!«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du versuchst dich loszureißen, um Dean zu helfen, als ein ranghöherer Offizier das Geschehen betritt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Seine gepanzerte Rüstung sowie sein vermummtes Gesicht wirken überlegen&nbsp;und furchteinflößend. Der schwere Klang der Schritte und Rüstung lässt den Untergrund erschüttern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Einheit 2, was geht hier vor?«, sagt er mit gewaltiger Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Salutierend stellen sich die beiden Soldaten vor den Vorgesetzten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Schnee fällt durch die Strahlen der Scheinwerfer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Blick&nbsp;schaut zu Dean, der diesen Moment ergreift und in sekundenschnelle die Waffe aus dem Halfter des einen Soldaten zieht und diese an dessen Kopf hält.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Waffe fallen lassen!</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sofort die Waffe fallen lassen!</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hände hoch!</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Waffe fallen lassen! Sofort!«, ertönt es aus den dunklen Ecken von den Soldaten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dean und der Soldat werden sofort von mehreren Einheiten umzingelt. Der Offizier, der nur wenige Meter entfernt steht, fordert mit drohender Stimme Dean auf, sich sofort zu ergeben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit gezogener Waffe sucht Dean den Blick zu dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kompromisslos beginnt der Offizier langsam von zehn herunterzuzählen. Bei Drei angekommen, schreist du Dean zu:</p>"
      }
     ],
     "next": [
      {
       "title": "»Waffe weg!«",
       "chapterId": "6",
       "sectionId": "007"
      },
      {
       "title": "»Nicht einschüchtern lassen!«",
       "chapterId": "6",
       "sectionId": "008"
      }
     ]
    },
    {
     "id": "007",
     "title": "»Waffe weg!«",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Dean lässt die Waffe fallen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Soldat nimmt diese und macht Platz für den Offizier.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dieser geht auf Dean zu und sagt »Null«.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Letzte, was du noch mitbekommst, ist ein lauter Knall und einen festen Schlag auf deinen Hinterkopf, als du bewusstlos zu Boden gehst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Alles wird schwarz im strahlend grellen Schein.</p>"
      }
     ],
     "next": [
      {
       "title": "Die Zelle",
       "chapterId": "6",
       "sectionId": "009"
      }
     ]
    },
    {
     "id": "008",
     "title": "»Nicht einschüchtern lassen!«",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Offizier zählt bis null herunter, geht mit erhobener Schusswaffe zielgerichtet nach vorne und schießt ohne mit der Wimper zu zucken direkt zwei Schüsse ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit einem gezielten Kopfschuss schießt er seinen eigenen Mann nieder. Dessen Körper sackt leblos auf den gefrorenen und kalten Boden. Der Schnee saugt das austretende Blut auf und die fallenden Flocken legen&nbsp;sich&nbsp;über den reglosen uniformierten Körper.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dean sackt auch zu Boden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schreist laut auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Letzte, was du spürst, ist ein gezielter Schlag auf deinen Hinterkopf, als auch du bewusstlos zu Boden gehst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Alles wird schwarz im strahlend grellen Schein.</p>"
      }
     ],
     "next": [
      {
       "title": "Die Zelle",
       "chapterId": "6",
       "sectionId": "009"
      }
     ]
    },
    {
     "id": "009",
     "title": "Die Zelle",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du wieder zu dir kommst, wachst du in einer dunklen <em>Zelle</em>&nbsp;auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Schädel dröhnt. Was für ein fester Schlag. Als du über deinen Kopf fährst, merkst du die Naht, welche die klaffende Wunde zusammenhält. Du hast ganz schön was abbekommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es riecht schimmlig. An einer Stelle der Decke tropft Wasser in einen alten Becher. Spinnenfäden und einiges an Kleingetier sind deine Zellenmitbewohner.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du legst dich benommen auf die alte Matratze und deckst dich mit einem größeren Stofffetzen zu. Immer wieder hörst du Schreie und Schläge aus anderen Zellen und wie die massiven Zellentüren sich quietschend öffnen und schwer und laut zu fallen. Durch einen kleinen Schlitz im unteren Bereich der Tür wird dir eine spärliche Ration an Nahrung durchgeschoben.</p>"
      }
     ],
     "next": [
      {
       "title": "Bon Appetit",
       "chapterId": "6",
       "sectionId": "010"
      },
      {
       "title": "Essen verweigern",
       "chapterId": "6",
       "sectionId": "011"
      }
     ]
    },
    {
     "id": "010",
     "title": "Bon Appetit",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Wie wild stopfst du dir das trockene Brot hinein, als du plötzlich beim Kauen einen pelzigen Gegenstand in deiner Mundhöhle spürst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du spukst das Brot aus und hustest. Mit dem letzten Schluck Wasser, den du noch hast, versuchst du den trockenen Hustenreiz, der dich überkommt, zu unterbrechen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du dich wieder gefasst hast, schaust du auf den kleinen Lederfetzen, der mit Speichel und kleinen Brotklumpen vor dir liegt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Symbol wurde auf die glatte Seite eingebrannt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Symbol scheint eine Art Kreis zu sein, welcher eine Sanduhr umschließt.</p>"
      },
      {
       "type": "addItem",
       "id": "secret-message"
      },
      {
       "type": "paragraph",
       "text": "<p>Dir gehen sofort panische Gedanken durch den Kopf, welche du leise aussprichst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»8 Tage …«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Erinnerung und zugleich letzte Begegnung mit dem <em>Schwarzen Kreis</em> geht dir durch die Sinne:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Kopf wird mit aller Gewalt ins eiskalte Wasser getaucht. Mit aller Kraft&nbsp;versuchst du dagegen anzukämpfen, doch du spürst die groben Hände, die mit voller Wucht dagegen drücken und dich festhalten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach Luft ringend, würgst du das kalte Wasser&nbsp;aus deiner Kehle,&nbsp;als dein Kopf wieder aus dem Wasser gezogen wird. Hinter dir steht ein kräftiger Soldat, der dich an den Haaren festhält. Aus einem Schatten hörst du eine unbekannte unangenehme Stimme. Die Person ist in der Dunkelheit nicht zu erkennen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ein letztes Mal: Wo ist <em>Dr. Ella Monroe</em>?«, fragt die Stimme eindringlich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ringst nach Luft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich sagte … es schon, ich … ich weiß es nicht … «</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Kopf wird erneut ins eiskalte Wasser getaucht. Du zappelst wie ein Fisch, der aus seinem Becken gehüpft ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kraftlos gibst du auf und verabschiedest dich von dieser Welt. Das war es. Kurz bevor du bewusstlos wirst, zieht dich der Soldat wieder aus dem Wasser.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du liegst da. Spuckst das eiskalte Wasser aus dem Leib. Deine Lungen schmerzen.&nbsp;Die finstere Stimme aus dem Schatten spricht erneut zu dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sie haben 21 Tage. Wir erwarten Ergebnisse Ihrer Arbeit am <em>Kalten Stern</em>! Vermasseln Sie es nicht! Sie wollen bestimmt nicht, dass Ihnen und der kleinen Hannah etwas zustößt.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Lassen Sie Ihre verdammten Hände weg&nbsp;von Hannah«, schreist du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Doch der düstere Schatten verlässt ohne jegliche Beachtung das Geschehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»21 Tage!«, hörst du noch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du spürst einen Stich an deinem Hals und wirst bewusstlos.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hustest instinktiv, als dir diese Erinnerung der letzten Begegnung mit dem <em>Schwarzen Kreis</em>&nbsp;durch deine Gedanken fährt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Nur noch 8 Tage …«</p>"
      }
     ],
     "next": [
      {
       "title": "Besuch",
       "chapterId": "6",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "011",
     "title": "Essen verweigern",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schleuderst das Tablet quer durch die Zelle, starrst apathisch auf die kahlen Wände und betrachtest immer wieder die Striche auf deinem linken Handgelenk. Dein Magen knurrt fast unerträglich und dir geht das Wasser langsam aus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Hey!«, hörst du eine leise Stimme. Du reagierst nicht. Noch einmal ist die Stimme zu hören. »Hey du!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust dich um und entdeckst ein kleines Loch in der Wand zur Nachbarzelle.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wer ist da?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Josef«, antwortet die Stimme leise durch die kleine runde Öffnung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wer bist du?«, fragt er dich zurück.</p>"
      }
     ],
     "next": [
      {
       "title": "Antworten",
       "chapterId": "6",
       "sectionId": "012"
      },
      {
       "title": "Nicht antworten",
       "chapterId": "6",
       "sectionId": "013"
      }
     ]
    },
    {
     "id": "012",
     "title": "Antworten",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>»Georgy«, antwortest du mit leiser Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich sitze hier schon eine ganze Weile fest, tut gut, wieder eine Stimme zu hören«, sagt Josef.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du und Josef unterhaltet euch noch eine ganze Weile. Die Zeit scheint dir nicht mehr ganz so trostlos und einsam. Du erfährst, dass Josef bei einem Fluchtversuch mit zwei Frauen aus dem Camp gefangen wurde und bereits seit einigen Wochen hier in Gefangenschaft sitzt.</p>"
      }
     ],
     "next": [
      {
       "title": "Besuch",
       "chapterId": "6",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "013",
     "title": "Nicht antworten",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Stimme Josefs ist dir nicht geheuer. Wahrscheinlich ist er nur ein Spitzel, wie sie überall im Lager unterwegs sind, denkst du dir. Hastig kleisterst du mit den herumliegenden Brotkrümeln das Loch zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es vergehen einige Tage und jeder Tag gleicht dem anderen. Dein Kopf schmerzt und dir ist schwindelig.</p>"
      }
     ],
     "next": [
      {
       "title": "Besuch",
       "chapterId": "6",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "014",
     "title": "Besuch",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die massive Zellentür geht auf und ein älterer Arzt mit grauen Haaren und einer dicken Hornbrille betritt in weißem Kittel die Zelle. Er kniet sich langsam zu dir herunter, schaut prüfend auf deine Verletzung am Kopf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es tut mir sehr leid. Ich habe alles in meiner Macht Stehende getan, um schnell bei Ihnen zu sein. Sie haben ziemliche Blessuren davongetragen«, sagt der Arzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Doktor, wo bin ich hier?«, entgegnest du mit geschwächter Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Im <em>Gefangenentrakt</em>. Sie haben eine schwere Gehirnerschütterung und die Wunde musste genäht werden. Aufgrund Ihres Ranges und Funktion habe ich bereits veranlasst, Sie sofort wieder ins <em>Forschungszentrum</em> zu verlegen und Sie medizinisch schnell auf die Beine zu bekommen. Die <em>kleine Hannah</em> wartet auch sehnsüchtig auf Sie. Sie hat seit Tagen kein Wort mehr gesprochen und sich komplett zurückgezogen. Soweit ich weiß, sind Sie die einzige Bezugsperson nach dem Verschwinden von <em>Dr. Monroe</em>.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust nach unten auf deine Hände.</p>"
      }
     ],
     "next": [
      {
       "title": "Nach Dean fragen",
       "chapterId": "6",
       "sectionId": "017"
      },
      {
       "title": "Linien auf der Haut",
       "chapterId": "6",
       "sectionId": "015"
      }
     ]
    },
    {
     "id": "015",
     "title": "Linien auf der Haut",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du schaust auf die Zeichnungen an deinem linken Handgelenk.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wie ein einziger Strich den Wert eines Menschen in unserer Zeit bestimmt, was für eine kranke Scheiße ist das!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Arzt nimmt die Brille ab, holt ein Tuch aus seinem Kittel und putzt über die Gläser. Er setzt diese wieder auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich habe mir das nicht ausgedacht, aber lassen Sie uns jetzt nach vorne blicken. Uns geht die Zeit aus. Unsere Arbeit muss Ergebnisse bringen. Wir dürfen uns keine Fehler mehr erlauben. Mit <em>Dr. Monroes</em> Verschwinden haben wir eine unserer besten Forscherinnen und dazu noch wertvolle Zeit verloren.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du reibst dir über dein Handgelenk und sagst schwerfällig, dass ihr bereits Fortschritte gemacht habt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir sind kurz davor, Ihr Werk fertig zu stellen.«</p>"
      }
     ],
     "next": [
      {
       "title": "Über Dr. Monroe sprechen",
       "chapterId": "6",
       "sectionId": "016"
      },
      {
       "title": "Nach Dean fragen",
       "chapterId": "6",
       "sectionId": "017"
      }
     ]
    },
    {
     "id": "016",
     "title": "Über Dr. Monroe sprechen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Ich kann mir bis heute nicht verzeihen, dass ich an dem Tag nicht bei ihr in der Höhle war«, sagst du mit vorwurfsvoller Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Arzt setzt sich zu dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Mit so einem kritischen Vorfall konnte keiner rechnen. Es ist nicht Ihre Schuld.«</p>"
      }
     ],
     "next": [
      {
       "title": "Nach Dean fragen",
       "chapterId": "6",
       "sectionId": "017"
      }
     ]
    },
    {
     "id": "017",
     "title": "Nach Dean fragen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Der Arzt geht zum anderen Ende der Zelle und dreht sich mit dem Gesicht zur Wand.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Er nimmt seine Brille ab, schließt kurz die Augen und schnauft tief.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Nachdem Ihr Kollege in den <em>Krankentrakt</em> eingeliefert wurde, hatte er bereits viel Blut verloren. Wir konnten dennoch die Kugel aus seinem Bein entfernen. Diese hat nur knapp seine Hauptschlagader verfehlt. Nach zwei Tagen kam er wieder zu Bewusstsein. Als wir am dritten Tag dachten, er hätte das Schlimmste überstanden, kamen die Soldaten des <em>Schwarzen Kreis</em>&nbsp;und haben ihn trotz seines schwachen Zustands mitgenommen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ahnst Schreckliches.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich habe alles in meiner Macht Erdenkliche getan, aber Sie wissen, wie erbarmungslos der <em>Schwarze Kreis</em> ist. Leider wurde das Urteil unmittelbar vollzogen. Trotz seines Ranges.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es tut mir sehr leid … Ihr Freund wurde gestern Mittag durch das Seil vom <em>Schwarzen Kreis</em>&nbsp;exekutiert.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dir wird schwindelig, als du die Bedeutung seiner Worte tief in dir spürst. Hasserfüllt, voller Wut, Trauer und Verzweiflung haust du mehrfach&nbsp;mit der Faust auf den kalten dreckigen Boden. Deine Handknochen knacken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Arzt dreht sich zu dir und spricht mit sehr ernstem Ton.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Denken Sie jetzt an sich und die kleine Hannah. Sie dürfen kurz vor dem Ziel nicht aufgeben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Kleine braucht Sie, also hören Sie mir zu! Ich kann Sie beide hier rausschaffen, wenn Sie unsere Arbeit erfolgreich zu Ende bringen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Arzt dreht sich um, die Zellentür wird geöffnet. Ein letztes Mal wendet er sich dir zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sie werden sofort wieder ins <em>Forschungszentrum</em>&nbsp;verlegt. Setzen Sie Ihre Arbeit an der Kuppel fort. Schauen Sie nicht zurück!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die massive Zellentür fällt laut zu. Kleine feine Stücke der umliegenden Decke fallen auf den Boden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit dem schallenden Hall verlässt der Arzt über den langen Flur entlang der Zellen das Gefängnis.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben einigen verschachtelten Gassen und Treppen betritt er nach einem längeren Fußmarsch einen nebligen Friedhof. Der Wind pfeift über die in Dunkelheit getränkten Grabsteine. Keine Seele weit und breit. Wenige Kerzen schenken der dunklen und kalten Nacht etwas Licht, als der Arzt die <em>Kathedrale</em>&nbsp;betritt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Er zündet sich eine Zigarette an und nimmt einen tiefen Zug. Wartend vergeht die Zeit. Er zündet sich noch eine an. Nachdem er den Rauch in die kalte vernebelte Luft stößt, ertönt eine tiefe Stimme aus der Dunkelheit des Gewölbes, nur wenige Meter von ihm entfernt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich hoffe, Ihnen ist niemand gefolgt! Wie verlief Ihr Gespräch, Doktor?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Arzt lässt die Zigarette fallen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Er wird Dr. Monroes Werk zu Ende bringen, mein <em>Orden</em>«, sagt der Arzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine Gestalt in schwarzer Kluft erscheint aus der nebligen Dunkelheit und nähert sich langsam. Das Kerzenlicht flackert und wirft einen langen Schatten auf das Antlitz des Arztes. In Dunkelheit getaucht kniet er sich hin. Er wagt es nicht, in das vor ihm verhüllte Gesicht zu blicken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Mein Orden«, wiederholt er unterwürfig.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Orden beginnt zu sprechen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Mit Ihrer Arbeit kommen Sie der Eingliederung in den <em>Schwarzen Kreis</em> immer näher. Enttäuschen Sie den <em>Schwarzen Kreis</em> nicht. Weitere Fehler werden schwere Folgen für Sie haben. Ein Scheitern wird nicht akzeptiert!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Mein Orden, ich werde den <em>Schwarzen Kreis</em>&nbsp;nicht enttäuschen. Dafür bürge ich mit meinem Fleisch und Blut.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Schritte entfernen sich langsam und es wird still. Einige Kerzen sind bereits erloschen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als der Arzt seinen Kopf erhebt, ist die dunkle Gestalt im Nebel der Dunkelheit verschwunden.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 6",
       "chapterId": "6",
       "sectionId": "018"
      }
     ]
    },
    {
     "id": "018",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><a class=\"skip-link\" href=\"javascript:document.documentElement.scrollTo({ top: 100000, behavior: 'smooth' })\">Überspringen</a></p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 2: Der Weg nach Snow Peaks</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine spannungsgeladene Reise beginnt, in welcher Ella, Albert und Snow ums nackte Überleben in der eisigen und gefährlichen Landschaft von White Valley kämpfen. Snow wird dabei stark verletzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 3: Der Hollow White</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Ella und Albert mit letzten Kräften das verschneite Städtchen Snow Peaks erreichen, treffen sie auf alte Freunde von Albert. Frank, einem pensionierten Arzt und seiner Frau Marie, die etwas außerhalb der Stadt in einem größeren Anwesen leben.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise erliegt Snow an seinen Wunden. Gedanken plagen Ella. Hätte Snow gerettet werden können? Mit diesem ungewissen Gefühl setzt sie ihre Suche fort.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow kann in letzter Sekunde von Frank gerettet werden. Albert und Ella sind mit einem großen Schrecken davongekommen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Am ersten Tag in der Stadt lüftet Ella viele Geheimnisse rund um Snow Peaks und deren Einwohner. So erfährt sie vom sagenumwobenen Geschehnis des Hollow White, einer Art Naturphänomen vor über 70 Jahren in der Vergangenheit, bei welchem Bewohner von Snow Peaks spurlos verschwunden sind. Seitdem ist die Stadt in Alarmbereitschaft und es gibt immer wieder Einzelfälle des Verschwindens.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 4: Die Verschwundenen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella trifft auf Alberts Zwillingsschwester Patricia. Die beiden Geschwister offenbaren ihr, dass sie selbst zu den Verschwundenen des Hollow White gehören und als Kinder ganze 40 Jahre später in der Zeit aufgewacht sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Um weiter der Spur zu Hannah zu folgen, besucht Patricia mit Ella das Observatorium, einen Ort, an dem die sogenannten Splitter aufbewahrt werden. Mysteriöse Steine, die an den Plätzen der Verschwundenen gefunden wurden und für die Verbliebenen zum Gedenken aufbewahrt werden. So zeigt Patricia, ihren und Alberts Splitter, der dort schon lange Zeit aufbewahrt wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz der neuen Erkenntnisse tappt Ella auf der Suche nach Hannah weiter im Dunkeln, bis sie eines Nachts in ihrem Tonbandgerät zufällig einen Splitter und daraufhin gemeinsam mit Albert den Splitter von seiner Frau Judy finden. Judy ist vor einigen Jahren in einer Nacht spurlos am Frozen Lake verschwunden. Albert hat sich nach diesem tragischen Verlust in die Wälder von White Valley trauernd zurückgezogen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella und Albert kommen sich auf ihrer Reise immer näher und können ihre Gefühle zueinander nicht mehr verstecken. Als sie neben Albert einschläft, hat sie eine Vision in einem Traum. Ist sie selbst auch eine Verschwundene aus einer anderen Zeit?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 5: Die Flucht</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir springen in der Geschichte ganze 60 Jahre in die Zukunft. Dunkle Zeiten herrschen in Snow Peaks. Der Schwarze Kreis, ein grausames Regime, ist an der Macht, kontrolliert das System und unterdrückt die Bevölkerung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir begleiten Judy, die nach ihrem Verschwinden in Snow Peaks in dieser Zeit aufgewacht ist. Seit ihrem Erscheinen wird sie neben vielen anderen Erschienenen in einem der außerhalb liegenden Lagern gefangen gehalten. Zusammen mit ihrer Freundin Cara gelingt ihr eines Tages die Flucht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die beiden treffen auf die Widerstandsgruppe, eine Bewegung, die seit Jahren aus dem Untergrund gegen den Schwarzen Kreis kämpft. Rose, die Gründerin des Widerstands, gebietet Judy und Cara Unterschlupf, doch sie verheimlicht etwas. So findet Judy eines Tages heraus, dass Rose unter dem drohenden Befehl des Schwarzen Kreises ihr bereits als Krankenschwester begegnet ist und ihre für tot geglaubte Tochter Hannah bei der Geburt genommen hat. Judys Tochter Hannah lebt, wurde aber vor einigen Jahren vom Schwarzen Kreis der Obhut von Rose wieder entrissen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beteuert, dass sie unter drohendem Befehl des Schwarzen Kreises handelte und ihr aller Leben auf dem Spiel stand. So zeigt sie Judy eines Nachts ein Schlupfloch zur streng bewachten Kuppel, wo Hannah das letzte Mal gesehen wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 6: Die Höhle</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben Judys Geschichte lernen wir Georgys zeitgleich kennen. Er und ein zweiter Wissenschaftler namens Dean experimentieren unterhalb der Kuppel in einer Höhle am sogenannten Kalten Stern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein monumentales Artefakt aus dem Universum und der Ursprung des Hollow White. Die Forschungen am Kalten Stern in der Zukunft sind mutmaßlich verantwortlich für das Verschwinden der Menschen des Hollow White in der Vergangenheit. Die sogenannten Erschienenen sind durch die Experimente in der Zukunft aufgewacht und werden seither vom Schwarzen Kreis in Gefangenschaft gehalten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Georgy und Dean werden vom Regime gezwungen, an einer Apparatur am Kalten Stern zu arbeiten, welche Zeitsprünge möglich macht. Es geht um Leben und Tod. Der Schwarze Kreis geht hierbei über Leichen und glaubt an ein apokalyptisches Ende der Welt, welches durch den Auslöser des Hollow White, in der Zukunft geschehen und die Sonne auslöschen wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Nerven liegen blank, sodass Dean eines Tages die Beherrschung verliert und sich mit den Soldaten des Schwarzen Kreises konfrontiert. Beim Versuch, Dean zur Hilfe zu kommen, fallen Schüsse und Georgy wird bewusstlos geschlagen. Als er in einer Zelle wieder aufwacht, muss er dort mehrere Tage ausharren, bis ihm über einen Mittelsmann der Befehl erteilt wird, seine Forschungsarbeit am Kalten Stern fortzusetzen. Zuvor muss er erfahren, dass sein Freund Dean vom Schwarzen Kreis exekutiert wurde.</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 7",
       "chapterId": "7",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "7",
   "title": "Schwarze Rosen",
   "sections": [
    {
     "id": "001",
     "title": "»Schnell Judy, sie haben uns entdeckt!«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du&nbsp;ziehst erschrocken deine Hand vom <em>Kalten Stern</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein lauter, angsteinflößender Alarm ertönt in der <em>Kuppel</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose zerrt an dir, »Schnell Judy, wir müssen weg!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr rennt gemeinsam zurück in die Richtung, woher ihr gekommen seid.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr die dunklen <em>Gärten der Kuppel</em> erreicht, erstreckt sich vor euch ein Irrgarten. Woher seid ihr nur gekommen? Jede Ecke gleicht der anderen. Dunkle hohe Dornenhecken versperren euch den Weg. Verzweifelt versucht ihr euch zu orientieren, doch keine Spur von dem Wasserhäuschen und eurem geheimen Schlupfloch. Alles sieht gleich aus in dieser Dunkelheit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hinter euch seht ihr, wie sich Wachen nähern. Deren Taschenlampen flackern. In einigen Bereichen gehen plötzlich riesige Scheinwerfer an und beleuchten Abschnitte der <em>Kuppel</em>. Das Licht zeigt euch einen kleinen Pfad&nbsp;durch&nbsp;die Hecken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Hier lang, da ist der Weg!«, sagt&nbsp;Rose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam lauft ihr in Windeseile durch die enge Passage. Ihr duckt euch und weicht den Dornen aus, an welchen ihr immer wieder hängen bleibt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose kommt nur schwer hinterher.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Von allen Seiten beißen sich die kleinen messerscharfen Dornen&nbsp;in eure Kleidung&nbsp;und hinterlassen kleine, feine Schnitte.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr euch aus dem groben Geäst befreit, blitzt es hinter euch auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schüsse fallen in der Dunkelheit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose schreit laut auf und stürzt.</p>"
      }
     ],
     "next": [
      {
       "title": "Rose helfen",
       "chapterId": "7",
       "sectionId": "002A"
      },
      {
       "title": "Sich selbst retten",
       "chapterId": "7",
       "sectionId": "002B"
      }
     ]
    },
    {
     "id": "002A",
     "title": "Rose helfen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+3"
      },
      {
       "type": "paragraph",
       "text": "<p>Du läufst zu Rose und hilfst ihr auf die Beine. Sie schreit schmerzverzerrt auf. Hektisch versuchst du dich zu orientieren. Du schaust in alle Richtungen und siehst das Wasserhäuschen. Charlie rennt euch entgegen und nimmt dir Rose ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schnell hier rein, bevor die Wachen unseren Schacht in die Kuppel entdecken«, sagt er.</p>"
      }
     ],
     "next": [
      {
       "title": "Blut",
       "chapterId": "7",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "002B",
     "title": "Sich selbst retten",
     "elements": [
      {
       "type": "state",
       "id": "rose",
       "modifier": "-1"
      },
      {
       "type": "state",
       "id": "karma",
       "modifier": "-3"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit Überlebensangst läufst du einfach weiter als dir Charlie entgegenkommt. Er rennt direkt zur verletzten Rose und hilft ihr auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schnell hier rein, bevor die Wachen unseren Schacht entdecken«, sagt er.</p>"
      }
     ],
     "next": [
      {
       "title": "Blut",
       "chapterId": "7",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "003",
     "title": "Blut",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ihr entdeckt den Blutfleck, welcher sich auf Roses Bluse&nbsp;am Bauch abzeichnet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir müssen die Blutung stoppen! Judy, drücke mit aller Kraft gegen die Wunde!«, sagt Charlie in sehr besorgtem Ton.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose ist bereits bewusstlos.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr erreicht endlich das Wasserhäuschen. Leise schließt du das Türchen hinter euch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Charlie öffnet die versteckte Luke hinter einigen Rohren und Schläuchen. Es ist verdammt eng. Als ihr durch seid, ziehst du hinter euch leise die Abdeckung zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit Rose auf den Schultern von Charlie klettert ihr zusammen die Leiter den Schacht hinunter in die kalte und dunkle Kanalisation. Charlie macht eine Taschenlampe an und holt Verbandszeug aus seinem Rucksack. Ihr bindet Roses Wunde flüchtig ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Plötzlich hört ihr Geräusche direkt über euch. Die Wachen suchen bereits das Gelände um das Wasserhäuschen ab.</p>"
      }
     ],
     "next": [
      {
       "title": "Leise sein",
       "chapterId": "7",
       "sectionId": "004"
      },
      {
       "title": "Weg hier!",
       "chapterId": "7",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "004",
     "title": "Leise sein",
     "elements": [
      {
       "type": "state",
       "id": "rose",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr haltet den Atem an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einigen Minuten ist es ganz still und die Wachen scheinen sich vom Wasserhäuschen wieder zu entfernen. Zu eurem Glück haben sie das Schlupfloch nicht gefunden. Aber ihr habt wertvolle Zeit verloren.</p>"
      }
     ],
     "next": [
      {
       "title": "Weg hier!",
       "chapterId": "7",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "005",
     "title": "Weg hier!",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Jetzt gilt es keine Zeit zu verlieren, Rose ist schwer verletzt, die Zeit läuft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zurück durch die kalte und feuchte Kanalisation müsst ihr immer wieder kurz stehen bleiben und warten bis die Patrouillen über euch weggezogen sind. An den Wänden plätschert nur so das Wasser von oben auf euch herab. An einer letzten Gabelung noch unterhalb der Kuppel hört ihr Geräusche, gemischt mit dem tropfenden Wasser, das&nbsp;über eine Leiter und Gitter nach unten strömt. Einige Bereiche der Kanalisation werden nun systematisch an der Kuppel nach euch abgesucht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wo geht es lang?«, fragt Charlie orientierungslos.</p>"
      }
     ],
     "next": [
      {
       "title": "Nach links",
       "chapterId": "7",
       "sectionId": "006"
      },
      {
       "title": "Nach rechts",
       "chapterId": "7",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "006",
     "title": "Nach links",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Es ist euer Vorteil, dass sich Charlie nach der Gabelung wieder besser an den Weg erinnert und einige Schleichwege kennt, die dennoch teils sehr geflutet sind. Bauchhoch steht euch das dreckige Wasser. Zumindest nicht eisig kalt. So verlasst ihr langsam den unterirdischen Kanalisationsbereich der <em>Kuppel</em>. Ihr seid hier allerdings nicht allein. In jeder Ecke scheint sich etwas zu bewegen. Der Geruch ist kaum auszuhalten, dafür die Wahrscheinlichkeit in diesem Teil der Kanalisation aufgespürt zu werden unwahrscheinlicher. Es dauert eine gefühlte Ewigkeit als ihr endlich die massive Eisentüre erreicht, an welcher ihr Charlie das erste Mal nach eurer Flucht begegnet seid.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Total außer Atem zieht ihr mit aller Kraft die schwere Tür auf, schließt diese hinter euch und lauft über die Kellertreppe durch die Geheimtüre ins <em>Antiquariat</em>&nbsp;hoch. Über den Innenhof reißt ihr die Eingangstür zu Roses Wohnung auf. Charlie legt Rose behutsam auf das Sofa. Cara kommt hereingestürmt. Sie sieht direkt den riesigen Blutfleck auf Roses Bluse, der sich im linken Hüftbereich abzeichnet.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Sie hat sehr viel Blut verloren.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Schnell, lasst mich das ansehen!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara schneidet vorsichtig mit einer Schere den blutigen Stoff der Bluse weg und betrachtet die Schusswunde. Das Blut tritt sofort aus der Wunde, als ihr den Stofffetzen von der Wunde nehmt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Die Kugel ist durch! Ich muss schnell die Blutung stoppen!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara kümmert sich um die schwere Verletzung von Rose. Im Schock nimmt dich Charlie zur Seite. »Komm Judy, gehe in die Küche, du kannst gerade nicht helfen, Cara weiß, was sie tut.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eingepackt in eine Decke starrst du besorgt auf deine blutverschmierte Kleidung, die direkt vor dir auf dem Boden liegt. Deine Hände sind auch von Roses Blut getränkt und zittern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara und Charlie betreten ebenso blutüberströmt die Küche&nbsp;und waschen sich die Hände.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich konnte die Blutung stoppen und die Schusswunde versorgen, aber es steht nicht gut um Rose. Sie hat sehr viel Blut verloren. Was ist passiert?«, fragt euch Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Charlie und du Cara vom Vorfall in der <em>Kuppel</em>&nbsp;erzählt, schaut sie euch durchdringend an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir müssen hier schleunigst verschwinden! Wir sind hier alles andere als sicher. Sie werden, nachdem sie die <em>Kuppel</em>&nbsp;abgesichert haben, die ganze Stadt absuchen! Roses Blut wird sie schnell zu uns hierherführen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eilig werden die wichtigsten Sachen gepackt. Hastig sucht ihr Aufzeichnungen, Unterlagen und Notizen zusammen. »Hier, Judy!«, Charlie reicht dir sein Feuerzeug. Ihr dürft keine Spuren hinterlassen. Einige Unterlagen versteckt ihr in Koffern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In Roses Zimmer packst du noch das Bild von Roses Mann Pete und das große Lederbuch mit ein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Charlie hebt die verletzte Rose vom Sofa und legt sie im Auto im Hinterhof auf die Rückbank. Platon ist nicht begeistert, dass du ihn in einen Reisekäfig steckst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist noch dunkel in <em>Snow Peaks</em> und im Hintergrund sind immer noch die Sirenen an der <em>Kuppel</em>&nbsp;zu hören. Ihr fahrt zügig, aber auch vorsichtig durch Nebenstraßen und Gassen hinaus&nbsp;aus der Stadt. Ihr umrandet das Gebiet um der <em>Kuppel</em>. Sie können überall sein, ihr müsst vorsichtig agieren. Als ihr die Stadt endlich verlasst, siehst du in der Ferne das Westlager. Dunkle Erinnerungen überkommen dich, aus einer Zeit, die weit weg schien, aber jetzt wieder voll präsent ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit ihr kommt zusätzlich die Angst, die Angst vor dem <em>Schwarzen Kreis</em>&nbsp;und der Gedanke doch noch erwischt zu werden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wo fahren wir hin?«, fragst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara antwortet, dass es einen versteckten Zufluchtsort in den Wäldern gibt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kurz bevor ihr die Stadtgrenze an einer Brücke über den <em>Ice River</em> passieren könnt, befindet sich ein letzter Kontrollpunkt. Ein Soldat winkt mit einer Taschenlampe euer Auto zur Seite. Er ist schwer bewaffnet und trägt eine komplette Schutzmontur.</p>"
      }
     ],
     "next": [
      {
       "title": "Auto anhalten",
       "chapterId": "7",
       "sectionId": "008"
      },
      {
       "title": "Kontrol­le durchbrechen",
       "chapterId": "7",
       "sectionId": "009"
      }
     ]
    },
    {
     "id": "007",
     "title": "Nach rechts",
     "elements": [
      {
       "type": "state",
       "id": "rose",
       "modifier": "-1"
      },
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>In der Hektik lauft ihr ein Stück lang den falschen Weg und landet in einer Sackgasse. Es geht tief nach unten und das Wasser strömt, wie ein Wasserfall rauschend hinunter. Keine Chance, hier weiterzukommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»So ein verdammter Mist«, flucht Charlie. Wir hätten vorhin in die andere Richtung gemusst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schnell zurück!«</p>"
      }
     ],
     "next": [
      {
       "title": "Nach links",
       "chapterId": "7",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "008",
     "title": "Auto anhalten",
     "elements": [
      {
       "type": "state",
       "id": "rose",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Charlie fährt das Auto an die Seite des Kontrollpunktes, kurbelt die Fensterscheibe herunter und legt seine Hände langsam auf das Lenkrad.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wohin des Weges so mitten in der Nacht?«, fragt der Soldat in provokantem Ton. »Sie wissen schon, dass eine Ausgangssperre besteht?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr schweigt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Soldat zieht seine Waffe und zielt auf Charlie.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Nicht, bitte nicht …«, sagt Rose mit geschwächter Stimme von der Rückbank aus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wer ist da hinten?« Der Soldat reißt die hintere Tür der Rückbank ruckartig auf und leuchtet mit seiner Taschenlampe auf die verletzte Rose.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Langsam senkt er seine Waffe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Madame Rose, sind Sie das?«, fragt der bewaffnete Soldat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es tut mir leid, ich wusste ja nicht … Was ist geschehen?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sie ist schwer verletzt! Wir müssen schleunigst weg von hier!«, unterbricht Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Funkgerät des Soldaten geht in dem Moment an.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Einheit ›Frozen Lake Brücke‹, alles in Ordnung bei Ihnen«?</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr schaut alle wie gebannt auf das Funkgerät des Soldaten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dieser drückt nach einer kurzen Pause auf den Sprachknopf und antwortet:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>›Alles Roger, alles in Ordnung hier, bisher keine Spur von den gesuchten Personen. Hier ist es ruhig. Over and Out!‹</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Überrascht schaut ihr den Soldaten an, der seine Waffe in den Halfter steckt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Madame Rose, ich …«,&nbsp;doch bevor er seinen Satz ausspricht, sagt Rose: »Danke <em>Henry</em>, passen Sie auf sich auf!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Los, fahrt los! Viel Zeit bleibt euch nicht, die ganze Stadt ist in Alarmbereitschaft«, sagt Henry.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr verlasst den Kontrollpunkt und fahrt weiter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ein alter Freund von Pete«, sagt Rose mit schwacher Stimme und schläft ein.</p>"
      }
     ],
     "next": [
      {
       "title": "Sternen­nacht",
       "chapterId": "7",
       "sectionId": "009b"
      }
     ]
    },
    {
     "id": "009",
     "title": "Kontrolle durchbrechen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Fahr Charlie! Bleib nicht stehen!«, bettelst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Charlie tritt kräftig aufs Gaspedal. Das Fahrzeug beschleunigt. Du hältst dich am Vordersitz fest und stützt Rose. Ihr kracht mit voller Geschwindigkeit an dem Soldaten vorbei und durchbrecht die Schranke. Dieser läuft noch hektisch ein kurzes Stück mit gezogener Waffe und Funkgerät hinter eurem Fahrzeug her, aber schießt glücklicherweise nicht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach dieser heiklen Situation vergeht etwas Zeit und ihr fahrt durch die verschneite Nacht.</p>"
      }
     ],
     "next": [
      {
       "title": "Sternen­nacht",
       "chapterId": "7",
       "sectionId": "009b"
      }
     ]
    },
    {
     "id": "009b",
     "title": "Sternennacht",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Lange Zeit&nbsp;schaust du aus dem Fenster und bist von der vorbeirauschenden Nachtlandschaft in den Bann gezogen. Kein Vergleich mit dem grauen <em>Snow Peaks</em>. Wie schön es hier ist. Eine klare Nacht, der Sternenhimmel über euch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es ist traumhaft, nicht wahr?«, flüstert Rose mit schwacher Stimme, die mittlerweile aufgewacht ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Rose, du musst dich ausruhen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy, erzähl mir … Erzähl mir von deinem Zeitsprung.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du beginnst zu erzählen:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»An die Zeit vor dem Zeitsprung kann ich mich gar nicht erinnern. Ich bin hier in einem Käfig aufgewacht. Überall lautes Gebell, von eingesperrten hungrigen Hunden. Sie haben mich erst am nächsten Tag in dem Hundezwinger gefunden und mich aus dem Käfig geholt. Danach bin ich recht schnell in das Lager gekommen, wo mir auch Cara begegnet ist. Es war eine schlimme Zeit … und dann die Nachricht, dass ich schwanger bin. Eine unfassbare Freude, auf der anderen Seite die Angst davor, dass mein Kind in dieser Hölle aufwächst. Und jetzt … wo ich weiß, dass mein Kind lebt, schöpfe ich wieder Hoffnung. Hoffnung, sie zu finden.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose lächelt und gibt dir einen Schlüssel, den sie um den Hals trägt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Judy, der <em>Schwarze Kreis</em> hat mir alles genommen, was mir lieb war. Meine Familie, meinen Ehemann und letztlich deine Hannah. Lass nicht zu, dass sie alles, was uns lieb und wert ist, zerstören.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose zieht ihre Bluse leicht hinunter. Ein kleiner schwarzer Kreis auf ihrem Brustbein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich habe viel geopfert, um mich in das tiefe Geschwür des <em>Schwarzen Kreis</em>&nbsp;einzuschleusen. Mir wurde dieses Zeichen unter meine Haut gestochen. Ich musste mich mit vielen unmoralischen Entscheidungen und Prüfungen auseinandersetzen, um nicht aufzufliegen. Das mit Hannah war nur eine von vielen Gräueltaten, die der <em>Schwarze Kreis</em>&nbsp;mir aufgezwungen hat. Immer mit der Angst um das eigene Leben, hat es mich fast gebrochen, doch mein Wunsch, dieses System zu stürzen, hat mich am Leben gehalten. Hannah hat mir Kraft gegeben in der Zeit, in der sie bei mir aufgewachsen ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In der Hütte, zu der wir fahren, findest du weitere Antworten. Kümmere dich bitte um Platon und schau nach den <em>Rosen</em>. Finde unsere kleine Hannah. Gib nicht auf! Ihr könnt diese grausame Welt verändern. Es liegt in eurer Hand!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Pete, mein lieber Pete!«, sind ihre letzten Worte.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Roses Augen fallen langsam zu und sie schläft ein.</p>"
      }
     ],
     "next": [
      {
       "title": "Leben oder Tod",
       "chapterId": "7",
       "sectionId": "009c"
      }
     ]
    },
    {
     "id": "009c",
     "title": "Leben oder Tod",
     "elements": [
      {
       "type": "if",
       "condition": "STATE Rose < 1",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tage nachdem ihr Rose bei der Hütte mit Feuer bestattet habt, schaust du auf die Urne mit ihrer Asche oberhalb des Kaminsims. Du musst oft an euer letztes Gespräch denken und an den Schlüssel, den sie dir vor ihrem Tod gegeben hat. »Schau nach den <em>Rosen</em>«, waren ihre letzten Worte. Du gehst zu Cara und Charlie. Cara liegt mit Trauer erfüllt in seinen Armen. Für beide war Rose wie eine Mutter.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Rose < 1",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tage vergehen bei der abgelegenen Holzhütte in den verschneiten Wäldern von <em>White Valley</em>. Rose Zustand ist vorerst stabil. Sie ist dennoch sehr schwach und nicht ansprechbar. Sie liegt auf einem mit Fell bedeckten Holzbett in einem ruhigen Nebenzimmer am Kamin und schläft. Du musst oft an euer Gespräch aus dem Auto denken und an den Schlüssel, den sie dir gegeben hat. »Schau nach den <em>Rosen</em>«, waren ihre Worte. Du würdest sie am liebsten aufwecken und fragen, was sie damit gemeint hat, aber im Moment ist sie zu schwach, um mit ihr zu sprechen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Cara hat immer ein Auge auf sie und kümmert sich. In der Zeit in den Lagern konnte sie selbst viel von den Ärzten, die die&nbsp;<em>Erschienenen des Hollow White</em> versorgt haben, lernen und war immer sehr engagiert, den Verletzten und Schwachen dort zu helfen.</p>"
        },
        {
         "type": "addItem",
         "id": "rose-lebt"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Mit Cara sprechen",
       "chapterId": "7",
       "sectionId": "010"
      },
      {
       "title": "Rosen suchen",
       "chapterId": "7",
       "sectionId": "011"
      }
     ]
    },
    {
     "id": "010",
     "title": "Mit Cara sprechen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>»Cara, können wir kurz unter vier Augen sprechen?«</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose < 1",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Charlie nimmt vorsichtig seinen Arm von Cara, welche sich die Tränen aus dem Gesicht wischt.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Klar«, antwortet Cara, steht auf und geht mit dir in Roses und Petes Schlafzimmer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr sitzt schweigend auf dem Bett und sagt kein Wort zueinander. Nur Platons Schnaufen, der schlafend auf dem Bett liegt, ist zu hören. Du brichst die Stille und erzählst Cara von Roses letzten Worten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schau nach den <em>Rosen</em>«, waren Roses letzte Sätze.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara überlegt einen kurzen Moment, schaut dich an und zeigt direkt auf das Gemälde, welches vor euch im Zimmer hängt. Auf dem Bild siehst du eine impressionistische, leicht surreal gemalte Landschaft eines Waldes. Unter einem Baum blühen Rosen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich kenne den Ort, er ist nicht weit von hier. Rose hat mir erzählt, dass sie mit Pete oft dort war, als sie noch jünger waren«, sagt Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr zieht euch warm an, packt ein paar Sachen für unterwegs ein und geht los.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist noch hell, als ihr aufbrecht.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Charlie bleibt bei Rose in der Hütte.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Rosen",
       "chapterId": "7",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "011",
     "title": "Rosen suchen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du suchst die komplette Hütte und nähere Umgebung ab. Keine Spur von Rosen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Erschöpft setzt du dich in Roses Schlafzimmer auf das Holzbett und starrst auf die Decke. In Gedanken versunken bemerkst du das Gemälde, welches dir gegenüber an der Wand hängt. Eine impressionistische Landschaft eines Waldes. Unter einem Baum blühen Rosen. Du stehst auf und schaust dir das Bild genauer an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»<em>Die Rosen</em>, das muss es sein!«, sagst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du läufst zu Cara und Charlie und erzählst von deiner Entdeckung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich kenne den Ort, nicht weit von hier. Rose hat mir erzählt, dass sie mit Pete dort oft Zeit verbracht hat, als sie noch jünger waren«, sagt Cara.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr zieht euch warm an und packt ein paar Sachen für unterwegs ein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist noch hell, als ihr aufbrecht.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Charlie bleibt bei Rose in der Hütte.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Rosen",
       "chapterId": "7",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "012",
     "title": "Rosen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Nach gut zwei Stunden Fußmarsch durch den tiefen Schnee empfängt euch das traumhafte Panorama. Der Ausblick auf die verschneite Landschaft von <em>White Valley</em>&nbsp;ist unfassbar schön.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schau, da vorne!«, ruft Cara. »Der Baum von dem Ölgemälde!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr lauft zu einer riesigen Tanne. Als du dich um den Stamm drumherum bewegst, fällt dir eine Schnitzerei an der Rückseite im Holz auf. Es ist schwer zu erkennen, aber mit etwas Fantasie könnte es sich um eine Rose handeln.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr seid gerührt und traurig zugleich. Das muss von Rose und Pete sein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Darunter ist eine Art Loch im Baum. Vorsichtig schaust du durch die kleine Öffnung. Es ist so dunkel und feucht, dass du nichts erkennen kannst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Da lange ich nicht rein«, sagt Cara. Du schaust sie an und hältst ihr deine Hand hin.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schere, Stein, Papier.</p>"
      }
     ],
     "next": [
      {
       "title": "Schere",
       "chapterId": "7",
       "sectionId": "013"
      },
      {
       "title": "Stein",
       "chapterId": "7",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "013",
     "title": "Schere",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wirklich!«, sagst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Stein gewinnt«, sagt Cara und lächelt. Schon lange hast du sie nicht mehr lächeln sehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es tut gut.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du steckst langsam deine Hand in die enge Öffnung des Baumes. Du musst vorher deine Handschuhe ausziehen und spürst etwas Kaltes und Glitschiges. Es läuft dir eiskalt den Nacken hinunter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Da ist etwas!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du eine längliche, aus Metall geformte Truhe herausziehst, musst du diese erst einmal von Moos, Erde und einigem Kleingetier befreien.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gespannt schaut ihr auf den etwas rostigen Deckel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine Gravur ist darauf zu sehen, wie auf dem Buch in Roses Zimmer. Die Initialen H. W., was für <em>Hollow White</em> steht.</p>"
      },
      {
       "type": "addItem",
       "id": "chest-old"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bemerkst die Schlüsselöffnung. Ob diese zum kleinen Schlüssel, den Rose dir gegeben hat, passt?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es wird langsam dunkel und ihr beschließt, zurück zur Hütte zu gehen.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose < 1",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Bevor ihr euch aufmacht, bleibt Cara kurz stehen und holt etwas aus ihrem Rucksack.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Es ist die Urne.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Sie öffnet diese und verteilt Roses Asche an der großen Tanne.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Ruhe in Frieden, unsere tapfere Rose«, sagt Cara und wischt sich die Tränen aus den Augen.&nbsp;Ihr steht noch längere Zeit da und nimmt Abschied von Rose.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Die Truhe",
       "chapterId": "7",
       "sectionId": "015"
      }
     ]
    },
    {
     "id": "014",
     "title": "Stein",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara hat sich für Schere entschieden. Du gewinnst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara sträubt sich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Du weißt doch, was für Angst ich vor Kleingeziefer habe!« Sie macht die Augen zu, zögert noch einmal und geht langsam mit ihrer Hand in die kalte und glitschige Öffnung des Baumes. Sie flucht – es ist sichtlich kein Spaß für sie.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Doch dann zieht sie, wenn auch etwas hektisch, eine kleine Truhe aus der Öffnung des Baumstammes. Sie drückt dir schnell die Truhe in die Hand und wischt sich mit panischen Bewegungen das Moos, nasse Erde und ein Paar kleine Krabbeltiere von den Händen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gespannt schaut ihr auf die Truhe, nachdem sich Cara wieder beruhigt hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine Gravur ist darauf zu sehen, wie auf dem Buch in Roses Zimmer. Die Initialen H. W., was für <em>Hollow White</em> steht.</p>"
      },
      {
       "type": "addItem",
       "id": "chest-old"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bemerkst die Schlüsselöffnung. Ob diese zum kleinen Schlüssel, den Rose dir gegeben hat, passt?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es wird langsam dunkel und ihr beschließt, zurück zur Hütte zu gehen.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose < 1",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Bevor ihr euch aufmacht, bleibt Cara kurz stehen und holt etwas aus ihrem Rucksack.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Es ist die Urne.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Sie öffnet diese und verteilt Roses Asche an der Tanne.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Ruhe in Frieden, unsere tapfere Rose«, sagt Cara und wischt sich die Tränen aus den Augen.&nbsp;Ihr steht noch eine längere Zeit da und nimmt Abschied von Rose.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Die Truhe",
       "chapterId": "7",
       "sectionId": "015"
      }
     ]
    },
    {
     "id": "015",
     "title": "Die Truhe",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Zurück bei der Hütte angekommen, ist es bereits dunkel geworden. Ihr hört vereinzelt Wölfe in den dunklen Wäldern heulen. Im Kaminzimmer sitzt ihr gemeinsam vor dem warmen Feuer. Im Schutz der Hütte holst du den kleinen Schlüssel aus Roses Zimmer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Langsam steckst du ihn in das Schloss der Truhe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Er passt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du drehst etwas.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es klickt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Truhe öffnet sich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gespannt schaut ihr ins Innere.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Darin: mehrere Fotos und ein verschlossener Umschlag.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p><em>Foto&nbsp;1</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein kleiner weißer Husky-Welpe.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Auf der Rückseite des Fotos steht: Snow</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Foto 2</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Eine Frau mit Babybauch zusammen mit einem bärtigen Mann.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Auf der Rückseite des Fotos steht: Bald zu dritt</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Foto 3</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein neugeborenes Baby in den Händen der Frau in einem Krankenbett.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Auf der Rückseite des Fotos steht: Unser Sonnenschein Rose.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Foto 4–12</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Viele Familienbilder mit der Frau, genauer gesagt Roses Mutter, ihrem Vater und einer heranwachsenden Rose</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Foto 13</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein junges Pärchen unter der Tanne mit der geschnitzten Rose.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Auf der Rückseite steht: Für meine Rose. In Liebe, Pete</p>"
        }
       ]
      },
      {
       "type": "if",
       "condition": "ITEM photo-ella",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Du findest noch ein weiteres Bild in der Truhe. Es ist schwarz-weiß. Darauf siehst du Roses Mutter, wie sie auf einem Abhang am Ice River steht. Umschlossen von großen verschneiten Tannen in einer unbefleckten Landschaft. Eine atemberaubende Aufnahme mit dem Panorama von White Valley.</p>"
        },
        {
         "type": "addItem",
         "id": "photo-ella-old"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdenklich legst du die Fotos zurück in die Truhe und begreifst, dass jedes der Bilder letzte Erinnerungen an Roses Familie sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihre Mutter, ihr Vater und ihr Mann Pete.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Was wohl mit ihrer Familie genau geschehen ist?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ahnst Schreckliches.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Immer mehr verstehst du Roses inneren Schmerz und ihren unermüdlichen Kampf gegen das erbarmungslose Regime des <em>Schwarzen Kreis</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In der Truhe befindet sich noch ein&nbsp;ungeöffneter Papierumschlag.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>An die <em>Frau mit dem verlorenen Kind</em>&nbsp;ist in eleganter Schrift mit bereits verblasster Tinte darauf geschrieben. Du öffnest ihn vorsichtig. Deine Hände zittern vor Aufregung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In diesem befindet sich ein mehrfach gefalteter weißer Zettel. Schritt für Schritt faltest du diesen auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Drei handgeschriebene Zeilen –&nbsp;wieder in eleganter Handschrift. Der Absender ist unbekannt.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Hollow White.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Midnight.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>00:22.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Was hat das zu bedeuten?«, fragst du dich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara liest laut die Worte noch einmal vor.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Hollow White. Midnight. 00:22 …</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Klar … das ist eindeutig!</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du sollst um 00:22 Uhr beim Midnight sein. Das Midnight ist ein altes Motel in den <em>White Valleys</em>, manche nennen das Gebiet auch <em>Hollow White</em>«, sagt Cara selbstverständlich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Überrascht schenkst du Cara ein hoffnungsvolles Lächeln.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ob der Hinweis dich zu Hannah führt?</p>"
      }
     ],
     "next": [
      {
       "title": "Mit Cara sprechen",
       "chapterId": "7",
       "sectionId": "016"
      },
      {
       "title": "Zum Midnight",
       "chapterId": "7",
       "sectionId": "017"
      }
     ]
    },
    {
     "id": "016",
     "title": "Mit Cara sprechen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>»Du kanntest also Rose schon länger?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Cara setzt sich und beginnt zu erzählen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es war während der Zeit im Lager. Über Josef habe ich das erste Mal von Rose erfahren und bin ihr selbst dort bei einer medizinischen Routinekontrolle begegnet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die meiste Zeit war sie im <em>Krankenhaus von Snow Peaks</em>&nbsp;beschäftigt, aber es gab immer wieder diese Untersuchungen, wo sie zu uns ins Lager gebracht wurde. Sie stand bereits direkt unter der Gewalt des <em>Schwarzen Kreis</em> und wurde gezwungen, dich zu observieren, nachdem sie von deiner Schwangerschaft erfahren haben. Hierzu hat sie mich ins Spiel gebracht und wir haben uns des Öfteren getroffen und Informationen ausgetauscht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du ins Krankenhaus von <em>Snow Peaks</em>&nbsp;verlegt wurdest, habe ich eine längere Zeit nichts von dir und Rose gehört. Ich bin vom Schlimmsten ausgegangen, bis du eines Tages zurück ins Lager gebracht wurdest. Ich weiß nicht, ob du dich erinnern kannst, aber du warst die erste Zeit nicht ansprechbar. Meine Sorgen um dich waren nicht in Worte zu fassen, aber du hast es geschafft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es sind einige Jahre verstrichen, als mich über Josef eine Nachricht von Rose erreicht hat. Es ging um deine Tochter Hannah und einen Plan, uns aus dem Lager zu befreien. Ich musste Rose versprechen, zu unserem eigenen Schutz nichts zu sagen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das war wirklich nicht einfach, Judy … «</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bist erleichtert, dass Cara immer zu dir gehalten hat. Eine wahre Freundschaft.</p>"
      }
     ],
     "next": [
      {
       "title": "Zum Midnight",
       "chapterId": "7",
       "sectionId": "017"
      }
     ]
    },
    {
     "id": "017",
     "title": "Zum Midnight",
     "elements": [
      {
       "type": "if",
       "condition": "STATE Rose > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Bevor ihr losfährt, hört ihr Rose Stimme im Nebenraum.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Sie ist wach. Schwach, aber ansprechbar.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Gemeinsam setzt ihr euch zu ihr. Ihr geht es etwas besser. Nachdem Cara ihr einen Schluck Tee gegeben hat, zeigst du ihr die alte Truhe.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Rose beginnt langsam zu sprechen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Ihr habt die Tanne gefunden und mein kleines Rätsel lösen können. Ein magischer Ort. Dort hat damals Pete um meine Hand angehalten. Das ist schon sehr lange her. Wenn ich dort bin, erinnere ich mich immer, wie er sich hinter dem Stamm versteckt hat und mich mit der Schnitzerei und einem Ring überrascht hat. Unser gemeinsamer Ort und ein ideales Versteck für die Truhe.</p>"
        },
        {
         "type": "addItem",
         "id": "ringofrose"
        },
        {
         "type": "paragraph",
         "text": "<p>Die Truhe ist von meinen Eltern, die leider schon lange nicht mehr leben.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Die beiden haben mir zum eigenen Schutz nur das Nötigste erzählt. Viele Jahre haben Pete und ich diese Truhe in unserem kleinen Versteck aufbewahrt, mit dem Wunsch, dass sie eines Tages <em>die Frau mit dem verlorenen Kind</em>, welcher wir begegnen werden, bekommen soll.«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Mit einem Lächeln im Gesicht schläft sie wieder ein.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Cara und du macht euch bereit für die Fahrt zum <em>Motel Midnight</em>. Charlie bleibt bei der Hütte. Ihr beide werdet wahrscheinlich nicht vor Sonnenaufgang wieder zurück sein. Es ist ruhig auf den Straßen von <em>White Valley</em> und nach wenigen Stunden erreicht ihr gegen Mitternacht das Ziel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist stockdunkel.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du die Leuchtschrift vom <em>Motel Midnight</em>&nbsp;in der Ferne siehst, wirst du nervös.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du weißt nicht, was dich erwartet. In dir steigen einige Fragen und Zweifel auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wirst du weitere Hinweise zu Hannah finden? Oder sogar Hannah selbst? Du hast richtig Angst. Angst davor zu scheitern, die Spur zu verlieren. Deine Hannah nie wiederzusehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr fahrt auf einen verschneiten Parkplatz vor dem Motel und macht den Motor des Autos aus. Ihr wartet etwas. Es ist Punkt 00:00. Alles ruhig. 00:22. Niemand erscheint. 00:45. Ungeduldig und nervös steigst du aus dem Auto und läufst an den Appartements des <em>Midnights</em>&nbsp;entlang. Als du dich umsiehst, fallen dir die Zimmernummern auf den Türen auf. Zimmer 00:55, Zimmer 00:56, Zimmer 00:57 und viele weitere Zimmer folgen mit dieser Nummerierung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dir wird schnell klar, dass es sich nicht um eine Uhrzeit, sondern um eine Zimmernummer im <em>Midnight Motel</em>&nbsp;handelt. Welches Genie hat sich das denn ausgedacht?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du vor der Tür 00:22 stehst, wird dir ganz anderes. Du atmest schwer. Deine Hoffnung ist so groß, dass du zum ersten Mal deine kleine Hannah in die Arme schließen kannst. Du gehst zur Tür, atmest tief durch und klopfst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nichts tut sich.</p>"
      }
     ],
     "next": [
      {
       "title": "Noch einmal klopfen",
       "chapterId": "7",
       "sectionId": "018"
      },
      {
       "title": "Tür versuchen zu öffnen",
       "chapterId": "7",
       "sectionId": "019"
      }
     ]
    },
    {
     "id": "018",
     "title": "Noch einmal klopfen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Plötzlich hörst du Geräusche und ein kleines Licht scheint im Zimmer anzugehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du gehst einen Schritt zurück, als die Tür sich vor dir langsam öffnet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein kurzes Quietschen der Tür ertönt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine alte <em>Frau mit schneeweißem Haar</em> steht im Nachthemd vor dir.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 7",
       "chapterId": "7",
       "sectionId": "020"
      }
     ]
    },
    {
     "id": "019",
     "title": "Tür versuchen zu öffnen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die Tür ist verschlossen, als du die Klinke herunterdrückst. Doch du hörst auf einmal Geräusche, die sich aus dem Zimmer der Tür nähern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Licht geht an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du gehst einen Schritt zurück, als die Tür sich langsam einen Spalt öffnet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine alte <em>Frau mit schneeweißem Haar</em> schaut vorsichtig durch den Türschlitz.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 7",
       "chapterId": "7",
       "sectionId": "020"
      }
     ]
    },
    {
     "id": "020",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><a class=\"skip-link\" href=\"javascript:document.documentElement.scrollTo({ top: 100000, behavior: 'smooth' })\">Überspringen</a></p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 2: Der Weg nach Snow Peaks</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine spannungsgeladene Reise beginnt, in welcher Ella, Albert und Snow ums nackte Überleben in der eisigen und gefährlichen Landschaft von White Valley kämpfen. Snow wird dabei stark verletzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 3: Der Hollow White</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Ella und Albert mit letzten Kräften das verschneite Städtchen Snow Peaks erreichen, treffen sie auf alte Freunde von Albert. Frank, einem pensionierten Arzt und seiner Frau Marie, die etwas außerhalb der Stadt in einem größeren Anwesen leben.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise erliegt Snow an seinen Wunden. Gedanken plagen Ella. Hätte Snow gerettet werden können? Mit diesem ungewissen Gefühl setzt sie ihre Suche fort.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow kann in letzter Sekunde von Frank gerettet werden. Albert und Ella sind mit einem großen Schrecken davongekommen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Am ersten Tag in der Stadt lüftet Ella viele Geheimnisse rund um Snow Peaks und deren Einwohner. So erfährt sie vom sagenumwobenen Geschehnis des Hollow White, einer Art Naturphänomen vor über 70 Jahren in der Vergangenheit, bei welchem Bewohner von Snow Peaks spurlos verschwunden sind. Seitdem ist die Stadt in Alarmbereitschaft und es gibt immer wieder Einzelfälle des Verschwindens.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 4: Die Verschwundenen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella trifft auf Alberts Zwillingsschwester Patricia. Die beiden Geschwister offenbaren ihr, dass sie selbst zu den Verschwundenen des Hollow White gehören und als Kinder ganze 40 Jahre später in der Zeit aufgewacht sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Um weiter der Spur zu Hannah zu folgen, besucht Patricia mit Ella das Observatorium, einen Ort, an dem die sogenannten Splitter aufbewahrt werden. Mysteriöse Steine, die an den Plätzen der Verschwundenen gefunden wurden und für die Verbliebenen zum Gedenken aufbewahrt werden. So zeigt Patricia, ihren und Alberts Splitter, der dort schon lange Zeit aufbewahrt wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz der neuen Erkenntnisse tappt Ella auf der Suche nach Hannah weiter im Dunkeln, bis sie eines Nachts in ihrem Tonbandgerät zufällig einen Splitter und daraufhin gemeinsam mit Albert den Splitter von seiner Frau Judy finden. Judy ist vor einigen Jahren in einer Nacht spurlos am Frozen Lake verschwunden. Albert hat sich nach diesem tragischen Verlust in die Wälder von White Valley trauernd zurückgezogen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella und Albert kommen sich auf ihrer Reise immer näher und können ihre Gefühle zueinander nicht mehr verstecken. Als sie neben Albert einschläft, hat sie eine Vision in einem Traum. Ist sie selbst auch eine Verschwundene aus einer anderen Zeit?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 5: Die Flucht</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir springen in der Geschichte ganze 60 Jahre in die Zukunft. Dunkle Zeiten herrschen in Snow Peaks. Der Schwarze Kreis, ein grausames Regime, ist an der Macht, kontrolliert das System und unterdrückt die Bevölkerung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir begleiten Judy, die nach ihrem Verschwinden in Snow Peaks in dieser Zeit aufgewacht ist. Seit ihrem Erscheinen wird sie neben vielen anderen Erschienenen in einem der außerhalb liegenden Lagern gefangen gehalten. Zusammen mit ihrer Freundin Cara gelingt ihr eines Tages die Flucht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die beiden treffen auf die Widerstandsgruppe, eine Bewegung, die seit Jahren aus dem Untergrund gegen den Schwarzen Kreis kämpft. Rose, die Gründerin des Widerstands, gebietet Judy und Cara Unterschlupf, doch sie verheimlicht etwas. So findet Judy eines Tages heraus, dass Rose unter dem drohenden Befehl des Schwarzen Kreises ihr bereits als Krankenschwester begegnet ist und ihre für tot geglaubte Tochter Hannah bei der Geburt genommen hat. Judys Tochter Hannah lebt, wurde aber vor einigen Jahren vom Schwarzen Kreis der Obhut von Rose wieder entrissen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beteuert, dass sie unter drohendem Befehl des Schwarzen Kreises handelte und ihr aller Leben auf dem Spiel stand. So zeigt sie Judy eines Nachts ein Schlupfloch zur streng bewachten Kuppel, wo Hannah das letzte Mal gesehen wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 6: Die Höhle</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben Judys Geschichte lernen wir Georgys zeitgleich kennen. Er und ein zweiter Wissenschaftler namens Dean experimentieren unterhalb der Kuppel in einer Höhle am sogenannten Kalten Stern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein monumentales Artefakt aus dem Universum und der Ursprung des Hollow White. Die Forschungen am Kalten Stern in der Zukunft sind mutmaßlich verantwortlich für das Verschwinden der Menschen des Hollow White in der Vergangenheit. Die sogenannten Erschienenen sind durch die Experimente in der Zukunft aufgewacht und werden seither vom Schwarzen Kreis in Gefangenschaft gehalten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Georgy und Dean werden vom Regime gezwungen, an einer Apparatur am Kalten Stern zu arbeiten, welche Zeitsprünge möglich macht. Es geht um Leben und Tod. Der Schwarze Kreis geht hierbei über Leichen und glaubt an ein apokalyptisches Ende der Welt, welches durch den Auslöser des Hollow White, in der Zukunft geschehen und die Sonne auslöschen wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Nerven liegen blank, sodass Dean eines Tages die Beherrschung verliert und sich mit den Soldaten des Schwarzen Kreises konfrontiert. Beim Versuch, Dean zur Hilfe zu kommen, fallen Schüsse und Georgy wird bewusstlos geschlagen. Als er in einer Zelle wieder aufwacht, muss er dort mehrere Tage ausharren, bis ihm über einen Mittelsmann der Befehl erteilt wird, seine Forschungsarbeit am Kalten Stern fortzusetzen. Zuvor muss er erfahren, dass sein Freund Dean vom Schwarzen Kreis exekutiert wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 7: Schwarze Rosen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir befinden uns wieder bei Judy und Rose in der Kuppel, bei der Suche, die kleine Hannah zu finden. Die beiden werden entdeckt und Rose bei der Flucht stark verletzt. Zusammen können sie, Charlie und Cara, in eine außerhalb der Stadt versteckten Hütte flüchten.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise stirbt Rose. Hätte ihr Tod verhindert werden können?</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Rose überlebt, ist aber vorerst nicht ansprechbar.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Judy erfährt von weiteren Geheimnissen aus Roses Vergangenheit und erhält einen rätselhaften Brief.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ist es möglicherweise ein Hinweis zu ihrer Tochter Hannah?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Spur führt Judy und Cara in einer eiskalten Nacht ins Hotel Midnight. Dort begegnet sie einer alten Frau mit schneeweißem Haar.</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 8",
       "chapterId": "8",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "8",
   "title": "Die Spinne",
   "sections": [
    {
     "id": "001",
     "title": "»Nur noch wenige Tage, die Zeit läuft Georgy!«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ganz tief unterhalb der Erde im unterirdischen Bereich der <em>Kuppel</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der&nbsp;<em>Kalte Stern</em>&nbsp;strahlt eine enorme Hitze aus und taucht die komplette Höhle in ein orangefarbenes, warmes Licht. Der Boden ist mit geschmolzenem Eiswasser bedeckt, sodass sich an einigen Stellen Flüsschen bilden und kleine Steinflächen aus dem seichten Wasser ragen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf einer trockenen Erhebung arbeitest du ununterbrochen an einem reflektierenden Spiegel&nbsp;ähnlichem Instrument, das direkt an der Spitze des <em>Kalten Sterns</em>&nbsp;befestigt ist. Einige Kabel hängen chaotisch herunter und ziehen sich viele Meter lang zu den etwas abseits stehenden Apparaten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In der Arbeit vertieft spürst du plötzlich etwas an deiner Schulter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Hast du mich erschreckt!«, atmest du auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Die kleine Hannah</em> lacht frech und gibt dir ein Glas Wasser.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Mach mal eine Pause, Onkel Georgy.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst mehrere&nbsp;kräftige Schlücke und trinkst hastig das Glas leer.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Was würde ich nur ohne dich machen!«, sagst du mit einem Zwinkern zu Hannah.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie schaut fasziniert auf das spiegelnde Instrument.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Glaubst du, deine Erfindung&nbsp;wird funktionieren?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du wischst dir den Schweiß von der Stirn.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Natürlich, zusammen bekommen wir das doch hin! Davon bin ich fest überzeugt.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst die Kleine beim Wort und legst eine kurze Pause ein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»So ein cleveres siebenjähriges Mädchen ist mir noch nie über den Weg gelaufen«, sagst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Fast acht«, erwidert Hannah.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Natürlich, fast achtjähriges Mädchen«, korrigierst du mit einem Lächeln.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schon wieder ein Jahr her, als wir drei an deinem Geburtstag beim <em>Frozen Lake</em> waren. Ich erinnere mich noch, wie Ella dort fast im See eingebrochen wäre. Ich hatte ihr noch gesagt, das Eis sei zu dünn, aber du kennst sie ja, was für ein Sturschädel sie sein kann. Aber als es unter ihr nur noch so geknackt hat, hättest du ihr Gesicht sehen sollen.&nbsp;Das werde ich nie vergessen«, lachst du und schaust im nächsten Moment demütig auf die vor euch stehende Apparatur.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ja, das war schön am See. Vor allem, dass wir zusammen einmal raus durften. Und Ellas Geschenk. Der Fotoapparat, den sie heimlich mitgenommen hat. Fotografieren macht sehr viel Spaß«, sagt Hannah.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ja, du hast ein echt gutes Auge«, erwidert Georgy.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Onkel Georgy, werden wir Ella wiedersehen?«, fragt Hannah.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust sie mit überzeugendem, dennoch traurigem Blick an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ja Kleines, ich verspreche es dir, wir finden sie.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In dem Moment hört ihr den Aufzug auf der anderen Seite der Höhle. Die schweren Türen des Lastenaufzugs gehen auf und zwei gepanzerte Soldaten betreten die Höhle. Von Weitem schreit euch einer der beiden zu: »Genug für heute!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zurück im Lager im <em>Forschungszentrum</em> liegst du spät abends nervös in deinem Bett. Seit Tagen bist du kaum zum Schlafen gekommen. Es gehen dir zu viele Dinge durch den Kopf. Ellas Verschwinden, Deans Tod, die Zeit in der Zelle und das ungewisse Schicksal der kleinen Hannah und deiner Zukunft. Noch nie hast du so unter Druck gestanden, als dich plötzlich ein vorbeihuschender Schatten aus deiner Gedankenwelt reist.</p>"
      }
     ],
     "next": [
      {
       "title": "Kerze anzünden",
       "chapterId": "8",
       "sectionId": "002"
      },
      {
       "title": "Still sein",
       "chapterId": "8",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "002",
     "title": "Kerze anzünden",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du zündest eine Kerze an und siehst Hannah mitten im Raum stehen.</p>"
      }
     ],
     "next": [
      {
       "title": "Nachteule",
       "chapterId": "8",
       "sectionId": "004"
      }
     ]
    },
    {
     "id": "003",
     "title": "Still sein",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du bist ganz still, als der Schatten langsam immer näher kommt.</p>"
      }
     ],
     "next": [
      {
       "title": "Nachteule",
       "chapterId": "8",
       "sectionId": "004"
      }
     ]
    },
    {
     "id": "004",
     "title": "Nachteule",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Onkel Georgy, ich kann nicht schlafen«, sagt Hannah und reibt sich die Augen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Im Kerzenschein setzt ihr euch zusammen auf den Boden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah versteckt ihre Hände hinter ihrem Rücken und fragt dich:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Welche Hand, Onkel Georgy?«</p>"
      }
     ],
     "next": [
      {
       "title": "Linke Hand",
       "chapterId": "8",
       "sectionId": "005"
      },
      {
       "title": "Rechte Hand",
       "chapterId": "8",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "005",
     "title": "Linke Hand",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie öffnet die linke Hand. Ein geflochtenes Armband aus dünnen Kabeln und Drähten.</p>"
      },
      {
       "type": "addItem",
       "id": "bracelet"
      },
      {
       "type": "paragraph",
       "text": "<p>»Für dich«, sagt Hannah mit strahlenden Augen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gerührt wickelst du dir das kleine Kunstwerk um dein linkes Handgelenk.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es ist wunderschön, danke Hannah.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»So wirst du mich nie vergessen, Onkel Georgy.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit besorgtem Blick sagst du »Wie könnte ich dich jemals vergessen? Jetzt ist aber Zeit, schlafen zu gehen, Kleines.«</p>"
      }
     ],
     "next": [
      {
       "title": "Gute Nacht",
       "chapterId": "8",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "006",
     "title": "Rechte Hand",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Sie öffnet die rechte Hand. »Ooh, tut mir leid, Onkel Georgy«, sagt sie und steckt schnell etwas in ihre Tasche zurück.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das ist unfair«, sagst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah lacht und zieht etwas aus ihrer Hosentasche.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ein Trostpreis für dich.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein kleiner Stein, der die Form eines Herzens hat.</p>"
      },
      {
       "type": "addItem",
       "id": "heart"
      },
      {
       "type": "paragraph",
       "text": "<p>»Den habe ich in der Höhle gefunden.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du den herzförmigen Stein in deiner Hand hältst, musst du an Ella und euer letztes Gespräch denken. Ihr wart nicht ganz derselben Meinung zu eurer Forschungsarbeit. Im Streit hast du den Raum verlassen. Tragischerweise war es das letzte Mal, dass&nbsp;du sie gesehen hast, bevor sie verschwunden ist.</p>"
      }
     ],
     "next": [
      {
       "title": "Gute Nacht",
       "chapterId": "8",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "007",
     "title": "Gute Nacht",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du trägst Hannah vorsichtig zum Bett, deckst sie behutsam zu und gibst ihr einen Gutenachtkuss. Du löschst die Kerze.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah fängt leise zu singen an. Du hörst zu.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Hollow White, ohh Hollow White, höre die Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit so fern. Der weiten Stille entrissen, gereist hierher. Kam nach Snow Peaks. Oh Snow Peaks, ohh Snow Peaks …«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah schläft ein und auch du kannst deine Augen vor Erschöpfung nicht mehr offen halten.&nbsp;Du gehst zurück in dein Bett und schläfst doch noch ein.</p>"
      }
     ],
     "next": [
      {
       "title": "Im Forschungszentrum",
       "chapterId": "8",
       "sectionId": "008"
      }
     ]
    },
    {
     "id": "008",
     "title": "Im Forschungszentrum",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du starrst auf die leeren Plätze von Ella und Dean in eurem Labor. Alles hat sich in nur wenigen Wochen tragisch verändert. Erst Ella, die spurlos verschwunden ist, gefolgt von Dean, der vom <em>Schwarzen Kreis</em>&nbsp;brutal ermordet wurde. Noch nie hast du dich so allein gefühlt und dennoch liegt es jetzt an dir, die Arbeit am <em>Kalten Stern</em>&nbsp;abzuschließen. Die einzige Chance für Hannah und dich, dem <em>Schwarzen Kreis</em>&nbsp;zu entkommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die nächsten Tage arbeitest du im Labor im <em>Forschungszentrum</em>, als du und Hannah an den darauffolgenden Tagen wieder zusammen zur Höhle unterhalb der <em>Kuppel</em>&nbsp;gebracht werdet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hast nur noch diesen einen Tag, bis der <em>Schwarze Kreis</em>&nbsp;Ergebnisse einfordert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit zwei bewaffneten&nbsp;Soldaten&nbsp;fahrt ihr den schweren Aufzug tief hinunter. Nach gut über einer Minute seid ihr dann endlich unten angekommen. Die Soldaten lassen euch hinaus&nbsp;in die beleuchtete Höhle und fahren, direkt ohne ein Wort zu sagen zurück an die Oberfläche. Denen ist bewusst, wie gefährlich es hier unten werden kann und der Vorfall mit Dr. Ella Monroes Verschwinden hat sich herumgesprochen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah ist an diesem Tag wieder dabei und muntert dich auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie lässt kleine Schiffchen eine Wasserquelle, die aus der Wand kommt, hinab durch den seichten Strom fahren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du kämpfst stark gegen deine Angst&nbsp;an und versuchst gleichzeitig, dir deine Sorgen nicht anmerken zu lassen, um Hannah nicht unnötig zu beunruhigen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hast nur noch diesen einen Tag, bevor dich der <em>Schwarze Kreis</em>&nbsp;mit seiner Forderung, die Apparatur in Gang zu bringen, konfrontiert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Einige Stunden vergehen und die Anspannung ist dir sichtlich ins Gesicht geschrieben. Hektisch bedienst du die Konsole. Die Instrumente fahren hoch und die Apparatur gibt unterschiedliche Töne von sich. Hannah nimmt deine Hand. »Geht es dir gut, Onkel Georgy?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust nervös auf das verspiegelte Instrument und kniest dich vor&nbsp;Hannah. Behutsam legst du deine Arme auf ihre Schultern und schaust ihr in die Augen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Hannah, du musst mir jetzt genau zuhören.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir sind so weit. Wir machen alles so, wie wir es die letzten Tage besprochen haben. Du musst jetzt tapfer sein. Wir schaffen das!«.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah schaut dich ängstlich an. »Werden wir jetzt in eine andere Zeit springen?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ja, Kleines, jede Sekunde zählt. Wir müssen weit weg von hier, damit wir Ella wieder finden. Hannah, habe keine Angst, alles wird gut. Ich starte gleich deine Sprungsequenz. Du wirst dich wahrscheinlich an nichts erinnern, wenn du auf der anderen Seite ankommst, aber ich werde schnell bei dir sein, versprochen!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der kleinen Hannah laufen dicke Tränen über ihre Wange. Du nimmst sie fest in deine Arme. »Alles wird gut, meine Kleine«, sagst du und gibst ihr einen Kuss auf die Stirn.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du drückst Hannah den rot leuchtenden Splitter in die Hand und gehst an das andere Ende zur Apparatur und startest die Sprungsequenz, welche gleichzeitig den Alarm in der Höhle und in der Kuppel an der Oberfläche auslöst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Laute Sirenen ertönen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah steht mit dem Splitter nun direkt an der Spitze des <em>Kalten Sterns</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Sprungsequenz zählt herunter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du rufst ihr ein letztes Mal zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich bin so schnell es geht bei dir!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Höhle erleuchtet strahlend hell und ein lauter Knall ertönt. Du hältst dir die Augen zu. Als du sie wieder öffnest, ist die kleine Hannah weg.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie ist verschwunden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Blick ist noch einen längeren Moment auf die leuchtende Spitze des <em>Kalten Sterns</em>&nbsp;gerichtet und die Apparatur fährt neu hoch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du packst ein edles Notizbuch aus Leder und ein Tonbandgerät in deine Tasche und aktivierst eilig deine Sprungsequenz, in welcher du wie bei Hannah den Zeitpunkt der Ankunft des Sprungs verschlüsselst. Aus deiner Jackentasche ziehst du einen weiteren roten Splitter raus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dir geht eine Erinnerung durch den Kopf aus der Zeit, als du in der Zelle warst:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du sitzt auf dem Zellenboden, als der Arzt hereinkommt und deinen gesundheitlichen Zustand kontrolliert. Er blickt sich kurz um, schaut dich an, nickt dir zu und schiebt dir heimlich Ellas Splitter unter die Matratze. Dieser wurde nach Ellas Verschwinden in der Höhle aufgefunden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du küsst die kalte glatte Fläche des roten Splitters. »Bring mir Glück, Ella.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der schwere Lastenaufzug ist zu hören, als am Gangende der Höhle die Aufzugtüren aufgehen und die zwei gepanzerten Soldaten den Raum betreten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hinter den Soldaten erhebt sich ein riesiger Schatten und eine düstere groteske Erscheinung in Kluft betritt die Höhle.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie befiehlt den Soldaten, ihre Waffen zu senken und nähert sich dir mit langsamen Schritten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Tu es nicht, Georgy!«, ertönt eine dumpfe Stimme hinter der Maskierung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als die Person stehen bleibt und langsam ihre Maske abnimmt, bleibt dir der Atem stehen.</p>"
      }
     ],
     "next": [
      {
       "title": "Zurück­weichen",
       "chapterId": "8",
       "sectionId": "009"
      },
      {
       "title": "Nähern",
       "chapterId": "8",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "009",
     "title": "Zurückweichen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du zurückweichst, ertönt ein Schuss, dessen Kugel nur wenige Meter vor deinen Füßen im Wasser einschlägt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bleibst stehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Blick ist fassungslos auf die Person gerichtet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Person neigt den Kopf etwas nach unten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Georgy, bleib stehen!«</p>"
      }
     ],
     "next": [
      {
       "title": "Auge um Auge",
       "chapterId": "8",
       "sectionId": "010b"
      }
     ]
    },
    {
     "id": "010",
     "title": "Nähern",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Einige Schritte näherst du dich und bleibst stehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Du bist es wirklich! Sag mir nicht, dass sie dich bekehrt haben oder warum diese Erscheinung!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Georgy, ich kann dir alles erklären«, sagt die Person vertraut und kommt dir immer näher.</p>"
      }
     ],
     "next": [
      {
       "title": "Auge um Auge",
       "chapterId": "8",
       "sectionId": "010b"
      }
     ]
    },
    {
     "id": "010b",
     "title": "Auge um Auge",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Dein Blick mustert die schwarze Kluft und das auf der rechten Schulter aufgenähte Abzeichen mit einer Spinne in einem schwarzen Kreis.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich kann es nicht glauben, du gehörst zu denen!«, schreist du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Doch dein Schrei wird durch die laute erste Phase deiner Sprungsequenz übertönt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Georgy, ich kann dir alles erklären, aber bitte triff keine falsche Entscheidung«, entgegnet die Person.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Schock sitzt tief und du versuchst dich zu sammeln. Die Zeit läuft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust auf den Splitter, der bereits leicht pulsierend zu summen begonnen hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich dachte … ich dachte, du wärst tot!«, schreist du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Gib mir einen Grund, warum ich dir noch trauen soll?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Alles notwendige Schritte und Inszenierungen, damit wir unser gemeinsames Ziel erreichen. Eine Absicherung, dass du unsere Mission erfolgreich zu Ende bringst. Leider mit Opfern verbunden, aber sieh hin …</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>… du hast es geschafft!«, sagt <em>Dean</em>&nbsp;mit triumphierender Stimme und klatscht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sein Klatschen wird von der herunter zählenden Sequenz im Hintergrund unterbrochen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Deine finale Sprungsequenz beginnt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Opfer bringen, Dean?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit dem Stein in der Hand gehst du vorsichtig Schritt für Schritt zur Spitze des <em>Kalten Sterns</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Blick ist dabei konzentriert auf Dean gerichtet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Dean, ich verstehe es einfach nicht, warum?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dean bewegt sich mit langsamen, schleifenden Schritten durch das seichte Wasser in deine Nähe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Weil uns nichts anderes&nbsp;übrig bleibt«, entgegnet er mit überzeugter Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir sind nur ein kleiner Teil von etwas ganz Großem. Der <em>Schwarze Kreis</em> bereitet die Menschheit auf das jüngste Gericht vor. Das Universum wird unausweichlich über die Menschheit richten!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Was redest du?«, schreist du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der&nbsp;Splitter beginnt nun heftiger zu summen und pulsiert wild in deiner Hand.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nur noch wenige Sekunden bis zum Sprung. Es bleibt keine Zeit mehr.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dean zieht eine Waffe aus seiner Kluft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Du kannst die Menschheit nicht vor ihrem unausweichlichen Schicksal verschonen. Die schwarze Apokalypse ist der Schritt hin zu einer neuen und besseren Welt. Der <em>Hollow White</em> war erst der Stein, der alles ins Rollen brachte. Der Impuls für die Entstehung des <em>Schwarzen Kreis</em>&nbsp;und des uns allen bevorstehenden <em>Hollow Black</em>.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit erhobener Waffe kommt Dean dir immer näher.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mühsam zieht er sein linkes Bein hinter sich her.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Den irren Blick hast du zuvor noch nie in seinen Augen gesehen. Es ist keine Zeit mehr.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es tut mir leid, Georgy, ich habe es versucht. Du hattest deine Chance!«, schreit er dir hinterher.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du drehst dich um und läufst die letzten Meter so schnell du kannst zur Spitze des <em>Kalten Sterns</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das laute Summen baut sich auf und erfüllt die ganze Halle der Höhle.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Viele kleine Lichtblitze wandern über die Wasseroberfläche.</p>"
      }
     ],
     "next": [
      {
       "title": "Splitter an Kalten Stern halten",
       "chapterId": "8",
       "sectionId": "011"
      },
      {
       "title": "Splitter zu Dean werfen",
       "chapterId": "8",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "011",
     "title": "Splitter an Kalten Stern halten",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du wirfst Dean einen letzten Blick zu und hältst den Splitter an die Spitze des <em>Kalten Sterns</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir werden euch finden, Georgy! Wir finden euch!«, schreit Dean und feuert mehrere Schüsse in deine Richtung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es wird strahlend hell und ein lauter Knall ertönt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Licht erlischt. Das Summen verstummt. Das Wasser wird ruhig.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bist verschwunden.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 8",
       "chapterId": "8",
       "sectionId": "013"
      }
     ]
    },
    {
     "id": "012",
     "title": "Splitter zu Dean werfen",
     "elements": [
      {
       "type": "state",
       "id": "dean",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust Dean durchdringend an, holst aus und wirfst&nbsp;in letzter Sekunde den Splitter in seine Richtung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es leuchtet hell auf und ein lauter Knall ertönt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Licht erlischt. Das Summen verstummt. Das Wasser wird ruhig.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die beiden Soldaten laufen zur Spitze des <em>Kalten Sterns</em>&nbsp;und kontrollieren die Umgebung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du und Dean, ihr seid beide verschwunden.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 8",
       "chapterId": "8",
       "sectionId": "013"
      }
     ]
    },
    {
     "id": "013",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><a class=\"skip-link\" href=\"javascript:document.documentElement.scrollTo({ top: 100000, behavior: 'smooth' })\">Überspringen</a></p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 2: Der Weg nach Snow Peaks</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine spannungsgeladene Reise beginnt, in welcher Ella, Albert und Snow ums nackte Überleben in der eisigen und gefährlichen Landschaft von White Valley kämpfen. Snow wird dabei stark verletzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 3: Der Hollow White</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Ella und Albert mit letzten Kräften das verschneite Städtchen Snow Peaks erreichen, treffen sie auf alte Freunde von Albert. Frank, einem pensionierten Arzt und seiner Frau Marie, die etwas außerhalb der Stadt in einem größeren Anwesen leben.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise erliegt Snow an seinen Wunden. Gedanken plagen Ella. Hätte Snow gerettet werden können? Mit diesem ungewissen Gefühl setzt sie ihre Suche fort.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow kann in letzter Sekunde von Frank gerettet werden. Albert und Ella sind mit einem großen Schrecken davongekommen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Am ersten Tag in der Stadt lüftet Ella viele Geheimnisse rund um Snow Peaks und deren Einwohner. So erfährt sie vom sagenumwobenen Geschehnis des Hollow White, einer Art Naturphänomen vor über 70 Jahren in der Vergangenheit, bei welchem Bewohner von Snow Peaks spurlos verschwunden sind. Seitdem ist die Stadt in Alarmbereitschaft und es gibt immer wieder Einzelfälle des Verschwindens.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 4: Die Verschwundenen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella trifft auf Alberts Zwillingsschwester Patricia. Die beiden Geschwister offenbaren ihr, dass sie selbst zu den Verschwundenen des Hollow White gehören und als Kinder ganze 40 Jahre später in der Zeit aufgewacht sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Um weiter der Spur zu Hannah zu folgen, besucht Patricia mit Ella das Observatorium, einen Ort, an dem die sogenannten Splitter aufbewahrt werden. Mysteriöse Steine, die an den Plätzen der Verschwundenen gefunden wurden und für die Verbliebenen zum Gedenken aufbewahrt werden. So zeigt Patricia, ihren und Alberts Splitter, der dort schon lange Zeit aufbewahrt wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz der neuen Erkenntnisse tappt Ella auf der Suche nach Hannah weiter im Dunkeln, bis sie eines Nachts in ihrem Tonbandgerät zufällig einen Splitter und daraufhin gemeinsam mit Albert den Splitter von seiner Frau Judy finden. Judy ist vor einigen Jahren in einer Nacht spurlos am Frozen Lake verschwunden. Albert hat sich nach diesem tragischen Verlust in die Wälder von White Valley trauernd zurückgezogen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella und Albert kommen sich auf ihrer Reise immer näher und können ihre Gefühle zueinander nicht mehr verstecken. Als sie neben Albert einschläft, hat sie eine Vision in einem Traum. Ist sie selbst auch eine Verschwundene aus einer anderen Zeit?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 5: Die Flucht</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir springen in der Geschichte ganze 60 Jahre in die Zukunft. Dunkle Zeiten herrschen in Snow Peaks. Der Schwarze Kreis, ein grausames Regime, ist an der Macht, kontrolliert das System und unterdrückt die Bevölkerung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir begleiten Judy, die nach ihrem Verschwinden in Snow Peaks in dieser Zeit aufgewacht ist. Seit ihrem Erscheinen wird sie neben vielen anderen Erschienenen in einem der außerhalb liegenden Lagern gefangen gehalten. Zusammen mit ihrer Freundin Cara gelingt ihr eines Tages die Flucht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die beiden treffen auf die Widerstandsgruppe, eine Bewegung, die seit Jahren aus dem Untergrund gegen den Schwarzen Kreis kämpft. Rose, die Gründerin des Widerstands, gebietet Judy und Cara Unterschlupf, doch sie verheimlicht etwas. So findet Judy eines Tages heraus, dass Rose unter dem drohenden Befehl des Schwarzen Kreises ihr bereits als Krankenschwester begegnet ist und ihre für tot geglaubte Tochter Hannah bei der Geburt genommen hat. Judys Tochter Hannah lebt, wurde aber vor einigen Jahren vom Schwarzen Kreis der Obhut von Rose wieder entrissen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beteuert, dass sie unter drohendem Befehl des Schwarzen Kreises handelte und ihr aller Leben auf dem Spiel stand. So zeigt sie Judy eines Nachts ein Schlupfloch zur streng bewachten Kuppel, wo Hannah das letzte Mal gesehen wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 6: Die Höhle</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben Judys Geschichte lernen wir Georgys zeitgleich kennen. Er und ein zweiter Wissenschaftler namens Dean experimentieren unterhalb der Kuppel in einer Höhle am sogenannten Kalten Stern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein monumentales Artefakt aus dem Universum und der Ursprung des Hollow White. Die Forschungen am Kalten Stern in der Zukunft sind mutmaßlich verantwortlich für das Verschwinden der Menschen des Hollow White in der Vergangenheit. Die sogenannten Erschienenen sind durch die Experimente in der Zukunft aufgewacht und werden seither vom Schwarzen Kreis in Gefangenschaft gehalten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Georgy und Dean werden vom Regime gezwungen, an einer Apparatur am Kalten Stern zu arbeiten, welche Zeitsprünge möglich macht. Es geht um Leben und Tod. Der Schwarze Kreis geht hierbei über Leichen und glaubt an ein apokalyptisches Ende der Welt, welches durch den Auslöser des Hollow White, in der Zukunft geschehen und die Sonne auslöschen wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Nerven liegen blank, sodass Dean eines Tages die Beherrschung verliert und sich mit den Soldaten des Schwarzen Kreises konfrontiert. Beim Versuch, Dean zur Hilfe zu kommen, fallen Schüsse und Georgy wird bewusstlos geschlagen. Als er in einer Zelle wieder aufwacht, muss er dort mehrere Tage ausharren, bis ihm über einen Mittelsmann der Befehl erteilt wird, seine Forschungsarbeit am Kalten Stern fortzusetzen. Zuvor muss er erfahren, dass sein Freund Dean vom Schwarzen Kreis exekutiert wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 7: Schwarze Rosen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir befinden uns wieder bei Judy und Rose in der Kuppel, bei der Suche, die kleine Hannah zu finden. Die beiden werden entdeckt und Rose bei der Flucht stark verletzt. Zusammen können sie, Charlie und Cara, in eine außerhalb der Stadt versteckten Hütte flüchten.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise stirbt Rose. Hätte ihr Tod verhindert werden können?</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Rose überlebt, ist aber vorerst nicht ansprechbar.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Judy erfährt von weiteren Geheimnissen aus Roses Vergangenheit und erhält einen rätselhaften Brief.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ist es möglicherweise ein Hinweis zu ihrer Tochter Hannah?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Spur führt Judy und Cara in einer eiskalten Nacht ins Hotel Midnight. Dort begegnet sie einer alten Frau mit schneeweißem Haar.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 8: Die Spinne</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit Hochdruck arbeitet Georgy daran, einen Weg zu finden, dem Schwarzen Kreis zu entkommen. Aber er ist nicht allein. Die kleine Hannah ist bei ihm, welche bei den Forschern seit einigen Jahren aufwächst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Wettlauf gegen den sicheren Tod beginnt und Georgy ist ununterbrochen daran, die Forschungsarbeit von Dr. Ella Monroe, die vor Wochen spurlos am Kalten Stern verschwunden ist, fertig zu bringen. Die Apparatur ist seit dem Vorfall von Ellas Verschwinden in einem katastrophalen Zustand, doch es ist Georgys und Hannahs letzte Chance, durch einen Zeitsprung, zu entkommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Georgy am letzten Tag seiner Frist die Maschine halbwegs funktionsfähig bekommt, schickt er Hannah als Erstes in die Vergangenheit, um zumindest sie aus den Fängen des Regimes zu retten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als er selbst springen will, stellt sich ein alter Bekannter ihm in den Weg. Es ist Dean, der nicht nur lebt, sondern Georgy dem Anschein nach verraten hat und zum Schwarzen Kreis gehört. Georgy schafft es gerade noch durch einen Zeitsprung, den tödlichen Schüssen zu entkommen.</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 9",
       "chapterId": "9",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "9",
   "title": "Neue Heimat",
   "sections": [
    {
     "id": "001",
     "title": "59 Jahre zuvor",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Ein Jahr nach deiner&nbsp;und Alberts Ankunft in <em>Snow Peaks</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Entfernte Klänge sind in den dunklen Gassen der Altstadt in <em>Snow Peaks</em>&nbsp;zu hören. Die Beleuchtung des <em>Stardusts</em>&nbsp;strahlt eine wohlige Atmosphäre aus.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Hollow White, Hollow White …«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Deine Aufmerksamkeit gehört ganz der heutigen Liveband, die auf einer kleinen Bühne mit ihren Akustikgitarren spielt. Als der letzte Song beendet ist, wird kräftig vom Publikum applaudiert. Das <em>Stardust</em>&nbsp;ist so gut besucht wie schon lange nicht mehr.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Danke <em>Snow Peaks</em>, ihr seid großartig!«, bedankt sich der Sänger. Der Gitarrist verbeugt sich und verlässt die Bühne.</p>"
      }
     ],
     "next": [
      {
       "title": "Zugabe",
       "chapterId": "9",
       "sectionId": "002"
      },
      {
       "title": "Zur Küche gehen",
       "chapterId": "9",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "002",
     "title": "Zugabe",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die beiden Musiker kommen noch einmal auf die kleine Bühne und setzen sich auf die Barhocker.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»<em>Snow Peaks!</em>&nbsp;Unsere Zugabe für heute Abend. Unser Song <em>Waiting</em>.«</p>"
      },
      {
       "type": "addItem",
       "id": "maevia"
      }
     ],
     "next": [
      {
       "title": "Zur Küche gehen",
       "chapterId": "9",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "003",
     "title": "Zur Küche gehen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du legst gerade deine Schürze ab, als Johnny, der Besitzer des <em>Stardust</em>, die Küche betritt. »Elli, was soll ich nur ohne dich&nbsp;machen?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du wirst leicht verlegen und wehmütig.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Johnny, es ist nur für eine kurze Zeit. Du wirst sehen – bald bin ich wieder zurück«, sagst du.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Draußen hupt ein Fahrzeug.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sag deinem Mann, dass er schön auf dich aufpassen soll, nicht dass mir was zu Ohren kommt«, lächelt Johnny&nbsp;und umarmt dich herzlich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Bis bald meine liebe Elli. Dass du mich auch ja oft besuchst, wenn deine Kleine das Licht dieser Welt erblickt.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit einem liebevollen Blick gibst du&nbsp;Johnny&nbsp;einen Kuss auf die Wange und verlässt über den hinteren Ausgang das <em>Stardust</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Draußen steht Albert mit seinem Truck.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Er nimmt dich in den Arm, gibt dir einen Kuss und spricht dir sanft ins Ohr. »Bist du so weit?«</p>"
      }
     ],
     "next": [
      {
       "title": "Zur Kuppel",
       "chapterId": "9",
       "sectionId": "004"
      },
      {
       "title": "Home Sweet Home",
       "chapterId": "9",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "004",
     "title": "Zur Kuppel",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Albert legt ein neues Mixtape ins Kassettendeck, dreht den Zündschlüssel um und fährt dich ein kurzes Stück zur <em>Kuppel</em>&nbsp;ins Zentrum von <em>Snow Peaks</em>.</p>"
      },
      {
       "type": "addItem",
       "id": "lordneon3"
      },
      {
       "type": "paragraph",
       "text": "<p>Kurz davor lässt dich Albert hinaus.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Bis in einer Stunde, ich hole dich genau hier wieder ab«, sagt er und fährt weiter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du den Eingang der <em>Kuppel</em>&nbsp;betrittst, wirst du von einer Frau in Weiß am Empfang begrüßt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Herzlich willkommen zur freien Nacht zum Gedenken an die <em>Verschwundenen</em>.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Frau holt das Gästebuch hervor.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Seltsam, ich finde Sie nicht in unseren Büchern. Wie war Ihr Name noch einmal?«</p>"
      }
     ],
     "next": [
      {
       "title": "Erster Besuch",
       "chapterId": "9",
       "sectionId": "005"
      },
      {
       "title": "Name sagen",
       "chapterId": "9",
       "sectionId": "006"
      }
     ]
    },
    {
     "id": "005",
     "title": "Erster Besuch",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Die Frau in Weiß&nbsp;trägt dich in das Besuchersystem neu ein. »Aus Sicherheitsgründen müssen wir immer noch jeden Besucher erfassen, auch wenn es schon lange keine Ereignisse des Verschwindens mehr gab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Fertig, Sie können rein. Wenn Sie Fragen haben, kommen Sie gerne auf mich zu.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit einem Lächeln betrittst du die <em>Kuppel</em>&nbsp;und gehst ins Zentrum zum <em>Kalten Stern</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist still und ruhig in der Anlage, dennoch begegnest du dem einen oder anderen Einwohner von <em>Snow Peaks</em>. Du schaust auf den <em>Kalten Stern</em>, der mittlerweile von den grünen Bäumen und Büschen eingewachsen ist. Viele Lichter sind installiert und beleuchten das Blätterkleid der Bäume. An einer Bank setzt du dich. Du denkst an die letzten Wochen und sprichst: »Hannah, ich denke jeden Tag an dich. Es geht bald los. Ich freue mich, aber habe auch Angst. Wenn du mich hörst: Ich habe dich nicht vergessen …«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du streichelst sanft über deinen Bauch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Baby strampelt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Stunde vergeht schnell und du gehst zurück zu Albert, der auf dich draußen bereits wartet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr verlasst das Zentrum von <em>Snow Peaks</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Home Sweet Home",
       "chapterId": "9",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "006",
     "title": "Name sagen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Ich kann Sie leider nicht in unseren Büchern finden, Frau Blake. Aber kein Problem, ich lege Sie einfach neu an. Aus Sicherheitsgründen müssen wir immer noch jeden Besucher erfassen, auch wenn es schon lange keine Ereignisse des Verschwindens mehr gab. So, Sie können rein. Wenn Sie Fragen haben, kommen Sie gerne auf mich zu.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit einem Lächeln betrittst du die <em>Kuppel</em>&nbsp;und gehst ins Zentrum zum <em>Kalten Stern</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist still und ruhig in der <em>Kuppel</em>. Du schaust auf den <em>Kalten Stern</em>, der mittlerweile von den grünen Bäumen und Büschen eingewachsen ist. Viele Lichter sind installiert und beleuchten das Blätterkleid der Bäume. An einer Bank setzt du dich. Du denkst an die letzten Wochen und sprichst zu dir: »Hannah, ich denke jeden Tag an dich. Es geht bald los. Ich freue mich, aber habe auch Angst. Wenn du mich hörst: Ich habe dich nicht vergessen …«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du streichelst sanft über deinen Bauch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Baby strampelt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Stunde vergeht schnell und du gehst zurück zu Albert, der auf dich draußen bereits wartet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr verlasst das Zentrum von <em>Snow Peaks</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Home Sweet Home",
       "chapterId": "9",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "007",
     "title": "Home Sweet Home",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als ihr in das Anwesen einbiegt, begrüßt euch Frank, der gerade die Post leert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es gibt in fünf Minuten Abendessen, bis gleich.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr fahrt die Einfahrt hinein und bleibt noch kurz im Auto sitzen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Es war eine schöne Idee, zu Marie und Frank zu ziehen. Ich mag es hier etwas außerhalb der Stadt.« Albert schaut glücklich und legt seine Hand behutsam auf deinen Bauch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das Baby bewegt sich«, sagt er und strahlt mit einem Lächeln.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr steigt aus dem Truck und betretet das Haus, als Marie euch am Eingang begrüßt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Meine Lieben, es gibt gleich Essen, wisst ihr, wo Frank steckt?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Frank betritt in dem Moment die Tür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Bin schon da!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als ihr alle fertig gegessen habt, durchwühlt Frank die Post.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schon wieder einer dieser komischen Propagandablätter dieser Sekte. Der <em>Schwarze Kreis</em>«, flucht Frank und wirft diesen direkt in den Mülleimer.</p>"
      }
     ],
     "next": [
      {
       "title": "Propaganda nehmen",
       "chapterId": "9",
       "sectionId": "008"
      },
      {
       "title": "An den Tisch setzen",
       "chapterId": "9",
       "sectionId": "009"
      }
     ]
    },
    {
     "id": "008",
     "title": "Propaganda nehmen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>»Der <em>Hollow White</em> war erst der Anfang. Das Ende der Welt wird kommen. Tretet dem <em>Schwarzen Kreis</em>&nbsp;bei, bevor es zu spät ist«, steht auf dem Zettel.</p>"
      },
      {
       "type": "addItem",
       "id": "propaganda"
      }
     ],
     "next": [
      {
       "title": "An den Tisch setzen",
       "chapterId": "9",
       "sectionId": "009"
      }
     ]
    },
    {
     "id": "009",
     "title": "An den Tisch setzen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Albert steht auf und schaut in die Runde. »Es gibt etwas zu feiern!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Maria, Frank und du schaut ihn gespannt an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella, du gehörst jetzt offiziell zu unserer Gemeinde von <em>Snow Peaks</em>.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Endlich!«, sagt Frank und klatscht laut in die Hände. »Das hat ja ewig gedauert!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Und der Stadtrat hat beschlossen, dass die Sirenen in der Stadt und an der <em>Kuppel</em>&nbsp;die kommenden Tage abgeschaltet werden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Seit über fünf&nbsp;Jahren&nbsp;gab es keinen Vorfall des Verschwindens mehr hier in <em>Snow Peaks</em>. Es ist Zeit, dass wir alle den <em>Hollow White</em>&nbsp;endgültig hinter uns lassen und ein normales Leben führen«, sagt Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das sind wunderbare Neuigkeiten«, freut sich Marie.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zusammen lasst ihr den Abend noch feierlich ausklingen, bevor Albert und du eure Wohnung im oberen Stock des Hauses betretet.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow&nbsp;läuft zu euch ins Zimmer und legt sich direkt auf seinen Stammplatz unter dem Kamin.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Es vergehen Tage, du machst einiges&nbsp;am Haus und Marie und Frank leisten dir des Öfteren Gesellschaft. Patricia kommt auch regelmäßig zu Besuch, eine richtige Freundschaft ist entstanden. Sie ist schon ganz aufgeregt, bald Tante zu werden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert ist Beschäftigter der Stadt und tagsüber meistens mit dem Truck unterwegs.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es sind nur noch wenige Wochen bis zum Geburtstermin.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es hupt draußen, als Marie und Frank aus der Ausfahrt fahren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wir sind für ein paar Stunden in der Stadt und machen einige Besorgungen.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du sitzt vor dem Kamin und bist in ein Buch vertieft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Titel lautet: Der <em>Kalte Stern</em>&nbsp;und behandelt die Geschehnisse des <em>Hollow White</em>. Der Autor heißt <em>Dr. Isaac Halley</em>&nbsp;und ist laut Biografie auf der Rückseite, einer der wichtigsten Wissenschaftler in <em>Snow Peaks</em>&nbsp;gewesen. Unter anderem war er der Gründungsvater der <em>Kuppel</em>, des <em>Observatoriums</em>&nbsp;und hat am Wiederaufbau von <em>Snow Peaks</em>&nbsp;mitgewirkt.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow leistet dir Gesellschaft und liegt ausgestreckt auf seiner Decke.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist richtig still in dem großen Haus, nur gelegentlich wird diese Stille durch die Standuhr unten bei Marie und Frank gestört, wenn es die volle Stunde schlägt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du döst gerade ein wenig weg, als es plötzlich dreimal an der Haustür klopft.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow beginn kräftig zu bellen.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Haustür nicht öffnen",
       "chapterId": "9",
       "sectionId": "010"
      },
      {
       "title": "Haustür öffnen",
       "chapterId": "9",
       "sectionId": "011"
      }
     ]
    },
    {
     "id": "010",
     "title": "Haustür nicht öffnen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du bleibst im Stuhl sitzen, als es erneut dreimal stärker an die Haustür klopft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es scheint wichtig zu&nbsp;sein.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow bellt wie verrückt und zieht an dir. Was ist nur mit ihm los, so kennst du ihn gar nicht.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Haustür öffnen",
       "chapterId": "9",
       "sectionId": "011"
      }
     ]
    },
    {
     "id": "011",
     "title": "Haustür öffnen",
     "elements": [
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow läuft bellend die Treppe hinunter.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du gehst langsam die Treppe hinunter und öffnest die Haustür einen kleinen Spalt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine alte <em>Frau mit schneeweißem Haar</em>&nbsp;ist zu erkennen und steht warm eingepackt vor eurer Haustüre. Auf die Frage, wie du ihr helfen kannst, sagt sie nichts.</p>"
      }
     ],
     "next": [
      {
       "title": "Tür öffnen",
       "chapterId": "9",
       "sectionId": "012"
      },
      {
       "title": "Tür nicht öffnen",
       "chapterId": "9",
       "sectionId": "013"
      }
     ]
    },
    {
     "id": "012",
     "title": "Tür öffnen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du öffnest die Haustür und erstarrst, als du dir die alte Dame genauer ansiehst. Für einen kurzen Moment bleibt die Zeit stehen. Schneeflocken setzen sich auf das schneeweiße Haar der alten Dame.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow läuft direkt zu ihr und schnuppert.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Ihre warmen Gesichtszüge scheinen dir vertraut. Das kann nicht sein …</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Vorsichtig gleitet dir ein <em>»Hannah?«</em>,&nbsp;über die Lippen.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 9",
       "chapterId": "9",
       "sectionId": "014"
      }
     ]
    },
    {
     "id": "013",
     "title": "Tür nicht öffnen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du lässt die Haustür wieder ins Schloss fallen, diese Situation ist zu seltsam, so selten ist hier draußen Besuch. Erneut klopft es an die Tür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bringst es nicht übers Herz, die alte Frau draußen in der Kälte so stehenzulassen.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow ist wie besessen und kratzt wie wild an der Tür. So hast du ihn noch nie erlebt.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Haustür öffnen",
       "chapterId": "9",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "014",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><a class=\"skip-link\" href=\"javascript:document.documentElement.scrollTo({ top: 100000, behavior: 'smooth' })\">Überspringen</a></p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 2: Der Weg nach Snow Peaks</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine spannungsgeladene Reise beginnt, in welcher Ella, Albert und Snow ums nackte Überleben in der eisigen und gefährlichen Landschaft von White Valley kämpfen. Snow wird dabei stark verletzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 3: Der Hollow White</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Ella und Albert mit letzten Kräften das verschneite Städtchen Snow Peaks erreichen, treffen sie auf alte Freunde von Albert. Frank, einem pensionierten Arzt und seiner Frau Marie, die etwas außerhalb der Stadt in einem größeren Anwesen leben.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise erliegt Snow an seinen Wunden. Gedanken plagen Ella. Hätte Snow gerettet werden können? Mit diesem ungewissen Gefühl setzt sie ihre Suche fort.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow kann in letzter Sekunde von Frank gerettet werden. Albert und Ella sind mit einem großen Schrecken davongekommen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Am ersten Tag in der Stadt lüftet Ella viele Geheimnisse rund um Snow Peaks und deren Einwohner. So erfährt sie vom sagenumwobenen Geschehnis des Hollow White, einer Art Naturphänomen vor über 70 Jahren in der Vergangenheit, bei welchem Bewohner von Snow Peaks spurlos verschwunden sind. Seitdem ist die Stadt in Alarmbereitschaft und es gibt immer wieder Einzelfälle des Verschwindens.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 4: Die Verschwundenen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella trifft auf Alberts Zwillingsschwester Patricia. Die beiden Geschwister offenbaren ihr, dass sie selbst zu den Verschwundenen des Hollow White gehören und als Kinder ganze 40 Jahre später in der Zeit aufgewacht sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Um weiter der Spur zu Hannah zu folgen, besucht Patricia mit Ella das Observatorium, einen Ort, an dem die sogenannten Splitter aufbewahrt werden. Mysteriöse Steine, die an den Plätzen der Verschwundenen gefunden wurden und für die Verbliebenen zum Gedenken aufbewahrt werden. So zeigt Patricia, ihren und Alberts Splitter, der dort schon lange Zeit aufbewahrt wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz der neuen Erkenntnisse tappt Ella auf der Suche nach Hannah weiter im Dunkeln, bis sie eines Nachts in ihrem Tonbandgerät zufällig einen Splitter und daraufhin gemeinsam mit Albert den Splitter von seiner Frau Judy finden. Judy ist vor einigen Jahren in einer Nacht spurlos am Frozen Lake verschwunden. Albert hat sich nach diesem tragischen Verlust in die Wälder von White Valley trauernd zurückgezogen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella und Albert kommen sich auf ihrer Reise immer näher und können ihre Gefühle zueinander nicht mehr verstecken. Als sie neben Albert einschläft, hat sie eine Vision in einem Traum. Ist sie selbst auch eine Verschwundene aus einer anderen Zeit?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 5: Die Flucht</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir springen in der Geschichte ganze 60 Jahre in die Zukunft. Dunkle Zeiten herrschen in Snow Peaks. Der Schwarze Kreis, ein grausames Regime, ist an der Macht, kontrolliert das System und unterdrückt die Bevölkerung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir begleiten Judy, die nach ihrem Verschwinden in Snow Peaks in dieser Zeit aufgewacht ist. Seit ihrem Erscheinen wird sie neben vielen anderen Erschienenen in einem der außerhalb liegenden Lagern gefangen gehalten. Zusammen mit ihrer Freundin Cara gelingt ihr eines Tages die Flucht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die beiden treffen auf die Widerstandsgruppe, eine Bewegung, die seit Jahren aus dem Untergrund gegen den Schwarzen Kreis kämpft. Rose, die Gründerin des Widerstands, gebietet Judy und Cara Unterschlupf, doch sie verheimlicht etwas. So findet Judy eines Tages heraus, dass Rose unter dem drohenden Befehl des Schwarzen Kreises ihr bereits als Krankenschwester begegnet ist und ihre für tot geglaubte Tochter Hannah bei der Geburt genommen hat. Judys Tochter Hannah lebt, wurde aber vor einigen Jahren vom Schwarzen Kreis der Obhut von Rose wieder entrissen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beteuert, dass sie unter drohendem Befehl des Schwarzen Kreises handelte und ihr aller Leben auf dem Spiel stand. So zeigt sie Judy eines Nachts ein Schlupfloch zur streng bewachten Kuppel, wo Hannah das letzte Mal gesehen wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 6: Die Höhle</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben Judys Geschichte lernen wir Georgys zeitgleich kennen. Er und ein zweiter Wissenschaftler namens Dean experimentieren unterhalb der Kuppel in einer Höhle am sogenannten Kalten Stern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein monumentales Artefakt aus dem Universum und der Ursprung des Hollow White. Die Forschungen am Kalten Stern in der Zukunft sind mutmaßlich verantwortlich für das Verschwinden der Menschen des Hollow White in der Vergangenheit. Die sogenannten Erschienenen sind durch die Experimente in der Zukunft aufgewacht und werden seither vom Schwarzen Kreis in Gefangenschaft gehalten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Georgy und Dean werden vom Regime gezwungen, an einer Apparatur am Kalten Stern zu arbeiten, welche Zeitsprünge möglich macht. Es geht um Leben und Tod. Der Schwarze Kreis geht hierbei über Leichen und glaubt an ein apokalyptisches Ende der Welt, welches durch den Auslöser des Hollow White, in der Zukunft geschehen und die Sonne auslöschen wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Nerven liegen blank, sodass Dean eines Tages die Beherrschung verliert und sich mit den Soldaten des Schwarzen Kreises konfrontiert. Beim Versuch, Dean zur Hilfe zu kommen, fallen Schüsse und Georgy wird bewusstlos geschlagen. Als er in einer Zelle wieder aufwacht, muss er dort mehrere Tage ausharren, bis ihm über einen Mittelsmann der Befehl erteilt wird, seine Forschungsarbeit am Kalten Stern fortzusetzen. Zuvor muss er erfahren, dass sein Freund Dean vom Schwarzen Kreis exekutiert wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 7: Schwarze Rosen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir befinden uns wieder bei Judy und Rose in der Kuppel, bei der Suche, die kleine Hannah zu finden. Die beiden werden entdeckt und Rose bei der Flucht stark verletzt. Zusammen können sie, Charlie und Cara, in eine außerhalb der Stadt versteckten Hütte flüchten.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise stirbt Rose. Hätte ihr Tod verhindert werden können?</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Rose überlebt, ist aber vorerst nicht ansprechbar.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Judy erfährt von weiteren Geheimnissen aus Roses Vergangenheit und erhält einen rätselhaften Brief.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ist es möglicherweise ein Hinweis zu ihrer Tochter Hannah?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Spur führt Judy und Cara in einer eiskalten Nacht ins Hotel Midnight. Dort begegnet sie einer alten Frau mit schneeweißem Haar.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 8: Die Spinne</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit Hochdruck arbeitet Georgy daran, einen Weg zu finden, dem Schwarzen Kreis zu entkommen. Aber er ist nicht allein. Die kleine Hannah ist bei ihm, welche bei den Forschern seit einigen Jahren aufwächst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Wettlauf gegen den sicheren Tod beginnt und Georgy ist ununterbrochen daran, die Forschungsarbeit von Dr. Ella Monroe, die vor Wochen spurlos am Kalten Stern verschwunden ist, fertig zu bringen. Die Apparatur ist seit dem Vorfall von Ellas Verschwinden in einem katastrophalen Zustand, doch es ist Georgys und Hannahs letzte Chance, durch einen Zeitsprung, zu entkommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Georgy am letzten Tag seiner Frist die Maschine halbwegs funktionsfähig bekommt, schickt er Hannah als Erstes in die Vergangenheit, um zumindest sie aus den Fängen des Regimes zu retten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als er selbst springen will, stellt sich ein alter Bekannter ihm in den Weg. Es ist Dean, der nicht nur lebt, sondern Georgy dem Anschein nach verraten hat und zum Schwarzen Kreis gehört. Georgy schafft es gerade noch durch einen Zeitsprung, den tödlichen Schüssen zu entkommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 9: Neue Heimat</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir springen wieder zurück in die Vergangenheit zu Ella.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Jahr ist seit ihrer Ankunft in Snow Peaks bereits vergangen. Sie hat in dem Städtchen eine neue Heimat gefunden und erwartet zusammen mit Albert ein Kind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kurz vor der Geburt verbringt sie die meiste Zeit allein in ihrer gemeinsamen Wohnung beim Anwesen von Marie und Frank.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eines Tages klopft es an der Haustüre.</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 10",
       "chapterId": "10",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "10",
   "title": "Der Wunsch",
   "sections": [
    {
     "id": "001",
     "title": "»Hannah?«",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Der Schreck steht dir wie ins Gesicht geschrieben. Vor dir steht eine alte Frau mit schneeweißem Haar, die eine verblüffende Ähnlichkeit mit der kleinen Hannah auf dem Bild hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Kälte zieht durch den Hausflur.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Perplex und neben dir bittest du die alte Dame&nbsp;erst einmal hereinzukommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Langsam geht ihr die Treppe nach oben. Unter euren Füßen knirscht das Holz der Diele. Du öffnest die Tür zum Wohnzimmer und bittest die Frau hinein.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow läuft durch den engen Türschlitz und legt sich direkt auf seine Decke.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Der warme Kamin im Wohnzimmer knistert. Die Dame legt ihren Mantel ab, schaut sich kurz um und sucht direkt den Augenkontakt zu dir.</p>"
      }
     ],
     "next": [
      {
       "title": "Ist es Hannah?",
       "chapterId": "10",
       "sectionId": "002"
      },
      {
       "title": "Es ist Hannah!",
       "chapterId": "10",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "002",
     "title": "Ist es Hannah?",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "state",
       "id": "skeptiker",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Verunsichert läufst du zum Fenster und weichst ihrem Augenkontakt aus.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow merkt deine innere Unruhe und beginnt zu winseln.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst das Foto mit der jungen Hannah vom Kaminsims. Die starke Ähnlichkeit ist nicht zu bestreiten. Ihre gealterte Erscheinung ist dennoch einfach unerklärlich. Das schneeweiße Haar … außerdem zeichnen tiefe Falten ihr Gesicht. Sie muss um die 70 Jahre alt sein. Anstatt eines jungen, heranwachsenden Mädchens steht eine alte Frau vor dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben Zweifeln schießen dir unzählige Fragen durch den Kopf.</p>"
      }
     ],
     "next": [
      {
       "title": "»Deine Stimme?«",
       "chapterId": "10",
       "sectionId": "004"
      },
      {
       "title": "»Wie alt bist du?«",
       "chapterId": "10",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "003",
     "title": "Es ist Hannah!",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit langsamen Schritten gehst du auf Hannah zu. Es dauert nur einen kurzen Augenblick, bis das Eis bricht und ihr eure Gefühle nicht mehr halten könnt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist unfassbar, dieser Moment des Wiedersehens, unbeschreiblich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wie oft hast du mit deinen Gedanken gespielt, wie es sein wird, wenn du Hannah das erste Mal wiedersehen würdest. Die Hoffnung hattest du nie aufgegeben. Trotz Hannahs unerwarteten Erscheinungsbildes bist du erst einmal überwältigt. Die Zeit scheint in diesem Moment stillzustehen. In der unteren Etage ist die Wanduhr zu hören, welche die volle Stunde schlägt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr schaut euch eine Weile an, bis dein Blick zu deinem Bauch geht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sie ist gerade wach, sie bewegt sich. Ein Mädchen, ein kleines Wunder«, sagst du mit weicher Stimme.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah schaut dich mit strahlenden Augen an, sagt aber kein einziges Wort.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kein Zweifel. Ihre Gesichtszüge, ihre Augen, ihr Lächeln gleichen der jungen Hannah auf dem Foto, und dennoch sitzt eine alte Frau mit schneeweißem Haar und tiefen Falten vor dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Unzählige Fragen schießen dir durch den Kopf.</p>"
      }
     ],
     "next": [
      {
       "title": "»Deine Stimme?«",
       "chapterId": "10",
       "sectionId": "004"
      },
      {
       "title": "»Wie alt bist du?«",
       "chapterId": "10",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "004",
     "title": "»Deine Stimme?«",
     "elements": [
      {
       "type": "state",
       "id": "deckname",
       "modifier": "=1"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah kramt ein kleines Notizbuch mit einem edlen Ledereinband aus ihrem Mantel und blättert. Dir sticht sofort ihre elegante Handschrift ins Auge. Neben einigen Notizen und Zeichnungen&nbsp;beginnt sie, den Stift auf das Papier zu setzen. Sie schreibt für dich folgende Worte mit blauer Tinte auf eine Seite.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Meine liebe Ella, ich bin überwältigt, dich endlich gefunden zu haben. Vor einigen Jahren erlitt ich einen schweren Schlaganfall, den ich überlebt habe, jedoch habe ich meine Stimme verloren.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Nach Alter fragen",
       "chapterId": "10",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "005",
     "title": "Nach Alter fragen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Hannah notiert folgende Sätze mit blauer Tinte auf eine Seite in ihrem Notizbuch.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ich bin schon sehr lange in Snow Peaks. Seit über 60 Jahren. Ella, ich bin jetzt 68 Jahre alt.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Aus Tagen sind Jahre geworden, aus Jahren sogar mehrere Jahrzehnte. Jetzt bin ich eine alte Frau. Ich hatte es nicht für möglich gehalten, als ich in den letzten Tagen erfahren habe, dass eine neue Bürgerin namens Ella Blake hier in Snow Peaks sich eingebürgert hat. In Snow Peaks gibt es nicht viele Frauen mit diesem Vornamen, daher bin ich sofort los, hier heraus zu eurem Anwesen gekommen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du kannst dir nicht vorstellen, was für ein Stein mir vom Herzen gefallen ist, als du draußen meinen alten Namen genannt und mich erkannt hast.&nbsp;Die Einwohner in Snow Peaks, kennen mich nur unter dem Namen Ann.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du wischst dir die Tränen aus dem Gesicht und lächelst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah schreibt einen weiteren Satz in ihr Notizbuch.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ella, wie lange bist du schon in Snow Peaks?</p>"
        }
       ]
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Du wirfst einen Blick zu Snow.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du erzählst Hannah deine ganze Geschichte, beginnend mit dem Tag, an dem du ohne Erinnerung im verschneiten Gebiet von <em>White Valley</em>&nbsp;aufgewacht bist, auf der Suche nach ihr und deiner Identität. Auch von deinen Begegnungen mit Albert, Snow, Frank, Marie, Johnny und den letzten Jahren in <em>Snow Peaks</em> berichtest du.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Crash > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Du zeigst auf deine Narbe an der linken Wange und erzählst, wie knapp du dem Tod nach deinem heftigen Autounfall dank Albert und Snow entkommen bist.</p>"
        }
       ]
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Traurig erzählst du, wie Snow bei eurer Reise mit dem Leben bezahlen musste.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du sprichst über den <em>Hollow White</em>, die <em>Splitter</em>&nbsp;und wie <em>Snow Peaks</em> im letzten Jahr trotz seiner tragischen Geschichte zu deiner Heimat geworden ist. Wie verzaubert blickst du auf deinen Bauch und erzählst Hannah von deiner Liebe zu Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie hört dir sehr aufmerksam zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam lauscht ihr ihrer jungen Stimme bei dem Lied von <em>Snow Peaks</em>&nbsp;auf dem Tonbandgerät:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Hollow White, ooh Hollow White, höre die Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit so fern. Der weiten Stille entrissen, gereist hierher. Kam nach Snow Peaks. Ooh Snow Peaks, ooh Snow Peaks …«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Danach zeigst du ihr das Foto, auf welchem sie als junges Mädchen abgelichtet ist. Sie erkennt sich und ihre Handschrift auf der Rückseite wieder.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Für Ella, ich habe Dich lieb, Deine Hannah.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Lange und intensiv schaut sie es sich an, bis sie das Foto zur Seite legt und zu schreiben beginnt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als sie fertig ist, gibt sie dir direkt ihr kleines Notizbuch zum Lesen in die Hand.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ella, ich bin froh und dankbar, dass du die richtigen Menschen an deiner Seite hast, die dich durch diese ungewisse Zeit begleitet haben. Ich kann es mir allzu gut vorstellen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ich selbst hatte auch einen Menschen, der mir nach dem Gedächtnisverlust geholfen hat. Ein gemeinsamer Freund, der wie ein Vater für mich war.&nbsp;Trotz der vielen Jahre sind mir die Erinnerungen an die Zeit vor dem Sprung&nbsp;bis heute verborgen geblieben.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ich kann mich an nichts erinnern. Wirklich gar nichts.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Die einzigen Erinnerungen bestehen aus Erzählungen, welche mir mein Ziehvater&nbsp;nach unserem Zeitsprung&nbsp;aus seinem Tagebuch vorgelesen hat.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Unsere gemeinsame Geschichte, trage ich bis heute tief in meinem Herzen und sie hat mich immer hoffen lassen, dass wir uns wiederfinden.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust kurz erleichtert zu Hannah und liest weiter.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ella, es ist alles schwer zu erklären und zu verstehen. Aber die Tatsache, dass ich jetzt bei dir bin, erleichtert es vielleicht. Wie du siehst, bin ich alt geworden und weit deinem Alter voraus.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du fragst dich bestimmt, wie das geschehen konnte.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Auf deine Fragen gibt es Antworten. Antworten, die du nach der ganzen Zeit verdienst, zu erfahren.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ich will dir alles erklären. Aber dafür muss ich dir einige Dinge in Snow Peaks zeigen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Viele dieser Antworten sind gefährlich und wurden lange geheim gehalten.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wir müssen sehr achtsam mit diesem Wissen vorgehen. Diese Geheimnisse dürfen nie in die falschen Hände fallen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Liebe Ella, unsere heutige Begegnung hat mich viel Kraft gekostet. Ich möchte dich morgen zu mir nach Snow Peaks bei der Kuppel einladen und dir mehr erzählen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah stützt sich leicht am Tisch ab und steht langsam auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hilfst ihr.</p>"
      }
     ],
     "next": [
      {
       "title": "Eine letzte Frage",
       "chapterId": "10",
       "sectionId": "006"
      },
      {
       "title": "Zur Haustür begleiten",
       "chapterId": "10",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "006",
     "title": "Eine letzte Frage",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bedankst dich bei Hannah für ihren Besuch, die Unterhaltung und die Einladung zur ihr nach <em>Snow Peaks</em>. Du kannst es kaum erwarten, eure Gespräche fortzuführen. Dennoch lastet eine große Frage auf deinem Gemüt. Eine Frage, die dich seit dem Beginn deiner Zeit in <em>Snow Peaks</em>&nbsp;beschäftigt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust Hannah unsicher an und fragst sie nach ihrer Mutter.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah schaut dich liebevoll an, setzt sich noch einmal kurz.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie schreibt.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Durch den Gedächtnisverlust habe ich leider jede Erinnerungen an meine leiblichen Eltern verloren. Georgy, meinen Ziehvater, habe ich geliebt wie meinen eigenen Vater.&nbsp;Meinen leiblichen Vater habe ich weder kennengelernt, noch weiß ich um seine Existenz.&nbsp;Georgy hat mir einige Geschichten über uns drei aus seinem Tagebuch gelegentlich abends vorgelesen. Wir waren wie eine kleine Familie, bevor das alles passiert ist. Vor seinem Tod hat er mit mir über meine leibliche Mutter gesprochen und mir Informationen über ihren Aufenthaltsort gegeben. Ich werde dir die nächsten Tage mehr darüber erzählen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Es ist wichtig, dass du einige Zusammenhänge verstehst.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Hannahs Antwort auf deine Frage schenkt dir im ersten Moment Klarheit.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Diese Frage hatte dich immer wieder beschäftigt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hilfst Hannah vorsichtig aus dem alten Sessel, der quietschend nachgibt.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow schreckt aus seinem Schlaf auf.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah schaut dich an und gibt dir einen Kuss auf die Stirn.</p>"
      }
     ],
     "next": [
      {
       "title": "Zur Haustür begleiten",
       "chapterId": "10",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "007",
     "title": "Zur Haustür begleiten",
     "elements": [
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow steht von seiner Decke auf und läuft freudig zu euch. Hannah krault sein Ohr. Sie und Snow scheinen einander zu mögen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Langsam geht ihr gemeinsam die Treppe nach unten zur Haustüre. Die Treppe quietscht. Als ihr unten im Erdgeschoss steht, umarmt ihr euch ein letztes Mal zum Abschied. Vor dem Grundstück wartet bereits ein schwarzes Fahrzeug. Hannah steigt langsam ein und winkt dir noch einmal zu, bis das Fahrzeug das Anwesen über die Ausfahrt verlässt und sie davonfährt.</p>"
      }
     ],
     "next": [
      {
       "title": "Wilde Träume",
       "chapterId": "10",
       "sectionId": "008"
      }
     ]
    },
    {
     "id": "008",
     "title": "Wilde Träume",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Den Abend versuchst du dir so gut wie möglich nichts anmerken zu lassen. Zunächst möchtest du dir Klarheit verschaffen, bevor du mit Albert, Frank oder Marie über die Begegnung mit Hannah sprichst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mitten in der Nacht wirst du von wilden Träumen heimgesucht. Immer wieder reißen dich Schreie aus deinem Schlaf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit offenen Augen liegst du da und versuchst deine Gedanken zu sortieren.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Ich bin aus der Zukunft?</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wer war ich vor dem Zeitsprung?</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Was ist mit Hannah genau passiert?</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wer ist Georgy?</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wie bin ich in dieser Zeit gelandet?«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Die halbe Nacht vergeht, als dir vor Müdigkeit doch noch die Augen zufallen und du in einen tiefen Schlaf fällst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das grelle Licht scheint durch die offenen Vorhänge und weckt dich. Es ist ganz ruhig im ganzen Haus. Selbst die Standuhr aus dem Erdgeschoss von Marie und Frank konnte dich&nbsp;diesen Morgen nicht aus dem Schlaf reißen. Die anderen sind bereits aus dem Haus.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Nur Snow kommt ans Bett und schleckt dir freudig die Hand.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du stehst auf und spürst Tritte in deinem Bauch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Guten Morgen Kleines, Zeit für ein spätes Frühstück«, sagst du.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Selbst Snow lässt sich das nicht zweimal sagen und folgt dir in die Küche.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdem du etwas gegessen hast, ziehst du dich warm an.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Pass schön auf alles auf, alter Freund«, sagst du zu Snow, der dich mit einem treuen Blick verabschiedet.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du gehst die Treppe nach unten und schließt die schwere, massive Haustüre ab. Es ist ein gutes Stück zu Fuß nach <em>Snow Peaks</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schon oft bist du die Strecke vom Anwesen dorthin gelaufen. Das unendliche Weiß wirkt für dich wie eine Meditation und du genießt die atemberaubende Landschaft hier draußen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nur du und die Einsamkeit der verschneiten Schneelandschaft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Doch heute ist etwas anders. Du spürst eine gewisse Zufriedenheit tief in dir. Ein Gefühl, welches dir völlig neu ist. Ein Gefühl, das du bis zum heutigen Tag nicht kanntest. Deine Begegnung mit Hannah erfüllt dich mit einem Stückchen Frieden, auch wenn noch viele Fragen durch deinen Kopf schwirren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach einem guten Stück kommst du durch ein kleines Waldstück mit vielen verschneiten Bäumen. Vereinzelt hörst du es Rascheln und Schnee fällt von den Wipfeln. Völlig in deinen Gedanken vertieft nimmst du plötzlich etwas hinter dir wahr.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bist nicht allein in der einsam verschneiten Schneelandschaft.</p>"
      }
     ],
     "next": [
      {
       "title": "Nichts wie weg!",
       "chapterId": "10",
       "sectionId": "009"
      },
      {
       "title": "Was war das?",
       "chapterId": "10",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "009",
     "title": "Nichts wie weg!",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du wirfst ängstlich immer wieder einen Blick zurück und erhöhst dein Schritttempo. Du fühlst dich beobachtet. Du läufst und läufst. Noch ein gutes Stück bis in die Stadt, als du hinter dir noch einmal ein Geräusch hörst und eine schnelle Bewegung wahrnimmst.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Wie sehr wünschst du dir, dass Snow jetzt bei dir wäre.</p>"
        }
       ]
      }
     ],
     "next": [
      {
       "title": "Schnell weg hier!",
       "chapterId": "10",
       "sectionId": "011"
      },
      {
       "title": "Was war das?",
       "chapterId": "10",
       "sectionId": "010"
      }
     ]
    },
    {
     "id": "010",
     "title": "Was war das?",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst deinen ganzen Mut zusammen und drehst dich um. Nichts. Mit langsamen Schritten näherst du dich einer großen Tanne, bleibst hinter dem Stamm stehen und lauscht. Es ist vollkommen still. Als du zur Seite blickst, siehst du plötzlich einen schnellen Blitz an dir vorbeiflitzen. Du verlierst das Gleichgewicht und landest im Schnee. Du traust deinen Augen nicht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein kleiner Polarfuchs.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst langsam deine Kamera aus der Tasche. Es ist die alte Kamera von Albert. Er hat sie dir vor einiger Zeit geschenkt. Du bist ganz ruhig und schießt ein Foto.</p>"
      },
      {
       "type": "addItem",
       "id": "fox"
      },
      {
       "type": "paragraph",
       "text": "<p>Noch nie hast du in <em>Snow Peaks</em>&nbsp;einen Polarfuchs gesehen. Die Tiere gelten in der Gegend als sehr scheu. Mit seinem weißen Fell ist er im Schnee fast nicht zu sehen. Der Kleine hat sich anscheinend verlaufen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Erleichtert stehst du auf und klopfst dir den Schnee vom Mantel. Du siehst noch, wie der kleine weiße Fuchs im verschneiten Dickicht verschwindet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du setzt deinen Fußmarsch nach <em>Snow Peaks</em>&nbsp;fort, bis du das weiße Städtchen betrittst. Nur wenige Menschen siehst du heute auf den Straßen. Weiter geht es Richtung Zentrum zur <em>Kuppel</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Kuppel",
       "chapterId": "10",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "011",
     "title": "Schnell weg hier!",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-1"
      },
      {
       "type": "paragraph",
       "text": "<p>Du beginnst zu laufen und spürst die Kleine in deinem Bauch strampeln.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Etwas scheint hier bei euch zu sein. Gepackt von der Angst denkst du voller Sorge an dein Baby.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du erinnerst dich an die Begegnung im Wald an der Hütte, wo Snow damals angegriffen wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Diese Angst scheint noch tief in dir zu sitzen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du rennst so schnell es geht, bis du vollkommen außer Atem in <em>Snow Peaks</em>&nbsp;ankommst. Die wenigen Menschen auf den Straßen starren dich komisch an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Völlig aus der Puste, machst du kurz Pause, bis du deinen Weg ins Zentrum zur <em>Kuppel</em>&nbsp;fortführst.</p>"
      }
     ],
     "next": [
      {
       "title": "Kuppel",
       "chapterId": "10",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "012",
     "title": "Kuppel",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du die <em>Kuppel</em>&nbsp;im Zentrum von <em>Snow Peaks</em>&nbsp;betrittst, empfängt dich die Dame in Weiß.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Willkommen Fräulein Ella! Madame Ann wartet bereits auf Sie.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Dame in Weiß führt dich vom Empfang der <em>Kuppel</em>&nbsp;entlang über eine kleine Allee mit Bäumen zu einer Gartenanlage.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf einem Schild steht: »Nur für Personal.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein dir völlig neuer Bereich. Du bist gespannt, was dich erwartet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Madame Ann hat mich gebeten, Ihnen etwas mehr über die Entstehung der <em>Kuppel</em>&nbsp;zu erzählen«, sagt die Dame in Weiß.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das komplette Gelände wurde von Madame Anns Vater <em>Dr. Isaac Halley</em>&nbsp;vor knapp 60 Jahren aufgebaut. Nur ein Jahrzehnt nach den Geschehnissen des <em>Hollow White</em>. Dr. Halleys Forschungsarbeiten wurden hier am <em>Kalten Stern</em>&nbsp;durchgeführt. Bis kurz vor seinem Tod hat er sein Lebenswerk verfolgt, das er seiner Tochter, Madame Ann, vermacht hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Paradies auf Erden, wie sie gleich sehen können.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Frau in Weiß öffnet die Tür eines Gewächshauses. Ein feiner Duft von Rosenblättern weht dir entgegen. Der Anblick ist überwältigend. Tausende&nbsp;von weißen Rosen blühen vor dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ihr geht ein Stück durch die verzweigten Gärten, die fast einem Irrgarten gleichen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bis ihr Hannah an einem Rosenstrauch Zweige schneiden seht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Frau in Weiß verabschiedet sich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah legt die Gartenschere zur Seite und schließt dich mit Freude in ihre Arme. Ihr beginnt einen kleinen Spaziergang durch den weitläufigen Rosengarten. An einer Art Rondell setzt ihr euch. Hannah reicht dir eine Tasse Tee und du legst den warmen Mantel ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah nimmt das Notizbuch, blättert und beginnt zu schreiben.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Liebe&nbsp;Ella, ich bin so froh, dich zu sehen. Mir ist gestern noch sehr viel durch den Kopf gegangen. Aber ich kann dir nicht beschreiben, wie glücklich ich bin, dich endlich wiedergefunden zu haben.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Es gibt noch vieles, was ich dir zeigen möchte.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Mein Ziehvater Dr. Isaac Halley, sein richtiger Name war Dr. Georgy Monroe, hat sich sein ganzes Leben mit dem Hollow White, dem Aufbau dieser Kuppel, dem Observatorium und der Suche nach dir beschäftigt. Bis kurz vor seinem Tod hat er viele Geheimnisse streng bewahrt, einige davon hat er mir erst danach zugänglich gemacht.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ella, es ist nicht einfach über diese Geheimnisse zu sprechen, aber du musst die Wahrheit erfahren. Über dich, mich und Georgy.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Mit etwas zittrigen Händen versuchst du, das Notizbuch ruhig zu halten. Hannah legt sanft ihre Hand auf deine.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Wir alle haben ein gemeinsames Geheimnis.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Georgy, du und ich.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wir sind aus einer anderen Zeit. Genau genommen aus der Zukunft.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wir sind von der Zukunft in die Vergangenheit gesprungen und in dieser Zeit&nbsp;ohne jegliche Erinnerung&nbsp;aufgewacht. Georgy konnte einige wissenschaftliche Aufzeichnungen beim damaligen Zeitsprung mitnehmen, sodass er die Forschungsarbeit aus der Zukunft hier in der Vergangenheit fortgeführt hat. Einiges liegt direkt vor unseren Füßen: die Kuppel, das Observatorium, der Kalte Stern. Aber es gibt noch einen anderen Ort.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Einen gefährlichen Ort.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du musst&nbsp;kurz aufstehen&nbsp;und tief durchatmen, um die ganzen Informationen zu verarbeiten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Notizen, die Hannah dir zeigt, sind Wahrheiten, die dir als Theorien über das letzte Jahr durch den Kopf gegangen sind. Jetzt werden deine Annahmen bestätigt, die Lösung liegt auf der Hand.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bist eine Zeitreisende, genau wie Hannah, Georgy, Albert und Patricia.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aber wer warst du vor dem Sprung? Was für eine Person? Was hast du gerne gegessen, worüber hast du gelacht? Warst du der Mensch, der du jetzt bist?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aufregung und Angst fahren durch deinen Körper. Viele Türen stehen plötzlich offen. Türen, deren Fragen dir jetzt&nbsp;lang ersehnte&nbsp;Antworten schenken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Leicht zögernd nimmst du Hannahs Notizbuch.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Vor deinem Sprung warst du Dr. Ella Monroe. Eine leitende Wissenschaftlerin, die zusammen mit einem Team von Forschern an einem streng geheimen Experiment in der Zukunft gearbeitet hat. Gemeinsam mit deinem Mann, Dr. Georgy Monroe, habt ihr an Raum und Zeit geforscht und eine Möglichkeit gefunden, wie man durch diese reisen kann. Ich kam als Kind zu euch und wuchs bei euch auf, wir haben viele Jahre zusammen gelebt, bis eines Tages etwas Schreckliches passiert ist.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>»Was ist passiert?«, fragst du ungeduldig.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah schreibt, ihre Schrift wird undeutlicher.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Es war ein Tag wie jeder andere, nur dass Georgy und ich in der Forschungsabteilung geblieben sind. Du wolltest noch etwas in der Forschungsstätte beim Kalten Stern holen, als es dort zu einem unerklärbaren Phänomen kam. Georgy und das Forschungsteam haben viele Tage und Wochen nach der Ursache gesucht. Ella, du bist an diesem einen Tag spurlos verschwunden. Wir dachten zuerst alle, du wärst tot. Doch Georgy hat einen Hinweis gefunden. Einen Splitter, mit welchem er deinen ungefähren Aufenthaltsort berechnen konnte.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du stehst auf und blickst in das weiße Rosenfeld.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Dann bin ich auch so wie du aus der Zukunft hier in der Vergangenheit gelandet … ab … aber warum sind wir uns nicht früher begegnet?«</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Georgy hat einen Weg gefunden, dass er und ich auch in die Vergangenheit springen. Bis zu seinem Tod hat er mir nicht alles erzählt. Aber wie ich später erfahren habe, ging auch bei unserem Sprung in die Vergangenheit etwas mächtig schief. Die Geräte waren noch nicht so weit, aber wir konnten einfach nicht länger warten, um die Forschung zu Ende zu bringen. Leider sind wir viele Jahre zu weit in die Vergangenheit gesprungen. Genaugenommen 60 Jahre weiter als du, Ella.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du starrst in die Blüte einer einzelnen weißen Rose und denkst laut.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Langsam verstehe ich es, es ergibt alles einen Sinn.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine Zeit lang sitzt ihr noch im Rosengarten zusammen. Du sortierst alle Puzzleteile.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah begleitet dich zum Ausgang der Kuppel und zeigt dir eine letzte Notiz für den heutigen Tag.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Bis morgen Ella, ich habe einen Wagen bestellt, der dich nach Hause&nbsp;bringt.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Es vergehen mehrere Tage und du besuchst Hannah immer wieder bei den Rosengärten. Ihr unterhaltet euch über eure gemeinsame Zeit vor dem Sprung. Hannah zeigt dir Aufzeichnungen aus Georgys Tagebuch. Ihr lacht, aber es gibt auch Momente, wo ihr mit Tränen in den Augen euch einfach nur in den Armen liegt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>So vergehen einige Wochen.&nbsp;Wochen in denen du dein Wiedersehen mit Hannah vorerst geheim hältst. Darum hatte sie dich gebeten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>An einem Tag wirkt Hannah sehr bedrückt und nachdenklich. Du schaust sie an und fragst, was sie so traurig stimmt?</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ella, ich bin alt und der Zeitsprung hat mich sichtlich Lebensenergie gekostet.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ich bin unsagbar dankbar, dich gefunden zu haben und die letzten Tage gehören zu den schönsten meines Lebens.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Mitfühlend setzt du dich neben Hannah und liest die nächste Notiz.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Du und Georgy wart wie Eltern für mich. Georgy hat mich wie seine eigene Tochter hier in der Zeit nach dem Sprung großgezogen. Auch wenn er immer sehr beschäftigt war, war er immer da, wenn ich ihn gebraucht habe.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Dennoch kann ich einige meiner Gefühle nicht leugnen, nicht unterdrücken. Ich verspüre bis heute den starken Drang, meine leiblichen Eltern wiederzusehen. Georgy hat mir vor seinem Tod Aufzeichnungen zum Aufenthaltsort meiner leiblichen Mutter in der Zukunft gegeben.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ella, ich habe einen letzten Wunsch, bevor mein Leben endet. Ich möchte ihr von ganzem Herzen noch einmal begegnen …</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Zurück beim Anwesen&nbsp;geht dir Hannahs letzter Wunsch durch den Kopf.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ella, ich wünsche mir, meiner Mutter noch einmal zu begegnen. Ich benötige dafür einen der roten Splitter, damit mein Wunsch in Erfüllung geht.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du nimmst den Splitter, den du damals im Tonband gefunden hast, packst ihn in deine Tasche und machst dich bereit, Hannah ein letztes Mal bei der Kuppel zu besuchen.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 10",
       "chapterId": "10",
       "sectionId": "013"
      }
     ]
    },
    {
     "id": "013",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><a class=\"skip-link\" href=\"javascript:document.documentElement.scrollTo({ top: 100000, behavior: 'smooth' })\">Überspringen</a></p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 2: Der Weg nach Snow Peaks</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine spannungsgeladene Reise beginnt, in welcher Ella, Albert und Snow ums nackte Überleben in der eisigen und gefährlichen Landschaft von White Valley kämpfen. Snow wird dabei stark verletzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 3: Der Hollow White</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Ella und Albert mit letzten Kräften das verschneite Städtchen Snow Peaks erreichen, treffen sie auf alte Freunde von Albert. Frank, einem pensionierten Arzt und seiner Frau Marie, die etwas außerhalb der Stadt in einem größeren Anwesen leben.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise erliegt Snow an seinen Wunden. Gedanken plagen Ella. Hätte Snow gerettet werden können? Mit diesem ungewissen Gefühl setzt sie ihre Suche fort.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow kann in letzter Sekunde von Frank gerettet werden. Albert und Ella sind mit einem großen Schrecken davongekommen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Am ersten Tag in der Stadt lüftet Ella viele Geheimnisse rund um Snow Peaks und deren Einwohner. So erfährt sie vom sagenumwobenen Geschehnis des Hollow White, einer Art Naturphänomen vor über 70 Jahren in der Vergangenheit, bei welchem Bewohner von Snow Peaks spurlos verschwunden sind. Seitdem ist die Stadt in Alarmbereitschaft und es gibt immer wieder Einzelfälle des Verschwindens.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 4: Die Verschwundenen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella trifft auf Alberts Zwillingsschwester Patricia. Die beiden Geschwister offenbaren ihr, dass sie selbst zu den Verschwundenen des Hollow White gehören und als Kinder ganze 40 Jahre später in der Zeit aufgewacht sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Um weiter der Spur zu Hannah zu folgen, besucht Patricia mit Ella das Observatorium, einen Ort, an dem die sogenannten Splitter aufbewahrt werden. Mysteriöse Steine, die an den Plätzen der Verschwundenen gefunden wurden und für die Verbliebenen zum Gedenken aufbewahrt werden. So zeigt Patricia, ihren und Alberts Splitter, der dort schon lange Zeit aufbewahrt wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz der neuen Erkenntnisse tappt Ella auf der Suche nach Hannah weiter im Dunkeln, bis sie eines Nachts in ihrem Tonbandgerät zufällig einen Splitter und daraufhin gemeinsam mit Albert den Splitter von seiner Frau Judy finden. Judy ist vor einigen Jahren in einer Nacht spurlos am Frozen Lake verschwunden. Albert hat sich nach diesem tragischen Verlust in die Wälder von White Valley trauernd zurückgezogen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella und Albert kommen sich auf ihrer Reise immer näher und können ihre Gefühle zueinander nicht mehr verstecken. Als sie neben Albert einschläft, hat sie eine Vision in einem Traum. Ist sie selbst auch eine Verschwundene aus einer anderen Zeit?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 5: Die Flucht</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir springen in der Geschichte ganze 60 Jahre in die Zukunft. Dunkle Zeiten herrschen in Snow Peaks. Der Schwarze Kreis, ein grausames Regime, ist an der Macht, kontrolliert das System und unterdrückt die Bevölkerung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir begleiten Judy, die nach ihrem Verschwinden in Snow Peaks in dieser Zeit aufgewacht ist. Seit ihrem Erscheinen wird sie neben vielen anderen Erschienenen in einem der außerhalb liegenden Lagern gefangen gehalten. Zusammen mit ihrer Freundin Cara gelingt ihr eines Tages die Flucht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die beiden treffen auf die Widerstandsgruppe, eine Bewegung, die seit Jahren aus dem Untergrund gegen den Schwarzen Kreis kämpft. Rose, die Gründerin des Widerstands, gebietet Judy und Cara Unterschlupf, doch sie verheimlicht etwas. So findet Judy eines Tages heraus, dass Rose unter dem drohenden Befehl des Schwarzen Kreises ihr bereits als Krankenschwester begegnet ist und ihre für tot geglaubte Tochter Hannah bei der Geburt genommen hat. Judys Tochter Hannah lebt, wurde aber vor einigen Jahren vom Schwarzen Kreis der Obhut von Rose wieder entrissen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beteuert, dass sie unter drohendem Befehl des Schwarzen Kreises handelte und ihr aller Leben auf dem Spiel stand. So zeigt sie Judy eines Nachts ein Schlupfloch zur streng bewachten Kuppel, wo Hannah das letzte Mal gesehen wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 6: Die Höhle</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben Judys Geschichte lernen wir Georgys zeitgleich kennen. Er und ein zweiter Wissenschaftler namens Dean experimentieren unterhalb der Kuppel in einer Höhle am sogenannten Kalten Stern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein monumentales Artefakt aus dem Universum und der Ursprung des Hollow White. Die Forschungen am Kalten Stern in der Zukunft sind mutmaßlich verantwortlich für das Verschwinden der Menschen des Hollow White in der Vergangenheit. Die sogenannten Erschienenen sind durch die Experimente in der Zukunft aufgewacht und werden seither vom Schwarzen Kreis in Gefangenschaft gehalten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Georgy und Dean werden vom Regime gezwungen, an einer Apparatur am Kalten Stern zu arbeiten, welche Zeitsprünge möglich macht. Es geht um Leben und Tod. Der Schwarze Kreis geht hierbei über Leichen und glaubt an ein apokalyptisches Ende der Welt, welches durch den Auslöser des Hollow White, in der Zukunft geschehen und die Sonne auslöschen wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Nerven liegen blank, sodass Dean eines Tages die Beherrschung verliert und sich mit den Soldaten des Schwarzen Kreises konfrontiert. Beim Versuch, Dean zur Hilfe zu kommen, fallen Schüsse und Georgy wird bewusstlos geschlagen. Als er in einer Zelle wieder aufwacht, muss er dort mehrere Tage ausharren, bis ihm über einen Mittelsmann der Befehl erteilt wird, seine Forschungsarbeit am Kalten Stern fortzusetzen. Zuvor muss er erfahren, dass sein Freund Dean vom Schwarzen Kreis exekutiert wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 7: Schwarze Rosen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir befinden uns wieder bei Judy und Rose in der Kuppel, bei der Suche, die kleine Hannah zu finden. Die beiden werden entdeckt und Rose bei der Flucht stark verletzt. Zusammen können sie, Charlie und Cara, in eine außerhalb der Stadt versteckten Hütte flüchten.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise stirbt Rose. Hätte ihr Tod verhindert werden können?</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Rose überlebt, ist aber vorerst nicht ansprechbar.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Judy erfährt von weiteren Geheimnissen aus Roses Vergangenheit und erhält einen rätselhaften Brief.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ist es möglicherweise ein Hinweis zu ihrer Tochter Hannah?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Spur führt Judy und Cara in einer eiskalten Nacht ins Hotel Midnight. Dort begegnet sie einer alten Frau mit schneeweißem Haar.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 8: Die Spinne</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit Hochdruck arbeitet Georgy daran, einen Weg zu finden, dem Schwarzen Kreis zu entkommen. Aber er ist nicht allein. Die kleine Hannah ist bei ihm, welche bei den Forschern seit einigen Jahren aufwächst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Wettlauf gegen den sicheren Tod beginnt und Georgy ist ununterbrochen daran, die Forschungsarbeit von Dr. Ella Monroe, die vor Wochen spurlos am Kalten Stern verschwunden ist, fertig zu bringen. Die Apparatur ist seit dem Vorfall von Ellas Verschwinden in einem katastrophalen Zustand, doch es ist Georgys und Hannahs letzte Chance, durch einen Zeitsprung, zu entkommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Georgy am letzten Tag seiner Frist die Maschine halbwegs funktionsfähig bekommt, schickt er Hannah als Erstes in die Vergangenheit, um zumindest sie aus den Fängen des Regimes zu retten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als er selbst springen will, stellt sich ein alter Bekannter ihm in den Weg. Es ist Dean, der nicht nur lebt, sondern Georgy dem Anschein nach verraten hat und zum Schwarzen Kreis gehört. Georgy schafft es gerade noch durch einen Zeitsprung, den tödlichen Schüssen zu entkommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 9: Neue Heimat</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir springen wieder zurück in die Vergangenheit zu Ella.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Jahr ist seit ihrer Ankunft in Snow Peaks bereits vergangen. Sie hat in dem Städtchen eine neue Heimat gefunden und erwartet zusammen mit Albert ein Kind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kurz vor der Geburt verbringt sie die meiste Zeit allein in ihrer gemeinsamen Wohnung beim Anwesen von Marie und Frank.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eines Tages klopft es an der Haustüre.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 10: Der Wunsch</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine alte Frau mit schneeweißem Haar steht vor Ellas Haustür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist Hannah.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aber nicht das kleine Mädchen von dem Foto, sondern eine 70 Jahre gealterte Frau.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie und Georgy sind durch die fragile Apparatur am Kalten Stern ganze 60 Jahre weiter in die Vergangenheit gesprungen als Ella.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Von der älteren Hannah erfährt sie die Wahrheit zu ihrer eigenen Vergangenheit, Identität, die gemeinsame Zeit in der Zukunft, über den Unfall am Kalten Stern und Ellas bereits verstorbenen Mann Georgy, der sie sein ganzes Leben lang gesucht hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah hat einen letzten Wunsch. Sie möchte noch vor ihrem Tod ihre leibliche Mutter aus der Zukunft begegnen.</p>"
      }
     ],
     "next": [
      {
       "title": "Kapitel 11",
       "chapterId": "11",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "11",
   "title": "Kreide",
   "sections": [
    {
     "id": "001",
     "title": "Der letzte Tag",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Hannah wartet diesmal direkt am Eingang der <em>Kuppel</em>&nbsp;und begrüßt dich wie immer mit einer liebevollen Umarmung. Gemeinsam geht ihr ins Zentrum zum <em>Kalten Stern</em>. An diesem Nachmittag ist es ruhig und ihr seid nahezu allein bei eurem Spaziergang. Wenig Personal und kaum Besucher. Eine fast unheimliche Stille. Der Duft der Rosen liegt in der Luft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah schreibt etwas in ihr Notizbuch.</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Ella, es ist an der Zeit, dass ich dir das letzte große Geheimnis von Georgy und mir zeige. Achte darauf, dass uns niemand folgt.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah und du blickt mehrfach hinter euch und lauft unauffällig ein Stück hinter dem&nbsp;<em>Kalten Stern</em>&nbsp;am massiven Gestein entlang.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Im hinteren Bereich der <em>Kuppel</em>&nbsp;versperrt euch eine Umzäunung einen zugewachsenen Bereich. Hannah schaut sich noch einmal um und zieht eine edel geschmückte Truhe mit einem verzierten Schlüssel aus ihrer Tasche. Auf der Truhe siehst du etwas eingraviert, kannst es aber auf den ersten Blick nicht genau erkennen. Mit dem Schlüssel öffnet sie vorsichtig das Tor, wodurch ihr nun die Umzäunung passieren könnt. Im Gegensatz zum Rest der <em>Kuppel</em>&nbsp;ist hier alles wild zugewuchert von Pflanzen, Hecken und Büschen. Ihr geht direkt ein Stück durch das Dickicht, bis Hannah auf etwas Metallisches vor dir tritt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine Luke unter Laub und Ästen versteckt. Hannah bittet dich mit einer Geste, die Luke davon zu befreien. Mit etwas Handarbeit ist die Metallplatte frei aufgedeckt und Hannah öffnet mit dem verzierten Schlüssel die Ketten eines alten Vorhängeschlosses, sodass der darunterliegende Eingang euch jetzt offen steht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit etwas Kraft hebst du die Luke an.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine lange Steintreppe erstreckt sich tief in eine Art Gewölbe einer dunklen <em>Höhle</em>. Hannah zündet eine Laterne an, welche auf eine der ersten Steinstufen steht und nimmt deine Hand.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Schritt für Schritt begleitest du sie immer tiefer die Gänge nach unten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine Weile vergeht und ihr legt immer wieder kleine Pausen ein, bis ihr immer mehr in die weitläufige <em>Höhle</em>&nbsp;eindringt. Die Luft wird schwerer und ein alter feuchter Geruch strömt dir in die Nase. Du hörst Wasser plätschern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Obwohl ihr so tief unter der Erde seid, strahlt euch grelles Licht entgegen. Du gehst ein paar Schritte und bist von dem Anblick, der sich vor dir auftut, wie hypnotisiert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die massive Steinspitze des <em>Kalten Sterns</em> ragt von der oberen Decke bis in die Mitte des Raumes bis auf Kopfhöhe nach unten. Der Boden ist teilweise mit seichtem Wasser bedeckt und das orange, rötliche warme Licht der Spitze beleuchtet die <em>Höhle</em>&nbsp;und spiegelt sich im reflektierenden Wasser.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah ist knapp hinter dir, ihr geht gemeinsam in Richtung Steinspitze. Dahinter fallen dir einige Apparate und Instrumente, die zum Teil mit dem <em>Kalten Stern</em>&nbsp;verbunden sind, auf. Viele der Instrumente sind in den verwinkelten Ecken und Schatten der <em>Höhle</em>&nbsp;angebracht. Daneben siehst du eine lange glatte Wand mit vielen unterschiedlichen Kreidezeichnungen. Es scheint eine Art unterirdische Forschungsstätte zu sein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hast bereits eine leichte Vorahnung, wo ihr euch befinden könntet, siehst diesen faszinierenden Ort dennoch zum ersten Mal. Das muss das letzte gehütete Geheimnis von Georgy und Hannah sein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah legt ihre Hand auf deinen Arm und gibt dir die kleine längliche Metalltruhe&nbsp;mit der edlen Gravur. Ein Hexagon mit den Initialen H. W. für&nbsp;<em>Hollow White</em>. Als du die Truhe betrachtest, streicht dir Hannah behutsam über deine Hand und legt dir eine Notiz in deine Handfläche.</p>"
      },
      {
       "type": "addItem",
       "id": "chest"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Für dich, Ella. Die Truhe ist von Georgy. Der Inhalt wird dir auf viele deiner Fragen Antworten geben. Die Höhle ist unser letztes Geheimnis. Ein Wunder des Universums.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Sie birgt Gefahren und muss vor der Welt da draußen beschützt und geheim gehalten werden. Versprich mir, dieses Geheimnis dein Leben lang zu hüten.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Mit einem Nicken schaust du Hannah vertrauensvoll in die Augen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah holt aus ihrer Tasche den passenden Schlüssel für die Truhe und gibt dir diesen. Danach betätigt sie einige Meter von dir entfernt Knöpfe an einer Schalttafel. Ein leichtes Summen ertönt und viele kleine Lichter fangen an zu blinken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als sie wieder zu dir kommt, spricht sie zu dir. Zwar ohne Stimme, aber du kannst von ihren Lippen lesen: »Leb’ wohl.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In dem Augenblick wird dir klar, dass der Moment des Abschieds gekommen ist. Tränen laufen über deine Wangen und Hannah nimmt dich in ihre Arme. Der Abschied schmerzt sehr.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Behutsam legt Hannah ihre Hände auf deinen Bauch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du gibst Hannah den Splitter, den du damals in dem Tonbandgerät gefunden hast. Sie nimmt diesen, wischt dir zärtlich deine Tränen aus dem Gesicht und lächelt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit einem verabschiedenden Blick geht sie langsam zu der Spitze des <em>Kalten Sterns</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Summgeräusch ist mittlerweile recht laut und ertönt in der ganzen <em>Höhle</em>. Der Boden vibriert. Die Lichter flackern und auf der Wasseroberfläche zeichnen sich kleine Blitze ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah holt den Splitter aus der Tasche.&nbsp;Dieser pulsiert und leuchtet stark rötlich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie dreht sich ein letztes Mal zu dir. Es ist so hell, dass du nur noch ihren Umriss aus der Ferne siehst. Du musst die Augen schließen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es wird unfassbar hell, ein fast unerträgliches Summen ertönt kurz und ein Knall erschallt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als der Ton wieder verstummt und das grelle Licht langsam erlischt, öffnest du deine Augen und kannst es kaum glauben. Hannah ist nicht mehr da.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah ist verschwunden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine Zeit lang starrst du noch zur Spitze des <em>Kalten Sterns</em>, wo Hannah gerade stand. Keine Spur von ihr.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Skeptiker > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Zu Beginn hattest du mit Hannahs Erscheinen wirklich gehadert, du warst dir unsicher und konntest dir ihr Alter nicht erklären. Jetzt bist du einfach nur froh, dass du ihr noch einmal begegnen und zusammen mit ihr Zeit verbringen konntest. Der Abschied schmerzt.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du setzt dich und öffnest mit dem kleinen Schlüssel die Truhe mit der Gravur.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In der Truhe befindet sich der große verzierte Schlüssel für die Luke zum Eingang. Jetzt im Detail erkennst du ein Symbol auf dem Schlüssel. Eine liegende Acht. Das Unendlichkeitssymbol.</p>"
      },
      {
       "type": "addItem",
       "id": "key"
      },
      {
       "type": "if",
       "condition": "ITEM bracelet",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Neben dem Schlüssel siehst du ein geflochtenes Armband aus dünnen Kabeln und Drähten. »Ob das von Hannah ist?«, fragst du dich.</p>"
        }
       ]
      },
      {
       "type": "if",
       "condition": "ITEM heart",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Neben dem Schlüssel siehst du einen kleinen winzigen Stein in Form eines Herzens. »Ob das von Hannah ist?«, fragst du dich.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du findest einen verschlossenen Umschlag in der Truhe. Auf der Deckseite steht: für <em>Ellas Tochter</em>&nbsp;zum 18. Lebensjahr. Streng vertraulich.</p>"
      }
     ],
     "next": [
      {
       "title": "Brief öffnen",
       "chapterId": "11",
       "sectionId": "002"
      },
      {
       "title": "Brief geschlossen einstecken",
       "chapterId": "11",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "002",
     "title": "Brief öffnen",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-2"
      },
      {
       "type": "paragraph",
       "text": "<p>Du öffnest den Brief und findest&nbsp;eine Notiz und einen weiteren verschlossenen Papierumschlag.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf der Notiz sind folgende Worte für deine ungeborene Tochter geschrieben:</p>"
      },
      {
       "type": "style",
       "classes": "note-blue",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Übergebe den geschlossenen Umschlag an die Frau mit dem verlorenen Kind.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Die Frau mit dem verlorenen Kind? Ob es sich hierbei um Hannahs Mutter in der Zukunft handelt?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In dem verschlossenen Umschlag findest du einen Zettel:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Hollow White</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Midnight</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>00:22</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Langsam packt dich dein schlechtes Gewissen. Schnell klebst du die Umschläge mit etwas Spucke wieder zu.</p>"
      }
     ],
     "next": [
      {
       "title": "Brief geschlossen einstecken",
       "chapterId": "11",
       "sectionId": "003"
      }
     ]
    },
    {
     "id": "003",
     "title": "Brief geschlossen einstecken",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du steckst den Brief für deine noch ungeborene Tochter ein und ziehst einen etwas größeren Umschlag aus der Truhe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine Art Testament und dazu noch eine Besitzurkunde für die <em>Kuppel</em>&nbsp;und das <em>Observatorium</em>, die auf dich überschrieben sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nachdenkend fliegst du über die Unterlagen, als der letzte Gegenstand zum Vorschein kommt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Tonbandgerät. Das gleiche Modell, das du bei dir hattest.</p>"
      },
      {
       "type": "addItem",
       "id": "recorder"
      },
      {
       "type": "paragraph",
       "text": "<p>Du spielst es ab. Es rauscht, bis eine unbekannte Männerstimme ertönt.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Ella, ich bin es, Georgy. Wahrscheinlich kannst du dich nicht an mich erinnern, aber Hannah wird dir einiges erzählt haben.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wenn du eines Tages diese Sprachaufnahme hörst, haben wir dich tatsächlich gefunden. Hannah hat dich gefunden.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wir sind einen für uns großen Schritt weiter gekommen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Viele unserer Fehler konnten wir rückgängig machen, aber bei einigen gibt es keinen Weg mehr zurück. Dennoch liegt es in unserer Hand, denn unsere Entscheidungen schreiben die Geschichte unserer Existenz.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ella, es gibt so viel, was ich dir erzählen möchte, aber wir müssen vorsichtig sein. Jedes Wissen über den Verlauf der Zukunft könnte alles, wofür wir gekämpft haben, ins Ungleichgewicht bringen. Neue unerwartete Pfade könnten sich öffnen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Dennoch zeichnet sich eine düstere Theorie in der Zukunft ab. Es geht um Visionen aus deinen Träumen. Sie sind allgegenwärtiger als jemals zuvor. Wirf einen genauen Blick auf die Kreidezeichnungen in der Höhle beim Kalten Stern.«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Du pausierst das Tonbandgerät und gehst zur Wand mit den Kreideaufzeichnungen. Mit der Laterne&nbsp;betrachtest du genauer die einzelnen Abschnitte.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Vor dir erstreckt sich ein langer Zeitstrahl mit vielen unterschiedlichen Sprungsequenzen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Strahl beginnt mit dem <em>Hollow White</em> und hunderter von Sprungsequenzen von Menschen aus <em>Snow Peaks</em>. Einige Sprungsequenzen landen im Leeren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die meisten Linien der Sprungsequenzen&nbsp;ziehen sich bis 130 Jahre nach dem <em>Hollow White</em>&nbsp;in die Zukunft.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du siehst deinen Sprung, gefolgt von Hannahs und Georgys. Hannahs und Georgys Linien ziehen sich ganze 60 Jahre weiter in die Vergangenheit als deine.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du spielst das Tonbandgerät ab und die Stimme ist wieder zu hören.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Wir haben von der Zukunft aus zu lange in die falsche Richtung geschaut. Deine Theorie ist mit hoher Wahrscheinlichkeit wahr. Wir selbst haben den Hollow White mit unseren Eingriffen in der Zeit hervorgerufen und damit ein Phänomen des Universums in unvorstellbaren Auswirkungen in der Vergangenheit erzeugt. Der Hollow White war erst der Anfang und ist kein Vergleich mit dem, was in der Zukunft passieren wird, sollten wir scheitern.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Mit der Erschaffung des Hollow White haben wir etwas Verheerendes bewirkt …«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Unruhig wanderst du mit dem Laternenlicht weiter entlang des Zeitstrahls zu den letzten Zeichnungen. Auf der letzten Kreidezeichnung ist die Sonne zu sehen, die von einem schwarzen Kreis umschlungen wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Stimme auf dem Tonband sagt folgende Worte:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»… ein schwarzes Loch, welches die Sonne für immer erlöschen lässt …«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist kurz still auf der Tonaufnahme, als die letzten Worte von Georgy ertönen.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Ella, unsere Forschungsarbeit darf auf gar keinen Fall an die Öffentlichkeit gelangen. Du musst unmittelbar nach Hannahs Sprung in die Zukunft, alles zerstören, was du hier vorfindest. Es ist ein sehr gefährlicher Ort und könnte fatale Auswirkungen in der Zukunft hervorrufen, wenn unser Geheimnis in die falschen Hände fällt.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Der Schwarze Kreis, ein grausames Regime in der Zukunft, hat finstere Absichten mit unserer Entwicklung am Kalten Stern.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Sei vorsichtig! Wir haben damals nach deinem Verschwinden noch einen zweiten Splitter gefunden. Laut Gerüchten warst du nicht die einzige Person, die an diesem Tag des Vorfalls verschwunden ist.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ella, du bist unsere letzte Chance! Du musst unser Werk am Kalten Stern vernichten …</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Das Tonband rauscht. Georgys Stimme erlischt.</p>"
      }
     ],
     "next": [
      {
       "title": "Alles zerstören",
       "chapterId": "11",
       "sectionId": "004"
      },
      {
       "title": "Höhle geheim halten",
       "chapterId": "11",
       "sectionId": "005"
      }
     ]
    },
    {
     "id": "004",
     "title": "Alles zerstören",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "+2"
      },
      {
       "type": "paragraph",
       "text": "<p>Du wischst die Kreidezeichnungen von der Wand und stößt vorsichtig die Apparatur um, welche mit ihrem vollen Gewicht einige Meter laut auf einen der Felsbrocken kracht. Viele Einzelteile zerschellen und verschwinden im umliegenden Wasser.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein letzter Blick auf die glühende Spitze des <em>Kalten Sterns</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du machst die Laterne an, nimmst die kleine Truhe und begibst dich langsam zurück an die Oberfläche. Mit jeder Treppenstufe gehen dir Georgys letzte Worte von dem Tonband durch den Kopf. Ob du wohl das Schlimmste verhindern konntest? Welche Auswirkungen haben deine Entscheidungen auf die Zukunft? Bist du in Gefahr?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Oben angekommen, stehst du vor dem <em>Kalten Stern</em> des <em>Hollow White</em>. Das Gestein ragt bis weit nach oben und verschwindet im Nebel der Wolken.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ziehst das Tonbandgerät aus deiner Tasche, um das Band zu zerstören. In diesem Moment fällt ein kleiner, mehrfach gefalteter Zettel aus dem offenen Tonbandfach.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Überrascht hebst du ihn vom Boden und klappst ihn auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Der Zettel ist ein fein zusammengefaltetes Foto. Jemand muss es im Kassettenfach versteckt haben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zwei dir unbekannte Personen sind darauf zu sehen. Eine Frau und ein Mann, die glücklich in die Kamera schauen. Im Hintergrund ist der <em>Frozen Lake</em>&nbsp;zu sehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf der Rückseite liest du folgende Zeilen:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Für Georgy</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Zeit entsteht in unseren Herzen und endet dort.«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>In unendlicher Liebe</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Deine Ella</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Ella? Wer ist die Frau auf dem Bild neben Georgy? Das kann nicht sein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Starr lässt du das Foto fallen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das ergibt keinen Sinn, denkst du dir. Bis dir schlagartig ein Schreck durch die Glieder fährt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dieser Moment verändert alles.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wirklich alles!</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Deine Identität. Die Wahrheit um deine Person.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es gibt nur eine Erklärung:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf dem Foto sind Georgy und Ella zu sehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella auf dem Foto sieht dir alles andere als ähnlich. Eine Frau mit halblangen, dunkelblonden Haaren, Brille und einem kleinen Leberfleck auf der Wange.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das bin ich nicht! Ich bin nicht Ella!«, sprichst du verzweifelt zu dir selbst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Körper beginnt stark zu zittern und zwingt dich in die Knie. Du kannst keinen klaren Gedanken fassen. Jeder Versuch überschlägt sich förmlich. Deine Nerven sind blank. Schwindel setzt ein. Du spürst noch kurz, dass dein Kopf auf den Boden schlägt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Alles wird schwarz.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es vergeht eine Ewigkeit im puren Nichts. Eine komplette Leere umhüllt dich. Du findest dich in absoluter Dunkelheit wieder.</p>"
      }
     ],
     "next": [
      {
       "title": "Nach Hilfe rufen",
       "chapterId": "11",
       "sectionId": "006"
      },
      {
       "title": "Versuchen zu gehen",
       "chapterId": "11",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "005",
     "title": "Höhle geheim halten",
     "elements": [
      {
       "type": "state",
       "id": "karma",
       "modifier": "-2"
      },
      {
       "type": "paragraph",
       "text": "<p>Du denkst über Georgys Worte auf dem Tonband nach. Das alles ist sinnlos! Es wäre Wahnsinn, diese gesamte Arbeit in einem Sturm der Zerstörung zu vernichten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein letzter Blick auf die glühende Spitze des <em>Kalten Sterns</em>&nbsp;und die daran verbundene Apparatur.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du machst die Laterne an und begibst dich mit der kleinen Truhe in der Hand zurück an die Oberfläche. Mit jeder Treppenstufe gehen dir Georgys letzte Worte von dem Tonband durch den Kopf. War es wirklich die richtige Entscheidung, die Apparatur in der Höhle nicht zu zerstören? Was für Auswirkungen diese Entscheidungen wohl auf die Zukunft haben?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit dem großen verzierten Schlüssel verschließt du die Luke und verdeckst diese mit einigen Ästen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du stehst vor dem riesigen <em>Kalten Stern</em> des <em>Hollow White</em>.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du ziehst das Tonbandgerät aus deiner Tasche; nimmst das Band heraus und legst es in die Truhe.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In diesem Moment fällt ein kleines, verstecktes und gut zusammengefaltetes Foto aus dem offenen Tonbandfach.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Überrascht hebst du es vom Boden und klappst es auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist ein fein zusammengefaltetes Foto. Jemand muss es im Kassettenfach versteckt haben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Zwei dir unbekannte Personen sind darauf zu sehen. Eine Frau und ein Mann, die glücklich in die Kamera schauen. Im Hintergrund ist der Frozen Lake zu sehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf der Rückseite liest du folgende Zeilen:</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Für Georgy</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Zeit entsteht in unseren Herzen und endet dort.«</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>In unendlicher Liebe</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Deine Ella</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Ella? Wer ist die Frau auf dem Bild neben Georgy? Das kann nicht sein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Starr lässt du das Foto fallen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das ergibt keinen Sinn, denkst du dir. Bis dir schlagartig ein Schreck durch die Glieder fährt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dieser Moment verändert alles.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wirklich alles!</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Deine Identität. Die Wahrheit um deine Person.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es gibt nur eine Erklärung:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf dem Foto sind Georgy und Ella zu sehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella auf dem Foto sieht dir alles andere als ähnlich. Eine Frau mit halblangen, dunkelblonden Haaren, Brille und einem kleinen Leberfleck auf der Wange.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Das bin ich nicht! Ich bin nicht Ella? Wer bin ich?«, sprichst du verzweifelt zu dir selbst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Körper beginnt stark zu zittern und zwingt dich in die Knie. Du kannst keinen klaren Gedanken fassen. Jeder Versuch überschlägt sich förmlich. Deine Nerven liegen blank. Schwindel setzt ein. Du spürst noch, dass dein Kopf auf den Boden schlägt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Alles wird schwarz.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es vergeht eine Ewigkeit im puren Nichts. Eine komplette Leere umhüllt dich. Du findest dich in absoluter Dunkelheit wieder.</p>"
      }
     ],
     "next": [
      {
       "title": "Nach Hilfe rufen",
       "chapterId": "11",
       "sectionId": "006"
      },
      {
       "title": "Versuchen zu gehen",
       "chapterId": "11",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "006",
     "title": "Nach Hilfe rufen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Du rufst in die Leere, doch nichts ist zu hören. Wie in einem schalltoten Raum.</p>"
      }
     ],
     "next": [
      {
       "title": "Versuchen zu gehen",
       "chapterId": "11",
       "sectionId": "007"
      }
     ]
    },
    {
     "id": "007",
     "title": "Versuchen zu gehen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Schwindelig und mit viel Mühe gelingt es dir, wieder langsam auf die Beine zu kommen. Schritt für Schritt, setzt du einen Fuß vor den anderen und beginnst, vorsichtig zu gehen. Jede dunkle Ecke gleicht der anderen und es fällt dir schwer, dich zu orientieren. Es fühlt sich an, als würdest du im puren Schwarz in deinem eigenen Kopf herumirren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ab deinem Erwachen in <em>White Valley</em> bist du davon ausgegangen, dass du&nbsp;Ella bist. Jetzt soll das alles nicht wahr sein? Hat dich deine ganze Reise lang diese falsche Annahme in die Irre geführt?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aber wie ist das alles möglich und vor allem: Wer bist du wirklich?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine beklemmende Angst packt dich, doch bevor diese Oberhand gewinnt, merkst du einen hellen Schimmer in der Ferne.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es erklingen verzerrte Klänge, welche sich in düstere Gesänge verwandeln. Ein greller Lichtstrahl blitzt auf und eine <em>Erinnerung</em>&nbsp;erscheint.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Karma > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Du stehst in der Mitte eines&nbsp;schwarzen Kreises. Umschlossen von Anhängern wirst du plötzlich von hinten gepackt und stark festgehalten. Eine maskierte große Person in Kluft betritt die Kreismitte, schaut dich kurz an und reißt dir ruckartig ein Stück Stoff von deinem rechten Ärmel. Grob wirst du auf den kalten Steinboden geworfen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Sie stehen unter Verdacht! Unter Verdacht, den <em>Schwarzen Kreis</em> verraten&nbsp;zu haben! Wir werden dem nachgehen. Falls dem so sei, kennen Sie das Urteil. Wir haben ein Auge auf Sie!«, sagt die Person mit furchteinflößender Stimme.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Mit Verachtung schmeißt dir die maskierte Person den abgerissenen Stofffetzen vor die Füße und verschwindet mit ihren Anhängern wie Schatten in der umliegenden Dunkelheit. Mit Genugtuung schaust du auf den abgerissenen Stofffetzen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Eine <em>rote Armbinde</em>&nbsp;mit Abzeichen des <em>Schwarzen Kreis</em>.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Als du dieses betrachtest, wird es wieder dunkel und die Erinnerung verblasst.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Alles um dich herum ist wieder schwarz und die rote Armbinde vor dir verschwunden. Stechende Schmerzen fahren durch deinen Kopf. Es summt und das grelle Licht baut sich erneut auf.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Es wird strahlend hell.&nbsp;Die nächste <em>Erinnerung</em>&nbsp;erscheint.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein Duft von Rosen durchströmt deine Sinne. Dir gegenüber steht eine ältere Frau im Nachthemd. Der Raum ist dunkel und wird von ein paar wenigen Kerzen auf dem Nachttisch beleuchtet.&nbsp;Die Frau schaut dich sehr ängstlich an – da merkst du, dass du eine Waffe auf sie hältst. Du bist sehr nervös und es kostet dich viel Überwindung, die Frau in Schach zu halten. Deine Hand zittert wie verrückt.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Schnell weg hier! Wir haben das Mädchen«, ertönt&nbsp;plötzlich eine fremde Stimme hinter dir.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>In dem Moment entsteht Panik und die ältere Frau greift nach einem Kerzenständer, um sich zur Wehr zu setzen und das Kind zu beschützen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Es fällt ein Schuss, alles wird schwarz. Das Bild und der Duft nach Rosen schwindet.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du stehst wieder in purer Leere. Als du einen Blick Richtung deiner Hand wirfst, ist die Waffe verschwunden. Du zitterst immer noch stark.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du versuchst diese <em>Erinnerung</em>&nbsp;von gerade zu verarbeiten. Warst wirklich du das, die gerade auf die Frau geschossen hat? Wer war das? Was hattest du mit dem <em>Schwarzen Kreis</em> zu schaffen? Bevor du die Gedanken sortieren kannst, baut sich erneut schimmerndes Licht auf.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Eine letzte <em>Erinnerung</em>&nbsp;erscheint.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Dr. Ella Monroe</em> steht auf einmal direkt vor dir in der Höhle beim <em>Kalten Stern</em>. Eure Stimmen sind verzerrt, dennoch erkennst du, dass ihr euch unterhaltet und diskutiert. Es wirkt vertraut, dennoch scheint ihr euch nicht einig zu sein, sodass sich zwischen ihr und dir ein Konflikt zuspitzt. Plötzlich reißt du ihr ihre Tasche aus den Händen. Die gleiche Tasche, welche du zu Beginn bei dir hattest, als du in <em>White Valley</em> aufgewacht bist.</p>"
        },
        {
         "type": "addItem",
         "id": "bag"
        },
        {
         "type": "paragraph",
         "text": "<p>Als <em>Dr. Ella Monroe</em> versucht, diese wieder an sich zu nehmen, wehrst du dich. Sie stürzt, fällt auf einen der umliegenden Felsen und bleibt regungslos am Boden liegen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Erschrocken läufst du schnell zu ihr und rüttelst an ihrem Körper.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein Summen ertönt im Hintergrund und flutet den Raum mit grellem rotem Licht.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Es sind wieder Fragmente einer Stimme zu hören, die sich zu verzweifelten Schreien verwandeln. Du erkennst deine eigene Stimme, die immer wieder schreit:</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>»Ella, Ella wach auf!«</em></p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Karma > 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Du stehst in der Mitte eines schwarzen Kreises. Umschlossen von dunklen Schatten betritt eine maskierte Person in Kluft die Kreismitte. Die Gesänge werden leiser und die Anhänger knien sich geschlossen vor dir hin. Die maskierte Person begegnet dir respektvoll und überreicht dir etwas, bevor sie sich selbst wieder im Kreis mit einreiht. Du öffnest langsam deine Handflächen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Eine <em>rote Armbinde</em> mit einer Spinne&nbsp;in einem umschlungenen Kreis. Ein ranghohes Abzeichen des <em>Schwarzen Kreis</em>.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wie stark musstest du dir wohl die Hände dafür schmutzig machen?</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Als du es betrachtest, wird es wieder dunkel und die Erinnerung verblasst.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Alles um dich rum ist wieder schwarz und die rote Armbinde in deiner Hand verschwunden. Stechende Schmerzen fahren durch deinen Kopf. Es summt und das grelle Licht baut sich erneut auf.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Es wird strahlend hell und eine nächste <em>Erinnerung</em>&nbsp;erscheint.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein Duft von Rosen durchströmt deine Sinne. Gegenüber steht dir eine ältere Frau im Nachthemd. Der Raum ist dunkel und wird von ein paar wenigen Kerzen auf dem Nachttisch beleuchtet. Die Frau schaut dich mit sehr ängstlichem Blick an – da merkst du, dass du eine Waffe zielgerichtet auf sie hältst. Du drohst ihr und schüchterst sie damit ein.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>»Schnell weg hier! Wir haben das Mädchen«, ertönt&nbsp;plötzlich eine fremde Stimme hinter dir.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>In dem Moment entsteht Panik und die ältere Frau greift nach einem Kerzenständer, um sich zur Wehr zu setzen und das Kind zu beschützen.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Gezielt schießt du.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Das Bild und der Duft nach Rosen schwindet.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Du stehst wieder in purer Leere. Als du in deine Hand blickst, ist die Waffe verschwunden. Du hattest tatsächlich skrupellos abgedrückt. Du versuchst diese Erinnerung von gerade zu sortieren. Es ist grausam. Warst wirklich du das, die gerade auf die&nbsp;ältere Frau geschossen hat? Wer war das? Was habe ich alles im Auftrag des <em>Schwarzen Kreis</em>&nbsp;verbrochen? Bevor du dir viele Gedanken machen kannst, baut sich erneut schimmerndes Licht auf und eine letzte <em>Erinnerung</em> erscheint.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>Dr. Ella Monroe</em> steht auf einmal direkt vor dir in der Höhle beim <em>Kalten Stern</em>. Die Stimmen sind verzerrt, doch es ist eindeutig ein Konflikt zwischen euch beiden zu erkennen. Du hast plötzlich einen Stein in deiner Hand und drohst ihr. Es beginnt ein erbitterter Kampf. Umliegende Apparaturen gehen zu Bruch. Du reißt ihre Tasche aus ihren Händen. Die gleiche Tasche, welche du zu Beginn bei dir hattest, als du in <em>White Valley</em> aufgewacht bist.</p>"
        },
        {
         "type": "addItem",
         "id": "bag"
        },
        {
         "type": "paragraph",
         "text": "<p>Als <em>Dr. Ella Monroe</em>&nbsp;versucht, diese wieder an sich zu nehmen, erwischst du sie stark mit einem Schlag am Kopf. Sie geht bewusstlos zu Boden.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein Summen ertönt im Hintergrund und flutet den Raum mit grellem rotem Licht.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Mit der Tasche in deinen Armen prüfst du ihren Zustand und rüttelst an ihrem Körper, doch sie bewegt sich nicht. Soweit wolltest du nicht gehen!</p>"
        },
        {
         "type": "paragraph",
         "text": "<p><em>»Wach auf! Ella, wach auf!«</em></p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Vergebens, kein Lebenszeichen. Ella liegt regungslos am Boden.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Mann in schwarzer Kluft des <em>Schwarzen Kreis</em>&nbsp;betritt etwas abseits das Geschehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Was hast du getan! Lebt Sie noch? Sie ist doch nicht to…?«, schreit er dir zu.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bevor du reagieren kannst, wird das Summen so laut und alles hell.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es knallt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du und der Körper von <em>Dr. Ella Monroe</em>&nbsp;seid verschwunden.</p>"
      }
     ],
     "next": [
      {
       "title": "Wer bin ich?",
       "chapterId": "11",
       "sectionId": "008"
      }
     ]
    },
    {
     "id": "008",
     "title": "Wer bin ich?",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Es wird hell und du öffnest schwach deine Augen. Die Erinnerungen schwinden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schreist verzweifelt »Wer bin ich, We… b… ic…?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Verschwommen siehst du zwei Schatten. Ein schrilles Geräusch einer Sirene ist zu hören.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sie wacht auf, sie kommt zu Bewusstsein«, hörst du fremde Stimmen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du wirst kraftvoll festgehalten. Eine Person spritzt dir etwas in den Arm.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du hörst nur Wortfetzen. »Be … sie… sich… Ba…by«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du verstehst nichts. Alles verschwimmt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Erneut verlierst du dein Bewusstsein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Alles wird schwarz.</p>"
      }
     ],
     "next": [
      {
       "title": "Aufwachen",
       "chapterId": "11",
       "sectionId": "009"
      }
     ]
    },
    {
     "id": "009",
     "title": "Aufwachen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Als du wieder aufwachst, starrst du auf die Instrumente an denen du mit vielen kleinen Schläuchen, angeschlossen bist. Es piept. Nur etwas Licht blitzt durch die nicht ganz zugezogenen Vorhänge. Deine Augen sind trocken und brennen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du liegst in einem Krankenbett und kannst dich kaum bewegen. Dir ist schwindelig, wahrscheinlich wurdest du betäubt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als du versuchst mit aller Kraft aufzustehen, fährt dir sofort ein starker stechender Schmerz über deinen Körper.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Panisch tastest du mit deinen zitternden Händen deinen Bauch ab. Schmerzen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»W… Wo ist mein Baby!«</p>"
      }
     ],
     "next": [
      {
       "title": "Schläuche abreißen",
       "chapterId": "11",
       "sectionId": "010"
      },
      {
       "title": "Alarm drücken",
       "chapterId": "11",
       "sectionId": "011"
      }
     ]
    },
    {
     "id": "010",
     "title": "Schläuche abreißen",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Panisch reißt du die ganzen Schläuche, die an dir hängen, ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du spürst dein Baby nicht mehr in deinem Bauch. Nur diesen stark ziehenden Schmerz.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Maschinen beginnen zu pfeifen, als die ersten Kabel und Schläuche auf dem Boden landen. Ein Alarm geht an und das Notsignal ertönt zusammen mit der roten Leuchte neben dem Bett.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bevor du es schaffst, aufzustehen, steht schon ein Arzt und sein Helferteam im Zimmer und versuchen, dich zu beruhigen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Was geht hier vor sich?«, schreist du verzweifelt. »Wo ist mein Baby?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du wehrst dich. Schlägst um dich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert kommt hereingestürmt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ella! Alles ist gut. Alles ist gut …«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Total verzweifelt versuchst du dich an etwas festzuhalten, als du wieder Schwindelerscheinungen merkst. Albert schafft es gerade noch dich aufzufangen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dir wird schwarz vor Augen.</p>"
      },
      {
       "type": "style",
       "classes": "note-black",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Hollow White, ooh Hollow White, höre die Gesänge des fallenden Sterns. Der die Erde getroffen aus der Dunkelheit so fern. Der weiten Stille entrissen, gereist hierher. Kam nach Snow Peaks. Ooh Snow Peaks, ooh Snow Peaks …«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Als du aufwachst, ist es hell. Dieses Mal kommt das Licht direkt vom Fenster. Du schaust dich geschwächt um und siehst Albert, der neben dir auf einem Stuhl sitzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Dein Blick ist wie verzaubert auf ihn gerichtet. In seinen Armen hält er euer Baby.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Schau, wer da wach ist«, sagt er mit ruhiger Stimme, steht langsam auf und legt dir behutsam die Kleine auf die Brust.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du bist so erleichtert und überglücklich, dass du zunächst alles vergisst. Die Magie des Babys zieht dich sofort in ihren Bann.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Albert ist ganz nah bei dir. Gemeinsam schaut ihr die Kleine an.&nbsp;Du genießt ohne Worte diesen einzigartigen Moment und hältst ihn so im Herzen fest.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sie hat noch keinen Namen«, sagt er.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du schaust auf das kleine Wunder und flüsterst:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»<em>Rose</em>«.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 11",
       "chapterId": "11",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "011",
     "title": "Auf Alarm drücken",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>An der Seite des Bettes siehst du einen roten Alarmknopf. Wie wild drückst du auf diesen. Dieser beginnt zu blinken. Dich überfällt eine lähmende unbeschreibliche Angst und du schreist verzweifelt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Wo ist mein Baby! Was habt ihr mit meinem Baby gemacht!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Arzt und zwei Helfer kommen hereingestürmt&nbsp;und versuchen dich zu beruhigen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du verlierst fast erneut deine Nerven, bis du auf einmal Albert siehst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Er trägt ein Baby in seinen Armen. Euer Baby.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Freudentränen laufen dir über deine Wangen und eine Welle der Erleichterung erfasst dich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam sitzt ihr am Bett und Albert legt dir behutsam die Kleine auf die Brust. Ein magischer Moment.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Alles ist gut, ihr habt es überstanden«. Der Arzt und das Personal lassen euch allein.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Zeit bleibt stehen in diesem Moment. Die Kleine schaut mit großen strahlenden Augen zu dir.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Sie hat noch keinen Namen«, sagt Albert.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Du lächelst, wischt dir die Tränen aus den Augen und flüsterst:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»<em>Rose</em>«.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende Kapitel 11",
       "chapterId": "11",
       "sectionId": "012"
      }
     ]
    },
    {
     "id": "012",
     "title": "Was bisher geschah",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p><a class=\"skip-link\" href=\"javascript:document.documentElement.scrollTo({ top: 100000, behavior: 'smooth' })\">Überspringen</a></p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 1: Ella</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella wacht ohne Gedächtnis mitten in der verschneiten Landschaft von White Valley auf. Ihre einzige Spur zu ihrer Vergangenheit findet sie auf einem Tonbandgerät und einem Foto, auf welchem ein kleines Mädchen namens Hannah abgebildet ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bei ihrer Suche begegnet sie Albert, einem Mann, der sich in den Wäldern mit seinem Hund Snow zurückgezogen hat. Es geschieht Seltsames, so erfährt Ella vom sagenumwobenen Hollow White, einem Phänomen in der Vergangenheit, an dem viele Menschen spurlos in der Kleinstadt Snow Peaks verschwunden sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Gemeinsam beschließen sie und Albert dorthin aufzubrechen, um nach Hannah und ihrer Identität zu suchen und dem Geheimnis des Städtchens auf den Grund zu gehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 2: Der Weg nach Snow Peaks</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine spannungsgeladene Reise beginnt, in welcher Ella, Albert und Snow ums nackte Überleben in der eisigen und gefährlichen Landschaft von White Valley kämpfen. Snow wird dabei stark verletzt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 3: Der Hollow White</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Ella und Albert mit letzten Kräften das verschneite Städtchen Snow Peaks erreichen, treffen sie auf alte Freunde von Albert. Frank, einem pensionierten Arzt und seiner Frau Marie, die etwas außerhalb der Stadt in einem größeren Anwesen leben.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise erliegt Snow an seinen Wunden. Gedanken plagen Ella. Hätte Snow gerettet werden können? Mit diesem ungewissen Gefühl setzt sie ihre Suche fort.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Snow <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Snow kann in letzter Sekunde von Frank gerettet werden. Albert und Ella sind mit einem großen Schrecken davongekommen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Am ersten Tag in der Stadt lüftet Ella viele Geheimnisse rund um Snow Peaks und deren Einwohner. So erfährt sie vom sagenumwobenen Geschehnis des Hollow White, einer Art Naturphänomen vor über 70 Jahren in der Vergangenheit, bei welchem Bewohner von Snow Peaks spurlos verschwunden sind. Seitdem ist die Stadt in Alarmbereitschaft und es gibt immer wieder Einzelfälle des Verschwindens.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 4: Die Verschwundenen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella trifft auf Alberts Zwillingsschwester Patricia. Die beiden Geschwister offenbaren ihr, dass sie selbst zu den Verschwundenen des Hollow White gehören und als Kinder ganze 40 Jahre später in der Zeit aufgewacht sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Um weiter der Spur zu Hannah zu folgen, besucht Patricia mit Ella das Observatorium, einen Ort, an dem die sogenannten Splitter aufbewahrt werden. Mysteriöse Steine, die an den Plätzen der Verschwundenen gefunden wurden und für die Verbliebenen zum Gedenken aufbewahrt werden. So zeigt Patricia, ihren und Alberts Splitter, der dort schon lange Zeit aufbewahrt wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Trotz der neuen Erkenntnisse tappt Ella auf der Suche nach Hannah weiter im Dunkeln, bis sie eines Nachts in ihrem Tonbandgerät zufällig einen Splitter und daraufhin gemeinsam mit Albert den Splitter von seiner Frau Judy finden. Judy ist vor einigen Jahren in einer Nacht spurlos am Frozen Lake verschwunden. Albert hat sich nach diesem tragischen Verlust in die Wälder von White Valley trauernd zurückgezogen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ella und Albert kommen sich auf ihrer Reise immer näher und können ihre Gefühle zueinander nicht mehr verstecken. Als sie neben Albert einschläft, hat sie eine Vision in einem Traum. Ist sie selbst auch eine Verschwundene aus einer anderen Zeit?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 5: Die Flucht</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir springen in der Geschichte ganze 60 Jahre in die Zukunft. Dunkle Zeiten herrschen in Snow Peaks. Der Schwarze Kreis, ein grausames Regime, ist an der Macht, kontrolliert das System und unterdrückt die Bevölkerung.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir begleiten Judy, die nach ihrem Verschwinden in Snow Peaks in dieser Zeit aufgewacht ist. Seit ihrem Erscheinen wird sie neben vielen anderen Erschienenen in einem der außerhalb liegenden Lagern gefangen gehalten. Zusammen mit ihrer Freundin Cara gelingt ihr eines Tages die Flucht.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die beiden treffen auf die Widerstandsgruppe, eine Bewegung, die seit Jahren aus dem Untergrund gegen den Schwarzen Kreis kämpft. Rose, die Gründerin des Widerstands, gebietet Judy und Cara Unterschlupf, doch sie verheimlicht etwas. So findet Judy eines Tages heraus, dass Rose unter dem drohenden Befehl des Schwarzen Kreises ihr bereits als Krankenschwester begegnet ist und ihre für tot geglaubte Tochter Hannah bei der Geburt genommen hat. Judys Tochter Hannah lebt, wurde aber vor einigen Jahren vom Schwarzen Kreis der Obhut von Rose wieder entrissen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Rose beteuert, dass sie unter drohendem Befehl des Schwarzen Kreises handelte und ihr aller Leben auf dem Spiel stand. So zeigt sie Judy eines Nachts ein Schlupfloch zur streng bewachten Kuppel, wo Hannah das letzte Mal gesehen wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 6: Die Höhle</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Neben Judys Geschichte lernen wir Georgys zeitgleich kennen. Er und ein zweiter Wissenschaftler namens Dean experimentieren unterhalb der Kuppel in einer Höhle am sogenannten Kalten Stern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein monumentales Artefakt aus dem Universum und der Ursprung des Hollow White. Die Forschungen am Kalten Stern in der Zukunft sind mutmaßlich verantwortlich für das Verschwinden der Menschen des Hollow White in der Vergangenheit. Die sogenannten Erschienenen sind durch die Experimente in der Zukunft aufgewacht und werden seither vom Schwarzen Kreis in Gefangenschaft gehalten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Georgy und Dean werden vom Regime gezwungen, an einer Apparatur am Kalten Stern zu arbeiten, welche Zeitsprünge möglich macht. Es geht um Leben und Tod. Der Schwarze Kreis geht hierbei über Leichen und glaubt an ein apokalyptisches Ende der Welt, welches durch den Auslöser des Hollow White, in der Zukunft geschehen und die Sonne auslöschen wird.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Nerven liegen blank, sodass Dean eines Tages die Beherrschung verliert und sich mit den Soldaten des Schwarzen Kreises konfrontiert. Beim Versuch, Dean zur Hilfe zu kommen, fallen Schüsse und Georgy wird bewusstlos geschlagen. Als er in einer Zelle wieder aufwacht, muss er dort mehrere Tage ausharren, bis ihm über einen Mittelsmann der Befehl erteilt wird, seine Forschungsarbeit am Kalten Stern fortzusetzen. Zuvor muss er erfahren, dass sein Freund Dean vom Schwarzen Kreis exekutiert wurde.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 7: Schwarze Rosen</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir befinden uns wieder bei Judy und Rose in der Kuppel, bei der Suche, die kleine Hannah zu finden. Die beiden werden entdeckt und Rose bei der Flucht stark verletzt. Zusammen können sie, Charlie und Cara, in eine außerhalb der Stadt versteckten Hütte flüchten.</p>"
      },
      {
       "type": "if",
       "condition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Tragischerweise stirbt Rose. Hätte ihr Tod verhindert werden können?</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE Rose <= 0",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Rose überlebt, ist aber vorerst nicht ansprechbar.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Judy erfährt von weiteren Geheimnissen aus Roses Vergangenheit und erhält einen rätselhaften Brief.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ist es möglicherweise ein Hinweis zu ihrer Tochter Hannah?</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die Spur führt Judy und Cara in einer eiskalten Nacht ins Hotel Midnight. Dort begegnet sie einer alten Frau mit schneeweißem Haar.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 8: Die Spinne</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit Hochdruck arbeitet Georgy daran, einen Weg zu finden, dem Schwarzen Kreis zu entkommen. Aber er ist nicht allein. Die kleine Hannah ist bei ihm, welche bei den Forschern seit einigen Jahren aufwächst.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Wettlauf gegen den sicheren Tod beginnt und Georgy ist ununterbrochen daran, die Forschungsarbeit von Dr. Ella Monroe, die vor Wochen spurlos am Kalten Stern verschwunden ist, fertig zu bringen. Die Apparatur ist seit dem Vorfall von Ellas Verschwinden in einem katastrophalen Zustand, doch es ist Georgys und Hannahs letzte Chance, durch einen Zeitsprung, zu entkommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als Georgy am letzten Tag seiner Frist die Maschine halbwegs funktionsfähig bekommt, schickt er Hannah als Erstes in die Vergangenheit, um zumindest sie aus den Fängen des Regimes zu retten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als er selbst springen will, stellt sich ein alter Bekannter ihm in den Weg. Es ist Dean, der nicht nur lebt, sondern Georgy dem Anschein nach verraten hat und zum Schwarzen Kreis gehört. Georgy schafft es gerade noch durch einen Zeitsprung, den tödlichen Schüssen zu entkommen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 9: Neue Heimat</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wir springen wieder zurück in die Vergangenheit zu Ella.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ein Jahr ist seit ihrer Ankunft in Snow Peaks bereits vergangen. Sie hat in dem Städtchen eine neue Heimat gefunden und erwartet zusammen mit Albert ein Kind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kurz vor der Geburt verbringt sie die meiste Zeit allein in ihrer gemeinsamen Wohnung beim Anwesen von Marie und Frank.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eines Tages klopft es an der Haustüre.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 10: Der Wunsch</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Eine alte Frau mit schneeweißem Haar steht vor Ellas Haustür.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist Hannah.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Aber nicht das kleine Mädchen von dem Foto, sondern eine 70 Jahre gealterte Frau.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie und Georgy sind durch die fragile Apparatur am Kalten Stern ganze 60 Jahre weiter in die Vergangenheit gesprungen als Ella.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Von der älteren Hannah erfährt sie die Wahrheit zu ihrer eigenen Vergangenheit, Identität, die gemeinsame Zeit in der Zukunft, über den Unfall am Kalten Stern und Ellas bereits verstorbenen Mann Georgy, der sie sein ganzes Leben lang gesucht hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah hat einen letzten Wunsch. Sie möchte noch vor ihrem Tod ihre leibliche Mutter aus der Zukunft begegnen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Kapitel 11: Kreide</em></p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Hannah zeigt Ella das von Georgy und ihr letzte gehütete Geheimnis. Die streng geheime Forschungseinrichtung unterhalb der Kuppel am Kalten Stern.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Von dort aus springt Hannah mit dem von Ella damals gefundenen Splitter aus dem Tonbandgerät zurück in die Zukunft. Vor Hannahs Sprung erhält Ella noch eine Tonaufnahme von ihr und betrachtet alte Kreideaufzeichnungen an den Wänden in der Höhle.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Auf der Tonaufnahme ist Georgys Stimme zu hören. Er warnt davor, dass die Existenz der ganzen Menschheit auf dem Spiel steht. Durch die in der Zukunft geschehenen Experimente am Kalten Stern wurde vom Forschungsteam eine verheerende Kettenreaktion in der Zeit ausgelöst und der Hollow White in der Vergangenheit hervorgerufen. Die Forschungsstätte muss nach Hannahs Sprung unmittelbar zerstört werden und darf keinesfalls in falsche Hände fallen. Nachdem Ella die Höhle verlässt, entdeckt sie ein verstecktes Foto mit Nachricht in Georgys Tonbandgerät. Als sie das Bild betrachtet, stellt sich alles auf den Kopf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Wirklich alles!</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie selbst ist gar nicht Ella, von der sie die ganze Zeit ausgegangen ist.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Die echte Ella, die zusammen mit Georgy auf dem Foto abgebildet ist, ist eine andere Frau und sieht ihr auf keine Weise ähnlich.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>So verliert Nicht-Ella in ihrer Verzweiflung ihr Bewusstsein und muss sich in unterschiedlichen Erinnerungen ihrer wahren Vergangenheit und Person stellen.</p>"
      },
      {
       "type": "if",
       "condition": "STATE karma > 3",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Sie erfährt von einer Zeit in der Zukunft, als sie selbst unter der Gewalt des Schwarzen Kreises stand und sich als Widerstandskämpferin, gegen diesen gestellt hat.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE karma > 3",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Sie erfährt von einer Zeit in der Zukunft, als sie selbst im Namen des Schwarzen Kreises gehandelt hat und sogar an der Entführung der kleinen Hannah beteiligt war. Mit Gefolgschaft hat sie dem Schwarzen Kreis Treue geschworen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>In einer anderen Erinnerung sieht sie sich und die echte Dr. Ella Monroe gemeinsam am Kalten Stern in der Höhle. Ein Konflikt entsteht und es kam zu einem tragischen Unfall, sodass sie und die wahre Ella in der Zeit gesprungen sind.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Nach dem Nervenzusammenbruch wacht Nicht-Ella in einem Krankenhaus auf. Ihr Kind musste von einem Ärzteteam zur Welt gebracht und gerettet werden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als sie wieder zu sich kommt, ist Albert mit ihrem neugeborenen Kind bei ihr.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Sie nennen ihre gemeinsame Tochter Rose.</p>"
      }
     ],
     "next": [
      {
       "title": "Epilog",
       "chapterId": "12",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "12",
   "title": "Epilog",
   "sections": [
    {
     "id": "001",
     "title": "An einem unbekannten Ort zu unbekannter Zeit",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Geräusche ertönen durch den alten Empfänger eines Funkgerätes.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Hört mich jemand?«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es rauscht und die Stimme einer Frau ist zu verstehen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Falls mich da draußen jemand hört!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kurze Stille.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Mein Name ist <em>Dr. Ella Monroe</em>. Ich bin Wissenschaftlerin aus einer Zeit, wahrscheinlich weit nach Ihrer. Wenn Sie mich hören können, haben wir einen Weg gefunden, über die Zeit hinweg mit Ihnen in Verbindung zu treten. Schlüsselpunkte vergangener und zukünftiger Ereignisse haben wir mit sogenannten Splittern modifiziert, welche enorme Auswirkungen auf Geschehnisse in Raum und Zeit bewirken. Ich habe nur noch wenige Sekunden. Die Übertragung bricht gleich ab.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es rauscht. Die echte Ella atmet tief durch.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Ich weiß, das klingt verrückt. Ich würde Ihnen gerne alles viel genauer erklären, aber mir läuft die Zeit davon. Es sind unsere Entscheidungen, die über die Existenz unseres Sonnensystems richten.«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es ist kurz ruhig, bis Ella ihren Satz fortführt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>»Unzählige Entscheidungen trifft der Mensch in seinem Leben. Viele davon im Sekundentakt. Gemeinsam formen wir damit unsere Realität, unsere Gefühle und unsere Beziehungen. Unsere Entscheidungen haben Einfluss auf uns selbst und die Welt um uns herum.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>In jeder Sekunde liegt es somit in unserer Hand, wie die nächste ihren Lauf nimmt. Ein kleiner Funke kann ein ganzes Universum entstehen lassen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Kurz gesagt, Sie da draußen und Ihre zu treffenden Entscheidungen sind jetzt unsere letzte Hoffnung!«</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es beginnt zu summen. Die Verbindung bricht kurz ab.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Ellas Stimme erscheint erneut.</p>"
      },
      {
       "type": "if",
       "condition": "STATE karma > 3",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Ich kann Sie leider nicht verstehen, aber ich hoffe, Sie hören mich noch?</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Die Geräte reagieren positiv. Ich kann es nicht glauben! Wie es aussieht, haben wir es geschafft! Ihre getroffenen Entscheidungen haben das Schlimmste so weit&nbsp;verhindern können. Das hätte alles ganz anders ausgehen können!</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Die Sonne, sie ist …«</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE karma > 3",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>»Ich kann sie leider nicht verstehen, aber ich hoffe, Sie hören mich?</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Die Geräte spielen komplett verrückt! Ich wache immer und immer wieder in der gleichen Zeitschleife auf! Wie es aussieht, gibt es keine Hoffnung. Ihre getroffenen Entscheidungen konnten das Schlimmste nicht verhindern.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Die Sonne … sie ist verschwunden.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Ein schwarzer Kreis, wie ein Loch, umschlingt sie.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Gibt es noch eine Chance? Es liegt immer noch in Ihrer Hand. Vielleicht hätten andere Entscheidungen einen anderen Verlauf geno…«</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Bevor Ella den Satz beenden kann, ertönen laute Geräusche im Hintergrund. Ein Counter zählt nach unten, das Summen baut sich stärker auf.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Es wird so unerträglich laut, bis plötzlich ein noch lauterer Knall ertönt.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Als sich der Lärm wieder legt, ist nur noch leichtes Rauschen zu hören. Dann wird es unheimlich still.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Ella ist verschwunden</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Ende",
       "chapterId": "13",
       "sectionId": "001"
      }
     ]
    }
   ]
  },
  {
   "id": "13",
   "title": "Ende",
   "sections": [
    {
     "id": "001",
     "title": "Ein Ende und ein Anfang",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Gratulation! Du hast eines der Enden erreicht.</p>"
      },
      {
       "type": "if",
       "condition": "STATE karma > 3",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Deine Entscheidungen konnten das Schlimmste verhindern. Die Geschichte von <em>Hollow White</em>&nbsp;hat doch noch ein gutes Ende genommen.</p>"
        },
        {
         "type": "addItem",
         "id": "end"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE karma > 3",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Leider konnten deine Entscheidungen das Schlimmste nicht verhindern. Der Welt steht eine düstere Zukunft bevor. Die Geschichte von <em>Hollow White</em>&nbsp;hat ein tragisches Ende genommen.</p>"
        },
        {
         "type": "addItem",
         "id": "badend"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Doch <em>Hollow White</em>&nbsp;ist noch nicht zu Ende. Du kannst das Abenteuer wiederholen und weitere Geheimnisse aufdecken oder du machst dich auf die Suche nach den restlichen versteckten <em>Sammelobjekten</em>. Deine bisherige Sammlung bleibt natürlich erhalten. Nur wenn du den Speicherstand oder den Browserspeicher löschst, gehen sie verloren.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Bevor wir zur <em>letzten Entscheidung</em>&nbsp;kommen, ist es an der Zeit für ein persönliches <em>Nachwort</em>.</p>"
      }
     ],
     "next": [
      {
       "title": "Nachwort",
       "chapterId": "13",
       "sectionId": "002"
      }
     ]
    },
    {
     "id": "002",
     "title": "Nachwort",
     "elements": [
      {
       "type": "paragraph",
       "text": "<p>Danke an alle, die <em>Hollow White</em> zu Ende gelesen haben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Inspiriert von Mystery-Klassikern, aktuellen Werken und Zeitgeschehen ist die Idee zu <em>Hollow White</em> entstanden. Ein immersives Textadventure, an dem wir seit Winter 2018 kreativ arbeiten.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Motivation war es, eine fiktive spannende Geschichte mit einer eigenen Art von Schreibstil zu erschaffen, in welcher die Leser selbst ins Geschehen eintauchen und sich mit den Charakteren und deren Entscheidungen verbinden.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Mit viel Teamspirit und Herzblut haben wir es geschafft <em>Hollow White</em>&nbsp;zu veröffentlichen.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Das Team dahinter:</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Thomas</em>, der mit seiner Kreativität und langen Nächten <em>Hollow White</em>&nbsp;geschrieben hat. Dazu gehörten Diagramme und Tabellen, ein fast wissenschaftlicher Prozess, um sicherzustellen, dass alle Verbindungen, Zeitsprünge, Charaktere und Aktionen sich zu einer handfesten Geschichte zusammenfügen. Dann hat er noch seine Designer-Fähigkeiten in den Ring geworfen und die App und Illustrationen gestaltet.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Sven</em>, der kontinuierlich wertvolles Feedback gegeben und letztlich die komplette Programmierung und Realisierung der App in die Hand genommen hat. Ohne ihn würde es <em>Hollow White</em> in dieser Form nicht geben.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Fritz</em>, der als professioneller Texter arbeitet und seit dem ersten Entwurf unterstützt und essenzielle Tipps zu Inhalt, Sprache und Dramaturgie und den finalen Schliff als Lektor gegeben hat. Immer ehrlich, kritisch und konstruktiv. Ein Mentor.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p><em>Minh Chau</em>, die neben den&nbsp;vielfältigen Illustrationen der Sammelobjekte noch einmal wertvolles Textfeedback im Detail gegeben hat.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Großen Dank gilt allen Personen, die uns unterstützt haben. Jeder Impuls hat uns erreicht.</p>"
      },
      {
       "type": "if",
       "condition": "STATE karma > 3",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Und zum Schluss Danke an dich. Wir hoffen, du hattest eine ganz besondere Leseerfahrung und <em>Hollow White</em>&nbsp;bleibt dir lange Zeit in Erinnerung.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wir freuen uns über dein <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSfFvQn86vGWkSfUPzoax417FXUGDPwXopJRLxtUUS6orJuixQ/viewform?usp=sf_link\" rel=\"noopener noreferrer\" target=\"_blank\">Feedback</a> oder von dir zu hören. Hier kannst du <a href=\"mailto:feedback@hollowwhite.de\" rel=\"noopener noreferrer\" target=\"_blank\">Kontakt</a> mit uns aufnehmen.</p>"
        }
       ]
      },
      {
       "type": "else",
       "ifCondition": "STATE karma > 3",
       "elements": [
        {
         "type": "paragraph",
         "text": "<p>Und zum Schluss Danke an dich. Wir hoffen, du hattest eine ganz besondere Leseerfahrung und <em>Hollow White</em>&nbsp;bleibt dir lange Zeit in Erinnerung.</p>"
        },
        {
         "type": "paragraph",
         "text": "<p>Wir freuen uns über dein <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSfFvQn86vGWkSfUPzoax417FXUGDPwXopJRLxtUUS6orJuixQ/viewform?usp=sf_link\" rel=\"noopener noreferrer\" target=\"_blank\">Feedback</a> oder von dir zu hören. Hier kannst du <a href=\"mailto:feedback@schwarzerkreis.de\" rel=\"noopener noreferrer\" target=\"_blank\">Kontakt</a> mit uns aufnehmen.</p>"
        }
       ]
      },
      {
       "type": "paragraph",
       "text": "<p>Jetzt liegt es wieder an dir, wie es weitergeht.</p>"
      }
     ],
     "next": [
      {
       "title": "Hollow White mit anderen teilen",
       "id": "share",
       "data": "https://hollowwhite.de"
      },
      {
       "title": "Jetzt aktiv werden",
       "chapterId": "13",
       "sectionId": "003"
      },
      {
       "title": "Hollow White neu beginnen",
       "id": "reset",
       "data": ""
      }
     ]
    },
    {
     "id": "003",
     "title": "Jetzt aktiv werden",
     "elements": [
      {
       "type": "addItem",
       "id": "plant"
      },
      {
       "type": "paragraph",
       "text": "<p>Lass uns zusammen etwas Gutes tun.</p>"
      },
      {
       "type": "paragraph",
       "text": "<p>Effective Altruism, die Organisation hinter Giving What We Can, stellt sicher, dass ihre Spende so wirkungsvoll wie möglich ist: <a href=\"https://www.givingwhatwecan.org/donate/organizations?utm_source=hollowwhite&utm_medium=webapp&utm_campaign=beta_release&utm_id=hollowwhitebeta\" rel=\"noopener noreferrer\" target=\"_blank\">Jetzt mehr erfahren und unterstützen.</a></p>"
      }
     ],
     "next": [
      {
       "title": "Hollow White neu beginnen",
       "id": "reset",
       "data": ""
      }
     ]
    }
   ]
  }
 ],
 "specials": {
  "credits": {
   "id": "credits",
   "title": "Mitwirkende",
   "elements": [
    {
     "type": "paragraph",
     "text": "<p><em>Idee, Story und UX & UI</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Thomas Kiris</p>"
    },
    {
     "type": "paragraph",
     "text": "<p><em>Konzept und Programmierung</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Sven Buschbeck</p>"
    },
    {
     "type": "paragraph",
     "text": "<p><em>Lektor und Mentoring</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Fritz Krautzberger</p>"
    },
    {
     "type": "paragraph",
     "text": "<p><em>Illustrationen</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Minh Chau Appelhagen-Lu</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Thomas Kiris</p>"
    },
    {
     "type": "paragraph",
     "text": "<p><em>Künstler</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p><a href=\"https://on.soundcloud.com/xmg4C\" rel=\"noopener noreferrer\" target=\"_blank\">Lord Neon</a></p>"
    },
    {
     "type": "paragraph",
     "text": "<p><a href=\"https://maeviamusic.com/\" rel=\"noopener noreferrer\" target=\"_blank\">MAEVIA</a></p>"
    },
    {
     "type": "paragraph",
     "text": "<p><em>Testleser</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Minh Chau Appelhagen-Lu</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Benedikt Rascop</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Bettina Buschbeck</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Sven Buschbeck</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Alexandra Röhl</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Sebastian Anton</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Frank Wehrle</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Elke Kiris</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Marina Siciliano</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Ben Regali</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Franz Schelke</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Michael Krett</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Varinja Kiris</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Andi Kiris</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Bernd Schreyer</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Christoph Jaster</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Michael Heller</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Christian Wussow</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Maximilian Harz</p>"
    },
    {
     "type": "paragraph",
     "text": "<p><em>Speziellen Dank</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Silke Kiris</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Benedikt Rascop</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Alessandro Russo</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Franz Schelke</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Christian Aschoff</p>"
    },
    {
     "type": "paragraph",
     "text": "<p><a href=\"https://www.kissshirts.de/\" rel=\"noopener noreferrer\" target=\"_blank\">Kissshirts.de</a></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Gabriel Alenius (Foto Startseite)</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Wir freuen uns über dein <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSfFvQn86vGWkSfUPzoax417FXUGDPwXopJRLxtUUS6orJuixQ/viewform?usp=sf_link\" rel=\"noopener noreferrer\" target=\"_blank\">Feedback</a> oder von dir zu hören. Hier kannst du <a href=\"mailto:feedback@hollowwhite.de\" rel=\"noopener noreferrer\" target=\"_blank\">Kontakt</a> mit uns aufnehmen.</p>"
    }
   ],
   "next": [
    {
     "title": "Hollow White mit anderen teilen",
     "id": "share",
     "data": "https://hollowwhite.de"
    }
   ]
  },
  "imprint": {
   "id": "imprint",
   "title": "Impressum",
   "elements": [
    {
     "type": "paragraph",
     "text": "<p><em>Angaben gem. § 5 TMG</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Thomas Kiris</p>"
    },
    {
     "type": "paragraph",
     "text": "<p><em>Kontaktaufnahme</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>E-Mail: info@hollowwhite.de</p>"
    },
    {
     "type": "paragraph",
     "text": "<p><em>Haftung für Inhalte</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.</p>"
    },
    {
     "type": "paragraph",
     "text": "<p><em>Haftungsbeschränkung für externe Links</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweiligen Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen Internetauftrittes „hollowwhite.de“ gesetzten Links und Verweise von Fragestellern, Blogeinträgern, Gästen des Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.</p>"
    },
    {
     "type": "paragraph",
     "text": "<p><em>Urheberrecht</em></p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf) . Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf&nbsp;). Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.</p>"
    },
    {
     "type": "paragraph",
     "text": "<p>Dieses Impressum&nbsp;wurde freundlicherweise von <a href=\"https://jurarat.de/\" rel=\"noopener noreferrer\" target=\"_blank\">jurarat.de</a>&nbsp;zur Verfügung gestellt.</p>"
    }
   ],
   "next": []
  }
 },
 "config": {
  "items": [
   {
    "id": "matches",
    "category": "",
    "title": "Streichhölzer",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Auf der Rückseite befindet sich in schlecht leserlicher Handschrift eine <em>Wegbeschreibung</em>: Ein ganzes Stück Richtung Nordosten bis zum <em>Ice River</em>. Diesem entlang nach Südosten folgen, bis zum <em>Frozen Lake</em>, einem größeren See bei <em>Snow Peaks</em>.</p>"
     }
    ]
   },
   {
    "id": "motelmidnight",
    "mediaType": "audio",
    "mediaUrl": "/assets/items/midnight.mp3",
    "title": "Motel Midnight",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein uraltes Motel im verschneiten Gebiet von <em>White Valley</em>.</p>"
     },
     {
      "type": "paragraph",
      "text": "<p>Ein Plattenspieler am Empfang spielt Musik. Mehr zur Band <a href=\"https://maeviamusic.com/\" rel=\"noopener noreferrer\" target=\"_blank\">MAEVIA</a> erfahren.</p>"
     }
    ]
   },
   {
    "id": "ghostfellows",
    "category": "",
    "title": "Ghost Fellows",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Eine <em>Packung Zigaretten</em> der Marke <em>Ghost Fellows</em>, mit intensiver Tabaknote.</p>"
     }
    ]
   },
   {
    "id": "cabin",
    "category": "",
    "title": "Hütte",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Eine abgelegene <em>Hütte</em>, mitten in den Wäldern von <em>White Valley</em>.</p>"
     }
    ]
   },
   {
    "id": "lordneon",
    "category": "lordneon",
    "mediaType": "audio",
    "mediaUrl": "/assets/items/lord-neon-the-ride.mp3",
    "title": "Lord Neon — The Ride",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Mehr zu <a href=\"https://on.soundcloud.com/xmg4C\" rel=\"noopener noreferrer\" target=\"_blank\">Lord Neon</a> erfahren.</p>"
     }
    ]
   },
   {
    "id": "photo-ella",
    "category": "",
    "title": "Foto",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein aufgenommenes <em>Foto</em>&nbsp;von Albert. Neben dem <em>Ice River</em>&nbsp;und der weiten Landschaft von <em>White Valley</em>, ist im Vordergrund leicht unscharf deine Person mit darauf abgebildet. Sehr künstlerisch.</p>"
     }
    ]
   },
   {
    "id": "first-aid",
    "category": "",
    "title": "Verbandskasten",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein <em>Verbandskasten</em>&nbsp;mit Desinfiziermittel, Schere und Verbänden.</p>"
     }
    ]
   },
   {
    "id": "snow-lebt",
    "category": "",
    "title": "Snow hat überlebt",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Zum Glück ist das gut gegangen! <em>Snow</em> lebt.</p>"
     }
    ]
   },
   {
    "id": "coffee",
    "category": "",
    "title": "Schwarzer Kaffee",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Verdammt guter <em>Kaffee</em>!</p>"
     }
    ]
   },
   {
    "id": "snowpeaks",
    "category": "",
    "title": "Snow Peaks",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Das sagenumwobene <em>Snow Peaks</em>.</p>"
     }
    ]
   },
   {
    "id": "coin",
    "category": "",
    "title": "Münze",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Eine <em>Münze</em>&nbsp;mit den Buchstaben <em>H. W.</em> in einem Hexagon.</p>"
     }
    ]
   },
   {
    "id": "rose",
    "category": "",
    "title": "Weiße Rose",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Eine <em>weiße Rose</em>&nbsp;aus der <em>Kuppel</em>&nbsp;von <em>Snow Peaks</em>.</p>"
     }
    ]
   },
   {
    "id": "stardustdiner",
    "category": "",
    "title": "Stardust",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein gemütliches <em>Restaurant mit Bar</em>&nbsp;mitten in <em>Snow Peaks</em>.</p>"
     }
    ]
   },
   {
    "id": "cheesecake",
    "category": "",
    "title": "Johnnys geheimes Käsekuchen-Rezept",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p><em>Zutaten für Boden:</em>&nbsp;200 g Mehl, 80 g Zucker, 100 g Butter, 1 Ei, 1 Teelöffel Backpulver, 1 Vanillezucker</p>"
     },
     {
      "type": "paragraph",
      "text": "<p><em>Zutaten für Füllung:</em>&nbsp;200 g Margarine, 200 g Zucker, 1 Vanillezucker, 2 Eier, 2 Packungen Magerquark, ¼ l Sahne leicht schlagen, 1 Soßenpulver Vanille, 1 TL Rum</p>"
     },
     {
      "type": "paragraph",
      "text": "<p><em>Zubereitung:</em>&nbsp;Bei 175° Grad ca. 85 Min. Unter/Oberhitze im Ofen backen.</p>"
     }
    ]
   },
   {
    "id": "crepe",
    "category": "",
    "title": "Alberts geheimes Crêpe-Rezept",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p><em>Zutaten für 2 Personen:</em>&nbsp;200 g Mehl, 2 Eier, 400 ml Milch, 1 Prise Salz</p>"
     },
     {
      "type": "paragraph",
      "text": "<p><em>Zubereitung:</em>&nbsp;Mehl, Eier, Milch und Salz in einer Schüssel umrühren. 30 Min. im Kühlschrank ziehen lassen. Danach den Teig in eine erhitzte Pfanne mit etwas Öl geben und nach circa 30 Sekunden wenden. Nach weiteren 30 Sekunden den Crêpe von der Pfanne nehmen. Fertig.</p>"
     }
    ]
   },
   {
    "id": "observatorium",
    "category": "",
    "title": "Observatorium",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Das <em>Observatorium</em>. Eine Art Ruhestätte für die <em>Verschwundenen</em>&nbsp;des <em>Hollow White</em>.</p>"
     }
    ]
   },
   {
    "id": "gin-mule",
    "category": "",
    "title": "Hollow White Mule Gin",
    "elements": [
     {
      "type": "paragraph",
      "text": "<ol>\n<li>Glas im Kühlschrank kühl stellen</li>\n</ol>"
     },
     {
      "type": "paragraph",
      "text": "<ol start=\"2\">\n<li>Eiswürfel vorbereiten und ins gekühlte Glas geben</li>\n</ol>"
     },
     {
      "type": "paragraph",
      "text": "<ol start=\"3\">\n<li>160 ml Gingerbeer</li>\n</ol>"
     },
     {
      "type": "paragraph",
      "text": "<ol start=\"4\">\n<li>40 ml <em>aesthesis Gin</em></li>\n</ol>"
     },
     {
      "type": "paragraph",
      "text": "<ol start=\"5\">\n<li>Scheibe Limette und Scheibe Gurke</li>\n</ol>"
     },
     {
      "type": "paragraph",
      "text": "<ol start=\"6\">\n<li>Ingwer-Stückchen hinzugeben</li>\n</ol>"
     }
    ]
   },
   {
    "id": "gin-peaks",
    "category": "",
    "title": "Gin Peaks",
    "elements": [
     {
      "type": "paragraph",
      "text": "<ol>\n<li>Glas im Kühlschrank kühl stellen</li>\n</ol>"
     },
     {
      "type": "paragraph",
      "text": "<ol start=\"2\">\n<li>Eiswürfel vorbereiten und ins gekühlte Glas geben</li>\n</ol>"
     },
     {
      "type": "paragraph",
      "text": "<ol start=\"3\">\n<li>160 ml Tonic</li>\n</ol>"
     },
     {
      "type": "paragraph",
      "text": "<ol start=\"4\">\n<li>40 ml <em>aesthesis Gin</em></li>\n</ol>"
     },
     {
      "type": "paragraph",
      "text": "<ol start=\"5\">\n<li>Scheibe Limette und Scheibe Gurke</li>\n</ol>"
     },
     {
      "type": "paragraph",
      "text": "<ol start=\"6\">\n<li>Mit Wacholderbeeren und Rosmarinzweig garnieren</li>\n</ol>"
     }
    ]
   },
   {
    "id": "splitter-recorder",
    "category": "",
    "title": "Splitter aus Tonbandgerät",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein mysteriöser <em>Splitter</em> aus deinem Tonbandgerät. Wurde offenbar darin versteckt.</p>"
     }
    ]
   },
   {
    "id": "splitter-judy",
    "category": "",
    "title": "Splitter von Judy",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p><em>Judys Splitter</em>&nbsp;aus dem <em>Frozen Lake</em>. Sehr ähnlich zu deinem Splitter aus dem Tonbandgerät.</p>"
     }
    ]
   },
   {
    "id": "ink",
    "category": "",
    "title": "Tinte",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Eine besondere <em>Tinte</em>, die unter die Haut gestochen wird. Der <em>Schwarze Kreis</em>&nbsp;setzt diese zur Authentifizierung und Rang-Zuordnung ein.</p>"
     }
    ]
   },
   {
    "id": "key-rose",
    "category": "",
    "title": "Roses Zimmerschlüssel",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p><em>Roses Zimmerschlüssel</em>, &nbsp;der von ihrem Kater Platon verwahrt wird. Ein sehr gemütliches Tier.</p>"
     }
    ]
   },
   {
    "id": "lordneon2",
    "category": "lordneon",
    "mediaType": "audio",
    "mediaUrl": "/assets/items/lord-neon-dystopia.mp3",
    "title": "Lord Neon — Dystopia",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Mehr zu <a href=\"https://on.soundcloud.com/xmg4C\" rel=\"noopener noreferrer\" target=\"_blank\">Lord Neon</a> erfahren.</p>"
     }
    ]
   },
   {
    "id": "pete-letter",
    "category": "",
    "title": "Petes Brief",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein sehr persönlicher <em>Brief</em>&nbsp;von Roses Mann <em>Pete</em>, den er kurz vor seinem Tod noch verfasste. <em>Pete</em>&nbsp;ist bei einem tragischen Unfall ums Leben gekommen. Nicht&nbsp;unwahrscheinlich, dass der <em>Schwarze Kreis</em> dahinter steckte.</p>"
     }
    ]
   },
   {
    "id": "secret-message",
    "category": "",
    "title": "Geheime Nachricht",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Eine <em>Drohung</em>&nbsp;an <em>Georgy</em>&nbsp;vom <em>Schwarzen Kreis</em>. Es bleibt nicht mehr viel Zeit!</p>"
     }
    ]
   },
   {
    "id": "rose-lebt",
    "category": "",
    "title": "Rose lebt!",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Das war knapp! <em>Rose</em> hat überlebt!</p>"
     }
    ]
   },
   {
    "id": "chest",
    "category": "",
    "title": "Truhe",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Eine kleine <em>Truhe</em> mit den Buchstaben HW für <em>Hollow White</em>.</p>"
     }
    ]
   },
   {
    "id": "photo-ella-old",
    "category": "",
    "title": "Foto",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein altes <em>Foto</em>. Neben dem <em>Ice River</em>&nbsp;und der weiten Landschaft von <em>White Valley</em>, ist im Vordergrund leicht unscharf <em>Roses Mutter</em>&nbsp;darauf abgebildet. Es wirkt sehr künstlerisch.</p>"
     }
    ]
   },
   {
    "id": "ringofrose",
    "category": "",
    "title": "Roses Ring",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein goldener <em>Ehering</em> von Roses Mann <em>Pete</em>. Eine der wenigen Erinnerungen an ihn.</p>"
     }
    ]
   },
   {
    "id": "bracelet",
    "category": "",
    "title": "Armband",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein aus Drähten und Kabeln geflochtenes <em>Armband</em> von der kleinen <em>Hannah</em>.</p>"
     }
    ]
   },
   {
    "id": "heart",
    "category": "",
    "title": "Stein",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein winziger <em>Stein</em>&nbsp;in Form eines Herzens. Die kleine <em>Hannah</em>&nbsp;hat diesen in der Höhle am <em>Kalten Stern</em> gefunden.</p>"
     }
    ]
   },
   {
    "id": "maevia",
    "mediaType": "audio",
    "mediaUrl": "/assets/items/maevia-waiting.mp3",
    "title": "MAEVIA – Waiting",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Mehr zur Band <a href=\"https://maeviamusic.com/\" rel=\"noopener noreferrer\" target=\"_blank\">MAEVIA</a> erfahren.</p>"
     }
    ]
   },
   {
    "id": "lordneon3",
    "category": "lordneon",
    "mediaType": "audio",
    "mediaUrl": "/assets/items/lord-neon-chrome-warrior.mp3",
    "title": "Lord Neon — Chrome Warrior",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Mehr zu <a href=\"https://on.soundcloud.com/xmg4C\" rel=\"noopener noreferrer\" target=\"_blank\">Lord Neon</a> erfahren.</p>"
     }
    ]
   },
   {
    "id": "propaganda",
    "category": "",
    "title": "Schwarzer Kreis",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ein <em>Propaganda-Zettel</em>&nbsp;mit dem Erkennungszeichen des <em>Schwarzen Kreis</em>.</p>"
     }
    ]
   },
   {
    "id": "fox",
    "category": "",
    "title": "Polarfuchs",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Der <em>Polarfuchs</em>&nbsp;– ein einzigartiges und scheues Tier in <em>White Valley</em>.</p>"
     }
    ]
   },
   {
    "id": "chest-old",
    "category": "",
    "title": "Alte Truhe",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Eine kleine <em>alte Truhe</em>&nbsp;mit den Buchstaben HW für <em>Hollow White</em>. Etwas rostig. Scheint schon älter zu sein.</p>"
     }
    ]
   },
   {
    "id": "key",
    "category": "",
    "title": "Schlüssel",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Der <em>Schlüssel</em>&nbsp;zum Zugang der Höhle zum <em>Kalten Stern</em>.</p>"
     },
     {
      "type": "paragraph",
      "text": "<p>Die liegende Acht symbolisiert das Unendlichkeitssymbol.</p>"
     }
    ]
   },
   {
    "id": "recorder",
    "category": "",
    "title": "Georgys Tonbandgerät",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p><em>Georgys Tonbandgerät</em>&nbsp;mit vielen geheimen Informationen zum <em>Hollow White</em>&nbsp;und noch bevorstehenden Geschehnissen in der Zukunft.</p>"
     }
    ]
   },
   {
    "id": "bag",
    "category": "",
    "title": "Dr. Ella Monroes Tasche",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Eine <em>Tasche</em>&nbsp;mit diversen Utensilien, wie das Tonbandgerät, etwas Geld und das Foto von der kleinen <em>Hannah</em>&nbsp;etc.</p>"
     }
    ]
   },
   {
    "id": "end",
    "category": "",
    "title": "Gratulation, du hast es geschafft!",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ob mit <em>anderen Entscheidungen</em>, die Geschichte anders ausgegangen wäre?</p>"
     }
    ]
   },
   {
    "id": "badend",
    "category": "",
    "title": "Gescheitert! Versuche es noch einmal …",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Ob mit <em>anderen Entscheidungen</em>, die Geschichte anders ausgegangen wäre?</p>"
     }
    ]
   },
   {
    "id": "plant",
    "category": "",
    "title": "Etwas Gutes tun",
    "elements": [
     {
      "type": "paragraph",
      "text": "<p>Lass uns zusammen etwas Gutes tun.</p>"
     }
    ]
   }
  ],
  "options": [
   {
    "id": "theme",
    "title": "Design",
    "choices": [
     {
      "id": "light-theme",
      "title": "Light",
      "default": false
     },
     {
      "id": "dark-theme",
      "title": "Dark",
      "default": true
     }
    ]
   },
   {
    "id": "font",
    "title": "Textstil",
    "choices": [
     {
      "id": "font-sans",
      "title": "Modern",
      "default": false
     },
     {
      "id": "font-serif",
      "title": "Classic",
      "default": true
     }
    ]
   },
   {
    "id": "size",
    "title": "Textgröße",
    "choices": [
     {
      "id": "size-m",
      "title": "M",
      "default": false
     },
     {
      "id": "size-l",
      "title": "L",
      "default": false
     },
     {
      "id": "size-xl",
      "title": "XL",
      "default": false
     }
    ]
   }
  ],
  "feedbackMode": {
   "enabled": true,
   "feedbackLink": "https://hollow-white.de",
   "urlFragments": [
    "localhost",
    "-preview",
    "-testing"
   ]
  },
  "language": "de",
  "pageScrollUpDelay": 300
 }
}) as unknown) as Book;

export default book;