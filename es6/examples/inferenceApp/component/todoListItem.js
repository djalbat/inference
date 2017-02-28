'use strict';

const reaction = require('reaction'),
      { React } = reaction,
      { Component } = React;

class TodoListItem extends Component {
  render () {
    const { text } = this.props,
          className = 'completed';

    return (

      <li className={className}
          onClick={() => {
            this.toggleClass('completed');
          }}>
        {text}
      </li>
    );
  }
}

module.exports = TodoListItem;
