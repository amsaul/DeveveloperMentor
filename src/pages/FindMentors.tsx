import React from 'react';
import { Construction } from 'lucide-react';

/**
 * FindMentors page component
 * Displays a coming soon message for the mentor search feature
 */
export const FindMentors = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background-dark">
      <div className="text-center px-4">
        <Construction className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Coming Soon</h1>
        <p className="text-gray-300 max-w-md mx-auto">
          We're working hard to bring you the best mentor matching experience. 
          Check back soon to connect with expert developers worldwide.
        </p>
      </div>
    </div>
  );
};