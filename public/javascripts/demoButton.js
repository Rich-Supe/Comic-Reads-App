
const demoButton= document.querySelector(".demo_btn");

demoButton.addEventListener("click", async (event)=>{
    console.log("This is the Demo Button!")
    const emailAddress = "demo@demo.com";
    const password = "password";
    const body = { emailAddress, password };
    try {
    const res = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.body)
      // input(type='hidden' name='_csrf' value=csrfToken)
    //  window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  });
