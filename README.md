let eyeAngle = 0;
let isEyeMoving = false;
let isSurprised = false;
let surpriseStartTime = 0
let backgroundAngle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // 놀란 상태 체크 (1초 후 원래대로)
  if (isSurprised && millis() - surpriseStartTime > 1000) {
    isSurprised = false;
  }
  
  // 배경
  if (isSurprised) {
    // 역동적인 배경 애니메이션
    backgroundAngle += 0.3;
    for (let i = 0; i < 10; i++) {
      let hue = (i * 36 + backgroundAngle * 10) % 360;
      fill(hue, 80, 100);
      noStroke();
      let size = 500 + sin(backgroundAngle + i) * 100;
      ellipse(200, 200, size, size);
    }
    
    // 번쩍이는 선들
    stroke(255, 255, 0, 150);
    strokeWeight(3);
    for (let i = 0; i < 12; i++) {
      let angle = (i * TWO_PI / 12) + backgroundAngle;
      let startDist = 50 + sin(backgroundAngle * 2) * 20;
      let endDist = 300;
      line(
        200 + cos(angle) * startDist,
        200 + sin(angle) * startDist,
        200 + cos(angle) * endDist,
        200 + sin(angle) * endDist
      );
    }
  } else {
    background(220, 230, 240);
  }
  
  // 목
  fill(255, 230, 200);
  noStroke();
  rect(175, 240, 50, 80);
  
  // 목 그림자
  fill(230, 200, 170, 100);
  ellipse(200, 250, 30, 15);
  
  // 교복 상의 (남색)
  fill(15, 20, 60);
  beginShape();
  vertex(100, 320);
  vertex(140, 280);
  vertex(160, 260);
  vertex(200, 245);
  vertex(240, 260);
  vertex(260, 280);
  vertex(300, 320);
  vertex(300, 400);
  vertex(100, 400);
  endShape(CLOSE);
  
  // 왼쪽 팔
  fill(15, 20, 60);
  beginShape();
  vertex(100, 320);
  vertex(80, 350);
  vertex(70, 400);
  vertex(100, 400);
  endShape(CLOSE);
  
  // 오른쪽 팔
  beginShape();
  vertex(300, 320);
  vertex(320, 350);
  vertex(330, 400);
  vertex(300, 400);
  endShape(CLOSE);
  
  // 팔 주름 디테일
  stroke(10, 15, 50);
  strokeWeight(1);
  line(85, 340, 75, 380);
  line(315, 340, 325, 380);
  
  // 교복 칼라 (흰색)
  noStroke();
  fill(255);
  quad(185, 255, 200, 275, 215, 255, 200, 250);
  
  // 칼라 라인
  stroke(200);
  strokeWeight(1.5);
  line(185, 255, 200, 275);
  line(215, 255, 200, 275);
  
  // 교복 단추
  noStroke();
  fill(220);
  circle(200, 290, 8);
  circle(200, 310, 8);
  circle(200, 330, 8);
  circle(200, 350, 8);
  
  // 단추 구멍
  stroke(180);
  strokeWeight(0.5);
  point(198, 290);
  point(202, 290);
  point(198, 310);
  point(202, 310);
  point(198, 330);
  point(202, 330);
  point(198, 350);
  point(202, 350);
  
  // 교복 로고 (S)
  noStroke();
  fill(255);
  textSize(45);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text('S', 250, 340);
  
  // 로고 테두리
  noFill();
  stroke(255, 150);
  strokeWeight(2);
  circle(250, 340, 55);
  
  // 얼굴
  noStroke();
  fill(255, 230, 200);
  ellipse(200, 180, 120, 140);
  
  // 턱선 강조
  fill(240, 210, 180, 100);
  ellipse(200, 230, 80, 30);
  
  // 귀
  fill(255, 230, 200);
  ellipse(150, 180, 25, 35);
  ellipse(250, 180, 25, 35);
  
  // 귀 안쪽
  fill(240, 200, 170);
  ellipse(150, 180, 12, 20);
  ellipse(250, 180, 12, 20);
  
  // 머리카락 베이스 (갈색)
  fill(60, 40, 20);
  
  // 머리 뒷부분 - 윗부분만 보이도록 arc 사용
  noStroke();
  rect(135, 135, 130, 20);
  arc(200, 140, 130, 100, PI, TWO_PI);
  
  // 자연스러운 앞머리 - 여러 겹으로
  push();
  noStroke();
  
  // 레이어 1: 뒤쪽 머리카락
  fill(50, 35, 18);
  beginShape();
  vertex(140, 120);
  bezierVertex(150, 110, 170, 105, 200, 105);
  bezierVertex(230, 105, 250, 110, 260, 120);
  bezierVertex(250, 135, 230, 145, 200, 148);
  bezierVertex(170, 145, 150, 135, 140, 120);
  endShape(CLOSE);
  
  // 레이어 2: 중간 머리카락 (자연스러운 가닥들)
  fill(60, 40, 20);
  for(let i = 0; i < 8; i++) {
    let x = map(i, 0, 7, 150, 250);
    let offsetX = sin(i * 0.8) * 8;
    let offsetY = cos(i * 0.5) * 5;
    
    beginShape();
    vertex(x + offsetX, 115 + offsetY);
    bezierVertex(
      x + offsetX - 5, 125 + offsetY,
      x + offsetX - 3, 135 + offsetY,
      x + offsetX, 145 + offsetY
    );
    bezierVertex(
      x + offsetX + 3, 135 + offsetY,
      x + offsetX + 5, 125 + offsetY,
      x + offsetX + 8, 115 + offsetY
    );
    endShape(CLOSE);
  }
  
  // 레이어 3: 앞쪽 머리카락 (하이라이트)
  fill(70, 50, 25);
  for(let i = 0; i < 5; i++) {
    let x = map(i, 0, 4, 165, 235);
    let offsetX = sin(i * 1.2) * 6;
    
    beginShape();
    vertex(x + offsetX, 120);
    bezierVertex(
      x + offsetX - 4, 128,
      x + offsetX - 2, 136,
      x + offsetX, 142
    );
    bezierVertex(
      x + offsetX + 2, 136,
      x + offsetX + 4, 128,
      x + offsetX + 6, 120
    );
    endShape(CLOSE);
  }
  
  // 옆머리 디테일 (자연스러운 곡선)
  fill(60, 40, 20);
  beginShape();
  vertex(138, 130);
  bezierVertex(135, 145, 133, 160, 135, 175);
  bezierVertex(137, 190, 142, 205, 148, 215);
  bezierVertex(145, 200, 143, 180, 145, 160);
  bezierVertex(146, 145, 143, 135, 138, 130);
  endShape(CLOSE);
  
  beginShape();
  vertex(262, 130);
  bezierVertex(265, 145, 267, 160, 265, 175);
  bezierVertex(263, 190, 258, 205, 252, 215);
  bezierVertex(255, 200, 257, 180, 255, 160);
  bezierVertex(254, 145, 257, 135, 262, 130);
  endShape(CLOSE);
  
  // 머리카락 하이라이트
  fill(90, 70, 40, 150);
  ellipse(180, 125, 15, 8);
  ellipse(210, 120, 20, 10);
  
  pop();
  
  // 눈썹 (남자답게 굵고 진하게)
  stroke(40, 25, 10);
  strokeWeight(4);
  noFill();
  
  if (isSurprised) {
    // 놀란 표정 - 눈썹 올라감
    beginShape();
    vertex(165, 155);
    bezierVertex(170, 152, 178, 151, 185, 153);
    endShape();
    
    beginShape();
    vertex(215, 153);
    bezierVertex(222, 151, 230, 152, 235, 155);
    endShape();
  } else {
    // 평상시 눈썹
    beginShape();
    vertex(165, 165);
    bezierVertex(170, 162, 178, 161, 185, 163);
    endShape();
    
    beginShape();
    vertex(215, 163);
    bezierVertex(222, 161, 230, 162, 235, 165);
    endShape();
  }
  
  // 눈 흰자
  noStroke();
  fill(255);
  if (isSurprised) {
    // 놀란 표정 - 눈 크게
    ellipse(175, 180, 35, 32);
    ellipse(225, 180, 35, 32);
  } else {
    ellipse(175, 180, 28, 22);
    ellipse(225, 180, 28, 22);
  }
  
  // 눈 테두리
  noFill();
  stroke(200, 180, 160);
  strokeWeight(1.5);
  if (isSurprised) {
    arc(175, 180, 35, 32, 0, PI);
    arc(225, 180, 35, 32, 0, PI);
    arc(175, 180, 35, 32, PI, TWO_PI);
    arc(225, 180, 35, 32, PI, TWO_PI);
  } else {
    arc(175, 180, 28, 22, 0, PI);
    arc(225, 180, 28, 22, 0, PI);
    arc(175, 180, 28, 22, PI, TWO_PI);
    arc(225, 180, 28, 22, PI, TWO_PI);
  }
  
  // 눈동자 움직임 계산
  if (isEyeMoving) {
    eyeAngle += 0.05;
  }
  let eyeMoveX = cos(eyeAngle) * 4;
  let eyeMoveY = sin(eyeAngle) * 3;
  
  // 왼쪽 눈동자 (청록색)
  noStroke();
  fill(40, 120, 120);
  circle(175 + eyeMoveX, 180 + eyeMoveY, 16);
  
  // 왼쪽 동공
  fill(20);
  circle(176 + eyeMoveX, 179 + eyeMoveY, 10);
  
  // 왼쪽 눈 하이라이트
  fill(255, 250);
  circle(178 + eyeMoveX, 177 + eyeMoveY, 4);
  circle(173 + eyeMoveX, 182 + eyeMoveY, 2);
  
  // 오른쪽 눈동자 (청록색)
  fill(40, 120, 120);
  circle(225 + eyeMoveX, 180 + eyeMoveY, 16);
  
  // 오른쪽 동공
  fill(20);
  circle(226 + eyeMoveX, 179 + eyeMoveY, 10);
  
  // 오른쪽 눈 하이라이트
  fill(255, 250);
  circle(228 + eyeMoveX, 177 + eyeMoveY, 4);
  circle(223 + eyeMoveX, 182 + eyeMoveY, 2);
  
  // 속눈썹
  stroke(40, 25, 10);
  strokeWeight(1);
  line(162, 180, 160, 182);
  line(188, 180, 190, 182);
  line(212, 180, 210, 182);
  line(238, 180, 240, 182);
  
  // 코
  noFill();
  stroke(200, 180, 160);
  strokeWeight(2);
  line(200, 190, 200, 208);
  
  // 콧방울
  strokeWeight(1.5);
  arc(195, 208, 8, 6, 0, PI);
  arc(205, 208, 8, 6, 0, PI);
  
  // 코 하이라이트
  stroke(255, 200);
  strokeWeight(1);
  line(198, 195, 198, 205);
  
  // 입 (놀란 표정일 때 변경)
  if (isSurprised) {
    // 놀란 입 - 동그랗게 벌어진 모양
    noFill();
    stroke(180, 100, 100);
    strokeWeight(2.5);
    ellipse(200, 223, 18, 25);
    
    // 입 안쪽
    fill(100, 50, 50);
    noStroke();
    ellipse(200, 223, 12, 18);
  } else {
    // 평상시 입
    noFill();
    stroke(180, 100, 100);
    strokeWeight(2.5);
    beginShape();
    vertex(188, 220);
    bezierVertex(193, 221, 197, 221, 200, 221);
    bezierVertex(203, 221, 207, 221, 212, 220);
    endShape();
    
    // 입술 디테일
    strokeWeight(1);
    stroke(180, 100, 100, 150);
    line(188, 220, 192, 219);
    line(208, 219, 212, 220);
  }
  
  // 볼 터치
  noStroke();
  fill(255, 150, 150, 80);
  ellipse(160, 195, 25, 18);
  ellipse(240, 195, 25, 18);
  
  // 얼굴 음영
  fill(230, 200, 170, 50);
  ellipse(155, 170, 15, 25);
  ellipse(245, 170, 15, 25);
  
  // 액세서리 포인트 (청록색 작은 점)
  noStroke();
  fill(100, 220, 220);
  circle(280, 290, 12);
  // 포인트 하이라이트
  fill(150, 255, 255);
  circle(282, 288, 4);
}

function mousePressed() {
  // 마우스 클릭 시 눈동자 움직임 토글
  isEyeMoving = !isEyeMoving;
}

function keyPressed() {
  // 스페이스바 눌렀을 때 놀란 표정
  if (key === ' ') {
    isSurprised = true;
    surpriseStartTime = millis();
  }
  // s 키 누르면 저장
  if (key === 's' || key === 'S') {
    saveGif('assignment#3', 10);
    saveGif('assignment#3', 10, { delay: 0, units: 'seconds' });
  }
}
