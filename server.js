var express = require('express')
var app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
var port = process.env.PORT || 8080

var navs = {
  home: {
    name: 'Home',
    path: '/'
  },
  realMadrid: {
    name: 'Real Madrid',
    path: '/realmadrid'
  },
  barcelona: {
    name: 'Barcelona',
    path: '/barcelona'
  },
  chelsea: {
    name: 'Chelsea',
    path: '/chelsea'
  },
  juventus: {
    name: 'Juventus',
    path: '/juventus'
  }
}

app.get('/', function (request, response) {
  response.render('pages/index', {
    navs: navs
  })
})
app.get('/realmadrid', function (request, response) {
  response.render('pages/realmadrid', {
    navs: navs
  })
})
app.get('/barcelona', function (request, response) {
  response.render('pages/barcelona', {
    navs: navs
  })
})
app.get('/chelsea', function (request, response) {
  response.render('pages/chelsea', {
    navs: navs
  })
})
app.get('/juventus', function (request, response) {
  response.render('pages/juventus', {
    navs: navs
  })
})

app.listen(port)
