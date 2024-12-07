import aboutImage from "../assets/image/aboutus.jpg"; // Make sure to replace with your image path

function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left: Description */}
        <div className="lg:w-1/2 p-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            About Us
          </h2>
         
          <p className="text-lg text-gray-600">
          We offer personalized pregnancy care plans, expert consultations, and real-time appointment scheduling, all designed to make your experience as smooth and informed as possible. Our platform also connects you with a supportive community of parents, ensuring you're never alone in your journey.
          </p>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={aboutImage}
            alt="About Us"
            className="object-cover w-full h-96 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
