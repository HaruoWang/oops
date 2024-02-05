// 定義包含27個不同網址的巢狀物件結構
const urlMappings = {
    A: {
      A: {
        A: '/img/1.png',
        B: '/img/1.png',
        C: '/img/1.png',
      },
      B: {
        A: '/img/2.png',
        B: '/img/2.png',
        C: '/img/2.png',
      },
      C: {
        A: '/img/3.png',
        B: '/img/3.png',
        C: '/img/3.png',
      },
    },
    B: {
      A: {
        A: '/img/4.png',
        B: '/img/4.png',
        C: '/img/4.png',
      },
      B: {
        A: '/img/5.png',
        B: '/img/5.png',
        C: '/img/5.png',
      },
      C: {
        A: '/img/6.png',
        B: '/img/6.png',
        C: '/img/6.png',
      },       
    },
    C: {
      A: {
        A: '/img/7.png',
        B: '/img/7.png',
        C: '/img/7.png',
      },
      B: {
        A: '/img/8.png',
        B: '/img/8.png',
        C: '/img/8.png',
      },
      C: {
        A: '/img/9.png',
        B: '/img/9.png',
        C: '/img/9.png',
      },               
    },
};
  
// 取得三道題目的選擇框元素
const q1 = document.getElementById('q1');
const q2 = document.getElementById('q2');
const q3 = document.getElementById('q3');
  
// 取得顯示結果的區域元素
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const result = document.getElementById('result');
const download = document.getElementById('download');
  
// 監聽確認按鈕的點擊事件
n1.addEventListener('click', next1);
n2.addEventListener('click', next2);
n3.addEventListener('click', next3);
n4.addEventListener('click', next4);
download.addEventListener('click', downloadImage);

function next1() {
  // 切換頁面顯示
  document.getElementById('p1').style.display = 'none';
  document.getElementById('p2').style.display = 'block';
}

function next2() {
  // 切換頁面顯示
  document.getElementById('p2').style.display = 'none';
  document.getElementById('p3').style.display = 'block';
}

function next3() {
  // 切換頁面顯示
  document.getElementById('p3').style.display = 'none';
  document.getElementById('p4').style.display = 'block';
}

// 顯示結果的函數
function next4() {
  // 取得每道題目的選擇值
  const a1 = q1.value;
  const a2 = q2.value;
  const a3 = q3.value;

  // 根據選擇值查找對應的圖片 URL
  const imageUrl = urlMappings[a1][a2][a3];

  // 顯示結果的文字
  const resultText = `您的選擇對應的圖片：<br><img src="${imageUrl}" alt="result image">`;

  // 清空結果區域
  result.innerHTML = '';

  // 將結果文字添加到結果區域
  result.innerHTML += resultText;

  // 切換頁面顯示
  document.getElementById('p4').style.display = 'none';
  document.getElementById('p5').style.display = 'block';
}

// 下載圖片的函數
function downloadImage() {
    // 取得每道題目的選擇值
    const a1 = q1.value;
    const a2 = q2.value;
    const a3 = q3.value;
  
    // 根據選擇值查找對應的圖片 URL
    const imageUrl = urlMappings[a1][a2][a3];
  
    // 動態生成 <a> 元素，模擬點擊下載
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = 'image'; // 下載時的檔名，這裡設定為 'image'
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }