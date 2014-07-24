# Placeholders Fallback Support Plugin

`placeholderfallback` is a small jQuery plugin that makes use of default attributes of form fields and set them as placeholder fallback, in particular, for IE9 and lower, for a better user experience.


## Install

**Bower**

``` shell
$ bower install placeholder-fallback
```

## Usage

+ Include the `dist/jquery.placeholderfallback.min.js` in your web document.
+ Call the method on any form field or on multiple form fields by passing them as an array.
+ Wrap this method call between IE conditional tags to make sure that it is only called when required.

## Example

``` html

<!doctype HTML>
<html>
<head>
	<title>Example</title>
	<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
	<script src="dist/jquery.placeholderfallback.js"></script>
</head>
<body>
	
	<form>
		<input type="text" id="firstNameField" placeholder="First Name">
		<input type="text" id="lastNameField" placeholder="Last Name">
		<input type="email" id="emailField" placeholder="Email address">
	</form>

	<!--[if lt IE 10]>
		<script>
			(function()	{
				$('#firstNameField, #lastNameField, #emailField').placeholderfallback();
			})();
		</script>
	<![endif]-->

</body>
</html>

```


### Dependencies

Requires jQuery 1.8 +
