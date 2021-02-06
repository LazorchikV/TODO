import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Header = () => (
  <div>
    <span className="btn btn-3">Задачи: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>Все</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Активные</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Выполнены</FilterLink>
  </div>
);

export default Header;