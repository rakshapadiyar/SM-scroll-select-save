javascript:(function(){
  const sel = window.getSelection().toString().trim();
  if (!sel) {
    alert("No text selected!");
    return;
  }

  let saved = localStorage.getItem("saved_text") || "";
  saved += "\n\n---\n" + sel;
  localStorage.setItem("saved_text", saved);

  alert("Saved! Total characters: " + saved.length);
})();
