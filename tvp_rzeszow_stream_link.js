var url = ("tasker://secondary?text=tvprzeszowstream");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
