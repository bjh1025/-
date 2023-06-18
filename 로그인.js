var studentData = [
    {
      id: "201910105",password: "1234",grade: 3
    },
  ];
  
  function login() {
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;

    var matchedStudent = studentData.find(function(student) {
        return student.id === id && student.password === password;
    });

    if (matchedStudent) {
        window.location.href = "FinalProject.html?id=" + id;
    } else {
        alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
}
  