
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
			document.getElementById("nbCars").innerHTML = "Véhicule : " +json["vehicles"].length;
			let content = document.getElementById("table_content")
			let tmp = "<tr>" +
				"  <th scope='col' style='font-size: 20px'>Immatriculation</th>" +
				"  <th scope='col' style='font-size: 20px'>Modèle</th>" +
				"  <th scope='col' style='font-size: 20px'>Kilométrage</th>" +
				"  <th scope='col' style='font-size: 20px'>À l'arrêt</th>" +
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
					console.log(e)
					tmp +=  "<tr scope='row'"+(e["pressure"] < 1.8 || e["brakeUsage"] > 75?"style='background-color: red'":"")+">" +
								"<td scope='col'>"+e["licencePlate"]+"</td>" +
								"<td scope='col'>"+e["model"]+"</td>" +
								"<td scope='col'>"+e["kilometer"]+" km</td>" +
								// "<td scope='col'>"+Math.ceil(Math.random()*10000).toString()+" km</td>" +
								"<td scope='col'><input onclick=\"return false;\" type=checkbox "+(e["breakPressed"]?"checked":"")+"></td>" +
							"</tr>";
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
		if (json.company !== undefined)
			document.getElementById("company").innerHTML = json.company;
		else
			document.getElementById("company").innerHTML = "";
		if (json.name !== undefined)
			document.getElementById("ManagerName").innerHTML = "<u>" + json.name + "</u>";
		else
			document.getElementById("ManagerName").innerHTML = "<a href='/login' style='padding: 4px; background-color: white; border-radius: 4px; color: black'>Login</a>";
	});
}

function logout()
{
	localStorage.setItem('token', "");
	window.location.reload()
}

getManagerInfos();

window.addEventListener( "pageshow", function ( event ) {
	var historyTraversal = event.persisted ||
		( typeof window.performance != "undefined" &&
			window.performance.navigation.type === 2 );
	if ( historyTraversal ) {
		// Handle page restore.
		window.location.reload();
	}
});
