// window.addEventListener("load", (event)=>{
let btn = document.querySelectorAll(".btn_read");
let reviewBtn = document.querySelectorAll('.review_btn');

for(let i=0; i<btn.length; i++){
  btn[i].addEventListener("click", async (event)=>{
    const targetInfo =event.target.className; //classList
    const bookId =event.target.id; // book id
    let hasRead;
    let wantToRead;
    //////////////////////////////////////////////////////////
    if (btn[i].innerText==="Want To Read"){
      // console.log("Front End: I will Change HTML and change CSS")
      btn[i].innerText= "Has Read"
      wantToRead = true
      hasRead = false
    }
      else if (btn[i].innerText==="Has Read"){
      // console.log("Change to Another Button HTML and change CSS")
      btn[i].innerText = "Want To Read"
      hasRead = true
      wantToRead = false
      }
/////////////////////////////////////////////////////////////////
    const body = { targetInfo, bookId, hasRead, wantToRead  };
    try {
      const res = await fetch("http://localhost:8080/comics", {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        }
      });
      res.json();
  }catch (e) {
      console.error(e)
  }
});
}
