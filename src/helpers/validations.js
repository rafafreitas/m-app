export const emailIsValid = email => {
  const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return regex.test(email.toString().trim());
};

export const onlyLetter = str => str.replace(/[^a-zA-Zà-úÀ-Ú ]/g, '');
