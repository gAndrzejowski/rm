export const swaggerBase = 'http://react-cdp-api.herokuapp.com';
export const swagger = async (settings={}) => {
    const {
        sortBy,
        sortOrder,
        search,
        searchBy,
    } = settings;
    const response = await fetch(`${swaggerBase}/movies?search=${search || ''}&searchBy=${searchBy || 'title'}&sortBy=${sortBy || 'title'}&sortOrder=${sortOrder || 'desc'}`);
    return await response.json();
};
export const single = async (id) => {
    const response = await fetch(`${swaggerBase}/movies/${id}`);
    return await response.json();
};

export default swagger;