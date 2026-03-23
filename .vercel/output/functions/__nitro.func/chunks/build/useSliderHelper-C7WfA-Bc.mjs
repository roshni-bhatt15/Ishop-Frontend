import { f as useUtils } from './server.mjs';

function useSliderHelper(activeSlide, sliderLoaded) {
  const onChange = ({ index }, id = "home-hero") => {
    activeSlide.value = index;
    const { getImageURL: getImageURL2 } = useUtils();
    const img = loadedImage(index, id);
    const setLoadingState = () => {
      img.style.opacity = 1;
    };
    img == null ? void 0 : img.addEventListener("load", setLoadingState);
    img == null ? void 0 : img.addEventListener("error", () => {
      img.style.opacity = 1;
      img.src = getImageURL2();
    });
  };
  const onFirstImageLoad = (index = 0, id = "home-hero") => {
    activeSlide.value = index;
    const img = loadedImage(index, id);
    const setLoadingState = () => {
      sliderLoaded.value = true;
      img.style.opacity = 1;
    };
    img == null ? void 0 : img.addEventListener("load", setLoadingState);
    img == null ? void 0 : img.addEventListener("error", () => {
      sliderLoaded.value = true;
      img.style.opacity = 1;
      img.src = getImageURL();
    });
  };
  const loadedImage = (index = 0, id = "home-hero") => {
    const firstImg = (void 0).getElementById(`${id}-${index}`);
    firstImg == null ? void 0 : firstImg.setAttribute("src", firstImg == null ? void 0 : firstImg.getAttribute("data-src"));
    return firstImg;
  };
  return {
    onChange,
    onFirstImageLoad
  };
}

export { useSliderHelper as u };
//# sourceMappingURL=useSliderHelper-C7WfA-Bc.mjs.map
