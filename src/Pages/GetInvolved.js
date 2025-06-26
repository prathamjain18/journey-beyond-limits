import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSpring, animated, config } from 'react-spring';

const GetInvolved = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      subject: '',
      province: '',
      healthQuestion: '',
      opportunitiesInterest: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required'),
      subject: Yup.string().required('Required'),
      province: Yup.string().required('Required'),
      healthQuestion: Yup.string(),
      opportunitiesInterest: Yup.string()
    }),
    onSubmit: (values, { resetForm }) => {
      setIsSubmitting(true);
      const emailLink = `mailto:Resasd@dal.ca?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(`
        Name: ${values.name}
        Email: ${values.email}
        Province: ${values.province}
        Subject: ${values.subject}
        Message: ${values.message}
        Health Question: ${values.healthQuestion}
        Opportunities Interest: ${values.opportunitiesInterest}
      `)}`;
      
      window.location.href = emailLink;

      resetForm();
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsSubmitting(false);
      }, 5000); // Reset submitted state after 5 seconds
    }
  });

  // Animation for form submission
  const submissionAnimation = useSpring({
    opacity: submitted ? 1 : 0,
    transform: submitted ? 'translateY(0)' : 'translateY(-20px)',
    config: config.gentle
  });

  // Animation for form fields
  const fieldAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.default
  });

  return (
    <main id="main-content" className="bg-gray-100 py-16" role="main">
      <div className="container mx-auto px-4">
        <animated.h2 className="text-3xl font-bold text-center text-gray-800 mb-8" style={fieldAnimation} id="get-involved-title" tabIndex="0">Get Involved</animated.h2>
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto" aria-labelledby="get-involved-title" role="form" noValidate>
          <animated.div style={fieldAnimation}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name <span aria-hidden="true" className="text-red-600">*</span></label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
                aria-required="true"
                aria-invalid={formik.touched.name && formik.errors.name ? "true" : "false"}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600" role="alert">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address <span aria-hidden="true" className="text-red-600">*</span></label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                aria-required="true"
                aria-invalid={formik.touched.email && formik.errors.email ? "true" : "false"}
                autoComplete="email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600" role="alert">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="province" className="block text-gray-700 font-semibold mb-2">Province <span aria-hidden="true" className="text-red-600">*</span></label>
              <select
                id="province"
                name="province"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.province}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                aria-required="true"
                aria-invalid={formik.touched.province && formik.errors.province ? "true" : "false"}
              >
                <option value="">Select province</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Northwest Territories">Northwest Territories</option>
                <option value="Nunavut">Nunavut</option>
                <option value="Yukon">Yukon</option>
              </select>
              {formik.touched.province && formik.errors.province ? (
                <div className="text-red-600" role="alert">{formik.errors.province}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject <span aria-hidden="true" className="text-red-600">*</span></label>
              <input
                id="subject"
                name="subject"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter subject"
                aria-required="true"
                aria-invalid={formik.touched.subject && formik.errors.subject ? "true" : "false"}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-red-600" role="alert">{formik.errors.subject}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message <span aria-hidden="true" className="text-red-600">*</span></label>
              <textarea
                id="message"
                name="message"
                rows="4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Type your message here"
                aria-required="true"
                aria-invalid={formik.touched.message && formik.errors.message ? "true" : "false"}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-600" role="alert">{formik.errors.message}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="healthQuestion" className="block text-gray-700 font-semibold mb-2">Health Related Question</label>
              <textarea
                id="healthQuestion"
                name="healthQuestion"
                rows="4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.healthQuestion}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Type your health-related question here"
                aria-required="false"
                aria-invalid={formik.touched.healthQuestion && formik.errors.healthQuestion ? "true" : "false"}
              ></textarea>
              {formik.touched.healthQuestion && formik.errors.healthQuestion ? (
                <div className="text-red-600" role="alert">{formik.errors.healthQuestion}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="opportunitiesInterest" className="block text-gray-700 font-semibold mb-2">Interest in Opportunities</label>
              <textarea
                id="opportunitiesInterest"
                name="opportunitiesInterest"
                rows="4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.opportunitiesInterest}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Describe your interest in opportunities (e.g., volunteering, job opportunities)"
                aria-required="false"
                aria-invalid={formik.touched.opportunitiesInterest && formik.errors.opportunitiesInterest ? "true" : "false"}
              ></textarea>
              {formik.touched.opportunitiesInterest && formik.errors.opportunitiesInterest ? (
                <div className="text-red-600" role="alert">{formik.errors.opportunitiesInterest}</div>
              ) : null}
            </div>
          </animated.div>
          <animated.button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300 hover:shadow-lg block w-full focus:outline focus:ring-2 focus:ring-blue-700"
            style={fieldAnimation}
            aria-label="Submit form"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit'
            )}
          </animated.button>
        </form>
        {/* Submission confirmation */}
        <animated.div style={submissionAnimation} className="text-green-600 text-center mt-4">
          {submitted && <p>Thank you for your submission!</p>}
        </animated.div>
      </div>
    </main>
  );
}

export default GetInvolved;
