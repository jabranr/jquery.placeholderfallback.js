# Form fields placeholders - jQuery plugin

`placeholderfallback` is a small jQuery plugin providing support for browsers that do not support the `placeholder` attribute for form fields, in particular for Internet Explorer 9 and lower, and Opera Mini 8. This plugin makes use of give `placeholder` attribute to set and display the values accordingly.

# Install

**Bower**

``` shell
$ bower install placeholder-fallback
```

# Usage

+ Include this plugin in your HTML:
``` html
<script src="path/to/jquery.placeholderfallback.min.js" type="text/javascript"></script>
```
+ Call the method on any form field or on multiple form fields by passing them as an array.
+ Wrap this method call between IE conditional tags to make sure that it is only called when required.

# Example

``` html

<!doctype HTML>
<html>
<head>
	<title>Example</title>
	<script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
	<script src="bower_components/placeholder-fallback/dist/jquery.placeholderfallback.js"></script>
</head>
<body>
	
	<form>
		<input type="text" id="firstNameField" placeholder="First Name">
		<input type="text" id="lastNameField" placeholder="Last Name">
		<input type="email" id="emailField" placeholder="Email address">
	</form>

	<!--[if lt IE 10]>
	<script>
		$('#firstNameField, #lastNameField, #emailField').placeholderfallback();
	</script>
	<![endif]-->

</body>
</html>

```


# Dependencies

Requires jQuery 1.8 +


# License

MIT License - &copy; Jabran Rafique 2013

[![Analytics](https://ga-beacon.appspot.com/UA-50688851-1/jquery.placeholderfallback.js)](https://github.com/igrigorik/ga-beacon)
