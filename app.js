let hr = document.getElementById('hr');
let mn = document.getElementById('mn');
let sc = document.getElementById('sc');
let root = document.documentElement;

function setClockTime(){
let day = new Date();
let hh = day.getHours();
let mm = day.getMinutes();
let ss = day.getSeconds();

hr.style.transform = `rotateZ(${(hh * 30)+(mm/12)}deg)`;/*rotate 30 degrees for each hour */
mn.style.transform = `rotateZ(${mm * 6}deg)`;/*rotate 6 degrees for each minut */
sc.style.transform = `rotateZ(${ss * 6}deg)`;/*rotate 6 degrees for each minut */
// digital clock
//convert 24hr clock to 12hr clock

let am = "AM";

if(hh >= 12){
 am = "PM";
 root.style.setProperty('--red','0');
 root.style.setProperty('--green','0');
 root.style.setProperty('--blue','0');
 root.style.setProperty('--background-color','#2f363e');
 root.style.setProperty('--text-color','#fff');

}
if(hh>12){
    hh=hh-12
}
// add zero before single digit number
let h = (hh < 10) ? "0"+ hh : hh;
let m = (mm < 10) ? "0"+ mm : mm;
let s = (ss < 10) ? "0"+ ss : ss;
document.getElementById('hour').innerHTML=h;
document.getElementById('minutes').innerHTML=m;
document.getElementById('seconds').innerHTML=s;
document.getElementById('ampm').innerHTML=am;


}

setInterval(setClockTime,1000)


