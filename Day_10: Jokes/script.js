const jokeEL = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

async function generateJoke() {
    const params = {
        headers:{
            'Accept': 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com/', params)

    const data = await res.json();

    jokeEL.innerHTML = data.joke;

}

// function generateJoke() {
//     const params = {
//         headers:{
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', params).then(response => response.json()).then(data => {
//         jokeEL.innerHTML = data.joke;
//     });
// }


jokeBtn.addEventListener('click', generateJoke);
