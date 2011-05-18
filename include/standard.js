$ = (function (id) {
      return document.getElementById(id);
   });

$$ = (function (tag) {
      return document.getElementsByTagName(tag);
   });

function createElement(id, tag) {
   var temp = document.createElement(tag);
   temp.setAttribute("id", id);
   return temp;
}

function removeChildren(node) {
   while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
   }
}

function setOnlyChild(node, newChild) {
   removeChildren(node);
   node.appendChild(newChild);
}

function retrieveUrl(url, callback) {
   var http = new XMLHttpRequest();
   http.open("GET", url, true);
   http.onreadystatechange = (function () {
	 if (http.readyState == 4 && http.status == 200) {
	    callback(http);
	 }
      });
   http.send(null);
}

function getType(obj){
   var funcNameRegex = /function (.{1,})\(/;
   var type = Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1];
   if (type == "Object") {
      type = (funcNameRegex).exec(obj.constructor.toString());
   }
   return type;
}