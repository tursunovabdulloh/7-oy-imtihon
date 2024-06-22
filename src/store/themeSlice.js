const handletheme = (value) => {
  localStorage.setItem("theme", value);
  const themee = localStorage.getItem("theme");
  document.getElementById("root").setAttribute("data-theme", themee);
};
