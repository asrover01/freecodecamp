const themes = [
  {
    name: "day",
    message: "Theme set to daytime mode."
  },
  {
    name: "night",
    message: "Theme set to nightTime mode."
  }
];

const themeSwitcher = document.querySelector("#theme-switcher-button");
const dropdownMenu = document.querySelector("#theme-dropdown");
const switchBtn = document.querySelectorAll(`[role="menuitem"]`);
const liveRegion = document.querySelector('[aria-live="polite"]');

// Toggle Dropdown Menu Visibility and Attributes
themeSwitcher.addEventListener("click", () => {
  if (dropdownMenu.hidden === false) {
    dropdownMenu.hidden = true;
    themeSwitcher.setAttribute("aria-expanded", "false");
    return;
  }
  dropdownMenu.hidden = false;
  themeSwitcher.setAttribute("aria-expanded", "true");
});

// Handle Theme Switching
switchBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    // 1. Add the "theme-<name>" class to the body element (e.g., "theme-day")
    document.body.className = btn.id;
    
    // 2. Extract the clean theme name from the button text content (since it's completely lowercase)
    const themeName = btn.textContent.trim();
    
    // 3. Find the matching theme configuration object
    const currentTheme = themes.find(theme => theme.name === themeName);
    
    // 4. Update the live region with the theme message
    if (currentTheme) {
      liveRegion.textContent = currentTheme.message;
    }
  });
});