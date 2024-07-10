<template>
  <div id="app">
    <StepIndicator />
    <div class="main-container" v-if="isLargeScreen">
      <FormContainer />
      <MarketingContainer />
    </div>
    <div v-else>
      <div class="main-container">
        <FormContainer />
      </div>
      <MarketingContainer />
    </div>
    <PhoneNumberComponent />
  </div>
</template>

<script>
import StepIndicator from './components/Step.vue';
import FormContainer from './components/FormContainer.vue';
import MarketingContainer from './components/MarketingContainer.vue';
import PhoneNumberComponent from './components/PhoneNumberComponent.vue';

export default {
  name: 'App',
  components: {
    StepIndicator,
    FormContainer,
    MarketingContainer,
    PhoneNumberComponent
  },
  data() {
    return {
      isLargeScreen: window.innerWidth >= 1280
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreenWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      this.isLargeScreen = window.innerWidth >= 1280;
    }
  }
};
</script>

<style scoped lang="less">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.step-indicator {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  max-width: 700px;
  margin-bottom: 20px;
}

.main-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.form-container {
  max-width: 700px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin-right: 20px;
}

.marketing-container {
  max-width: 500px;
  background: linear-gradient(135deg, #FFC100 50%, #FFE6BE 50%);
  padding: 20px;
  border-radius: 5px;
  width: 100%;
}

.phone-number-component {
  margin-top: 20px;
  width: 100%;
  max-width: 700px;
}

@media (max-width: 1279px) {
  .main-container {
    flex-direction: column;
    align-items: center;
  }

  .form-container,
  .marketing-container {
    margin: 0;
    width: calc(100% - 40px);
    margin-bottom: 20px;
  }

  .phone-number-component {
    width: calc(100% - 40px);
  }
}

@media (min-width: 1280px) {
  #app {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f5f5f5;
  }

  .main-container {
    justify-content: center;
  }
}
</style>
