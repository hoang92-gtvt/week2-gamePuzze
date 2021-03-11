let count1 =0;
function change1(){
    let objImg1;
    objImg1=document.getElementById('img1');
    count1 = count1+1;
    if (count1==4){count1=0};
    switch (count1){
        case 1:
            objImg1.src="2.1.png";break;

        case 2:
            objImg1.src="3.1.png";break;
        case 3:
            objImg1.src="1.1.png";break;
    }


}
let count2 =0;
function change2(){
    let objImg2;
    objImg2=document.getElementById('img2');
    count2 = count2+1;
    if (count2==4){count2=0};
    switch (count2){
        case 1:
            objImg2.src="3.2.png";break;

        case 2:
            objImg2.src="1.2.png";break;
        case 3:
            objImg2.src="2.2.png";break;
    }

}
let count3 =0;
function change3(){
    let objImg3;
    objImg3=document.getElementById('img3');
    count3 = count3+1;
    if (count3==4){count3=0};
    switch (count3){
        case 1:
            objImg3.src="1.3.png";break;

        case 2:
            objImg3.src="2.3.png";break;
        case 3:
            objImg3.src="3.3.png";break;
    }

}

