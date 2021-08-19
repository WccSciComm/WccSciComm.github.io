function change() {
    var resourceCbs = document.querySelectorAll(".resource input[type='checkbox']");
    var audienceCbs = document.querySelectorAll(".audience input[type='checkbox']");
    var subjectCbs = document.querySelectorAll(".subject input[type='checkbox']");
    var filters = {
        resources: getClassOfCheckedCheckboxes(resourceCbs),
        audiences: getClassOfCheckedCheckboxes(audienceCbs),
        subjects: getClassOfCheckedCheckboxes(subjectCbs)
    };
    filterResults(filters);
}

function getClassOfCheckedCheckboxes(checkboxes) {
    var classes = [];

    if (checkboxes && checkboxes.length > 0) {
        for (var i = 0; i < checkboxes.length; i++) {
            var cb = checkboxes[i];
            if (cb.checked) {
                classes.push(cb.getAttribute("rel"));
            }
        }
    }
    return classes;
}

function filterResults(filters) {
    var rElems = document.querySelectorAll(".result > div");
    var hiddenElems = [];

    if (!rElems || rElems.length <= 0) {
        return;
    }

    for (var i = 0; i < rElems.length; i++) {
        var el = rElems[i];

        if (filters.resources.length > 0) {
            var isHidden = true;
            for (var j = 0; j < filters.resources.length; j++) {
                var filter = filters.resources[j];
                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }
            if (isHidden) {
                hiddenElems.push(el);
            }
        }

        if (filters.audiences.length > 0) {
            var isHidden = true;
            for (var j = 0; j < filters.audiences.length; j++) {
                var filter = filters.audiences[j];
                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }
            if (isHidden) {
                hiddenElems.push(el);
            }
        }

        if (filters.subjects.length > 0) {
            var isHidden = true;
            for (var j = 0; j < filters.subjects.length; j++) {
                var filter = filters.subjects[j];
                if (el.classList.contains(filter)) {
                    isHidden = false;
                    break;
                }
            }
            if (isHidden) {
                hiddenElems.push(el);
            }
        }
    }

    for (var i = 0; i < rElems.length; i++) {
        rElems[i].style.display = "block";
    }

    if (hiddenElems.length <= 0) {
        return;
    }

    for (var i = 0; i < hiddenElems.length; i++) {
        hiddenElems[i].style.display = "none";
    }
}