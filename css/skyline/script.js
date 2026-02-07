const btn = document.getElementById("toggleTheme");
let darkMode = false;

btn.addEventListener("click", () => {
  const root = document.documentElement;

  if (!darkMode) {
    // Apply dark theme
    root.style.setProperty("--building-color1", "#000");
    root.style.setProperty("--building-color2", "#000");
    root.style.setProperty("--building-color3", "#000");
    root.style.setProperty("--building-color4", "#000");

    root.style.setProperty("--window-color1", "#ccc");
    root.style.setProperty("--window-color2", "#ccc");
    root.style.setProperty("--window-color3", "#ccc");
    root.style.setProperty("--window-color4", "#ccc");

    document.querySelector(".sky").style.background =
      "radial-gradient(closest-corner circle at 15% 15%, #ccc, #ccc 20%, #445 21%, #223 100%)";

  } else {
    // Restore original theme
    root.style.setProperty("--building-color1", "#aa80ff");
    root.style.setProperty("--building-color2", "#66cc99");
    root.style.setProperty("--building-color3", "#cc6699");
    root.style.setProperty("--building-color4", "#538cc6");

    root.style.setProperty("--window-color1", "#bb99ff");
    root.style.setProperty("--window-color2", "#8cd9b3");
    root.style.setProperty("--window-color3", "#d98cb3");
    root.style.setProperty("--window-color4", "#8cb3d9");

    document.querySelector(".sky").style.background =
      "radial-gradient(closest-corner circle at 15% 15%, #ffcf33, #ffcf33 20%, #ffff66 21%, #bbeeff 100%)";
  }

  darkMode = !darkMode;
});
