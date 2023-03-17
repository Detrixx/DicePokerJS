let hozenaKostka1,hozenaKostka2,hozenaKostka3,hozenaKostka4,hozenaKostka5,hozenaKostka6;
let kostky = [];
let hozenaKostka=0, vyhra=0;
let pocet1=0,pocet2=0,pocet3=0,pocet4=0,pocet5=0,pocet6=0;
let x1=0, x2=0, x3=0, x4=0, x5=0, x6=0;
let _x, _hozenakostka=0;
let kostka;
let pocet;
function hozeni(){
   
    hozenaKostka1 = Math.ceil((Math.random() * 6),0);
    document.getElementById('kostka1').innerHTML = hozenaKostka1;
    hozenaKostka2 = Math.ceil((Math.random() * 6),0);
    document.getElementById('kostka2').innerHTML = hozenaKostka2;
    hozenaKostka3 = Math.ceil((Math.random() * 6),0);
    document.getElementById('kostka3').innerHTML = hozenaKostka3;
    hozenaKostka4 = Math.ceil((Math.random() * 6),0);
    document.getElementById('kostka4').innerHTML = hozenaKostka4;
    hozenaKostka5 = Math.ceil((Math.random() * 6),0);
    document.getElementById('kostka5').innerHTML = hozenaKostka5;
    hozenaKostka6 = Math.ceil((Math.random() * 6),0);
    document.getElementById('kostka6').innerHTML = hozenaKostka6;
}

function odznaceni(){
    x1=0, x2=0, x3=0, x4=0, x5=0, x6=0;
    pocet1=0,pocet2=0,pocet3=0,pocet4=0,pocet5=0,pocet6=0;
    vyhra=0;
    kostka1.style.borderColor = "black";
    kostka2.style.borderColor = "black";
    kostka3.style.borderColor = "black";
    kostka4.style.borderColor = "black";
    kostka5.style.borderColor = "black";
    kostka6.style.borderColor = "black";

}

function kliknutiNaKostku(_cislokostky,hodnotaOznaceneKostky){
    kostka = document.querySelector(`#kostka${_cislokostky}`);
    if(kostka.style.borderColor == "black"){
        kostka.style.borderColor = "red";
        overeniBodu(hodnotaOznaceneKostky,1);       
        overeniVyhry(1);
    }
    else{
        kostka.style.borderColor = "black";
        overeniVyhry(-1);
        overeniBodu(hodnotaOznaceneKostky,-1);  
    }
}

document.querySelector('#kostka1').addEventListener('click', () => {
    kliknutiNaKostku(1,hozenaKostka1);


});
document.querySelector('#kostka2').addEventListener('click', () => {
    kliknutiNaKostku(2,hozenaKostka2);

});
document.querySelector('#kostka3').addEventListener('click', () => {
    kliknutiNaKostku(3,hozenaKostka3);

});
document.querySelector('#kostka4').addEventListener('click', () => {
    kliknutiNaKostku(4,hozenaKostka4);

});
document.querySelector('#kostka5').addEventListener('click', () => {
    kliknutiNaKostku(5,hozenaKostka5);

});
document.querySelector('#kostka6').addEventListener('click', () => {
    kliknutiNaKostku(6,hozenaKostka6);

});

function overeniBodu(hozenaKostka,pricitani){


    if(hozenaKostka == 1)
    {
        pocet1+=pricitani;
        console.log(pocet1);
    }
    else if(hozenaKostka == 2)
    {  
        pocet2+=pricitani;
        console.log(pocet2);
    }
    else if(hozenaKostka == 3)
    {
        pocet3+=pricitani;
        console.log(pocet3);
    }
    else if(hozenaKostka == 4)
    {
        pocet4+=pricitani;
        console.log(pocet4);
    }
    else if(hozenaKostka == 5)
    {
        pocet5+=pricitani;
        console.log(pocet5);
    }
    else if(hozenaKostka == 6)
    {
        pocet6+=pricitani;  

        
        console.log(pocet6);
    }

    
}

 

function overeniVyhry(pricitani){
    //hod po 6
    if(pocet1==4){vyhra +=2000 * pricitani}
    if(pocet2==4){vyhra +=800 * pricitani}
    if(pocet3==4){vyhra +=1200 * pricitani}
    if(pocet4==4){vyhra +=1600 * pricitani}
    if(pocet5==4){vyhra +=2000 * pricitani}
    if(pocet6==4){vyhra +=2400 * pricitani}
    //hod po 5
    if(pocet1==5){vyhra +=1000 * pricitani}
    if(pocet2==5){vyhra +=400 * pricitani}
    if(pocet3==5){vyhra +=600 * pricitani}
    if(pocet4==5){vyhra +=800 * pricitani}
    if(pocet5==5){vyhra +=1000 * pricitani}
    if(pocet6==5){vyhra +=1200 * pricitani}
    //hod po 4
    if(pocet1==4){vyhra +=1000 * pricitani}
    if(pocet2==4){vyhra +=200 * pricitani}
    if(pocet3==4){vyhra +=300 * pricitani}
    if(pocet4==4){vyhra +=400 * pricitani}
    if(pocet5==4){vyhra +=500 * pricitani}
    if(pocet6==4){vyhra +=600 * pricitani}
    //hod po 3
    if(pocet2==3){vyhra +=200 * pricitani}
    if(pocet3==3){vyhra +=300 * pricitani}
    if(pocet4==3){vyhra +=400 * pricitani}
    if(pocet5==3){vyhra +=400 * pricitani}
    if(pocet6==3){vyhra +=600 * pricitani}

    if(pocet1==3)
    {

        vyhra +=800 * pricitani;
        
    }

    if(pocet1>=1)
    {
        vyhra += (100 * pricitani);
        pocet+= pricitani;    
    }
    if(pocet5>=1)
    {  
        vyhra += (50 * pricitani);
        pocet+= pricitani;    
    }

    console.log(vyhra);
   
}

