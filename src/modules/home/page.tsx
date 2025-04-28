export const HomePage = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">JobAlert</h1>
          <div className="space-x-4">
            <a href="/login" className="text-gray-600 hover:text-blue-600">
              Login
            </a>
            <a
              href="/jobs"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>

    <main className="max-w-7xl mx-auto px-4 py-16">
      <section className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-6">
          Your Smart Job Search Companion
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Get real-time alerts for your dream jobs with intelligent filters and
          personalized recommendations
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/register"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="px-8 py-3 rounded-lg text-lg border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Learn More
          </a>
        </div>
      </section>

      <section id="features" className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
          <p className="text-gray-600">
            Receive instant notifications when new jobs match your preferences
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="h-12 w-12 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Advanced Filters</h3>
          <p className="text-gray-600">
            Filter by location, salary range, experience level and more
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="h-12 w-12 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Application Tracking</h3>
          <p className="text-gray-600">
            Manage all your job applications in one place with status updates
          </p>
        </div>
      </section>

      <section className="bg-blue-600 text-white rounded-2xl p-12 text-center mb-24">
        <h2 className="text-3xl font-bold mb-4">Join 10,000+ Job Seekers</h2>
        <p className="text-lg mb-8">
          Start your journey to finding the perfect job today
        </p>
        <a
          href="/register"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50"
        >
          Get Started Now
        </a>
      </section>
    </main>

    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-gray-400">
          © 2024 JobAlert. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
);
