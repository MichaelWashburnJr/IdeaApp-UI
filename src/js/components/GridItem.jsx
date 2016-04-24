import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {omit} from 'lodash';
import classnames from 'classnames';

export default React.createClass({
  mixins: [
    PureRenderMixin
  ],

  render: function() {
    const {className, size, children} = this.props;
    const transferableProps = omit(this.props, ['className', 'children', 'size'])

    const classes = classnames(
      `col-md-${size}`,
      className
    )

    return (
      <div className={classes} {...transferableProps}>
        {children}
      </div>
    );
  }
});
