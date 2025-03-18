import AxiosRequest from "../axios/request";

const registerUser = async (userData) => {
  console.log("usersData:",userData)
    try {
        const response = await AxiosRequest.post('http://localhost:3001/user/register', userData);
         console.log("userdata:",userData)
        return response.data;
       
    }catch (error) {
      // console.error('Error:', error); 
      throw error?.response?.data || { error: error.message || "Registration failed" };
  }
  
};

export default registerUser;
