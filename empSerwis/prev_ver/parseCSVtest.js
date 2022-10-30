var file = document.getElementById('demoPick');
file.addEventListener('change', function() {
    var reader = new FileReader();
    var f = file.files[0];
    reader.onload = function(e) {
        var CSVARRAY = parseResult(e.target.result); //this is where the csv array will be
    };
    reader.readAsText(f);
});

function parseResult(result) {
    var resultArray = [];
    result.split("\n").forEach(function(row) {
        var rowArray = [];
        row.split(",").forEach(function(cell) {
            rowArray.push(cell);
        });
        resultArray.push(rowArray);
    });
    return resultArray;
}