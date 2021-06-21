module.exports = app => {

    app.use('/api/auth', require('./auth.routes.js'))
    app.use('/api/learnunit', require('./learnunit.routes.js'))
    app.use('/api/assessment', require('./assessment.routes.js'))
}