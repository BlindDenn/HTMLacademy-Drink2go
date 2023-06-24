const rangeSlider = document.getElementById('slider');

const initSlider = () => {
  if (rangeSlider) {
    console.log(rangeSlider);
    noUiSlider.create(rangeSlider, {
      start: [20, 80],
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 100
      }
    });
  };
}

export { initSlider };
