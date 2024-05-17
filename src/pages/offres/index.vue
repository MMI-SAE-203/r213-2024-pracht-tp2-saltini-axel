<script setup lang="ts">
import type { MaisonsRecord } from '@/pocketbase-types';
import MaisonCard from '@/components/MaisonCard.vue';
import { allMaisonsSorted, pb } from '@/backend';
import { allMaisonsFavori } from '@/backend'
const maisonsListe = await allMaisonsSorted()

</script>

<template>
  <ul>
  <li v-for="uneMaison of maisonsListe" :key="uneMaison.id">
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-red-400 hover:text-red-600"
    >
      {{ uneMaison.Nom }}
    </RouterLink>
  </li>
</ul>
</template>