//const express = require('express');
import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3000;

// Define allowed origins
// For production, consider loading these from environment variables
const allowedOrigins = ['http://localhost:3000', 'https://yourdomain.com']; // Replace with your actual allowed origins

// Configure CORS with specific origins
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl requests, or same-origin requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

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
	res.set('Content-Type', 'text/html');
	const randTask = getRandomTask();
	res.send(randTask);
});

function getRandomTask() {
	let tasks = [
		'Read Learn to Earn',
		'Read the globe and mail',
		'Read about recent updates in software industry through substack, medium',
		'Complete Brad Traversy Course',
		'Complete DSA Course',
		'Complete Docker K8s Course',
		'Learn AI & ML Foundations',
		'Practice on NoSQL databases',
		'Practice leetcode problems',
		'Create full-stack project using linkedin learning',
		'Check google trending articles',
		'Check industry updates on YouTube',
	];

	let otherTasks = [
		'Hear Gurbani Shabad on Sikhnet play',
		'Watch history video on Sikhnet stories',
		'Read Book on lives of gurus and other important sikhs on <a href="https://www.sikhnet.com/pages/sikh-history" target="_blank">https://www.sikhnet.com/pages/sikh-history</a>',
	];

	tasks.push(...otherTasks);

	if (tasks.length == 0) {
		return 'No tasks in the list';
	} else {
		// Math.random() * num => ( 0 to 0.99999... ) * num = 0 to (num-1).99999...
		const randIndex = parseInt(Math.random() * tasks.length);
		return tasks[randIndex];
	}
}