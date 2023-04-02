let hozenaKostka1,hozenaKostka2,hozenaKostka3,hozenaKostka4,hozenaKostka5,hozenaKostka6;
let kostky = [];
let hozenaKostka=0, vyhra=0;
let pocet1=0,pocet2=0,pocet3=0,pocet4=0,pocet5=0,pocet6=0;
let _x, _hozenakostka=0;
let kostka;
let pocet,celkovaVyhra=0,vyhraZaCeleKolo=0;
let maBody =0,pocetKol=0;
let hodnotaHozeniHrac2=0;



resetovani();


function hozeni(){
    
    if(kostka1.style.borderColor == "black"){
    hozenaKostka1 = nahodneCislo();
    document.getElementById('kostka1').innerHTML = '<img src=kostkyTvar/'+hozenaKostka1+'.png>';

    }
    else {kostka1.style.borderColor = "green"}
    if(kostka2.style.borderColor == "black"){
    hozenaKostka2 = nahodneCislo();
    document.getElementById('kostka2').innerHTML = '<img src=kostkyTvar/'+hozenaKostka2+'.png>';
    }  
    else{kostka2.style.borderColor = "green"} 
    if(kostka3.style.borderColor == "black"){
    hozenaKostka3 = nahodneCislo();
    document.getElementById('kostka3').innerHTML = '<img src=kostkyTvar/'+hozenaKostka3+'.png>';
    }
    else{kostka3.style.borderColor = "green"} 
    if(kostka4.style.borderColor == "black"){
    hozenaKostka4 = nahodneCislo();
    document.getElementById('kostka4').innerHTML = '<img src=kostkyTvar/'+hozenaKostka4+'.png>';
    }
    else{kostka4.style.borderColor = "green"} 
    if(kostka5.style.borderColor == "black"){
    hozenaKostka5 = nahodneCislo();
    document.getElementById('kostka5').innerHTML = '<img src=kostkyTvar/'+hozenaKostka5+'.png>';
    }
    else{kostka5.style.borderColor = "green"} 
    if(kostka6.style.borderColor == "black"){
    hozenaKostka6 = nahodneCislo();
    document.getElementById('kostka6').innerHTML = '<img src=kostkyTvar/'+hozenaKostka6+'.png>';
    }
    else{kostka6.style.borderColor = "green"} 
    vsechnyZelene();
}
//zkontroluje zda to jsou výherní kostky 
function hozeniKontrola(){
    if(maBody>=1)
    {
        alert("Žádná výhra")
    }
    else if(vyhra!=0){
    hozeni();
    }
}
function vsechnyZelene(){
    if(kostka1.style.borderColor == "green" &&kostka2.style.borderColor == "green"&&kostka3.style.borderColor == "green" &&kostka4.style.borderColor == "green" &&kostka5.style.borderColor == "green"&&kostka6.style.borderColor == "green" )
    {   kostka1.style.borderColor = "black";
    kostka2.style.borderColor = "black";
    kostka3.style.borderColor = "black";
    kostka4.style.borderColor = "black";
    kostka5.style.borderColor = "black";
    kostka6.style.borderColor = "black";
    hozeni();
    }
}
function nahodneCislo(){
    return Math.ceil((Math.random() * 6),0);
}

//restartuje počty kostek + výhry
function odznaceni(){
    if(maBody>=1)
    {
    }
    else if(vyhra!=0){
    celkovaVyhra+=vyhra;
    pocet1=0,pocet2=0,pocet3=0,pocet4=0,pocet5=0,pocet6=0;
    vyhra=0;
    document.getElementById('mezisoucet').innerHTML = celkovaVyhra;
    document.getElementById('oznaceno').innerHTML = 0;
    }
    else{
        vyhra=0;
    }

}
function resetovani(){
    celkovaVyhra =0;
    vyhra=0;
    document.getElementById('oznaceno').innerHTML = 0;
    document.getElementById('mezisoucet').innerHTML = 0;
    kostka1.style.borderColor = "black";
    kostka2.style.borderColor = "black";
    kostka3.style.borderColor = "black";
    kostka4.style.borderColor = "black";
    kostka5.style.borderColor = "black";
    kostka6.style.borderColor = "black";
    pocet1=0;pocet2=0;pocet3=0;pocet4=0;pocet5=0;pocet6=0;
    pocetKol+=1;
    hozeni();
}

function ukonceniKola(){
    if(vyhra !=0){
    vyhraZaCeleKolo += celkovaVyhra + vyhra;
    document.getElementById('celkem').innerHTML = vyhraZaCeleKolo;
    if(vyhraZaCeleKolo>=3000)
    {
        alert("Gratuluji vyhráli jste (hra bude automaticky restartována)")
        celkovaVyhra=0;
        vyhraZaCeleKolo=0;
        hodnotaHozeniHrac2 = 0;
        document.getElementById('celkem').innerHTML = vyhraZaCeleKolo;
        document.getElementById('celkemHrac2').innerHTML = hodnotaHozeniHrac2;

    }
    resetovani();
    hozeniHrac2();
}
}


function kliknutiNaKostku(_cislokostky,hodnotaOznaceneKostky){
    kostka = document.querySelector(`#kostka${_cislokostky}`);
    if(kostka.style.borderColor == "black"){
        kostka.style.borderColor = "red";
        overeniBodu(hodnotaOznaceneKostky,1);       
        overeniVyhry(hodnotaOznaceneKostky,1);
    }
    else{
        kostka.style.borderColor = "black";
        overeniVyhry(hodnotaOznaceneKostky,-1);
        overeniBodu(hodnotaOznaceneKostky,-1);  
    }
}

document.querySelector('#kostka1').addEventListener('click', () => {
    if(kostka1.style.borderColor != "green"){
    kliknutiNaKostku(1,hozenaKostka1);
    }


});
document.querySelector('#kostka2').addEventListener('click', () => {
    if(kostka2.style.borderColor != "green"){
    kliknutiNaKostku(2,hozenaKostka2);
}

});
document.querySelector('#kostka3').addEventListener('click', () => {
    if(kostka3.style.borderColor != "green"){
    kliknutiNaKostku(3,hozenaKostka3);
}

});
document.querySelector('#kostka4').addEventListener('click', () => {
    if(kostka4.style.borderColor != "green"){
    kliknutiNaKostku(4,hozenaKostka4);
}

});
document.querySelector('#kostka5').addEventListener('click', () => {
    if(kostka5.style.borderColor != "green"){
    kliknutiNaKostku(5,hozenaKostka5);
}

});
document.querySelector('#kostka6').addEventListener('click', () => {
    if(kostka6.style.borderColor != "green"){
    kliknutiNaKostku(6,hozenaKostka6);
}

});

function overeniBodu(hozenaKostka,pricitani){


    if(hozenaKostka == 1)
    {
        pocet1+=pricitani;
    }
    else if(hozenaKostka == 2)
    {  
        pocet2+=pricitani;
    }
    else if(hozenaKostka == 3)
    {
        pocet3+=pricitani;
    }
    else if(hozenaKostka == 4)
    {
        pocet4+=pricitani;
    }
    else if(hozenaKostka == 5)
    {
        pocet5+=pricitani;
    }
    else if(hozenaKostka == 6)
    {
        pocet6+=pricitani;  
    }

    
}
function toggleDetails() {
    var details = document.getElementById("napoveda");
    if (details.style.display === "none") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }


 

function overeniVyhry(_hodnotaOznaceneKostky,pricitani){
    let puvodniVyhra = vyhra;
   
    //postupka 1-5 nebo 2-6
    if(pocet1==1&&pocet2==1&&pocet3==1&&pocet4==1&&pocet5==1){vyhra +=350 * pricitani;maBody-=3*pricitani}
    else if(pocet2==1&&pocet3==1&&pocet4==1&&pocet5==1&&pocet6==1){vyhra +=700 * pricitani ;maBody-=3*pricitani}
    //hod po 6
    if(pocet1==6&& _hodnotaOznaceneKostky==1){vyhra +=1900 * pricitani}
    if(pocet2==6&& _hodnotaOznaceneKostky==2){vyhra +=800 * pricitani}
    if(pocet3==6&& _hodnotaOznaceneKostky==3){vyhra +=1200 * pricitani}
    if(pocet4==6&& _hodnotaOznaceneKostky==4){vyhra +=1600 * pricitani}
    if(pocet5==6&& _hodnotaOznaceneKostky==5){vyhra +=1950 * pricitani}
    if(pocet6==6&& _hodnotaOznaceneKostky==6){vyhra +=2400 * pricitani}
    //hod po 5
    if(pocet1==5&& _hodnotaOznaceneKostky==1){vyhra +=1900 * pricitani}
    if(pocet2==5&& _hodnotaOznaceneKostky==2){vyhra +=400 * pricitani}
    if(pocet3==5&& _hodnotaOznaceneKostky==3){vyhra +=600 * pricitani}
    if(pocet4==5&& _hodnotaOznaceneKostky==4){vyhra +=800 * pricitani}
    if(pocet5==5&& _hodnotaOznaceneKostky==5){vyhra +=950 * pricitani}
    if(pocet6==5&& _hodnotaOznaceneKostky==6){vyhra +=1200 * pricitani}
    //hod po 4
    if(pocet1==4&& _hodnotaOznaceneKostky==1){vyhra +=900 * pricitani}
    if(pocet2==4&& _hodnotaOznaceneKostky==2){vyhra +=200 * pricitani}
    if(pocet3==4&& _hodnotaOznaceneKostky==3){vyhra +=300 * pricitani}
    if(pocet4==4&& _hodnotaOznaceneKostky==4){vyhra +=400 * pricitani}
    if(pocet5==4&& _hodnotaOznaceneKostky==5){vyhra +=450 * pricitani}
    if(pocet6==4&& _hodnotaOznaceneKostky==6){vyhra +=600 * pricitani}
    //hod po 3
    if(pocet2==3&& _hodnotaOznaceneKostky==2){vyhra +=200 * pricitani;maBody-=2*pricitani}
    if(pocet3==3&& _hodnotaOznaceneKostky==3){vyhra +=300 * pricitani;maBody-=2*pricitani}
    if(pocet4==3&& _hodnotaOznaceneKostky==4){vyhra +=400 * pricitani;maBody-=2*pricitani}
    if(pocet5==3&& _hodnotaOznaceneKostky==5){vyhra +=350 * pricitani;maBody-=2*pricitani}
    if(pocet6==3&& _hodnotaOznaceneKostky==6){vyhra +=600 * pricitani;maBody-=2*pricitani}

    if(pocet1==3 && _hodnotaOznaceneKostky==1)
    {
        vyhra +=700 * pricitani;  
    }

    if(pocet1>=1 && _hodnotaOznaceneKostky==1)
    {
        vyhra += (100 * pricitani);
        pocet+= pricitani;

    }
    if(pocet5>=1 && _hodnotaOznaceneKostky==5)
    {  
        vyhra += (50 * pricitani);
        pocet+= pricitani;    
    }
    if(pocet1==1&&pocet2==1&&pocet3==1&&pocet4==1&&pocet5==1&&pocet6==1){if(pricitani==1){vyhra =1500}else{vyhra=0}}
    
    if(puvodniVyhra==vyhra)
    {
        //označená nevýherní kostka
        maBody += pricitani;
    }

    document.getElementById('oznaceno').innerHTML = vyhra;
   
}
function hozeniHrac2(){
    
    hodnotaHozeniHrac2 += Math.ceil((Math.random() * 700),0);
document.getElementById('celkemHrac2').innerHTML = hodnotaHozeniHrac2;
if(hodnotaHozeniHrac2>3000)
    {
        alert("Prohráli jste! (hra bude automaticky restartována)")
        celkovaVyhra=0;
        hodnotaHozeniHrac2 = 0;
        vyhraZaCeleKolo=0;
        document.getElementById('celkem').innerHTML = vyhraZaCeleKolo;
        document.getElementById('celkemHrac2').innerHTML = hodnotaHozeniHrac2;

    }

}

