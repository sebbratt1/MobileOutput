function randomResult()
{
	
	var randomValue = Math.round(Math.random())
	
	if(randomValue == 1)
	{
		navigator.notification.beep(1);	//beep once
		window.alert("working");
	}
	else
	{
		navigator.notification.beep(2);	//beep twice
		window.alert("working");
	}
	

}
