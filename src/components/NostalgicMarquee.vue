<template>
  <div v-if="currentTheme === 'nostalgic'" class="nostalgic-marquee" role="marquee">
    <span class="nostalgic-marquee__inner">
        ★ PHP IS THE BEST ★ I LOVE NETSCAPE 4.0 ★ 1024×768 ★ COBOL ★ Y2K ★ RUNESCAPE USERNAME:
        MR.SNUFFLES ★ I CAN HAZ CHEEZBURGER? ★ UNDER
        CONSTRUCTION ★
    </span>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "../utils/useTheme";

const { currentTheme } = useTheme();
</script>

<style scoped>
.nostalgic-marquee {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  white-space: nowrap;
  background: #000080;
  color: #ffff00;
  font-family: "Times New Roman", serif;
  font-size: 1rem;
  padding: 3px 0;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #808080;
  z-index: 500;
  width: 100%;
}

.nostalgic-marquee__inner {
  display: inline-block;
  animation: marquee-scroll 25s linear infinite;
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (max-width: 600px) {
  .nostalgic-marquee {
    top: 90px;
  }
}
</style>