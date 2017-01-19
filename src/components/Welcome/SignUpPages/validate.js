export const validateBasic = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.regno) {
    errors.regno = 'Required'
  } else if(!/(16)([a-zA-Z][a-zA-Z][a-zA-Z])(\d\d\d\d)/i.test(values.regno)){
    errors.regno = 'Enter a Valid regno'
  }
  return errors
}

export const validateAdvanced = values => {
  const errors = validateBasic(values);
  if(!values.phone){
      errors.phone = 'Required'
  } else if(!/^[789]\d{9}$/i.test(values.phone)){
      errors.phone = 'Enter a valid Phone number'
  }
  return errors
}
