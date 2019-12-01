const generateTable = () => {
  //CHECK IF COLUMNS ARE MORE THAN 5
  const e1 = document.getElementById("select");
  const text1 = e1.options[e1.selectedIndex].text;

  const e2 = document.getElementById("selectFont");
  const text2 = e2.options[e2.selectedIndex].text;

  const e3 = document.getElementById("selectNumerating");
  const text3 = e3.options[e3.selectedIndex].text;

  const table_name = document.getElementById("tname").value || "Table name",
    rows = document.getElementById("frows").value || 5,
    cols = document.getElementById("fcols").value || 5,
    bc_color = text1,
    font = text2,
    size = document.getElementById("fsize").value || 80,
    numerating = text3;

  sessionStorage.setItem("table_name", table_name);
  sessionStorage.setItem("rows", rows);
  sessionStorage.setItem("cols", cols);
  sessionStorage.setItem("size", size);
  sessionStorage.setItem("numerating", numerating);
  sessionStorage.setItem("bc_color", bc_color);
  sessionStorage.setItem("font", font);
};
