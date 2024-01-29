export const save = (name, items) => {
  localStorage.setItem(name, JSON.stringify(items));
}