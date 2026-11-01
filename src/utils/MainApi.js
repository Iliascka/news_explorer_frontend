import { baseUrl } from "./constants";

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

const request = async (url, options) {
  const res = await fetch(url, options);
  return handleServerResponse(res);
}

export function getItems() {
  return request(`${baseUrl}/articles`, {
    credentials:"include"
  });
}

export function saveArticle(article) {
  return new Promise((resolve) => {
    resolve({
      _id: "65g0394k8guis85nf76820s8",
      link: article.link,
      date: article.date,
      text: article.text,
      title: article.title,
      image: article.image,
      source: article.source,
      keyword: article.keyword,
    });
  });
}

export function deleteArticle(article) {
  return new Promise((resolve) => {
    resolve({ message: "Article deleted", article });
  });
}
