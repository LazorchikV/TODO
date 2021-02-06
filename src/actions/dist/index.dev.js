"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVisibilityFilter = exports.VisibilityFilters = exports.toggleTodo = exports.removeTodos = exports.addTodo = void 0;
var nextTodoId = 0;

var addTodo = function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  };
};

exports.addTodo = addTodo;

var removeTodos = function removeTodos(text) {
  return {
    type: 'REMOVE_TODO',
    id: nextTodoId,
    text: text
  };
};

exports.removeTodos = removeTodos;

var toggleTodo = function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

exports.toggleTodo = toggleTodo;
var VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
exports.VisibilityFilters = VisibilityFilters;

var setVisibilityFilter = function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
};

exports.setVisibilityFilter = setVisibilityFilter;