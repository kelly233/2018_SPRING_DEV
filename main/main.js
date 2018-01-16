function IdTest(str,num) {
    let re = str.split('\n');
    if((num+1) > re.length)
        return false;
    return true;
}
function JudgeTheLengthOfMessage(len){
    if(len < 7)
        return false;
    return true;
}

function Whether1CoordinateEquals0(arr1,arr2,id) {
    let [x1,y1,z1] = [arr2[1],arr2[2],arr2[3]];
    if(!(x1 === arr1[1] && y1 === arr1[2]&& z1 === arr1[3]|| 
            !JudgeTheLengthOfMessage(arr2.length,id)))
        return false;
    return true;
}

function JudgeTheCoordinate(arr1,arr2) {
    let [x1,y1,z1] = [parseInt(arr2[1]),parseInt(arr2[2]),parseInt(arr2[3])];
    let [x2,y2,z2] = [parseInt(arr1[1]),parseInt(arr1[2]),parseInt(arr1[3])];
    let [x3,y3,z3] = [parseInt(arr1[4]),parseInt(arr1[5]),parseInt(arr1[6])];
    if(!(x1 === x2+x3 && y1===y2+y3 && z1 === z2+z3))
        return false;
    return true;
}

function PrintResult(arr,id) {
    if(id === 0) return arr[0] + ' '+ id + ' '+ arr[1] + ' '+arr[2]+' '+ arr[3];
    let x = parseInt(arr[1])+parseInt(arr[4]);
    let y = parseInt(arr[2])+parseInt(arr[5]);
    let z = parseInt(arr[3])+parseInt(arr[6]);
    return arr[0] + ' ' +id +' '+ x +' '+y + ' '+z ;
}

function JudgetheSateOfUAV(str,id) {
    let arr0 = str.split('\n');
    let arr3 = arr0[id].split(' ');
    if(!Whether1CoordinateEquals0(arr0[0],arr0[1],id) )
        return "Error "+id;
    for (let i = 2;i<= id;i++){
        let arr1 = arr0[i-1].split(' ');
        let arr2 = arr0[i].split(' ');
        if(!JudgeTheLengthOfMessage(arr2.length)||!JudgeTheCoordinate(arr1,arr2))
               return "Error " + id;
    }
    return PrintResult(arr3,id);
    }


module.exports = function UAV(message,id) {
    if(!IdTest(message,id))
        return "Cannot find "+id;
    return JudgetheSateOfUAV(message,id);
}
