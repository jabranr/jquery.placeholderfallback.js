## Fallback Placeholders for IE

`placeholderfallback` is a small jQuery function that takes the default attributes of form fields and set them as placeholder fallback, in particular for IE9 and lower for a better user experience.

### Usage

+ Include the `src/jquery.placeholderfallback.js` in your web document.
+ Or copy the function into any of your existing `JavaScript` file to save an extra http request going out. (Recommended)
+ Call the function on any form field or on multiple form fields by passing them as an array.
+ Wrap this function call between IE conditional tags to make sure that it is only called when required.

**Example Use:**

``` html

<!doctype HTML>
<html>
<head>
	<title>Example</title>
	<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
	<script src="src/jquery.placeholderfallback.js"></script>
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
