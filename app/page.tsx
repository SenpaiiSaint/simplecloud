export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
              Empower Your Business with SimpleCloud
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              A sleek cloud platform that brings all your business data into one intuitive dashboard.
            </p>
            <div className="mt-8">
              <a
                href="/login"
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            {/* You can insert an Image component here if desired */}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800">Features</h2>
            <p className="mt-4 text-center text-gray-600">
              Discover the benefits of our powerful cloud platform.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Real-time Analytics</h3>
                <p className="mt-2 text-gray-600">
                  Monitor your data live with dynamic dashboards.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Seamless Integration</h3>
                <p className="mt-2 text-gray-600">
                  Connect easily with your favorite tools and services.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Secure & Scalable</h3>
                <p className="mt-2 text-gray-600">
                  Built on robust cloud infrastructure ensuring top-notch security.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} SimpleSaaS. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
