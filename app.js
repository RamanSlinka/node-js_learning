const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log("Server request");
    console.log(req.url, req.method);

    // res.setHeader('Content-Type', 'text/html')
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<h1>Hello World!</h1>')
    // res.write('<p>My name is Raman </p>')

    res.setHeader('Content-Type', 'application/json')

    const data = JSON.stringify([
        { name: "Adam", age: 30},
        { name: "Artur", age: 32},
        { name: "Rafal", age: 45}
    ])


    res.end(data);
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`  )
})