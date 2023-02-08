var url = ("tasker://secondary?text=vradio");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
