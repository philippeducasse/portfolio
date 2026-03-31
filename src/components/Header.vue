<template>
  <header class="page-header">
    <a href="#home">
      <img class="page-header__item page-header__logo" src="/img/PDname_inline.png" alt="philippe ducasse" />
    </a>
    <nav class="navbar navbar-expand-md page-header__item">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link navigation-list__item" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navigation-list__item" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navigation-list__item" href="#work">Work</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
.page-header {
  display: flex;
  width: 100%;
  height: 125px;
  padding: 20px 100px;
  border-bottom: 35px solid var(--primary-color);
  border-bottom-width: 35px;
  background-color: #ffff;
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

.navigation-list {
  list-style-type: none;
}

.navigation-list li {
  display: inline-block;
  margin-left: 15px;
}

.navigation-list__item {
  text-decoration: none;
}

.navigation-list__item--active {
  text-decoration: none;
}

.nav-item {
  z-index: 5;
}

.collapse {
  justify-content: right;
}

.navbar-toggler {
  margin: 5px;
  display: flex;
  position: absolute;
  right: 0;
}

@media (max-width: 500px) {
  .page-header {
    margin: 0;
    padding: 20px;
  }

  .page-header__logo {
    max-width: 100%;
    min-width: 60%;
    padding: 10px 0 0;
  }

  .navbar-collapse.show {
    margin-top: 32px;
    font-size: 22px;
    padding: 0;
  }

  #nav-home {
    padding-top: 25px;
    color: #fff;
  }

  .nav-link:hover {
    color: var(--tertiary-color);
  }
}

@media (min-width: 500px) and (max-width: 650px) {
  .page-header {
    padding: 20px 50px;
  }

  .navbar-collapse.show {
    margin-top: 32px;
    font-size: 20px;
    padding: 0;
  }

  #nav-home {
    padding-top: 25px;
    color: #fff;
  }
}
</style>