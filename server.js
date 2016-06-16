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


var questions = [{
    question: '1. Which 72 - 10 record did the Warriors 2015 - 2016 break?',
    correctAnswer: 2,
    answers: [{
        id: 1,
        value: 'Bulls 1994 - 1995'
    }, {
        id: 2,
        value: 'Bulls 1995 - 1996'
    }, {
        id: 3,
        value: 'Bulls 1996 - 1997'
    }, {
        id: 4,
        value: 'Bulls 1997 - 1998'
    }, {
        id: 5,
        value: 'Bulls 1998 - 1999'
    }]
}, {
    question: '2. Who did not make it to the 50% fg - 40% 3pts - 90% ft club?',
    correctAnswer: 5,
    answers: [{
        id: 1,
        value: 'Stephen Curry 2015 - 2016'
    }, {
        id: 2,
        value: 'Steve Nash 2007 - 2008'
    }, {
        id: 3,
        value: 'Kevin Durant 2012 - 2013'
    }, {
        id: 4,
        value: 'Larry Bird 1986 - 1987'
    }, {
        id: 5,
        value: 'Lebron James 2011 - 2012'
    }]
}, {
    question: '3. How many points did Kobe Bryant score on his last game before he retired?',
    correctAnswer: 3,
    answers: [{
        id: 1,
        value: '50'
    }, {
        id: 2,
        value: '54'
    }, {
        id: 3,
        value: '60'
    }, {
        id: 4,
        value: '81'
    }, {
        id: 5,
        value: '61'
    }]
}, {
    question: '4. Who made the most points (100) in one nba game?',
    correctAnswer: 1,
    answers: [{
        id: 1,
        value: 'Wilt Chamberlain'
    }, {
        id: 2,
        value: 'Kobe Bryant'
    }, {
        id: 3,
        value: 'Kareem Abdul Jabbar'
    }, {
        id: 4,
        value: 'Stephen Curry'
    }, {
        id: 5,
        value: 'Michael Jordan'
    }]
}, {
    question: '5. Who made the most treys in a season and how many?',
    correctAnswer: 2,
    answers: [{
        id: 1,
        value: 'Stephen Curry, 286'
    }, {
        id: 2,
        value: 'Stephen Curry, 402'
    }, {
        id: 3,
        value: 'Klay Thompson, 276'
    }, {
        id: 4,
        value: 'Ray Allen, 405'
    }, {
        id: 5,
        value: 'Michael Jordan, 406'
    }]
}, {
    question: '6. Which team has the most championships (14)?',
    correctAnswer: 4,
    answers: [{
        id: 1,
        value: 'Los Angeles Lakers'
    }, {
        id: 2,
        value: 'Golden State Warriors'
    }, {
        id: 3,
        value: 'Philadelphia 76ers '
    }, {
        id: 4,
        value: 'Boston Celtics'
    }, {
        id: 5,
        value: 'Cleveland Cavaliers'
    }]
}, {
    question: '7. Which team never won a championship?',
    correctAnswer: 4,
    answers: [{
        id: 1,
        value: 'Detroit Pistons'
    }, {
        id: 2,
        value: 'Washington Wizards'
    }, {
        id: 3,
        value: 'Dallas Mavericks'
    }, {
        id: 4,
        value: 'Cleveland Cavaliers'
    }, {
        id: 5,
        value: 'Milwaukee Bucks'
    }]
}, {
    question: '8. Who is NOT in the Basketball Hall of fame?',
    correctAnswer: 3,
    answers: [{
        id: 1,
        value: 'Allen Iverson'
    }, {
        id: 2,
        value: 'Shaquille O Neal'
    }, {
        id: 3,
        value: 'Paul Pierce'
    }, {
        id: 4,
        value: 'Larry Bird'
    }, {
        id: 5,
        value: 'Yao Ming'
    }]
}, {
    question: '9. Who on the GSW team will get a ring no matter if they lose or win the championship?',
    correctAnswer: 1,
    answers: [{
        id: 1,
        value: 'Anderson Varejao'
    }, {
        id: 2,
        value: 'Stephen Curry'
    }, {
        id: 3,
        value: 'Klay Thompson'
    }, {
        id: 4,
        value: 'Draymond Green'
    }, {
        id: 5,
        value: 'Andre Iguodala'
    }]
}, {
    question: '10. Who are the "Splash Brothers"?',
    correctAnswer: 5,
    answers: [{
        id: 1,
        value: 'Draymond and Curry'
    }, {
        id: 2,
        value: 'Curry and Iguodala'
    }, {
        id: 3,
        value: 'Iguodala and Draymond'
    }, {
        id: 4,
        value: 'Thompson and Draymond'
    }, {
        id: 5,
        value: 'Curry and Thompson'
    }]
}];
// API Routes
router.get('/api/v1/getData', function(request, response) {
    response.send(questions);
});

router.post('/api/v1/postData', function(request, response) {
    var answers = request.body.answers;
   var correctAnswers = 0;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i] == questions[i].correctAnswer) {
           correctAnswers += 1;
        }
    }
    var data = {
        message: "Nice, you got " + correctAnswers + " out of " + questions.length + "!"
    };
    response.send(data);
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
    var addr = server.address();
    console.log("Server listening at", addr.address + ":" + addr.port);
});