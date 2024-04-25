let square=[];
function end(num1,num2,num3){
    title.innerHTML=square[num1]+' Winner';
    document.getElementById('item'+num1).style.backgroundColor='green';
    document.getElementById('item'+num2).style.backgroundColor='green';
    document.getElementById('item'+num3).style.backgroundColor='green';
    setInterval(() => {
        title.innerHTML+='.';
    }, 1000);
    setTimeout(() => {
        location.reload();
    }, 3000);
}
function winner(){
    for(let i=1; i<10; i++){
        square[i]=document.getElementById('item'+i).innerHTML;
    }
    if(square[1]==square[2]&&square[2]==square[3]&&square[3]!=''){
        end(1,2,3);
    }
    else if(square[4]==square[5]&&square[5]==square[6]&&square[6]!=''){
        end(4,5,6);
    }
    else if(square[7]==square[8]&&square[8]==square[9]&&square[9]!=''){
        end(7,8,9);
    }
    else if(square[1]==square[4]&&square[4]==square[7]&&square[7]!=''){
        end(1,4,7);
    }
    else if(square[2]==square[5]&&square[5]==square[8]&&square[8]!=''){
        end(2,5,8);
    }
    else if(square[3]==square[6]&&square[6]==square[9]&&square[9]!=''){
        end(3,6,9);
    }
    else if(square[1]==square[5]&&square[5]==square[9]&&square[9]!=''){
        end(1,5,9);
    }
    else if(square[3]==square[5]&&square[5]==square[7]&&square[7]!=''){
        end(3,5,7);
    }
}

let turn='O';
let title=document.querySelector('.title');
function game(id){
    let item=document.getElementById(id);
    if(turn==='O'&&item.innerHTML===''){
        item.innerHTML='O';
        turn='X'
        title.innerHTML='O';
    }
    else if(turn==='X'&&item.innerHTML===''){
        item.innerHTML='X';
        turn='O'
        title.innerHTML='x';

    }
    winner();
}

