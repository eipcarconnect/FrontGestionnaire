function signInUser()
{
	var token;
	var form = document.getElementById("signinForm");
	fetch("https://40.85.113.74:3000/auth/manager/signup", {
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
	.then(json => {
		if (json.success) {
			localStorage.setItem('token', json.token)
			history.back()
		} else {
			if (json.error === "PasswordIsWeak")
				alert("Le mot de passe est trop faible.")
			else
				alert(json.error)
		}
	});
}

function logInUser()
{
	var token;
	var form = document.getElementById("loginForm");
	fetch("https://40.85.113.74:3000/auth/manager/signin", {
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
	.then(json => {
		if (json.success) {
			localStorage.setItem('token', json.token)
			history.back()
		} else {
			if (json.error === "ManagerNotFound")
				alert("Mauvais addresse email.")
			else if (json.error === "WrongPassword")
				alert("Mauvais mot de passe.")
		}
	});
}

function moveImg(val) {
		var url = window.location.href;
		url = url.replace( "/login", "");
		url = url.replace( "/signin", "");
		imgObj = document.getElementById('img');
    if (val == 1) {
			imgObj.className = "box2 slide-right";
			setTimeout(() => {
			document.getElementById("signinForm").hidden = false;
			document.getElementById("loginForm").hidden = true; },
			715);
			url += "/signin";
    }
		else
		{
			imgObj.className = "box2 slide-left";
			setTimeout(() => {
			document.getElementById("signinForm").hidden = true;
			document.getElementById("loginForm").hidden = false;},
			715);
			url += "/login";
		}
		history.pushState({id: 'authpage'}, 'Authentification', url);
}


function logout()
{
	localStorage.setItem('token', "");
}

console.log(window.location.href);

// function isLogged() {
// 		var wait = false;
// 		var token = localStorage.getItem('token');
// 		if ((!token || token == "") && wait == false) {
// 			document.location.href="/login";
// 			wait = true;
// 		}
// }

// isLogged();
