export enum COLOR_ENUM {
  DEFAULT = 'default',
  INPUT = 'input',
}

export type COLOR_TYPE = `${COLOR_ENUM}`;

export const COLOR_DATA = {
  [COLOR_ENUM.DEFAULT]: '#FFFFFF',
  [COLOR_ENUM.INPUT]: '#837f7f',
};
