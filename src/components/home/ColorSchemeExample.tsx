
import React from 'react';
import { Button } from "@/components/ui/button";

const ColorSchemeExample: React.FC = () => {
  return (
    <div className="rounded-lg border border-qcsp-primary p-6 mb-8">
      <h2 className="text-2xl font-montserrat font-light mb-4 text-qcsp-primary">
        QCSP Brand Colors
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="h-16 rounded-md bg-qcsp-primary flex items-center justify-center text-white">
          Primary Blue (#1050CE)
        </div>
        <div className="h-16 rounded-md bg-qcsp-secondary flex items-center justify-center text-black">
          Secondary Yellow (#84825E)
        </div>
        <div className="h-16 rounded-md bg-qcsp-tertiary-darker flex items-center justify-center text-white">
          Tertiary Red (#FF3727)
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 justify-center">
        <Button className="bg-qcsp-primary hover:bg-qcsp-primary-dark">
          Primary Button
        </Button>
        <Button className="bg-qcsp-secondary text-black hover:bg-qcsp-secondary-light">
          Secondary Button
        </Button>
        <Button className="bg-qcsp-tertiary-darker hover:bg-qcsp-tertiary-deep">
          Tertiary Button
        </Button>
      </div>
    </div>
  );
};

export default ColorSchemeExample;
