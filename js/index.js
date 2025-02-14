const buttonsOpen = document.querySelectorAll('.modalOpen'); // 全てのモーダル開ボタンを取得
const modals = document.querySelectorAll('.modal'); // 全てのモーダルを取得
const body = document.querySelector('body');

// ボタンがクリックされた時
buttonsOpen.forEach((button, index) => {
    
    button.addEventListener('click', function (event) {
        event.stopPropagation(); // クリックイベントが親に伝播するのを防ぐ
        // console.dir(event.target.dataset.modal);
        modals[event.target.dataset.modal].style.display = 'block'; // 対応するモーダルを表示
        body.classList.add('open');
    });
});

// 各モーダルに閉じる処理を設定
modals.forEach((modal) => {
    const buttonClose = modal.querySelector('.close'); // モーダル内の閉じるボタンを取得
    const modalContent = modal.querySelector('.modal-content'); // モーダル内のコンテンツを取得

    // バツ印がクリックされた時
    buttonClose.addEventListener('click', function (event) {
        event.stopPropagation(); // クリックイベントが親に伝播するのを防ぐ
        modal.style.display = 'none'; // モーダルを非表示
        body.classList.remove('open');
    });

    // モーダルコンテンツ以外がクリックされた時
    modal.addEventListener('click', function () {
        modal.style.display = 'none';
        body.classList.remove('open');
    });

    // モーダル内のコンテンツがクリックされた場合、閉じないようにする
    modalContent.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});


 //クリップボタンの切り替え
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".clip-btn");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.classList.toggle("clicked");
        });
    });
});

// モーダルを開いた時にスクロールさせない
document.addEventListener("DOMContentLoaded", function() {
    var openButton = document.querySelector(".modalOpen");
    var closeButton = document.querySelector(".close");
    var modal = document.querySelector(".modal");

    openButton.addEventListener("click", function() {
        document.body.style.overflowY = "hidden";
        modal.style.display = "flex";
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.style.overflowY = "auto";
    });

    modal.addEventListener('click', function () {
        modal.style.display = "none";
        document.body.style.overflowY = "auto";
    });

});