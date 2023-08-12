import { AXIOS } from "./axios";

export const getUsers = async () => {
  try {
    const options = {
      url: `/users.json`,
      method: 'GET'
  }
    const { data } = await AXIOS(options)
    return data || []
  } catch (error) {
    console.error(error.message);
  }
}