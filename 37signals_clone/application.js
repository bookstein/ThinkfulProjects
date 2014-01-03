$(document).ready(function () {

//Basecamp hover effects. --> .hover(function1, function2)

$(".products a").hover(
	function () {
		if ($(this).hasClass("bc")) {
			$("header").addClass("hidden");
			$("div.bc").addClass("extra").removeClass("hidden")
		};

		if ($(this).hasClass("hr")) {
			$("header").addClass("hidden");
			$("div.hr").addClass("extra").removeClass("hidden")
		};

		if ($(this).hasClass("cf")) {
			$("header").addClass("hidden");
			$("div.cf").addClass("extra").removeClass("hidden")
		};
	},

	function () {
		$("div.bc, div.hr, div.cf").addClass("hidden").removeClass("extra");
		$("header").removeClass("hidden");
		}
	) //End .hover()

});