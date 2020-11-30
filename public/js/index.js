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
			document.getElementById("nbCars").innerHTML = json["vehicles"].length + "véhicule";
			let content = document.getElementById("table_content")
			content.innerHTML = "<tr>" +
				"                <th>Vitesse</th>" +
				"                <th>Model</th>" +
				"                <th>Température moteur</th>" +
				"                <th>Température liquide de refroidissement</th>" +
				"                <th>À l'arrêt</th>" +
				"            </tr>"
			json["vehicles"].forEach((e,i)=>{
				console.log(e)
				let tmp =  "<tr>" +
					"<td>"+e["speed"]+" kms/h</td>" +
					"<td>"+e["model"]+"</td>" +
					"<td style='justify-self: end'>"+e["tempEngine"]+"°C</td>" +
					"<td>"+e["tempCoolant"]+"°C</td>" +
					"<td><input type=checkbox";
					if (e["breakPressed"])
						tmp += "checked=true";
					tmp += "></td></tr>";
					content.innerHTML += tmp;
			})
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
	.then(json => {console.log(json)});
}

function logout()
{
	localStorage.setItem('token', "");
}

getManagerInfos();
getCompanyVehicules();
