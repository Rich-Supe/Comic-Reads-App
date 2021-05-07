const submitBtn = document.querySelector(".submitReviewBtn");
const commentValue = document.querySelector('.comment').value;
submitBtn.addEventListener("submit", async (e) => {
  e.preventDefault();
  const body = { commentValue };
  try {
    const res = await fetch("/comics/:id(\\d+)/review", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res);
    if (!res.ok) {
      throw res;
    }
  } catch (err) {
    console.log(err);
  }
});
