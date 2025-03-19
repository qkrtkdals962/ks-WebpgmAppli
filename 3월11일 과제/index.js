const body = document.body;

let h1 = document.createElement("h1");
h1.textContent = "자기소개페이지";
body.appendChild(h1);

let img = document.createElement("img");
img.src = "내사진.png";
img.alt = "프로필 이미지";
img.style.height = "400px";
img.style.width = "300px";
img.style.borderRadius = "50%";
body.appendChild(img);

let p1 = document.createElement("p");
p1.textContent =
  "저는 경성대학교에서 소프트웨어학을 전공하고있는 박상민 입니다.";
body.appendChild(p1);

let p2 = document.createElement("p");
p2.textContent = "저는 3학년 수업이 시작되기전 유럽으로 여행을 갔다왔습니다.";
body.appendChild(p2);