const date = new Date();

date.setDate(date.getDate() - 1);

const yesterday = date.toISOString().split("T")[0];

export const newsApi_BaseURL = 'https://newsapi.org/v2/everything?q="';

// Use the 'yesterday' variable here
export const newApi_filters = `"&from=${yesterday}&sortBy=publishedAt&apiKey=`;

export const newSearchApiFilter = `"&sortBy=publishedAt&apiKey=`;
