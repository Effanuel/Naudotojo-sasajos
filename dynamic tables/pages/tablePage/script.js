class Table {
  constructor(name, rows, cols, bc_color, font, size, numerating) {
    this.name = name;
    this.rows = parseInt(rows);
    this.cols = parseInt(cols);
    this.bc_color = bc_color;
    this.fontFamily = font;
    this.size = size;
    this.numerating = numerating == "Yes" ? true : false;
  }

  setParameters(name, rows, cols, font) {
    this.name = name;
    this.rows = parseInt(rows);
    this.cols = parseInt(cols);
    this.fontFamily = font;
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

    //Hanlde first column
    this.numerating ? this.cols++ : null;

    // creating rows
    for (let r = 0; r < this.rows; r++) {
      let row = document.createElement("tr");

      // create cells in row
      let cellText;
      for (let c = 0; c < this.cols; c++) {
        let col = document.createElement("input");
        col.setAttribute("class", "cell");

        // FIRST COLUMN SETTINGS

        if (c == 0 && this.numerating) {
          col.value = r;
          if (r == 0) col.value = "Nr.";
        } else {
          col.style.textAlign = "start";
        }
        //======================

        // FIRST ROW SETTINGS

        //======================
        col.style.backgroundColor = this.bc_color;
        col.style.fontFamily = this.fontFamily;
        const width_vw = (this.size % 101) / this.cols;
        col.style.width = `calc(${width_vw}vw - ${this.cols}px)`;
        // col.style.height = `${width_vw / 3}vw`;

        if (r == 0) {
          const header_color = this.bc_color.replace(/light/, "");
          col.style.backgroundColor = header_color;
        }
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
  const {
    table_name,
    rows,
    cols,
    size,
    bc_color,
    font,
    numerating
  } = sessionStorage;
  table = new Table(table_name, rows, cols, bc_color, font, size, numerating);
  table.drawTable();
};
