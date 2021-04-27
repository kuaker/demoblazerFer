CYPRESS_SPEC="cypress/features/*.feature"

npx cypress run --headed --browser chrome --spec "${CYPRESS_SPEC}"