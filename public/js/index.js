setTimeout(function(){
    window.location.reload(1);
}, 5000);

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

generate()