import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center animate__animated animate__fadeIn">
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
          404
        </h1>
        <div className="bg-blue-100 text-blue-600 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Oops! Something is missing.
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-lg">
            The page you are looking for does not exist or has been moved. 
            Check the URL or head back to the homepage.
          </p>
        </div>
        <div className="mt-10">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-200"
          >
            <svg 
              className="w-5 h-5 mr-2 -ml-1 transition-all duration-200 group-hover:-translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}