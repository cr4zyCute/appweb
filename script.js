document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "Captured.apk";
  link.download = "Captured.apk";
  link.click();
});
