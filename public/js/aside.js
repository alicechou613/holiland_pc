(function() {
    var div = document.getElementById("help");
    console.log(div);
    var h3s = document.querySelectorAll("#help>div>[data-toggle=open]");
//var h3s=document.getElementsByTagName("h3");
    console.log(h3s);
    for (var h3 of
    h3s
    )
    {
        h3.onclick = function () {
            if (this.className == "h3_title_close") {
                this.className = "h3_title_open";
                this.nextElementSibling.className = "ul_guide_open";
            } else {
                this.className = "h3_title_close";
                this.nextElementSibling.className = "ul_guide_close";
            }
        }
    }
})();
