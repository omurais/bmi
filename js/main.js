"use strict";

{
  // ■BMI
  // ■BMI計算
  function BMI(height, weight) {
    return weight / ((height / 100) * (height / 100));
  }

  // ■ページ初期値で入力エリアにフォーカス
  document.getElementById("height").focus();

  // ■計算ボタン取得
  const btn = document.getElementById("calc-btn");

  // ■計算ボタンクリックで判定
  btn.addEventListener("click", () => {
    const h = document.getElementById("height").value;
    const w = document.getElementById("weight").value;
    const fixedData = BMI(h, w).toFixed(2);

    const BmiData = document.getElementById("bmi-data");
    if(fixedData > 0){
      BmiData.textContent = `あなたのBMIは「${fixedData}%」です`;
    } else {
      BmiData.textContent = '';
    }

    const msg = document.getElementById("message");
    if (fixedData < 25 && fixedData > 20) {
      document.getElementById('result').textContent = '普通体重';
      document.getElementById('result').classList.add('normal');
      msg.textContent = "問題ありません";
    } else if (fixedData >= 25) {
      document.getElementById('result').textContent = '肥満';
      document.getElementById('result').classList.add('fat');
      msg.textContent = "減量を心がけてください";
    } else if(fixedData <= 20) {
      document.getElementById('result').textContent = '低体重';
      document.getElementById('result').classList.add('low');
      msg.textContent = "１日３食の食事を採りましょう";
    }
  });

  // ■リセットボタン
  const rst = document.getElementById("reset-btn");
  rst.addEventListener("click", () => {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
  });
}