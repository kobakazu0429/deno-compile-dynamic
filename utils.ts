const key = "IS_COMPILED";

export const store = { IS_COMPILED: false };

export const setIsCompiled = (isCompiled: boolean) => {
  store[key] = isCompiled;
};

export const getIsCompiled = () => {
  return store[key];
};
