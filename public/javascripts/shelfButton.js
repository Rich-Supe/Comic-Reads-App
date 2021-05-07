
const shelfButton = document.querySelectorAll(".shelf_btn");

shelfButton.forEach(button => {
    button.addEventListener("click", async (e) => {
        // const userId = 1
        const shelfButtonId = e.target.id
        console.log('This comic was added to your shelf!');
        const body = {shelfButtonId};
        console.log('=======', body)
    try {
        const res = await fetch(`/user/1`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        }
        });

        button.innerHTML = 'Added!'
    } catch (e){
        console.log(e);
    }
    })
})


const removeShelfButton = document.querySelectorAll(".remove-shelf_btn");

removeShelfButton.forEach(button => {
    button.addEventListener("click", async (e) => {
        // const userId = 1
        const removeShelfButtonId = e.target.id
        console.log('This comic was removed from your shelf!');
        const shelfName = button.parentNode.parentNode.parentNode.id
        const body = {removeShelfButtonId, shelfName};
    try {e
        const res = await fetch(`/user/1`, {
        method: 'DELETE',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        }
        });
        button.innerHTML = 'Removed!'
        // Location.reload();
        window.location.href = '/user/1'
    } catch (e){
        console.log(e);
    }
    })
})

