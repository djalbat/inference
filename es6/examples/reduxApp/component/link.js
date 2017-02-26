'use strict';

const reaction = require('reaction'),
      { React } = reaction;

const Link = (props) => {
  const { active } = props;

  if (active) {
    return (

      <span>{props.children}</span>

    );
  }

  const { onClick } = props;

  return (

    <a href='#'
       onClick={(event) => {

         event.preventDefault();

         onClick();

       }}
    >
      {props.children}
    </a>

  );
};

module.exports = Link;
