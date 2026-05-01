<script setup>
defineProps({
  domaines: Array,
  selected: Array,
})
defineEmits(['toggle', 'clear'])
</script>

<template>
  <div class="filter">
    <span class="filter-label">Filtrer</span>
    <button
      class="filter-tag"
      :class="{ active: selected.length === 0 }"
      @click="$emit('clear')"
    >Tous</button>
    <button
      v-for="domaine in domaines"
      :key="domaine.id"
      class="filter-tag"
      :class="{ active: selected.includes(domaine.name) }"
      @click="$emit('toggle', domaine.name)"
    >{{ domaine.name }}</button>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px 16px;
  border-bottom: 1px solid rgba(0,0,0,0.07);
}

.filter-label {
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #aaa;
  margin-right: 4px;
}

.filter-tag {
  display: inline-block;
  padding: 2px 9px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.78em;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  background-color: rgb(225, 234, 243);
  color: rgb(55, 75, 95);
  transition: opacity 0.15s ease;
}

.filter-tag:hover {
  opacity: 0.75;
}

.filter-tag.active {
  background-color: rgb(110, 151, 190);
  color: #fff;
  font-weight: 500;
}
</style>