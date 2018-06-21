// @flow
export const swaggerBase = 'http://react-cdp-api.herokuapp.com';
export const swagger = async (settings :{
  sortBy?: string,
  sortOrder?: string,
  search?: string,
  searchBy?: string
} = {}) :Promise<any> => {
  const {
    sortBy,
    sortOrder,
    search,
    searchBy,
  } = settings;
  const response = await fetch(`${swaggerBase}/movies?search=${search || ''}&searchBy=${searchBy || 'title'}&sortBy=${sortBy || 'title'}&sortOrder=${sortOrder || 'desc'}`);
  return response.json();
};
export const single = async (id: number) :Promise<any> => {
  const response = await fetch(`${swaggerBase}/movies/${id}`);
  return response.json();
};
export default swagger;
