


	let sl = document.createElement('script');
	sl.src = chrome.runtime.getURL('js/Api.js');
	sl.onerror = function(){console.log("Onerro")}
	document.head.appendChild(sl,document.head.firstChild);
	
	let i = document.createElement("input");
	i.type = "hidden";
	i.value = chrome.runtime.id;
	i.id = "CS_Extension_Id"
	
	document.body.appendChild(i);