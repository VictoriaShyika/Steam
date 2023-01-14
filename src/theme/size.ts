export enum SIZE_FONT_ENUM {
  DEFAULT = 'default',
  SMALL = 'small',
  TITLE = 'title',
}

export type SIZE_FONT_TYPE = `${SIZE_FONT_ENUM}`;

export const SIZE_FONT_DATA = {
  [SIZE_FONT_ENUM.DEFAULT]: 14,
  [SIZE_FONT_ENUM.SMALL]: 12,
  [SIZE_FONT_ENUM.TITLE]: 18,
};

export enum SIZE_BORDER_RADIUS_ENUM {
  DEFAULT = 'default',
}

export type SIZE_BORDER_RADIUS_TYPE = `${SIZE_BORDER_RADIUS_ENUM}`;

export const SIZE_BORDER_RADIUS_DATA = {
  [SIZE_BORDER_RADIUS_ENUM.DEFAULT]: 10,
};
