import React from 'react';

function ImageMove({imgPath}) {
  const handleMouseMove = (event) => {
    const image = event.target;

    // Calculate the maximum distance the image can move
    // const maxDistanceX = image.parentElement.offsetWidth / 8;
    // const maxDistanceY = image.parentElement.offsetHeight / 8;

    const maxDistanceX = 20;
    const maxDistanceY = 10;

    // Calculate the new position of the image based on mouse position
    const posX = Math.min(Math.max(event.clientX - image.parentElement.offsetLeft - image.offsetWidth / 2, -maxDistanceX), maxDistanceX);
    const posY = Math.min(Math.max(event.clientY - image.parentElement.offsetTop - image.offsetHeight / 2, -maxDistanceY), maxDistanceY);

    // Update the position of the image
    image.style.transform = `translate(${posX}px, ${posY}px)`;
  };

  const handleMouseLeave = (event) => {
    // Reset the position of the image when the mouse leaves
    event.target.style.transform = 'translate(0, 0)';
  };

  return (
      <img
        src={imgPath}
        alt="Image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          transition: 'transform 0.2s ease',
        }}
      />
  );
}

export default ImageMove;