
import React from 'react';
import RightPanelContact from '../components/common/ToolbarSection/GetInTouch';

const Toolbar = () => {
  return (
    // Apply bg-white and min-h-screen here
    <div className="bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-start gap-8 w-full px-4 py-8">
        
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">This is the Toolbar Page</h1>
          {/* Your main toolbar content */}
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-[350px]">
          <RightPanelContact />
        </div>

      </div>
    </div>
  );
};

export default Toolbar;
