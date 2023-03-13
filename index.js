const jokeEl = document.getElementById("joke");
const btnEl = document.getElementById("btn");

const apiKey1 = "oIbbwGF1GmAaBCdDTSeF3w==MEIcnaSsJ3cmDbTy"

const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey1,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/randomword"

async function getWord(){
try {
    jokeEl.innerText = "Updating...";
    btnEl.Disabled = true;
    btnEl.innerText = "Getting Your Word...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.Disabled = false;
    btnEl.innerText = "Give me another Random Word";


        // Get the word from the API response
        const word = data.word;

        // Capitalize the first letter of the word
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    
        // Update the jokeEl with the capitalized word
        jokeEl.innerText = capitalizedWord;
    
    } catch (error) {
        jokeEl.innerText = "An error happened, check your network";
        btnEl.Disabled = false;
        btnEl.innerText = "give me a FREAKING word";
        console.log(error);
    }
}
btnEl.addEventListener("click", getWord)