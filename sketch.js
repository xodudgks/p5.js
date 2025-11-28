function setup() {
    createCanvas(600, 400);
}

function draw() {

    let t = millis() / 1000.0;
    

    let bgR = 35 + sin(t * 0.5) * 10;
    let bgG = 30 + cos(t * 0.3) * 10;
    let bgB = 25 + sin(t * 0.4) * 10;
    background(bgR, bgG, bgB);
    

    for(let i = 0; i < 5; i++) {
        fill(200, 150, 100, 30 + sin(t * 2 + i) * 20);
        noStroke();
        let x = 100 + i * 120 + sin(t + i) * 30;
        let y = 50 + cos(t * 0.8 + i) * 40;
        ellipse(x, y, 20 + sin(t * 3 + i) * 5, 25 + cos(t * 3 + i) * 5);
    }
    
    fill(160, 100, 70, 80);
    noStroke();
    ellipse(120, 240, 180, 300);
    ellipse(200, 200, 200, 150);
    
    fill(120, 80, 50, 70);
    ellipse(300, 320, 250, 180);
    ellipse(400, 280, 200, 200);
    
    fill(180, 120, 80, 60);
    ellipse(300, 150, 300, 250);
    ellipse(250, 180, 150, 200);
    
    fill(140, 90, 60, 75);
    ellipse(480, 250, 220, 200);
    ellipse(520, 220, 150, 180);
    

    push();
    translate(120, 300);
    rotate(t * 0.5);
    for(let i = 0; i < 6; i++) {
        fill(200, 150, 100, 50 - i * 8);
        noStroke();
        ellipse(0, 0, 100 + i * 30, 130 + i * 25);
    }
    pop();

    fill(150, 90, 50);
    stroke(100, 60, 30);
    strokeWeight(4);
    ellipse(120, 300, 100, 130);
    
    fill(130, 80, 45);
    rect(115, 180, 10, 120);
    
    fill(110, 70, 40);
    ellipse(120, 170, 25, 18);
    

    stroke(220, 200, 180);
    strokeWeight(2);
    for(let i = 0; i < 6; i++) {
        let x = 112 + i * 3;
        let vibration = sin(t * 10 + i * 0.5) * 2;
        line(x + vibration, 180, x + vibration, 365);
        
        stroke(220, 200, 180, 100);
        strokeWeight(1);
        line(x + vibration, 250, x + 20 + i * 5 + vibration, 240);
        line(x + vibration, 280, x - 15 - i * 3 + vibration, 290);
        line(x + vibration, 320, x + 25 + i * 4 + vibration, 315);
    }
    
    fill(30, 20, 15);
    noStroke();
    ellipse(120, 300, 30, 30);
    
    for(let i = 1; i < 4; i++) {
        fill(150 - i * 30, 90 - i * 20, 50 - i * 10, 80 - i * 20);
        ellipse(120, 300, 30 + i * 15, 30 + i * 15);
    }
    
    for(let i = 0; i < 8; i++) {
        let pulseSize = 1 + sin(t * 4 + i * 0.5) * 0.3;
        fill(random(180, 255), random(120, 200), random(80, 150), random(70, 120));
        stroke(random(120, 200), random(80, 160), random(50, 120));
        strokeWeight(2);
        let angle = (i / 8) * TWO_PI + t * 0.5;
        let x = 120 + cos(angle) * (60 + i * 5);
        let y = 300 + sin(angle) * (45 + i * 3);
        push();
        translate(x, y);
        scale(pulseSize);
        triangle(0, 0, random(10, 20), random(10, 15), -random(5, 12), random(8, 16));
        pop();
    }
    

    fill(45, 40, 35);
    stroke(25, 20, 15);
    strokeWeight(3);
    rect(180, 275, 240, 110);
    fill(55, 50, 45);
    rect(185, 270, 230, 10);
    

    fill(250, 248, 245);
    stroke(200, 195, 190);
    strokeWeight(1);
    for(let i = 0; i < 21; i++) {
        let keyPress = 0;
        if(floor(t * 4) % 21 === i) {
            keyPress = 5;
        }
        rect(185 + i * 11, 280 + keyPress, 10, 100 - keyPress);
        
        if(i % 3 === 0) {
            let noteY = 265 - i * 2 - abs(sin(t * 3 + i)) * 20;
            fill(random(200, 255), random(180, 240), random(160, 220), random(60, 100));
            noStroke();
            rect(187 + i * 11, noteY, 6, random(8, 15));
            rect(188 + i * 11, noteY - 15, 4, random(6, 12));
            
            fill(250, 248, 245);
            stroke(200, 195, 190);
            strokeWeight(1);
        }
    }
    

    fill(15, 10, 8);
    noStroke();
    let blackKeys = [191, 202, 224, 235, 246, 269, 280, 302, 313, 324, 347, 358, 380, 391, 402];
    for(let i = 0; i < blackKeys.length; i++) {
        let keyPress = 0;
        if(floor(t * 5) % 15 === i) {
            keyPress = 3;
        }
        rect(blackKeys[i], 280 + keyPress, 7, 65 - keyPress);
    }
    

    for(let i = 0; i < blackKeys.length; i++) {
        let x = blackKeys[i] + 3.5;
        fill(random(80, 160), random(40, 120), random(20, 100), random(70, 120));
        ellipse(x, 350 + (i % 3) * 8 + sin(t * 5 + i) * 3, random(6, 14), random(6, 14));
        ellipse(x, 365 + (i % 2) * 5 + cos(t * 5 + i) * 3, random(4, 10), random(4, 10));
    }
    

    fill(120, 100, 80);
    stroke(80, 60, 40);
    strokeWeight(2);
    ellipse(220, 390, 15, 8);
    ellipse(250, 390, 15, 8);
    ellipse(280, 390, 15, 8);
    

    for(let i = 0; i < 15; i++) {
        let noteY = 250 + sin(i * 0.5 + t * 2) * 20 - (t * 20) % 200;
        fill(random(220, 255), random(200, 255), random(180, 240), random(80, 140));
        noStroke();
        let x = 190 + i * 15;
        ellipse(x, noteY, random(10, 20), random(8, 16));
        
        stroke(random(180, 255), random(160, 220), random(140, 200), 100);
        strokeWeight(2);
        line(x, noteY, x + random(8, 18), noteY - random(12, 22));
    }
    

    for(let wave = 0; wave < 4; wave++) {
        stroke(200 + sin(t + wave) * 55, 150 + cos(t + wave) * 70, 100 + sin(t * 2 + wave) * 80, 80);
        strokeWeight(4 + wave);
        noFill();
        let waveX = 300 + wave * 30 + sin(t + wave) * 10;
        arc(waveX, 200, 80 + wave * 20, 60 + wave * 15, 0 + sin(t * 2) * 0.2, PI + sin(t * 2) * 0.2);
        arc(waveX - 20, 180, 60 + wave * 15, 80 + wave * 20, PI - cos(t * 2) * 0.2, TWO_PI - cos(t * 2) * 0.2);
    }
    
    fill(0, 0, 0, 60);
    ellipse(303, 203, 95, 155);
    
    fill(200, 120, 70);
    stroke(140, 80, 50);
    strokeWeight(3);
    ellipse(300, 165, 85, 80);
    
    fill(190, 115, 65);
    ellipse(300, 235, 90, 95);
    
    fill(180, 110, 60);
    rect(275, 195, 50, 10);
    
    fill(170, 100, 55);
    rect(295, 100, 10, 65);
    
    fill(40, 30, 20);
    rect(296, 102, 8, 63);
    
    fill(160, 95, 50);
    ellipse(300, 95, 18, 12);
    
    fill(120, 70, 40);
    ellipse(292, 90, 4, 8);
    ellipse(308, 90, 4, 8);
    ellipse(292, 100, 4, 8);
    ellipse(308, 100, 4, 8);
    
    fill(30, 20, 15);
    rect(295, 270, 10, 8);
    
    fill(220, 200, 180);
    rect(294, 205, 12, 6);
    
    stroke(200, 180, 160);
    strokeWeight(1.5);
    for(let i = 0; i < 4; i++) {
        let stringX = 296 + i * 2.5;
        let vibration = sin(t * 12 + i) * 1.5;
        line(stringX + vibration, 102, stringX + vibration, 278);
        
        stroke(random(150, 255), random(100, 200), random(80, 160), 100);
        strokeWeight(1);
        for(let j = 0; j < 6; j++) {
            let vibY = 130 + j * 20;
            line(stringX + vibration, vibY, stringX + sin(j * 0.8 + t * 5) * (15 + i * 3), vibY);
            line(stringX + vibration, vibY, stringX - sin(j * 0.6 + t * 5) * (12 + i * 2), vibY);
        }
    }
    
    fill(25, 20, 15);
    noStroke();
    ellipse(282, 175, 3, 12);
    ellipse(282, 190, 6, 6);
    ellipse(282, 205, 3, 12);
    rect(279, 188, 8, 2);
    ellipse(318, 175, 3, 12);
    ellipse(318, 190, 6, 6);
    ellipse(318, 205, 3, 12);
    rect(315, 188, 8, 2);
    
    stroke(100, 60, 30);
    strokeWeight(1);
    noFill();
    ellipse(300, 165, 82, 77);
    ellipse(300, 235, 87, 92);
    

    for(let i = 0; i < 3; i++) {
        fill(random(100, 180), random(60, 140), random(40, 100), 60 + i * 20);
        ellipse(285 + i * 5 + sin(t * 3 + i) * 5, 190 + i * 3, 8 + i * 3, 8 + i * 3);
        ellipse(315 - i * 5 + cos(t * 3 + i) * 5, 210 - i * 3, 8 + i * 3, 8 + i * 3);
    }
    
    for(let i = 0; i < 5; i++) {
        let pulse = 1 + sin(t * 6 + i * 0.8) * 0.15;
        stroke(random(200, 255), random(150, 220), random(100, 180), 100 - i * 15);
        strokeWeight((6 - i) * pulse);
        noFill();
        ellipse(480, 300, (90 + i * 40) * pulse, (90 + i * 40) * pulse);
    }
    

    let drumHit = abs(sin(t * 4)) * 5;
    fill(140, 80, 50);
    stroke(90, 50, 30);
    strokeWeight(4);
    ellipse(480, 300, 90 + drumHit, 90 + drumHit);
    

    let drumHit2 = abs(sin(t * 5 + 1)) * 3;
    fill(160, 90, 55);
    stroke(110, 60, 35);
    strokeWeight(3);
    ellipse(520, 250, 50 + drumHit2, 50 + drumHit2);
    ellipse(440, 250, 45 + drumHit2, 45 + drumHit2);
    

    for(let drum = 0; drum < 3; drum++) {
        let drumX = [480, 520, 440][drum];
        let drumY = [300, 250, 250][drum];
        
        for(let i = 0; i < 8; i++) {
            let particleSize = 1 + sin(t * 6 + drum + i) * 0.4;
            fill(random(160, 240), random(120, 200), random(80, 160), random(60, 120));
            stroke(random(120, 180), random(80, 140), random(60, 120));
            strokeWeight(2);
            let angle = (i / 8) * TWO_PI + t;
            let x = drumX + cos(angle) * (30 + i * 4);
            let y = drumY + sin(angle) * (30 + i * 4);
            push();
            translate(x, y);
            scale(particleSize);
            rect(0, 0, random(8, 16), random(8, 16));
            pop();
        }
    }

    push();
    translate(460, 200);
    rotate(t * 2);
    fill(220, 200, 120, 200);
    stroke(180, 160, 80);
    strokeWeight(2);
    ellipse(0, 0, 45, 45);
    pop();
    
    push();
    translate(520, 200);
    rotate(-t * 2.5);
    fill(220, 200, 120, 200);
    stroke(180, 160, 80);
    strokeWeight(2);
    ellipse(0, 0, 40, 40);
    pop();
    

    for(let cymbal = 0; cymbal < 2; cymbal++) {
        let cymbalX = [460, 520][cymbal];
        let cymbalY = 200;
        
        for(let i = 0; i < 12; i++) {
            let angle = (i / 12) * TWO_PI + t * 3;
            let distance = 25 + sin(t * 5 + i) * 10;
            fill(random(220, 255), random(200, 255), random(120, 200), random(80, 150));
            noStroke();
            let x = cymbalX + cos(angle) * distance;
            let y = cymbalY + sin(angle) * distance;
            ellipse(x, y, random(4, 10), random(4, 10));
        }
    }
    

    for(let i = 0; i < 6; i++) {
        let noteX = 440 + i * 25 + (t * 50) % 200;
        let noteY = 80 + sin(i * 0.5 + t) * 15;
        fill(random(220, 255), random(180, 240), random(60, 140), 80 - i * 10);
        noStroke();
        ellipse(noteX % 600, noteY, 30 - i * 3, 25 - i * 2);
    }

    fill(220, 180, 60);
    stroke(180, 140, 40);
    strokeWeight(4);
    ellipse(350, 80, 100, 30);
    
    fill(200, 160, 50);
    ellipse(300, 80, 20, 12);
    
    fill(240, 200, 80);
    ellipse(400, 80, 50, 40);
    

    fill(180, 150, 40);
    noStroke();
    ellipse(335, 70, 10, 18);
    ellipse(345, 70, 10, 18);
    ellipse(355, 70, 10, 18);
    

    for(let valve = 0; valve < 3; valve++) {
        let valveX = 335 + valve * 10;
        for(let i = 0; i < 4; i++) {
            let particleY = 60 - i * 8 - (t * 30 + valve * 10) % 100;
            if(particleY > 0) {
                fill(random(200, 255), random(160, 220), random(40, 120), random(70, 130));
                stroke(random(160, 220), random(120, 180), random(20, 100));
                strokeWeight(1);
                triangle(valveX, particleY, valveX + random(8, 15), particleY - 5, valveX - random(4, 10), particleY - 8);
            }
        }
    }
    
    // 색소폰 - 흔들리는 효과
    push();
    translate(565, 300);
    rotate(sin(t * 2) * 0.1);
    stroke(220, 180, 60);
    strokeWeight(6);
    noFill();
    arc(-15, 20, 80, 140, PI, TWO_PI);
    arc(15, -20, 50, 100, PI/2, PI);
    pop();
    

    for(let i = 0; i < 10; i++) {
        let angle = PI + (i / 10) * PI + t * 0.5;
        let x = 550 + cos(angle) * (40 + sin(t * 3 + i) * 10);
        let y = 320 + sin(angle) * (70 + cos(t * 3 + i) * 10);
        
        fill(random(200, 255), random(160, 220), random(60, 140), random(60, 120));
        noStroke();
        ellipse(x, y, random(6, 14), random(6, 14));
        
        stroke(random(180, 240), random(140, 200), random(40, 120), 100);
        strokeWeight(2);
        line(x, y, x + random(-15, 15), y + random(-15, 15));
    }
    

    fill(240, 200, 80);
    stroke(200, 160, 50);
    strokeWeight(3);
    ellipse(590, 240, 35 + sin(t * 4) * 3, 30 + cos(t * 4) * 3);
    

    for(let i = 0; i < 8; i++) {
        let keyX = 540 + cos(i * 0.6) * 15;
        let keyY = 280 + i * 12;
        
        let keyPress = (floor(t * 6) % 8 === i) ? 3 : 0;
        fill(200, 160, 50);
        noStroke();
        ellipse(keyX + keyPress, keyY, 8, 8);
        
        for(let j = 0; j < 3; j++) {
            fill(random(180, 240), random(140, 200), random(50, 130), random(80, 140));
            stroke(random(140, 200), random(100, 160), random(30, 100));
            strokeWeight(1);
            rect(keyX + random(-10, 10), keyY + random(-10, 10), random(4, 10), random(4, 10));
        }
    }
    

    let micY = 80 + sin(t * 2) * 10;
    

    for(let i = 0; i < 8; i++) {
        let angle = (i / 8) * TWO_PI;
        let distance = 60 + sin(t * 4 + i) * 15;
        let startX = 80 + cos(angle) * distance;
        let startY = micY + sin(angle) * distance;
        
        stroke(random(200, 255), random(180, 240), random(160, 220), 120);
        strokeWeight(3);
        line(startX, startY, 80, micY);
        
        fill(random(220, 255), random(200, 255), random(180, 240), 100);
        noStroke();
        ellipse(startX, startY, 6, 6);
    }
    

    fill(200, 200, 220);
    stroke(150, 150, 170);
    strokeWeight(3);
    ellipse(80, micY, 40, 50);
    
    stroke(100, 100, 120);
    strokeWeight(1);
    for(let i = 0; i < 8; i++) {
        line(65 + i * 3, micY - 10, 65 + i * 3, micY + 10);
    }
    
    stroke(120, 120, 140);
    strokeWeight(4);
    line(80, micY + 25, 80, 180);
    
    stroke(255, 200, 120, 100 + sin(t * 3) * 50);
    strokeWeight(12);
    noFill();
    arc(300, 200, 400, 300, 0, PI);
    
    stroke(120, 200, 255, 90 + cos(t * 4) * 40);
    strokeWeight(10);
    arc(300, 200, 350, 250, PI, TWO_PI);
    
    stroke(255, 120, 200, 80 + sin(t * 5) * 30);
    strokeWeight(8);
    arc(200, 150, 250, 200, PI/4, 5*PI/4);
    arc(400, 250, 200, 150, -PI/4, 3*PI/4);
}

function keyPressed() {
    if (key === 's' || key === 'S') {
        saveGif('music_animation', 10);
    }
}
