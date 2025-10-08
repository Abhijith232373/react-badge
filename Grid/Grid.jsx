import React, { useState } from 'react';

const ColorGrid = () => {
  const [box, setBox] = useState(Array(9).fill('gray'));
  const [clickedOrder, setClickedOrder] = useState([]);
  const [undoMode, setUndoMode] = useState(false);

  const handleClick = (index) => {
    if (index === 4) return;

    if (undoMode) return;

    const updatedBoxes = [...box];
    updatedBoxes[index] = 'green';
    setBox(updatedBoxes);

    let newClickedOrder = clickedOrder;
    if (!clickedOrder.includes(index)) {
      newClickedOrder = [...clickedOrder, index];
      setClickedOrder(newClickedOrder);
    }

    if (newClickedOrder.length === 7) {
      setUndoMode(true);

      const reversedOrder = [...newClickedOrder].reverse();

      reversedOrder.forEach((boxIndex, i) => {
        setTimeout(() => {
          setBox((prev) => {
            const temp = [...prev];
            temp[boxIndex] = 'gray';
            return temp;
          });
        }, (i + 1) * 1000);
      });

      setTimeout(() => {
        setClickedOrder([]);
        setUndoMode(false);
      }, 8000);
    }
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gridTemplateRows: 'repeat(3, 100px)',
    gap: '10px',
  };

  return (
    <div style={gridStyle}>
      {box.map((color, index) =>
        index === 4 ? (
          <div key={index} style={{ width: '100px', height: '100px' }}></div>
        ) : (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: color,
              border: '1px solid black',
              cursor: 'pointer',
            }}
          ></div>
        )
      )}
    </div>
  );
};

export default ColorGrid;