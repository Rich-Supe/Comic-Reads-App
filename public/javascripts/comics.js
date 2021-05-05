// window.addEventListener("load", (event)=>{
let btn = document.querySelectorAll(".btn_read");
for(let i=0; i<btn.length; i++){
  btn[i].addEventListener("click", async (event)=>{
    const targetInfo =event.target.className //classList
    const targetValue =event.target.value //maybe use target value instead
    const body = { targetInfo };
    try {
      const res = await fetch("http://localhost:8080/comics", {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        }
      });

    if (btn[i].innerText==="Want To Read"){
      // console.log("Front End: I will Change HTML and change CSS")
      btn[i].innerText= "Has Read"
    }
      else if (btn[i].innerText==="Has Read"){
      // console.log("Change to Another Button HTML and change CSS")
      btn[i].innerText = "Want To Read"
      }
  }catch (e) {
      console.error(e)
  }
});
}
