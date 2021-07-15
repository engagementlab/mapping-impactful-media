import React, { useRef, useEffect } from 'react';
import Paper from 'paper';

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    Paper.setup(canvas);

    const g = new Paper.Group();
    const dot = new Paper.Shape.Circle({
      center: [50, 50],
      radius: 16,
      fillColor: '#ff0',
    });

    const txt = new Paper.PointText({
      point: [55, 55],
      content: 1,
      fillColor: 'black',
      fontSize: 16,
    });

    g.addChildren([dot, txt]);
    const raster = new Paper.Raster('map-bg', new Paper.Point(50, 50));

    // raster.rescale(200, 100);
    Paper.view.draw();
  }, []);

  return <canvas ref={canvasRef} {...props} id="map-canvas" resize="true" />;
};

export default Canvas;
