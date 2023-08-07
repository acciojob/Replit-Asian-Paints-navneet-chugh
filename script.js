//your JS code here. If required.
const changeButton = document.getElementById('change_button');
  const resetButton = document.getElementById('reset_button');
  
  changeButton.addEventListener('click', () => {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('color_id').value;
    const block = document.getElementById(blockId);

    if (block) {
      const gridItems = document.querySelectorAll('.grid-item');
      gridItems.forEach(item => {
        item.style.backgroundColor = 'transparent';
      });

      block.style.backgroundColor = color;
    }
  });

  resetButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.style.backgroundColor = 'transparent';
    });
  });