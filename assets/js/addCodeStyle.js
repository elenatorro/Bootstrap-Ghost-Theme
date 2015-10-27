$(function() {
	var addCodeStyle = function() {
	var item;
	var element;
		for (item in document.getElementsByTagName('pre')) {
			element = document.getElementsByTagName('pre')[item];
			if (!element.className) {
				element.className = 'language-html';
			}
		};
	};

	addCodeStyle();
});