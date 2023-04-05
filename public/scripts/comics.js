let btn = document.querySelectorAll(".dropdown");
let editBtn = document.querySelectorAll('.editBtn');
for(let i=0; i<btn.length; i++){

  btn[i].addEventListener("change", async (event)=>{ // click
    const targetInfo =event.target.value;
    const bookId =event.target.id;
    let hasRead;
    let wantsToRead;

    if (targetInfo==="Want To Read"){
      wantsToRead = true
      hasRead = false
    }
    else if (targetInfo==="Has Read"){
      wantsToRead = false
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