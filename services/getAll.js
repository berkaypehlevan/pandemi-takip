import { myAxios } from "../constants";

async function getAll() {
  try {
    const { data } = await myAxios.get(`/countries/turkey`);
    return data;
  } catch (error) {
    return error;
  }
}

export default getAll;
