

// (A) GET HTML TABLE
let table = document.getElementById("demoTable");

// (B) AJAX FETCH CSV FILE
fetch(klienci_serwisu_proj.csv)
// fetch(/Users/marcinsobianowski/Documents/Documents_Marcin/korki/strona_korki/strona_serwisApple/empSerwis/klienci_serwisu_proj.csv)
.then(res => res.text())
.then(csv => {
  // (B1) REMOVE OLD TABLE ROWS
  table.innerHTML = "";

  // (B2) GENERATE TABLE
  let rows = csv.split("\n");
  for (let row of rows) {
    let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);
    if (cols!=null) {
      let tr = table.insertRow();
      for (let col of cols) {
        let td = tr.insertCell();
        td.innerHTML = col.replace(/(^"|"$)/g, "");
      }
    }
  }
});