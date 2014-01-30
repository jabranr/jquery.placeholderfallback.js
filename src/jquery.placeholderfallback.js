/**
 * jQuery function to set placeholders fallback for IE9 and less
 * @author: Jabran Rafique - hello@jabran.me
 *s
 **/

(function($)	{
	$.fn.placeholderfallback = function()	{
		return this.each(function()	{
			var $this = $(this);
			$this.css('color', '#999');
			$this.val($this.attr('placeholder'));

			$this.on('focus', function()	{
				( $this.val() !== '' && $this.val() == $this.attr('placeholder') ) ? $this.val('') : false;
				$this.css('color', $('body').css('color') ? $('body').css('color') : '#333' );
			});

			$this.on('blur', function()	{
				( $this.val() == '' ) ? $this.val($this.attr('placeholder')) : false;
				if ( $this.val() == $this.attr('placeholder') )
					$this.css('color', '#999');
			});
		});
	};
})(jQuery);