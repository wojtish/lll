var url = ("tasker://secondary?text=aktualnoscirzeszowskielista");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
