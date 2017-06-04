$(document).ready(function()
{
	$("#Clickables").mouseup(function() 
	{
		$(this).css({"background":'url("http://igt.bitballoon.com/images/click.png") no-repeat center', "background-size":"75% 75%"});
	});

	$("#Clickables").mouseout(function() 
	{
		$(this).css({"background":'url("http://igt.bitballoon.com/images/click.png") no-repeat center', "background-size":"75% 75%"});
	});

	$("#Clickables").mousedown(function()
	{
		$(this).css({"background":'url("http://igt.bitballoon.com/images/clickdown.png")', "background-size":"75% 75%", "background-repeat":"no-repeat"});
	});
});
