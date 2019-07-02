//����Ч��

//ajax
$(function(){    
    $.ajax({
        url:"http://localhost:8080/footer.html",
        type:"get",
        success:function(result){       
            $(result).replaceAll("#footer");
            //下拉效果
    $("#divhelp").click(function(){
        $(this).next().toggleClass("open");
        $(this).children(":last-child").toggleClass("openimg");
    })
        }
    })   
})
