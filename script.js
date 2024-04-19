const button = document.querySelector("button");
const input = document.querySelector("input");

const years = document.querySelector(".year");
const month = document.querySelector(".month");
const days = document.querySelector(".days");

const refresh = document.querySelector("span");


refresh.addEventListener("click",()=>{
  location.reload();

})


button.addEventListener("click",()=>{
    const dob = new Date(input.value);
    const curr = new Date();


   if (input.value == "") {
    alert("Enter your date of birth");
    return;
  }
   if(dob.getFullYear() > curr.getFullYear() ){
    alert("You are not born yet");
    location.reload();
    return;
  }
   calculateAge(dob);
})

function calculateAge(date)
{
    let old = new Date(date);
    let ne = new Date();

    let diff = ne - old;
    const fullYear = diff/(365.25 * 24 * 60 * 60 * 1000);
    const year = Math.floor(fullYear);
    
    const remainingResults = (fullYear-year)*12;
    const months = Math.floor(remainingResults);
    
    const remaingDay = Math.floor((remainingResults-months)*(365.25/12));
    
    years.children[0].innerHTML = year;
    month.children[0].innerHTML = months;
    days.children[0].innerHTML = remaingDay;
}

