$(function() {
	var addCodeStyle = function() {
	var item;
	var element;
		for (item in document.getElementsByTagName('code')) {
			element = document.getElementsByTagName('code')[item];
			if (!element.className) {
				element.className = 'language-html';
			}
		};
	};

	addCodeStyle();
});