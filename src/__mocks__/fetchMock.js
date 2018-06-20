export default async uri => Promise.resolve({
  json: async () => Promise.resolve({ data: uri }),
});
