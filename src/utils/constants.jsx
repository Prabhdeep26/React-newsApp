// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

export const newsApi_BaseURL = 'https://newsapi.org/v2/everything?q="';

// We use a Template Literal here to inject the 'today' variable
export const newApi_filters = `"&from=${today}&sortBy=publishedAt&apiKey=`;
