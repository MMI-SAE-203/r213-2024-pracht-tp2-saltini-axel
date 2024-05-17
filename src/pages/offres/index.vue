<script setup lang="ts">
import type { MaisonsRecord } from '@/pocketbase-types';
import MaisonCard from '@/components/MaisonCard.vue';
import { allMaisonsSorted, pb } from '@/backend';
import { allMaisonsFavori } from '@/backend'
const maisonsListe = await allMaisonsSorted()

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <div class="p-8 grid grid-cols-1 gap-7 md:grid-cols-3">
    <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison"/>
    
  </div>
</template>