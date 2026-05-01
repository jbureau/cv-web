<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  mission: Object,
  client: Object,
  domaines: Array,
})

const open = ref(false)

const hasLogo = computed(() => !!props.client?.logo)

const logoStyle = computed(() => {
  if (hasLogo.value) {
    return { backgroundImage: `url('/assets/images/${props.client.logo}')` }
  }
  return {}
})

const initials = computed(() => {
  const name = props.client?.name || '?'
  return name
    .split(/[\s\-\/]+/)
    .filter(w => w.length > 0 && !/^(SA|SAS|SNC|GROUP|GROUPE|FRANCE|EUROPE)$/i.test(w))
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')
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
        <div v-if="hasLogo" class="logo" :style="logoStyle"></div>
        <div v-else class="logo logo-initials">{{ initials }}</div>
        <div class="title">
          <h2 class="type_mission">{{ mission.title }}</h2>
          <div class="subtitle">
            <div class="domaines">
              <div
                v-for="d in missionDomaines"
                :key="d.name"
                class="little_domaine"
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
.logo-initials {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: none !important;
  background-color: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.2);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

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
