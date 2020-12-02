function addVehicule() {
		var token = localStorage.getItem('token');
		var form = document.getElementById("addVehiculeForm");
		fetch("http://40.85.113.74:3000/data/manager/addvehicle", {
		    method: "POST",
		    body: JSON.stringify({
					token: token,
					model: form.model.value,
					licencePlate: form.plate.value
		    }),
		    headers: {
		        "Content-type": "application/json; charset=UTF-8"
		    }
		})
		.then(response => response.json())
		.then(json => {
			if (json.success) {
				alert("Véhicule créé avec succès.")
				form.reset()
			} else
				alert("Une erreur est survenue.\n" + json.error)
		});
}
