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
const selectedDomaines = ref([])

const filteredMissions = computed(() => {
  if (selectedDomaines.value.length === 0) return missions.value
  return missions.value.filter(m =>
    selectedDomaines.value.some(d => m.domaines.includes(d))
  )
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
            :selected="selectedDomaines"
            @toggle="name => {
              const i = selectedDomaines.indexOf(name)
              i === -1 ? selectedDomaines.push(name) : selectedDomaines.splice(i, 1)
            }"
            @clear="selectedDomaines = []"
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
