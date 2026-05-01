<script setup>
import { ref, computed } from 'vue'
import TheHeader from './components/TheHeader.vue'
import DomaineFilter from './components/DomaineFilter.vue'
import MissionList from './components/MissionList.vue'
import missionsData from './data/missions.json'
import clientsData from './data/clients.json'
import domainesData from './data/domaines.json'
import { MissionType } from './data/types.js'

const missions = ref(missionsData)
const clients = ref(clientsData)
const domaines = ref(domainesData)
const selectedDomaines = ref([])
const selectedTypes = ref([])

const HIDDEN_DOMAINES = new Set(['Débuts'])

const visibleDomaines = computed(() =>
  domaines.value.filter(d => !HIDDEN_DOMAINES.has(d.name))
)

const HIDDEN_FILTER_TYPES = new Set([
  MissionType.AgentTechniqueQualite,
  MissionType.OrganisateurInfo,
  MissionType.TechnicienLabo,
])

const availableTypes = computed(() => {
  const usedTypes = new Set(missions.value.flatMap(m => m.types || []))
  return Object.values(MissionType).filter(t => usedTypes.has(t) && !HIDDEN_FILTER_TYPES.has(t))
})

const filteredMissions = computed(() => {
  return missions.value.filter(m => {
    const domainMatch = selectedDomaines.value.length === 0 ||
      selectedDomaines.value.some(d => m.domaines.includes(d))
    const typeMatch = selectedTypes.value.length === 0 ||
      selectedTypes.value.some(t => (m.types || []).includes(t))
    return domainMatch && typeMatch
  })
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
            :domaines="visibleDomaines"
            :selected="selectedDomaines"
            :types="availableTypes"
            :selectedTypes="selectedTypes"
            @toggle="name => {
              const i = selectedDomaines.indexOf(name)
              i === -1 ? selectedDomaines.push(name) : selectedDomaines.splice(i, 1)
            }"
            @clear="selectedDomaines = []"
            @toggle-type="type => {
              const i = selectedTypes.indexOf(type)
              i === -1 ? selectedTypes.push(type) : selectedTypes.splice(i, 1)
            }"
            @clear-type="selectedTypes = []"
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
