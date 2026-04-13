const http = require('http')

const server = http.createServer((req, res) => {
    // res.write('Welcome to our Home page')
    // res.end()
    if(req.url === '/') {
        res.end('Welcome to our Home page')
    }
    if(req.url === '/about') {
        res.end('Welcome to our About page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We couldn't find the page you requested for.</p>
        <a href="/">Go back to Home page</>`)
})

server.listen(3000)