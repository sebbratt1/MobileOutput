function randomResult()
{
	
	var randomValue = Math.round(Math.random())
	
	if(randomValue == 1)
	{
		navigator.notification.beep(1);
		window.alert("true");
	}
	else
	{
		navigator.vibrate([200, 300, 500]);
		window.alert("false");
	}
	

}
