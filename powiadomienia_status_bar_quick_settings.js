// powiadomienia_status_bar_quick_settings.js

var url = ("tasker://secondary?text=statusbar");
var i = intent("android.intent.action.VIEW"); i.data(url);
i.send();
