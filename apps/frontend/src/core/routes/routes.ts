export const PL_CODE = 'pl';
export const EN_CODE = 'en';

export interface RoutePaths {
  [PL_CODE]: Record<string, string>;
  [EN_CODE]: Record<string, string>;
}

export const ROUTES: RoutePaths = {
  [PL_CODE]: {
    HOME: '',
    TEST: 'PLtest',
  },
  [EN_CODE]: {
    HOME: '',
    TEST: 'ENtest',
  },
};
