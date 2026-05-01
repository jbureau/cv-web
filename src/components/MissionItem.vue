<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  mission: Object,
  client: Object,
  domaines: Array,
})

const open = ref(false)

const logoStyle = computed(() => {
  if (props.client?.logo) {
    return { backgroundImage: `url('/assets/images/${props.client.logo}')` }
  }
  return { opacity: '0.3' }
})

const missionDomaines = computed(() =>
  props.domaines.filter(d => props.mission.domaines.includes(d.name))
)

const shortDesc = computed(() => {
  if (!props.mission.mission) return ''
  const text = props.mission.mission.replace(/<[^>]+>/g, '')
  return text.length > 200 ? text.substring(0, 250) + '...' : text
})

function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(date)
}

function formatEndDate(dateStr) {
  if (!dateStr || dateStr === 'en cours') return dateStr || ''
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return dateStr
  return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(date)
}
</script>

<template>
  <li class="mission" :data-domaine="mission.domaines.join(',')">
    <div class="dates">
      <div class="date_deb">{{ formatDate(mission.bDate) }}</div>
      <div class="date_fin">{{ formatEndDate(mission.eDate) }}</div>
    </div>
    <div class="round"></div>
    <div class="desc" @click="open = !open">
      <div class="top">
        <div class="logo" :style="logoStyle"></div>
        <div class="title">
          <h2 class="type_mission">{{ mission.title }}</h2>
          <div class="subtitle">
            <div class="domaines">
              <div
                v-for="d in missionDomaines"
                :key="d.name"
                class="little_domaine"
                :style="{ borderLeft: `10px solid ${d.color}` }"
              >{{ d.name }}</div>
            </div>
            | {{ mission.types.join(', ') }}
          </div>
        </div>
      </div>
      <div class="more">
        <Transition name="slide" mode="out-in">
          <p v-if="!open" key="summary" class="summary">{{ shortDesc }}</p>
          <div v-else key="details" class="details">
            <template v-if="mission.contexte">
              <h4>Contexte</h4>
              <div v-html="mission.contexte"></div>
            </template>
            <template v-if="mission.mission">
              <h4>Mission</h4>
              <div v-html="mission.mission"></div>
            </template>
            <template v-if="mission.solution">
              <h4>Solution</h4>
              <div v-html="mission.solution"></div>
            </template>
            <template v-if="mission.bilan">
              <h4>Bilan</h4>
              <div v-html="mission.bilan"></div>
            </template>
          </div>
        </Transition>
      </div>
    </div>
  </li>
</template>

<style scoped>
.slide-enter-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
