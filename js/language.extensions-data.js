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
				try {
					$('[data-i18n-placeholder]').each(function () {
						$(this).attr('placeholder', $.i18n.prop($(this).data('i18n-placeholder')));
					});
					$('[data-i18n-label]').each(function () {
						$(this).text($.i18n.prop($(this).data('i18n-label')));
					});
					$('[data-i18n-value]').each(function () {
						$(this).val($.i18n.prop($(this).data('i18n-value')));
					});
				}
				catch(e){ console.log(e); }
      }
  });
  }
    languageSwitch('zh');
});
