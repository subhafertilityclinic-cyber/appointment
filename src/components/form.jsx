import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/react-native"

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [datee, setDate] = useState(new Date());
  const [valid, setValid] = useState(true);

  let templateParams = {
    name: name,
    date: datee,
    phone: phone,
    address: address
  }

  function mail() {
    const serviceid = import.meta.env.VITE_SERVICE_ID
    const templateid = import.meta.env.VITE_TEMPLATE_ID
    const publickey = import.meta.env.VITE_PUBLIC_KEY

    emailjs
      .send(serviceid, templateid, templateParams, {
        publicKey: publickey,
      })
      .then(
        () => {
          alert("Appointment request send");
        },
        (err) => {
          alert('FAILED...', err);
        },
      );
    clear()
  }
  function onChange(datee) {
    setDate(datee);
  }
  function clear() {
    setName("")
    setPhone("")
    setAddress("")
  }
  useEffect(() => {
    const handler = setTimeout(() => {
      const phonePattern = /^(98|97)\d{8}$/;
      (phonePattern.test(phone) | phone.length == 0) ? setValid(true) : setValid(false);
    }, 500);
    return () => clearTimeout(handler);
  }, [phone])

  return <section className="flex flex-col gap-1 justify-center items-center w-full max-w-maxi  " >
    <h3 className="self-start font-heading font-bold text-lg text-main-black " >Book Appointment:</h3>
    <fieldset className="rounded-lg border-main-accent h-15 pl-3 border-2" >
      <legend className="text-main-black ml-2 font-heading font-semibold " >Name*</legend>
      <label htmlFor="name" className="text-main-accent flex items-center gap-1.5" >
        <img src="/person.svg" className="h-4 w-4" alt="person icon" /> |
        <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" className=" w-full focus:outline-0 font-semibold focus:text-main-black placeholder-main-accent placeholder:font-heading placeholder:font-semibold " required placeholder="Enter your name" />
      </label>
    </fieldset>
    <fieldset className="rounded-lg border-main-accent h-15 pl-3 border-2" >
      <legend className="text-main-black ml-2 font-heading font-semibold " >Appointment Date*</legend>
      <label htmlFor="date" className="text-main-accent flex items-center gap-1.5" >
        <img src="/date.svg" className="h-4 w-4" alt="person icon" /> |
        <DatePicker selected={datee} id="date" onChange={onChange} className="focus:outline-0 focus:text-main-black font-semibold w-full " />
      </label>
    </fieldset>
    <fieldset className={valid ? 'border-main-accent rounded-lg h-15 pl-2 border-2' : 'border-red-500 rounded-lg h-15 pl-2 border-2'}>
      <legend className="text-main-black ml-2 font-heading font-semibold " >Phone*</legend>
      <label htmlFor="phone" className="text-main-accent flex items-center gap-1.5" >
        <img src="/phone.svg" className="h-4 w-4" alt="person icon" /> |
        <input value={phone} onChange={e => setPhone(e.target.value)} type="text" id="phone" className="w-full focus:outline-0 font-semibold focus:text-main-black placeholder-main-accent placeholder:font-heading placeholder:font-semibold " required placeholder="Enter your phone" />
      </label>
    </fieldset>
    <fieldset className="rounded-lg border-main-accent h-15 pl-3 border-2" >
      <legend className="text-main-black ml-2 font-heading font-semibold " >Address*</legend>
      <label htmlFor="address" className="text-main-accent flex items-center gap-1.5" >
        <img src="/address.svg" className="h-4 w-4" alt="person icon" /> |
        <input value={address} onChange={e => { setAddress(e.target.value) }} type="text" id="address" className="w-full focus:outline-0 font-semibold focus:text-main-black placeholder-main-accent placeholder:font-heading placeholder:font-semibold " required placeholder="Enter your adddress" />
      </label>
    </fieldset>
    <div className="flex justify-around w-full max-w-maxi min-w-[300px] my-2 " >
      <button onClick={() => { (valid & (phone.length != 0)) ? mail() : alert("Check your phone number") }} className="active:bg-main-accent active:text-white active:border-main-black hover:cursor-pointer border-2 rounded-full border-main-accent text-main-accent p-3 font-semibold "  >book</button>
      <button onClick={clear} className="active:bg-main-accent active:text-white active:border-main-black hover:cursor-pointer border-2 rounded-full border-main-accent text-main-accent p-3 font-semibold "  >clear</button>
    </div>
  </section >
}
export default Form;

