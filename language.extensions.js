$(function(){
  var LanguageValue = null;
  $('#language').change(function(){
    var obj = document.getElementById('language');
    var index = obj.selectedIndex;
    LanguageValue = obj.options[index].value;
    languageSwitch(LanguageValue);
  });
  function languageSwitch(lang) {
    jQuery.i18n.properties({
      name : 'language',
      path : './i18n/',
      mode : 'map',
      language : lang,
      callback : function() {
        $('#label_username').html($.i18n.prop('User Name'));
        $('#label_password').html($.i18n.prop('Password'));
        $('#button_login').val($.i18n.prop('Login'));
      }
  });
  }
    languageSwitch('zh');
});
