const urlMappings = {
    b1a: {
      b2a: {
        b3a: '/img/1.png',
        b3b: '/img/2.png',
        b3c: '/img/3.png',
      },
      b2b: {
        b3a: '/img/4.png',
        b3b: '/img/5.png',
        b3c: '/img/6.png',
      },
      b2c: {
        b3a: '/img/7.png',
        b3b: '/img/8.png',
        b3c: '/img/9.png',
      },
    },
    b1b: {
      b2a: {
        b3a: '/img/10.png',
        b3b: '/img/11.png',
        b3c: '/img/12.png',
      },
      b2b: {
        b3a: '/img/13.png',
        b3b: '/img/14.png',
        b3c: '/img/15.png',
      },
      b2c: {
        b3a: '/img/16.png',
        b3b: '/img/17.png',
        b3c: '/img/18.png',
      },       
    },
    b1c: {
      b2a: {
        b3a: '/img/19.png',
        b3b: '/img/20.png',
        b3c: '/img/21.png',
      },
      b2b: {
        b3a: '/img/22.png',
        b3b: '/img/23.png',
        b3c: '/img/24.png',
      },
      b2c: {
        b3a: '/img/25.png',
        b3b: '/img/26.png',
        b3c: '/img/27.png',
      },               
    },
};

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b1a = document.getElementById('b1a');
const b1b = document.getElementById('b1b');
const b1c = document.getElementById('b1c');
const b2a = document.getElementById('b2a');
const b2b = document.getElementById('b2b');
const b2c = document.getElementById('b2c');
const b3a = document.getElementById('b3a');
const b3b = document.getElementById('b3b');
const b3c = document.getElementById('b3c');
const b1d = document.getElementById('b1d');
const b2d = document.getElementById('b2d');
const b3d = document.getElementById('b3d');
const b4 = document.getElementById('b4');
const result = document.getElementById('result');
const down = document.getElementById('down');

let a1;
let a2;
let a3;

b1.addEventListener('click', showNext1);
b2.addEventListener('click', showNext2);
b3.addEventListener('click', showNext3);

b1a.addEventListener('click', function() {
  b1a.classList.toggle('selected');
  const t = document.getElementById(b1b.id);
  const u = document.getElementById(b1a.id);

  b1a.disabled = true;
  b1b.disabled = true;
  b1c.disabled = true;
  
  if (u === t) {
    t.style.background = '#66FF66';
    a1 = u.id;
  } else {
    t.style.background = '#66FF66';
    u.style.background = '#FF6666';
    a1 = u.id;
  }
});

b1b.addEventListener('click', function() {
  b1b.classList.toggle('selected');
  const t = document.getElementById(b1b.id);
  const u = document.getElementById(b1b.id);

  b1a.disabled = true;
  b1b.disabled = true;
  b1c.disabled = true;
    
  if (u === t) {
    t.style.background = '#66FF66';
    a1 = u.id;
  } else {
    t.style.background = '#66FF66';
    u.style.background = '#FF6666';
    a1 = u.id;
  }
});

b1c.addEventListener('click', function() {
  b1c.classList.toggle('selected');
  const t = document.getElementById(b1b.id);
  const u = document.getElementById(b1c.id);

  b1a.disabled = true;
  b1b.disabled = true;
  b1c.disabled = true;
    
  if (u === t) {
    t.style.background = '#66FF66';
    a1 = u.id;
  } else {
    t.style.background = '#66FF66';
    u.style.background = '#FF6666';
    a1 = u.id;
  }
});

b2a.addEventListener('click', function() {
  b2a.classList.toggle('selected');
  const t = document.getElementById(b2c.id);
  const u = document.getElementById(b2a.id);

  b2a.disabled = true;
  b2b.disabled = true;
  b2c.disabled = true;
    
  if (u === t) {
    t.style.background = '#66FF66';
    a2 = u.id;
  } else {
    t.style.background = '#66FF66';
    u.style.background = '#FF6666';
    a2 = u.id;
  }
});

b2b.addEventListener('click', function() {
  b2b.classList.toggle('selected');
  const t = document.getElementById(b2c.id);
  const u = document.getElementById(b2b.id);

  b2a.disabled = true;
  b2b.disabled = true;
  b2c.disabled = true;
      
  if (u === t) {
    t.style.background = '#66FF66';
    a2 = u.id;
  } else {
    t.style.background = '#66FF66';
    u.style.background = '#FF6666';
    a2 = u.id;
  }
});

b2c.addEventListener('click', function() {
  b2c.classList.toggle('selected');
  const t = document.getElementById(b2c.id);
  const u = document.getElementById(b2c.id);

  b2a.disabled = true;
  b2b.disabled = true;
  b2c.disabled = true;
      
  if (u === t) {
    t.style.background = '#66FF66';
    a2 = u.id;
  } else {
    t.style.background = '#66FF66';
    u.style.background = '#FF6666';
    a2 = u.id;
  }
});

b3a.addEventListener('click', function() {
  b3a.classList.toggle('selected');
  const t = document.getElementById(b3a.id);
  const u = document.getElementById(b3a.id);

  b3a.disabled = true;
  b3b.disabled = true;
  b3c.disabled = true;
      
  if (u === t) {
    t.style.background = '#66FF66';
    a3 = u.id;
  } else {
    t.style.background = '#66FF66';
    u.style.background = '#FF6666';
    a3 = u.id;
  }
});

b3b.addEventListener('click', function() {
  b3b.classList.toggle('selected');
  const t = document.getElementById(b3a.id);
  const u = document.getElementById(b3b.id);

  b3a.disabled = true;
  b3b.disabled = true;
  b3c.disabled = true;
        
  if (u === t) {
    t.style.background = '#66FF66';
    a3 = u.id;
  } else {
    t.style.background = '#66FF66';
    u.style.background = '#FF6666';
    a3 = u.id;
  }
});

b3c.addEventListener('click', function() {
  b3c.classList.toggle('selected');
  const t = document.getElementById(b3a.id);
  const u = document.getElementById(b3c.id);

  b3a.disabled = true;
  b3b.disabled = true;
  b3c.disabled = true;
        
  if (u === t) {
    t.style.background = '#66FF66';
    a3 = u.id;
  } else {
    t.style.background = '#66FF66';
    u.style.background = '#FF6666';
    a3 = u.id;
  }
});

b1d.addEventListener('click', next1);
b2d.addEventListener('click', next2);
b3d.addEventListener('click', next3);
b4.addEventListener('click', next4);
down.addEventListener('click', download);

function showNext1() {
  document.getElementById('foot1').style.position = 'static';

  b1d.style.display = 'inline-block';
  window.scrollTo({
    top: 1000,
    behavior: "smooth"
  });

  setTimeout(function() {
    window.location.href = "#p2";
  }, 0);
}

function showNext2() {
  document.getElementById('foot2').style.position = 'static';

  b2d.style.display = 'inline-block';
  window.scrollTo({
    top: 1000,
    behavior: "smooth"
  });

  setTimeout(function() {
    window.location.href = "#p3";
  }, 0);
}

function showNext3() {
  document.getElementById('foot3').style.position = 'static';

  b3d.style.display = 'inline-block';
  window.scrollTo({
    top: 1000,
    behavior: "smooth"
  });

  setTimeout(function() {
    window.location.href = "#p4";
  }, 0);
}

function next1() {
  document.getElementById('p1').style.display = 'none';
  document.getElementById('p2').style.display = 'block';
}

function next2() {
  document.getElementById('p2').style.display = 'none';
  document.getElementById('p3').style.display = 'block';
}

function next3() {
  document.getElementById('p3').style.display = 'none';
  document.getElementById('p4').style.display = 'block';
}

function next4() {

  const imageUrl = urlMappings[a1][a2][a3];
  const resultText = `<img src="${imageUrl}" alt="result image">`;

  result.innerHTML = '';
  result.innerHTML += resultText;

  document.getElementById('p4').style.display = 'none';
  document.getElementById('p5').style.display = 'block';

  window.scrollTo({
    top: 1000,
    behavior: "smooth"
  });

  setTimeout(function() {
    window.location.href = "#p5";
  }, 0);
}

function download() {

    const imageUrl = urlMappings[a1][a2][a3];
  
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = `${imageUrl}`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }