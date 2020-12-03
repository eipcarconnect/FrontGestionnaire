function getUsers()
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
			document.getElementById("nbUsers").innerHTML = "Employés : " + json["users"].length;
			let content = document.getElementById("users_content");
			let tmp = "";

			let key = document.getElementById('search-user').value
			let selection = document.getElementById('sort-selection-user').value

			switch (selection) {
				case "Nom par ordre croissant":
					json["users"].sort(function(a,b) {
						return b["name"] < a["name"]
					});
					break;
				case "Nom par ordre decroissant":
					json["users"].sort(function(a,b) {
						return b["name"] > a["name"]
					});
					break;
				case "Email par ordre croissant":
					json["users"].sort(function(a,b) {
						return b["email"] < a["email"]
					});
					break;
				case "Email par ordre decroissant":
					json["users"].sort(function(a,b) {
						return b["email"] > a["email"]
					});
					break;
				default:
					break;
			}

			json["users"].forEach((e,i)=>{
				if (e["name"].includes(key) || e["email"].includes(key) ) {
					tmp += "<tr scope='row'>" +
						"<td scope='col'>" + e["name"] + "</td>" +
						"<td scope='col'>" + e["email"] + "</td></tr>";
					content.innerHTML = tmp;
				}
			})
		});
}

getUsers();
