document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchTerm').value.trim();
    if (searchTerm.length > 0) {
        const searchEngines = [
            `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`,
            `https://www.bing.com/search?q=${encodeURIComponent(searchTerm)}`,
            `https://duckduckgo.com/?q=${encodeURIComponent(searchTerm)}`,
            `https://search.yahoo.com/search?p=${encodeURIComponent(searchTerm)}`,
            `https://www.ecosia.org/search?q=${encodeURIComponent(searchTerm)}`,
            `https://www.qwant.com/?q=${encodeURIComponent(searchTerm)}`
        ];

        // Ouvrir chaque moteur de recherche dans un nouvel onglet
        searchEngines.forEach(function(url) {
            chrome.tabs.create({ url: url });
        });
    }
});
