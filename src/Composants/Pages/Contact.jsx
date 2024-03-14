import React, { useState } from "react";

export function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");
  let onChangeName = (e) => {
    setName(e.target.value);
  };
  let onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  let onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div>
        <h2 className="text-7xl text-center text-gray-200 sm:text-red-600 lg:text-green-400 md:text-rose-300 ">
          Contact
        </h2>
      </div>
      <div className="grid grid-cols-2 col-span-2 md:flex-row md:justify-around lg:flex-row lg:justify-around sm:flex flex-col-reverse   ">
        <div className=" bg-blue bg-slate-800 ">
          <h1 className="text-2xl text-center text-gray-200 font-bold pt-4 underline justify-center">
            Message Me
          </h1>
          <div className="m-2 flex gap-2  justify-center flex-col items-center py-10 ">
            <Input
              value={name}
              onChange={onChangeName}
              placeholder="Name"
              type="text"
            />
            <Input
              value={email}
              onChange={onChangeEmail}
              placeholder="Email"
              type="email"
            />
            <Input
              value={subject}
              onChange={onChangeSubject}
              placeholder="Subject"
              type="text"
              style={{ width: "400px" }}
            />
            <Texterea />
            <Button />
          </div>
        </div>
        <div className="text-gray-300  ">
          <h1 className="text-3xl text-center font-bold pt-4 underline text-gray-200 h">
            Contact information
          </h1>
          <h3 className="text-2xl text-center ">
            {" "}
            Open for opportunities. Let's connect <br /> and build something
            awesome together
          </h3>
          <div className="flex lg:flex  md:flex sm:justify-center  ">
            <div>
              <div className="h-20 w-8 text-2xl ">🧑</div>
              <div className="h-20 w-8 text-2xl ">📍</div>
              <div className="h-20 w-8 text-2xl">📩</div>
            </div>
            <div className="bg-gray-200 w-1 h-40 mt-2 mx-2"></div>
            <div className="mx-4">
              <div>
                <h3 className="font-bold text-xl underline">Name 🥰</h3>
                <p className="text-green-400 text-xl">Heri Randry </p>
              </div>
              <div className="mt-4">
                <h3 className="font-bold text-xl underline">Location 👨‍👦‍👦</h3>
                <p className="text-green-400 text-xl">Imerintsiatosika Itasy</p>
              </div>
              <div className="mt-5">
                <h3 className="font-bold text-xl underline">Email 💌</h3>
                <p className="text-green-400 text-xl w-11/12">
                  hrandri30@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let Input = ({ value, onChange, placeholder, type }) => {
  return (
    <div>
      <input
        className="text-white h-10 border-solid rounded-lg p-5 bg-transparent border-b-2 outline-none lg:w-96  sm:w-60 hover:shadow-md hover:shadow-green-500/40 "
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

let Texterea = () => {
  return (
    <div>
      <textarea className="text-white  hover:shadow-md hover:shadow-green-500/40 border rounded lg:w-96  sm:w-60 bg-transparent border-b-2 outline-none border-t-0"></textarea>
    </div>
  );
};

let Button = () => {
  return (
    <div>
      <button
        type="submit"
        className="hover:shadow-green-500/40 hover:shadow-2xl border rounded p-2 bg-transparent border-b-4 text-white font-semibold bg-green-600"
      >
        {" "}
        submit
      </button>
    </div>
  );
};
