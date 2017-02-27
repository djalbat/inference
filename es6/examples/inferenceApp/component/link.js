'use strict';

const reaction = require('reaction'),
      { React } = reaction;

const Link = (props) => {
  const { active, clickHandler } = props;

  if (active) {
    return (

      <span>{props.children}</span>

    );
  }

  return (

    <a href='#'
       onClick={(event) => {

         event.preventDefault();

         clickHandler();

       }}
    >
      {props.children}
    </a>

  );
};

module.exports = Link;
