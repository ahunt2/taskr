<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TaskrHeader from './components/layout/TaskrHeader.vue'
</script>

<template>
  <div class="bg-slate-50">
    <TaskrHeader />
    <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

    <RouterView />
  </div>
</template>

<style>
/* Centers an element vertically. */
.center-x {
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
