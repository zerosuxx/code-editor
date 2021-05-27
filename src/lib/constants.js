export default {
  FILE_NAME_REGEX: /^((?![:<>"\/\\\|\?\*]).)*$/,
  FONT_SIZE: /^[0-9\.]{1,3}(px|rem|em|pt|mm|pc|in)$/,
  HEX_COLOR: /^#([a-f0-9]{3}){1,2}([a-f0-9]{2})?$/i,
  RGB_COLOR: /^rgba?\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(\s*,\s*\d?(\.\d+)?)?\)$/i,
  HSL_COLOR: /^hsla?\(([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(\s*,\s*\d?(\.\d+)?)?\)$/i,
  EXTERNAL_STORAGE: /^file:\/\/\/storage\/([0-9a-z\-]+)/i,
  DEFAULT_FILE_SESSION: "default-session",
  DEFAULT_FILE_NAME: "untitled.txt",
  RATING_COUNT: 15,
  DONATION_COUNT: 20,
  CONSOLE_PORT: 8159,
  PORT: 8158,
  VIBRATION_TIME: 30,
  BACKUP_FILE: 'backups/Zcode/backup',
  PAYPAL: "https://paypal.me/deadlyjack",
  PATREON: "https://patreon.com/foxdebug",
  PAID_VERSION: "https://play.google.com/store/apps/details?id=com.foxdebug.acode",
  FEEDBACK_EMAIL: "acode@foxdebug.com",
  PERSONAL_EMAIL: "ajit@foxdebug.com",
  notification: {
    EXIT_FULL_SCREEN: 1,
    SUPPORT_ACODE: 2
  },
  COMMANDS: ["saveFile", "saveFileAs", "newFile", "nextFile", "prevFile", "openFile", "run", "find", "replace", "toggleSidebar", "toggleFullscreen", "toggleMenu", "toggleEditMenu"],
  encodings: [
    "utf-8",
    "ibm866",
    "iso-8859-2",
    "iso-8859-3",
    "iso-8859-4",
    "iso-8859-5",
    "iso-8859-6",
    "iso-8859-7",
    "iso-8859-8",
    "iso-8859-8i",
    "iso-8859-10",
    "iso-8859-13",
    "iso-8859-14",
    "iso-8859-15",
    "iso-8859-16",
    "koi8-r",
    "koi8-u",
    "macintosh",
    "windows-874",
    "windows-1250",
    "windows-1251",
    "windows-1252",
    "windows-1253",
    "windows-1254",
    "windows-1255",
    "windows-1256",
    "windows-1257",
    "windows-1258",
    "x-mac-cyrillic",
    "gbk",
    "gb18030",
    "hz-gb-2312",
    "big5",
    "euc-jp",
    "iso-2022-jp",
    "shift-jis",
    "euc-kr",
    "iso-2022-kr",
    "utf-16be",
    "utf-16le",
    "x-user-defined",
    "replacement"
  ],
  langList: {
    "en-us": "English",
    "es-sv": "Español",
    "fr-fr": "Francais",
    "de-de": "Deutsch",
    "id-id": "Indonesian",
    "uz-uz": "O'zbekcha",
    "ru-ru": "Русский",
    "pt-br": "Português",
    "tr-tr": "Türkçe",
    "uk-ua": "Українська",
    "hi-in": "हिंदी",
    "zh-cn": "中文简体",
    "zh-hant": "繁體中文",
    "ir-fa": "فارسی",
    "ar-ye": "العربية",
    "ja-jp": "日本語",
    "bn-bd": "বাংলা",
    "cs-cz": "Čeština",
    "vi-vn": "Vietnamese",
    "be-by": "Беларуская",
    "hu-hu": "Magyar",
    "ml-in": "മലയാളം",
    "mm-unicode": "ဗမာစာ(Unicode)",
    "mm-zawgyi": "ဗမာစာ(Zawgyi)"
  },
  editorThemeList: {
    "ambiance": scheme('ambiance', 'dark'),
    "chaos": scheme('chaos', 'dark'),
    "clouds_midnight": scheme('clouds_midnight', 'dark'),
    "cobalt": scheme('cobalt', 'dark'),
    "dracula": scheme('dracula', 'dark'),
    "gob": scheme('gob', 'dark'),
    "gruvbox": scheme('gruvbox', 'dark'),
    "idle_fingers": scheme('idle_fingers', 'dark'),
    "kr_theme": scheme('kr_theme', 'dark'),
    "merbivore": scheme('merbivore', 'dark'),
    "merbivore_soft": scheme('merbivore_soft', 'dark'),
    "mono_industrial": scheme('mono_industrial', 'dark'),
    "monokai": scheme('monokai', 'dark'),
    "nord_dark": scheme('nord_dark', 'dark'),
    "pastel_on_dark": scheme('pastel_on_dark', 'dark'),
    "solarized_dark": scheme('solarized_dark', 'dark'),
    "terminal": scheme('terminal', 'dark'),
    "tomorrow_night": scheme('tomorrow_night', 'dark'),
    "tomorrow_night_blue": scheme('tomorrow_night_blue', 'dark'),
    "tomorrow_night_bright": scheme('tomorrow_night_bright', 'dark'),
    "tomorrow_night_eighties": scheme('tomorrow_night_eighties', 'dark'),
    "twilight": scheme('twilight', 'dark'),
    "vibrant_ink": scheme('vibrant_ink', 'dark'),
    "chrome": scheme('chrome', 'light'),
    "clouds": scheme('clouds', 'light'),
    "crimson_editor": scheme('crimson_editor', 'light'),
    "dawn": scheme('dawn', 'light'),
    "dreamweaver": scheme('dreamweaver', 'light'),
    "eclipse": scheme('eclipse', 'light'),
    "github": scheme('github', 'light'),
    "iplastic": scheme('iplastic', 'light'),
    "katzenmilch": scheme('katzenmilch', 'light'),
    "kuroir": scheme('kuroir', 'light'),
    "solarized_light": scheme('solarized_light', 'light'),
    "sqlserver": scheme('sqlserver', 'light'),
    "textmate": scheme('textmate', 'light'),
    "tomorrow": scheme('tomorrow', 'light'),
    "xcode": scheme('xcode', 'light')
  },

  /**
   * @type {AppThemeList}
   */
  appThemeList: {
    "atticus": scheme("atticus", "dark", false, "#201e1e", "#363333"),
    "bump": scheme("bump", "dark", false, "#1c2126", "#303841"),
    "bling": scheme("bling", "dark", false, "#131326", "#202040"),
    "black": scheme("black", "dark", false, "#000000", "#000000"),
    "dark": scheme("dark", "dark", false, "#1d1d1d", "#313131"),
    "moon": scheme("moon", "dark", false, "#14181d", "#222831"),
    "ocean": scheme("ocean", "dark", false, "#13131a", "#20202c"),
    "tomyris": scheme("tomyris", "dark", false, "#230528", "#3b0944"),
    "menes": scheme("menes", "dark", false, "#1f2226", "#353941"),
    "default": scheme("default", "light", true, "#5c5c99", "#9999ff"),
    "light": scheme("light", "light", false, "#999999", "#ffffff")
  }
};

/**
 *
 * @param {string} type
 * @param {"light"|"dark"} type
 * @param {boolean} [isFree]
 * @param {string} [darken]  primary color darkened by 40%
 * @param {string} [primary]
 * @returns {ThemeData}
 */
function scheme(name, type, isFree, darken, primary) {
  if (typeof isFree === undefined) return {
    name,
    type
  };

  return {
    name,
    type,
    isFree,
    darken,
    primary
  };
}