<template>
  <div class="hero-content">
    <h1 class="hero-title">{{ $t('hero.title') }}</h1>
    <p>{{ $t('hero.paragraph1') }}</p>
    <p>{{ $t('hero.paragraph2') }}</p>
    <p>{{ $t('hero.paragraph3') }}</p>
    <div class="buttons flex-row">
      <div class="chat-now-button-wrapper">
        <a href="https://app.daydream.im/">
          <div class="chat-now-button">
            <div class="chat-now-button-text">{{ $t('chat-now') }}</div>
          </div>
        </a>
      </div>
      <div class="learn-more-button-wrapper">
        <a href="https://github.com/daydream-mx/Daydream">
          <div class="learn-more-button">
            <div class="learn-more-button-text">{{ $t('learn-more') }}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style>
</style>
