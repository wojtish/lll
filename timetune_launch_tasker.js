var url = ("tasker://secondary?text=timetune");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();

