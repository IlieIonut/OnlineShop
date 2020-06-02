var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var db = require('./db');

var test=3;
var NumeUser='';

passport.use(new Strategy(
	function(username, password, cb) {
    db.users.findByUsername(username, function(err, user) {

	  if (err) {
		  test=test-1;
		  return cb(err); }
      if (!user) {
		  test=test-1;
		  return cb(null, false); }
      if (user.password != password) {
		  test=test-1;
		  return cb(null, false); }
      NumeUser=username;
	  return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(require('morgan')('combined'));
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());
var HashMap = require('hashmap');
var produse = new HashMap();
var produseactive = new HashMap();
var produsecos=[];

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname +"/public"));
app.set("view engine", "ejs");

var recenzii = [['Da','Da','Da','Da','Da'],['Nu','Nu','Nu','Nu','Nu']];
var Ttotal = [];
var Nrprod = [];
var Datacumparare = [];
var NumeClienti = [];
var LocClienti = [];
var nr=0;

produse.set(0,["Borsec","2.43","Borsec.jpg","25.07.2021","Apa minerala necarbogazoasa 2l"]);
produse.set(1,["Minioni","15","Minions.jpg","14.04.2020","Ou mare surpriza cu minioni editie limitata"]);
produse.set(2,["Doncafe","10.81","Doncafe.jpg","31.12.2022","Cafea prajita si macinata Selected 300g"]);
produse.set(3,["Jacobs","20.99","Jacobs.jpg","29.08.2022","Cafea prajita si macinata Kronung 500g"]);
produse.set(4,["Pepsi","6.14","Pepsi.jpg","14.04.2021","Bautura racoritoare carbogazoasa cu aroma de cola 2.5l"]);
produse.set(5,["Bunica","5.88","Bunica.jpg","17.06.2022","Ulei rafinat de floarea soarelui 1L"]);
produse.set(6,["HappyHippo","8.53","HappyHippo.jpg","29.06.2020","Napolitana Kinder 103g 5 Buc"]);
produse.set(7,["Lays","3.74","Lay's.jpg","01.01.2023","Chipsuri din cartofi cu sare 100g"]);
produse.set(8,["Pringles","7.54","Pringles.jpg","02.11.2024","Snack Original 165g"]);
produse.set(9,["CocaCola","6.14","CocaCola.jpg","21.02.2023","Bautura carbogazoasa Original 2.5l"]);
produse.set(10,["ColaSticla","3.29","ColaSticla.jpg","11.04.2022","Bautura racoritoare carbogazoasa cu gust de mar si soc 250ml"]);
produse.set(11,["Milka","3.85","Milka.jpg","09.09.2021","Ciocolata cu lapte alpin si alune maruntite 100g"]);
produse.set(12,["Moet","189.99","Moet.jpg","13.10.2025","Sampanie Imperial Brut 0.75l"]);
produse.set(13,["Star","2.29","Star.jpg","11.11.2021","Pufuleti cu aroma de cascaval 90g"]);
produse.set(14,["BenAndJerrys","29.49","Ben.jpg","10.10.2020","Inghetata cu ciocolata si brownie 415g"]);


produseactive.set(0,"True");
produseactive.set(1,"True");
produseactive.set(2,"True");
produseactive.set(3,"True");
produseactive.set(4,"True");
produseactive.set(5,"True");
produseactive.set(6,"True");
produseactive.set(7,"True");
produseactive.set(8,"True");
produseactive.set(9,"True");
produseactive.set(10,"True");
produseactive.set(11,"True");
produseactive.set(12,"True");
produseactive.set(13,"True");
produseactive.set(14,"True");



app.get("/", function(req, res){
    res.render("homepage",{ user: req.user });
});

app.get("/homepage", function(req, res){
   res.render("homepage",{ user: req.user });
});

app.post("/blocheaza", function(req, res){
	var selected = req.body.selected;
	console.log(req.body);
    	
	for (var key of produse.keys()) {
		if(produse.get(key)[0]==selected){
			console.log(key);
			produseactive.set(key,"False");
		}			
	}
	
	var fs = require('fs')
	var logger = fs.createWriteStream('ModificareDate.csv', {
	  flags: 'a'
	})
	
	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2);
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	let hours = date_ob.getHours();
	let minutes = date_ob.getMinutes();
	let seconds = date_ob.getSeconds();
	logger.write(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + " ");
	logger.write('utilizatorul ' + NumeUser + ' a blocat produsul ');
	logger.write(selected + '\n'); 

	logger.end() 
	
    res.redirect("/admin");
});

app.post("/deblocheaza", function(req, res){
	var selected = req.body.selected;
	console.log(req.body);
    
	
	for (var key of produse.keys()) {
		if(produse.get(key)[0]==selected){
			console.log(key);
			produseactive.set(key,"True");
		}			
	}
	
	
	var fs = require('fs')
	var logger = fs.createWriteStream('ModificareDate.csv', {
	  flags: 'a'
	})
	
	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2);
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	let hours = date_ob.getHours();
	let minutes = date_ob.getMinutes();
	let seconds = date_ob.getSeconds();
	logger.write(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + " ");
	logger.write('utilizatorul ' + NumeUser + ' a deblocat produsul ');
	logger.write(selected + '\n'); 

	logger.end() 
	
    res.redirect("/admin");
});

app.post("/adaugare", function(req, res){
	var selected = req.body.selected;
	console.log(req.body);
	produse.set(produse.size,[selected[0],selected[1],selected[2],selected[3],selected[4]]);
	produseactive.set(produseactive.size,"True");
	console.log(produse);
	
	var fs = require('fs')
	var logger = fs.createWriteStream('ModificareDate.csv', {
	  flags: 'a'
	})
	
	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2);
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	let hours = date_ob.getHours();
	let minutes = date_ob.getMinutes();
	let seconds = date_ob.getSeconds();
	logger.write(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + " ");
	logger.write('utilizatorul ' + NumeUser + ' a adaugat produsul ');
	logger.write(produse.get(produse.size-1)[0] + '\n'); 

	logger.end() 
	
	res.redirect("/admin");
});

var alert =require( 'alert-node');




app.post("/adaugacos", function(req, res){
	var selected = req.body.selected;
	console.log(req.body);
	for (var key of produse.keys()) {
		if(produse.get(key)[0]==selected){
			const index = produsecos.indexOf(key);
			if (index > -1) {
				alert("Produsul este deja in cos");
			}else{
				console.log(key);
				produsecos.push(key);
			}
		}			
	}
	console.log(produsecos);
    res.redirect("/produse");
});

app.post("/stergecos", function(req, res){
	var selected = req.body.selected;
	console.log(req.body);
	for (var key of produse.keys()) {
		if(produse.get(key)[0]==selected){
			console.log(key);
			const index = produsecos.indexOf(key);
			if (index > -1) {
				produsecos.splice(index, 1);
			}
		}			
	}
	console.log(produsecos);
    res.redirect("/cos");
});

app.get("/adaugareP",require('connect-ensure-login').ensureLoggedIn(),function(req, res){
  res.render("adaugareP",{ user: req.user });
});

app.get("/deblocheazaP",require('connect-ensure-login').ensureLoggedIn(),function(req, res){
  res.render("deblocheazaP",{ user: req.user });
});

app.get("/blocheazaP",require('connect-ensure-login').ensureLoggedIn(),function(req, res){
  res.render("blocheazaP",{ user: req.user });
});

app.get("/Lrecenzii",require('connect-ensure-login').ensureLoggedIn(),function(req, res){

  	var fs = require('fs')
	var logger = fs.createWriteStream('ModificareDate.csv', {
	  flags: 'a'
	})
	
	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2);
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	let hours = date_ob.getHours();
	let minutes = date_ob.getMinutes();
	let seconds = date_ob.getSeconds();
	logger.write(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + " ");
	logger.write('utilizatorul ' + NumeUser + ' a vizitat lista recenzii ' + '\n');


	logger.end()

  res.render("Lrecenzii",{recenzii: recenzii, user: req.user });
});

app.post("/total", function(req, res){
	var selected = req.body.selected;
	console.log(req.body);
	console.log(produsecos);
	Ttotal.push(selected);
	Nrprod.push(produsecos.length);
	produsecos.length=0;
	console.log(Ttotal,Nrprod);
	console.log(Ttotal.length,Nrprod.length);
	nr=nr+1;
	console.log(nr);
	for(var i = 0; i < Ttotal.lenght; i++){
		console.log(Ttotal[i]);}
	
	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2);
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	let hours = date_ob.getHours();
	let minutes = date_ob.getMinutes();
	let seconds = date_ob.getSeconds();
	Datacumparare.push(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
	console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
	console.log(Datacumparare);
	res.redirect("/finalizare");
});

app.post("/final", function(req, res){
	var selected = req.body.selected;
	console.log(selected);
	produsecos.length=0;
	NumeClienti.push([selected[0],selected[1]]);
	LocClienti.push(selected[2]);
	console.log(NumeClienti,LocClienti);
	console.log(produsecos);
	var mail=req.body.email;

		var nodemailer = require('nodemailer');

	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
		user: '2020OnlineShop2020@gmail.com',
<<<<<<< Updated upstream
		pass: 'secret'
=======
		pass: 'secret2020'
>>>>>>> Stashed changes
	  }
	});

	var mailOptions = {
    from: '2020OnlineShop2020@gmail.com',
	  to: mail,
	  subject: 'Va multumim pentru cumparaturile facute la noi',
	  text: 'Super tare!'
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
		console.log(error);
	  } else {
		console.log('Email sent: ' + info.response);
	  }
	});

	console.log(mail);
    res.redirect("/homepage");
});



app.get("/finalizare",function(req, res){
  res.render("finalizare");
});

app.get("/istoric",require('connect-ensure-login').ensureLoggedIn(),function(req, res){
	var fs = require('fs')
	var logger = fs.createWriteStream('ModificareDate.csv', {
	  flags: 'a'
	})
	
	let date_ob = new Date();
	let date = ("0" + date_ob.getDate()).slice(-2);
	let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
	let year = date_ob.getFullYear();
	let hours = date_ob.getHours();
	let minutes = date_ob.getMinutes();
	let seconds = date_ob.getSeconds();
	logger.write(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds + " ");
	logger.write('utilizatorul ' + NumeUser + ' a vizitat istoricul comenzilor ' + '\n');


	logger.end()
	
  res.render("istoric",{ user: req.user,NumeClienti:NumeClienti,Ttotal:Ttotal,LocClienti:LocClienti,Datacumparare:Datacumparare,Nrprod:Nrprod,nr:nr});
});


app.get("/produse",function(req, res){
  res.render("produse",{produse: produse, produseactive: produseactive, produsecos : produsecos, user: req.user});
});

app.get("/promotii",function(req, res){
  res.render("promotii",{ user: req.user });
});

app.post("/addrecenzie", function(req, res){
    var newRecenzie = req.body.newrecenzie;  
	 console.log(req.body);
	recenzii.push(newRecenzie);
    res.redirect("/recenzii");
});

app.get("/recenzii", function(req, res){
	console.log(recenzii);
    res.render("recenzii", {recenzii: recenzii, user: req.user} );
});

app.get('/login',
  function(req, res){
    res.render('login',{test: test});
  });
  
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/admin');
  });
  
app.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

app.get('/admin',require('connect-ensure-login').ensureLoggedIn(),function(req, res){
    res.render('admin', { user: req.user ,produse: produse, produseactive: produseactive});
  });

app.get('/cos',function(req, res){
   res.render("cos",{produse: produse, produseactive: produseactive, produsecos : produsecos, user: req.user });
});

app.use(function(req, res, next) {
	
	const fisiere=[]
	const path = require('path');
	const fs = require('fs');
	const directoryPath = path.join(__dirname, 'views');
	fs.readdir(directoryPath, function (err, files) {
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		} 
		files.forEach(function (file) {
			if (req.url[1]==file[0]){
					if(file!='partials'){ 
						if(file!='eror.ejs'){
							console.log("me+" + fisiere)
							console.log(req.url[1] + file[0] + file.length)
							var v = file.slice(0, file.length-4);
							fisiere.push(v)
							}
					}
			}
			console.log(file); 
		});
			
		console.log("Ati cautat " + req.url);
		console.log('aici' + fisiere);
		res.status(404);
		res.render('eror',{fisiere:fisiere});
		console.log('aici' + fisiere);
	});
	
	
});

app.listen(3000, "127.0.0.1", function(){
   console.log("Server is listening!!!"); 
});
