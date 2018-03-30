;(function($) {
  // 单选框
  $.fn.clradio = function(options) {
    $(":radio+label", this).each(function(i, v) {
      $(this).addClass('cl-radio');
      if ($(this).prev().is('checked')) {
        $(this).addClass('cl-radio-checked');
      }
    }).click(function(event) {
      $(this).siblings().removeClass("cl-radio-checked");
      if (!$(this).prev().is(':checked')) {
        $(this).addClass("cl-radio-checked");
        $(this).prev()[0].checked = true;
      }
      event.stopPropagation();
    }).prev().hide();
  }
})(jQuery)
