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

var realmadrid = {
  league: 'La Liga',
  stadium: 'Santiago Bernabéu Stadium',
  coach: 'Zinedine Zidane'
}

var realTrophies = {
  laliga: {
    name: 'La Liga: ',
    wins: '32'
  },
  ucl: {
    name: 'European Cup / UEFA Champions League: ',
    wins: '11'
  },
  eurocup: {
    name: 'UEFA Cup / UEFA Europa League: ',
    wins: '2'
  },
  copadelrey: {
    name: 'Copa del Rey: ',
    wins: '19'
  },
  supercopa: {
    name: 'Supercopa de Espana: ',
    wins: '9'
  },
  supercup: {
    name: 'UEFA Super Cup: ',
    wins: '3'
  },
  clubwc: {
    name: 'FIFA Club World Cup: ',
    wins: '2'
  }
}

var barcelona = {
  league: 'La Liga',
  stadium: 'Camp Nou',
  coach: 'Luis Enrique'
}

var barcaTrophies = {
  laliga: {
    name: 'La Liga: ',
    wins: '24'
  },
  ucl: {
    name: 'European Cup / UEFA Champions League: ',
    wins: '5'
  },
  copadelrey: {
    name: 'Copa del Rey: ',
    wins: '28'
  },
  supercopa: {
    name: 'Supercopa de Espana: ',
    wins: '12'
  },
  supercup: {
    name: 'UEFA Super Cup: ',
    wins: '5'
  },
  clubwc: {
    name: 'FIFA Club World Cup: ',
    wins: '3'
  }
}

var chelsea = {
  league: 'Barclay\'s Premier League',
  stadium: 'Stamford Bridge',
  coach: 'Antonio Conte'
}

var chelTrophies = {
  premierleague: {
    name: 'Premier League: ',
    wins: '5'
  },
  ucl: {
    name: 'European Cup / UEFA Champions League: ',
    wins: '1'
  },
  eurocup: {
    name: 'UEFA Europa League: ',
    wins: '1'
  },
  leaguecup: {
    name: 'League Cup: ',
    wins: '5'
  },
  facup: {
    name: 'FA Cup: ',
    wins: '7'
  },
  supercup: {
    name: 'UEFA Super Cup: ',
    wins: '1'
  }
}

var juventus = {
  league: 'Serie A',
  stadium: 'Juventus Stadium',
  coach: 'Massimiliano Allegri'
}

var juveTrophies = {
  seriea: {
    name: 'Serie A: ',
    wins: '32'
  },
  ucl: {
    name: 'European Cup / UEFA Champions League: ',
    wins: '2'
  },
  eurocup: {
    name: 'UEFA Europa League / UEFA Cup: ',
    wins: '1'
  },
  copaita: {
    name: 'Coppa Italia: ',
    wins: '11'
  },
  supercupita: {
    name: 'Supercoppa Italia: ',
    wins: '7'
  },
  supercup: {
    name: 'UEFA Super Cup: ',
    wins: '2'
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
    teaminfo: realmadrid,
    trophies: realTrophies
  })
})
app.get('/barcelona', function (request, response) {
  response.render('pages/barcelona', {
    navs: navs,
    teaminfo: barcelona,
    trophies: barcaTrophies
  })
})
app.get('/chelsea', function (request, response) {
  response.render('pages/chelsea', {
    navs: navs,
    teaminfo: chelsea,
    trophies: chelTrophies
  })
})
app.get('/juventus', function (request, response) {
  response.render('pages/juventus', {
    navs: navs,
    teaminfo: juventus,
    trophies: juveTrophies
  })
})

app.listen(port)
