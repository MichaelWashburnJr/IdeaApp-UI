import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import GeneralStore from 'general-store';

import IdeasStore from '../stores/IdeasStore';
import MainContent from '../components/MainContent.jsx';

import IdeaActions from '../actions/IdeaActions';

export default React.createClass({
  mixins: [
    PureRenderMixin,
    GeneralStore.StoreDependencyMixin({
      ideasData: IdeasStore
    })
  ],

  componentDidMount() {
    // IdeaActions.fetchIdeas();
  },

  render: function() {
    const {ideasData} = this.state;

    return (
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
              <div className="navbar-header">
                  <button
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-expanded="false"
                    className="navbar-toggle collapsed"
                  >
                    <span className="sr-only">
                      Toggle navigation
                    </span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <a href="/" className="navbar-brand">
                    Ideas App
                  </a>
              </div>
              <div className="collapse navbar-collapse">
                  <ul className="nav navbar-nav">
                      <li className="active">
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/upload">Add Idea</a>
                      </li>
                      <li>
                        <a href="/account">Account</a>
                      </li>
                      <li>
                        <a href="/logout">Log out</a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
        <MainContent ideasData={ideasData} />
      </div>
    );
  }
});
