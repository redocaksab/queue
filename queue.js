let queueForm = document.forms.queueForm;

let ol = document.createElement("ol");

ol.innerHTML = localStorage.queueHTML || null;
document.body.append(ol);

queueForm.elements.addButton.onclick = function () {
    if (ol.children.length < 19 && queueForm.elements.queueValue.value) {
        ol.innerHTML += `<li>${queueForm.elements.queueValue.value}</li>`;
        localStorage.setItem("queueHTML", ol.innerHTML);
        queueForm.elements.queueValue.value = "";
    } else {
        alert("queue is full or you entered an invalid value");
    }
};
queueForm.elements.removeButton.onclick = function () {
    if (!ol.children.length) {
        delete localStorage.queueHTML;
        alert("queue is empty");
    } else {
        ol.children[0].remove();
        localStorage.setItem("queueHTML", ol.innerHTML);
    }
};
queueForm.onsubmit = function () {
    return false;
}