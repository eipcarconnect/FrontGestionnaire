function getCompanyRides()
{
		var token = localStorage.getItem('token');
		fetch("https://40.85.113.74:3000/data/manager/getrides", {
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
			document.getElementById("nbRides").innerHTML = "Trajets : " + json["rides"].length;
			let content = document.getElementById("trajets_content");
			let tmp = "";
			let f = 0;

			let key = document.getElementById('search-trajet').value
			let selection = document.getElementById('sort-selection-trajet').value

			switch (selection) {
				case "Nom par ordre croissant":
					json["rides"].sort(function(a,b) {
						return b["name"] < a["name"]
					});
					break;
				case "Nom par ordre decroissant":
					json["rides"].sort(function(a,b) {
						return b["name"] > a["name"]
					});
					break;
				case "Véhicule par ordre croissant":
					json["rides"].sort(function(a,b) {
						return b["vehicleLicencePlate"] < a["vehicleLicencePlate"]
					});
					break;
				case "Véhicule par ordre decroissant":
					json["rides"].sort(function(a,b) {
						return b["vehicleLicencePlate"] > a["vehicleLicencePlate"]
					});
					break;
				case "Employé par ordre croissant":
					json["rides"].sort(function(a,b) {
						return b["userId"] < a["userId"]
					});
					break;
				case "Employé par ordre decroissant":
					json["rides"].sort(function(a,b) {
						return b["userId"] > a["userId"]
					});
					break;
				case "Date par ordre croissant":
					json["rides"].sort(function(a,b) {
						let parts_a = a["date"].split("/");
						let tmp_a = new Date(parts_a[2], parts_a[1] - 1, parts_a[0]);
						let parts_b = b["date"].split("/");
						let tmp_b = new Date(parts_b[2], parts_b[1] - 1, parts_b[0]);
						return tmp_b < tmp_a
					});
					break;
				case "Date par ordre decroissant":
					json["rides"].sort(function(a,b) {
						let parts_a = a["date"].split("/");
						let tmp_a = new Date(parts_a[2], parts_a[1] - 1, parts_a[0]);
						let parts_b = b["date"].split("/");
						let tmp_b = new Date(parts_b[2], parts_b[1] - 1, parts_b[0]);
						return tmp_b > tmp_a
					});
					break;
				default:
					break;
			}

			json["rides"].forEach((e,i)=>{
				if (e["name"].includes(key) || e["vehicleLicencePlate"].includes(key) || e["start"].includes(key) || e["end"].includes(key) || e["date"].includes(key) ) {
					tmp +=  "<tr scope='row'>" +
					"<td scope='col'>"+e["name"]+"</td>" +
					"<td scope='col'>"+e["vehicleLicencePlate"]+"</td>" +
					"<td scope='col' id="+e["userId"]+ f + "></td>" +
					"<td scope='col'>"+e["start"]+"</td>" +
					"<td scope='col'>"+e["end"]+"</td>" +
					"<td scope='col'>"+e["date"]+"</td>" +
					"<td scope='col'><a href='factures?id="+e["_id"]+"'>Facture</a></td></tr>";
					content.innerHTML = tmp;
					getUNIQUEUser(e["userId"], f);
					f+=1;
				}
			})
		});
}

function getUNIQUEUser(userID, f)
{
	var token = localStorage.getItem('token');
	fetch("https://40.85.113.74:3000/data/manager/getusers", {
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
		let content = document.getElementById("users_content");
		let tmp = "";
		json["users"].forEach((e,i)=>{
			if (userID == e["_id"])
				document.getElementById(userID + "" + f).innerHTML = e["name"];
		})
	});
}

getCompanyRides();
