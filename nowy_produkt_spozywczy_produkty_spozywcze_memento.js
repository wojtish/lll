var url = ("tasker://secondary?text=nowyproduktspozywczy");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
