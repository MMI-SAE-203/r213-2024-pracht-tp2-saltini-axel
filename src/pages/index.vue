<script setup lang="ts">
import type { MaisonsRecord } from '@/pocketbase-types';
import MaisonCard from '@/components/MaisonCard.vue';
import { pb } from '@/backend';

const maisonsListe: MaisonsRecord[] = await pb.collection('maison').getFullList();
</script>

<template>
  <div>
    <h1 class="text-2xl">Bonjour monde !</h1>
    <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison"/>
    
  </div>
</template>
