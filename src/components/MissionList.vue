<script setup>
import MissionItem from './MissionItem.vue'

const props = defineProps({
  missions: Array,
  clients: Array,
  domaines: Array,
})

function clientFor(clientId) {
  return props.clients.find(c => c.id === clientId) || null
}
</script>

<template>
  <ul class="content">
    <MissionItem
      v-for="mission in missions"
      :key="mission.id"
      :mission="mission"
      :client="clientFor(mission.clientId)"
      :domaines="domaines"
    />
  </ul>
</template>
