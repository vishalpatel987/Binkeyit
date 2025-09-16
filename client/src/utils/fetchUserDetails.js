// import Axios from "./Axios"
// import SummaryApi from "../common/SummaryApi"

// const fetchUserDetails = async()=>{
//     try {
//         const response = await Axios({
//             ...SummaryApi.userDetails
//         })
//         return response.data
//     } catch (error) {
//         console.log(error)
//     }
// }

// export default fetchUserDetails


import Axios from "./Axios"
import SummaryApi from "../common/SummaryApi"

const fetchUserDetails = async () => {
  try {
    const response = await Axios({
      ...SummaryApi.userDetails
    })
    return response.data
  } catch (error) {
    console.error("Fetch user failed:", error?.response?.data?.message || error.message);
    return null;
  }
}

export default fetchUserDetails