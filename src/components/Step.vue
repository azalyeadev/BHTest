<template>
    <div class="step-indicator">
      <div class="step active">1</div>
      <div class="step">2</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StepIndicator',
  };
  </script>
  
  <style scoped>
  .step-indicator {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .step {
    width: 30px;
    height: 30px;
    background-color: #E1EAF4;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .active {
    background-color: #0A87C9;
    color: white;
  }
  </style>  