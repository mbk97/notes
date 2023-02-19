export interface themeTypes {
  background: string;
  primary: string;
  secondary: string;
  iconPrimaryColor: string;
  iconSecondaryColor: string;
  inputFocusBg: string;
  inputDefaultBg: string;
  inputTextColor: string;
  titlePrimary: string;
  activeNavBg: string;
}

export const lightTheme: themeTypes = {
  background: "#FFFFFF",
  primary: "#5f6368",
  secondary: "#4c4c4c",
  iconPrimaryColor: "#74777c",
  iconSecondaryColor: "#e6e6e6",
  inputFocusBg: "#FFFFFF",
  inputDefaultBg: "#f1f3f4",
  inputTextColor: "#6f6f70",
  titlePrimary: "#3c4248",
  activeNavBg: "#feefc3",
};

export const darkTheme: themeTypes = {
  background: "#202124",
  primary: "#9aa0a6",
  secondary: "#b2ac98",
  iconPrimaryColor: "#8a8f95",
  iconSecondaryColor: "#363739",
  inputFocusBg: "#FFFFFF",
  inputDefaultBg: "#525355",
  inputTextColor: "#e9e9e9",
  titlePrimary: "#e2e2e3",
  activeNavBg: "#41331c",
};
