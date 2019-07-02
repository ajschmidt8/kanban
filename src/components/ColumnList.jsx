import React, { createRef } from 'react';
import Column from './Column';

export default function ColumnList({
  columns,
  moveColumn,
  addColumn,
  deleteColumn,
  addCardlist
}) {
  const randomId = parseInt(
    Math.random()
      .toString()
      .slice(-4)
  );
  let textInput = React.createRef();
  return (
    <>
      <div style={{ maxWidth: '1000px', margin: '0 auto 32px' }}>
        <form
          onSubmit={e => {
            e.preventDefault();
            addCardlist(randomId);
            addColumn(textInput.current.value, randomId);
            textInput.current.value = '';
          }}
        >
          <input ref={textInput} type="text" />
          <button>Add Column</button>
        </form>
      </div>
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {columns.map(({ title, cardListId }, columnIndex) => (
          <Column
            title={title}
            key={title}
            columnIndex={columnIndex}
            cardListId={cardListId}
            moveColumn={moveColumn}
            deleteColumn={deleteColumn}
          />
        ))}
      </div>
    </>
  );
}
