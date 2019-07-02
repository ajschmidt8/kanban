import React, { useRef } from 'react';
import ItemTypes from '../constants/ItemTypes';
import { useDrag, useDrop } from 'react-dnd';

export default function Card({ text, cardIndex, cardListId, moveCard }) {
  const ref = useRef(null);
  const id = parseInt(
    Math.random()
      .toString()
      .slice(-4)
  );

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(item, monitor) {
      if (!ref.current) return;

      // Ignore drag/drops on self
      if (item.cardIndex === cardIndex && item.cardListId === cardListId) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const rectHorizCenter =
        (hoverBoundingRect.bottom + hoverBoundingRect.top) / 2;

      const mouseY = monitor.getClientOffset().y;

      // insert after drop element
      if (mouseY > rectHorizCenter) {
        moveCard(item.cardListId, item.cardIndex, cardListId, cardIndex + 1);
      }

      // insert before drop element
      if (mouseY <= rectHorizCenter) {
        moveCard(item.cardListId, item.cardIndex, cardListId, cardIndex);
      }
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      id,
      cardListId,
      cardIndex,
      text
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));
  return (
    <li
      style={{
        marginBottom: '12px',
        border: '2px dashed gray',
        padding: '10px',
        opacity: isDragging ? 0 : 1
      }}
      ref={ref}
    >
      {text}
    </li>
  );
}
