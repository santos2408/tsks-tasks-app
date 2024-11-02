<script setup lang="ts">
import LogoComponent from "@/components/LogoComponent/LogoComponent.vue";
</script>

<template>
  <header class="flex-1">
    <nav class="flex items-center justify-between">
      <div>
        <RouterLink to="/">
          <LogoComponent />
        </RouterLink>
      </div>

      <div class="flex items-center gap-6">
        <button
          type="button"
          class="text-brand-neutral-100 transition hover:text-brand-neutral-50"
        >
          Log in
        </button>

        <button
          type="button"
          class="rounded-xl border-2 border-brand-neutral-400 px-8 py-3 text-brand-neutral-100 transition hover:text-brand-neutral-50"
        >
          Sign up
        </button>
      </div>
    </nav>
  </header>
</template>
