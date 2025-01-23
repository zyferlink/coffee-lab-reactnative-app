import produce from "immer";

export const addToFavoriteList = (state: any, type: string, id: string) => {
  const list = type === "Coffee" ? state.coffeeList : state.beanList;
  const index = list.findIndex((item: any) => item.id === id);

  if (index !== -1) {
      const item = list[index];

      if (!item.favorite) {
          item.favorite = true;
          state.favoriteList.unshift(item);
      }
  }
};

export const deleteFromFavoriteList = (state: any, type: string, id: string) => {
  const list = type === "Coffee" ? state.coffeeList : state.beanList;
    const indexInList = list.findIndex((item: any) => item.id === id);

    if (indexInList !== -1) {
        const item = list[indexInList];
        if (item.favorite) {
            item.favorite = false;
        }
    }

    const indexInFavorites = state.favoriteList.findIndex((item: any) => item.id === id);

    if (indexInFavorites !== -1) {
        state.favoriteList.splice(indexInFavorites, 1);
    }
};
