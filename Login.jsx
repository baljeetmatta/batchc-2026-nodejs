import { useState } from "react";

// const Login=()=>{

//     const [username,setUsername]=useState("");

//     const usernameHandler=(e)=>{
//         setUsername(e.target.value);

//     }
//      const [password,setPassword]=useState("");

//     const passwordHandler=(e)=>{
//         setPassword(e.target.value);

//     }
//     const clickHandler=()=>{
//         console.log("Data submit",username,password);


//     }
//     return (
//         <div>
//             <div>
//                 <div>Username</div>
//                 <div><input type="text" value={username} onChange={usernameHandler}/></div>
//             </div>
//              <div>
//                 <div>Password</div>
//                 <div><input type="password" value={password} onChange={passwordHandler}/></div>
//             </div>
//             <div>
//                 <button onClick={clickHandler}>Login</button>
//             </div>
//         </div>

//     )
// }

const Login=()=>{
const [error,setError]=useState("")

    const submitHandler=()=>{

        console.log(formData);
        fetch("http://localhost:5000/loginReact",{
            headers:{
                "content-type":"application/json"
            },
            method:"POST",
            body:JSON.stringify(formData)

        }).then ((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response)
            if(response.success==false)
                setError(response.message);
            
        })

    }
    const [formData,setFormData]=useState({});
    // {username:   , password:}

    const changeHandler=(e)=>{

        setFormData({...formData,[e.target.name]:e.target.value})

    }
    return (
       <div>
        {error}
             <div>
                 <div>Username</div>
                 <div><input name="username" type="text" onChange={changeHandler} /></div>  

              </div>
              <div>
                 <div>Password</div>
                 <div><input name="password" type="password" onChange={changeHandler}/></div>  

              </div>
              <div>
                <button onClick={submitHandler}>Login</button>
              </div>
        </div>
    )
}
export default Login;
