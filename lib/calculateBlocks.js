const calculateBlocks = (blocks, width, height) => {
  let cols = width > 750 ? 2 : 1;

  let minHeight = ((blocks.length / cols) * 325) + 80;

  if (cols == 2) {
    height = height > minHeight ? height : minHeight;
  } else {
    height = height > minHeight ? height : minHeight;
    width = width > 400 ? width : 400;
  };

  for (let i in blocks) {
    const count = parseInt(i) + 1;
    if (cols == 2) {
      if (!(count % 2)) {
        blocks[i].startX = (width / 2) - 362.5;
      } else {
        blocks[i].startX = (width / 2) + 12.5;
      }
    } else {
      blocks[i].startX = (width / 2) - 175;
    }
    const row = (cols == 2) ?
      (count + (count % 2)) - 2
      : count - 1;
    blocks[i].startY = 80 + (row * 325);
  }
  return {minHeight:  height, minWidth: width};
};

export default calculateBlocks;
