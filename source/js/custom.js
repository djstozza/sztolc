const smoothScrolling = () => {
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
}

const sendMail = () => {
  const $submit = $('#submit');

  $('#contact-form').submit((e) => {
    e.preventDefault();

    $submit.attr('disabled', true).text('Sending...');
    const $formInput = $('.form-input');
    const $invalid = $('.invalid-feedback');
    const $success = $('.alert-success');

    $formInput.removeClass('is-invalid');
    $invalid.html('');
    $success.addClass('d-none').html('');

    $.ajax({
      url: '/',
      method: 'POST',
      data: {
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val(),
      }
    }).done((data) => {
      $submit.attr('disabled', false).text('Send');

      if (data.errors) {
        var formInputIds = [];
         $formInput.each((index, input) => {
           formInputIds.push($(input).attr('id'))
         });

         var arr = []
         $.each(data.errors, (index, error) => {
           arr.push(error.param);
         });

        $.each(data.errors, (index, error) => {
          if (formInputIds.indexOf(error.param) > -1) {
            $param = $(`#${error.param}`)
            $param.addClass('is-invalid');
            $param.next('.invalid-feedback').html(error.msg);
          }
        });
      } else {
        $success.html(data.message).removeClass('d-none');
        $formInput.removeClass('is-invalid').val('');
        $invalid.html('');
      }
    });
  });
}

$(document).ready(() => {
  smoothScrolling();
  sendMail();

  var observer = lozad(); // lazy loads elements with default selector as '.lozad'
  observer.observe();
});
