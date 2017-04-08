var fs = require('fs');

function printOut (what, callback) {
	return callback(what);
}

function makeLower(str) {
	return str.toLowerCase();
}

fs.readFile('text.txt', function(err, data) {
	if (err){console.log(err)}
	else{
		console.log("print out our lorem ipsum\n", data.toString());
		var result2 = printOut("TIMMY", makeLower);
		console.log(result2);
	}	
});

var result = printOut("TOMMY", makeLower);

