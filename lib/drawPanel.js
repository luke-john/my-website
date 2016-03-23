const drawPanel = (ctx, block) => {
  ctx.strokeStyle = 'white';
  ctx.beginPath();
  ctx.lineTo(block.startX, block.startY);
  ctx.lineTo(block.startX + 350, block.startY);
  ctx.lineTo(block.startX + 350, block.startY + 300);
  ctx.lineTo(block.startX, block.startY + 300);
  ctx.lineTo(block.startX, block.startY);
  ctx.stroke();

  ctx.fillStyle = 'white';
  ctx.font = 'bold 20px Impact';

  const titleWidth = ctx.measureText(block.title).width;
  const headerStart = block.startX + 175 - titleWidth / 2;

  ctx.fillText(block.title, headerStart, block.startY + 50);

  const startTextY = block.startY + 150 - (block.length * 50) / 2;

  block.forEach((item, index) => {

    ctx.font = '20px Impact';
    const itemWidth = ctx.measureText(item).width;
    const itemStart = block.startX + 175 - itemWidth / 2;

    ctx.fillText(item,
      itemStart,
      startTextY + ((index + 1) * 50));
  });
};

export default drawPanel;
