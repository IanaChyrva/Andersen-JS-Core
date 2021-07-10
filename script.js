function isValidNumber(input) {
  return !!input && !isNaN(input);
}

const errorMessage = 'Некорректный ввод!';

// Задание_1
function task1() {
  const input1 = prompt('Введите первое число');
  const input2 = prompt('Введите второе число');

  if (!isValidNumber(input1) || !isValidNumber(input2)) {
    console.log(errorMessage);
    return;
  }

  if (input2 < 2 || input2 > 36) {
    console.log('Второе число должно быть от 2 до 36 включительно.');
    return;
  }

  console.log(Number(input1).toString(Number(input2)));
}

// task1();
// Uncomment the line above to run function

// Задание_2
function task2() {
  const input1 = prompt('Введите первое число');

  if (!isValidNumber(input1)) {
    console.log(errorMessage);
    return;
  }

  const input2 = prompt('Введите второе число');

  if (!isValidNumber(input2)) {
    console.log(errorMessage);
    return;
  }

  console.log(`Ответ: ${Number(input1) + Number(input2)}, ${input1 / input2}.`);
}

// task2();
// Uncomment the line above to run function

// Lesson-2
// Task 1

const isEqual = (firstObj, secondObj) => {
  const arr1 = [...Object.keys(firstObj), ...Object.values(firstObj)];
  const arr2 = [...Object.keys(secondObj), ...Object.values(secondObj)];
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };

console.log(isEqual(data, data2));
console.log(isEqual(data, data3));

// Task 2

const isEmpty = (object) => {
  const arrFromObj = Object.values(object).filter(
    (item) => item || item === 0 || item === false
  );
  return !arrFromObj.length;
};

const data4 = { a: 1, b: undefined };
const data5 = { a: undefined };
console.log(isEmpty(data4));
console.log(isEmpty(data5));

// Task 3
const makePairs = (object) => {
  return Object.entries(object);
};

const data6 = { a: 1, b: 2 };
console.log(makePairs(data6));
