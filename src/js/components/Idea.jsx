import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import GridItem from './GridItem.jsx';

export default React.createClass({
  mixins: [
    PureRenderMixin
  ],

  render: function() {
    const {idea} = this.props;

    return (
      <GridItem size={4}>
        <div className="idea">
          <div className="idea-images">
            {idea.get('images').map(this.renderImage).toArray()}
          </div>
          <div className="idea-body">
            <h2>
              {idea.get('title')}
            </h2>
            <p>
              {idea.get('body')}
            </p>
          </div>
        </div>
      </GridItem>
    );
  },

  renderImage: function(image) {
    return (
      <img
        key={image.get('id')}
        src={image.get('src')}
        className="img-responsive"
        alt={image.get('title')}
      />
    );
  }
});
