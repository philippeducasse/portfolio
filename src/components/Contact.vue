<template>
  <section class="contact hidden right" id="contact">
    <h1 class="contact hidden right">Contact</h1>
    <br />
    <h5 class="hidden left">Want me on your team? Feel free to reach out to me on your preferred platform. I'm also very open for any collaborations.</h5>
    <br />
    <div class="hidden right">
      <h5>Telephone: <a href="tel:+4915203723752">+4915203723752</a></h5>
      <h5>Email: <a href="mailto:info@philippeducasse.com">info@philippeducasse.com</a></h5>
      <h5><a href="https://www.linkedin.com/in/philippe-ducasse/">LinkedIn</a></h5>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.contact {
  text-align: center;
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