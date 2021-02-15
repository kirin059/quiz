"use strict";

/* 퀴즈 점수, 문제 데이터, 문제 번호도 하나의 퀴즈 정보 객체로 구성하기 위해 생성자 함수(function)로 정의하기 */

// 퀴즈 정보 객체
function Quiz(questions) {
    this.score = 0; // 점수
    this.questions = questions; // 문제
    this.questionIndex = 0; // 진행중인 문제 번호
}

// 정답 확인 메서드
Quiz.prototype.correctAnswer = function (answer) {
    //Quiz의 원형(prototype)의 correctAnswer를 불러와서 함수 정의해준다
    return answer == this.questions[this.questionIndex].answer; //this가 가리키는 함수의 문제, 문제번호, 정답 값이 answer로 리턴
};

// 문제 객체(생성자 함수)
function Question(text, choice, answer) {
    //Question의 원형과 그 안에 객체의 프로토타입 만들기
    this.text = text; // 질문 텍스트
    this.choice = choice; // 선택할 답들(보기)
    this.answer = answer; // 정답 정보
}
// Question 객체의 생성자 'new Question' 생성자 생성하기(코드의 재사용성)
let questions = [
    new Question("다음 중 과일이 아닌 것은?", ["파인애플", "딸기", "토마토", "사과"], "토마토"), //text, choice, answer 순으로 내용 넣기
    new Question("다음 중 키가 170cm 이하인 여배우는?", ["Blake Lively", "Julia Roberts", "Gwyneth Kate Paltrow", "Natalie Portman"], "Natalie Portman"),
    new Question('다음 중 배우 "이병헌"의 출연작이 아닌 것은?', ["공동경비구역 JSA", "누구나 비밀은 있다", "그 해 여름", "신세계"], "신세계"),
    new Question("다음 CSS 속성 중 글자의 굵기를 변경하는 속성은?", ["font-size", "font-style", "font-weight", "font-variant"], "font-weight"),
    new Question("다음 중 우리나라 보물1호는?", ["동대문", "서대문", "남대문", "북대문"], "동대문"),
    new Question("다음 중 대한민국에서 가장 남쪽에 있는 섬은?", ["독도", "마라도", "제주도", "울릉도"], "마라도"),
    new Question("다음 중 표현법이 다른 하나는?", ["이것은 소리 없는 아우성", "즐거운 비명", "찬란한 슬픔의 봄", "죽어도 아니 눈물 흘리오리다"], "죽어도 아니 눈물 흘리오리다"),
];

// 퀴즈 객체 생성/ Quiz 생성자 만들고 quiz라고 이름짓기 (quiz객체 속성 복사 - score, questions, questionIndex)
let quiz = new Quiz(questions);

// 문제 출력 함수
function updateQuiz() {
    let question = document.getElementById("question");
    let idx = quiz.questionIndex + 1; //문제 순서 , 총 7문제가 1번부터 1씩 추가
    let choice = document.querySelectorAll(".btn"); //보기4개

    // 문제 출력
    question.innerHTML = "문제" + idx + ") " + quiz.questions[quiz.questionIndex].text; //현재 출제되고 있는 문제 텍스트(배열)

    // 보기 출력
    for (var i = 0; i < 7; i++) {
        choice[i].innerHTML = quiz.questions[quiz.questionIndex].choice[i];
    }
}

let btn = document.querySelectorAll(".btn"); //var idx는 updateQuiz안에 지정한 변수이기 때문에 함수 안에서만 사용 가능. 따라서 var btn변수를 전역변수로 함수 밖에서 다시 선언해줌

// 입력 및 정답 확인 함수
function checkAnswer(i) {
    //checkAnswer함수에 btn[i]와 이벤트를 정의함으로서, 클릭하면 정답(answer)는 체크한 버튼(btn)이 된다고 함수 정의
    btn[i].addEventListener("click", function () {
        let answer = btn[i].innerText;

        if (quiz.correctAnswer(answer)) {
            //클릭한 btn이 정답(correctAnswer)일 경우,
            alert("정답입니다!");
            quiz.score++;
        } else {
            alert("틀렸습니다!");
        }

        if (quiz.questionIndex < quiz.questions.length - 1) {
            //전체 퀴즈 길이는 7개인데, 그럼 마지막 문제는 어떻게?
            quiz.questionIndex++;
            updateQuiz();
        } else {
            result();
        }
    });
}

function result() {
    let quizDiv = document.getElementById("quiz");
    let per = parseInt((quiz.score * 100) / quiz.questions.length);
    let txt = "<h1>결과</h1>" + '<h2 id="score">당신의 점수: ' + quiz.score + "/" + quiz.questions.length + "<br><br>" + per + "점" + "</h2>";

    quizDiv.innerHTML = txt;

    // 점수별 결과 텍스트
    if (per < 40) {
        txt += "<h2>더 분발하세요</h2>";
        quizDiv.innerHTML = txt;
    } else if (per >= 40 && per < 70) {
        // &&은 and라는 뜻. 양쪽이 모두 충족해야 true. 반대는 ||(or이라는 뜻. 한쪽만 충족해도 true)
        txt += "<h2>무난한 점수네요</h2>";
        quizDiv.innerHTML = txt;
    } else if (per >= 70) {
        txt += "<h2>훌륭합니다</h2>";
        quizDiv.innerHTML = txt;
    }
}

for (let i = 0; i < btn.length; i++) {
    checkAnswer(i);
}

updateQuiz();

//footer_dark mode
let Body = {
    setBackColor: function (color) {
        document.querySelector("body").style.backgroundColor = color;
    },
    setColor: function (color) {
        document.querySelector("body").style.color = color;
    },
};

let Link = {
    setColor: function (color) {
        let alist = document.querySelectorAll("a");
        let i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    },
};

function handler(self) {
    let target = document.querySelector("body");
    if (self.value === "night") {
        Body.setBackColor("black");
        Body.setColor("white");
        self.value = "day";

        Link.setColor("powderblue");
    } else {
        Body.setBackColor("white");
        Body.setColor("black");
        self.value = "night";

        Link.setColor("white");
    }
}
