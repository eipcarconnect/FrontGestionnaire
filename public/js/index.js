
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
				"  <th scope='col'>Immatriculation</th>" +
				"  <th scope='col'>Modèle</th>" +
				"  <th scope='col'>Kilométrage</th>" +
				"  <th scope='col'>À l'arrêt</th>" +
				"</tr>";
			let key = document.getElementById('search').value
			let selection = document.getElementById('sort-selection').value

			switch (selection) {
				case "Immatriculation par ordre croissant":
					json["vehicles"].sort(function(a,b) {
						return b["licencePlate"] < a["licencePlate"]
					});
					break;
				case "Immatriculation par ordre decroissant":
					json["vehicles"].sort(function(a,b) {
						return b["licencePlate"] > a["licencePlate"]
					});
					break;
				case "Modele par ordre croissant":
					json["vehicles"].sort(function(a,b) {
						return b["model"] < a["model"]
					});
					break;
				case "Modele par ordre decroissant":
					json["vehicles"].sort(function(a,b) {
						return b["model"] > a["model"]
					});
					break;
				case "Kilometrage par ordre croissant":
					json["vehicles"].sort(function(a,b) {
						return b["kilometer"] < a["kilometer"]
					});
					break;
				case "Kilometrage par ordre decroissant":
					json["vehicles"].sort(function(a,b) {
						return b["kilometer"] > a["kilometer"]
					});
					break;
				default:
					break;
			}

			json["vehicles"].forEach((e,i)=>{
				if (e["licencePlate"].includes(key) || e["model"].includes(key) )
					tmp +=  "<tr scope='row'>" +
						"<td scope='col'>"+e["licencePlate"]+"</td>" +
						"<td scope='col'>"+e["model"]+"</td>" +
						"<td scope='col'>"+e["kilometer"]+" km</td>" +
						// "<td scope='col'>"+Math.ceil(Math.random()*10000).toString()+" km</td>" +
						"<td scope='col'><input onclick=\"return false;\" type=checkbox "+(e["breakPressed"]?"checked":"")+"></td></tr>";
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
