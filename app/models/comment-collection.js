import Backbone from 'backbone';
import Comment from './comment';

var CommentsCollection = Backbone.Collection.extend({
  model: Comment,
  url() {
    return "https://api.parse.com/1/classes/Comment?include=creator" + JSON.stringify({
      something: {
        _type: "Pointer",
        className: "",
        objectId: ""
      }
    });
  },

  initialize(options) {
    this.recipeId = options.somethingID;
  },

  parse(response) {
    return response.results;
  }
});

export default CommentsCollection;
