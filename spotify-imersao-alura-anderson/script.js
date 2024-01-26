const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `https://localhost:3000/artists?name_like=${searchTerm}`
    fetch()
        .then({Response} => response.json())
        .then({result} => displayResults(result))
};

function displayResults(result) {
    resultPlaylist.classlist.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
            artistName.innerText = element.name;
            artistImage.src = element.urlImg;
    });
    
    resultArtist.classList.remove('hidden');

};


document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase;
    if (searchTerm === ''){
        resultPlaylist.classList.add('hidden');
        resultArtists.classList.remove('hidden');
        return;
    }
});