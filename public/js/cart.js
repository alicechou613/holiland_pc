new Vue({
    el:"#table1",
    data:{
      count:"10"
    },
    watch:{
      count(){
        console.log(this.count)
      },
    methods:{
        minus(){
          console.log(1);
            this.count--;
        },
        add(){
          console.log(2);
            this.count++;
        }
    }
    }
  })
  