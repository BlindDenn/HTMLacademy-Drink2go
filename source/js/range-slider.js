const rangeSlider = document.getElementById('slider');
const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');
const inputs = [input0, input1];

const initSlider = () => {
  if (rangeSlider) {

    noUiSlider.create(rangeSlider, {
      start: [0, 900],
      connect: true,
      step: 1,
      range: {
        'min': [0],
        'max': [999]
      }
    });
  };

  input0.value = 100;

  rangeSlider.noUiSlider.on('update', (values, handle) => {
    // input0.value = 100;
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr)
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (evt) => {
      setRangeSlider(index, evt.target.value);
    });
  });
}

export { initSlider };
