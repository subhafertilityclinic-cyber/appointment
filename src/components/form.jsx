import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [datee, setDate] = useState(new Date());
  console.log("Name: " + name + " Address: " + address + " Phone: " + phone + " Date: " + datee)
  function onChange(datee) {
    setDate(datee);
  }
  function clear() {
    console.log("pressed")
    setName("")
    setPhone("")
    setAddress("")
  }
  return <section className="flex flex-col gap-1 justify-center items-center w-full max-w-[360px]  " >
    <h3 className="self-start" >Book Appointment:</h3>
    <fieldset className="rounded-lg border-main-gray h-15 pl-3 border-2" >
      <legend className="text-main-black ml-2 font-heading font-semibold " >Name*</legend>
      <label htmlFor="name" className="text-main-gray flex items-center gap-1.5" >
        <img src="/person.svg" className="h-4 w-4" alt="person icon" /> |
        <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" className=" w-full focus:outline-0 font-semibold focus:text-main-black placeholder-main-gray placeholder:font-heading placeholder:font-semibold " required placeholder="Enter your name" />
      </label>
    </fieldset>
    <fieldset className="rounded-lg border-main-gray h-15 pl-3 border-2" >
      <legend className="text-main-black ml-2 font-heading font-semibold " >Appointment Date*</legend>
      <label htmlFor="date" className="text-main-gray flex items-center gap-1.5" >
        <img src="/date.svg" className="h-4 w-4" alt="person icon" /> |
        <DatePicker selected={datee} id="date" onChange={onChange} className="focus:outline-0 focus:text-main-black font-semibold w-full " />
      </label>
    </fieldset>
    <fieldset className="rounded-lg border-main-gray h-15 pl-3 border-2" >
      <legend className="text-main-black ml-2 font-heading font-semibold " >Phone*</legend>
      <label htmlFor="phone" className="text-main-gray flex items-center gap-1.5" >
        <img src="/phone.svg" className="h-4 w-4" alt="person icon" /> |
        <input value={phone} onChange={e => setPhone(e.target.value)} type="text" id="phone" className="w-full focus:outline-0 font-semibold focus:text-main-black placeholder-main-gray placeholder:font-heading placeholder:font-semibold " required placeholder="Enter your phone" />
      </label>
    </fieldset>
    <fieldset className="rounded-lg border-main-gray h-15 pl-3 border-2" >
      <legend className="text-main-black ml-2 font-heading font-semibold " >Address*</legend>
      <label htmlFor="address" className="text-main-gray flex items-center gap-1.5" >
        <img src="/address.svg" className="h-4 w-4" alt="person icon" /> |
        <input value={address} onChange={e => { setAddress(e.target.value) }} type="text" id="address" className="w-full focus:outline-0 font-semibold focus:text-main-black placeholder-main-gray placeholder:font-heading placeholder:font-semibold " required placeholder="Enter your adddress" />
      </label>
    </fieldset>
    <div className="flex justify-around w-full max-w-[360px] min-w-[300px] my-2 " >
      <button className="active:bg-main-gray active:text-white active:border-main-black hover:cursor-pointer border-2 rounded-full border-main-green text-main-green p-3 font-semibold "  >book</button>
      <button onClick={clear} className="active:bg-main-gray active:text-white active:border-main-black hover:cursor-pointer border-2 rounded-full border-main-green text-main-green p-3 font-semibold "  >clear</button>
    </div>
  </section>
}
export default Form;

