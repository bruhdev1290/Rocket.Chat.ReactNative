export type TThemeMode = 'automatic' | 'light' | 'dark' | 'sandstone' | 'lightGray';

export type TDarkLevel = 'black' | 'dark';

export interface IThemePreference {
	currentTheme: TThemeMode;
	darkLevel: TDarkLevel;
}
