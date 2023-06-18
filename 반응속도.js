var reactionTimes = []; // Array to store reaction time data

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleClick() {
  var start = new Date().getTime();
  var box = document.getElementById("box");
  box.innerHTML = "";

  setTimeout(function () {
    var button = document.createElement("button");
    button.innerHTML = "클릭하세요!";
    button.style.width = "200px";
    button.style.height = "100px";
    button.style.position = "absolute";
    button.style.left = getRandomNumber(0, box.offsetWidth - button.offsetWidth) + "px";
    button.style.top = getRandomNumber(0, box.offsetHeight - button.offsetHeight) + "px";
    box.appendChild(button);

    button.onclick = function () {
      var end = new Date().getTime();
      var reactionTime = (end - start) / 1000;
      reactionTimes.push(reactionTime); // Store the reaction time in the array
      alert("반응속도 시간: " + reactionTime + "초");
      box.innerHTML = '<font size="16">상단에 "반응속도 테스트 시작!" 버튼을 클릭하시면 3초후에 이 박스 안에 버튼이 나타납니다.</font>';
    };
  }, 3000);
}

function displayRecords() {
  var recordsMessage = "기록 확인:\n\n";
  for (var i = 0; i < reactionTimes.length; i++) {
    recordsMessage += "반응 시간: " + (i + 1) + ": " + reactionTimes[i] + "초\n";
  }
  alert(recordsMessage);
}

window.onload = function () {
  var startButton = document.getElementById("react");
  startButton.onclick = handleClick;

  var recordButton = document.getElementById("record");
  recordButton.onclick = displayRecords;
};
