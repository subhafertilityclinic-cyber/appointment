const Experts = () => {
  return (
    <section className="w-full px-6 flex flex-col items-center bg-gray-50">
      <div className="text-center max-w-3xl mt-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Meet Your Fertility Specialist
        </h2>
        <p className="text-lg text-gray-600">
          Dr. Subha Shrestha brings over a decade of expertise in reproductive health, helping couples overcome infertility challenges with compassion and advanced medical care.
        </p>
      </div>

    <div className="mt-12 mb-16 flex flex-col lg:flex-row items-start gap-8 w-full max-w-6xl">

        
        <div className="bg-white shadow-md rounded-2xl p-6 flex-1">
          <div className="flex flex-col items-center">
            <div className="relative">
              <img 
                src="/doc.jpeg" 
                className="w-28 h-28 rounded-full border-4 border-cyan-800" 
                alt="Dr. Subha Shrestha" 
              />
              <p className="absolute bottom-0 left-2 top-[89px] bg-cyan-800 rounded-lg text-white text-[10px] px-3 py-1">
                NMC No: 6395
              </p>
            </div>

            <h3 className="mt-5 text-2xl font-bold text-cyan-800">Dr. Subha Shrestha</h3>
            <h5 className="text-cyan-800 mt-2 font-semibold">Fertility Expert</h5>
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
            <p className="font-semibold text-cyan-800">Currently Practicing</p>
            <p className="text-sm text-gray-600">Bharatpur, Chitwan</p>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button className="border border-cyan-800 rounded-3xl py-2 font-semibold hover:bg-cyan-50">
              Learn More About Dr. Subha
            </button>
            <button className="bg-cyan-800 text-white rounded-3xl py-2 font-semibold hover:bg-cyan-900">
              Book Consultation
            </button>
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

export default Experts
