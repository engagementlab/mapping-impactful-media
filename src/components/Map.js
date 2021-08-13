import React, { useRef, useEffect } from 'react';
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
        center: [w * 0.32, h - h * 0.17],
        page: `where-do-i-stand`,
        label: `Where do\ni stand?`,
        labelPos: [-w * 0.1, -h * 0.12],
      },
      {
        color: `#f4751c`,
        center: [w * 0.18, h - h * 0.51],
        page: `who-cares`,
        label: `Who\ncares?`,
        labelPos: [-70, 70],
      },
      {
        color: `#f29497`,
        center: [w * 0.45, h - h * 0.82],
        page: `imagining-inclusive-futures`,
        label: `Imagining more\ninclusive futures`,
        labelPos: [-w * 0.25, -h * 0.01],
      },
      {
        color: `#f2aaac`,
        center: [w * 0.79, h - h * 0.52],
        page: `with-communities`,
        label: `With\n(not for)\ncommunities`,
        labelPos: [w * 0.05, h * 0.1],
      },
      {
        color: `#fabb97`,
        center: [w * 0.75, h - h * 0.17],
        page: `where-do-we-stand`,
        label: `Where do\nwe stand?`,
        labelPos: [w * 0.1, h * 0.11],
      },
    ];
    const bgImg = new Paper.Raster(`map-bg`);
    bgImg.smoothing = `off`;

    bgImg.on(`load`, () => {
      locations.forEach((loc, i) => {
        const g = new Paper.Group();
        const dot = new Paper.Shape.Circle({
          center: loc.center,
          radius: 27 * (w / 600),
          fillColor: loc.color,
        });
        const overlay = new Paper.Path.Circle({
          center: loc.center,
          radius: 30 * (w / 600),
          fillColor: `white`,
          opacity: 0,
        });

        const numTxt = new Paper.PointText({
          point: new Point(
            loc.center[0] - (i === 0 ? 8 : 10) * (w / 600),
            loc.center[1] + 13 * (w / 600)
          ),
          content: i + 1,
          fillColor: `black`,
          fontSize: 35 * (w / 600),
        });
        const labelTxt = new Paper.PointText({
          point: new Point(
            loc.center[0] + loc.labelPos[0],
            loc.center[1] + loc.labelPos[1]
          ),
          content: loc.label,
          fillColor: `black`,
          fontSize: 20 * (w / 600),
        });

        labelTxt.justification = `center`;
        labelTxt.fontFamily = `Bourbon`;
        labelTxt.fontWeight = `bold`;
        labelTxt.opacity = 0;
        numTxt.fontFamily = `Bourbon`;
        numTxt.fontWeight = `bold`;

        g.addChildren([dot, numTxt, labelTxt]);

        overlay.onMouseEnter = (event) => {
          canvas.style.setProperty(`cursor`, `pointer`);
          dot.tween(
            { scaling: 1 },
            { scaling: 1.3 },
            { duration: 250, easing: `easeInOutQuad` }
          );
          labelTxt.scaling = 1;
          labelTxt.tweenFrom({ scaling: 1.45 }, { duration: 250 });
          labelTxt.tweenTo({ opacity: 1 }, { duration: 250 });
        };
        overlay.onMouseLeave = (event) => {
          canvas.style.setProperty(`cursor`, null);
          dot.tween({ scaling: 1.3 }, { scaling: 1 }, 250);
          labelTxt.tweenTo({ opacity: 0, scaling: 0.8 }, { duration: 250 });
        };
        overlay.onMouseDown = () => {
          window.location = `/guide/${loc.page}`;
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
          Math.round(props.width) +
          `/v1626969494/mapping-impactful-media/img/map`
        }
      />
      <canvas ref={canvasRef} id="map-canvas" />
    </div>
  );
};

export default Map;
