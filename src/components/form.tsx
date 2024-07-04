
"use client";

import { Label, } from "flowbite-react";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import emailjs from 'emailjs-com'

export default function Component() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    preferredCenter: '',
    dob: ''
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Replace these values with your EmailJS credentials
    const serviceID = 'service_e9ippmr';
    const templateID = 'template_q9ur769';
    const userID = 'chSDySa8Z4AxjNUnx';

    emailjs.send(serviceID, templateID, formData,userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Form submitted successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to submit form.');
      });
  };
  return (
    <form onSubmit={handleSubmit} className="flex min-w-[70%] max-w-[90%] flex-col gap-4">
      <div>
        <div className="  mb-2 block">
          <Label htmlFor="input-gray" color="black" value="" />
        </div>
        {/* <TextInput  className="flex  outline-none" id="input-gray" placeholder="Enter Name" required color="black" /> */}
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter Name" className="flex w-full bg-white placeholder-gray-600 p-1 focus:border-cyan-500 focus:ring-cyan-500  dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-black outline-none  overflow-hidden  border disabled:cursor-not-allowed disabled:opacity-50 "></input>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-info" color="black" value="" />
        </div>
        {/* <TextInput id="input-info" placeholder="Enter Date of birth" required color="black" /> */}
        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required placeholder="Enter Date of Birth" className="flex w-full bg-white placeholder-gray-600 p-1 focus:border-cyan-500 focus:ring-cyan-500  dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-black outline-none  overflow-hidden  border disabled:cursor-not-allowed disabled:opacity-50 "></input>

      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-success" color="black" value="" />
        </div>
        {/* <TextInput id="input-success" placeholder="Enter Email" required color="black" /> */}
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter Email" className="flex w-full bg-white placeholder-gray-600 p-1 focus:border-cyan-500 focus:ring-cyan-500  dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-black outline-none  overflow-hidden  border disabled:cursor-not-allowed disabled:opacity-50 "></input>

      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-failure" color="black" value="" />
        </div>
        {/* <TextInput id="input-failure" placeholder="Enter your Mobile no." required color="black" /> */}
        <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Enter Mobile No" className="flex w-full bg-white placeholder-gray-600 p-1 focus:border-cyan-500 focus:ring-cyan-500  dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-black outline-none  overflow-hidden  border disabled:cursor-not-allowed disabled:opacity-50 "></input>

      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-failure" color="black" value="" />
        </div>
        {/* <TextInput id="input-failure" placeholder="Enter your Mobile no." required color="black" /> */}
        <input type="text" id="preferredCenter" name="preferredCenter" value={formData.preferredCenter} onChange={handleChange} required placeholder="Enter Preferred Coaching Center" className="flex w-full bg-white placeholder-gray-600 p-1 focus:border-cyan-500 focus:ring-cyan-500  dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-black outline-none  overflow-hidden  border disabled:cursor-not-allowed disabled:opacity-50 "></input>

      </div>
      {/* <div>
        <div className="mb-2 block">
          <Label htmlFor="input-warning" color="black" value="" />
        </div>
        <TextInput id="input-warning" placeholder="Input Warning" required color="warning" />
      </div> */}
          <button type="submit" className="flex w-fit bg-white py-[12px] px-[16px] flex-row items-center justify-center">
              <span className="flex gap-1 text-[16px] italic leading-[18px] text-black w-fit   font-medium ">Register today <IoIosArrowForward className="pt-1" /></span>
          </button>
    </form>
  );
}
