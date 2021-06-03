<template>
  <div class="help">
    <div class="main__wrapper">
      <h2 class="main-title">Подсказки</h2>
      <div class="main__inner">
        <ul class="help-list">
          <li
            v-for="(word, i) in $store.state.Model.engVocabulary"
            v-bind:key="word"
          >
            {{ word }}-{{ $store.state.Model.rusVocabulary[i] }}
          </li>
        </ul>
        <router-link to="/" class="btn btn-primary check-button"
          >Назад к игре</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.help-list {
  height: 500px;
  overflow: auto;
}
</style>