import React, { useMemo, useRef } from 'react';


const Wrapper = (props) => {
  let active = false, currentX = 0, currentY = 0, initialX = props.left || 0, initialY = props.top || 0, xOffset = 0, yOffset = 0;

  const dragStart = e => {
    e.preventDefault();
    e.stopPropagation()
    if (e.type === 'touchstart') {
      initialX = e.touches[0].clientX - xOffset;
      initialY = e.touches[0].clientY - yOffset;
    } else {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
    }
    active = true;
  };

  const dragEnd = (e) => {
    e.preventDefault();
    e.stopPropagation()
    initialX = currentX;
    initialY = currentY;
    active = false;
  };

  const drag = e => {
    if (active) {
      e.preventDefault();
      e.stopPropagation()
      if (e.type === 'touchmove') {
        currentX = e.touches[0].clientX - initialX;
        currentY = e.touches[0].clientY - initialY;
      } else {
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
      }
      xOffset = currentX;
      yOffset = currentY;
      const parent = e.currentTarget;
      if (parent) {
        const elm = parent.childNodes[0];
        if (elm) {
          const left = xOffset * 100 / parent.offsetWidth;
          const top = yOffset * 100 / parent.offsetHeight;
          elm.style.transform = `translate(${left}%, ${top}%)`
          elm.style.zIndex = "1000";
          props.onDragChange && props.onDragChange({ top, left })
        }
      }
    }
  };
  return (
    <div
      onTouchStart={dragStart}
      onTouchEnd={dragEnd}
      onTouchMove={drag}
      onMouseDown={dragStart}
      onMouseUp={dragEnd}
      onMouseMove={drag}
      className={props.className}
    >
      <div
        style={{ transform: `translate(${initialX}%, ${initialY}%)`, position: 'relative' }}
      >{props.children}</div>
    </div>
  );
};

const DragDrop = (props) => {
  return useMemo(() => <Wrapper {...props} />, props.dependencyList || []);
};

export default DragDrop;
