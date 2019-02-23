import React, { Component } from 'react';

export default class Injections extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderInjections() {
    const { injections } = this.props;
    return injections.map((injection) => {
      this.injection = React.createRef();
      return (
        <label htmlFor={injection}>
          {injection}
          <input id={injection} ref={this.injection} type="text" />
        </label>
      );
    });
  }

  render() {
    const { injections } = this.props;
    return (
      <div>
        {injections.length > 0 && this.renderInjections()}
        <h1>Hello world</h1>
        <h1>Hello world</h1>
        <h1>Hello world</h1>
      </div>
    );
  }
}
