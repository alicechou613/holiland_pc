document.getElementById("uname").focus();
$.ajax({
    url:"http://localhost:8080/reg"
})
var input=document.getElementsByClassName("td_input");
input.onfocus(function(){
    this.style.background="yellow"
})
/*
$(function(){
    console.log($("input"));
*/
    /*$("td").focus(function(){
        console.log($(this))
        $(this).css("background","yellow")
        console.log($(this))
    })*/
 /*   
})*/

			//触发提示
			  /* function phone_remind(){
				    phone_warn.innerHTML='请输入注册手机号码';
			   }
			function code_remind(){
				code_warn.innerHTML='请输入验证码';
			}
			function note_code_remind(){
				note_code_warn.innerHTML='请输入短信验证码';
			}

		      function upwd_remind(){
				     upwd_warn.innerHTML='密码必须输入6-20位字符';
			    }
			    function reupwd_remind(){
				    reupwd_warn.innerHTML='请再次输入密码';
			    }
			//离开提示
			    function phone_onblur(){
				   	if(phone.value.length==11){
				      phone_warn.innerHTML='';
				    }else{

				   phone_warn.innerHTML='请输入正确的手机号';
				    }
			    }
			   function upwd_onblur(){
				    if(upwd.value.length>=6&&upwd.value.length<=20){
					  if(reupwd.value==upwd.value){
				   	upwd_warn.innerHTML='两次密码输入一致';
				  	reupwd_onblur();
				  	}else{
				  	upwd_warn.innerHTML='';
				  	}
				    }else{
					  upwd_warn.innerHTML='密码必须输入6-20位字符，请重新输入';
				  }
		   	}
       	function reupwd_onblur(){
				   if(reupwd.value.length>=6&&reupwd.value.length<=20){
					   if(reupwd.value==upwd.value){
				      	reupwd_warn.innerHTML='两次密码输入一致';
					    	upwd_onblur();
				    	}else{
				   	reupwd_warn.innerHTML='两次密码输入不一致';
					 }
			    	}else{
					 reupwd_warn.innerHTML='密码必须输入6-20位字符，请重新输入';
				  }
		   	}
