// window.addEventListener("load", (event)=>{
let btn = document.querySelectorAll(".btn_read");
for(let i=0; i<btn.length; i++){
  btn[i].addEventListener("click", async (event)=>{
    const targetInfo =event.target.className; //classList
    const bookId =event.target.id; // book id
    let hasRead;
    let wantToRead;
    //////////////////////////////////////////////////////////
    if (btn[i].innerText==="Want To Read"){
      btn[i].innerText= "Has Read"
      wantToRead = true
      hasRead = false
    }
      else if (btn[i].innerText==="Has Read"){
      btn[i].innerText = "Re-Read"
      wantToRead = false
      hasRead = true
      }
        else if (btn[i].innerText==="Re-Read"){
          btn[i].innerText = "Want To Read"
          wantToRead = true
          hasRead = true
          }
/////////////////////////////////////////////////////////////////
    const body = { targetInfo, bookId, hasRead, wantToRead  };
      console.log(body)
    try {
      const res = await fetch("http://localhost:8080/comics", {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {"Content-Type": "application/json",}
      });
      let ans = await res.json()

      if(ans.post === "exists"){
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
