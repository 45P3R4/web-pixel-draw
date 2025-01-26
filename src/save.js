const saveButton = document.getElementById("save-button")

function save() {
    var link = document.createElement('a');
    link.download = 'image.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
  }

  export function initSave() {
    saveButton.addEventListener("mouseup", save);
  }