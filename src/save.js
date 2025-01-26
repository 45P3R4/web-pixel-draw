export const saveButton = document.getElementById("save-button")

export function save() {
    var link = document.createElement('a');
    link.download = 'image.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
  }