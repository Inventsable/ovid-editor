var rootpath = 'C:/Users/TRSch/OneDrive/Documents/inventsable/business/Invoices'

var item = {
    DATEDUE: "08/11/2019",
    DATENOW: "07/11/2019",
    ENTRYTITLE: "Some panel",
    ENTRYDESC: "Zombie ipsum",
    ENTRYPRICE: "$$$$",
    ENTRYWHEN: "06/22/2019",
    NOTE: "Thanks!",
    PAYINFO: "payment@inventsable.cc",
    PAYTOTAL: "$$$$$",
    ID: "1005",
    CLIENT: "CLIENT HERE"
};

// http://docs.aenhancers.com/

function assignTextFromItem(item) {
    for (var i = 0; i < app.activeDocument.textFrames.length; i++) {
        var active = app.activeDocument.textFrames[i];
        if (active.name) {
            var newname = active.name.replace("#", "");
            active.contents = item[newname];
            console.log(active.name + " " + item[newname]);
        }
    }
}

function resetAllTemplateText() {
    for (var i = 0; app.activeDocument.textFrames.length; i++) {
        var active = app.activeDocument.textFrames[i];
        if (active.name) active.contents = "xxxx";
    }
    console.clear()
}

// assignTextFromItem(item);
resetAllTemplateText();
