<template>
  <section class="profile" id="home">
    <img
      src="/img/portrait.jpg"
      alt="portrait of Philippe Ducasse"
      class="profile__portrait slide-in left"
    />
    <div class="profile__description">
      <h1 class="slide-in right profile-title">Hello! My name is Philippe Ducasse</h1>
      <br />
      <div class="profile__description--summary slide-in bottom">
        <h5>
          I am a Typescript and Python web-developer with a background in circus and performance
          arts.
        </h5>
        <p>
          I am currently working as a full-stack developer for
          <a href="https://vdpresearch.de/" target="_blank">vdpResearch</a>.
        </p>
        <p>Based in Berlin, Germany.</p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.profile {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
}

.profile__portrait {
  width: 15.625rem;
  height: 15.625rem;
  margin-right: 3rem;
  float: left;
  border-radius: 50%;
}

.profile__description {
  width: 50%;
}

.profile__description--summary {
  font-size: 1rem;
}

.profile h1 {
  font-size: 2rem;
  display: block;
  margin-bottom: 1.5rem;
}

.profile p {
  font-size: 1rem;
}

.profile-title {
  width: 120%;
}

.slide-in {
  opacity: 0;
  filter: blur(5px);
  transition: all 1s;
}

.slide-in.left {
  transform: translateX(-10vw);
}

.slide-in.right {
  transform: translateX(10vw);
}

.slide-in.bottom {
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
  .slide-in {
    transition: none;
  }
}

@media (max-width: 650px) {
  .profile {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile__portrait {
    margin: 0 0 1.875rem;
  }

  .profile__description {
    width: 90%;
  }

  .profile h1 {
    font-size: 1.5rem;
  }

  .profile-title {
    width: 100%;
  }
}
</style>
