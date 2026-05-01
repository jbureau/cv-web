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
  padding: 12px 16px;
  border-bottom: 1px solid #e2e8f0;
  background: #ffffff;
}

.filter-label {
  font-size: 0.68em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #94a3b8;
  margin-right: 4px;
  font-weight: 500;
}

.filter-tag {
  display: inline-block;
  padding: 3px 11px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.75em;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  background: #ffffff;
  color: #64748b;
  transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
}

.filter-tag:hover {
  border-color: #d6e87c;
  color: #5a6e1a;
}

.filter-tag.active {
  background: #d6e87c;
  color: #3d4f0e;
  border-color: #d6e87c;
  font-weight: 600;
}

@media (max-width: 750px) {
  .filter {
    padding: 8px 12px;
    gap: 5px;
  }
  .filter-tag {
    font-size: 0.7em;
    padding: 2px 9px;
  }
}
</style>