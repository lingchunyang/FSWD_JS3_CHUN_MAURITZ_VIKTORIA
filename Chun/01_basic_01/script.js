function highestNum(arr) {
    let exc1List = document.getElementById('exc1-list');
    const maxValStyle = 'bg-maxVal';

    let maxVal = 0;
    for (let val of arr) {
        //Create list elements
        const node = document.createElement("li");
        node.classList.add(`el-${val}`);
        const textnode = document.createTextNode(val);
        node.appendChild(textnode);
        exc1List.appendChild(node);

        if(maxVal < val) {
            maxVal = val;
        }
    }
    const highestArr = document.getElementsByClassName(`el-${maxVal}`);

    for (let val of highestArr) {
        val.classList.add(maxValStyle);
        console.log(val);
    }

    document.getElementById('content').innerHTML = `The Highest Value = ${maxVal}`;
}

highestNum([1, 7, -3, 9]);