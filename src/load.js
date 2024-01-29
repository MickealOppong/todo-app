export const load = (name) => {
  const data = JSON.parse(localStorage.getItem(name)) ? JSON.parse(localStorage.getItem(name)) : [];
  return data;
}