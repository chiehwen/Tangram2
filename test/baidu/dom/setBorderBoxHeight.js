module("baidu.dom.setBorderBoxHeight");

//加载快捷方式
test('老接口：prepareTest',function(){
	expect(1);
	stop();

	//加载快捷方式
	ua.importsrc("baidu.short", function(){
		start();
		ok(true,'ok');
	}, "baidu.trim", "baidu.dom.setBorderBoxHeight");
});

test("老接口：base", function() {
	var check = function(styles, expects) {
		if (baidu.browser.isStrict) {
			var div = document.body.appendChild(document.createElement("div"));
			$(div).css("backgroundColor", "red");
			for ( var style in styles) {
				$(div).css(style, styles[style]);
			}
			baidu.dom.setBorderBoxHeight
					&& baidu.dom.setBorderBoxHeight(div, styles['height']);
			baidu.dom.setBorderBoxWidth
					&& baidu.dom.setBorderBoxWidth(div, styles['width']);
			for ( var expect in expects) {
				equals(parseInt(div.style[expect]), expects[expect], "check "
						+ expect);
			}
			$(div).remove();
		}
	};

	check({
		height : 50,
		padding : 0,
		border : 0
	}, {
		height : 50
	});

	check({
		height : 50,
		padding : 10,
		border : 'red solid 10px'
	}, {
		height : 10
	});

	check({
		height : 50,
		padding : 10,
		border : 0
	}, {
		height : 30
	});

	check({
		height : 50,
		margin : 0,
		padding : 0,
		border : 'red solid 10px'
	}, {
		height : 30
	});

	check({
		height : 50,
		margin : 0,
		paddingTop : 10,
		border : 0
	}, {
		height : 40
	});

	check({
		height : 50,
		padding : 0,
		margin : 0,
		borderTopColor: 'red',
		borderTopStyle: 'solid',
		borderTopWidth : 10
	}, {
		height : 40
	});
});
