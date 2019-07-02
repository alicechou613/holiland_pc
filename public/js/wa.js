$(function(){
    //左边轮播图片
   var $imgmd=$("div.div_img");
  // console.log($("div.div_img"))
    //下面的点   
    var $carousel=$("ul.carousel_indicatos>li")
    //console.log($carousel);
    
    for(var car of $carousel){  
        $(car).click(function(){
            console.log(1);
            //鼠标点击圆圈，被点的圆圈实心，其他空心
            $(this).addClass("li_active")
            .siblings().removeClass("li_active");
            console.log(2);
            //鼠标点击圆圈，上面的md图变化
            var md=$(this).attr("data-md")
            $imgmd.css({
                backgroundImage:`url(${md})`,
                backgroundSize:"100% 100%"
            })
            console.log(3);
        })
    }
    //左右箭头
   
    var $left=$("a.a_prev_left");
    var $right=$left.next();
    //鼠标点击左右箭头，圆圈跟着变化，上面的md图变化
    var $li=$("li.li_active")
        $right.click(function(){  
            if($li.attr("data-n")<$carousel.length){     
            $("li.li_active").next().click() 
            }else{
                $li1=$("ul.carousel_indicatos>li:first-child")
                console.log($li1);
            }      
        })
    
    $left.click(function(){       
        $("li.li_active").prev().click()       
    })
    
     
   
         
   
    


   // console.log($left)
   // console.log($right)
   

})