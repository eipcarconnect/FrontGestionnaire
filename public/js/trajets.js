function getCompanyRides()
{
		var token = localStorage.getItem('token');
		fetch("http://40.85.113.74:3000/data/manager/getrides", {
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
			json["rides"].forEach((e,i)=>{
					tmp +=  "<tr scope='row'>" +
					"<td scope='col'>"+e["name"]+"</td>" +
					"<td scope='col'>"+e["vehicleLicencePlate"]+"</td>" +
					"<td scope='col' id="+e["userId"]+ f + "></td>" +
					"<td scope='col'>"+e["start"]+"</td>" +
					"<td scope='col'>"+e["end"]+"</td>" +
					"<td scope='col'>"+e["date"]+"</td>" +
					"<td scope='col'><a href='factures/"+e["_id"]+"'/>Facture</a></td></tr>";
					content.innerHTML = tmp;
					getUNIQUEUser(e["userId"], f);
					f+=1;
			})
		});
}

function getUNIQUEUser(userID, f)
{
	var token = localStorage.getItem('token');
	fetch("http://40.85.113.74:3000/data/manager/getusers", {
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
