api_url = "40.85.113.74/"

function signInUser()
{
	var form = document.getElementById("signinForm");
	//var birthdate = form.getFullYear() + "-" + form.getMonth() + "-" + form.getDate();
	var body = {
		name: form.name,
		username: form.email,
		password: form.password,
		birthdate: form.birthdate,
		company: form.company
	};
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onload = function () {
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			console.log("form envoyé");
    }
		else
			console.log(this.status);
	}
	xmlHttp.open( "POST", api_url + "auth/manager/signup", true )
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

function goSignIn() {
	document.getElementById("signinForm").hidden = false;
	document.getElementById("loginForm").hidden = true;
}

function goLogIn() {
	document.getElementById("signinForm").hidden = true;
	document.getElementById("loginForm").hidden = false;
}
