import React from 'react';
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({match}) =>(/*we have access to match object because 
  <Route path='/shop' component={ShopPage} /> which in App.js*/
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
/*ShopPage is becoming a simple non-connected component
now. we will now have the child component of the ShopPage be connected*/