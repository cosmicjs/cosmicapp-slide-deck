var express = require('express')
var app = express()
var hogan = require('hogan-express')
app.engine('html', hogan)
app.set('port', (process.env.PORT || 3000))
app.use('/', express.static(__dirname + '/public/'))
var Cosmic = require('cosmicjs')
var bucket_slug = process.env.COSMIC_BUCKET || 'slide-deck'
app.get('/', function(req, res) {
  Cosmic.getObjects({ bucket: { slug: bucket_slug } }, function(err, response) {
    var steps = response.objects.type.steps
    res.locals.steps = steps;
    res.render('index.html')
  })
});
app.listen(app.get('port'))