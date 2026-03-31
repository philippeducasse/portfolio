<template>
  <footer class="page-footer">
    <div class="social-media">
      <a href="https://github.com/philippeducasse" target="_blank">
        <img src="/img/github_icon.svg" alt="Github logo" />
      </a>
      <a href="https://linkedin.com/in/philippe-ducasse-817494294" target="_blank">
        <img src="/img/linkdin_icon.svg" alt="LinkedIn logo" />
      </a>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.page-footer {
  clear: both;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 30px;
  border-top: 30px solid var(--primary-color);
  margin-top: auto;
}

.social-media img {
  padding: 10px;
  margin-top: 20px;
}

.social-media a:hover {
  text-decoration: none;
}

.social-media a {
  text-decoration: none;
}
</style>