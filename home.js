async function fetchJoke() {
    try {
        let response = await fetch("https://icanhazdadjoke.com/", {
            headers: { "Accept": "application/json" }
        });
        let data = await response.json();
        document.getElementById("joke").innerText = data.joke;
    } catch (error) {
        console.error("Error fetching joke:", error);
        document.getElementById("joke").innerText = "Failed to load joke.";
    }
}

// Run the function when the page loads
window.onload = fetchJoke;
