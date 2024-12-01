import React from 'react';
import { ArrowRight, Users, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Home page component
 * Landing page with hero section and feature highlights
 */
export const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Find Your Perfect</span>
              <span className="block text-primary">Developer Mentor</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Connect with experienced developers who can guide you through your coding journey.
              Get personalized mentorship to accelerate your career growth.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/mentors"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-hover md:py-4 md:text-lg md:px-10"
                >
                  Find a Mentor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Why Choose DevMentor?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We provide the tools and connections you need to succeed
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Expert Mentors Feature */}
              <div className="pt-6">
                <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <Users className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Expert Mentors</h3>
                    <p className="mt-5 text-base text-gray-300">
                      Connect with experienced developers from top companies worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Flexible Scheduling Feature */}
              <div className="pt-6">
                <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <Calendar className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Flexible Scheduling</h3>
                    <p className="mt-5 text-base text-gray-300">
                      Book sessions that fit your schedule with our easy-to-use platform.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personalized Growth Feature */}
              <div className="pt-6">
                <div className="flow-root bg-gray-800 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-primary rounded-md shadow-lg">
                        <Star className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight">Personalized Growth</h3>
                    <p className="mt-5 text-base text-gray-300">
                      Get tailored guidance and feedback to accelerate your learning journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};