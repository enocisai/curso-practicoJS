const list1 = [
    
    1,
    2,
    2,
    1,
    1,
    1,
    6,
    4,
    7,
 
]


const list1Count = {};

list1.map(
    function(element) {
    if (list1Count[element]) {
        list1Count[element] += 1;
    } else {
        list1Count[element] = 1;
    }
    }
);

const list1array = Object.entries(list1Count).sort(
    function (elementA, elementB) {
        return elementA[1] -elementB[1] ;

    }
    
);

const moda = list1array[list1array.length - 1];
    
