var RecentCounter = function() {
    this.arr=[];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t);
    for(var i=0;i<this.arr.length;i++){
        if(this.arr[i]<(this.arr[this.arr.length-1]-3000)){
            this.arr.splice(i,1)
            i--;
        }else{
            break;
        }
    }
    return this.arr.length;
};
