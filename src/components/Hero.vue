<template>
  <section class="profile" id="home">
    <img
      src="/img/portrait.jpg"
      alt="portrait of Philippe Ducasse"
      class="profile__portrait hidden left"
    />
    <div class="profile__description">
      <h1 class="hidden right profile-title">Philippe Ducasse</h1>
      <p class="hidden left location">
        <svg
          class="location-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Berlin Germany
      </p>
      <div class="profile__description--summary hidden bottom">
        <p>
          I am a Typescript and Python web-developer with a background in circus and performance
          arts. I am currently working as a full-stack developer for
          <a href="https://vdpresearch.de/" target="_blank">vdpResearch</a>.
        </p>
        <p>
          During my free time i like to code circus related things. I also love learning how
          computers and the internet work. And hulahoop.
        </p>
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

.location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

.location-icon {
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
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
