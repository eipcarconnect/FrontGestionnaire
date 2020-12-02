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
			console.log(json)
			let content = document.getElementById("trajets_content");
			let tmp = "";
			json["rides"].forEach((e,i)=>{
					console.log(e);
					tmp +=  "<tr scope='row'>" +
					"<td scope='col'>"+e["name"]+"</td>" +
					"<td scope='col'>"+e["vehicleLicencePlate"]+"</td>" +
					"<td scope='col'>"+e["userId"]+"</td>" +
					"<td scope='col'>"+e["start"]+"</td>" +
					"<td scope='col'>"+e["end"]+"</td>" +
					"<td scope='col'>"+e["date"]+"</td>" +
					"<td scope='col'><a href='factures/"+e["_id"]+"'/>Facture</a></td></tr>";
					content.innerHTML = tmp;
			})
		});
}

getCompanyRides();
