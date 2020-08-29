let driveAgeChecker = (date) => {
    if(2020 - date >= 17){
        return `Born in {date}, and can drive.`;
    } else {
        return `Born in {date}, and can drive in ${17 - (2020 - date)}.`;
    }
}

const driversDatesOfBirth = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];

const result = driversDatesOfBirth.map(driveAgeChecker);

console.log(result);