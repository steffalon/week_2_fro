let button = document.getElementById('button');
let lijst = document.getElementById('lijst');
let started = true;
let startTime;
let endTime;
let result;
let i = 0;

button.addEventListener('click', function () {
  if (started) {
    startTime = Math.round(new Date().getTime() / 1000);
    button.value = 'Stop time';
    started = false;
  } else {
    button.value = 'Start time';
    endTime = Math.round(new Date().getTime() / 1000);
    result = endTime - startTime;
    i++;
    lijst.innerHTML += '<br>[' + i + '] Seconden: ' + result;
    started = true;
  }
});
