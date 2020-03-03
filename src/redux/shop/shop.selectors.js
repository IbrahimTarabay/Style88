import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

/*curry function*/
export const selectCollection = collectionUrlParam =>/*collectionUrlParam is string like hats*/
 createSelector(
   [selectCollections],
   collections => collections[collectionUrlParam]
 );
