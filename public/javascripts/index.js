const searchButton = document.querySelector('.search_btn');
let searchCriteria = document.getElementById('criteria');
let secondDropdown = document.getElementById('secondDropdown');
let selection;

searchCriteria.addEventListener('change', event => {
    let criteria = searchCriteria.value;
    switch (criteria) {
        case 'keyword':
            selection = document.getElementById('searchTitle');
            selection.style.visibility = 'visible';
            break;
        case 'title':
            secondDropdown.style.visibility = 'visible';
            selection = document.getElementById('title');
            selection.style.visibility = 'visible';
            break;
        case 'author':
            secondDropdown.style.visibility = 'visible';
            selection = document.getElementById('author');
            selection.style.visibility = 'visible';
            break;
        case 'genre':
            secondDropdown.style.visibility = 'visible';
            selection = document.getElementById('genre');
            selection.style.visibility = 'visible';
            break;
    }
    
})

searchButton.addEventListener("click", async (event)=> {
    console.log(`searchCriteria: ${searchCriteria.value} selection: ${selection.value}`)
    await fetch (`/comics/search/${searchCriteria.value}/${selection.value}`);
    window.location.href = `/comics/search/${searchCriteria.value}/${selection.value}`
})