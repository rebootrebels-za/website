<template>
    <div id="app">
        <Header />
        <router-view></router-view>
    </div>
  </template>
  
  <script>

  import Header from './components/Header.vue';

  export default {
    name: 'App',
    components: {
      Header
    }
  };
  </script>
  
  <style>
  /* Add some global styles if needed */
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: hsl(281, 61%, 52%);
    --secondary-color: hsl(0, 0%, 20%);
    --primary-text-color-dark: hsl(0, 0%, 20%);
    --primary-text-color-light: hsl(0, 0%, 100%);
  }

  .hide{
    display: none;
  }
  </style>
  