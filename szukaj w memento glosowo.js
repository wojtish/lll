var url = ("tasker://secondary?text=szukajmementoglosowo");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
