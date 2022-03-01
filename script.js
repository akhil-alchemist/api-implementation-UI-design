// main.js

// GET request using fetch()
fetch("https://jsonplaceholder.typicode.com/users")

	// Converting received data to JSON
	.then(response => response.json())

	.then(json => {

		// Create a variable to store HTML
		let h2 = `<h2>name</h2>`;
	
		// Loop through each data and add a table row
		json.forEach(user => {
			h2 +=`${user.name}<br/>`;
		});

	// Display result
	document.getElementById("users").innerHTML = h2;
});
