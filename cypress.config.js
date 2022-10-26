const { defineConfig } = require("cypress");
// Verify download import
const { isFileExist, findFiles} = require("cy-verify-downloads");
module.exports = defineConfig({
  e2e: {
    baseUrl:"http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // Verify download import
      on("task", { isFileExist, findFiles})
      // -----------------------------------
      // implement node event listeners here
    },
    env:{
      angular:"https://www.globalsqa.com",
      demoQA:"https://demoqa.com",
      internetHero:"https://the-internet.herokuapp.com/"
    },
    experimentalSessionAndOrigin:true
  },
  pageLoadTimeout:60000,
  viewportHeight:1000,
  viewportWidth:1400
});
