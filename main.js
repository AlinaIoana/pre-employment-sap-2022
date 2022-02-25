function onSlicePress() {
    var startIndex = document.getElementById("sliceStartIndex").value,
     endIndex = document.getElementById("sliceEndIndex").value,
     myWeirdArray = returnWeirdArray();

    var sliceResult;
    if(startIndex === "" && endIndex === "") {
        sliceResult = myWeirdArray.slice();
    } else if(startIndex === "") {
        sliceResult = myWeirdArray.slice(0, parseInt(endIndex));
    } else if (endIndex === "") {
        sliceResult = myWeirdArray.slice(startIndex);
    } else {
       sliceResult = myWeirdArray.slice(parseInt(startIndex), parseInt(endIndex));
    }

    var stringifiedSliceResult = sliceResult.map(element => JSON.stringify(element));

    document.getElementById("sliceResult").innerText = "[  " + stringifiedSliceResult.join(",   ") + "  ]";
    
    // document.getElementById("sliceResult").innerText = JSON.stringify(sliceResult); 
}

function onMapPress() {
    var myWeirdArray = returnWeirdArray(),
     mappedArray = myWeirdArray[3].map(a => Math.round(a));
    document.getElementById("mappedResult").innerText = JSON.stringify(mappedArray);

}

document.getElementById("concatButton").addEventListener("click", function() {
    var myWeirdArray = returnWeirdArray(),
     concatResult = myWeirdArray[0].concat(myWeirdArray[1]);

    var newElement = document.createElement("pre");
    newElement.innerHTML = JSON.stringify(concatResult);

    document.getElementById("concatButton").insertAdjacentElement("afterend", newElement);

    setTimeout(function() {
        newElement.remove();
    }, 8000);
});

function onFilterPress() {
    var myWeirdArray = returnWeirdArray();

    var filteredArray = myWeirdArray[3].filter(element => element > 0);

    document.getElementById("filteredResult").innerText = JSON.stringify(filteredArray);
}

function onSortPress() {
    var myWeirdArray = returnWeirdArray();

    myWeirdArray[3].sort();

    document.getElementById("sortedResult").innerText = JSON.stringify(myWeirdArray);
}

function onCorrectNumberSort() {
    var myWeirdArray = returnWeirdArray();

    myWeirdArray[3].sort((a, b) => a - b);

    document.getElementById("sortedResultCorrect").innerText = JSON.stringify(myWeirdArray);

}

function onFilteredSortPress() {
    var myWeirdArray = returnWeirdArray();

    var filteredArray = myWeirdArray[3].filter(element => element > 0);
    filteredArray.sort((a, b) => a - b);

    document.getElementById("filteredSortedResult").innerText = filteredArray + "   " + JSON.stringify(myWeirdArray);
}

function onFindPress() {
    var myWeirdArray = returnWeirdArray(),
        foundElement = myWeirdArray[3].find(elem => elem > 10),
        foundElementIndex = myWeirdArray[3].findIndex(elem => elem > 10),
        foundIndexOf = myWeirdArray[3].indexOf(foundElement),
        someRes = myWeirdArray[3].some(elem => elem > 10),
        everyRes = myWeirdArray[3].every(elem => elem > 10),
        includesRes = myWeirdArray[3].includes("23", 3);
    document.getElementById("findResult").innerText = JSON.stringify(foundElement);
    document.getElementById("findIndexResult").innerText = foundElementIndex;
    document.getElementById("indexOfResult").innerText = foundIndexOf;
    document.getElementById("someResult").innerText = someRes;
    document.getElementById("everyResult").innerText = everyRes;
    document.getElementById("includesResult").innerText = includesRes;
}

function onFillPress() {
    var myWeirdArray = returnWeirdArray();
    myWeirdArray.fill("Filler", 7, 8);
    document.getElementById("fillResult").innerText = JSON.stringify(myWeirdArray);
}

function returnWeirdArray() {
    return [
        ["I", "am", "here"],
        ["Join", "me", "now"],
        {index: 1, value: "example"},
        [1, 23, 14.3, -8, 89.78, 170, -3, 10, 14],
        "I'm here too!",
        true,
        0,
        ,
        null
    ];
}

function returnMyObject() {
    return {
        rows: [{
            material: "Steel",
            materialId: "123sm23abc",
            stock: 500,
            deliveryTime: "01/12/2022T01:02:33"
        }, {
            material: "Copper",
            materialId: "asw1293m40",
            stock: 1000,
            deliveryTime: "05/12/2021T09:02:39"
        }, {
            material: "Iron",
            materialId: "b234msl981",
            stock: 100,
            deliveryTime: "06/02/2022T10:02:33"
        }]
    };
}

