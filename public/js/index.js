// setTimeout(function(){
//     window.location.reload(1);
// }, 5000);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generate() {
    let content = document.getElementById("table_content")
    for(let i = 0; i < 30; ++i) {
        let imatriculation = "" + String.fromCharCode(65 + getRandomInt(25)) + String.fromCharCode(65 + getRandomInt(25)) + "-" + getRandomInt(999).toString() + "-" + String.fromCharCode(65 + getRandomInt(25)) + String.fromCharCode(65 + getRandomInt(25))
        let dist = getRandomInt(100000)
        let fuel = getRandomInt(100)
        let elec = getRandomInt(100)
        content.innerHTML +=    "<tr>" +
            "<td>"+imatriculation+"</td>" +
            "<td>"+dist.toString()+"</td>" +
            "<td>"+fuel.toString()+"</td>" +
            "<td>"+elec.toString()+"</td>" +
            "</tr>"
    }
}

function getCompanyVehicules()
{
		var token = localStorage.getItem('token');
		var form = document.getElementById("loginForm");
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
		.then(json => console.log(json));
}

generate();
