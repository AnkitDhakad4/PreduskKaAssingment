import axios from "axios"


export const fetchProjectsBySkill = async (skill) => {
  try {
    const res = await axios.get(
      `https://predusk-ka-assingment-dywx.vercel.app/api/v1/projects?skill=${skill}`
    );
  
    // console.log("Response from the api is",res.data.data)
    const data = res.data.data;
  
  
    return data; // ✅ return ONLY array
  } catch (error) {
    console.log("Error in api.js",error.message)
  }
};
