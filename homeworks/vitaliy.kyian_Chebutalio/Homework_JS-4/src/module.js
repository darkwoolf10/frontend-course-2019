export const isValid = {
    minLength: ({ text, length }) => text.length >= length,
    maxLength: ({ text, length }) => text.length <= length,
    pattern: ({ text, pattern }) => text.includes(pattern),
    email: ({ text }) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(text),
    phone: ({ text }) => /^\+\d{2}[(]\d{3}[)]\d{3}-\d{2}-\d{2}$/.test(text),
    numberRange: ({ text, min, max }) => text >= min && text <= max,
};
