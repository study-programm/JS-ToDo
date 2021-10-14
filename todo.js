
//追加ボタンを押したときの中身を作成
const onClickedAdd = () => {

    //テキストの値を取得して、次、文字を打つ際に邪魔にならないように値を初期化する
    const inputText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = "";

    //div作成してクラスの名前を付与する
    const div = document.createElement("div");
    div.className = "list-row";

    //li作成してクラスを作成する 文字を取得してliに入れる
    const li = document.createElement("li");
    li.className = "incomplete-list"

    //p作成してクラス名を付与する
    const p = document.createElement("p");
    p.className = "list-text";
    //inputで書いた文字をpタグの中身として取得する
    p.innerText = inputText;

    //未完了のulを作成してクラスの名前を付与する
    const ulIncomplete = document.getElementById("incomplete");

    //------------------完了ボタン押したときのイベント-------------------------------

    //button作成してクラスの名前を付与する　+　クリックイベントの用意
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.className = "complete-button";

    //完了ボタン押したときのイベント
    completeButton.addEventListener('click', () => {

        //ボタンに所属しているliを取得する
        const completeTarget = completeButton.closest("li");

        //未完了のulを取得してそこから完了ボタンのliを消す
        document.getElementById("incomplete").removeChild(completeTarget);

        //div以下を初期化する
        div.textContent = null;

        const incompleteUl = document.getElementById("complete");

        //完了領域にコードを入れる。
        incompleteUl.appendChild(li);
        li.appendChild(div);
        div.appendChild(p);
        div.appendChild(returnButton);
    });


    //------------------戻すボタン押したときのイベント-------------------------------

    //戻すボタンを生成
    const returnButton = document.createElement("button");
    returnButton.className = "return-button";
    returnButton.innerText = "戻す";

    returnButton.addEventListener('click', () => {

        //戻るボタンのli要素丸ごとを取得
        const returnTarget = returnButton.closest("li");
        //完了ul内から戻る領域のliを削除
        document.getElementById('complete').removeChild(returnTarget);

        //組み立てる必要があるので、div以下をまず初期化させる
        div.textContent = null;

        //未完了のulを持ってくる
        const ul = document.getElementById('incomplete');

        //組み立てる必要があるので、div以下をまず初期化させる
        div.textContent = null;

        //ボタンの生成　(完了と削除)

        //ボタンの初期化
        console.log(p);
        ul.appendChild(li);
        div.appendChild(p);
        div.appendChild(completeButton);
        div.appendChild(deleteButton);

        //ボタンの初期化

        console.log(completeButton);

        ul.appendChild(li);
    });

    //------------------削除ボタン押したときのイベント-------------------------------
    //button作成してクラスの名前を付与する　+　クリックイベントの用意
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.className = "incomplete-button";

    //削除ボタン押したときのイベント
    deleteButton.addEventListener('click', () => {

        //消す対象のdivの親要素であるli要素丸ごとを取得する
        const deleteTarget = deleteButton.closest("li");
        //未完了のulからli丸ごと消す。
        document.getElementById("incomplete").removeChild(deleteTarget);
    });

    //未完了でのDOM作成
    //ulタグの子要素に各要素を設定、入れ子にしない場合は、同じ要素に対して上から重ねる
    ulIncomplete.appendChild(li);
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
};

//追加ボタンを押すとonClickedAdd関数を発動させる。
document.getElementById('input-button').addEventListener('click', () => {

    //空文字の時にエラーが出るのでアラートを出す。
    if (document.getElementById('add-text').value === "") {
        alert("何も文字が入っていません");
        //追加に行かないように処理を停止させる
        return false;
    }

    onClickedAdd();
});
