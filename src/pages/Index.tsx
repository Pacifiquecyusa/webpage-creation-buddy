
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Website</h1>
          <p className="text-lg text-gray-600 mb-6">
            This is a beautiful landing page created with React and Tailwind CSS.
            Get started by customizing this page to fit your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Get Started
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 text-white text-center">
        <p className="text-lg font-medium">Ready to create something amazing?</p>
        <p className="text-sm opacity-80 mt-2">Built with React, TypeScript and Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Index;
