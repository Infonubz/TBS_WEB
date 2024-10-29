import React from "react";
import { HiMiniPhone } from "react-icons/hi2";
import { TbMailFilled } from "react-icons/tb";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import helpss from "../../../../assets/Help.gif";
//import { message } from "antd";
import { help } from "../../../../Api/MyAccounts/Help";

export default function Help() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name can't be longer than 50 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    terms: Yup.bool()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });
  const handleSubmit = (values, { resetForm }) => {
    help(values);
    resetForm();
  };

  return (
    <div className="bg-white md:h-[35vw] h-auto mx-[1vw] md:mx-[0vw] shadow-lg shadow-gray-300  mb-[2vw] w-full rounded-[1vw]">
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          terms: false,
        }}
        validationSchema={validationSchema}
        // onSubmit={(values) => {
        //     localStorage.setItem("mobile", values.mobile);
        // }}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, isValid, handleSubmit, values, handleChange }) => (
          <Form className="" onSubmit={handleSubmit}>
            <div className="flex h-[130vw] w-[95vw] md:w-full  md:h-[31vw]">
              <span className="md:block hidden">
                <div className="flex flex-col justify-items-center px-[5vw] gap-[1vw]">
                  <div className="flex justify-center">
                    <img src={helpss} alt="" className="h-[15vw] w-[15vw]" />
                  </div>
                  <div className="w-[23vw] text-center text-[#1F487C] font-bold text-[1.1vw] mb-[1vw]">
                    If you have any Inquiries get in touch with us. We'll be
                    happy to help you.
                  </div>
                  <div className="flex flex-col gap-[2.2vw]">
                    <div className="flex items-center border-[0.1vw] rounded-[0.5vw] border-[#1F487C] w-[22vw] h-[2.8vw] px-[1vw] gap-[3vw] text-[1.2vw]">
                      <HiMiniPhone color="#1F487C" size="1.5vw" />
                      <p className="text-[#1F487C]">+91 96885 53316</p>
                    </div>
                    <div className="flex items-center border-[0.1vw] rounded-[0.5vw] border-[#1F487C] w-[22vw] h-[2.8vw] px-[1vw] gap-[3vw] text-[1.2vw]">
                      <TbMailFilled color="#1F487C" size="1.5vw" />
                      <p className="text-[#1F487C]">info@thebusstand.com</p>
                    </div>
                  </div>
                </div>
              </span>

              <div className="w-[0.01vw] h-[27vw] border-r-[0.2vw] md:block hidden mt-[2vw] border-dashed content-center"></div>

              <div className="h-[25vw] w-full">
                <div className="px-[3vw] md:pt-[1vw] pt-[2vw] pb-[1vw] flex flex-col gap-x-[1.5vw] md:gap-y-[1vw] gap-y-[2.5vw]">
                  <div className="font-bold text-[#1F487C] text-[5.5vw] text-center md:text-start md:text-[1.3vw]">
                    Get in Touch
                  </div>
                  <span className="md:hidden block">
                    <div className="flex flex-col justify-center items-center px-[5vw] gap-[1.5vw]">
                      <div className="  text-[#1F487C] text-[3.5vw] mb-[1vw]">
                        If you have any Inquiries get in touch with us. We'll be
                        happy to help you.
                      </div>
                      <div className="flex my-[2vw]  flex-col gap-[3vw]">
                        <div className="flex items-center font-semibold w-full h-[7vw] px-[1vw] gap-[2vw] text-[3.8vw]">
                          <HiMiniPhone color="#1F487C" size="4vw" />
                          <p className="text-[#1F487C]">+91 96885 53316</p>
                        </div>
                        <div className="flex items-center font-semibold w-full h-[7vw] px-[1vw] gap-[2vw] text-[3.8vw]">
                          <TbMailFilled color="#1F487C" size="4vw" />
                          <p className="text-[#1F487C]">info@thebusstand.com</p>
                        </div>
                      </div>
                    </div>
                  </span>
                  <div className="font-semibold text-[#1F487C] text-[3.5vw] md:text-[1vw]">
                    Feel free to ask your query : {")"}
                  </div>
                </div>
                <div className="px-[1.5vw] w-full h-auto ">
                  {/* <div className="flex flex-col gap-y-[2.5vw] md:gap-y-[1vw]  py-[1vw] w-full md:w-[35vw] h-auto md:h-[26.4vw] relative md:border-[0.1vw] md:border-[#1F487C] px-[1.5vw] sm:border-none rounded-[1vw]"> */}
                  <div className="flex flex-col gap-y-[2.5vw] md:gap-y-[0.5vw] py-[0.5vw] w-full md:w-[35vw] h-auto md:h-[23vw] relative md:border-[0.1vw] md:border-[#1F487C] border-[0vw] border-white px-[1.5vw]   rounded-[1vw]">
                    <div className="flex flex-col gap-y-[1vw] relative">
                      <label className="md:text-[1vw] text-[4vw] text-[#1F487C]">
                        Name*
                      </label>

                      <Field
                        type="name"
                        name="name"
                        placeholder=""
                        value={values.name}
                        onChange={(e) => {
                          handleChange(e); // Formik's handleChange
                          // handleFormChange({
                          //   ...values,
                          //   mobile: e.target.value,
                          // });
                          localStorage.setItem("name", e.target.value);
                        }}
                        className="bg-[#D6EBFF80] opacity-95 border-slate-500 text-[#1F487C] text-[4vw] md:text-[1.2vw] h-[9vw] md:h-[2.5vw] w-full md:w-[32vw]  outline-none px-[1vw] rounded-[0.5vw]"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 md:text-[0.8vw] text-[2vw] absolute bottom-[-2.5vw] md:bottom-[-1.2vw]"
                      />
                    </div>
                    <div className="flex flex-col gap-y-[1vw] relative">
                      <label className="md:text-[1vw] text-[4vw] text-[#1F487C]">
                        Email*
                      </label>

                      <Field
                        type="email"
                        name="email"
                        placeholder=""
                        value={values.email}
                        onChange={(e) => {
                          handleChange(e); // Formik's handleChange
                          // handleFormChange({
                          //   ...values,
                          //   mobile: e.target.value,
                          // });
                          localStorage.setItem("email", e.target.value);
                        }}
                        className="bg-[#D6EBFF80] opacity-95 border-slate-500 text-[#1F487C] text-[4vw] md:text-[1.2vw] h-[9vw] md:h-[2.5vw] w-full md:w-[32vw]  outline-none px-[1vw] rounded-[0.5vw]"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 md:text-[0.8vw] text-[2vw] absolute md:bottom-[-1.2vw] bottom-[-2.5vw]  "
                      />
                    </div>
                    <div className="flex flex-col gap-y-[1vw]">
                      <label className="md:text-[1vw] text-[4vw] text-[#1F487C]">
                        Message*
                      </label>
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        className="bg-[#D6EBFF80] opacity-95 border-slate-500 text-[#1F487C] text-[4vw] md:text-[1.2vw] h-[18vw] md:h-[5vw] md:w-[32vw] w-full  outline-none px-[1vw] rounded-[0.5vw]"
                      />
                    </div>
                    <div className=" flex items-center gap-[1vw] py-[.8vw]">
                      <Field
                        type="checkbox"
                        name="terms"
                        className="md:h-[1vw] md:w-[1vw] h-[4vw] w-[4vw]"
                      />
                      <label
                        htmlFor="terms"
                        className="md:text-[1vw] text-[4vw] text-[#1F487C]"
                      >
                        I accept the terms and conditions
                      </label>
                      <ErrorMessage
                        name="terms"
                        component="div"
                        className="text-red-500 md:text-[0.8vw] text-[2vw] absolute md:bottom-[1vw] bottom-[0vw]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span className="flex md:px-[27vw] justify-center md:justify-normal py-[4vw] items-center md:py-[0vw] md:top-[-25vw]">
              <button
                type="submit"
                className="bg-[#1F487C] text-[white] md:w-[13vw] md:h-[3vw] h-[8vw] w-[38vw] rounded-full text-[4vw] md:text-[1.25vw] "
              >
                Submit
              </button>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
}
