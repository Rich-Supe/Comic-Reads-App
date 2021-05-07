// const submitBtn = document.querySelector(".submitReviewBtn");
// const commentValue = document.querySelector('.comment').value;
// submitBtn.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const body = { commentValue };
//   try {
//     const res = await fetch("/comics/:id(\\d+)/review", {
//       method: "POST",
//       body: JSON.stringify(body),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     // console.log(res);
//     console.log('bro')
//     if (!res.ok) {
//       throw res;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// const editBtn = document.querySelectorAll('.editBtn');

// editBtn.forEach(btn => {
//   btn.addEventListener('click', async (e) => {
//     e.preventDefault();
//     const url = window.location.href;
//     const comicString = 'comics';
//     let cIndex;
//     for (let i = 0; i < url.length; i++) {
//       let j = i + 6;
//       let urlString = url.slice(i, j);
//       if (urlString === comicString) {
//         cIndex = j;
//         break;
//       }
//     }
//     const comicId = url.slice(cIndex, 1);
//     console.log(url);
//     console.log(comicId, '================================================');
//     window.location.href = `/${comicId}/edit/${btn.id}/`;
//   })
// });
