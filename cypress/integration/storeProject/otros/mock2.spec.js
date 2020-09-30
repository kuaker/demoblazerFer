/// <reference types="cypress" />
const expect = require("chai").expect;
const superagent = require("superagent");
require('superagent-proxy')(superagent);
const mockServer = require("mockttp").getLocal();
 
describe("Mockttp", () => {
    // Start your server
    beforeEach(()=> mockServer.start(8080))
    afterEach(()=> mockServer.stop())

    it('lets you mock requests, and assert on the results', () =>
        // Mock your endpoints
        mockServer.get("/mocked-path").thenReply(200, "FER ES UN GENIO")
        .then(() => {
            // Make a request
            return superagent.get("http://localhost:8080/mocked-path");
        }).then(response => {
            // Assert on the results
            expect(response.text).to.equal("FER ES UN GENIO");
        })

        
    
    );


    it('lets you mock requests, and assert on the results', function () {
        cy.request('localhost:8080')
    })
});