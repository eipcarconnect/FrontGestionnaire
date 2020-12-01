function sendEmail()
{
	var form = document.getElementById("contactForm");
	fetch("http://127.0.0.1:8000/contactus", {
			method: "POST",
			body: JSON.stringify({
				from: form.email.value,
				subject: form.subject.value,
				content: form.message.value,
				name: form.name.value
			}),
			headers: {
					"Accept": "*/*",
					"Content-type": "application/json; charset=UTF-8"
			}
	})
	// .then(response => response.json())
	// .then(json => console.log(json));
}
