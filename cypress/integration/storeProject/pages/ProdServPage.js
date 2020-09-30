class ProdServPage {

    getSelectProductServ = () => {
        return cy.get('h3').each(($el, index) => {
            if ($el.text() == 'Gala en WhatsApp') {
                $el.trigger("click")
            }
        })

        //eq(3)  
    }

}

export default ProdServPage