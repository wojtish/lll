var url = ("tasker://secondary?text=historiamemento");

var i = intent("android.intent.action.VIEW"); i.data(url);

i.send();
