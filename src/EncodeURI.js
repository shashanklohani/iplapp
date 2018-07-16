export const encode = (str) => {
    var arri= [];

    for(var i=0; i< str.length;i++){
        if(str[i] == " "){
            arri.push(i);
        }
    }
    var newStr = str.splice(8,1, "%20");
    return newStr;
}

String.prototype.splice = function(idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};