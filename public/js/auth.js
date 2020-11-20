api_url = "40.85.113.74:3000/"

function signInUser()
{
	var form = document.getElementById("signinForm");
	var body = {
		name: form.name,
		email: form.email,
		password: form.password,
		company: form.company
	};
	// fetch(api_url + "auth/manager/signup", {
	// 		method: "POST",
	// 		headers: {
	// 			'Content-Type': 'application/x-www-form-urlencoded'
	// 		},
	// 		body: body
	// 	}).then(r=>r.json()).then(r=> {
	// 		console.log(r)
	// 	}).then(error=>console.log(error))
		console.log(body);
		fetch("http://40.85.113.74:3000/auth/manager/signup", {

		    method: "POST",

		    body: JSON.stringify({
					name: "LECONTE Augustin",
					email: "augustin.leconte@epitech.eu",
					password: "azerty1234",
					company: "testA1"
		    }),

		    headers: {
		        "Content-type": "application/json; charset=UTF-8"
		    }
		})
		.then(response => response.json())
		.then(json => console.log(json));

}

// function logInUser()
// {
// 	var form = document.getElementById("loginForm");
// 	var body = {
// 		email: form.email,
// 		password: form.password,
// 	};
// 	var xmlHttp = new XMLHttpRequest();
// 	xmlHttp.onload = function () {
// 		console.log(this);
// 	}
// 	xmlHttp.open( "POST", api_url + "auth/manager/signin", true )
// 	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// 	xmlHttp.send(body);
// }

function moveImg(val) {
		var page = "https://front-gestionnaire-web.herokuapp.com";
		imgObj = document.getElementById('img');
    if (val == 1) {
			imgObj.className = "box2 slide-right";
			setTimeout(() => {
			document.getElementById("signinForm").hidden = false;
			document.getElementById("loginForm").hidden = true; },
			715);
			page += "/signin";
    }
		else
		{
			imgObj.className = "box2 slide-left";
			setTimeout(() => {
			document.getElementById("signinForm").hidden = true;
			document.getElementById("loginForm").hidden = false;},
			715);
			page += "/login";
		}
		history.pushState({id: 'authpage'}, 'Authentification', page);
}
