const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOUR = 4;
const FULL_TIME_HOUR = 8
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

function getWorkingHurs(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOUR;
            break;

        case IS_FULL_TIME:
            return FULL_TIME_HOUR;
            break;

        default:
            return 0;
    }
}
let totalEmpHours = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

while (totalEmpHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHurs(empCheck);
    totalEmpHours += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHours);
console.log("Total working days  " + totalWorkingDays + "  Total Hours  " + totalEmpHours + "  Employee WAge  " + empWage);

// UC 7A  calculate wage using array foreach loop

let totalEmpWage = 0;

function sum(dailyWage) {
    totalEmpWage = dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC-7A  total Days " + totalWorkingDays + " total hours " + totalEmpHours + " Emp WAge " + totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC-7A  Emp wage with Reduce: " + empDailyWageArr.reduce(totalWages, 0));

// UC-7B  Show the day along with daily wage using Array map helper function

let dailyCntr = 0;

function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC-7B  Daily Wage Map");
console.log(mapDayWithWageArr);