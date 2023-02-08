var url = ("tasker://secondary?text=magazyniinwentaryzacja");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
