export const saveButton = document.getElementById("save-button")

export function save() {
    var link = document.createElement('a');
    link.download = 'filename.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
  }