import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards:any;
  maleCards: any[];
  femaleCards:any[];
  male:boolean;
  clickedAlready=false;

  constructor() {

    this.male= true;

    this.maleCards = [
      {'text': 'Darum ermahnet euch untereinander und bauet einer den andern, wie ihr denn tut.', 'vers': 'Thessalonicher 5,11'},
      {'text': '… aber die auf YHWH harren, kriegen neue Kraft, dass sie auffahren mit Flügeln wie Adler, dass sie laufen und nicht matt werden, dass sie wandeln und nicht müde werden.', 'vers': 'Jesaja 40,31'},
      {'text': 'Denn so du durch Wasser gehst, will ich bei dir sein, dass dich die Ströme nicht sollen ersäufen; und so du ins Feuer gehst, sollst du nicht brennen, und die Flamme soll dich nicht versengen.', 'vers': 'Jesaja 43, 2'},
      {'text': 'Siehe, ich habe dir geboten, dass du getrost und freudig seist. Lass dir nicht grauen und entsetze dich nicht; denn YHWH, dein Elohim ist mit dir in allem, was du tun wirst.', 'vers': 'Josua 1,9'},
      {'text': 'Der Name YHWHs ist ein festes Schloss; der Gerechte läuft dahin und wird beschirmt.', 'vers': 'Sprüche 18,10'},
      {'text': 'Seid getrost und unverzagt, alle, die ihr YHWHs harret!', 'vers': 'Psalm 31,24'},
      {'text': 'Verlass dich auf YHWH von ganzem Herzen und verlass dich nicht auf deinen Verstand; sondern gedenke an ihn in allen deinen Wegen, so wird er dich recht führen.', 'vers': 'Sprüche 3,5-6'},
      {'text': 'Gnade sei mit euch und Friede von Elohim, unserm Vater, und Yeshua HaMaschiach! Ich danke meinem Elohim allezeit eurethalben für die Gnade Elohims , die euch gegeben ist in Yeshua HaMaschiach.', 'vers': 'Korinther 1,3-4'},
      {'text': '… fürchte dich nicht, ich bin mit dir; weiche nicht, denn ich bin dein Elohim; ich stärke dich, ich helfe dir auch, ich erhalte dich durch die rechte Hand meiner Gerechtigkeit.', 'vers': 'Jesaja 41,10'},
      {'text': 'Den Frieden lasse ich euch, meinen Frieden gebe ich euch. Nicht gebe ich euch, wie die Welt gibt. Euer Herz erschrecke nicht und fürchte sich nicht.', 'vers': 'Johannes 14, 27'},
      {'text': 'Solches habe ich mit euch geredet, dass ihr in mir Frieden habet. In der Welt habt ihr Angst; aber seid getrost, ich habe die Welt überwunden.', 'vers': 'Johannes 16,33'},
      {'text': 'Elohim ist unsre Zuversicht und Stärke. Eine Hilfe in den großen Nöten, die uns getroffen haben. Darum fürchten wir uns nicht, wenngleich die Welt unterginge und die Berge mitten ins Meer sänken, wenngleich das Meer wütete und wallte und von seinem Ungestüm die Berge einfielen. ', 'vers': 'Psalm 46,1-3'},
      {'text': 'Denn Elohim  hat uns nicht gegeben den Geist der Furcht, sondern der Kraft und der Liebe und der Zucht.', 'vers': '2. Timotheus 1,7'},
      {'text': 'Ich habe YHWH allezeit vor Augen; denn er ist mir zur Rechten, so werde ich fest bleiben.', 'vers': 'Psalm 16,8'},
      {'text': 'Wirf dein Anliegen auf YHWH; der wird dich versorgen und wird den Gerechten nicht ewiglich in Unruhe lassen.', 'vers': 'Psalm 55,22'},
      {'text': 'Du erhältst stets Frieden nach gewisser Zusage; denn man verlässt sich auf dich.', 'vers': 'Jesaja 26,3'},
      {'text': 'YHWH ist meine Macht und mein Psalm und ist mein Heil. Man singt mit Freuden vom Sieg in den Hütten der Gerechten: „Die Rechte YHWHs behält den Sieg; die Rechte YHWHs ist erhöht; die Rechte YHWHs behält den Sieg!“', 'vers': 'Psalm 118,14-16'},
      {'text': 'Du bist mein Schirm und Schild; ich hoffe auf dein Wort. Weichet von mir, ihr Boshaften! Ich will halten die Gebote meines Elohims.', 'vers': 'Psalm 119,114-15'},
      {'text': 'Meine Seele liegt im Staube; erquicke mich nach deinem Wort.', 'vers': 'Psalm 119,25'},
      {'text': 'Das ist mein Trost in meinem Elend; denn dein Wort erquickt mich.', 'vers': 'Psalm 119,50'},
      {'text': 'Es ist mir lieb, dass du mich gedemütigt hast, dass ich deine Rechte lerne.', 'vers': 'Psalm 119,71'},
      {'text': 'Ich rufe zu YHWH in meiner Not, und er erhört mich.', 'vers': 'Psalm 120,1'},
      {'text': 'Das ist mein Gebot, dass ihr euch untereinander liebet, gleichwie ich euch liebe.', 'vers': 'Johannes 15,12'},
      {'text': 'Und der Friede Elohims regiere in euren Herzen, zu welchem ihr auch berufen seid in einem Leibe; und seid dankbar! Lasset das Wort des Messias unter euch reichlich wohnen in aller Weisheit; lehret und vermahnet euch selbst mit Psalmen und Lobgesängen und geistlichen lieblichen Liedern und singt YHWH in eurem Herzen. Und alles, was ihr tut mit Worten oder mit Werken, das tut alles in dem Namen Yeshuas und danket Elohim und dem Vater durch ihn.', 'vers': 'Kolosser 3,15-17'},
      {'text': 'Sorget nichts! Sondern in allen Dingen lasset eure Bitten im Gebet und Flehen mit Danksagung vor Elohim kund werden.', 'vers': 'Philipper 4,6'},
      {'text': 'YHWH ist meine Stärke und mein Schild; auf ihn hofft mein Herz, und mir ist geholfen. Und mein Herz ist fröhlich, und ich will ihm danken mit meinem Lied.', 'vers': 'Psalm 28,7'},
      {'text': 'Sorget nichts! Sondern in allen Dingen lasset eure Bitten im Gebet und Flehen mit Danksagung vor Elohim kund werden.', 'vers': 'Philipper 4,6'},
      {'text': 'Seid allezeit fröhlich, betet ohne Unterlass, seid dankbar in allen Dingen; denn das ist der Wille Elohims in Yeshua HaMaschiach an euch.', 'vers': '1. Thessalonicher 5,16-18'},
      {'text': 'Geht zu seinen Toren ein mit Danken, zu seinen Vorhöfen mit Loben; danket ihm, lobet seinen Namen!', 'vers': 'Psalm 100,4'},

    ]


    this.femaleCards = [
      {'text': 'Eine Frau kommt durch Liebenswürdigkeit zu Ansehen...', 'vers': 'Sprüche 11,16'},
      {'text': 'Eine tüchtige Frau bringt ihren Mann zu höchsten Ehren', 'vers': 'Sprüche 12,4'},
      {'text': 'Kluge Frauen bauen Haus und Familie auf,...', 'vers': 'Sprüche 14,1'},
      {'text': 'Eine tüchtige Frau ist das kostbarste Juwel, das einer finden kann.', 'vers': 'Sprüche 31, 10-31'},
      {'text': 'Sie erbarmt sich über die Armen und gibt den Bedürftigen, was sie brauchen.', 'vers': 'Sprüche 31,20'},
      {'text': 'Sie ist eine würdevolle und angesehene Frau, zuversichtlich blickt sie in die Zukunft.', 'vers': 'Sprüche 31,25'},
      {'text': 'Sie redet nicht gedankenlos, und ihre Anweisungen gibt sie freundlich. ', 'vers': 'Sprüche 31,26'},
      {'text': 'Ihre Kinder reden voller Stolz von ihr, und ihr Mann lobt sie mit überschwänglichen Worten.', 'vers': 'Sprüche 31,28'},
      {'text': 'Es gibt wohl viele gute und tüchtige Frauen, aber du übertriffst sie alle!', 'vers': 'Sprüche 31,28\n'},
      {'text': 'Anmut kann täuschen, und Schönheit vergeht – doch wenn eine Frau Ehrfurcht vor YHWH hat, dann verdient sie das höchste Lob!', 'vers': 'Sprüche 31,30'},
      {'text': '[...] und die Frau soll ihrem Mann mit Ehrerbietung begegnen.', 'vers': 'Epheser 5,33'},
      {'text': '[...] sondern sich dadurch auszeichnen Gutes zu tun, das ist der wahre Schmuck von Frauen, die sich zu Gott bekennen und ihn ehren.', 'vers': '1. Timotheus 2,10'},
      {'text': 'Entsprechendes gilt für die älteren Frauen … Vielmehr sollen sie durch Lehre und Vorbild die jüngeren Frauen dazu anleiten, ihre Männer und ihre Kinder zu lieben, verantwortungsbewusst zu handeln uns sich von jeder Verfehlung rein zu halten, sich um ihren Haushalt zu kümmern, freundlich zu sein und sich ihren Männern unterzuordnen. Denn die Botschaft Elohims soll nicht in Verruf geraten.', 'vers': 'Titus, 2,3'},
      {'text': 'Du bist schön, ganz wunderschön, meine Freundin, und kein Makel ist an dir.', 'vers': 'Hohelied 4,7'},
      {'text': 'Euer Schmuck soll nicht äußerlich sein – mit Haarflechten, goldenen Ketten oder prächtigen Kleidern –, sondern der verborgene Mensch des Herzens, unvergänglich, mit sanftem und stillem Geist: Das ist köstlich vor Elohim.', 'vers': '1. Petrus 3,3-4'},
      {'text': 'Haus und Habe kann man erben, doch YHWH schenkt eine verständige Frau.', 'vers': 'Sprüche 19,14'},
      {'text': 'Lass mich am Morgen hören deine Gnade; denn ich hoffe auf dich. Tu mir kund den Weg, den ich gehen soll; denn mich verlangt nach dir.', 'vers': 'Psalm 143,8'},
      {'text': 'Sondern wir reden, wie geschrieben steht: „Was kein Auge gesehen hat und kein Ohr gehört hat und in keines Menschen Herz gekommen ist, was Elohim bereitet hat denen, die ihn lieben.“', 'vers': '1.Korinther 2,9\n'},
      {'text': 'Weil du mir wert und teuer bist,\n' +
        'weil ich dich liebe, gebe ich Menschen an deiner Stelle hin,\n' +
        'ganze Völker für dein Leben.', 'vers': 'Jesaja 43,4'},
      {'text': 'Mache dich auf, werde licht; denn dein Licht kommt, \n' +
        'und die Herrlichkeit des Herrn geht auf über dir!', 'vers': 'Jesaja 60,1'},
      {'text': 'Ja, eine Lilie bist du, meine Freundin, eine Lilie unter lauter Dornen, schöner als alle anderen Mädchen!', 'vers': 'Hohelied 2,2'},
      {'text': 'Nur mir gehört mein Liebster, und ich gehöre ihm.', 'vers': 'Hohelied 2,16'},
      {'text': 'Du hast mich verzaubert, mein Mädchen, meine Braut! Mit einem einzigen Blick hast du mein Herz gestohlen. ', 'vers': 'Hohelied 4,9'},
      {'text': 'Wie glücklich macht mich deine Liebe, mein Mädchen, meine Braut! Ich genieße deine Liebe mehr als den besten Wein. ', 'vers': 'Hohelied 4,10'},
      {'text': 'Mein Liebster strahlt vor Schönheit und Kraft, unter Tausenden ist keiner so wie er!', 'vers': 'Hohelied 5,10'},
      {'text': 'Wende deine Augen von mir ab, denn dein Blick überwältigt mich.', 'vers': 'Hohelied 6,5'},
      {'text': 'Ohne dass ich es merkte, trieb mich die Sehnsucht zu meinem Liebsten, hin zu seinem königlichen Prachtwagen.', 'vers': 'Hohelied 6,12'},
      {'text': 'Ich gehöre meinem Liebsten, und sein Herz sehnt sich nach mir.\n', 'vers': 'Hohelied 7,12'},
      {'text': 'Lass mich deinem Herzen nahe sein, so wie der Siegelring auf deiner Brust.', 'vers': 'Hohelied 8,6'},
      {'text': 'Hanna betete: Mein Herz jubelt über YHWH, er hat mich wieder aufgerichtet und mich gestärkt.', 'vers': '1. Samuel 2,1'},
      {'text': ' YHWH allein ist heilig; es gibt keinen Elohim  außer ihm. Auf nichts ist so felsenfest Verlass wie auf ihn, unseren Elohim. ', 'vers': '1. Samuel 2,2'},
    ];


    this.cards = this.maleCards;
  }

  ngOnInit() {
  }

  changeMale($event) {
    if (!$event.checked) {
      this.cards = this.femaleCards;
    } else {
      this.cards = this.maleCards;
    }
  }


}
