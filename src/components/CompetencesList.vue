<script setup>
import competences from '../data/competences.json'

const MAX_LEVEL = 5
</script>

<template>
  <div class="competences">
    <div v-for="group in competences" :key="group.category" class="group">
      <div class="group-title">{{ group.category }}</div>
      <div v-for="skill in group.skills" :key="skill.name" class="skill-row">
        <span class="skill-name">{{ skill.name }}</span>
        <div class="dots">
          <span
            v-for="i in MAX_LEVEL"
            :key="i"
            class="dot"
            :class="{ filled: i <= skill.level }"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.competences {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.group-title {
  font-size: 0.65em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #94a3b8;
  padding-bottom: 6px;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 8px;
}

.skill-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
}

.skill-name {
  font-size: 0.72em;
  color: #1e293b;
  font-weight: 400;
  flex: 1;
  line-height: 1.3;
}

.dots {
  display: flex;
  gap: 5px;
  flex-shrink: 0;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1.5px solid #e2e8f0;
  background: transparent;
}

.dot.filled {
  background: #3594cb;
  border-color: #3594cb;
}
</style>
