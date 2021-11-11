const baseUri = "http://jsonplaceholder.typicode.com/posts"

Vue.createApp({
    data() {
        return {
            foodlist: [
                {"id":1,"name":'Cornflakes',"inStock":5,lowLevel:5},
                {"id":2,"name":'Cola',"inStock":15,lowLevel:10},
                {"id":3,"name":'Beer',"inStock":14,"lowLevel":10},
                {"id":4,"name":'Coffee',"inStock":4,"lowLevel":10},
                
        ],
        newFood : {
            id:0,
            name:'',
            inStock:0,
            lowLevel:0

        },
            error: null,
            userId: "",
            selectedId:1
        }
    },
     created() {
        // created() is a life cycle method, not an ordinary method
        // created() is called automatically when the page is loaded
        console.log("created method called")
        //this.getAllPosts()
    },
    computed: {
        lowInStock() {
            const selItem = this.foodlist[this.selectedId-1];
            console.log(selItem);

            // const cabin = this.product.cabins[this.booking.cabinIndex];
            return `${selItem.name}: has ${selItem.inStock-selItem.lowLevel} units in stock before you need to reorder`
        }
    },
    methods: {
        cleanList() {
            this.foodlist = [];
            this.error = null;
            console.log("count post : " + this.foodlist.length);
        },
    }
}).mount("#app")