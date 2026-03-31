<template>
  <section class="profile" id="home">
    <img src="/img/portrait.jpg" alt="portrait of Philippe Ducasse" class="profile__portrait slide-in left" />
    <div class="profile__description">
      <h1 class="slide-in right profile-title">Hello! My&nbsp;name&nbsp;is Philippe&nbsp;Ducasse</h1>
      <br />
      <div class="profile__description--summary slide-in bottom">
        <h5>I am a Typescript and Python web-developer with a background in circus and performance arts.</h5>
        <p>I am currently working as a full-stack developer for <a href="https://vdpresearch.de/" target="_blank">vdpResearch</a>.</p>
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
  width: 250px;
  height: 250px;
  margin-right: 3rem;
  float: left;
  border-radius: 50%;
}

.profile__description {
  width: 50%;
}

.profile__description--summary {
  font-size: 16px;
}

.profile h1 {
  font-size: 30px;
  display: block;
}

.profile p {
  font-size: 16px;
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

@media (max-width: 500px) {
  .profile {
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;
  }

  .profile__portrait {
    margin: 0 0 30px;
  }

  .profile__description {
    width: 90%;
  }

  .profile__description--summary {
    font-size: 14px;
  }

  .profile h1 {
    font-size: 22px;
  }

  .profile p {
    font-size: 14px;
  }
}

@media (min-width: 500px) and (max-width: 650px) {
  .profile {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 50px;
  }

  .profile__portrait {
    margin: 0 0 30px;
  }

  .profile__description {
    width: 90%;
  }

  .profile h1 {
    font-size: 22px;
  }

  .profile p {
    font-size: 14px;
  }
}

@media (min-width: 650px) and (max-width: 750px) {
  .profile h1 {
    font-size: 22px;
  }

  .profile p {
    font-size: 14px;
  }

  .profile {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 50px;
  }

  .profile__portrait {
    margin: 0 0 30px;
  }

  .profile__description--summary {
    font-size: 18px;
  }
}

@media (min-width: 750px) and (max-width: 900px) {
  .profile p {
    font-size: 14px;
  }

  .profile h1 {
    font-size: 22px;
  }
}

@media (min-width: 900px) and (max-width: 1100px) {
  h1 {
    font-size: 30px;
  }

  .profile h1 {
    display: block;
  }
}

@media (min-width: 1100px) {
  .profile h1 {
    display: block;
  }

  .profile-title {
    width: 120%;
  }
}
</style>