const express = require('express');
const app = express();
const PORT = 3000;

/* configures the server and defines callback function that will run in CLI as the server starts from CLI, which will wait for incoming requests on a specific port, when this file is run using CLI command [node file_name(with_location if not in current working directory)]   */
app.listen(PORT, function (err) {
	if (err) console.log('Error in server setup', err);
	else {
		console.log(
			'Server started successfully and App is listening on Port',
			PORT
		);
	}
});

/* configuring GET request route on the root URL(endpoint). This route will be triggered when GET request is sent either through browser, curl, postman or other sources */
app.get('/', (req, res) => {
	res.status(200);
	const randTask = getRandomTask();
	res.send(randTask);
});

function getRandomTask() {
	let tasks = [
		'Read Learn to Earn',
		'Complete Brad Traversy Course',
		'Complete DSA Course',
		'Complete Docker K8s Course',
		'Learn AI & ML Foundations',
		'Practice on NoSQL databases',
		'Practice leetcode problems',
		'create full-stack project using linkedin learning',
		'check google trending articles',
		'read about recent updates in software industry',
	];

	if (tasks.length == 0) {
		return 'No tasks in the list';
	} else {
		// Math.random() * num => ( 0 to 0.99999... ) * num = 0 to (num-1).99999...
		randIndex = parseInt(Math.random() * tasks.length);
		return tasks[randIndex];
	}
}
