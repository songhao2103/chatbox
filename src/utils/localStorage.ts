export const getDataAtStorage = (name: string) => {
  const value = localStorage.getItem(name);
  return value ? JSON.parse(value) : null;
};

export const setDataIntoLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const deleteDataAtLocalStorage = (name: string) => {
  localStorage.removeItem(name);
};
