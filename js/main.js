/********FAQ section ans data ************ */
function ansdata() {
  // myDropdown.style.cssText='display:block';
  // document.getElementById("myDropdown").style.display = "block";

  var x = document.getElementById('myDropdown');
  var y = document.getElementById('answer');

  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.cssText='color:var(--main-color)';
  } else {
    x.style.display = 'none';
    y.style.cssText='color:var(--second-color)';

  }
}

function ansdata2() {
  var x = document.getElementById('myDropdown2');
  var y = document.getElementById('answer2');

  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.cssText='color:var(--main-color)';

  } else {
    x.style.display = 'none';
    y.style.cssText='color:var(--second-color)';

  }

}

function ansdata3() {
  var x = document.getElementById('myDropdown3');
  var y = document.getElementById('answer3');

  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.cssText='color:var(--main-color)';

  } else {
    x.style.display = 'none';
    y.style.cssText='color:var(--second-color)';

  }

}

function ansdata4() {
  var x = document.getElementById('myDropdown4');
  var y = document.getElementById('answer4');

  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.cssText='color:var(--main-color)';

  } else {
    x.style.display = 'none';
    y.style.cssText='color:var(--main-color)';

  }

}