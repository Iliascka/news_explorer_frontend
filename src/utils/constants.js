export const baseUrl = import.meta.env.PROD
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

export const apiKey = import.meta.env.VITE_NEWS_API_KEY;
