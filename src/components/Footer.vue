<template>
  <footer class="page-footer">
    <div class="social-media">
      <a href="mailto:info@philippeducasse.com" class="social-link" aria-label="Email">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="50px" height="50px">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </a>
      <a href="https://github.com/philippeducasse" target="_blank">
        <img src="/img/logos/github.png" width="50px" alt="Github logo" />
      </a>
      <a href="https://linkedin.com/in/philippe-ducasse-817494294" target="_blank">
        <img src="/img/logos/linkedin.svg" width="50px" alt="LinkedIn logo" />
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
