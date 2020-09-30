class Utils {

    getElement = (tag, type, id) => {
        const elem = tag + '['+ type +'="' + id + '"]'
        return cy.get(elem)
    }

}

export default Utils