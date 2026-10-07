import { baseUrl, apiKey } from "./constants";

export const getNewsApi = async (keyword) => {
  try {
    const res = await fetch(`${baseUrl}?q=${keyword}&apiKey=${apiKey}`);

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
