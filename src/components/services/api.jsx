import axios from "axios";
const BASE_URL = "https://pixabay.com/api/";
const key = "15433400-0fb5bd3684436b571a53694dd";
export const fetchArticles = (query, page) =>
  axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
