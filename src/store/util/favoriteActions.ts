import produce from "immer";

export const addToFavoriteList = (state: any, type: string, id: string) => {
  const list = (type === "Coffee" ? state.coffeeList : state.beanList);
  const item = list.find((item: any) => item.id === id);
  if (item && !item.favorite) {
    item.favorite = true;
    state.favoriteList.unshift(item);
  }
};

export const deleteFromFavoriteList = (state: any, type: string, id: string) => {
  const list = type === "Coffee" ? state.coffeeList : state.beanList;
  const item = list.find((item: any) => item.id === id);
  if (item && item.favorite) {
    item.favorite = false;
  }

  const index = state.favoriteList.findIndex((fav: any) => fav.id === id);
  if (index !== -1) {
    state.favoriteList.splice(index, 1);
  }
};
