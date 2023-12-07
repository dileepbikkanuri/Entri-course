document.getElementById("searchButton").addEventListener("click", function() {
    var searchInput = document.getElementById("searchInput").value;
    search(searchInput);
});

function search(query) {
    var apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    var endpoint = 'https://api.cognitive.microsoft.com/bing/v7.0/search';
    var url = `${endpoint}?q=${encodeURIComponent(query)}`;

    fetch(url, {
        headers: {
            'Ocp-Apim-Subscription-Key': apiKey
        }
    })
    .then(response => response.json())
    .then(data => displayResults(data))
    .catch(error => console.error('Error:', error));
}

function displayResults(data) {
    var resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";

    if (data.webPages && data.webPages.value.length > 0) {
        data.webPages.value.forEach(function(result) {
            var resultItem = document.createElement("div");
            resultItem.innerHTML = `<h3><a href="${result.url}" target="_blank">${result.name}</a></h3>
                                    <p>${result.snippet}</p>`;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found</p>";
    }
}
