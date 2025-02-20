"use client";
import { ContactForm, ContactTypes } from "@/types";
import React, { useState } from "react";
import PathDrawing from "../PathDrawing/PathDrawing";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { MdOutlineErrorOutline } from "react-icons/md";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import Image from "next/image";
import { urlFor } from "@/sanity/sanity.query";
import ComponentText from "../ComponentText/ComponentText";

function Contact({ contact }: { contact: ContactTypes[] }) {
  const [formData, setFormData] = useState(
    contact.reduce((acc: any, contactText: ContactTypes) => {
      contactText.contactForm.forEach((contactForm: ContactForm) => {
        acc[contactForm._key] = "";
      });
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState<any>({});
  const [formsuccess, setFormSuccess] = useState<boolean>(false);
  const [formError, setFormError] = useState<null | boolean>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: Record<string, string>) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors({});
    setFormSuccess(false);
    setFormError(false);

    const validationErrors: Record<string, string> = {};
    let hasError = false;

    contact.forEach((contactText: ContactTypes) => {
      contactText.contactForm.forEach((contactForm: ContactForm) => {
        const value = (formData[contactForm._key] || "").trim();

        if (contactForm.type === "text") {
          if (!/^[A-Za-zÀ-Öà-ö\s'-]+$/.test(value) || value === "") {
            validationErrors[contactForm._key] =
              "Name must only contain letters";
            hasError = true;
          }
        }

        if (contactForm.type === "email") {
          if (
            !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
            value === ""
          ) {
            validationErrors[contactForm._key] = "Please enter a valid email";
            hasError = true;
          }
        }

        if (contactForm.type === "textarea") {
          if (value === "") {
            validationErrors[contactForm._key] = "Please enter a message";
            hasError = true;
          }
        }
      });
    });

    setErrors(validationErrors);

    if (hasError) {
      return;
    }

    const mappedFormData = Object.keys(formData).reduce((acc: any, key) => {
      contact.forEach((contactText: ContactTypes) => {
        contactText.contactForm.forEach((contactForm: ContactForm) => {
          if (contactForm._key === key) {
            if (contactForm.label.toLowerCase().includes("name")) {
              acc["name"] = formData[key];
            } else if (contactForm.label.toLowerCase().includes("email")) {
              acc["email"] = formData[key];
            } else if (contactForm.label.toLowerCase().includes("message")) {
              acc["message"] = formData[key];
            }
          }
        });
      });
      return acc;
    }, {});
    try {
      setLoading(true);
      await axios.post(process.env.NEXT_PUBLIC_EMAIL_API_KEY!, {
        formData: mappedFormData,
      });
      setFormData({});
      setErrors({});
      setFormSuccess(true);
      setLoading(false);
    } catch {
      setFormError(true);
      setLoading(false);
    }
  };

  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-secondary via-black pt-16 scroll-m-20 px-5"
    >
      <div className="container max-w-[1000px] 2xl:max-w-[1500px] flex-col lg:flex-row flex justify-center lg:justify-between">
        {contact.map((contactText: ContactTypes) => (
          <div className="pb-10" key={contactText._id}>
            <ComponentText
              key={contactText._id}
              textData={contactText.contactText}
            />
            <div className="text-white flex justify-center sm:justify-start md:w-[600px]">
              <form onSubmit={(e) => handleForm(e)} noValidate>
                {contactText.contactForm.map((contactForm: ContactForm) => (
                  <div
                    className="flex flex-col pb-3 pt-3"
                    key={contactForm._key}
                  >
                    <label className="pb-2">{contactForm.label}</label>
                    {contactForm.type === "textarea" ? (
                      <textarea
                        className="p-3 border h-[50px] sm:h-[150px] min-h-[100px] max-h-[300px] border-gray-300 rounded-md bg-transparent text-white focus:border-tertiary focus:outline-none focus:ring-2 focus:ring-tertiary"
                        placeholder={contactForm.placeHolder}
                        onChange={handleInput}
                        name={contactForm._key}
                        value={formData[contactForm._key] || ""}
                        rows={7}
                      />
                    ) : (
                      <input
                        className="p-3 border w-[300px] sm:w-full border-gray-300 rounded-md bg-transparent text-white focus:border-tertiary focus:outline-none focus:ring-2 focus:ring-tertiary"
                        type={contactForm.type}
                        placeholder={contactForm.placeHolder}
                        onChange={handleInput}
                        name={contactForm._key}
                        value={formData[contactForm._key] || ""}
                      />
                    )}

                    {errors[contactForm._key] && (
                      <p className="text-red-500 text-p flex items-center gap-1 pt-2">
                        <span>
                          <MdOutlineErrorOutline />
                        </span>
                        {errors[contactForm._key]}
                      </p>
                    )}
                  </div>
                ))}
                {loading ? (
                  <div className="text-tertiary text-p flex items-center gap-1 pt-2">
                    <ThreeDots
                      height="40"
                      width="40"
                      color="#4F46E5"
                      radius="10"
                    />
                  </div>
                ) : (
                  <>
                    {formsuccess && (
                      <p className="text-green-500 text-p flex items-center gap-1 pt-2">
                        Your message has been sent!
                        <span>
                          <IoIosCheckmarkCircle />
                        </span>
                      </p>
                    )}
                    {formError && (
                      <p className="text-red-500 text-p flex items-center gap-1 pt-2">
                        There was an error submitting, please try again later
                        <span>
                          <IoIosCloseCircle />
                        </span>
                      </p>
                    )}
                  </>
                )}

                <div className="flex flex-col gap-5 sm:flex-row justify-start items-center sm:justify-between pt-4">
                  <button
                    type="submit"
                    className="relative overflow-hidden border-2 border-white text-white bg-transparent px-5 py-3 font-medium group"
                  >
                    <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-black flex flex-row items-center gap-1">
                      {contactText.contactSendMessageButton.buttonText}
                      <span className=" group-hover:filter group-hover:brightness-[0] group-hover:saturate-[100%]">
                        <Image
                          src={
                            urlFor(
                              contactText.contactSendMessageButton.buttonIcon
                            ).url() as string
                          }
                          alt="social icon"
                          width={15}
                          height={30}
                          className="transition-all duration-300"
                        />
                      </span>
                    </span>
                  </button>

                  <a
                    href={`mailto:${contactText.contactEmail.emailText}`}
                    className="ml-4 text-sm sm:text-base text-white hover:opacity-20 flex flex-row items-center gap-1"
                  >
                    {contactText.contactEmail.emailText}
                    <span>
                      <Image
                        src={
                          urlFor(
                            contactText.contactEmail.emailIcon
                          ).url() as string
                        }
                        alt="social icon"
                        width={15}
                        height={30}
                      />
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        ))}
        <PathDrawing />
      </div>
    </div>
  );
}

export default Contact;
