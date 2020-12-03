function getCompanyRides(id)
{
		let _id = id.substring(1);
		fetch("http://40.85.113.74:3000/data/getbills", {
				method: "POST",
				body: JSON.stringify({
					rideId: _id,
				}),
				headers: {
						"Content-type": "application/json; charset=UTF-8"
				}
		})
		.then(response => response.json())
		.then(json => {
			let content = document.getElementById("table_content");
			let tmp = "";
			json["bills"].forEach((e,i)=>{
					tmp +=  "<tr scope='row'>" +
					"<td scope='col'>"+e["name"]+"</td>" +
					"<td scope='col'>"+e["priceTTC"]+"</td>" +
					"<td scope='col'>"+e["priceHT"]+"</td>" +
					"<td scope='col'>" + e["type"]+"</td></tr>";
					content.innerHTML = tmp;
			})
		});
}
