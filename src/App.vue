<script setup>
import { ref, computed } from 'vue'
import TheHeader from './components/TheHeader.vue'
import DomaineFilter from './components/DomaineFilter.vue'
import MissionList from './components/MissionList.vue'
import missionsData from './data/missions.json'
import clientsData from './data/clients.json'
import domainesData from './data/domaines.json'

const missions = ref(missionsData)
const clients = ref(clientsData)
const domaines = ref(domainesData)
const selectedDomaine = ref('*')

const filteredMissions = computed(() => {
  if (selectedDomaine.value === '*') return missions.value
  return missions.value.filter(m => m.domaines.includes(selectedDomaine.value))
})
</script>

<template>
  <div class="container">
    <TheHeader />
    <div class="main">
      <div id="experiences">
        <h2 class="title">Expériences</h2>
        <div class="card">
          <DomaineFilter
            :domaines="domaines"
            :selected="selectedDomaine"
            @select="selectedDomaine = $event"
          />
          <MissionList
            :missions="filteredMissions"
            :clients="clients"
            :domaines="domaines"
          />
        </div>
      </div>
    </div>
  </div>
</template>
