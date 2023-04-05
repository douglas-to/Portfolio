// Api Github

const ul = document.querySelector("ul");

function reposGithub(){

	fetch("https://api.github.com/users/douglas-to/repos")
	.then(async res => {
		
		if(!res.ok){
			throw new Error(res.status);
		}

		var data = await res.json();

		data.map(item => {
			let li = document.createElement("li");
			li.className = 'font-style-title fs-5';

			li.innerHTML = `
				<h5 class="mt-5">${item.name}</h5>
				<p>Data de criação: ${
					Intl.DateTimeFormat('pt-br')
					.format(new Date(item.created_at))
				}</p>
				<a class="buttonClass rounded-4 fs-6 font-style-title" href="${item.html_url}"><i class="fa-brands fa-github me-2"></i> Ver projeto</a>
			`


			ul.appendChild(li);
		})



	}).catch(e => console.log(e))
}

reposGithub();

// Scroll Effect

function scrollEffect(){
	
	window.sr = ScrollReveal({ reset: true });

	sr.reveal(".section1", { delay: 250 });
	sr.reveal(".section2", { delay: 250 });
	sr.reveal(".section3", { delay: 250 });
	sr.reveal(".section4", { delay: 250 });
	sr.reveal(".footer", { delay: 250 });	
}

scrollEffect();

