export const clampOpacity = (offset, height, slide) => {
    const clampOffset = (offset - (height * slide)) / 4;

    const opacity = 1 - Math.abs(Math.fround(clampOffset / 100));
    const clampOpacity = opacity < 0.2 ? 0 : opacity > 0.8 ? 1 : opacity;

    return Math.abs(Math.round(clampOpacity * 10) / 10);
};