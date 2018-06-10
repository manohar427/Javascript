//Example - 1
/*
var myPromise = new Promise(function (succ, reject) {
    var flag = true;

    if (flag) {
        succ('Success');
    } else {
        ref('Reject');
    }
});

myPromise.then(function (message) {
    console.log('Fininshed Message:' + message);
}).catch(function (message) {
    console.log('Failure Message:' + message);
});
*/

//Example -2 
/*
var cleanRoomPro = function () {
    return new Promise((res, rej) => {
        var m = 'Room cleaning is done.\n';
        setTimeout(() => {
            res(m)
            console.log(m);
        }, 2000);
    });
}

var removeGarbage = function (message) {
    return new Promise((res, rej) => {
        var m = 'Garbage remove is done.\n';
        setTimeout(
            () => {
                res(m + message);
                console.log(m);
            }
            , 2000);
    });
}

var reward = function (message) {
    return new Promise((res, rej) => {
        var m = 'Icecream won\n';
        setTimeout(
            () => {
                res(m + message);
                console.log(m);
            }
            , 2000);
    });
}
*/
//Finishing one by one.
/*cleanRoomPro().then((message) => {
    return removeGarbage(message);
}
).then((message) => {
    return reward(message);
}).then((message) => {
    console.log("\nSummary Results:");
    console.log(message);
});
*/

//Finish all paralley.
//Promise.all([cleanRoomPro(),removeGarbage(),reward()]).then(()=>{
//console.log('All done');
//});

/*
Promise.race([cleanRoomPro(),removeGarbage(),reward()]).then(()=>{
    console.log('One is done');
    });

var f1 = function(){
    setTimeout(() => {
        console.log('f1 is done.');
        f2();
    }, 2000);
}    

var f2 = function(){
    setTimeout(() => {
        console.log('f2 is done.');
        f3();
    }, 2000);
} 

var f3 = function(){
    setTimeout(() => {
        console.log('f3 is done.');
    }, 2000);
} 

f1();

*/

///

//var promise1 = Promise.resolve(3);
//promise1.finally(()=>{console.log('CCCC')});

Promise.resolve(2).then((aa)=>{console.log(aa)});