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
    const {name, className} = this.props;
    const transferableProps = omit(this.props, ['name', 'className'])

    const iconClasses = classnames(
      'fa',
      `fa-${name}`,
      className
    )

    return (
      <i className={iconClasses} {...transferableProps} />
    );
  }
});
