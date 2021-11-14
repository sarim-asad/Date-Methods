//Q1

var rightNow = new Date();
document.write(rightNow);
//Q2
// var currentMonth = rightNow.getMonth();
// document.write("<br><br> Current Month: " + currentMonth)
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul" , "Aug" , "Sep" , "Oct" , "November" , "Dec"];
var now = new Date()
var theMonth = now.getMonth()
var nameofCurrentmonth = monthNames[theMonth]
document.write("<br><br>Current Month : " + nameofCurrentmonth)
//Q3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

//alert("Today is : " +  nameOfToday)

//Q4
var day = rightNow.getDay();

if(day === "Saturday" || "Sunday"){
     document.write("<br><br>"  + "It's Fun Day")
}
else{
    document.write("<br><br>"  + "It's Working Day")

}

//Q5
// var now = new Date();
// var day = now.getDay(16)
// if(now < day){
//     document.write ( "<br><br>"+"First fifteen days of the Month")
// }
// else{
//     document.write("<br><br>"+"Last Days of the Month")
// }

//Q6
var d = new Date();
var minSince = d.getMinutes()
var millsSince = d.getTime();
document.write( "<br><br>"  + "Current Date and Time : " + d)
document.write("<br>" + "Elapsed milliseconds since January 1,1970 : " + millsSince) 
document.write("<br>" + "Elapsed minutes since January 1,1970 : " + minSince) 
//Q7



// var now = new Date();
// var theHr = now.getHours();
// if(now <= 12){
//     alert("It's AM")
// }else{
//     alert("It's PM")
// }

///Q14
document.write("<h1>K-Electric Bill</h1>")
var customerName = "Sarim Asad"
var currentMonth = nameofCurrentmonth;
var numberOfUnits = Math.round(410 * 100) / 100
var chargesPerUnit = Math.round(16 * 100) / 100
var netAmount = numberOfUnits * chargesPerUnit
latePayment = 350
grossAmount = netAmount + latePayment


document.write("<br><br>" + "Customer Name : " + customerName)
document.write("<br>" + "Month : " + currentMonth)
document.write("<br><br>" + "Number of Units : " + numberOfUnits)
document.write("<br>" + "Charges per Unit : " + chargesPerUnit)
document.write("<br><br>" + " Net Amount Payable (Within Due Date) : " + netAmount)
document.write("<br>" + "Late Amount surcharge : " + latePayment)
document.write("<br>" + " Gross Amount Payable (After Due Date) : " + grossAmount)



// Q8


// var laterDate = new Date("Dec 31 2020");
// alert(laterDate);












