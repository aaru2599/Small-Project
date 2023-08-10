let containerArr = []
let containerLength = 0;
let uInput = document.getElementById("box-id")
function undoClick() {
    let userArray = uInput.value.split(" ")


    const undo = userArray.pop()
    uInput.value = userArray.join(" ")
    containerArr.push(undo)
    console.log(containerArr);
}


function redoClick() {
    let userArray = uInput.value.split(" ")
    containerLength = containerArr.length;
    if (containerLength > 0) {

        userArray.push(containerArr[containerLength - 1])
        uInput.value = userArray.join(" ")
        containerArr.pop()
    }
}
function againInput() {
    containerArr = []
}