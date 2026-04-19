<template>
  <div v-if="currentTheme === 'nostalgic'" class="nostalgic-marquee" role="marquee">
    <span class="nostalgic-marquee__inner">
      ★ UNDER CONSTRUCTION ★ BEST VIEWED IN NETSCAPE 4.0 ★ 1024×768 ★ YOU ARE VISITOR #000847 ★ DO
      NOT STEAL THIS DESIGN ★ GUESTBOOK COMING SOON ★ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;★ UNDER
      CONSTRUCTION ★ BEST VIEWED IN NETSCAPE 4.0 ★ 1024×768 ★ YOU ARE VISITOR #000847 ★ DO NOT
      STEAL THIS DESIGN ★ GUESTBOOK COMING SOON ★
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
  top: 160px;
  left: 0;
  right: 0;
  overflow: hidden;
  white-space: nowrap;
  background: #000080;
  color: #ffff00;
  font-family: "Times New Roman", serif;
  font-size: 0.8125rem;
  padding: 3px 0;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #808080;
  z-index: 500;
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