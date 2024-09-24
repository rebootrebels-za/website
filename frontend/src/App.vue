<template>
    <div id="app">
        <Navigation />
        <router-view></router-view>
        <Footer />
    </div>
  </template>
  
  <script>

  import Navigation from './components/Navigation.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
        Navigation,
        Footer
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
        --secondary-color: hsl(0, 0%, 1%);
        --tertiary-color: hsl(0, 0%, 100%);
        --primary-text-color-dark: hsl(0, 0%, 20%);
        --primary-text-color-light: hsl(0, 0%, 100%);
    }

    body {
        background-color: var(--secondary-color);
    }


    .hide{
        display: none;
    }

    .link {
        color: white;
        text-decoration: none;
        &:hover {
            cursor: pointer;
        }
    }
    .pointer {
        &:hover {
            cursor: pointer;
        }
    }
  </style>
  