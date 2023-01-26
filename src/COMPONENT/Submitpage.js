import React from "react";
const Submitpage = () => {
  return (
    <>
      <p>jniujik</p>

      {/* // const submitButton = (event) => { */}
      {/* //   event.preventDefault();

  //   console.log("com");
  //   let firstname = document.getElementById("fname").value;

  //   let lastname = document.getElementById("lname").value;

  //   let Email = document.getElementById("mail").value;

  //   let adharCard = document.getElementById("adhar").value;

  //   if (firstname === "" || firstname === null) { */}
      {/* //     console.log("name");
  //     document.getElementById("warning-1").innerHTML = "Enter your first name";
  //     return false;
  //   }
  //   console.log(firstname);

  //   if (lastname === "" || lastname === null) { */}
      {/* //     console.log("lname");
  //     document.getElementById("warning-2 ").innerHTML = "Enter your last name";
  //     return false;
  //   }
  //   console.log(lastname);

  //   if (!adharCard.match(adharregex) || adharCard.length < 12) { */}
      {/* //     document.getElementById("warning-3").innerHTML =
  //       " The aadhaar number must be 12 characters";
  //     return false;
  //   }
  //   console.log(adharCard);

  //   if (!Email.match(emilregex) || Email === null) { */}
      {/* //     console.log("hi");
  //     document.getElementById("warning-4").innerHTML = "invalid email";
  //     return false;
  //   } else { */}
      {/* //     document.getElementById("fname").value = "";
  //     document.getElementById("lname").value = "";
  //     document.getElementById("mail").value = "";
  //     document.getElementById("adhar").value = "";

  //     setImage(true);
  //     console.log("good");
  //   }
  //   console.log("hijk");
  // }; */}
      {/* if (image === false) */}
    </>
  );
};
export default Submitpage;
// const Form = () => {
//   const [email, setEmail] = useState();
//   const [erremail, setErremail] = useState(true);
//   const [image, setImage] = useState(false);
//   const navigate = useNavigate();

//   const turnLogin = () => {
//     navigate("/Login-page");
//   };

// setTimeout(() => {
//   console.log("good ");
//   turnLogin();
// }, 5000);

// clearTimeout(() => {
//   setTimeout(() => {
//     console.log("good ");
//     // turnLogin();
//   }, 5000);
// });
// const emilregex =
//   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// const adharregex =
//   /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;

// console.log("19");
// const hendlemail = (e) => {
//   console.log("sdfghj");
//   let email = e.target.value;
//   if (!email.match(emilregex)) {
//     setErremail(true);
//   } else {
//     setErremail(false);
//   }
// };
// const hendleadhar = (e) => {
//   let adhar = e.target.value;
//   if (!adhar.match(adharregex)) {
//     setErremail(true);
//   } else {
//     setErremail(false);
//   }
// };

// const submitButton = (event) => {
//   event.preventDefault();

//   console.log("com");
//   let firstname = document.getElementById("fname").value;

//   let lastname = document.getElementById("lname").value;

//   let Email = document.getElementById("mail").value;

//   let adharCard = document.getElementById("adhar").value;

//   if (firstname === "" || firstname === null) {
//     console.log("name");
//     document.getElementById("warning-1").innerHTML = "Enter your first name";
//     return false;
//   }
//   console.log(firstname);

//   if (lastname === "" || lastname === null) {
//     console.log("lname");
//     document.getElementById("warning-2 ").innerHTML = "Enter your last name";
//     return false;
//   }
//   console.log(lastname);

//   if (!adharCard.match(adharregex) || adharCard.length < 12) {
//     document.getElementById("warning-3").innerHTML =
//       " The aadhaar number must be 12 characters";
//     return false;
//   }
//   console.log(adharCard);

//   if (!Email.match(emilregex) || Email === null) {
//     console.log("hi");
//     document.getElementById("warning-4").innerHTML = "invalid email";
//     return false;
//   } else {
//     document.getElementById("fname").value = "";
//     document.getElementById("lname").value = "";
//     document.getElementById("mail").value = "";
//     document.getElementById("adhar").value = "";

//     setImage(true);
//     console.log("good");
//   }
//   console.log("hijk");
// };
// if (image === false)
// return (
//   <>
//     <div className="second-container">
//       <form
//  onSubmit={submitButton}
// >
//   <div className=" heading-box">Create an account</div>
//   <div className="all-input-box">
//     <div className="two-container">
//       <div className="div-3">
//         <label>First Name</label>
//         <input
//           type="text"
//           placeholder="First Name"
//           autoComplete="off"
//           // required
//           id="fname"
//         />

//         <span
//           id="warning-1"
//           style={{
//             fontSize: "10px",
//             color: "red",
//             // marginTop: "30px",
//           }}
//         ></span>
//       </div>

//       <div className="div-3">
//         <label>Last Name</label>
//         <input
//           type="text"
//           placeholder="Last Name"
//           autoComplete="off"
//           // required
//           id="lname"
//         />
//         <span
//           id="warning-2 "
//           style={{ fontSize: "9px", color: "red" }}
//         ></span>
//       </div>
//     </div>

//     <div className="div-3">
//       <label>Aadhar card</label>
//       <input
//         type="text"
//         placeholder="78XX 45XX 97XX"
//         autoComplete="off"
//         // required
//         id="adhar"
//       />
//       <span
//         id="warning-3"
//         style={{ fontSize: "9px", color: "red" }}
//       ></span>
//     </div>

//     <div className="div-3">
//       <label>Email</label>
//       <input
//         type="text"
//         placeholder="Enter your Email"
// autoComplete="off"
// required
//                 id="mail"
//                 onChange={hendlemail}
//                 value={email}
//               />
//               {erremail ? (
//                 <span id="warning-4" style={{ fontSize: "9px", color: "red" }}>
//                   invalid
//                 </span>
//               ) : (
//                 ""
//               )}
//             </div>

//             <div className="btn">
//               <button type="submit" id="submit">
//                 Create account
//               </button>
//             </div>
//           </div>
//           <div className=" atag-signin">
//             <span className="alert">
//               Already have an account ?
//               <a href="#" onClick={turnLogin}>
//                 login
//               </a>
//             </span>
//           </div>
//         </form>
//         <div className="bubble">
//           <img src={bubble} alt="img" className="logo" />
//         </div>
//       </div>
//     </>
//   );
//   console.log("complete");
//   return <Login />;
// };
// export default Form;
