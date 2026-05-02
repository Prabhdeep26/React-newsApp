const date = new Date();

date.setDate(date.getDate() - 1);

const yesterday = date.toISOString().split("T")[0];

const newsApi_BaseURL = 'https://newsapi.org/v2/everything?q="';

// Use the 'yesterday' variable here
const newApi_filters = `"&from=${yesterday}&sortBy=publishedAt&apiKey=`;

const newSearchApiFilter = `"&sortBy=publishedAt&apiKey=`;

module.exports = { newsApi_BaseURL, newApi_filters, newSearchApiFilter };
