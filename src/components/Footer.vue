<template>
  <footer class="page-footer">
    <div class="social-media">
      <template v-if="isMinimalist">
        <a href="mailto:info@philippeducasse.com" class="minimal-link" aria-label="Email">email </a>
        <a
          href="https://github.com/philippeducasse"
          target="_blank"
          rel="noopener noreferrer"
          class="minimal-link"
          >github
        </a>
        <a
          href="https://linkedin.com/in/philippe-ducasse-817494294"
          target="_blank"
          rel="noopener noreferrer"
          class="minimal-link"
          >linkedin</a
        >
      </template>
      <template v-else>
        <a href="mailto:info@philippeducasse.com" aria-label="Email">
          <img src="/img/logos/email.svg" alt="Email logo" />
        </a>
        <a href="https://github.com/philippeducasse" target="_blank" rel="noopener noreferrer">
          <img src="/img/logos/github.png" alt="Github logo" />
        </a>
        <a
          href="https://linkedin.com/in/philippe-ducasse-817494294"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/logos/linkedin.svg" alt="LinkedIn logo" />
        </a>
      </template>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useTheme } from "../utils/useTheme";

const { currentTheme } = useTheme();
const isMinimalist = computed(() => currentTheme.value === "minimalist");
</script>

<style scoped>
.page-footer {
  clear: both;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 30px;
  border-top: 30px solid var(--primary-color);
}
.social-media {
  margin-top: 2em;
}
.social-media img {
  width: 50px;
  height: auto;
  padding: 10px;
  margin-top: 20px;
}

.social-media a:hover {
  text-decoration: none;
}

.social-media a {
  text-decoration: none;
}

.minimal-link {
  font-family: "JetBrains Mono", "Fira Code", "Courier New", monospace;
  font-size: 0.875rem;
  color: #d4d4d4;
  margin: 0 1rem;
}

.minimal-link:hover {
  text-decoration: underline !important;
}
</style>
