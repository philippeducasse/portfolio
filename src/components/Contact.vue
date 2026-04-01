<template>
  <section class="contact" id="contact">
    <h1 class="hidden right">Contact</h1>
    <h5 class="hidden left">Want me on your team? Feel free to reach out to me on your preferred platform. I'm also very open for any collaborations.</h5>
    <div class="contact-info hidden right">
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

.contact h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.contact h5 {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

.contact-info {
  margin-top: 2rem;
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