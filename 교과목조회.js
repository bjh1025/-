var lecturelist = [
    {major1:"IT학부",major2:"ICT융합학과", grade:1, lecname:"ICT융합개론", lecno:11350, div:"전공기초", credit:3, stuno:30, time1:"월", time2:"7,8,9", statime:"7", fintime:"9", profes:"교수1", lecdiv:"이론/실기", theory:1, practice: 2,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:1, lecname:"C프로그래밍Ⅰ", lecno:11566, div:"전공기초", credit:3, stuno:30, time1:"목", time2: "1,2,3", statime: "1", fintime:"3", profes: "교수2", lecdiv: "이론/실기", theory: 1, practice: 2,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:1, lecname:"정보보호기초", lecno:12536, div:"전공기초", credit:3, stuno:30, time1: "화", time2: "6,7,8", statime: "6", fintime:"8", profes: "교수3", lecdiv: "이론/실기", theory: 2, practice: 1,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:1, lecname:"자바프로그래밍Ⅰ", lecno:14505, div:"전공기초", credit:3, stuno:30, time1: "목", time2: "5,6,7", statime: "5", fintime:"7", profes: "교수4", lecdiv: "이론/실기", theory: 1, practice: 2,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:1, lecname:"컴퓨팅사고", lecno:15716, div:"전공기초", credit:2, stuno:30, time1: "(미정)", time2: 1, time3: 2, profes: "교수5", lecdiv: "이론", theory: 2, practice: 0,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:2, lecname:"클라우드컴퓨팅", lecno:13364, div:"전공필수", credit:3, stuno:30, time1:"화",time2:"1,2,3", statime3: "1", fintime:"3",profes: "교수2", lecdiv: "이론/실기", theory: 1, practice: 2,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:2, lecname:"선형대수", lecno:10847, div:"전공선택", credit:3, stuno:30, time1:"화", time2:"1,2,3", statime:"1", fintime:"3", profes: "교수2", lecdiv: "이론", theory: 3, practice: 0,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:2, lecname:"소프트웨어공학", lecno:10899, div:"전공선택", credit:3, stuno:30, time1: "수", time2:"1,2,3", statime:"1",fintime:"3", profes: "교수2", lecdiv: "이론", theory: 3, practice: 0,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:2, lecname:"운영체제", lecno:11164, div:"전공필수", credit:3, stuno:30, time1:"월", time2:"1,2,3", statime:"1",fintime:"3",profes: "교수2", lecdiv: "이론/실기", theory: 1, practice: 2,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:2, lecname:"안드로이드 프로그래밍", lecno:13462, div:"전공필수", credit:3, stuno:30, time1: "목", time2:"8,9,10", statime:"8",fintime:"10", profes: "교수2", lecdiv: "실기", theory: 0, practice: 3,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:2, lecname:"블록체인의 이해 및 활용", lecno:14506, div:"전공선택", credit:3, stuno:30, time1: "수", time2:"5,6,7", statime:"5",fintime:"7", profes: "교수2", lecdiv: "실기", theory: 0, practice: 3,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:3, lecname:"웹프로그래밍", lecno:13448, div:"전공기초", credit:3, stuno:30, time1: "월", time2: 1, time3: 2, profes: "교수1", lecdiv: "실기", theory: 0, practice: 3,bookmark: false}, 
    {major1:"IT학부",major2:"ICT융합학과", grade:3, lecname:"웹프로그래밍", lecno:13448, div:"전공기초", credit:3, stuno:30, time1: "월", time2: 1, time3: 2, profes: "교수1", lecdiv: "실기", theory: 0, practice: 3,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:3, lecname:"네트워크보안", lecno:12811, div:"전공선택", credit:3, stuno:30, time1:"수", time2:1, time3:2, profes:"교수3", lecdiv:"이론", theory:3, practice:0,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:3, lecname:"보안관제 및 모니터링", lecno:13454, div:"전공선택", credit:3, stuno:30, time1:"금", time2:"7,8,9", statime:"7", fintime:"9", profes:"교수4", lecdiv:"이론/실기", theory:1, practice:2,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:3, lecname:"빅데이터개론", lecno:14507, div:"전공선택", credit:3, stuno:30, time1:"화", time2:"5,6,7", statime:"5", fintime:"7", profes:"교수4", lecdiv:"이론/실기", theory:1, practice:2,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:3, lecname:"데이터베이스", lecno:14508, div:"전공선택", credit:3, stuno:30, time1:"수", time2:"5,6,7", statime:"5", fintime:"7", profes:"교수4", lecdiv:"이론/실기", theory:1, practice:2,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:3, lecname:"5G통신시스템", lecno:15120, div:"전공선택", credit:3, stuno:30, time1:"화", time2:"8,9,10", statime:"8", fintime:"10", profes:"교수4", lecdiv:"이론", theory:3, practice:0,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:3, lecname:"1인미디어", lecno:15422, div:"전공선택", credit:3, stuno:30, time1:"금", time2:"1,2,3", statime:"1", fintime:"3", profes:"교수4", lecdiv:"이론/실기", theory:1, practice:2,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:4, lecname:"졸업프로젝트ⅱ", lecno:12529, div:"전공선택", credit:3, stuno:30, time1:"목", time2:"1,2,3", statime:"1", fintime:"3", profes:"교수4", lecdiv:"실기", theory:0, practice:3,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:4, lecname:"IT비즈니스모델", lecno:12925, div:"전공선택", credit:3, stuno:30, time1:"금", time2:"5,6,7", statime:"5", fintime:"7", profes:"교수4", lecdiv:"이론/실기", theory:1, practice:2,bookmark: false},
    {major1:"IT학부",major2:"ICT융합학과", grade:4, lecname:"빅데이터시각화", lecno:14510, div:"전공선택", credit:3, stuno:30, time1:"수", time2:"8,9,10", statime:"8", fintime:"10", profes:"교수4", lecdiv:"실기", theory:0, practice:3,bookmark: false},

    {major1:"IT학부",major2:"컴퓨터공학과", grade: 1, lecname:"소프트웨어기초", lecno: 12929, div: "전공선택", credit: 3, stuno: 30, time1: "화", time2: "5,6,7", statime: "5", fintime:"7", profes:"교수1", lecdiv:"이론/실기", theory:1, practice:2},
    {major1:"IT학부",major2:"컴퓨터공학과", grade: 1, lecname:"자바프로그래밍Ⅰ", lecno: 14505, div: "전공기초", credit: 3, stuno: 30, time1: "금", time2: "1,2,3", statime: "1", fintime:"3", profes:"교수2", lecdiv:"실기", theory:0, practice:3},
    {major1:"IT학부",major2:"컴퓨터공학과", grade: 1, lecname:"취업/창업과IT", lecno: 15121, div: "전공필수", credit: 2, stuno: 30, time1: "월", time2: "7,8", statime: "7", fintime:"8", profes:"교수1", lecdiv:"이론", theory:2, practice:0},
    {major1:"IT학부",major2:"컴퓨터공학과", grade: 2, lecname:"웹프로그래밍", lecno: 11183, div: "전공필수", credit: 3, stuno: 30, time1: "금", time2: "1,2,3", statime: "1", fintime:"3", profes:"교수1", lecdiv:"이론/실기", theory:1, practice:2},
    {major1:"IT학부",major2:"컴퓨터공학과", grade: 2, lecname:"C++프로그래밍", lecno: 13026, div: "전공선택", credit: 3, stuno: 30, time1: "수", time2: "1,2,3", statime: "1", fintime:"3", profes:"교수1", lecdiv:"실기", theory:0, practice:3},
    {major1:"IT학부",major2:"컴퓨터공학과", grade: 2, lecname:"알고리즘", lecno: 15122, div: "전공필수", credit: 3, stuno: 30, time1: "목", time2: "1,2,3", statime: "1", fintime:"3", profes:"교수1", lecdiv:"이론/실기", theory:1, practice:2},
    {major1:"IT학부",major2:"컴퓨터공학과", grade: 3, lecname:"프로세싱", lecno: 14513, div: "전공선택", credit: 3, stuno: 30, time1: "월", time2: "5,6,7", statime: "5", fintime:"7", profes:"교수1", lecdiv:"이론/실기", theory:1, practice:2},
    {major1:"IT학부",major2:"컴퓨터공학과", grade: 3, lecname:"파이썬프로그래밍", lecno: 12345, div: "전공선택", credit: 3, stuno: 30, time1: "월", time2: "1,2,3", statime: "1", fintime:"3", profes:"교수1", lecdiv:"실기", theory:0, practice:3},
    {major1:"IT학부",major2:"컴퓨터공학과", grade: 4, lecname:"데이터베이스", lecno: 10470, div: "전공선택", credit: 3, stuno: 30, time1: "월", time2: "6,7,8", statime: "6", fintime:"8", profes:"교수1", lecdiv:"이론/실기", theory:1, practice:2},
    {major1:"IT학부",major2:"컴퓨터공학과", grade: 4, lecname:"졸업프로젝트I", lecno: 12529, div: "전공필수", credit: 3, stuno: 30, time1: "목", time2: "6,7,8", statime: "6", fintime:"8", profes:"교수1", lecdiv:"실기", theory:0, practice:3},

    {major1:"교양학부",major2:"교양학부", grade:"전학년", lecname:"채플", lecno: 11423, div: "채플", credit: 0, stuno: 1200, time1: "화", time2: "3", statime: "3", fintime:"4", profes:"교목실", lecdiv:"실기", theory:0, practice:1},
    {major1:"교양학부",major2:"교양학부", grade:"전학년", lecname:"채플", lecno: 11423, div: "채플", credit: 0, stuno: 700, time1: "화", time2: "7", statime: "7", fintime:"8", profes:"교목실", lecdiv:"실기", theory:0, practice:1},
    {major1:"교양학부",major2:"교양학부", grade:"전학년", lecname:"합창I", lecno: 12248, div: "교양선택", credit: 2, stuno: 60, time1: "수", time2: "7,8", statime: "7", fintime:"8", profes:"교양교수1", lecdiv:"실기", theory:0, practice:2},
    {major1:"교양학부",major2:"교양학부", grade:"전학년", lecname:"농구", lecno: 13249, div: "교양선택", credit: 2, stuno: 30, time1: "월", time2: "7,8", statime: "7", fintime:"8", profes:"교양교수2", lecdiv:"실기", theory:0, practice:2},
    {major1:"교양학부",major2:"교양학부", grade:"전학년", lecname:"중국어I", lecno: 13719, div: "교양필수", credit: 2, stuno: 20, time1: "화", time2: "4,5", statime: "4", fintime:"5", profes:"교양교수3", lecdiv:"이론", theory:2, practice:0},
    {major1:"교양학부",major2:"교양학부", grade:"전학년", lecname:"ACE202", lecno: 14900, div: "교양필수", credit: 2, stuno: 15, time1: "월", time2: "2,3", statime: "2", fintime:"3", profes:"교양교수4", lecdiv:"이론/실기", theory:1, practice:1},

  ];

    var bookmarkStatus = {};

    function displaySelected() {
    var select1 = document.getElementById("mySelect1");
    var select2 = document.getElementById("mySelect2");
    var select3 = document.getElementById("mySelect3");
    var select4 = document.getElementById("mySelect4");
    var select5 = document.getElementById("mySelect5");
    var select6 = document.getElementById("mySelect6");
  
    var value1 = select1.options[select1.selectedIndex].value;
    var value2 = select2.options[select2.selectedIndex].value;
    var value3 = select3.options[select3.selectedIndex].value;
    var value4 = select4.options[select4.selectedIndex].value;
    var value5 = select5.options[select5.selectedIndex].value;
    var value6 = select6.options[select6.selectedIndex].value;

    // 테이블 초기화
    clearTable();
  
    // 필터링된 데이터 가져오기
    var filteredData = lecturelist.filter(function (lecture) {
      return (
        (value1 === "전체" || lecture.major1 === value1) &&
        (value2 === "전체" || lecture.major2 === value2) &&
        (value3 === "전체" || lecture.grade === value3 || lecture.grade === parseInt(value3)) &&
        (value4 === "전체" || lecture.time1 === value4) &&
        (value5 === "전체" || lecture.statime >= parseInt(value5)) &&
        (value6 === "전체" || lecture.fintime <= parseInt(value6))
      );
    });
  
    // 필터링된 데이터를 테이블에 추가
    var table = document.getElementById("resultTable");
    var tbody = table.getElementsByTagName("tbody")[0];
    for (var i = 0; i < filteredData.length; i++) {
      var lecture = filteredData[i];
      var row = tbody.insertRow();
  
      var cell1 = row.insertCell(0);
      cell1.innerHTML = lecture.major1;

      var cell2 = row.insertCell(1);
      cell2.innerHTML = lecture.major2;
  
      var cell3 = row.insertCell(2);
      cell3.innerHTML = lecture.grade;
  
      var cell4 = row.insertCell(3);
      cell4.innerHTML = lecture.lecname;
  
      var cell5 = row.insertCell(4);
      cell5.innerHTML = lecture.lecno;
  
      var cell6 = row.insertCell(5);
      cell6.innerHTML = lecture.div;
  
      var cell7 = row.insertCell(6);
      cell7.innerHTML = lecture.credit;
  
      var cell8 = row.insertCell(7);
      cell8.innerHTML = lecture.stuno;
  
      var cell9 = row.insertCell(8);
      cell9.innerHTML = lecture.time1 + "("+lecture.time2+")";
  
      var cell10 = row.insertCell(9);
      cell10.innerHTML = lecture.profes;
  
      var cell11 = row.insertCell(10);
      cell11.innerHTML = lecture.lecdiv;
  
      var cell12 = row.insertCell(11);
      cell12.innerHTML = lecture.theory;
  
      var cell13 = row.insertCell(12);
      cell13.innerHTML = lecture.practice;
      
      var cell14 = row.insertCell(13);
      var bookmarkBtn = document.createElement("input");
      bookmarkBtn.type = "checkbox";
      bookmarkBtn.className = "bookmark-checkbox";
      bookmarkBtn.checked = bookmarkStatus[lecture.lecno] || false; // Get bookmark status from the object
      bookmarkBtn.dataset.lecno = lecture.lecno; // Set the lecture number as a data attribute
      cell14.appendChild(bookmarkBtn);
  
      bookmarkBtn.addEventListener("change", function () {
        var lectureNo = this.dataset.lecno;
        bookmarkStatus[lectureNo] = this.checked; // Update the bookmark status

      // Perform any additional actions based on the bookmark status change
      if (this.checked) {
      // Lecture is bookmarked
      } else {
      // Lecture is not bookmarked
      
    }
  });

    }
  }
  
  function clearTable() {
    var table = document.getElementById("resultTable");
    var tbody = table.getElementsByTagName("tbody")[0];
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  function nonactivate(){
    var select1 = document.getElementById("mySelect1");
    var select2 = document.getElementById("mySelect2");
    var select4 = document.getElementById("mySelect4");
    var select5 = document.getElementById("mySelect5");
    var select6 = document.getElementById("mySelect6");
  
    var value1 = select1.options[select1.selectedIndex].value;
    var value2 = select2.options[select2.selectedIndex].value;
    var value4 = select4.options[select4.selectedIndex].value;
    var value5 = select5.options[select5.selectedIndex].value;
    var value6 = select6.options[select6.selectedIndex].value;

    if(value1==="교양학부"){
      select2.disabled =true;
    } else {
      select2.disabled=false;
    }

    for (var i = 0; i < select6.options.length; i++) {
      var option = select6.options[i];
      var optionValue = parseInt(option.value);
      var selectedValue = parseInt(select5.value);
    
      if (optionValue <= selectedValue) {
        select6.disabled=false;
        option.disabled = true; // 선택한 값보다 작거나 같은 교시는 비활성화
      } else {
        select6.disabled=false;
        option.disabled = false; // 선택한 값보다 큰 교시는 활성화
      }
    }
  }
