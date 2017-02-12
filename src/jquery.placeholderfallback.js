/**
 * Small jQuery plugin to provide placeholder fallback support
 * in HTML forms for legacy browsers such as IE9 and lower
 *
 * @author: Jabran Rafique <hello@jabran.me>
 * @license: MIT License
 */

 !(function($)	{
 	$.fn.placeholderfallback = function()	{
 		var $body = $('body');

 		return this.each(function()	{
 			var $this = $(this);
 			$this.css('color', '#999');
 			$this.val($this.attr('placeholder'));

 			$this.on('focus', function()	{
 				($this.val() !== '' && $this.val() === $this.attr('placeholder')) ? $this.val('') : false;
 				$this.css('color', ($body.css('color') ? $body.css('color') : '#333'));
 			});

 			$this.on('blur', function()	{
 				($this.val() === '') ? $this.val($this.attr('placeholder')) : false;

 				if ($this.val() === $this.attr('placeholder')) {
 					$this.css('color', '#999');
 				}
 			});
 		});
 	};
 })(jQuery);