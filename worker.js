let arr = [];
let check = -1;
let check2 = "";
let sum = 0;
let final = 0;
let clicker = 0;

for (i = 0; i< 16;i++){
    arr[i] = 0;
}
// let arr = [];
arr[0] = 0;
var gana = document.getElementById("lala");
var fail = document.getElementById('fail');
// fail.volume = 0.1;
var pass = document.getElementById('pass');
pass.volume = 0.2;
var nhi = document.getElementById('nhi');
var won = document.getElementById('won');

let relation = [9,14,4,10,2,13,12,11,15,0,3,7,6,5,1,8];


let ele,val;
function checker(ele, val){

    console.log (ele);
    console.log (check)
    console.log (check2)

    if (arr[val] == 0){
    
        // console.log (sum)
        if (check != val){
            gana.play();
            // console.log (ele);
            document.getElementById(ele).style.animationName = 'kake';

            document.getElementById(ele).style.animationDuration = "2s"
            console.log ("done");
            document.getElementById(ele).getElementsByTagName('img')[0].style.opacity = "100%";
            document.getElementById(ele).style.backgroundColor = "rgb(64 190 39 / 86%)";
            sum = sum - 10;
            // console.log (x)
            // console.log (check);
            if (check == -1){
                check = val;
                check2 = ele;
                document.getElementsByClassName('score')[0].innerHTML = `Score ${sum}`;
            }
            
            else{
                if (relation[val] == check){
                    setTimeout(() => {
                    pass.play();
                    document.getElementById(ele).getElementsByTagName('img')[0].style.opacity = "0%";
                    document.getElementById(ele).style.backgroundColor = "black";
                    document.getElementById(check2).getElementsByTagName('img')[0].style.opacity = "0%";
                    document.getElementById(check2).style.backgroundColor = "black";
                    arr[val] = 1;
                    arr[check] = 1;
                    check = -1;
                    final = final + 2;
                    sum = sum + 200;
                    document.getElementsByClassName('score')[0].innerHTML = `Score ${sum}`;

                    if (final == 16){
                        won.play();
                        document.getElementsByClassName('victory')[0].style.animationName = 'winner';
                        document.getElementsByClassName('score')[0].style.right = "48%";
                        document.getElementsByClassName('score')[0].style.width = "10rem";
                        document.getElementsByClassName('score')[0].style.fontSize = "1.4rem";
                    }
                    }, 1000);
                    
                }
                else{
                    setTimeout(() => {
                        fail.play();
                        document.getElementById(ele).style.animationName = 'kake2';
           
                        document.getElementById(ele).getElementsByTagName('img')[0].style.opacity = "0%";
                        document.getElementById(ele).style.backgroundColor = "rgb(46, 201, 64)";
                        document.getElementById(check2).style.animationName = 'kake2';
                    
                        document.getElementById(check2).getElementsByTagName('img')[0].style.opacity = "0%";
                        document.getElementById(check2).style.backgroundColor = "rgb(46, 201, 64)";
                        console.log ('jai')
                        check = -1;
                        check2 = "";

                        document.getElementsByClassName('score')[0].innerHTML = `Score ${sum}`;
                    }, 1000);
                    
                }
            }
        }
        else{
            nhi.play();
            document.getElementById(ele).style.animationName = 'shaker';
        }
        
        
    }
    else{
        nhi.play();

    }
}

let elem;
function flipit(elem){
        console.log (elem)
        var rha = document.getElementById('rha');

        rha.volume = 0.05;
        // console.log (rha);
        if (elem == "go"){
            rha.currentTime = 0;
      
            rha.play();
        }
        // console.log('a');
        document.getElementById(elem).style.animationName = 'flipping';
        // document.getElementById('go').style.animationIterationCount = '1';
        if (elem = "go"){

            document.getElementById('chalo').style.visibility = "visible";  
        }

    
}

function flipit2(elem){
        var rha = document.getElementById('rha');
        if (elem == "go"){

            rha.pause();
            rha.currentTime = 0;
        }
        document.getElementById(elem).style.animationName = 'flipping2';
        if (elem = "go"){
            document.getElementById('chalo').style.visibility = "hidden"; 

        }
        
}

