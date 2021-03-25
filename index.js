const increase = () => {
  var count = document.getElementById("count").innerHTML;
  count = Number(count);
  document.getElementById("count").innerHTML = count + 1;
};

const decrease = () => {
  var count = document.getElementById("count").innerHTML;
  count = Number(count);
  document.getElementById("count").innerHTML = count - 1;
};

const reset = () => {
  var count = document.getElementById("count").innerHTML;
  count = Number(count);
  document.getElementById("count").innerHTML = 0;
};
