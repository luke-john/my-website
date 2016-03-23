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

  const minHeight = calculateBlocks(blocks, width, height);

  const Image = Canvas.Image;
  const canvas = new Canvas(width, minHeight);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#6059ff';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = 'white';
  ctx.font = '30px Impact';

  const te = ctx.measureText(process.env.TITLE);
  const headerStart = width / 2 - te.width / 2;

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
