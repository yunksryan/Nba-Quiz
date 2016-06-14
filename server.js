//
// # SimpleServer
//
// A simple Express server
//
var http = require('http');
var path = require('path');

var express = require('express');
var bodyParser = require('body-parser');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var router = express();
var server = http.createServer(router);

router.use(bodyParser.json());

router.use(express.static(path.resolve(__dirname, 'client')));

// API Routes
router.get('/api/v1/getData', function(request, response) {
    var data = [
        {
            question: '1. Which 72 - 10 record did the Warriors 2015 - 2016 break?', 
            correctAnswer: 2,
            answers: [
                {id: 1, value: 'Bulls 1994 - 1995'},
                {id: 2, value: 'Bulls 1995 - 1996'},
                {id: 3, value: 'Bulls 1996 - 1997'},
                {id: 4, value: 'Bulls 1997 - 1998'},
                {id: 5, value: 'Bulls 1998 - 1999'}
            ]
        },
        {
            question: 'Who did not make it to the 50% fg - 40% 3pts - 90% ft club?', 
            correctAnswer: 5,
            answers: [
                {id: 1, value: 'Stephen Curry 2015 - 2016'},
                {id: 2, value: 'Steve Nash 2007 - 2008'},
                {id: 3, value: 'Kevin Durant 2012 - 2013'},
                {id: 4, value: 'Larry Bird 1986 - 1987'},
                {id: 5, value: 'Lebron James 2011 - 2012'}
            ]
        },
        {
            question: 'How many points did Kobe Bryant score on his last game before he retired?', 
            correctAnswer: 3,
            answers: [
                {id: 1, value: '50'},
                {id: 2, value: '54'},
                {id: 3, value: '60'},
                {id: 4, value: '81'},
                {id: 5, value: '61'}
            ]
        },
        {
            question: 'Who made the most points (100) in one nba game?', 
            correctAnswer: 1,
            answers: [
                {id: 1, value: 'Wilt Chamberlain'},
                {id: 2, value: 'Kobe Bryant'},
                {id: 3, value: 'Kareem Abdul Jabbar'},
                {id: 4, value: 'Stephen Curry'},
                {id: 5, value: 'Michael Jordan'}
            ]
        },
        {
            question: 'Who made the most thress in a season and how many?', 
            correctAnswer: 2,
            answers: [
                {id: 1, value: ''},
                {id: 2, value: ''},
                {id: 3, value: ''},
                {id: 4, value: ''},
                {id: 5, value: ''}
            ]
        },
        {
            question: '?', 
            correctAnswer: 4,
            answers: [
                {id: 1, value: ''},
                {id: 2, value: ''},
                {id: 3, value: ''},
                {id: 4, value: ''},
                {id: 5, value: ''}
            ]
        },
        {
            question: '?', 
            correctAnswer: 5,
            answers: [
                {id: 1, value: ''},
                {id: 2, value: ''},
                {id: 3, value: ''},
                {id: 4, value: ''},
                {id: 5, value: ''}
            ]
        }
    ];
    response.send(data);
});

router.post('/api/v1/postData', function(request, response) {
    var color = request.body.color;
    if (color) {
        color = color.charAt(0).toUpperCase() + color.substring(1) + ' ';
    }
    var data = {
        message: color + 'Monday??'
    };
    response.send(data);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
});
