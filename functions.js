function compareTrue(booleanUm, booleanDois) {
  return booleanUm && booleanDois;
}

function calcArea(base, altura) {
  return (base * altura) / 2;
}

function splitSentence(frase) {
  return frase.split(' ');
}

function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

function footballPoints(vitorias, empates) {
  return vitorias * 3 + empates;
}

function highestCount(arr) {
  const numMaximo = Math.max(...arr);
  return arr.filter((num) => num === numMaximo).length;
}

function catAndMouse(rato, gatoUm, gatoDois) {
  const distanciaUm = Math.abs(rato - gatoUm);
  const distanciaDois = Math.abs(rato - gatoDois);
  if (distanciaUm < distanciaDois) return 'gatoUm';
  if (distanciaDois < distanciaUm) return 'gatoDois';
  return 'os gatos trombam e o rato foge';
}

function fizzBuzz(arr) {
  return arr.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return 'bug!';
  });
}

function encode(str) {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return str.split('').map((char) => {
    if (map[char]) {
      return map[char];
    }
    return char;
  }).join('');
}

function decode(str) {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return str.split('').map((char) => {
    if (map[char]) {
      return map[char];
    }
    return char;
  }).join('');
}

function techList(tec, nome) {
  if (tec.length < 1) {
    return 'Vazio!';
  }
  const tecObj = tec.map((t) => ({
    t,
    nome,
  }));
  return tecObj.sort((a, b) => a.tec.localeCompare(b.tec));
}

function generatePhoneNumber(numbers) {
  // Verifique o tamanho do array
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // Verifique se algum número é menor que 0 ou maior que 9
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      return 'Não é possível gerar um número de telefone com esses valores';
    }
  }

  // Verifique se algum número se repete 3 vezes ou mais
  for (let i = 0; i < numbers.length; i += 1) {
    let count = 0;
    for (let j = 0; j < numbers.length; j += 1) {
      if (numbers[i] === numbers[j]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return 'Não é possível gerar um número de telefone com esses valores';
    }
  }

  // Se todas as verificações passaram, formate o número de telefone
  const phoneNumber = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;

  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }

  if (lineA < Math.abs(lineB - lineC)) {
    return false;
  }

  if (lineB < Math.abs(lineA - lineC)) {
    return false;
  }

  if (lineC < Math.abs(lineA - lineB)) {
    return false;
  }

  // Se todas as condições forem atendidas, retorna true
  return true;
}

// Desafio 13
function hydrate(drinks) {
  // Use uma expressão regular para extrair os números da string
  const numbers = drinks.match(/\d+/g);

  // Inicialize uma variável para contar a quantidade total de copos de água
  let totalCups = 0;

  // Verifique se há números extraídos
  if (numbers) {
    // Percorra os números e some-os
    for (let i = 0; i < numbers.length; i += 1) {
      totalCups += parseInt(numbers[i], 10);
    }
  }

  // Determine o plural correto para 'copo' baseado na quantidade
  const cupsText = totalCups === 1 ? 'copo' : 'copos';

  // Construa a string de retorno
  const result = `${totalCups} ${cupsText} de água`;

  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
