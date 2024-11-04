async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        document.getElementById('advice').innerText = `"${data.slip.advice}"`;
    } catch (error) {
        document.getElementById('advice').innerText = "Oops! Something went wrong. Please try again.";
    }
}
