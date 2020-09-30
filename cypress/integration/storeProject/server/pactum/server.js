const mock = require('pactum').mock;


mock.addMockInteraction({
  withRequest: {
    method: 'GET',
    path: '/api/users/1'
  },
  willRespondWith: {
    status: 200,
    body: {
      id: 1,
      name: 'Jon'
    }
  }
});

mock.start(3000);

