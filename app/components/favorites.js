import React from 'react';
import BackboneMixin from '..mixins/backbone';
import store from '../store';

const Favorites = React.crateClass({
  mixins: [BackboneMixin],

  componentWillMount() {
    store.fetchFavorites();
  },

  getModels() {
    return {
      favorites: store.getFavorites()
    }
  },

  render() {
    return (
        <h1>Favorites</h1>
        
    );
  }
})
