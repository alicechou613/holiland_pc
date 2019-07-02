new Vue({
    el:"#login",
    data:{
        isLogin:true,
        uname:"dingding"
    },
    methods:{
        login(){
            this.isLogin=true
        },
        logout(){
            this.isLogin=false
        }
    }
})
