import React from 'react';
import ReactSearchBox from 'react-search-box'
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item';

import {selectCollection} from '../../redux/shop/shop.selectors';

import './collection.scss';
import { Component } from 'react';

class CollectionPage extends Component{
  constructor(){
    super()
    this.state = {
      searchfield: ''
    }
  }
 
onChangeSearch = (event) =>{
 this.setState({searchfield: event})
}

render(){
  const {collection} = this.props;
  const {title,items} =collection;
  const filteredItems = items.filter(item =>{
    return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase())});
  
 return(
  <div className='collection-page'>
    <h2 className='title'>{title}</h2>
      <div className='search'>
      <ReactSearchBox
          inputBoxFontSize={10}
          placeholder={`search ${title}`}
          onChange={this.onChangeSearch}   
          />
      </div>
    <div className='items'>
       {
        filteredItems.map(item => <CollectionItem key={item.id} item={item} />)
       }
    </div>
  </div>
  )
 }
};

const mapStateToProps = (state,ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
  /*this is necessary because unlike other selectors,
  this selector needs a part of the state depending
  on the URL parameter!*/
  })

export default connect(mapStateToProps)(CollectionPage);


/*const CollectionPage = ({collection}) => {
  const {title, items} = collection;

  return(
  <div className='collection-page'>
    <h2 className='title'>{title}</h2>
    <ReactSearchBox
        placeholder={`search ${title}`}
        data={items}
        onChange={(event) => 
          console.log(items.filter(item =>
            item.name.toLowerCase().includes(event.toLowerCase())))}
      />
    <div className='items'>
       {
        items.map(item => <CollectionItem key={item.id} item={item} />)
       }
    </div>
  </div>
  )
};*/