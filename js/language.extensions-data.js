$(function(){
	var currentLanguage = $.cookie('currentLanguage');
	var settingLanguage = null;
	if (!currentLanguage) {
		settingLanguage = 'zh';
		$('#language').val('zh');
		$.cookie('currentLanguage', 'zh', { expires: 30, path: '/' });
	} else {
		settingLanguage = currentLanguage;
		$('#language').val(currentLanguage);
	}
  $('#language').change(function(){
		var LanguageValue = $(this).val();
		$.cookie('currentLanguage', LanguageValue, { expires: 30, path: '/' });
		languageSwitch(LanguageValue);
		window.location.reload()
	});
	$('#button_switch').click(function(){
		var LanguageValue = $(this).val() === 'English' ? 'zh' : 'en';
		$.cookie('currentLanguage', LanguageValue, { expires: 30, path: '/' });
		$('#language').val(LanguageValue);
		languageSwitch(LanguageValue);
		window.location.reload();
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
					// $('[data-i18n-text]').each(function () {
					// 	//如果text里面还有html需要过滤掉
					// 	var html = $(this).html();
					// 	var reg = /<(.*)>/;
					// 	if (reg.test(html)) {
					// 			var htmlValue = reg.exec(html)[0];
					// 			$(this).html(htmlValue + $.i18n.prop($(this).data('i18n-text')));
					// 	}
					// 	else {
					// 			$(this).text($.i18n.prop($(this).data('i18n-text')));
					// 	}
					// });
				}
				catch(e){ console.log(e); }
      }
  });
  }
    languageSwitch(settingLanguage);
});
