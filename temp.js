//Amazon
let words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero', 'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut'];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));

};

const generate = (max) => {
  let result = '';
  let spaces = 0;
  while(result.split('').length + spaces <= max){
    result += `${words[getRandomInt(words.length)]} `;
    spaces++;
    console.log(result.split('').length + spaces);
  }
  console.log(result);
};

generate(40);

//CLOUDJUMPING
const cloudJumping = (arr) => {
  let counter = 0;
  for(var i = 0; i < arr.length; i += 2){
    if(arr[i] === 0){ counter = counter + 1;}
    else if(arr[i + 1] === 0) { counter = counter + 1;}
    else throw 'you died';
  }
  return counter;
};

module.exports = cloudJumping;

//COUNT MONKEYS
const countMonkeys = (num) => {
  let result = [];
  for(var i = 1; i <= num; i++){
    result.push(i);
  }
  return result;

};

module.exports = countMonkeys;

//LEFT ROTATION
const leftRotation = (arr2Shift, shiftNum) => {
  let rotateLeft = arr2Shift.splice(shiftNum);
  arr2Shift.splice(shiftNum);
  let merge = rotateLeft.concat(arr2Shift);
  return merge;
};

module.exports = leftRotation;

//MEDIAN CHALLENGE
const median = ((arr1, arr2) => {
  arr2.map(num => {
    return arr1.push(num);
  });
  const sorted = arr1.sort();
  console.log(sorted);

}); 

//SUM
const sum = (num1, num2) => {
  let counter = 0;
  for(var i = 1; i <= num2; i++){
    counter += num1;
  }
  return counter;

};

module.exports = sum;

//SUMTOTEN
const sum2Ten = (arr) => {
  let result = [];
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if(arr[i] + arr[j] === 10) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
};

module.exports = sum2Ten;

//SUMMIXEDARR
const sumMixedArr = (arr) => {
  let sum = (accumulator, currentValue) => accumulator + currentValue;
  let newArr = arr.map((element) => {
    return parseInt(element);
  });
  return newArr.reduce(sum);
};



//REMOVE DUPS
const removeDups = (str) => {
  let unique = str.split(' ');
  return [...new Set(unique)].join(' ');
};

module.exports = removeDups;

//PALINDROME
const palindrome = (word) => {
  let reversed = word.split('').reverse().join('');
  if(word === reversed) return true;
  else return false;
};


module.exports = palindrome;




//COUNTPOSSUMNEG
const countPosSumNeg = (arr) => {
  let final = [];
  let totalPosNumbers = 0;
  let sumNegativeNums = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      totalPosNumbers += 1;
    } else if(arr[i] < 0) {
      sumNegativeNums += arr[i];
    } else return null;
  }
  final.push(totalPosNumbers, sumNegativeNums);
  return final;
};

module.exports = countPosSumNeg;



//COMPARE ARR
const compareArr = (arr1, arr2) => {
  let score1 = 0;
  let score2 = 0;
  let finalScore = [];
  arr1.forEach((a1, i) => {
    if(a1 > arr2[i]){
      score1++;
    } else if(a1 < arr2[i]){
      score2++;
    } else return null;
  });
  finalScore.push(score1, score2);
  return finalScore;


};

module.exports = compareArr;

//ANAGRAM
const anagram = (word1, word2) => {
  let firstW = word1.split('').sort();
  let secondW = word2.split('').sort();
  if(firstW.length !== secondW.length) {
    return false;
  } else if(firstW.join('') !== secondW.join('')) {
    return false;
  } else return true;
};

module.exports = anagram;


//PRACTICE FETCH
const getCharactrs = () => {
  fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(res => {
      const characters = res.results;
      characters.forEach(character => {
        let section = document.querySelector('section');
        let div = document.createElement('div');
        div.style.backgroundImage = 'cover';
        div.style.width = '300px';
        div.style.height = '300px';
        div.style.backgroundImage = `url(${character.image})`;
        let name = document.createElement('h2');
        name.innerHTML = character.name;
        section.(div);
        div.appendChild(name);
      });
    });

    
};
  
getCharactrs();

