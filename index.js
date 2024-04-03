const quiz = [
  {
    question:'秋田県の県庁所在地は次のうちどれ？',
    answers:[
      'ディズニー',
      'シドニー',
      'フランス',
      '秋田'
    ],
    correct:'秋田'
  },{
    question:'千葉県の県庁所在地は次のうちどれ？',
    answers:[
      '韓国',
      'ドイツ',
      'ジャマイカ',
      '千葉'
    ],
    correct:'千葉'
  },{
    question:'埼玉県の県庁所在地は次のうちどれ？',
    answers:[
      '埼玉',
      '川口',
      '浦和',
      'さいたま'
    ],
    correct:'さいたま'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByClassName("quiz-choicesAnswer");

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  // 元のクイズデータを変更しないようにクローンする
  const shuffledAnswers = [...quiz[quizIndex].answers];
  shuffleArray(shuffledAnswers);

  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = shuffledAnswers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

//ボタンを押したら正誤判定する
//タグネームでボタン全体を押してアラートが出るようにした

const box = document.querySelector('.quiz-choicesBox');
console.log(box)

document.getElementsByTagName('button')[0].addEventListener('click' , () => {
  if(quiz[quizIndex].correct === $button[0].textContent){
    box.classList.add('ukai')
    setTimeout(() => {
      box.classList.remove('ukai')
    }, 1000)
    score++;
  } else {
    box.classList.add('ukai2')
    setTimeout(() => {
      box.classList.remove('ukai2')
    }, 1000)
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数があればコッチを実行
    setupQuiz();
  } else {
    //問題数がなければコッチを実行
    window.alert('終了！あなたの点数は' + score + '/' + quizLength + 'です！');
  }
});
document.getElementsByTagName('button')[1].addEventListener('click' , () => {
  if(quiz[quizIndex].correct === $button[1].textContent){
    box.classList.add('ukai')
    setTimeout(() => {
      box.classList.remove('ukai')
    }, 1000)
    score++;
  } else {
    box.classList.add('ukai2')
    setTimeout(() => {
      box.classList.remove('ukai2')
    }, 1000)
  }
  quizIndex++;

  if(quizIndex < quizLength){
    //問題数があればコッチを実行
    setupQuiz();
  } else {
    //問題数がなければコッチを実行
    window.alert('終了！あなたの点数は' + score + '/' + quizLength + 'です！');
  }
});
document.getElementsByTagName('button')[2].addEventListener('click' , () => {
  if(quiz[quizIndex].correct === $button[2].textContent){
    box.classList.add('ukai')
    setTimeout(() => {
      box.classList.remove('ukai')
    }, 1000)
    score++;
  } else {
    box.classList.add('ukai2')
    setTimeout(() => {
      box.classList.remove('ukai2')
    }, 1000)
  }
  quizIndex++;

  if(quizIndex < quizLength){
    //問題数があればコッチを実行
    setupQuiz();
  } else {
    //問題数がなければコッチを実行
    window.alert('終了！あなたの点数は' + score + '/' + quizLength + 'です！');
  }
});
document.getElementsByTagName('button')[3].addEventListener('click' , () => {
  if(quiz[quizIndex].correct === $button[3].textContent){
    box.classList.add('ukai')
    setTimeout(() => {
      box.classList.remove('ukai')
    }, 1000)
    score++;
  } else {
    box.classList.add('ukai2')
    setTimeout(() => {
      box.classList.remove('ukai2')

    }, 1000)
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数があればコッチを実行
    setupQuiz();
  } else {
    //問題数がなければコッチを実行
    window.alert('終了！あなたの点数は' + score + '/' + quizLength + 'です！');
  }
});