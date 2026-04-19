<template>
  <ViewingModeSelector v-if="!currentTheme" />
  <template v-else>
    <NostalgicMarquee />
    <Header @change-mode="clearTheme" />
    <AnimationInit />
    <main>
      <Hero />
      <Separator />
      <Skills />
      <Separator />
      <Work />
      <Separator />
      <Projects />
      <NostalgicWinner v-if="currentTheme === 'nostalgic'" />
    </main>
    <Footer />
  </template>
</template>

<script setup lang="ts">
import { useTheme } from "../utils/useTheme";
import ViewingModeSelector from "./ViewingModeSelector.vue";
import NostalgicMarquee from "./NostalgicMarquee.vue";
import Header from "./Header.vue";
import AnimationInit from "./AnimationInit.vue";
import Hero from "./Hero.vue";
import Separator from "./Separator.vue";
import Skills from "./Skills.vue";
import Work from "./Work.vue";
import Projects from "./Projects.vue";
import Footer from "./Footer.vue";
import NostalgicWinner from "./NostalgicWinner.vue";

const { currentTheme, clearTheme } = useTheme();
</script>