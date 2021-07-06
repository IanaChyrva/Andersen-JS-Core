function isValidNumber(input) {
  return !!input && !isNaN(input);
}

// Задание_1
function task1() {
  const input1 = prompt('Введите первое число');
  const input2 = prompt('Введите второе число');

  if (isValidNumber(input1) && isValidNumber(input2)) {
    if (input2 >= 2 && input2 <= 36) {
      console.log((+input1).toString(+input2));
    } else {
      console.log('Второе число должно быть от 2 до 36 включительно.');
      return;
    }
    return;
  }

  console.log('Некорректный ввод!');
}

// task1();
// Uncomment the line above to run function

// Задание_2
function task2() {
  const input1 = prompt('Введите первое число');

  if (!isValidNumber(input1)) {
    console.log('Некорректный ввод!');
    return;
  }

  const input2 = prompt('Введите второе число');

  if (!isValidNumber(input2)) {
    console.log('Некорректный ввод!');
    return;
  }

  console.log(`Ответ: ${+input1 + +input2}, ${input1 / input2}.`);
}

// task2();
// Uncomment the line above to run function
