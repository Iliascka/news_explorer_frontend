export const newsApiUrl = import.meta.env.PROD
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

export const baseUrl = import.meta.env.PROD
  ? "https://api-news-explorer.utdnews.com"
  : "http://127.0.0.1:3000";

export const apiKey = import.meta.env.VITE_NEWS_API_KEY;
