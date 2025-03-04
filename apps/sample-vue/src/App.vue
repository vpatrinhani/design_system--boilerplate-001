<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';

function handleClick(e: any) {
  console.log(e);
}

const items = JSON.stringify([
  {
    value: 'item-1',
    key: 'item-1',
    label: 'Item 1',
    disabled: false,
    dirty: false,
    checked: false,
  },
  {
    value: 'item-2',
    key: 'item-2',
    label: 'Item 2',
    disabled: false,
    dirty: false,
    checked: true,
  },
  {
    value: 'item-3',
    key: 'item-3',
    label: 'Item 3',
    disabled: false,
    dirty: false,
    checked: false,
  },
  {
    value: 'item-4',
    key: 'item-4',
    label: 'Item 4',
    disabled: false,
    dirty: false,
    checked: false,
  },
  {
    value: 'item-5',
    key: 'item-5',
    label: 'Item 5',
    disabled: false,
    dirty: false,
    checked: false,
  },
  {
    value: 'item-6',
    key: 'item-6',
    label: 'Item 6',
    disabled: false,
    dirty: false,
    checked: false,
  },
]);

function selectionChanged(e: any) {
  console.log('selection changed', e);
}
</script>

<template>
  <h1>Components</h1>
  <mylib-button label="mylib button" @click="handleClick"></mylib-button>

  <mylib-checkbox-group
    :items="items"
    label="Checkbox Group"
    dirty="false"
    @selectionChanged="selectionChanged($event)"
  >
  </mylib-checkbox-group>
  <mylib-icon name="cmdAbortTask24" size="md" type="font"></mylib-icon>
</template>

<style scoped>
#app {
  height: 100vh;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
