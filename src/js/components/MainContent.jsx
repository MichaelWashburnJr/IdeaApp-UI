import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import GridRow from './GridRow.jsx';
import Idea from './Idea.jsx';

export default React.createClass({
  mixins: [
    PureRenderMixin
  ],

  render: function() {
    const {ideasData} = this.props;

    if (!ideasData.get('ideas').size) {
      return <div className="container text-center" style={{"marginTop": "100px"}}>Loading...</div>
    }

    return (
      <div className="container" style={{"marginTop": "100px"}}>
        <GridRow>
          {ideasData.get('ideas').map(this.renderIdea).toArray()}
        </GridRow>
      </div>
    );
  },

  renderIdea: function(idea) {
    return (
      <Idea
        key={idea.get('id')}
        idea={idea}
      />
    );

  }
});
