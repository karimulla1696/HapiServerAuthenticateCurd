require('dotenv').config();

const defaultLan = process.env.DEFAULT_LANGUAGE;
const languages = process.env.LANGUAGE;
const localizationOptions = {
    locales: languages.split(','),
    directory: './locales',
    languageHeaderField: 'language',
    defaultLocale: defaultLan,
};

module.exports = localizationOptions;