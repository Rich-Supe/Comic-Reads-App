const demoButton= document.querySelector(".demo_btn");

demoButton?.addEventListener("click", async (event)=>{
    const emailAddress = "demo@demo.com";
    const password = "password";
    const body = { emailAddress, password };
    try {
    const res = await fetch(`/user/demo`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  });