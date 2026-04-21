<template>
  <section class="profile" id="home">
    <img
      :src="currentTheme === 'nostalgic' ? '/img/nos_portrait.png' : '/img/portrait.jpg'"
      alt="portrait of Philippe Ducasse"
      class="profile__portrait hidden left"
    />
    <div class="profile__description">
      <h1 class="hidden right profile-title">Philippe Ducasse</h1>
      <p class="hidden bottom location">
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
      <div class="profile__description--summary">
        <p class="hidden top">
          I am a Typescript and Python web-developer with a background in circus and performance
          arts. I am currently working as a full-stack developer for
          <a href="https://vdpresearch.de/" target="_blank">vdpResearch</a>.
        </p>
        <p class="hidden left">
          During my free time i like to code circus related things. I also love learning how
          computers and the internet work. And hulahoop.
        </p>
        <p class="hidden bottom">
          You can contact me at info@philippeducasse.com, or on
          <a href="https://linkedin.com/in/philippe-ducasse" target="_blank">LinkedIn</a>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTheme } from "../utils/useTheme";

const { currentTheme } = useTheme();
</script>

<style scoped>
.profile {
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
}

.profile__portrait {
  width: clamp(120px, 30vw, 15.625rem);
  height: clamp(120px, 30vw, 15.625rem);
  margin-right: 3rem;
  float: left;
  border-radius: 50%;
  flex-shrink: 0;
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
  justify-content: center;
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
  text-align: center;
  margin-bottom: 2rem;
}

@media (max-width: 650px) {
  .profile {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .profile__portrait {
    margin: 0 0 1.875rem;
    width: 140px;
    height: 140px;
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

@media (max-width: 400px) {
  .profile__portrait {
    width: 110px;
    height: 110px;
    margin: 0 0 1.5rem;
  }

  .profile h1 {
    font-size: 1.25rem;
  }
}
</style>
