export const setProgressBarFill = (imageBase64: string | ArrayBuffer | null) => {
  if (!imageBase64) return;
  const fillBar = document.body.querySelector(".x-progressBar-fillColor") as HTMLDivElement;
  if (!fillBar) return;
  fillBar.style.backgroundImage = `url("${imageBase64}")`;
  fillBar.style.backgroundRepeat = "reapeat";
  fillBar.style.backgroundPosition = "center";
  fillBar.style.backgroundSize = "contain";
  fillBar.style.width = "100%";
  fillBar.style.height = "16px";
}
export const unsetProgressBarFill = () => {
  const fillBar = document.body.querySelector(".x-progressBar-fillColor") as HTMLDivElement;
  if (!fillBar) return;
  fillBar.style.backgroundImage = ``;
  fillBar.style.backgroundRepeat = "";
  fillBar.style.backgroundPosition = "";
  fillBar.style.backgroundSize = "";
  fillBar.style.width = "";
  fillBar.style.height = "";
}
export const setProgressBarBg = (imageBase64: string | ArrayBuffer | null) => {
  if (!imageBase64) return;
  const fillBarBg = document.body.querySelector(".x-progressBar-progressBarBg") as HTMLDivElement;
  if (!fillBarBg) return;
  fillBarBg.style.backgroundImage = `url("${imageBase64}")`;
  fillBarBg.style.backgroundRepeat = "reapeat-x";
  fillBarBg.style.backgroundSize = "contain";
  fillBarBg.style.width = "100%";
  fillBarBg.style.height = "16px";
}
export const unsetProgressBarBg = () => {
  const fillBarBg = document.body.querySelector(".x-progressBar-progressBarBg") as HTMLDivElement;
  if (!fillBarBg) return;
  fillBarBg.style.backgroundImage = ``;
  fillBarBg.style.backgroundRepeat = "";
  fillBarBg.style.backgroundSize = "";
  fillBarBg.style.width = "";
  fillBarBg.style.height = "";
}
export const setProgressBarSlider = (imageBase64: string | ArrayBuffer | null) => {
  if (!imageBase64) return;
  const fillBarSlider = document.body.querySelector(".progress-bar__slider") as HTMLDivElement;
  if (!fillBarSlider) return;
  fillBarSlider.style.backgroundImage = `url("${imageBase64}")`;
  fillBarSlider.style.backgroundColor = `unset`;
  fillBarSlider.style.backgroundRepeat = "no-repeat";
  fillBarSlider.style.backgroundPosition = "center";
  fillBarSlider.style.top = "unset";
  fillBarSlider.style.backgroundSize = "cover";
  fillBarSlider.style.width = "32px";
  fillBarSlider.style.height = "32px";
  fillBarSlider.style.border = "none";
  fillBarSlider.style.margin = "0";
  fillBarSlider.style.visibility = "visible";
  fillBarSlider.style.display = "block";
  fillBarSlider.style.borderRadius = "0";
  fillBarSlider.style.boxShadow = "none";

}
export const unsetProgressBarSlider = () => {
  const fillBarSlider = document.body.querySelector(".progress-bar__slider") as HTMLDivElement;
  if (!fillBarSlider) return;
  fillBarSlider.style.backgroundImage = ``;
  fillBarSlider.style.backgroundColor = ``;
  fillBarSlider.style.backgroundRepeat = "";
  fillBarSlider.style.backgroundPosition = "";
  fillBarSlider.style.top = "";
  fillBarSlider.style.backgroundSize = "";
  fillBarSlider.style.width = "";
  fillBarSlider.style.height = "";
  fillBarSlider.style.border = "";
  fillBarSlider.style.margin = "";
  fillBarSlider.style.visibility = "";
  fillBarSlider.style.display = "";
  fillBarSlider.style.borderRadius = "";
  fillBarSlider.style.boxShadow = "";

}
