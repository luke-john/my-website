import Canvas from 'canvas';

import calculateBlocks from './calculateBlocks.js';
import drawPanel from './drawPanel.js';

import social from '../config/social';
import skills from '../config/skills';

const blocks = [social, skills];

const getPage = (request, reply) => {
  let {width, height} = {
    width: parseInt(request.params.width),
    height: parseInt(request.params.height)
  };

  const {minHeight, minWidth} = calculateBlocks(blocks, width, height);

  console.log(minWidth, minHeight);

  const Image = Canvas.Image;
  const canvas = new Canvas(minWidth, minHeight);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#6059ff';
  ctx.fillRect(0, 0, minWidth, minHeight);

  ctx.fillStyle = 'white';
  ctx.font = '30px Impact';

  const te = ctx.measureText(process.env.TITLE);
  const headerStart = minWidth / 2 - te.width / 2;

  ctx.fillText(process.env.TITLE, headerStart, 35);

  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.lineTo(headerStart, 40);
  ctx.lineTo(headerStart + te.width, 40);
  ctx.stroke();

  for (let block of blocks) {
    drawPanel(ctx, block);
  }

  return reply(canvas.toBuffer());
};

export default getPage;
