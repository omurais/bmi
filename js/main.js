"use strict";

{
  // ■BMI
  // ■BMI計算
  function BMI(height, weight) {
    return weight / ((height / 100) * (height / 100));
  }

  // ■ページ初期
  const btn = document.getElementById("calc-btn");
  const rst = document.getElementById("reset-btn");
  const result = document.getElementById('result');
  const BmiData = document.getElementById("bmi-data");
  const msg = document.getElementById("message");
  const measure = document.getElementById('measure');

  // 入力エリアにフォーカス
  document.getElementById("height").focus();

  // ■計算ボタンクリックで判定
  btn.addEventListener("click", () => {
    const h = document.getElementById("height").value;
    const w = document.getElementById("weight").value;
    const fixedData = BMI(h, w).toFixed(2);

    if(fixedData > 0){
      btn.classList.add('un-clicked');
      BmiData.classList.remove('error');
      BmiData.textContent = `あなたのBMIは「${fixedData}%」です`;
    } else {
      BmiData.textContent = 'エラー：半角数字で入力してください';
      BmiData.classList.add('error');
    }

    if (fixedData < 25 && fixedData > 20) {
      result.textContent = '普通体重';
      result.classList.add('normal');
      msg.textContent = "問題ありません";
    } else if (fixedData >= 40) {
      result.textContent = '肥満';
      result.classList.add('fat');
      msg.textContent = "要減量。医師へ診断をお勧めします";
    } else if (fixedData >= 25) {
      result.textContent = '肥満';
      result.classList.add('fat');
      msg.textContent = "減量を心がけてください";
    } else if(fixedData <= 20) {
      result.textContent = '低体重';
      result.classList.add('low');
      msg.textContent = "標準体重まで増やしましょう";
    }

    if (fixedData < 25 && fixedData > 20) {
      measure.textContent = "通常通りの生活をしてください";
    } else if (fixedData >= 40) {
      measure.textContent = "高カロリーを控え間食を控えましょう。週２回適度な運動をおこない徐々に減量を心がけましょう";
    }else if (fixedData >= 25) {
      measure.textContent = "揚げ物と糖質を控え、洋食よりも和食を採り、週1回1時間の運動をしましょう";
    } else if(fixedData <= 20) {
      measure.textContent = "2,000kcal/日を目安に、1日3食主食をしっかり取りましょう";
    }
  });

  // ■リセットボタン
  rst.addEventListener("click", () => {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";

    btn.disabled = false;
    btn.classList.remove('un-clicked');
    result.classList.remove('low','normal','fat');
    result.textContent = '';
    BmiData.textContent = '計算後、診断結果が表示されます';
    BmiData.classList.remove('error');
    msg.textContent = '診断結果に関するコメントが表示されます';
    measure.textContent = '対策内容が表示されます';
  });
}