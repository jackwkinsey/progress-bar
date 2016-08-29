var data = {
    max: 5000,
    value: 0
};

var progressBar = new Vue({
    el: '#app',
    data: data,
    computed: {
        percentage: function() {
            var per = 100;

            if (this.value < this.max) {
                per = Math.floor((this.value / this.max) * 100);
            }

            return per;
        }
    },
    methods: {
        increment: function() {
            this.value = this.value + 1;
        }
    }
});

progressBar.$watch('value', function(newValue, oldValue) {
    if (newValue > this.max) {
        this.value = this.max;
    }
});
