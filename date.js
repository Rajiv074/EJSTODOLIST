//jshint esversion:6;
exports.getDate = function(){
    let today = new Date();
    let option = {
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
    }
    return today.toLocaleDateString("hi-IN",option);
    
}

exports.getDay = function(){
    let today = new Date();
    let option = {
        weekday:"long"
    }
    return today.toLocaleDateString("hi-IN",option);
    
}