function getCompanyRides(id)
{
		fetch("http://40.85.113.74:3000/data/getbills", {
				method: "POST",
				body: JSON.stringify({
					rideId: id,
				}),
				headers: {
						"Content-type": "application/json; charset=UTF-8"
				}
		})
		.then(response => response.json())
		.then(json => {
			console.log(json);
			})
}
