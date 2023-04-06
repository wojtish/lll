var url = ("tasker://secondary?text=skanujszukajmemento");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
