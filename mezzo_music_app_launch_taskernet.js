var url = ("tasker://secondary?text=mezzo");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
