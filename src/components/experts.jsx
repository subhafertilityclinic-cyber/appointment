import { NavLink } from 'react-router';

const Experts = () => {
  return (
    <section className="w-full px-6 flex flex-col justify-center items-center ">
      <div className="text-center max-w-3xl mt-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Meet Your Fertility Specialist
        </h2>
        <p className="text-lg text-gray-600">
          Dr. Subha Shrestha brings over a decade of expertise in reproductive health, helping couples overcome infertility challenges with compassion and advanced medical care.
        </p>
      </div>

      <div className="mt-12 mb-16 flex flex-col md:flex-row items-center md:items-start gap-8 w-full max-w-6xl">


        <div className="bg-white shadow-md rounded-2xl p-6 flex-1">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src="/doc.jpeg"
                className="w-28 h-28 rounded-full border-4 border-main-accent"
                alt="Dr. Subha Shrestha"
              />
              <p className="absolute bottom-0 left-2 top-[89px] bg-main-accent rounded-lg text-white text-[10px] px-3 py-1">
                NMC No: 6395
              </p>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-main-accent">Dr. Subha Shrestha</h3>
            <h5 className="text-main-accent mt-2 font-semibold">Fertility Expert</h5>
            <p className="text-gray-600">Obstetrician & Gynecologist</p>
            <p className="text-gray-600">MD Obstetrics & Gynecology</p>
            <p className="text-gray-600">ART & IVF Fellowship Certified</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <img src="/graduation.png" className="w-6 h-6 mx-auto mb-2" alt="" />
              <h4 className="font-semibold">MBBS, MD</h4>
              <p className="text-sm text-gray-500">Kathmandu University</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <img src="/badge.png" className="w-6 h-6 mx-auto mb-2" alt="" />
              <h4 className="font-semibold">Gold Medal</h4>
              <p className="text-sm text-gray-500">Excellence Award 2013</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <img src="/like.png" className="w-6 h-6 mx-auto mb-2" alt="" />
              <h4 className="font-semibold">IVF Fellowship</h4>
              <p className="text-sm text-gray-500">Indira IVF, India</p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <img src="/user.png" className="w-6 h-6 mx-auto mb-2" alt="" />
              <h4 className="font-semibold">10+ Years</h4>
              <p className="text-sm text-gray-500">Clinical Experience</p>
            </div>
          </div>

          <div className="mt-6 bg-gray-100 rounded-lg p-3 text-center">
            <p className="font-semibold text-main-accent">Currently Practicing</p>
            <p className="text-sm text-gray-600">Bharatpur, Chitwan</p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? " bg-main-accent text-main-background rounded-3xl py-2 font-semibold text-center"
                  : "font-heading font-semibold text-main-black text-center"
              }
            >
              Learn More About Dr. Subha
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-main-accent text-main-background rounded-3xl py-2 font-semibold text-center"
                  : "font-heading font-semibold text-main-black text-center"
              }
            >
              Book Consultation
            </NavLink>

          </div>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Why Choose Dr. Subha Shrestha?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <img src="/checked.png" className="w-5 h-5 mt-1" alt="check" />
              <span>Nepal Medical Council Registered Specialist</span>
            </li>
            <li className="flex items-start gap-2">
              <img src="/checked.png" className="w-5 h-5 mt-1" alt="check" />
              <span>NESOG Logic Gold Medal Winner (2013)</span>
            </li>
            <li className="flex items-start gap-2">
              <img src="/checked.png" className="w-5 h-5 mt-1" alt="check" />
              <span>Certified IVF Fellowship from Indira IVF, India</span>
            </li>
            <li className="flex items-start gap-2">
              <img src="/checked.png" className="w-5 h-5 mt-1" alt="check" />
              <span>Over 10 years of clinical experience</span>
            </li>
            <li className="flex items-start gap-2">
              <img src="/checked.png" className="w-5 h-5 mt-1" alt="check" />
              <span>Advanced training in reproductive health</span>
            </li>
            <li className="flex items-start gap-2">
              <img src="/checked.png" className="w-5 h-5 mt-1" alt="check" />
              <span>Compassionate, ethical practice approach</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

const Experts2 = () => {
  return <section className="flex justify-center items-center w-full">
    <div className="w-[75vw] bg-white shadow-md rounded-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className='p-5'>
          <h2 className="text-3xl font-bold text-main-black mb-6">
            Professional Background
          </h2>
          <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              <strong className="text-main-accent">Dr. Subha Shrestha</strong> is a Nepal Medical Council
              registered Obstetrician & Gynecologist who has been practicing for over a decade in Nepal.
              She is a certified and registered IVF and Fertility Specialist with advanced training in
              reproductive health and infertility management.
            </p>
            <p>
              Currently practicing in <strong className="text-main-accent">Bharatpur, Chitwan</strong> since the beginning of her career,
              Dr. Subha completed her medical education from <strong className="text-main-accent">Kathmandu University</strong> and was
              awarded the prestigious <strong className="text-main-accent">NESOG Logic Gold Medal in 2013</strong> for her excellence in the field.
            </p>
            <p>
              She is a registered Fertility specialist of Nepal with a certified one-year fellowship from
              the renowned <strong className="text-main-accent">Indira IVF of India</strong>, which has equipped her with the latest
              techniques and protocols in assisted reproductive technology.
            </p>
            <p>
              Dr. Subha maintains faith in ethical practices and is dedicated to empowering couples to
              overcome infertility challenges along with addressing all problems related to women's health.
              Her compassionate approach and extensive experience have made her a trusted name in the field.
            </p>
          </div>
        </div>

        <div className="clinic-card p-8">
          <h3 className="text-2xl font-bold text-main-black mb-6 flex items-center gap-3">
            Education & Certifications
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-main-accent pl-4">
              <h4 className="font-bold text-main-black">MBBS</h4>
              <p className="text-gray-600">Kathmandu University</p>
              <p className="text-sm text-main-accent">Bachelor of Medicine, Bachelor of Surgery</p>
            </div>
            <div className="border-l-4 border-main-accent pl-4">
              <h4 className="font-bold text-main-black">MD Obstetrics & Gynecology</h4>
              <p className="text-gray-600">Kathmandu University</p>
              <p className="text-sm text-main-accent">Specialized Medical Degree</p>
            </div>
            <div className="border-l-4 border-main-accent pl-4">
              <h4 className="font-bold text-main-black">ART & IVF Fellowship</h4>
              <p className="text-gray-600">Indira IVF, India</p>
              <p className="text-sm text-main-accent">Advanced Reproductive Technology Training</p>
            </div>
            <div className="border-l-4 border-main-accent pl-4">
              <h4 className="font-bold text-main-black">Nepal Medical Council Registration</h4>
              <p className="text-gray-600">Registration No: 6395</p>
              <p className="text-sm text-main-accent">Licensed Medical Practitioner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Experts

export { Experts2 }
