function calcAvgGrade() {
    const arr = [
        ["Martin", 76],
        ["Thomas", 85],
        ["Klaus", 65],
        ["Maria", 93],
        ["David", 81]
    ];
    const gradesArr = [];
    const tableEl = document.getElementById("table");
    for (val of arr) {
        const newTr = document.createElement("tr");

        const grade = assignGrade(val[1]);

        newTr.appendChild(createTd(val[0]));
        newTr.appendChild(createTd(grade));
        gradesArr.push(val[1]);
        tableEl.appendChild(newTr);
    }

    const avg = gradesArr.reduce((prev, curr) => {
        return prev + curr;
    }) / gradesArr.length;

    const newTr = document.createElement("tr");
    newTr.appendChild(createTd('Avg.'));
    newTr.appendChild(createTd(avg));
    tableEl.appendChild(newTr);
}

function assignGrade(grade) {
    let prop;

    if (grade < 60) {
        prop = 'F';
    } else if (grade < 70) {
        prop = 'D';
    } else if (grade < 80) {
        prop = 'C';
    } else if (grade < 90) {
        prop = 'B';
    } else {
        prop = 'A'
    }
    return prop;
}

function createTd(text) {
    const newTd = document.createElement("td");
    newTd.innerHTML = text;
    return newTd;
}

calcAvgGrade();