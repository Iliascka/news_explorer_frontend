import { baseUrl, apiKey } from "./constants";

export const getNewsApi = async (keyword) => {
  try {
    const dateTo = new Date().toISOString().slice(0, 10);
    const dateFrom = new Date(new Date().setDate(new Date().getDate() - 7))
      .toISOString()
      .slice(0, 10);

    const res = await fetch(
      `${baseUrl}?q=${encodeURIComponent(keyword)}&apiKey=${apiKey}&from=${dateFrom}&to=${dateTo}&pageSize=${100}`,
    );

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
