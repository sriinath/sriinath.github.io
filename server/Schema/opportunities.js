"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var typeDefs = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type Query {\n        opportunities: [Opportunity] \n    }\n    type Opportunity {\n        id: String\n        title: String\n        description: String\n        applications_close_date: String\n        earliest_start_date: String\n        latest_end_date: String\n        backgrounds: [Background]\n        selection_process: String\n        salary: String\n        city: String\n    }\n    type Background {\n        name: String\n    }\n"], ["\n    type Query {\n        opportunities: [Opportunity] \n    }\n    type Opportunity {\n        id: String\n        title: String\n        description: String\n        applications_close_date: String\n        earliest_start_date: String\n        latest_end_date: String\n        backgrounds: [Background]\n        selection_process: String\n        salary: String\n        city: String\n    }\n    type Background {\n        name: String\n    }\n"])));
exports.typeDefs = typeDefs;
var templateObject_1;
