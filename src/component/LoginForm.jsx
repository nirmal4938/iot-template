// LoginForm.js
import React from 'react';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import * as Yup from 'yup';
import { Card } from 'primereact/card';

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: (values) => {
      console.log(values); // You can handle form submission here
    }
  });

  return (
    <Card className='col-10 lg:col-4 md:col-6 auth-card'>
    <div className="auth-form p-5 ">
      <form onSubmit={formik.handleSubmit}>
        <div className="p-field">
          {/* <label htmlFor="username">Username</label> */}
          <InputText
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder='username'
            className='text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full'
            />
          {formik.touched.username && formik.errors.username ? (
              <div className="p-error">{formik.errors.username}</div>
              ) : null}
        </div>
        <div className="p-field pt-4 pb-4">
          {/* <label htmlFor="password">Password</label> */}
          <InputText
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder='password'
            className='text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full'
            />
          {formik.touched.password && formik.errors.password ? (
              <div className="p-error">{formik.errors.password}</div>
              ) : null}
        </div>
        <Button type="submit" label="SIGN IN"  className='w-full'/>
      </form>
      <div className='forgot-password pt-4 flex justify-content-center text-primary'>Forgot Password</div>
    </div>
    </Card>
  );
};

