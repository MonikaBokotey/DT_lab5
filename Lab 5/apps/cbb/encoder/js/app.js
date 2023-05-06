var app = new Vue({
    el: '#baseband-encoder',
    data: {
        bits: [],
        encodedBitsManchester: [],
        encodedBitsNRZM: [],
        status: '',
        numberOfBits: 8,
        validateBit: validateBit
    },
    created: function () {
        this.bits = getBitstream(this.numberOfBits);
    },
    methods: {
        encode: function(){
            this.encodedBitsManchester = getManchesterLevelEncoding(this.bits);
            this.encodedBitsNRZM = getNRZM(this.bits);
        }   
    }
})

console.log('🍓🥑🍏☕🏆⚽✅🚦');