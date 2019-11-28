const generateTable = () => {
  //CHECK IF COLUMNS ARE MORE THAN 5
  const e = document.getElementById("select");
  const value = e.options[e.selectedIndex].value;
  const text = e.options[e.selectedIndex].text;

  const table_name = document.getElementById("tname").value,
    rows = document.getElementById("frows").value,
    cols = document.getElementById("fcols").value,
    bc_color = text;

  sessionStorage.setItem("table_name", table_name);
  sessionStorage.setItem("rows", rows);
  sessionStorage.setItem("cols", cols);
  sessionStorage.setItem("bc_color", bc_color);
};
