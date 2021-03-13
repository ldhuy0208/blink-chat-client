const getPropsFormik = (formik, field) => ({
  name: field,
  onBlur: formik.handleBlur,
  onChange: formik.handleChange,
  error: formik.touched[field] && Boolean(formik.errors[field]),
  helperText: formik.touched[field] && formik.errors[field],
});

export default getPropsFormik;
