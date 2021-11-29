export const hunhe = {
    methods: {
        showName() {
            alert(this.name);
        },

    },
    mounted() {
        console.log("hello hunhe")
    }
}

export const hunhe2 = {
    data(){
        return {
            x:100,
            t:200
        }
    },
    mounted() {
        console.log("hello hunhe2")
    }
}