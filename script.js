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

task2();
// Uncomment the line above to run function
