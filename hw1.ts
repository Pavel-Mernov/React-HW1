// EASY TASKS
type MyPick<T, K extends keyof T> = {
    [P in K] : T[P]
}

const example1 : any = {
    name : 'Pavel',
    surname : 'Mernov',
    yearOfBirth : 2003,
    city : 'Moscow'
};

const pickExample1 : MyPick<any, 'name' | 'yearOfBirth' | 'surname'> = {
    name: 'Polina',
    surname: 'Kozlova',
    yearOfBirth: 2004,
}

console.log('MyPick:')
console.log(example1);
console.log(pickExample1);

type NOfArray<ArrayObj extends unknown[], N extends number> = ArrayObj[N];

type ExampleArrayType = [string, number, {name : string, surname : string}]

const exampleArray : ExampleArrayType = ['Pavel', 2, {name : 'Pavel', surname : 'Mernov'}];

type First = NOfArray<typeof exampleArray, 0>;
type Second = NOfArray<typeof exampleArray, 1>;
type Third = NOfArray<typeof exampleArray, 2>;

const firstInArray : First = 'Polina';
const secondInArray : Second = 20; // Years Old
const thirdInArray : Third = {
    name: "Polina",
    surname: "Smirnova"
}

console.log('NOfArray:');
console.log(firstInArray, secondInArray, thirdInArray);

type Unshift<ArrayType extends unknown[], Elem> = [Elem, ...ArrayType];

const unshiftArray : Unshift<string[], number> = [20, 'Pavel', 'Anna', 'Alif'];

console.log('UnShiftArray');
for (const elem of unshiftArray) {
    // const elem = unshiftArray[key];
    console.log(elem, typeof elem);
}

type MyExclude<T, U> = T extends U ? never : T;

type MyExcludeExample = MyExclude<'John' | 'Paul' | 'Peter', 'Peter'>;

const myExcludeExample : MyExcludeExample = 'John';

console.log('MyExclude:');
console.log(myExcludeExample);

// MEDIUM TASKS

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

type Person = {
    name : string,
    age : number,
    address : {
        country : string,
        city : string,
        street : string,
        houseNumber : number
    }
};

const partialPaul : DeepPartial<Person> = {
    name : 'Pavel',
    address : {
        country : 'Russia'
    }
}

console.log('DeepPartial:');
console.log(partialPaul);

type MyCapitalize<T extends string> = T extends `${infer F}${infer Rest}` 
  ? `${Uppercase<F>}${Rest}`
  : T;

type MyCapitalizeAbc = MyCapitalize<'abc'>;
const myCapitalizeAbc : MyCapitalizeAbc = 'Abc';

type AlreadyCapitalized = MyCapitalize<'Already'>;
const alreadyCapitalized : AlreadyCapitalized = 'Already';

console.log('MyCapitalize:');
console.log(myCapitalizeAbc);
console.log(alreadyCapitalized);

type DeepMutable<T> = {
    -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P];
  };

type Student = {
    readonly name : string,
    readonly age : number,
    readonly university : {
        readonly universityName: string,
        readonly facultyName : string,
        readonly year : number
    }
};

const mutableStudent : DeepMutable<Student> = {
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

type ParseURLParams<StringElem extends string> = 
  StringElem extends `${infer _Start}:${infer Param}/${infer Rest}`
    ? Param | ParseURLParams<`/${Rest}`>
    : StringElem extends `${infer _Start}:${infer Param}`
      ? Param
      : never;

type UserParams = ParseURLParams<'users/:id/:name/:age'>;

let idParam : UserParams = 'id';
let nameParam : UserParams = 'name';
let ageParam : UserParams = 'age';

console.log('ParseURLParams:');
console.log('User params:', idParam, nameParam, ageParam);

// HARD TASKS

type CamelCase<S extends string> = S extends `${infer Head}_${infer Tail}`
  ? `${Lowercase<Head>}${Capitalize<CamelCase<Tail>>}`
  : S;

type Camelize<ObjType> = ObjType extends object
  ? {
      [Key in keyof ObjType as CamelCase<Extract<Key, string>>]: ObjType[Key] extends object
        ? Camelize<ObjType[Key]>
        : ObjType[Key];
    }
  : ObjType;

type SnakeCaseUser = {
    user_name : string,
    user_age : number,
    address_info : {
        country_name : string,
        city_name : string,
        street_name : string,
        house_number : number
    },
};

const snake_case_paul : SnakeCaseUser = {
    user_name: "Pavel Mernov",
    user_age: 20,
    address_info: {
        country_name: "Russia",
        city_name: "Moscow",
        street_name: "Leninsky prospect",
        house_number: 14
    }
}

type CamelizeUser = Camelize<SnakeCaseUser>;

const camelizedPaulUser : CamelizeUser = {
    userName: "Pavel Mernov",
    userAge: 20,
    addressInfo: {
        countryName: "Russia",
        cityName: "Moscow",
        streetName: "Leninsky prospect",
        houseNumber: 14
    }
}

console.log('Camelize:');
console.log('Snake case object:', snake_case_paul);
console.log('Camelized object:', camelizedPaulUser);

type DeepPick<T, Path extends string> = 
  Path extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
      ? { [K in Key]: DeepPick<T[K], Rest> }
      : never
    : Path extends keyof T
      ? { [K in Path]: T[K] }
      : never;

type DeepUser = {
    name : string,
    age : Int16Array,
    address : {
        country : string,
        city : string,
    }
}

type DeepPickedUser = DeepPick<DeepUser, 'name' | 'address.country'>;

const deepPickedPaul : DeepPickedUser = {
    name : 'Pavel',
    address : {
        country: "Russia"
    }
}

console.log('DeepPick:');
console.log('Deep picked user:', deepPickedPaul);