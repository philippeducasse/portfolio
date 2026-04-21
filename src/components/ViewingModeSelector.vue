<template>
  <div class="selector-page">
    <div class="selector-card">
      <h2 class="selector-heading">Please select your viewing mode</h2>
      <div class="selector-options">
        <button
          v-for="mode in modes"
          :key="mode.id"
          class="mode-btn"
          :class="`mode-btn--${mode.id}`"
          @click="select(mode.id)"
        >
          <span class="mode-btn__name">{{ mode.name }}</span>
          <span class="mode-btn__subtitle">{{ mode.subtitle }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "../utils/useTheme";

const { setTheme } = useTheme();

const modes = [
  {
    id: "minimalist",
    name: "The Minimalist",
    subtitle: "Elegant, simple, because real programmers don't need css",
  },
  {
    id: "frontend",
    name: "Modern",
    subtitle: "If you like animations and drink fancy coffee",
  },
  {
    id: "nostalgic",
    name: "The Nostalgic",
    subtitle: "For those who miss the early days of the web.",
  },
];

function select(theme: string) {
  setTheme(theme);
}
</script>

<style scoped>
.selector-page {
  min-height: 100vh;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.selector-card {
  max-width: 760px;
  width: 100%;
}

.selector-heading {
  color: #e8e8e8;
  font-family: "Lato", sans-serif;
  font-size: clamp(1.125rem, 4vw, 1.375rem);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.selector-options {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.mode-btn {
  flex: 1;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 1.5rem 1.25rem;
  border-radius: 8px;
  cursor: pointer;
  text-align: left;
  transition: all 1.2s ease;
  margin: 0;
}

.mode-btn__name {
  font-family: "Lato", sans-serif;
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  font-weight: 700;
  line-height: 1.3;
  display: block;
}

.mode-btn__subtitle {
  font-size: clamp(0.85rem, 2vw, 1rem);
  line-height: 1.5;
  display: block;
}

.mode-btn--minimalist {
  background: #0a0a0a;
  border: 1px solid #2a2a2a;
  box-shadow: none;
  color: #e8e8e8;
}

.mode-btn--minimalist:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}

.mode-btn--minimalist .mode-btn__subtitle {
  color: #dfdede;
  font-family: "Courier New", monospace;
}

.mode-btn--frontend {
  background: linear-gradient(135deg, #0b1929, #07211f);
  border: 1px solid #337ab7;
  box-shadow: 0 0 16px rgba(51, 122, 183, 0.2);
}

.mode-btn--frontend:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(51, 122, 183, 0.4);
}

.mode-btn--frontend .mode-btn__name {
  background: linear-gradient(90deg, #5ca3e0, #9aecf1) !important;
  font-family: "Lato", sans-serif !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
}

.mode-btn--frontend .mode-btn__subtitle {
  color: #b1c2d4 !important;
  font-family: "Lato", sans-serif !important;
  font-style: normal !important;
}

.mode-btn--nostalgic {
  background: #c0c0c0;
  border: 3px outset #fff;
  border-radius: 0;
  color: #000;
}

.mode-btn--nostalgic:hover {
  border-style: inset;
  transform: none;
  box-shadow: none;
}

.mode-btn--nostalgic .mode-btn__name {
  color: #000080 !important;
  font-family: "Comic Sans MS", "Comic Sans", cursive !important;
}

.mode-btn--nostalgic .mode-btn__subtitle {
  color: #333 !important;
  font-family: "Comic Sans MS", "Comic Sans", cursive !important;
  font-style: normal !important;
}

@media (max-width: 600px) {
  .selector-options {
    flex-direction: column;
  }

  .mode-btn {
    min-width: 100%;
    padding: 1.25rem 1rem;
  }
}

@media (max-width: 400px) {
  .selector-page {
    padding: 1rem;
  }

  .mode-btn {
    padding: 1rem 0.875rem;
    gap: 0.5rem;
  }
}
</style>
