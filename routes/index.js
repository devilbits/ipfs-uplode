var express = require('express');
var router = express.Router();
var IPFS   = require('ipfs-http-client');

ipfs = IPFS('localhost','5001',{protocol:'http'});






router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload',(req,res,next)=>{
	data = req.files.myfile.data;
	console.log(data);
	
	ipfs.add(data,(err,res1)=>
		{ if(err){console.log(err);};
		if(res1==undefined){console.log('not reading file');}
		else{
		 console.log('hash is:'+JSON.stringify(res1[0]));res.send('hash='+res1[0].hash);} 
		});




	

});



module.exports = router;
