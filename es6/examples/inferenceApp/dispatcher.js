"use strict";

const createDispatcher = require("../../createDispatcher");

const rule = require("./rule");

const dispatcher = createDispatcher(rule);

module.exports = dispatcher;
