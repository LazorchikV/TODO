import React from 'react';
import { connect } from 'react-redux';
import { removeTodos } from '../actions';

const RemoveTodo = ({ dispatch }) => {
  let output;

  return (
    <div>   
      <form
        onChange={
          e => {
            e.preventDefault();

            if (!output.value.trim()) {
              return
            }

            dispatch(removeTodos(output.value));
            output.value='';
          }
        }
      >
        <button type='submit' className="btn btn-1">Удалить все задачи</button>
      </form>
    </div>
  );
}

export default connect()(RemoveTodo);