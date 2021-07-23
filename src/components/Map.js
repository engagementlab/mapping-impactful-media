import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from 'paper';
import { Point } from 'paper/dist/paper-core';

const Map = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = props.width;
    canvas.height = Math.round(props.width * 1.27);
    Paper.setup(canvas);

    const w = Paper.view.size.width;
    const h = Paper.view.size.width;
    const locations = [
      {
        color: `#ffc94b`,
        center: [w * 0.27, h - h * 0.05],
      },
      {
        color: `#f4751c`,
        center: [w * 0.17, h - h * 0.6],
      },
      {
        color: `#f29497`,
        center: [w * 0.45, h - h * 0.92],
      },
      { color: `#f2aaac`, center: [w * 0.79, h - h * 0.56] },
      { color: `#fabb97`, center: [w * 0.75, h - h * 0.17] },
    ];
    const bgImg = new Paper.Raster(`map-bg`);
    bgImg.smoothing = `off`;

    bgImg.on(`load`, () => {
      locations.forEach((loc, i) => {
        const g = new Paper.Group();
        const dot = new Paper.Shape.Circle({
          center: loc.center,
          radius: 30 * (w / 600),
          fillColor: loc.color,
        });
        const overlay = new Paper.Path.Circle({
          center: loc.center,
          radius: 30 * (w / 600),
          fillColor: `white`,
          opacity: 0,
        });

        const txt = new Paper.PointText({
          point: new Point(
            loc.center[0] - 12 * (w / 600),
            loc.center[1] + 20 * (w / 600)
          ),
          content: i + 1,
          fillColor: `black`,
          fontSize: 40 * (w / 600),
        });
        txt.fontFamily = `Bourbon`;
        txt.fontWeight = `bold`;

        g.addChildren([dot, txt]);

        overlay.onMouseEnter = (event) => {
          canvas.style.setProperty(`cursor`, `pointer`);
          dot.tween(
            { scaling: 1 },
            { scaling: 1.5 },
            { duration: 250, easing: `easeInOutQuad` }
          );
        };
        overlay.onMouseLeave = (event) => {
          canvas.style.setProperty(`cursor`, null);
          dot.tween({ scaling: 1.5 }, { scaling: 1 }, 250);
        };
      });
      bgImg.position = new Paper.Point(
        Paper.view.center.x,
        Paper.view.center.y
      );

      Paper.view.draw();
    });
  }, []);

  return (
    <div>
      <img
        id="map-bg"
        className="hidden"
        aria-hidden="true"
        src={
          `https://res.cloudinary.com/engagement-lab-home/image/upload/c_scale,h_` +
          Math.round(props.width * 1.27) +
          `/v1626969494/mapping-impactful-media/img/map`
        }
      />
      <canvas ref={canvasRef} id="map-canvas" />
    </div>
  );
};

export default Map;
