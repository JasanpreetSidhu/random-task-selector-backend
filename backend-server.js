const express = require('express');
const app = express();
const PORT = 3000;

/* configures the server and defines callback function that will run as the server starts, which will wait for incoming requests on a specific port, when this file is run using CLI command [node file_name(with_location if not in current working directory)]   */
app.listen(PORT, function (err) {
	if (err) console.log('Error in server setup', err);
	else {
		console.log(
			'Server started successfully and App is listening on Port',
			PORT
		);
	}
});
