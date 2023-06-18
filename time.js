// 현재 시간을 가져오기
function getCurrentTime() {
    
    var currentTime = new Date();

    var Time1 = currentTime.toLocaleDateString() + "<br>" + currentTime.toLocaleTimeString();
    // 시간을 화면에 표시합니다.
    var timeElement = document.getElementById("current-time");
    timeElement.innerHTML =Time1;
  }

  // 페이지가 로드될 때마다 현재 시간을 업데이트합니다.
  setInterval(getCurrentTime, 1000);