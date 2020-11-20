function signInUser()
{
	var token;
	var form = document.getElementById("signinForm");
	fetch("http://40.85.113.74:3000/auth/manager/signup", {
	    method: "POST",
	    body: JSON.stringify({
				name: form.name.value,
				email: form.email.value,
				password: form.password.value,
				company: form.company.value
	    }),
	    headers: {
	        "Content-type": "application/json; charset=UTF-8"
	    }
	})
	.then(response => response.json())
	.then(json => localStorage.setItem('token', json.token));
}

function logInUser()
{
	var token;
	var form = document.getElementById("loginForm");
	fetch("http://40.85.113.74:3000/auth/manager/signin", {
			method: "POST",
			body: JSON.stringify({
				email: form.email.value,
				password: form.password.value,
			}),
			headers: {
					"Content-type": "application/json; charset=UTF-8"
			}
	})
	.then(response => response.json())
	.then(json => localStorage.setItem('token', json.token));
}

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
//
// async function isLogged() {
// 	var token = store.get('token');
// 		if (token != false)
// 			document.location.href="/";
// }
