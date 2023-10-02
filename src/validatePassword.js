// import cors from 'cors';
import axios from 'axios';

export default async function validaPassword(password){
  try {
    const result = await axios.post('https://localhost:7282/api/Password', { password })
    return result.data.valid   
  } catch (error) {
    console.log(error)
  }
}