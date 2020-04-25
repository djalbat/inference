"use strict";

import { createDispatcher } from "../../index";

import rule from "./rule";

const dispatcher = createDispatcher(rule);

module.exports = dispatcher;
