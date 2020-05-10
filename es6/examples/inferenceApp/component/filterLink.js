"use strict";

import { React } from "reaction";
import { arrayUtilities } from "necessary";

import dispatcher from "../dispatcher";

import { SET_VISIBILITY_FILTER } from "../constants";

const { first } = arrayUtilities;

const FilterLink = (props, context) => {
  const { children, filter } = props,
        className = `${filter} filter`,
        firstChild = first(children),
        text = firstChild.getText();

  return (

    <div className={className}>
      <a href="#"
         onClick={(event) => {

           event.preventDefault();

           const type = SET_VISIBILITY_FILTER,
                 visibilityFilter = filter,
                 action = {
                   type,
                   visibilityFilter
                 };

           dispatcher.dispatch(action);

         }}
      >
        {text}
      </a>
      <span>
        {text}
      </span>
    </div>
  );
};

export default FilterLink;
