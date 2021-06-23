/// <reference types="cypress" />

const FOOTC = '#footc'
const CAPTION = '.caption'
const COPY_RIGHT = '.py-5.bg-inverse'

class Footer {
    getFootc = () => cy.get(FOOTC)

    getCaption = () => cy.get(CAPTION)

    getCopyRight = () => cy.get(COPY_RIGHT)
}

export default Footer
