var example1 = {
    name: 'Pavel',
    surname: 'Mernov',
    yearOfBirth: 2003,
    city: 'Moscow'
};
var pickExample1 = {
    name: 'Polina',
    surname: 'Kozlova',
    yearOfBirth: 2004,
};
console.log('MyPick:');
console.log(example1);
console.log(pickExample1);
var exampleArray = ['Pavel', 2, { name: 'Pavel', surname: 'Mernov' }];
var firstInArray = 'Polina';
var secondInArray = 20; // Years Old
var thirdInArray = {
    name: "Polina",
    surname: "Smirnova"
};
console.log('NOfArray:');
console.log(firstInArray, secondInArray, thirdInArray);
var unshiftArray = [20, 'Pavel', 'Anna', 'Alif'];
console.log('UnShiftArray');
for (var _i = 0, unshiftArray_1 = unshiftArray; _i < unshiftArray_1.length; _i++) {
    var elem = unshiftArray_1[_i];
    // const elem = unshiftArray[key];
    console.log(elem, typeof elem);
}
var myExcludeExample = 'John';
console.log('MyExclude:');
console.log(myExcludeExample);
var partialPaul = {
    name: 'Pavel',
    address: {
        country: 'Russia'
    }
};
console.log('DeepPartial:');
console.log(partialPaul);
var myCapitalizeAbc = 'Abc';
var alreadyCapitalized = 'Already';
console.log('MyCapitalize:');
console.log(myCapitalizeAbc);
console.log(alreadyCapitalized);
var mutableStudent = {
    name: "Paul",
    age: 20,
    university: {
        universityName: "HSE",
        facultyName: "Computer Science",
        year: 2
    }
};
console.log('DeepMutable:');
console.log('Before finishing 2 year:', mutableStudent);
mutableStudent.university.year = 3;
console.log('After finishing 3 year:', mutableStudent);
var idParam = 'id';
var nameParam = 'name';
var ageParam = 'age';
console.log('ParseURLParams:');
console.log('User params:', idParam, nameParam, ageParam);
var snake_case_paul = {
    user_name: "Pavel Mernov",
    user_age: 20,
    address_info: {
        country_name: "Russia",
        city_name: "Moscow",
        street_name: "Leninsky prospect",
        house_number: 14
    }
};
var camelizedPaulUser = {
    userName: "Pavel Mernov",
    userAge: 20,
    addressInfo: {
        countryName: "Russia",
        cityName: "Moscow",
        streetName: "Leninsky prospect",
        houseNumber: 14
    }
};
console.log('Camelize:');
console.log('Snake case object:', snake_case_paul);
console.log('Camelized object:', camelizedPaulUser);
var deepPickedPaul = {
    name: 'Pavel',
    address: {
        country: "Russia"
    }
};
console.log('DeepPick:');
console.log('Deep picked user:', deepPickedPaul);
