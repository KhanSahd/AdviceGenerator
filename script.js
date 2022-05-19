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
        advice.innerHTML += jsonResponse.slip.id;
        quote.innerHTML = `"${jsonResponse.slip.advice}"`;
    }
}

button.onclick = gettingQuote;

window.onload = gettingQuote;