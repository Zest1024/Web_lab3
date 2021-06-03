<template>
  <div class="home">
    <div class="main__wrapper">
      <h2 class="main-title">Проверьте ваш словарный запас!</h2>
      <div class="main__inner">
        <div class="main__word-wrapper">
          <p>English word:</p>
          <input
            class="main-word"
            v-bind:value="
              $store.state.Model.engVocabulary[$store.state.Model.currentItem]
            "
            disabled
          />
        </div>

        <div class="main__translate-wrapper">
          <p>Translate:</p>
          <input
            class="main-translate"
            v-model="input"
            v-bind:style="{ background: $store.state.Model.color }"
            placeholder="Введите перевод"
          />
        </div>

        <div class="main__score-wrapper">
          <p>Scores:</p>
          <div class="score-count">{{ $store.state.Model.scores }}</div>
        </div>
        <button class="btn btn-primary check-button" @click="check(input)">
          Проверить
        </button>
        <router-link to="/help" class="btn btn-primary check-button"
          >Подсказки</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      input: "",
      word: "",
    };
  },
  created() {
    this.$store.commit("START");
    this.word = this.$store.state.Model.engVocabulary[
      this.$store.state.Model.currentItem
    ];
  },
  components: {},
  methods: {
    check(input) {
      console.log(input);
      this.$store.dispatch("CHECK", input);
    },
  },
};
</script>

<style scoped>
.btn {
  margin-bottom: 5px !important;
}
</style>