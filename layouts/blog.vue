<template>
  <div class="full-wrapper">
    <div class="wrapper">
      <header>
        <div class="content flex-row">
          <nav class="links">
            <nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>
            <a href="https://github.com/daydream-mx/Daydream">{{ $t('source') }}</a>
            <a href="https://matrix.to/#/#daydream:nordgedanken.dev">{{ $t('chat') }}</a>
          </nav>

          <div class="brand">Daydream</div>

          <div class="chat-now-button-wrapper">
            <a href="https://app.daydream.im/">
              <div class="chat-now-button">
                <div class="chat-now-button-text">{{ $t('chat-now') }}</div>
              </div>
            </a>
          </div>
        </div>
      </header>
      <main>
        <div class="content">
          <Nuxt />
        </div>
      </main>
      <footer>
        <div class="content">
          <div class="top flex-row">
            <div class="copyright">&copy;2020 MTRNord</div>
            <div class="brand">Daydream</div>
            <div class="chat-now-button-wrapper">
              <a href="https://app.daydream.im/">
                <div class="chat-now-button">
                  <div class="chat-now-button-text">{{ $t('chat-now') }}</div>
                </div>
              </a>
            </div>
          </div>
          <hr />
          <div class="bottom flex-row">
            <nav class="links">
              <nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>
              <a href="https://github.com/daydream-mx/Daydream">{{ $t('source') }}</a>
              <a href="https://matrix.to/#/#daydream:nordgedanken.dev">{{ $t('chat') }}</a>
            </nav>

            <div class="socials"></div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
