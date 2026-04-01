<template>
  <section class="profile" id="home">
    <img
      src="/img/portrait.jpg"
      alt="portrait of Philippe Ducasse"
      class="profile__portrait hidden left"
    />
    <div class="profile__description">
      <h1 class="hidden right profile-title">Hello! My name is Philippe Ducasse</h1>
      <br />
      <div class="profile__description--summary hidden bottom">
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
