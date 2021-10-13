//クリックしたときの中身を作成
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

    //------------------------------完了、削除ボタンの作成----------------------------------------

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
        console.log(div);

        console.log(completeButton);
        const ul = document.getElementById("complete");
        
        //完了領域にコードを入れる。
        ul.appendChild(li);
        li.appendChild(div);
        div.appendChild(p);
        div.appendChild(returnButton);
    });
    

    //戻すボタンを生成
    const returnButton = document.createElement("button");
    returnButton.className = "return-button";
    returnButton.innerText = "戻す";
    console.log(returnButton);

    //戻すボタン押したときのイベント
    returnButton.addEventListener('click', () => {

        //戻るボタンのli要素丸ごとを取得
        const returnTarget = returnButton.closest("li");
        //完了ul内から戻る領域のliを削除
        document.getElementById('complete').removeChild(returnTarget);
    });

    //button作成してクラスの名前を付与する　+　クリックイベントの用意
    const incompleteButton = document.createElement("button");
    incompleteButton.innerText = "削除";
    incompleteButton.className = "incomplete-button";

    //削除ボタン押したときのイベント
    incompleteButton.addEventListener('click', () => {

        //消す対象のdivの親要素であるli要素丸ごとを取得
        const deleteTarget = incompleteButton.closest("li");
        //未完了のulからli丸ごと消す。
        document.getElementById("incomplete").removeChild(deleteTarget);


    });

    //未完了でのDOM作成
    //ulタグの子要素に各要素を設定、入れ子にしない場合は、同じ要素に対して上から重ねる
    ulIncomplete.appendChild(li);
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(incompleteButton);
};

//追加ボタンを取得して押すとOnclickedAddの効果が出る。
document.getElementById('input-button').addEventListener('click', () => {
    onClickedAdd();
});