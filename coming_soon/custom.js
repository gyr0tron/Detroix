
$(document).ready(function () {

  function second_passed() {
    $('.clock').removeClass('is-off');
  }
  setTimeout(second_passed, 2000)

  $('.switcher').on('click', function (e) {
    e.preventDefault();
    $('.screen').toggleClass('glitch');
  });

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  let countDown = new Date('Sep 26, 2018 00:00:00').getTime(),


  // var newDate = new Date();
  // newDate.setDate(newDate.getDate());

    x = setInterval(function () {

    let now = new Date().getTime(),
    distance = countDown - now;

    var days = Math.floor(distance / (day));
    var hours = Math.floor((distance % (day)) / (hour)) + (days * 24);
    var seconds = Math.floor((distance % (minute)) / second);
    var minutes = Math.floor((distance % (hour)) / (minute));

    var realTime = (hours < 10 ? '0' : '') + hours + ' : ' + (minutes < 10 ? '0' : '') + minutes + ' : ' + (seconds < 10 ? '0' : '') + seconds

    $('.time').html(realTime);
    $('.time').attr('data-time', realTime);

  }, 1000);
});
