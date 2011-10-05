function selectPage(selector) {
   html = $("#" + selector + "-data .info").html();
   bgurl = $("#" + selector + "-data .background").text();
   $("#content").html(html);
   $("#content").css('background', bgurl);
   $("#title").text(selector);

   $(".selected").removeClass("selected");
   $("#" + selector).addClass("selected");
}

function setupEvents() {
   $("#nav li a").bind("click", function () {
	 selectPage(this.id);
      });
}

$(document).ready(function() {
      setupEvents();
      var url = window.location.href,
	 i, j, target;
      i = url.indexOf("#!");
      j = url.indexOf("?");
      if (i < 0) {
	 target = "about";
      } else if (j < 0) {
	 target = url.substring(i + 3);
      } else {
	 target = url.substring(i + 3, j);
      }
      selectPage(target);
   });