import React from 'react';

const ErrorPage = () => {
  return (
    <div className="bg-light py-6 my-6 mt-0 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
     
      <div className="text-center animate-bounce mb-10">
        <h1 className="text-6xl font-bold mb-4">404 Error</h1>
        <ol className="flex justify-center space-x-4 mb-0">
          <li className="breadcrumb-item">
            <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/pages" className="text-blue-600 hover:text-blue-800">Pages</a>
          </li>
          <li className="breadcrumb-item text-gray-700" aria-current="page">404 Error</li>
        </ol>
      </div>

    
      <div className="text-center mt-20 gap-y-10">
        <i className="bi bi-exclamation-triangle text-primary text-7xl mb-4"></i>
        <h1 className="text-7xl font-bold mb-4">404</h1>
        <h2 className="mb-4 text-3xl">Page Not Found</h2>
        <p className="mb-6 text-gray-600">
          We’re sorry, the page you have looked for does not exist on our website! Maybe go to our home page or try to use a search?
        </p>
        <a className="text-balance font-bold rounded-full py-5 px-6 hover:bg-black hover:text-[#d4a762] bg-[#d4a762] transition duration-300" href="/pages">
          Go Back To Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
