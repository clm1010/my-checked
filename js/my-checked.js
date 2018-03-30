;(function($) {
  // 单选框
  $.fn.clradio = function(options) {
    var self = this;
    return $(':radio+label', this).each(function() {
      $(this).addClass('cl-radio');
      if ($(this).prev().is('checked')) {
        $(this).addClass('cl-radio-checked');
      }
    }).click(function(event) {
      $(this).siblings().removeClass('cl-radio-checked');
      if (!$(this).prev().is(':checked')) {
        $(this).addClass('cl-radio-checked');
        $(this).prev()[0].checked = true;
      }
      event.stopPropagation();
    }).prev().hide();
  }

  // 多选框
  $.fn.clcheckbox = function(options){
    $(':checkbox+label', this).each(function(i,v) {
        $(this).addClass('checkbox');
        if ($(this).prev().is(':disabled') === false) {
          if($(this).prev().is(':checked')){
            $(this).addClass("checked");
          }
        }else{
          $(this).addClass('disabled');
        }
    }).click(function(event){
      if (!$(this).prev().is(':checked')) {
          $(this).addClass('checked');
          $(this).prev().prop("checked", true);
      }else{
        $(this).removeClass('checked');
        $(this).prev().prop("checked", false);
      }
      event.stopPropagation();
    }).prev().hide();
  }

})(jQuery)
