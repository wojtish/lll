var url = ("tasker://secondary?text=workinghours");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();

