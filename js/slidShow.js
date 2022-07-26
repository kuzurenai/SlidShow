let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.keio.ac.jp/ja/assets/images/about/president/history/01_hamano.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/02_koizumi.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/03_kohata.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/04_kamata.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/05_fukuzawa.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/06_hayashi.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/07_koizumi_shinzo.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/08_takahashi.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/09_ushioda.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/10_okui.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/11_takamura.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/12_nagasawa.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/13_sato.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/14_kuno.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/15_ishikawa.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/16_torii.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/17_anzai.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/18_seike.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/19_haseyama.jpg",
"https://www.keio.ac.jp/ja/assets/images/about/president/history/20_itoh.jpg",
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
