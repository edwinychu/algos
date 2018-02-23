Function.prototype.bind = function(context){
    var that = this;
    var previousArgs = [].slice.call(arguments, 1);
    return function() {
        var currentArgs = [].slice.call(arguments);
        var combinedArgs = currentArgs.concat(previousArgs);
        return that.apply(context, combinedArgs);
    }
}


Function.prototype.call = function(context) {
    var args = [].slice.call(arguments, 1);
    return this.apply(context, arguments);
}