const pactum = require('pactum');

// this is a test step in mocha
it('should fetch order details', async () => {
  await pactum
    // assume you have an order-service running locally on port 3000
    .get('http://localhost:3000/api/users')
    // set an expectation of 200
    .expectStatus(200)
    // set an expectation on the response body

    // execute the test case
    .toss();
});