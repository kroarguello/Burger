module.exports = function(props){
	const { children } = props;
	return /*html*/`
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
			<link rel="stylesheet" href="/assets/css/burger_style.css" type="text/css" />
			<title>Eat-Da-Burger</title>
			<script src="https://code.jquery.com/jquery.js"></script>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
			<script src="/public/js/burgers.js"></script>
		</head>
		<body>
			${ children }
		</body>
	</html>
	`
}