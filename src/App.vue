<template>
  <div id="app">
    <h2>Cash Machine App</h2>
    <h3>Task requirements:</h3>
    <ul class="requirements">
      <li>Always deliver the lowest number of possible notes</li>
      <li>It’s possible to get the amount requested with available notes</li>
      <li>The client balance is infinite</li>
      <li>Amount of notes is infinite</li>
      <li>Available notes are $ 100,00; $ 50,00; $ 20,00 and $ 10,00</li>
    </ul>
    <AtmView />
  </div>
</template>

<script>
  import AtmView from './components/AtmView';
  
  export default {
    name: 'app',
    components: {
      AtmView
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 50px 30px;
  }
  
  h2 {
    margin: 0 0 20px;
  }
  
  h3 {
    margin: 0 0 10px;
  }
  
  .requirements {
    margin: 0 0 20px;
    padding: 0;
  }
</style>
