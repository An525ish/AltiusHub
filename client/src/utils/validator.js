export const validateUserName = (value) => {
  if (!value) return 'Username is required';
  else if (value.lenth < 3) return 'Username must be atleast 3 characters';
  else if (!/^[a-z0-9._]*$/i.test(value)) return 'Invalid username';

  return true;
};

export const validateEmail = (value) => {
  if (!value) return 'Email is required';
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
    return 'Invalid email address';

  return true;
};

export const validatePassword = (value) => {
  if (!value) return 'Password is required';
  else if (value.lenth < 8) return 'Password must be atleast 8 characters';
  else if (!/^[a-z]/i.test(value))
    return 'Password must contain lowercase characters';
  else if (!/^[A-Z]/i.test(value))
    return 'Password must contain uppercase characters';
  else if (!/^[0-9]/i.test(value)) return 'Password must contain numbers';
  else if (!/^[a-zA-Z0-9]/i.test(value))
    return 'Password must contain atleast one special characters';

  return true;
};
