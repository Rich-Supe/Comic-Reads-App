const fetchReviews = async () => {
  const res = await fetch("../../db", {
    headers: {
      method: "GET"
    },
  });

  const { reviews } = await res.json();
  const reviewsContainer = document.querySelector(".reviews-container");
  const reviewsHtml = reviews.map(
    ({ review, user: { emailAddress } }) => `
      <div class="card">
        <div class="card-header">
          ${emailAddress}
        </div>
        <div class="card-body">
          <p class="card-text">${review}</p>
        </div>
      </div>
    `
  );
  reviewsContainer.innerHTML = reviewsHtml.join("");
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    await fetchReviews();
  } catch (e) {
    console.error(e);
  }
});

const form = document.querySelector(".create-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const review = formData.get("review");
  const body = { review };
  try {
    const res = await fetch("http://localhost:8080/comics/:id(\\d+)", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // if (res.status === 401) {
    //   window.location.href = "/login";
    //   return;
    // }
    if (!res.ok) {
      throw res;
    }
    form.reset();
    await fetchReviews();
  } catch (err) {
    console.log(err);
  }
});
