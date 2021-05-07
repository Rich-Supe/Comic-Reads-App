

const shelfButton = document.querySelectorAll(".shelf_btn");
shelfButton.forEach(button => {
    button.addEventListener("click", async (e) => {
        // const userId = 1
        const shelfButtonId = e.target.id
        console.log('This comic was added to your shelf!');
        const body = {shelfButtonId};
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

