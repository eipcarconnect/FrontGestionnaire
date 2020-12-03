function sendEmail()
{
	var form = document.getElementById("contactForm");
	fetch("http://127.0.0.1:8000/contactus?email=" + form.email.value + "&subject=" + form.subject.value + "&content=" + form.message.value + "&name=" + form.name.value, {
			method: "GET",
			headers: {
					"Accept": "*/*",
					"Content-type": "application/json; charset=UTF-8"
			}
	})
	.then(document.getElementById("contactForm").reset())
	.then(document.getElementById("alertMessage").hidden = false)
}
