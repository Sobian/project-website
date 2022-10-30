const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function (req, res) {
    // fetch(klienci_serwisu_proj.csv)
    // fetch(empSerwis/parseCSVtoTable.js)
    res.writeHead(200, 'content-type')
    fs.readFile('empView_serwis.html', function (err, data) {
        if (err) {
            res.writeHead(404)
            res.write('whoops')
        }
        else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function (err) {
    if (err) {
        console.log('smth went wrong: ' + err.message)
    }
    else {
        console.log('server listening on port ' + port)
    }
})

    