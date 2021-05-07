const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

module.exports = {
  csrfProtection,
  asyncHandler,
};


// let ans = await res.json()

//       if(ans.post === "exists"){
//         const res = await fetch("http://localhost:8080/comics", {
//           method: 'PATCH',
//           body: JSON.stringify(body),
//           headers: {"Content-Type": "application/json",}
//         });
//       }
//     } catch (e){
//       console.log(e);
//     }
//   })