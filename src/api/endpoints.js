//Important!
//Nu e safe sa lasi keys aici
const API_KEY = "a5de3aa8-e3ef-4f19-8d2e-ab095fba5595";

export const getNewsCategoriesEndpoint = (
  category,
  page = 1,
  pageSize = 20
) => {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page=${page}&page-size=${pageSize}`;

  return `https://content.guardianapis.com/search${queryParams}`;
};

export const getNewsDetailsEndpoint = (newsId) => {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;
  return `https://content.guardianapis.com/${newsId}${queryParams}`;
};
