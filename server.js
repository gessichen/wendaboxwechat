var http = require('http'),
  express = require('express'),
  bodyParser = require('body-parser'),
  path = require('path'),
/*  DBDriver = require('./dbDriver').DBDriver,
  EventHandler = require('./eventHandler').EventHandler,
  PageRender = require('./pageRender').PageRender,
  FileDriver = require('./fileDriver').FileDriver,*/
  xml2js = require("xml2js"),
  multipart = require('connect-multiparty');

var multipartMiddleware = multipart();
var app = express();
app.set('port', process.env.PORT || 2000);
app.set('view engine', 'jade');
//app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', [__dirname + '/views', __dirname + '/views/user']);

/*
var mongoDBURI = "mongodb://dbuser1:Wendabox2015@ds038228-a0.mongolab.com:38228,ds038228-a1.mongolab.com:38226/wendabox?replicaSet=rs-ds038228"
var testDBURI = "mongodb://dbuser1:Wendabox2015@ds038228-a0.mongolab.com:38228,ds038228-a1.mongolab.com:38226/webdaboxtest?replicaSet=rs-ds038228"
var blobAccountName = "wendabox";
var blobPrimaryKey = "ojdLsMPOKHqMc0r+pNsR1dxWfEikfbZ6gTLd3qmXI+H/4tF++Hb6rusFU2zgz82zNtF+BrrCXDcP7p2gquOSAQ==";

var db_driver = new DBDriver(testDBURI);
var file_driver = new FileDriver(db_driver, blobAccountName, blobPrimaryKey);

var event_handler = new EventHandler(db_driver, file_driver); 
var pageRender = new PageRender(db_driver, file_driver);*/
//console.log(db_driver);

//mongoose.connect("mongodb://dbuser1:Wendabox2015@ds038228-a0.mongolab.com:38228,ds038228-a1.mongolab.com:38226/wendabox?replicaSet=rs-ds038228");
//var tests = mongoose.model('tests', {name:"string",sex:"string"});

//db_driver.init();

/*
app.use(function (req,res) {
    res.render('404', {url:req.url});
});*/


/*---------------------------------------------test server avalibility---------------------------------------*/
app.get('/', function (req, res) {
  console.log("get accpted");
  res.send('<html><body><h1>Hello Wechat</h1></body></html>');
});

/*---------------------------------------------user related functions---------------------------------------*/
app.post("/", function (req, res) {
  res.send("hehe");
});


http.createServer(app).listen(app.get('port'), function () {
  console.log('Wendabox server listening on port ' + app.get('port'));
});
