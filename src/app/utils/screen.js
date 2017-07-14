import {
  SMALL,
  TABLET,
  DESKTOP,
  XL,
} from '../constants/media-queries';

export function getSize() {
  switch (true) {
    case window.innerWidth < SMALL:
      return SMALL;
    case window.innerWidth < TABLET:
      return TABLET;
    case window.innerWidth < DESKTOP:
      return DESKTOP;
    case window.innerWidth < XL:
    default:
      return XL;
  }
}

export function isSmall() {
  return window.innerWidth < TABLET;
}

export function isTablet() {
  return !isSmall() && window.innerWidth < DESKTOP;
}

export function isDesktop() {
  return !isSmall() && !isTablet() && window.innerWidth < XL;
}

export function isXL() {
  return !isSmall() && !isTablet() && !isDesktop();
}
