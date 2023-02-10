
var url = ("tasker://secondary?text=bibliaaudio");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
