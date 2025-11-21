"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export function TestComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Interactive Counter</h2>
      <div className="flex flex-col items-center gap-6">
        <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">{count}</p>
        <div className="flex gap-4">
          <Button 
            onClick={() => setCount(c => c - 1)}
            variant="outline"
          >
            Decrement
          </Button>
          <Button 
            onClick={() => setCount(0)}
            variant="ghost"
          >
            Reset
          </Button>
          <Button 
            onClick={() => setCount(c => c + 1)}
            variant="default"
          >
            Increment
          </Button>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-center mt-4">
          This is a simple interactive component to demonstrate state management in React.
        </p>
      </div>
    </div>
  );
}