<template>
  <header class="page-header">
    <a href="#home">
      <img class="page-header__item page-header__logo" src="/img/PDname_inline.png" alt="philippe ducasse" />
    </a>
    <nav class="page-header__item page-header__nav">
      <button
        class="nav-toggle"
        type="button"
        :aria-expanded="isOpen"
        aria-controls="nav-menu"
        aria-label="Toggle navigation"
        @click="toggleMenu"
      >
        <span class="nav-toggle__bar"></span>
        <span class="nav-toggle__bar"></span>
        <span class="nav-toggle__bar"></span>
      </button>
      <ul id="nav-menu" class="navigation-list" :class="{ 'is-open': isOpen }">
        <li><a class="navigation-list__item" href="#about" @click="closeMenu">About</a></li>
        <li><a class="navigation-list__item" href="#contact" @click="closeMenu">Contact</a></li>
        <li><a class="navigation-list__item" href="#work" @click="closeMenu">Work</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const closeMenu = () => {
  isOpen.value = false;
};
</script>

<style scoped>
.page-header {
  display: flex;
  width: 100%;
  height: 125px;
  padding: 20px 100px;
  border-bottom: 35px solid var(--primary-color);
  background-color: #fff;
  position: relative;
}

.page-header__logo {
  width: 220px;
  padding-bottom: 15px;
}

.page-header__item {
  flex-basis: 150px;
  flex-shrink: 1;
  font-size: 22px;
}

.page-header__item:last-child {
  flex-grow: 1;
  text-align: right;
}

.page-header__nav {
  position: relative;
}

/* Hamburger button — hidden on desktop */
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  box-shadow: none;
}

.nav-toggle__bar {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 2px;
  transition: background-color 300ms;
}

/* Nav list — inline on desktop */
.navigation-list {
  list-style: none;
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
  justify-content: flex-end;
}

.navigation-list li {
  display: inline-block;
}

.navigation-list__item {
  text-decoration: none;
  color: var(--primary-color);
}

.navigation-list__item:hover {
  color: var(--tertiary-color);
}

/* Responsive: collapse below 768px */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .navigation-list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background-color: #fff;
    border-top: 3px solid var(--primary-color);
    padding: 10px 20px 20px;
    gap: 0;
    z-index: 100;
  }

  .navigation-list.is-open {
    display: flex;
  }

  .navigation-list li {
    display: block;
    padding: 8px 0;
  }
}

@media (max-width: 500px) {
  .page-header {
    padding: 20px;
  }

  .page-header__logo {
    max-width: 100%;
    min-width: 60%;
    padding: 10px 0 0;
  }
}

@media (min-width: 500px) and (max-width: 650px) {
  .page-header {
    padding: 20px 50px;
  }
}
</style>