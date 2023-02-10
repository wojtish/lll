
var url = ("tasker://secondary?text=bibliaudio");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
