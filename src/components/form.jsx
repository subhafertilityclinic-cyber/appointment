import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/react-native"
import Poopers from "./poopers";
import { getDay } from 'date-fns';

const today = new Date();

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [datee, setDate] = useState(today);
  const [isEmptyName, setIsEmptyName] = useState(false);
  const [isEmptyAddress, setIsEmptyAddress] = useState(false);
  const [valid, setValid] = useState(true);
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const [pooperRun, setPooperRun] = useState(false);
  const validate = () => {
    let passed = true;
    if (name.length == 0) {
      setIsEmptyName(true)
      passed = false;
    }
    if (phone.length == 0) {
      setValid(false);
      passed = false;
    }
    if (address.length == 0) {
      setIsEmptyAddress(true);
      passed = false;
    }
    if (passed) {
      mail()
    } else setMessage("Please fill up the form correctly")
  }

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
          setMessage("Appointment request send")
          setPooperRun(true);
          clear()
        },
        (err) => {
          setMessage('FAILED...', err);
          clear()
        },
      );
  }
  function onChange(datee) {
    setDate(datee);
  }
  function clear() {
    setName("")
    setIsEmptyName(false)
    setPhone("")
    setValid(true)
    setAddress("")
    setIsEmptyAddress(false)
  }
  useEffect(() => {
    const handler = setTimeout(() => {
      const phonePattern = /^(98|97)\d{8}$/;
      (phonePattern.test(phone) | phone.length == 0) ? setValid(true) : setValid(false);
    }, 500);
    return () => clearTimeout(handler);
  }, [phone])
  useEffect(() => {
    if (name.length != 0) setIsEmptyName(false)
    if (address.length != 0) setIsEmptyAddress(false)
  }, [name, address])
  useEffect(() => {
    if (message.length == 0) return
    setMessageVisible(true)
    const handler = setTimeout(() => {
      setMessageVisible(false)
    }, 2000);
    return () => {
      clearTimeout(handler);
    }
  }, [message])

  return <section className="grid grid-cols-1 px-2 w-full  md:w-[70vw] md:grid-cols-13 " >
    <h3 className=" md:col-span-13  self-start font-heading font-bold text-lg text-main-black md:text-center md:text-3xl " >Book Appointment:</h3>
    <div className=" md:col-span-13 h-4 w-full flex justify-center items-center md:text-2xl md:h-6 " >
      {messageVisible ?
        <strong className="h-2 md:col-span-2 md:h-6" >{message}</strong>
        : null
      }
      <Poopers setRun={setPooperRun} run={pooperRun} />
    </div>
    <fieldset className={`rounded-lg h-15 md:h-17 flex items-center pl-3 border-2 md:col-start-2 md:col-span-5 ${!isEmptyName ? 'border-main-accent' : 'border-red-500'}`} >
      <legend className="text-main-black ml-2 font-heading font-semibold " >Name*</legend>
      <label htmlFor="name" className="text-main-accent w-full flex items-center gap-1.5" >
        <img src="/person.svg" className="size-4 md:size-5 " alt="person icon" /> |
        <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" className=" w-full focus:outline-0 font-semibold md:text-lg focus:text-main-black placeholder-main-accent placeholder:font-heading placeholder:font-semibold " required placeholder="Enter your name" />
      </label>
    </fieldset>
    <fieldset className="rounded-lg border-main-accent  h-15 md:h-17 flex items-center pl-3 border-2  md:col-start-8 md:col-span-5 " >
      <legend className="text-main-black ml-2 font-heading font-semibold " >Appointment Date*</legend>
      <label htmlFor="date" className="text-main-accent flex items-center gap-1.5" >
        <img src="/date.svg" className="size-4 md:size-5" alt="person icon" /> |
        <DatePicker selected={datee} id="date" showTimeSelect filterDate={date => getDay(date) !== 6}   dateFormat="MMMM d, yyyy h:mm aa" minDate={today} onChange={onChange} className="focus:outline-0 focus:text-main-black font-semibold md:text-lg w-full " />
      </label>
    </fieldset>
    <fieldset className={` rounded-lg h-15 pl-2 border-2 md:h-17 flex items-center md:col-span-5 md:col-start-2 ${valid ? 'border-main-accent' : 'border-red-500'}`}>
      <legend className="text-main-black ml-2 font-heading font-semibold " >Phone*</legend>
      <label htmlFor="phone" className="text-main-accent flex items-center gap-1.5" >
        <img src="/phone.svg" className="size-4 md:size-5" alt="person icon" /> |
        <input value={phone} onChange={e => setPhone(e.target.value)} type="text" id="phone" className="w-full focus:outline-0 md:text-lg font-semibold focus:text-main-black placeholder-main-accent placeholder:font-heading placeholder:font-semibold " required placeholder="Enter your phone" />
      </label>
    </fieldset>
    <fieldset className={`rounded-lg h-15 pl-3 border-2 md:h-17 flex items-center  md:col-span-5 md:col-start-8 ${!isEmptyAddress ? 'border-main-accent' : 'border-red-500'} `}  >
      <legend className="text-main-black ml-2 font-heading font-semibold" >Address*</legend>
      <label htmlFor="address" className="text-main-accent flex items-center gap-1.5" >
        <img src="/address.svg" className="size-4 md:size-5" alt="person icon" /> |
        <input value={address} onChange={e => { setAddress(e.target.value) }} type="text" id="address" className="w-full focus:outline-0 md:text-lg font-semibold focus:text-main-black placeholder-main-accent placeholder:font-heading placeholder:font-semibold " required placeholder="Enter your adddress" />
      </label>
    </fieldset>
    <button 
  onClick={validate} 
  className="h-10 mt-3 md:col-span-5 md:col-start-2 md:font-bold md:text-lg 
             rounded-2xl bg-main-accent text-main-background font-semibold 
             active:brightness-90 
             hover:brightness-105 hover:shadow-md hover:cursor-pointer 
             transition duration-200 ease-in-out"
>
  book
</button>

<button 
  onClick={clear} 
  className="h-10 mt-3 md:col-span-5 md:col-start-8 md:font-bold md:text-lg 
             rounded-2xl bg-main-background  border-main-accent text-main-accent font-semibold 
             active:brightness-90 
             hover:brightness-95 hover:shadow-md hover:cursor-pointer 
             transition duration-200 ease-in-out"
>
  clear
</button>

  </section >
}
export default Form;

