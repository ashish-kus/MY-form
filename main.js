let appliPhotograph= document.getElementById("1-photograph")
let fileResult = document.getElementById("file-result");
let fileSubmit = document.getElementById("file-submit");

appliPhotograph.addEventListener("change", function () {
    if (appliPhotograph.files.length > 0) {
      const fileSize = appliPhotograph.files.item(0).size;
      const fileMb = fileSize / 1024 ** 2;
      if (fileMb >= 2) {
        fileResult.innerHTML = "Please select a file less than 2MB.";
        fileSubmit.disabled = true;
      } else {
        fileResult.innerHTML = "Success, your file is " + fileMb.toFixed(1) + "MB.";
        fileSubmit.disabled = true;
      }
    }
  });