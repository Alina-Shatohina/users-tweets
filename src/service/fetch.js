import axios from 'axios';

axios.defaults.baseURL = 'https://6442d41033997d3ef91a86fe.mockapi.io';


// export const fetchUsers = async () => {
//   const response = await axios.get('/users?page=1&limit=3');
//   return response.data;
// }




export const fetchUsers = async (page) => {
  try {
    const response = await axios.get(`/users?page=${page}&limit=3`);
  return response.data;
  } catch (e) {
    return alert(e.message)
  }

}


export const putUsers = async (id, isFollowing, followers) => {
  try {
    const response = await axios.put(`/users/${id}`,
     {following: isFollowing,
       followers: followers
     });
      return response.data;
   } catch (e) {
    return alert(e.message)
  }



 }
