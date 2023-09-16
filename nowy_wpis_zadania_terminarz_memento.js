// nowy_wpis_zadania_terminarz_memento.js
var url = ("tasker://secondary?text=nowywpiszadaniaterminarz");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
