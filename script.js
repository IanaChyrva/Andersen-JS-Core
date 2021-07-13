function lessonOne() {
  function isValidNumber(input) {
    return !!input && !isNaN(input);
  }

  const errorMessage = 'Некорректный ввод!';

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

  task1();

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

    console.log(
      `Ответ: ${Number(input1) + Number(input2)}, ${input1 / input2}.`
    );
  }

  task2();
}

function lessonTwo() {
  const isEqual = (firstObj, secondObj) => {
    const arr1 = Object.keys(firstObj);
    const arr2 = Object.keys(secondObj);

    if (arr1.length !== arr2.length) {
      return false;
    }

    return !arr1.filter((key) => firstObj[key] !== secondObj[key]).length;
  };

  const data = { a: 1, b: 1 };
  const data2 = { a: 1, b: 1 };
  const data3 = { a: 1, b: 2 };

  console.log(isEqual(data, data2));
  console.log(isEqual(data, data3));

  const isEmpty = (object) =>
    !Object.values(object).filter(
      (item) => item || item === 0 || item === false
    ).length;

  const data4 = { a: 1, b: undefined };
  const data5 = { a: undefined };
  console.log(isEmpty(data4));
  console.log(isEmpty(data5));

  // Task 3
  const makePairs = (object) =>
    Object.keys(object).map((key) => [key, object[key]]);

  const data6 = { a: 1, b: 2 };
  console.log(makePairs(data6));
}

function lessonThree() {
  function palindrome(str) {
    const arrayFromStr = str.toLowerCase().split('');
    const filteredArrayOfLetters = arrayFromStr.filter(
      (letter) => letter >= 'a' && letter <= 'z'
    );

    return (
      filteredArrayOfLetters.join('') ===
      filteredArrayOfLetters.reverse().join('')
    );
  }

  palindrome('a ,nna');
  palindrome('Abba');
  palindrome(' s,tr');
  palindrome('A man, a plan, a canal. Panama');
  palindrome('My age is 0, 0 si ega ym.');
}

lessonThree();
