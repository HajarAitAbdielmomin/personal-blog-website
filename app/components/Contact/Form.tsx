import { Send } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {sendEmail} from "@/app/services/email_service/email_service";
import {boxMessage} from "@/app/util/util";

const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required")
});

export default function ContactForm() {

    const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
        setSubmitting(true);
        let status: number = 0;
        try {
           const data = await sendEmail(values);
            if (data) {
                resetForm();
                status = 1
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setSubmitting(false);
            await boxMessage(status ? 'Your message has been sent successfully.' : 'An issue occurred while sending your message.'
                , status ? 'success' : 'error');
        }
    };

    return (
        <Formik
            initialValues={{ name: "", email: "", subject: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({
                  values,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
              }: any) => (
                <Form className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg flex flex-col gap-3 sm:gap-4 w-full" onSubmit={handleSubmit}>
                    <div>
                        <Field
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none text-sm sm:text-base w-full"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1 text-left font-bold" />
                    </div>

                    <div>
                        <Field
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none text-sm sm:text-base w-full"
                        />
                        <ErrorMessage name="email" component="div" className="text-red-500 font-bold text-xs mt-1 text-left" />
                    </div>

                    <div>
                        <Field
                            type="text"
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none text-sm sm:text-base w-full"
                        />
                        <ErrorMessage name="subject" component="div" className="text-red-500 font-bold text-xs mt-1 text-left" />
                    </div>

                    <div>
                        <Field
                            as="textarea"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows={4}
                            className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:border-blue-500 focus:ring focus:ring-blue-100 outline-none text-sm sm:text-base resize-none w-full"
                        />
                        <ErrorMessage name="message" component="div" className="text-red-500 font-bold text-xs mt-1 text-left" />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`text-white font-semibold py-2 sm:py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                            isSubmitting 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 cursor-pointer shadow-lg'
                        }`}
                    >
                        {isSubmitting ? 'Sending...' : (
                            <>
                                <Send className="text-white w-4 h-4 sm:w-6 sm:h-6"/>
                                Send Message
                            </>
                        )}
                    </button>

                </Form>
            )}
        </Formik>
    );
}