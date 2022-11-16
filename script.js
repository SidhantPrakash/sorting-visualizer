const n=40;
const array=[];

init();

function init() {
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
    showBars();
}

function bubbleSort(array) {
    const swaps=[];
    do {
        var swapped = false;
        for(let i=1; i<array.length; i++){
            if(array[i-1] > array[i]){
                swapped = true;
                swaps.push([i-1,i]);
                [array[i-1], array[i]] = [array[i], array[i-1]]; //destructuring assignment to swap the elements
            }
        }
    }while(swapped);
    return swaps;
}

function play() {
    const copy = [...array];
    const swaps = bubbleSort(copy);
    animate(swaps);
}

function animate(swaps) {
    if (swaps.length == 0) {
        showBars();
        return;
    }
    const [i, j] = swaps.shift();//destructuring assignment to get first pair of idx from swaps
    [array[i], array[j]] = [array[j], array[i]];
    showBars([i,j]);
    setTimeout(function () {
        animate(swaps);
    }, 200);
}

function showBars(indices) {
    container.innerHTML = "";
    for(let i=0; i<array.length; i++){
        const bar = document.createElement("div");
        bar.style.height=array[i]*100+"%";
        bar.classList.add("bar");

        if(indices && indices.includes(i)){
            bar.style.backgroundColor="red";
        }
        container.appendChild(bar);
    }
}