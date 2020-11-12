api_url = "40.85.113.74:3000/"

function signInUser()
{
	var form = document.getElementById("signinForm");
	//var birthdate = form.getFullYear() + "-" + form.getMonth() + "-" + form.getDate();
	var body = {
		name: form.name,
		email: form.email,
		password: form.password,
		birthdate: form.birthdate,
		company: form.company
	};
	// var xmlHttp = new XMLHttpRequest();
	// xmlHttp.open( "POST", api_url + "auth/manager/signup", true )
	// xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	// xmlHttp.onload = function () {
	// 	console.log(this);
	// }
	// xmlHttp.send(body);
	fetch(api_url + "auth/manager/signup", {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}).then(r=>r.json()).then(r=> {
			console.log(r)
		}).then(error=>console.log(error))
}

function logInUser()
{
	var form = document.getElementById("loginForm");
	var body = {
		email: form.email,
		password: form.password,
	};
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onload = function () {
		console.log(this);
	}
	xmlHttp.open( "POST", api_url + "auth/manager/signin", true )
	xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xmlHttp.send(body);
}

function setMaxDate()
{
	var date = new Date();
	date.setFullYear(date.getFullYear() - 18);
	document.getElementById("birthdate").max = date.getFullYear()+ "-" + date.getMonth() + "-" + date.getDate();
}

function setBirthdate()
{
	var birthdate = new Date(document.getElementById("birthdate").value);
	var mois = birthdate.getMonth();
	switch (mois) {
		case 0:
			mois = "Janvier"
			break;
		case 1:
			mois = "Fevrier"
			break;
		case 2:
			mois = "Mars"
			break;
		case 3:
			mois = "Avril"
			break
		case 4:
			mois = "Mai"
			break;
		case 5:
			mois = "Juin"
			break;
		case 6:
			mois = "Juillet"
			break;
		case 7:
			mois = "Août"
			break;
		case 8:
			mois = "Septembre"
			break;
		case 9:
			mois = "Octobre"
			break;
		case 10:
			mois = "Novembre"
			break;
		case 11:
			mois = "Décembre"
			break;
	}
	document.getElementById("visualDate").value = birthdate.getDate() + " " + mois + " " + birthdate.getFullYear();
}

function moveImg(val) {
		var page = "https://front-gestionnaire-web.herokuapp.com/";
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
