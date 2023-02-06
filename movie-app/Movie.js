
const form = document.querySelector('#form')
const moviesDiv= document.querySelector('.movies')


form.addEventListener('submit', async function (e) {
    e.preventDefault();
    moviesDiv.innerHTML = ""; // this will clear any potential previous results from the results div
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            moviesDiv.append(img); // we append the elements to the resultsDiv instead of the body here
        }
    }
}