<template>
    <div id="app">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
  </template>
  
  <script>

  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Header,
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
        --secondary-color: hsl(0, 0%, 20%);
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
  </style>
  