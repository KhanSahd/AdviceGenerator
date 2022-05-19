const quote = document.getElementById('quote');
const advice = document.getElementById('advice');
const button = document.getElementById('icon');

const gettingQuote = async () => {
    if (quote.innerHTML != ''){
        quote.innerHTML = '';
        advice.innerHTML = 'Advice #'
    }
    const response = await fetch('https://api.adviceslip.com/advice');
    if (response){
        const jsonResponse = await response.json()
        advice.innerHTML += await jsonResponse.slip.id;
        quote.innerHTML = await `"${jsonResponse.slip.advice}"`;
    }
}

button.addEventListener('click', gettingQuote)

window.addEventListener('load', gettingQuote)