const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;

module.exports = defineConfig({
    e2e: {
        async setupNodeEvents(on, config) {
            await addCucumberPreprocessorPlugin(on, config);
            on("file:preprocessor",
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                })
            );

            return config;
        },
        env: {
            apiUrl: "https://api.trello.com",
            baseUrl: "https://www.automationexercise.com",
            environment: "PRD"
        },
        chromeWebSecurity: false,
        defaultCommandTimeout: 30000,
        experimentalMemoryManagement: true,
        specPattern: "cypress/e2e/features/*.feature",
        viewportWidth: 1360,
        viewportHeight: 768
    }
});