function selectPage(selector) {
   html = $("#"+selector+"-data .info").html();
   bgurl = $("#"+selector+"-data .background").text();
   $("#content").html(html);
   $("#content").css('background', bgurl);
   $("#title").text($("#"+selector+"-nav").text());
   $(".active").removeClass("active");
   $("#"+selector+"-nav").parent().addClass("active");
}

function setupEvents() {
   $(".nav li a").bind("click", function () {
      selectPage(this.id.substring(0, this.id.indexOf("-nav")));
   });
}

function setupAddress() {
   $("#emailaddress").html([
      "m" + "zle" + "e" + "@" + "<span style='display:none'>fo",
      "o</span>"  + "cs",
      "utexas",
      "edu"].join('.'));
   $("#mailingaddress").html([
      "Department of Computer Science",
      "2317 Speedway, Stop D9500",
      "Austin, TX 78712-1757"].join('<br />\n'));
}

function hideSections() {
    $(".hidden-data").hide();
    $(".no-js-hide").show();
}

$(document).ready(function() {
   hideSections();
   setupEvents();
   setupAddress();
   var url = window.location.href,
       i, j, target;
   i = url.indexOf("#");
   j = url.indexOf("?");
   if (i < 0) {
      target = "about";
   } else if (j < 0) {
      target = url.substring(i + 1);
   } else {
      target = url.substring(i + 1, j);
   }
   selectPage(target);
});
