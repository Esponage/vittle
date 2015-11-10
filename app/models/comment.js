import Backbone from 'backbone';
import _ from 'underscore';
import store from '../store';
import User from './user';

const Comment = Backbone.Model.extend({

  idAttribute: 'objectID',

  default() {
    return {
      recipe: {toJSON: ()=>{}},
      creator: {toJSON: ()=>{}}
    };
  },

  parse(response) {
    response.creator = new User(_.omit(response.creator, '_type', 'className'), {parse: true});

    return response;
  },

  toJSON(options) {
    if(options) {
      return _.extend({}, this.attributes, {
        
        creator: this.get('creator').toJSON()
      });
    }
  }
});

export default Comment;
