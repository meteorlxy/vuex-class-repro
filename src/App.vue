<template>
  <div id="app">
    <table>
      <tr>
        <td>@State('hello') hello</td>
        <td>{{ helloFromVuexClassState }}</td>
      </tr>

      <tr>
        <td>this.$store.state.hello</td>
        <td>{{ helloFromVuexState }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

@Component
export default class App extends Vue {
  @State('hello') hello

  helloFromVuexClassState: string = this.hello
  helloFromVuexState: string = this.$store.state.hello
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
td {
  border: #2c3e50 1px solid;
  padding: 30px;
}
</style>
