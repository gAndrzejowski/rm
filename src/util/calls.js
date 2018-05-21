export const swagger = async settings => {
    const {
        sortBy,
        sortOrder,
        search,
        searchBy,
        filter,
    } = settings;
    const response = await fetch(`http://react-cdp-api.herokuapp.com/movies?search=${search || ''}&searchBy=${searchBy || 'title'}${filter ? ('&filter=' + filter) : ''}&sortBy=${sortBy || 'title'}&sortOrder=${sortOrder || 'desc'}`);
    return await response.json();
};

export default swagger;