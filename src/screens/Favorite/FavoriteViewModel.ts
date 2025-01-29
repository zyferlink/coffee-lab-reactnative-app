import { useCallback } from 'react';
import { useStore } from '../../state/useStore';
import { SCREENS } from '../../config/screenNames';

export const useFavoriteViewModel = (navigation: any) => {
  const favoriteList = useStore((state: any) => state.favoriteList);
  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const toggleFavorite = useCallback(
    (id: string, type: string, isFavorite: boolean) => {
      isFavorite ? deleteFromFavoriteList(id, type) : addToFavoriteList(id, type);
    },
    [addToFavoriteList, deleteFromFavoriteList]
  );

//   const toggleFavorite = (id: string, type: string, isFavorite: boolean) => {
//     isFavorite ? deleteFromFavoriteList(id, type) : addToFavoriteList(id, type);
//   };

  const navigateToDetail = useCallback(
    (item: any) => {
      navigation.push(SCREENS.DETAIL, {
        index: item.index,
        id: item.id,
        type: item.type,
      });
    },
    [navigation]
  );

  return {
    favoriteList,
    toggleFavorite,
    navigateToDetail,
  };
};
