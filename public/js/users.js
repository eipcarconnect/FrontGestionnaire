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
			console.log(json);
			let content = document.getElementById("users_content");
			let tmp = "";
			json["users"].forEach((e,i)=>{
					console.log(e);
					tmp +=  "<tr scope='row'>" +
					"<td scope='col'>"+e["name"]+"</td>" +
					"<td scope='col'>"+e["email"]+"</td></tr>";
					content.innerHTML = tmp;
			})
		});
}

getUsers();
