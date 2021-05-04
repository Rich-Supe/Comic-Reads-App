const demoButton= document.querySelector(".demo_btn");

demoButton.addEventListener('click', (event)=>{
    console.log("This is the Demo Button!")
    const email = "demo@demo.com";
    const password = "password";
    const body = { email, password };
    try {
    const res = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw res;
      }
    //  window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  });
