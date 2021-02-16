# quiz 만들기
## javascript
---


1️⃣ 생성자 함수 생성을 통해 문제/보기 함수 여러개 구현하기
 ```js
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
```


2️⃣ 점수 결과에 조건 걸기
    
```js
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
```
