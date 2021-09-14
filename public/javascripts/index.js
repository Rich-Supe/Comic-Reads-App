const searchButton = document.querySelector('.search_btn');
let searchCriteria = document.getElementById('criteria');
let secondDropdown = document.getElementById('secondDropdown');
let selection = document.getElementById('searchTitle');
let title = document.getElementById('title')

title.addEventListener('change', () => {
    console.log(`title: ${title.value}`)
    // await fetch (`/comics/search/title/${title.value}`);
    // window.location.href = `/comics/search/title/${title.value}`
})
// searchCriteria.addEventListener('change', event => {
//     let criteria = searchCriteria.value;
//     switch (criteria) {
//         case 'keyword':
            // selection = document.getElementById('searchTitle');
            // selection.style.visibility = 'visible';
        //     break;
        // case 'title':
        //     secondDropdown.style.visibility = 'visible';
        //     selection = document.getElementById('title');
        //     selection.style.visibility = 'visible';
        //     break;
        // case 'author':
        //     secondDropdown.style.visibility = 'visible';
        //     selection = document.getElementById('author');
        //     selection.style.visibility = 'visible';
        //     break;
        // case 'genre':
        //     secondDropdown.style.visibility = 'visible';
        //     selection = document.getElementById('genre');
        //     selection.style.visibility = 'visible';
        //     break;
    // }
    
// })

searchButton.addEventListener("click", async (event)=> {
    console.log(`searchCriteria:  selection: ${selection.value}`)
    await fetch (`/comics/search/keyword/${selection.value}`);
    window.location.href = `/comics/search/keyword/${selection.value}`
})