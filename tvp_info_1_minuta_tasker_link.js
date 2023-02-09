var url = ("tasker://secondary?text=tvpinfo1minuta");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
