function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const flag = document.getElementById("check").checked;
  const text = document.getElementById("text");
  if (flag) {
    text.style.backgroundColor = "red";
  }
  else {
    text.style.backgroundColor = "white"
  }
}
