var url = ("tasker://secondary?text=sportstrackermapa");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();

