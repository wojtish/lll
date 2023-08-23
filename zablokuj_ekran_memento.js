var url = ("tasker://secondary?text=zablokujekran");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
