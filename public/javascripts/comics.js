let btn = document.querySelectorAll(".dropdown");
let editBtn = document.querySelectorAll('.editBtn');
for(let i=0; i<btn.length; i++){

  btn[i].addEventListener("change", async (event)=>{
    const targetInfo =event.target.value;
    const bookId =event.target.id;
    let hasRead;
    let wantsToRead;

    if (targetInfo==="Want To Read"){
      wantsToRead = true
      hasRead = false
    }
    else if (targetInfo==="Has Read"){
      wantsToRead = falsegit
      hasRead = true
    }

    const body = { targetInfo, bookId, hasRead, wantsToRead  };
    try {
      const res = await fetch("/comics", {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        }
      });
      let ans = await res.json()

      if(ans.post === "exists"){
        const res = await fetch("/comics", {
          method: 'PATCH',
          body: JSON.stringify(body),
          headers: {"Content-Type": "application/json",}
        });
      }
    } catch (e){
      console.log(e);
    }
  })
}

// editBtn.forEach(btn => {
//   btn.addEventListener('click', async (e) => {
//     e.preventDefault();
//     let id = e.target.id;
//     window.location.href = `/comics/:id(\\d+)/edit/${id}`;
//   })
// });

// const editBtn = document.querySelectorAll('.editBtn');

// editBtn.forEach(btn => {
//   btn.addEventListener('click', async (e) => {
//     e.preventDefault();
//     const url = window.location.href;
//     const comicString = 'comics';
//     let cIndex;
//     for (let i = 0; i < url.length; i++) {
//       let j = i + 5;
//       let urlString = url.slice(i, j);
//       if (urlString === comicString) {
//         cIndex = j + 1;
//         break;
//       }
//     }
//     const comicId = 4;
//     // const comicId = url.slice(cIndex, cIndex + 1);
//     window.location.href = `./comics/${comicId}/edit/${btnId}/asdfajshdlflkjh`;
//   })
// });
