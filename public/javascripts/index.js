const searchButton = document.querySelector('.search_btn');
const genreDropdown = document.querySelector('.dropdown');

searchButton.addEventListener("click", async (event)=>{
    const selectedGenre = genreDropdown.value;
    console.log(selectedGenre);
    const body = {selectedGenre};
    await fetch ('/comics/search', {
        method:'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
          },
    })
})