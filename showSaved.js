javascript:(function(){
  const saved = localStorage.getItem("saved_fb_text") || "Nothing saved yet.";
  const w = window.open("", "_blank");
  w.document.write("<pre style='white-space: pre-wrap; font-family: monospace;'>" 
    + saved.replace(/</g, "&lt;") 
    + "</pre>");
})();
