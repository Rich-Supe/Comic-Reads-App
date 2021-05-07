let btn = document.querySelectorAll(".dropdown");
for(let i=0; i<btn.length; i++){
  
  btn[i].addEventListener("click", async (event)=>{
    const targetInfo =event.target.value;
    const bookId =event.target.id;
    console.log(targetInfo)
    console.log(bookId)
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
      const res = await fetch("http://localhost:8080/comics", {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        }
      });
      let ans = await res.json()
      console.log(ans.post)
      if(ans.post === "exists"){
        console.log(body)
        const res = await fetch("http://localhost:8080/comics", {
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
