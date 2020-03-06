import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner';

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
  state = {
    loading: true
  };
  /*we don't need to write constructor,super and this.*/
  unsubscribeFromSnapShot = null;

  componentDidMount(){
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({loading: false});
    })
    /*meaning that whenever the collectionRef updates
     or whenever this code run for first time will
    send us the snapshot representing collections objects array*/
  }

 render(){ 
   const {match} = this.props;
   const {loading} = this.state;
   /*we have access to match object because 
  <Route path='/shop' component={ShopPage} /> which in App.js*/
  return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} render={(props) =>
       <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
    <Route path={`${match.path}/:collectionId`}
      render={(props) =>
       <CollectionPageWithSpinner isLoading={loading} {...props} />} />
  </div>
  );
 }
}

const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);