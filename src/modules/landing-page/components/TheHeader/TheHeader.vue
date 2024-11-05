<script setup lang="ts">
import { ref } from "vue";
import { Menu } from "lucide-vue-next";

import LogoComponent from "@/components/LogoComponent/LogoComponent.vue";
import MenuMobile from "../MenuMobile/MenuMobile.vue";

const isVisible = ref(false);
</script>

<template>
  <header class="flex-1">
    <nav class="flex items-center justify-between">
      <div>
        <RouterLink to="/">
          <LogoComponent />
        </RouterLink>
      </div>

      <button type="button" @click="() => (isVisible = !isVisible)">
        <Menu :size="32" class="text-brand-neutral-50" />
      </button>

      <MenuMobile
        :visible="isVisible"
        @close-menu-mobile="(payload: boolean) => (isVisible = payload)"
      />
    </nav>
  </header>
</template>
