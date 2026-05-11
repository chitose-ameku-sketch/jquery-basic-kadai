$(function () {
  $('#change-color').on('click', function () {
    // ターゲットの文字色を赤（red）に変える
    $('#target').css('color', 'red');
  });

  $('#change-text').on('click', function () {
    $('#target').text('Hello!');
  });

  $('#fade-out').on('click', function () {
    $('#target').fadeOut();
  });

  $('#fade-in').on('click', function () {
    $('#target').fadeIn();
  });
});