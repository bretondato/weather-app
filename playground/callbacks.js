var getUser = function(id, callback){

    var user = {
        id: id,
        name: 'bre'
    };

    setTimeout(function () {
        callback(user);
    }, 3000);

    //callback(user);
};

getUser(33, function (userObj) {
    console.log(userObj);
});