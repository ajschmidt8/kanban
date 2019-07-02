// @ts-nocheck
import React, { useRef } from 'react';
import CardList from '../containers/CardList';
import { useDrop, useDrag } from 'react-dnd';
import ItemTypes from '../constants/ItemTypes';

export default function Column({
  title,
  columnIndex,
  cardListId,
  moveColumn,
  deleteColumn
}) {
  const ref = useRef(null);
  const id = parseInt(
    Math.random()
      .toString()
      .slice(-4)
  );

  const [, drop] = useDrop({
    accept: ItemTypes.COLUMN,
    drop(item, monitor) {
      if (!ref.current) return;

      if (item.columnIndex === columnIndex) return;

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const rectVertCenter =
        (hoverBoundingRect.left + hoverBoundingRect.right) / 2;

      const mouseX = monitor.getClientOffset().x;

      // insert after drop element
      if (mouseX > rectVertCenter) {
        moveColumn(item.columnIndex, columnIndex + 1);
      }

      // insert before drop element
      if (mouseX <= rectVertCenter) {
        moveColumn(item.columnIndex, columnIndex);
      }
    }
  });

  const [, drag] = useDrag({
    item: {
      type: ItemTypes.COLUMN,
      id,
      columnIndex
    }
  });

  drag(drop(ref));
  return (
    <div
      style={{
        flex: '30% 0',
        margin: '0px 1% 24px 0',
        padding: '16px',
        boxSizing: 'border-box',
        border: '1px dashed black'
      }}
      ref={ref}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <CardList cardListId={cardListId} />
      <button onClick={() => deleteColumn(columnIndex)}>Delete Column</button>
    </div>
  );
}
