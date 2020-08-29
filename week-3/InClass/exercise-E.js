var birthDates = [1964,2008,1999,2005,1978,1985,1919];

let dateNameMatcher = (date) => {

    var ages = [];
    console.log(ages);

    date.forEach(function (year) {
        let ActualYear = 2020;
        let age = ActualYear - year;
        ages.push(age);
   });

    console.log(ages);

}

dateNameMatcher(birthDates);