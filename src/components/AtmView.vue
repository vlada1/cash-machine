<template>
  <div class="atm-view">
    <div class="amount-input-block">
      <label class="amount-input-label">
        <span class="label-text">Please enter desired amount</span>
        <input
          class="amount-input"
          type="text"
          name="entry"
          v-model="entryAmount"
        />
      </label>
      <button
        class="get-result-btn"
        type="button"
        @click="getResult"
        :disabled="!entryAmount"
      >
        Get cash
      </button>
    </div>
    
    <div class="result-block">
      <span class="result-text">Result is:</span>
      <span class="result" v-if="!error">{{result}}</span>
      <span class="error" v-else>{{error}}</span>
    </div>
  </div>
</template>

<script>
  import { calcNotes } from "../utils/calcNotes";
  export default {
    name: "atm-view",
    data() {
      return {
        entryAmount: '',
        result: null,
        error: ''
      }
    },
    methods: {
      getResult() {
        try {
          this.result = calcNotes(this.entryAmount);
          this.error = '';
        } catch(err) {
          this.error = err;
        }
      }
    }
  }
</script>

<style lang="scss">
  span {
    display: block;
  }
  .amount-input-block {
    margin-bottom: 20px;
  }
  .amount-input {
    width: 200px;
    height: 28px;
    margin-right: 10px;
    padding: 0 10px;
    font: inherit;
    outline: none;
    border-radius: 5px;
    border: 1px solid #2c3e50;
  }
  .get-result-btn {
    padding: 0 15px;
    height: 30px;
    font: inherit;
    background-color: #e0e0e0;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s ease-in;
    
    &:disabled {
      pointer-events: none;
    }
    
    &:hover, &:focus {
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
      background-color: #d5d5d5;
    }
  }
  .result {
    font-weight: 500;
  }
  .error {
    color: #f44336;
  }
</style>
