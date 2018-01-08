function iterativeLog(anyArray) {
    anyArray.forEach((element, index, array) => {
        console.log(`${index}: ${element}`);
    })
}