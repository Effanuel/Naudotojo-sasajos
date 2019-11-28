class Table {
  constructor(name = "Table name", rows, cols, bc_color, size) {
    this.name = name;
    this.rows = parseInt(rows);
    this.cols = parseInt(cols);
    this.bc_color = bc_color;
    this.size = size;
  }

  setParameters(name, rows, cols, size = 10) {
    this.name = name;
    this.rows = parseInt(rows);
    this.cols = parseInt(cols);
    this.size = size;
  }

  drawTable() {
    let table_div = document.getElementById("dvTable");
    // Clear contents
    table_div.innerHTML = "";
    // Add table name
    const table_name = document.createElement("div");
    table_name.setAttribute("class", "tableName");
    table_name.innerText = this.name;
    table_div.appendChild(table_name);

    // create a <table> element
    let table = document.createElement("table");

    // creating rows
    for (let r = 0; r < this.rows + 1; r++) {
      let row = document.createElement("tr");

      // create cells in row
      let cellText;
      for (let c = 0; c < this.cols + 1; c++) {
        let col = document.createElement("input");
        col.setAttribute("class", "cell");

        // FIRST COLUMN SETTINGS
        if (c == 0) {
          col.style.backgroundColor = "lightgrey";
          col.value = r;
          if (r == 0) col.value = "Nr.";
        } else {
          col.style.textAlign = "start";
        }
        //======================

        // FIRST ROW SETTINGS
        if (r == 0) {
          col.style.backgroundColor = "darkgrey";
        }
        //======================
        col.style.backgroundColor = this.bc_color;
        row.appendChild(col);
      }
      table.appendChild(row);
    }

    table_div.appendChild(table);
  }
}

let table;
window.onload = function() {
  console.log(sessionStorage);
  //Render table on page load
  const { table_name, rows, cols, bc_color } = sessionStorage;
  table = new Table(table_name, rows, cols, bc_color);
  table.drawTable();
};
