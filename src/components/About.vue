<template>
  <div class="background-bar2 hidden left"></div>
  <section class="about" id="about">
    <div class="hidden right">
      <h1>About</h1>
      <article>
        <p class="profile__description--summary hidden bottom">
          I am a Javascript web developer, primarily focused on ReactJS. After almost 10 years in the field of contemporary circus and performance arts, I have switched to web development. The experience I have acquired through performing arts, in particular my discipline and commitment to hard work, attention to detail, and ability to think outside the box give me unique skills in the field of software development.
        </p>
      </article>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.background-bar2 {
  width: 100%;
  height: 30px;
  background-color: var(--secondary-color);
  z-index: 0;
  transition: 3s !important;
}

.about {
  text-align: center;
  margin-top: 3rem;
}

.hidden {
  opacity: 0;
  filter: blur(5px);
  transition: all 1s;
}

.hidden.left {
  transform: translateX(-10vw);
}

.hidden.right {
  transform: translateX(10vw);
}

.hidden.bottom {
  transform: translateY(10vh);
}

.shows {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0) !important;
  transform: translate(0) !important;
  transition: all 1.5s;
}

@media (prefers-reduced-motion) {
  .hidden {
    transition: none;
  }
}
</style>