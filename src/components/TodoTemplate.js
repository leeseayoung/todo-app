import React, { Children } from 'react';

const TodoTemplate = ({ Children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리1</div>
      <div className="content">{Children}</div>
    </div>
  );
};

export default TodoTemplate;
