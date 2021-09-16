module.exports = {
    db: 'mongodb://localhost/serverdb',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: 'Application Id',
        clientSecret: 'Application Secret',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    }
};
