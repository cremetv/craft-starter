const getRootElementFontSize = () => parseFloat(getComputedStyle(document.documentElement).fontSize);

const select = (e) => document.querySelector(e);

const selectAll = (e) => document.querySelectorAll(e);

const selectId = (e) => document.getElementById(e);

const remToPx = (v) => v * getRootElementFontSize();

const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

const lerp = (a, b, n) => (1 - n) * a + n * b;

const randomInRange = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min);

const ready = (callback) => {
  if (document.readyState != 'loading') callback();
  else document.addEventListener('DOMContentLoaded', callback);
}

const makeId = length => {
  let result = '',
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      charsLength = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charsLength));
  }
  return result;
}

export { select, selectAll, selectId, remToPx, map, lerp, randomInRange, ready, makeId };
