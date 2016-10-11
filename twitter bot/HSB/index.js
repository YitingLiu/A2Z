console.log("Let's get started!");
var Twit = require('twit');

var config=require('./config.js');
var T = new Twit(config);
	
var exec = require('child_process').exec;

var fs = require('fs');

//run every 5 minutes!
setInterval(tweetIt, 1000*60*5); 


tweetIt();
//T.get(path, [params], callback)
// T.get('search/tweets',{q:"apple",count:1},gotData);

//callback: function (err, data, response)
// function gotData(err, data, res){
// 	console.log("--------------------------err--------------------------");
// 	console.log(err);
// 	console.log("--------------------------data--------------------------");
// 	console.log(data);
// 	console.log("--------------------------res--------------------------");
// 	console.log(res);
// }
function tweetIt(){
	//image from processing
	var cmd='processing-java --sketch=`pwd`/color/ --run';

	exec(cmd,processed);

	function processed(err){
		// console.log('finished exce!');
		var filename='color/output.png';
    	var b64content = fs.readFileSync(filename, { encoding: 'base64' });

		//T.post(path, [params], callback)

	    
	    T.post('media/upload', { media_data:b64content }, uploaded);

		function uploaded(err, data, res){
			// console.log("uploaded success!");

			var id=data.media_id_string;

			// date
			var d=Date();
			var para={
				status:d,
				media_ids:[id]
			}

			T.post('statuses/update',para,tweeted);
			function tweeted(){
				// console.log('tweeted success!');
				console.log(d);
			}
		}
	}
}

