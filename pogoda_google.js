var url = ("tasker://secondary?text=pogoda");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
