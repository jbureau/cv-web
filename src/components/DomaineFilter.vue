<script setup>
defineProps({
  domaines: Array,
  selected: Array,
  types: Array,
  selectedTypes: Array,
})
defineEmits(['toggle', 'clear', 'toggle-type', 'clear-type'])
</script>

<template>
  <div class="filters-wrap">
    <div class="filter-row">
      <span class="filter-label">Domaine</span>
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
    <div class="filter-row">
      <span class="filter-label">Type</span>
      <button
        class="filter-tag type-tag"
        :class="{ active: selectedTypes.length === 0 }"
        @click="$emit('clear-type')"
      >Tous</button>
      <button
        v-for="type in types"
        :key="type"
        class="filter-tag type-tag"
        :class="{ active: selectedTypes.includes(type) }"
        @click="$emit('toggle-type', type)"
      >{{ type }}</button>
    </div>
  </div>
</template>

<style scoped>
.filters-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 18px;
  border-bottom: 1px solid #e2e8f0;
}

.filter-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
}

.filter-label {
  font-size: 0.68em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #94a3b8;
  margin-right: 4px;
  font-weight: 500;
  min-width: 52px;
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
  background: transparent;
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

.filter-tag.type-tag:hover {
  border-color: #93c5fd;
  color: #1a6295;
}

.filter-tag.type-tag.active {
  background: rgba(53, 148, 203, 0.15);
  color: #1a6295;
  border-color: #93c5fd;
}

@media (max-width: 750px) {
  .filters-wrap {
    padding: 10px 12px;
    gap: 6px;
  }
  .filter-tag {
    font-size: 0.7em;
    padding: 2px 9px;
  }
  .filter-label {
    min-width: 46px;
  }
}
</style>
