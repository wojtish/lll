var url = ("tasker://secondary?text=youtubelaunch");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
