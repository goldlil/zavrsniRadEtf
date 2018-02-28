
var student = {
    ime: 'Dino',
    prezime: 'Satrovic'
};

var profesor = {
    ime: 'Profesor',
    prezime: 'Profesorovic',
    titula: 'redovni profesor'
};

module.exports = student;

function PozdravSvijete() {
    this.pozdrav = "Pozdrav";
    this.pozdravFunkcija = function() {
        console.log(this.pozdrav);
    };
};

module.exports.pozdravSvijeteFunckija = new PozdravSvijete();

module.exports = student;

var trazeniModul = require("./modul.js");


var trazeniModul = require("./modul.js").pozdravFunkcija;
trazeniModul();



var pozdrav = "Pozdrav svijete";

function pozdrav(){
    console.log(pozdrav);
}

module.exports = {
    pozdrav : pozdrav
}

var trazeniModul = require("./modul.js").pozdrav;
var pozdrav = new trazeniModul();

module.exports.PozdravSvijete = function(){
    console.log('Pozdrav svijete');
}

var fs = require('fs');

var pozdrav = fs.readFileSync(__dirname + "/pozdravSinhrono.txt", 'utf8');
console.log(pozdrav);

var pozdrav2 = fs.readFile(__dirname + "/pozdravAsinhrono.txt", 'utf8',
    function(err, data){
        console.log(data);
    });

console.log("Dosao sam do kraja fajla!");

var fs = require('fs');

var citanjeStream = fs.createReadStream(__dirname + "pozdrav.txt");

var pisanjeStream = fs.createWriteStream(__dirname + 'pozdravKopija.txt');

citanjeStream.on('data', function(komad){
    pisanjeStream.write(komad);
});

var fs = require('fs');

var citanjeStream = fs.createReadStream(__dirname + "pozdrav.txt");

var pisanjeStream = fs.createWriteStream(__dirname + 'pozdravKopija.txt');

citanjeStream.pipe(pisanjeStream);

citanjeStream.on('data', function(komad){
    pisanjeStream.write(komad);
});

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var index = fs.readFileSync(__dirname + 'index.html','utf8');
    res.end(index);

}).listen(1337, '127.0.0.1');

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var index = fs.readFileSync(__dirname + 'index.html').pipe(res);

}).listen(1337, '127.0.0.1');

var http = require('http');
var fs = require('fs');

var studenti = [
    {
        ime: "Dino",
        prezime: "Satrovic"
    }
];

var profesori = [
    {
        ime: 'Profesor',
        prezime: 'Profesorovic',
        titula: 'redovni profesor'
    }
];
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var index = fs.readFileSync(__dirname + 'index.html').pipe(res);
    
}).listen(1337, '127.0.0.1');
