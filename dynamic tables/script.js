class Table {
  constructor(name = "Table name", rows, cols, size) {
    this.name = name;
    this.rows = parseInt(rows);
    this.cols = parseInt(cols);
    this.size = size;
    this.table_div;
  }

  setParameters(name, rows, cols, size = 10) {
    this.name = name;
    this.rows = parseInt(rows);
    this.cols = parseInt(cols);
    this.size = size;
  }

  drawTable() {
    var table_div = document.getElementById("dvTable");
    // Clear contents
    table_div.innerHTML = "";
    // Add table name
    const table_name = document.createElement("div");
    table_name.setAttribute("class", "tableName");
    table_name.innerText = this.name;
    table_div.appendChild(table_name);

    // create a <table> element
    var table = document.createElement("table");

    // creating rows
    for (var r = 0; r < this.rows + 1; r++) {
      var row = document.createElement("tr");

      // create cells in row
      var cellText;
      for (var c = 0; c < this.cols + 1; c++) {
        var col = document.createElement("input");
        col.setAttribute("class", "cell");

        // FIRST COLUMN SETTINGS
        if (c == 0) {
          col.style.backgroundColor = "lightgrey";
          col.value = r;
          if (r == 0) col.value = "Nr.";
        }
        //======================

        // FIRST ROW SETTINGS
        if (r == 0) {
          col.style.backgroundColor = "darkgrey";
        }
        //======================
        row.appendChild(col);
      }
      table.appendChild(row); // add the row to the end of the table body
    }

    table_div.appendChild(table);
    this.table_div = table_div;
  }
}
const table = new Table();

const generateTable = () => {
  console.log("LOG");
  const table_name = document.getElementById("tname").value;
  const rows = document.getElementById("frows").value;
  const cols = document.getElementById("fcols").value;

  // GenerateTable();
  table.setParameters(table_name, rows, cols);
  table.drawTable();
};

const createTable = () => {
  //check if it is generated
};
