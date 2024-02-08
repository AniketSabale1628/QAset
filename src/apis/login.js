// import axios from "axios";

// const backendBaseUrl = process.env.REACT_APP_BACKEND_URL;

// export const login = async (email , password)=>{
//     try{
//         const reqPayload = {email , password};
//         const reqUrl = `${backendBaseUrl}/login`;
//         const response = await axios.post(reqPayload,reqUrl);
//         localStorage.setItem("token",response.data.token);
//         return response.data;
//     }
//     catch(error){
//         console.log(error);
//         alert("something wents wrong");
//     }
// }