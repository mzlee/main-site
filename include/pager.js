function appendObject(obj, data) {
   if (getType(data) == "String" || getType(data) == "Number") {
      obj.setAttribute("class", "main-text");
      obj.innerHTML += data;
      return;
   }
      
   for (name in data) {
      var d = document.createElement("div");
      if (getType(data[name]) == "Array") {
	 var i;
	 for (i = 0; i < data[name].length - 1; i++) {
	    appendObject(d, data[name][i]);
	 }
	 appendObject(d, data[name][i]);
      } else {
	 appendObject(d, data[name]);
      }
      obj.appendChild(d);
   }
}

function setContainer(resp) {
   // Evaluate the response object
   var obj = eval(resp.responseText);
   var id = obj.id;
   var data = obj.data;

   // Set the elements
   var div = createElement("main-box", "div");
   div.setAttribute("class", "box");
   $("top-title").innerHTML = id;
   for (el in data) {
      var subtitle = createElement(id+"-"+el, "h2");
      subtitle.innerHTML = el + ":";
      div.appendChild(subtitle);
      appendObject(div, data[el]);
   }
   $("main-box").parentNode.replaceChild(div, $("main-box"));
}

var selected = null;
function selectSection (obj) {
   if (selected) {
      selected.setAttribute("class", "nav-link");
   }
   obj.setAttribute("class", "nav-link selected");
   selected = obj;
   retrieveUrl(obj.id + ".json", setContainer);
}
