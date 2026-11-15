
//一桁の数字を二桁に変換する関数

function dig(num) {
    return (num < 10 ? '0' + num : num);

}
//現在の時刻を取得して表示する関数
function time() {
    const date= new Date();
    const h = dig(date.getHours());
    const m = dig(date.getMinutes());
    const s = dig(date.getSeconds());
    const clock = document.getElementById('clock');
    if (clock) {
       clock.textContent = `${h}:${m}:${s}`;
    }
}
//指定した時間間隔で指定した関数を繰り返し実行する関数
setInterval(time, 1000);

//ページ読み込み時にもすぐ表示
time();

