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

var teams = {
  realmadrid: {
    league: 'La Liga',
    stadium: 'Santiago Bernabéu Stadium',
    coach: 'Zinedine Zidane'
  },
  barcelona: {
    league: 'La Liga',
    stadium: 'Camp Nou',
    coach: 'Luis Enrique'
  },
  chelsea: {
    league: 'Barclay\'s Premier League',
    stadium: 'Stamford Bridge',
    coach: 'Antonio Conte'
  },
  juventus: {
    league: 'Serie A',
    stadium: 'Juventus Stadium',
    coach: 'Massimiliano Allegri'
  }
}

app.get('/', function (request, response) {
  response.render('pages/index', {
    navs: navs
  })
})
app.get('/realmadrid', function (request, response) {
  response.render('pages/realmadrid', {
    navs: navs,
    teams: teams
  })
})
app.get('/barcelona', function (request, response) {
  response.render('pages/barcelona', {
    navs: navs,
    teams: teams
  })
})
app.get('/chelsea', function (request, response) {
  response.render('pages/chelsea', {
    navs: navs,
    teams: teams
  })
})
app.get('/juventus', function (request, response) {
  response.render('pages/juventus', {
    navs: navs,
    teams: teams
  })
})

app.listen(port)
