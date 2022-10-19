const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl:"http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      angular:"https://www.globalsqa.com",
      demoQA:"https://demoqa.com",
      internetHero:"https://the-internet.herokuapp.com/"
    }
  },
  pageLoadTimeout:60000,
  viewportHeight:1000,
  viewportWidth:1400
});
