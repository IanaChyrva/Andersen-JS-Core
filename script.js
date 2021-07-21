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

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  function vowelsQty(str) {
    let count = 0;
    const arrayFromStr = str.toLowerCase().split('');

    arrayFromStr.forEach((letter) => {
      if (vowels.includes(letter)) {
        count++;
      }
    });
    return count;
  }
  vowelsQty('some test string');

  const nums = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  Array.prototype.myFilter = function (callback) {
    return this.reduce((result, item, i, arr) => {
      if (callback(item, i, arr)) {
        result.push(item);
      }
      return result;
    }, []);
  };

  const even = (element, index, array) => element % 2 === 0;
  const evenNumbers = nums.myFilter(even);
}

function lesson4() {
  const testString = 'a.b.c.d.e';

  const objectHell = (string) =>
    string.split('.').reduceRight((acc, item) => ({ [item]: acc }), null);

  console.log(objectHell(testString));

  const log100 = (num) => console.log(num);
  const createDebounceFunction = (callback, delay) => {
    let timerId;
    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  };

  const debounceLog100 = createDebounceFunction(log100, 1000);

  debounceLog100(1);
  setTimeout(() => debounceLog100(2), 100);
  setTimeout(() => debounceLog100(3), 200);
  setTimeout(() => debounceLog100(4), 1200);

  Function.prototype.myBind = function (context, ...args1) {
    const fn = this;

    return function (...args2) {
      return fn.apply(context, [...args1, ...args2]);
    };
  };

  const car = {
    make: 'Volvo',
  };

  function showThis(model, country) {
    return `${model} is manufactured by ${this.make} in ${country}`;
  }

  const result1 = showThis.myBind(car);
  const result2 = showThis.myBind(car, 'V40');
  const result3 = showThis.myBind(car, 'V40', 'Sweden');

  console.log(result1('V40', 'Sweden'));
  console.log(result2('Sweden'));
  console.log(result3());
}

// lesson4();

function lesson5() {
  // Первый случай
  // 1. 2 слушателя события click являются асинхронными, они обрабатываются WebAPI.
  // // // 2. При клике WebAPI обработал первого слушателя и добавил коллбек в очередь callback queque. Так же обработал второго слушателя и тоже добавил коллбек из него в callback queque. То есть сейчас в очереди ждут 2 коллбека из слушателей события.
  // 3. Stack пустой, поэтому туда попадает первый коллбек.
  // // 4. Интерпретатор встречает микрозадачу promise. Promise перемещается в WebAPI, обрабатывается там и console.log('Microtask 1') попадает в очередь микрозадач.
  // 5. В стеке появляется console.log('Listener 1'). Код выполняется и удаляется из стека.
  // 6. Коллбек первого слушателя завершился и удаляется из стека.
  // // 7. Так как есть еще очередь микрозад, в которой ждет код console.log('Microtask 1'), то event loop переносит console.log('Microtask 1') в стек. Код выполняется и стек очищается.
  // 8. Теперь event loop может приступить к коллбеку второго слушателя.
  // 9. Промис обрабатывается WebAPI и код console.log('Microtask 2')) попадает в очередь микрозад.
  // 10. Код console.log('Listener 2') попадает в стек и выполняется.
  // 11. Коллбек завершился и стек очищается.
  // 12. Код из очереди микрозад попадает в стек. Код выполняется, стек очищается.
  // Вывод: 'Listener 1', 'Microtask 1', 'Listener 2', 'Microtask 2'

  // Второй случай
  // 1. Запускается код button.click() и кладется в стек.
  // 2. В WebAPI попадает код двух слушателей. обрабатывается и попадает в очередь callback queque.
  // 3. В стек кладется коллбек первого слушателя.
  // 4. Интерпретатор встречает микрозадачу promise. Promise перемещается в WebAPI, обрабатывается там и console.log('Microtask 1') попадает в очередь микрозадач.
  // 5. В стеке появляется console.log('Listener 1'). Код выполняется и удаляется из стека.
  // 6. Коллбек первого слушателя завершился и удаляется из стека. Но стек не пуст, там остался вызов клика  button.click().
  // 7. Поэтому код event loop кладет коллбек второго слушателя в стек.
  // 8. Код доходит до промиса, передает его в WebAPI. Тот обрабатывает промис и кладет console.log('Microtask 2') в очередь микрозад, где уже ждет первая микрозадача.
  // 9. Интерпретатор доходит до console.log('Listener 2'), который переносится в стек и выполняется.
  // 10. Коллбек второго слушателя завершился и удаляется из стека.
  // 11. Наконец сначала одна задача переносится в стек и выполняется, а затем вторая.
  // 12. button.click() завершился и удаляется из стека.
  // Вывод: 'Listener 1', 'Listener 2', Microtask 1', 'Microtask 2'

  const urls = [
    'https://www.url-1.com/',
    'https://www.url-2.com/',
    'https://www.url-3.com/',
  ];

  function fakeRequest(url) {
    return new Promise((resolve) => {
      const delayTime = Math.floor(Math.random() * 10000) + 1;

      setTimeout(() => resolve(url), 1000);
    });
  }

  function resolveUrlsArray(urls) {
    const promises = urls.map((url) => fakeRequest(url));
    const resultArray = [];

    return new Promise((resolve, reject) => {
      promises.forEach((promise) =>
        promise
          .then((res) => {
            resultArray.push(res);
            if (resultArray.length === promises.length) {
              resolve(resultArray);
            }
          })
          .catch((err) => reject(err))
      );
    });
  }

  resolveUrlsArray(urls).then((result) => console.log(result));
}

lesson5();
