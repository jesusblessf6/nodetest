var http = require("http");

var baseOptions = {
	uri: 'http://herboristyg.tmall.com/',
    timeout: 2000,
    followAllRedirects: true
};

http.get(baseOptions, function(response){
	if(response.statusCode != 200)
	{
		console.error("Initial stack was not found - statusCode" + response.statusCode);
		process.exit();
	};

	var stack = '';
	response.on('data', function(chunk){
		stack += chunk;
	});

	response.on('end', function(){
		console.log(stack);
	});
});