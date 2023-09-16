// zapisz_wpis_memento.js
var url = ("tasker://secondary?text=zapiszwpismemento");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
