const { User, Comics } = db;
// Stephen - Waiting on how button classes will be laid out

// This function loads the user's current read and want to read status////////////////////////////////
// on the comics page I will need to check if that user's read status and change color and innerText
window.addEventListener("DOMContentLoaded", async (event)=>{
    // Session {
    //     cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true },
    //     auth: { userId: 11 }
    //   }
    const {userId: { id }} = await res.json();
    const body = { id };
    console.log(`${body} is this working`)
    try {
        //need to fleshout the profile page so I can block out the "has read"
        const res = await fetch("http://localhost:8080/comics", {
          method: "GET",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
        }
    });

} catch (e) {
    console.error(e)
}



});
//     });
//     const comics = await Comics.findAll();
//     const data = await res.json();
//     console.log(data)
//     if (data){ // need to change conditional
// // if the res of the body "hasread" then for each of the books on the page with the corresponding id
// //greyout the buttons
//         const button= document.querySelector(".btn");
//         button.innerText = "Read"
//         button.style.backgroundColor = "grey";
//     }
//     } catch (err) {
//             console.log(err)
//     }

// });
// //On click if switch between has Read and Want to Read + updated Database//--> comics.js
// const button= document.querySelector(".btn");

// button.addEventListener("click", (event)=>{
//     console.log("This is the comics page and working on the want to read functionality")
//     try {
//         //need to fleshout the profile page so I can block out the "has read"
//         const res = await fetch("http://localhost:8080/user/comic", {
//           method: "POST",
//           body: JSON.stringify(body),
//           headers: {
//             "Content-Type": "application/json",
//             // "Authorization": `Bearer ${localStorage.getItem("TWITTER_LITE_ACCESS_TOKEN")}`
//           },
//         });
//         //if my button is 'hasRead" change to "wantToRead"
//         // else if button is "wantToRead" change to 'hasRead"
//         const data = await res.json();
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//       }
//     });
