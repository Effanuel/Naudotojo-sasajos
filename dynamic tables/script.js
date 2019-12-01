const generateTable = () => {
  //CHECK IF COLUMNS ARE MORE THAN 5
  const e1 = document.getElementById("select");
  // const value = e1.options[e1.selectedIndex].value;
  const text1 = e1.options[e1.selectedIndex].text;

  const e2 = document.getElementById("selectFont");
  // const value = e2.options[e2.selectedIndex].value;
  const text2 = e2.options[e2.selectedIndex].text;

  const table_name = document.getElementById("tname").value,
    rows = document.getElementById("frows").value,
    cols = document.getElementById("fcols").value,
    bc_color = text1,
    font = text2;

  sessionStorage.setItem("table_name", table_name);
  sessionStorage.setItem("rows", rows);
  sessionStorage.setItem("cols", cols);
  sessionStorage.setItem("bc_color", bc_color);
  sessionStorage.setItem("font", font);
};
