require('dotenv').config()

/**
 * @type {Cypress.PluginConfig}
 */

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    on('task', {
        log(message) {
            console.log(message)
            return null
        },
    })
    on('file:preprocessor', cucumber())

    console.log('**CONFIG VERSION ANTES**: ' + config.env.version)

    const version = config.env.version === 'qa' ? 'qa' : 'staging'

    console.log('**VERSION DESPUES**: ' + version)

    config.env = require(`../config/${version}.json`)

    config.baseUrl = config.env.baseUrl

    console.log('**BASE URL**: ' + version)    

    return config

}



