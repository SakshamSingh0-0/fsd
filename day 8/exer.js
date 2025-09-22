const calculateAge = (birthYear) => {
    const dob = document.getElementById("user-date");
    const output = document.getElementById("output");

    const userDate = new Date(dob.value);
    const currentDate = new Date();
    // current date details
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
    // user details
    const userDOByear = userDate.getFullYear();
    const userDOBmonth = userDate.getMonth();
    const userDOBdate = userDate.getDate(); 

    let ageInYears = currentYear - userDOByear;
    let ageInMonths = currentMonth - userDOBmonth;
    let ageInDays = currentDay - userDOBdate;

    const age = currentDate.getFullYear() - userDate.getFullYear();
    if(userDOBmonth > currentMonth ){
        ageInYears--;
    }
    if(ageInMonths < 0){
        ageInMonths = 12 + ageInMonths;
        
    }
    if(ageInDays < 0){
        const daysInPreviousMonth = new Date(currentYear, currentMonth, 0).getDate();
        ageInDays = daysInPreviousMonth + ageInDays;
    
    }


     output.innerText = `User's Current Age is ${ageInYears} years, ${ageInMonths} months and ${ageInDays} days.`;
}