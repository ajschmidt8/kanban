import React from 'react';
import Card from './Card';

export default function CardList({ list, id, moveCard, addCard }) {
  let textInput = React.createRef();
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {list.map((text, cardIndex) => (
        <Card
          key={Math.random()}
          text={text}
          cardIndex={cardIndex}
          cardListId={id}
          moveCard={moveCard}
        />
      ))}

      <form
        onSubmit={e => {
          e.preventDefault();
          addCard(id, textInput.current.value);
          textInput.current.value = '';
        }}
      >
        <input ref={textInput} type="text" />
        <button>Add Card</button>
      </form>
    </ul>
  );
}
