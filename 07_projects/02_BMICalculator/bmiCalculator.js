const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const weightGuid = document.querySelector('#wgResult');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;

    // show the weight guid result
    if(bmi < 18.6){
      weightGuid.innerHTML = `<span>Under Weight</span>` ;
    }else if(bmi >= 18.6 && bmi <= 24.9){
      weightGuid.innerHTML = `<span>Normal Weight</span>` ;
    }else{
      weightGuid.innerHTML = `<span>Over Weight</span>` ;
    }
  }
});
