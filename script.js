const apiKey = "46975f2a";
const container = document.getElementById("films-container");

async function getFilms() {
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=avengers&apikey=${apiKey}`);
        const data = await response.json();

        container.innerHTML = "";

        if (data.Search) {
            data.Search.forEach(film => {
                const div = document.createElement("div");
                div.classList.add("film");

                div.innerHTML = `
                    <img src="${film.Poster}" alt="${film.Title}">
                    <h3>${film.Title}</h3>
                    <p>${film.Year}</p>
                `;

                container.appendChild(div);
            });
        } else {
            container.innerHTML = "<p>Aucun film trouvé</p>";
        }

    } catch (error) {
        container.innerHTML = "<p>Erreur lors du chargement</p>";
        console.log(error);
    }
}

getFilms();