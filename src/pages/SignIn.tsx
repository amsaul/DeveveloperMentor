import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';

/**
 * SignIn page component
 * Currently displays a contact form for early access requests
 */
export const SignIn = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background-dark py-12">
      <div className="max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Get Early Access</h1>
          <p className="text-gray-300">
            Sign up for early access to connect with expert mentors.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};