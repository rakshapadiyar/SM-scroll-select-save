# SM-scroll-select-save
A lightweight JavaScript bookmarklet tool that lets you save selected text from any webpage (including Facebook) with a single click.

✔ Save any selected text instantly  
✔ Works on Facebook, blogs, ChatGPT, any site  
✔ Keeps accumulating all selections  
✔ Retrieve everything in one click  
✔ Lives inside your browser bookmarks  
✔ Zero installation or permissions  

---
##  How It Works

You create two bookmarklets:

### 1. **Save Selected**
Select text → click bookmark → it gets appended to localStorage.

javascript:(function(){const sel=window.getSelection().toString().trim();if(!sel){alert("No text selected!");return;}let saved=localStorage.getItem("saved_fb_text")||"";saved+="\n\n---\n"+sel;localStorage.setItem("saved_fb_text",saved);alert("Saved! Total characters: "+saved.length);})();

### 2. **Show Selected**

Opens a new tab containing everything you’ve saved, including the text selected previously.

javascript:(function(){  const saved = localStorage.getItem("saved_fb_text") || "Nothing saved yet.";  const w = window.open("", "_blank");  w.document.write("<pre>" + saved.replace(/</g,"&lt;") + "</pre>");})();

##  To install

Right-click the bookmark bar → Add Page

Name: Save Selected

URL: paste the first code snippet

Add another bookmark named Show Saved
Paste the second snippet
Select the data you wish to save, click on Save Selected bookmark. Scroll, select more text if you wish to. 
Click Show Saved, to see all the saved data.

Works on websites that don't allow multiselect option(like facebook, where in if you select multiple posts, only the last selected post gets copied)
