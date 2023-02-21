// utils/validation.js

export const validate = (name, email, password) => {
    const errors = {};
  
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!nameRegex.test(name)) {
      errors.name = 'Please enter a valid name';
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
  
    if (password.length < 3) {
      errors.password = 'Password must be at least 3 characters';
    }
  
    return errors;
  };
  

  export const validateLogin = (email,password)=>{
    const errors = {};
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
  
    if (password.length < 3) {
      errors.password = 'Password must be at least 3 characters';
    }
  
    return errors;

  }