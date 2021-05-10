const searchButton = document.querySelector('.search_btn');
const genreDropdown = document.querySelector('.dropdown');

searchButton.addEventListener("click", async (event)=> {
    const selectedGenre = genreDropdown.value;
    // console.log(selectedGenre);
    await fetch (`/comics/search/${selectedGenre}`);
    window.location.href = `/comics/search/${selectedGenre}`
})