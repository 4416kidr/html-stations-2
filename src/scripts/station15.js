function displayList() {
    const fruits = document.getElementById('fruits');
    const childerenList = fruits.children;
    const ul = document.createElement('ul');
    Array.prototype.forEach.call(childerenList, e => {
        var eli = document.createElement('li');
        eli.textContent = e.textContent;
        ul.appendChild(eli);
    });
    fruits.replaceChildren()
    fruits.insertAdjacentElement('beforeend', ul);



    // console.log(childerenList);
    
    // fruits.setAttribute('id', 'foods');
    // ul.innerText = 'リストを表示するよ';


}

