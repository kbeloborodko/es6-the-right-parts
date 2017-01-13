function upper(strings,...values) {
	var str = "";

	for (var i = 0; i < strings.length; i++) {
		str+= strings[i];

		if (i !== strings.length - 1) {
			str+= values[i].toUpperCase();
		}
	}

	return str;
}

var name = "kyle",
  twitter = "getify",
  classname = "es6 workshop";

console.log(
  upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
  "Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);
