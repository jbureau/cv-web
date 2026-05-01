<script setup>
const props = defineProps({
  domaines: Array,
  selected: String,
})
defineEmits(['select'])

function tagColors(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return {
    idle: {
      backgroundColor: `rgb(${Math.round(r * 0.45 + 255 * 0.55)}, ${Math.round(g * 0.45 + 255 * 0.55)}, ${Math.round(b * 0.45 + 255 * 0.55)})`,
      color: `rgb(${Math.round(r * 0.5)}, ${Math.round(g * 0.5)}, ${Math.round(b * 0.5)})`,
    },
    active: {
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      color: '#fff',
    },
  }
}
</script>

<template>
  <div class="filter">
    <span class="filter-label">Filtrer</span>
    <button
      class="filter-tag"
      :class="{ active: selected === '*' }"
      @click="$emit('select', '*')"
    >Tous</button>
    <button
      v-for="domaine in domaines"
      :key="domaine.id"
      class="filter-tag"
      :style="selected === domaine.name ? tagColors(domaine.color).active : tagColors(domaine.color).idle"
      :class="{ active: selected === domaine.name }"
      @click="$emit('select', domaine.name)"
    >{{ domaine.name }}</button>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0,0,0,0.07);
}

.filter-label {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #999;
  margin-right: 4px;
}

.filter-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.9em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  background-color: rgba(0,0,0,0.07);
  color: rgba(0,0,0,0.35);
  transition: all 0.15s ease;
}

.filter-tag:hover {
  opacity: 0.8;
}

.filter-tag.active {
  background-color: rgba(0,0,0,0.12);
  color: rgba(0,0,0,0.55);
}
</style>