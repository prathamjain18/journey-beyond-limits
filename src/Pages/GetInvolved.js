import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSpring, animated, config } from 'react-spring';

const GetInvolved = () => {
  const [submitted, setSubmitted] = useState(false);
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
      setTimeout(() => setSubmitted(false), 5000); // Reset submitted state after 5 seconds
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
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <animated.h2 className="text-3xl font-bold text-center text-gray-800 mb-8" style={fieldAnimation}>Get Involved</animated.h2>
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
          <animated.div style={fieldAnimation}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="province" className="block text-gray-700 font-semibold mb-2">Province</label>
              <select
                id="province"
                name="province"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.province}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
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
                <div className="text-red-600">{formik.errors.province}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter subject"
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-red-600">{formik.errors.subject}</div>
              ) : null}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Type your message here"
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="text-red-600">{formik.errors.message}</div>
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
              ></textarea>
              {formik.touched.healthQuestion && formik.errors.healthQuestion ? (
                <div className="text-red-600">{formik.errors.healthQuestion}</div>
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
              ></textarea>
              {formik.touched.opportunitiesInterest && formik.errors.opportunitiesInterest ? (
                <div className="text-red-600">{formik.errors.opportunitiesInterest}</div>
              ) : null}
            </div>
          </animated.div>
          <animated.button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600 transition duration-300 hover:shadow-lg block w-full"
            style={fieldAnimation}
          >
            Submit
          </animated.button>
        </form>
        {/* Submission confirmation */}
        <animated.div style={submissionAnimation} className="text-green-600 text-center mt-4">
          {submitted && <p>Thank you for your submission!</p>}
        </animated.div>
      </div>
    </section>
  );
}

export default GetInvolved;
