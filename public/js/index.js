function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getCompanyVehicules()
{
		var token = localStorage.getItem('token');
		fetch("http://40.85.113.74:3000/data/manager/getvehicles", {
				method: "POST",
				body: JSON.stringify({
					token: token,
				}),
				headers: {
						"Content-type": "application/json; charset=UTF-8"
				}
		})
		.then(response => response.json())
		.then(json => {
			console.log(json)
			document.getElementById("company").innerHTML = json["vehicles"][0]["company"];
			document.getElementById("nbCars").innerHTML = json["vehicles"].length + " véhicule";
			let content = document.getElementById("table_content")
			let tmp = "<tr>" +
				"  <th scope='col'>Vitesse</th>" +
				"  <th scope='col'>Modèle</th>" +
				"  <th scope='col'>Température moteur</th>" +
				"  <th scope='col'>Température liquide de refroidissement</th>" +
				"  <th scope='col'>À l'arrêt</th>" +
				"</tr>";
			json["vehicles"].forEach((e,i)=>{
				console.log(e)
				tmp +=  "<tr scope='row'>" +
					"<td scope='col'>"+e["speed"]+" kms/h</td>" +
					"<td scope='col'>"+e["model"]+"</td>" +
					"<td style='justify-self: end' scope='col'>"+e["tempEngine"]+"°C</td>" +
					"<td scope='col'>"+e["tempCoolant"]+"°C</td>" +
					"<td scope='col'><input onclick=\"return false;\"/ type=checkbox";
					if (e["breakPressed"])
						tmp += "checked=true";
					tmp += "></td></tr>";
			})
			content.innerHTML = tmp;
		});
}

function getManagerInfos()
{
	var token = localStorage.getItem('token');
	fetch("http://40.85.113.74:3000/auth/manager/getinfo", {
			method: "POST",
			body: JSON.stringify({
				token: token,
			}),
			headers: {
					"Content-type": "application/json; charset=UTF-8"
			}
	})
	.then(response => response.json())
	.then(json => {
		console.log(json)
		document.getElementById("ManagerName").innerHTML = "<u>" + json.name + "</u>";
	});
}

function logout()
{
	localStorage.setItem('token', "");
}

getManagerInfos();
getCompanyVehicules();
