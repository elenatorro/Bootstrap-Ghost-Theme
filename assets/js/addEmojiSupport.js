$(function() {
	var addEmojiSupport = function() {
		var text = document.getElementById('text-content') || '';
		twemoji.parse(text);
	};

	addEmojiSupport();
});