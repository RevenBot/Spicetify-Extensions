import './app.css'
import { setProgressBarBg, setProgressBarFill, setProgressBarSlider, unsetProgressBarBg, unsetProgressBarFill, unsetProgressBarSlider } from './setters';
async function main() {
  while (!(!!Spicetify?.Player.data && !!Spicetify?.Platform && !!Spicetify.Playbar && !!Spicetify.Menu)) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  const extensionName = "Funny-Playbar";
  const keyBarFillImg = `Extension:${extensionName}:barFillImg`
  const keyBarBgImg = `Extension:${extensionName}:barBgImg`
  const keyBarSliderImg = `Extension:${extensionName}:barSliderImg`

  function run() {
    const fillImgBase64 = Spicetify.LocalStorage.get(keyBarFillImg);
    const bgImgBase64 = Spicetify.LocalStorage.get(keyBarBgImg);
    const sliderImgBase64 = Spicetify.LocalStorage.get(keyBarSliderImg);
    if (fillImgBase64) setProgressBarFill(fillImgBase64)
    if (bgImgBase64) setProgressBarBg(bgImgBase64)
    if (sliderImgBase64) setProgressBarSlider(sliderImgBase64)
  }

  function handleOnClickItem(container: "barFill" | "barBg" | "barSlider" | "resetAll") {

    if (container === "resetAll") {
      Spicetify.LocalStorage.remove(keyBarFillImg);
      Spicetify.LocalStorage.remove(keyBarBgImg);
      Spicetify.LocalStorage.remove(keyBarSliderImg);
      unsetProgressBarFill();
      unsetProgressBarBg();
      unsetProgressBarSlider();
      return;
    }

    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {
      if (!input.files) return;
      const file = input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        switch (container) {
          case "barFill": {
            const base64 = reader.result;
            Spicetify.LocalStorage.set(keyBarFillImg, base64);
            setProgressBarFill(base64);
            break;
          }
          case "barBg": {
            const base64 = reader.result;
            Spicetify.LocalStorage.set(keyBarBgImg, base64);
            setProgressBarBg(reader.result);
            break;
          }
          case "barSlider": {
            const base64 = reader.result;
            Spicetify.LocalStorage.set(keyBarSliderImg, base64);
            setProgressBarSlider(reader.result);
            break;
          }
          default:
            break;
        }
      }
      reader.readAsDataURL(file);
    }
    input.click();
  }



  function registerMenu() {
    const barFillItem = new Spicetify.Menu.Item(
      "Fill Background Image",
      false,
      () => {
        handleOnClickItem("barFill")
      },
    );
    const barBgItem = new Spicetify.Menu.Item(
      "Playbar Background Image",
      false,
      () => {
        handleOnClickItem("barBg")
      },
    );
    const barSlider = new Spicetify.Menu.Item(
      "Slider Background Image",
      false,
      () => {
        handleOnClickItem("barSlider")
      },
    );
    const resetAll = new Spicetify.Menu.Item(
      "Default (reset all)",
      false,
      () => {
        handleOnClickItem("resetAll")
      },
    );
    new Spicetify.Menu.SubMenu("Funny Playbar", [barFillItem, barBgItem, barSlider, resetAll]).register();
  }

  run();
  registerMenu();
}
export default main;
