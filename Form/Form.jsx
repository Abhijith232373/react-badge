// import React, { useState } from "react";

import { useState } from "react";

// function Form() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [data, setData] = useState([]);
//   const [sub, setSub] = useState(true);

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     setData([...data, { username: name, usermail: email, userpass: pass }]);
//     setSub(false);
//   };

//   const goBack = () => {
//     setSub(true);
//   };

//   return (
//     <div>     
//       {sub ? (
//         <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
//           <form style={{border:'1px solid black ', padding:'20px'}} onSubmit={handleSubmit}>
//             <h1>Login</h1>
//             <label>Name:</label>
//             <input style={{width:'100%'}} type="text" required onChange={(e) => setName(e.target.value)} />
//             <br /><br />

//             <label>Email:</label>
//             <input style={{width:'100%'}} type="email" required onChange={(e) => setEmail(e.target.value)} />
//             <br /><br />

//             <label>Password:</label>
//             <input style={{width:'100%'}} type="password" required onChange={(e) => setPass(e.target.value)} />
//             <br /><br />
//             <div style={{ display:'flex',justifyContent:'center'}}>
//             <button  type="submit">Submit</button></div>
//           </form>
//         </div>
//       ) : (
//         <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
//           <div>
//           <h1>User List</h1>
//           <ul>
//             {data.map((val, index) => (
//               <li key={index}>
//                 <p>Name : {val.username}</p>
//                 <p>Gmail : {val.usermail}</p>
//               </li>
//             ))}
//           </ul>
//           <button  onClick={goBack}>Go Back</button>
//         </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Form;




function Form(){
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [pass,setPass]=useState("")
  const [data,setdata]=useState([])
  const [sub,setsub]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault()
    setdata([...data,{username:name,useremail:email,userpass:pass}])
    setsub(false)
  };

  const goBack=()=>{
    setsub(true);
  };
return(
  <div>

    {sub===false? (<div>
      {/* form  */}
      </div>):(<div>
        {/* user data */}
        </div>)
    }
  </div>
)

}
export default Form;