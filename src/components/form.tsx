
"use client";

import { Label, TextInput } from "flowbite-react";

export default function Component() {
  return (
    <div className="flex min-w-[70%] max-w-[90%] flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-gray" color="black" value="" />
        </div>
        <TextInput id="input-gray" placeholder="Enter Name" required color="black" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-info" color="black" value="" />
        </div>
        <TextInput id="input-info" placeholder="Enter Date of birth" required color="black" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-success" color="black" value="" />
        </div>
        <TextInput id="input-success" placeholder="Enter Email" required color="black" />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="input-failure" color="black" value="" />
        </div>
        <TextInput id="input-failure" placeholder="Enter your Mobile no." required color="black" />
      </div>
      {/* <div>
        <div className="mb-2 block">
          <Label htmlFor="input-warning" color="black" value="" />
        </div>
        <TextInput id="input-warning" placeholder="Input Warning" required color="warning" />
      </div> */}
          <button className="flex w-fit bg-white py-[12px] px-[16px] flex-row items-center justify-center">
              <span className="text-[16px] italic leading-[18px] text-black w-fit   font-medium ">Register today &#11162;</span>
          </button>
    </div>
  );
}
