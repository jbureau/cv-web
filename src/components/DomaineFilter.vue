<script setup>
defineProps({
  domaines: Array,
  selected: String,
})
defineEmits(['select'])
</script>

<template>
  <div class="sorting">
    <input
      type="button"
      class="btn curve domaine"
      :class="{ 'filter-selected': selected === '*' }"
      value="Tout"
      @click="$emit('select', '*')"
    />
    <input
      v-for="domaine in domaines"
      :key="domaine.id"
      type="button"
      class="btn curve domaine"
      :class="{ 'filter-selected': selected === domaine.name }"
      :value="domaine.name"
      @click="$emit('select', domaine.name)"
    />
  </div>
</template>
