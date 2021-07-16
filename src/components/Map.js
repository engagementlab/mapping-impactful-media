import React, { useRef, useEffect } from 'react';
import Paper from 'paper';

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 922;
    canvas.height = 1390;
    // canvas.width = `${document.getElementById('map-bg').width}px`;
    Paper.setup(canvas);

    const g = new Paper.Group();
    const dot = new Paper.Shape.Circle({
      center: [50, 50],
      radius: 30,
      fillColor: '#ff0',
    });
    const overlay = new Paper.Path.Circle({
      center: [50, 50],
      radius: 30,
      fillColor: 'white',
      opacity: 0.7,
    });

    const txt = new Paper.PointText({
      point: [55, 55],
      content: 1,
      fillColor: 'black',
      fontSize: 40,
    });
    txt.fontFamily = 'Bourbon';
    txt.fontWeight = 'bold';

    g.addChildren([dot, txt]);

    overlay.onMouseEnter = (event) => {
      //   canvas.style.setProperty('cursor', 'pointer');
      dot.tween({ scaling: 1 }, { scaling: 2 }, { duration: 250, easing: 'easeInOutQuad' });
    };
    overlay.onMouseLeave = (event) => {
      canvas.style.setProperty('cursor', null);
      dot.tween({ scaling: 2 }, { scaling: 1 }, 250);
    };
    const raster = new Paper.Raster('map-bg', new Paper.Point(50, 50));

    // raster.rescale(200, 100);
    Paper.view.draw();
  }, []);

  return <canvas ref={canvasRef} {...props} id="map-canvas" resize="true" />;
};

export default Canvas;
