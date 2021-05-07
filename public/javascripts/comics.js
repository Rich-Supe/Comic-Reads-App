
let btn = document.querySelectorAll(".dropdown");

for(let i=0; i<btn.length; i++){

  /////////////////////////////////////////////////////////
  btn[i].addEventListener("click", async (event)=>{
    const targetInfo =event.target.value; //classList
    const bookId =event.target.id; // book id
    console.log(targetInfo)
    console.log(bookId)
    let hasRead;
    let wantToRead;
    //////////////////////////////////////////////////////////

    if (targetInfo==="Want To Read"){
      wantToRead = true
      hasRead = false
    }
    else if (targetInfo==="Has Read"){
      wantToRead = false
      hasRead = true
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

// const fetch = async () => {
//   const res = await fetch("http://localhost:8080/comics", {
//     headers: {
//       method: "POST",
//       headers: {"Content-Type": "application/json",}
//     },
//     let ans = await res.json()
//   });

// function selectElement(id, valueToSelect) {
//   let element = document.getElementById(id);
//   element.value = valueToSelect;
