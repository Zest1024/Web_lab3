export default class Model {
  constructor() {
    this.currentItem = null;
    this.engVocabulary =
      "subway, an inhabitant, a load, garbage, opposite, law, kid, face, history, morning, research, ask, work, look, want, go, important, social".split(
        ", "
      );
    this.rusVocabulary =
      "метро, житель, груз, мусор, напротив, закон, ребенок, лицо, история, утро, исследование, спросить, работа, смотри, хочу, иди, важно, социальный".split(
        ", "
      );
    this.color = "white";
    this.scores = 0;
  }
  start() {
    this.scores = 0;
    this.currentItem = Math.floor(Math.random() * this.engVocabulary.length);
    // console.log(this.currentItem);
  }
  next() {
    if (this.engVocabulary.length > 0) {
      this.currentItem = Math.floor(Math.random() * this.engVocabulary.length);
      this.color = "white";
    }
  }
  deleteWord(id) {
    this.engVocabulary.splice(id, 1);
    this.rusVocabulary.splice(id, 1);
  }
  check(input) {
    const index = this.rusVocabulary.findIndex((item) => item == input);
    if (index == this.currentItem) {
      this.scores++;
      this.color = "green";
      setTimeout(this.next.bind(this), 2000);
    } else {
      console.log(input);
      this.color = "red";

      setTimeout(this.next.bind(this), 2000);
    }
    // console.table(this.rusVocabulary);
  }
}
