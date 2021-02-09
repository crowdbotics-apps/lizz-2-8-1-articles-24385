import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://lizz-2-8-1-articles-24385.botics.co/modules/articles",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export function article_list(action) {
  return articlesAPI.get(`/article`)
}

export function article_read(action) {
  return articlesAPI.get(`/article/${action.id}/`)
}
