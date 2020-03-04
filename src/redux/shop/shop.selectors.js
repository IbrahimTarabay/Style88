import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectSearchField = createSelector(
  [selectShop],
  shop => shop.searchfield
)

export const selectCollectionsForPreview =createSelector(
 [selectCollections],
 collections => Object.keys(collections).map(key => collections[key])
);
/*we want to make shop.data.js be an array when we map to show collections in shop*/

/*curry function*/
export const selectCollection = collectionUrlParam =>/*collectionUrlParam is string like hats*/
 createSelector(
   [selectCollections],
   collections => collections[collectionUrlParam]
 );

 /*[selectSearchField],

 .filter((collectionItem,searchfield) =>{
  return collectionItem.name.toLowerCase().includes(searchfield.toLowerCase());
 }*/
