import { baseUrl } from "./constants";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const request = async (url, options) => {
  const res = await fetch(url, options);
  return handleServerResponse(res);
};

export function getItems() {
  return request(`${baseUrl}/articles`, {
    credentials: "include",
  });
}

export function saveArticle(article) {
  return request(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(article),
  });
}

export function deleteArticle(article) {
  return request(`$baseUrl/articles/${article._id}`, {
    method: "DELETE",
    credentials: "include",
  });
}
