
class ApiRequest {

    getEntries = (uri) => {
        const entries = cy.request({
            url: uri + 'entries',
            method: 'GET'
        })
        return entries
    }

    getPosts = (uri) => {
        const posts = cy.request({
            url: uri + 'posts',
            method: 'GET'
        })
        return posts
    }
}

export default ApiRequest