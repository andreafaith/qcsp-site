
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Info } from "lucide-react";

const ColorSchemeShowcase = () => {
  return (
    <div className="p-6 space-y-12">
      <section>
        <h2 className="text-2xl font-montserrat font-light mb-4 text-qcsp-primary">QCSP Brand Color Palette</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Primary Color - Blues */}
          <div className="space-y-2">
            <h3 className="font-montserrat text-lg">Primary Colors (Blue)</h3>
            <div className="h-12 rounded-md bg-qcsp-primary flex items-center justify-center text-white">
              #1050CE - Primary
            </div>
            <div className="h-12 rounded-md bg-qcsp-primary-dark flex items-center justify-center text-white">
              #0F3F9E - Primary Dark
            </div>
            <div className="h-12 rounded-md bg-qcsp-primary-darker flex items-center justify-center text-white">
              #14377C - Primary Darker
            </div>
            <div className="h-12 rounded-md bg-qcsp-primary-darkest flex items-center justify-center text-white">
              #112C5F - Primary Darkest
            </div>
            <div className="h-12 rounded-md bg-qcsp-primary-deep flex items-center justify-center text-white">
              #0D1D3C - Primary Deep
            </div>
          </div>
          
          {/* Secondary Color - Yellows */}
          <div className="space-y-2">
            <h3 className="font-montserrat text-lg">Secondary Colors (Yellow)</h3>
            <div className="h-12 rounded-md bg-qcsp-secondary flex items-center justify-center text-qcsp-primary-deep">
              #84825E - Secondary
            </div>
            <div className="h-12 rounded-md bg-qcsp-secondary-light flex items-center justify-center text-qcsp-primary-deep">
              #ACA843 - Secondary Light
            </div>
            <div className="h-12 rounded-md bg-qcsp-secondary-lighter flex items-center justify-center text-qcsp-primary-deep">
              #CBC316 - Secondary Lighter
            </div>
            <div className="h-12 rounded-md bg-qcsp-secondary-lightest flex items-center justify-center text-qcsp-primary-deep">
              #DED400 - Secondary Lightest
            </div>
            <div className="h-12 rounded-md bg-qcsp-secondary-bright flex items-center justify-center text-qcsp-primary-deep">
              #E5DB00 - Secondary Bright
            </div>
          </div>
          
          {/* Tertiary Color - Reds */}
          <div className="space-y-2">
            <h3 className="font-montserrat text-lg">Tertiary Colors (Red)</h3>
            <div className="h-12 rounded-md bg-qcsp-tertiary flex items-center justify-center text-qcsp-primary-deep">
              #FFD3CF - Tertiary
            </div>
            <div className="h-12 rounded-md bg-qcsp-tertiary-dark flex items-center justify-center text-qcsp-primary-deep">
              #FF9B93 - Tertiary Dark
            </div>
            <div className="h-12 rounded-md bg-qcsp-tertiary-darker flex items-center justify-center text-white">
              #FF3727 - Tertiary Darker
            </div>
            <div className="h-12 rounded-md bg-qcsp-tertiary-darkest flex items-center justify-center text-white">
              #FF1300 - Tertiary Darkest
            </div>
            <div className="h-12 rounded-md bg-qcsp-tertiary-deep flex items-center justify-center text-white">
              #E91100 - Tertiary Deep
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-montserrat font-light mb-4 text-qcsp-primary">Typography</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="font-montserrat text-lg">Libre Caslon Text (Primary)</h3>
            <p className="font-libreCaslon text-4xl">Heading in Libre Caslon</p>
            <p className="font-libreCaslon text-lg">
              This is body text in Libre Caslon. It's used as the primary text throughout the application.
              The text should be legible and have good contrast against the background.
            </p>
            <p className="font-libreCaslon italic">This is italicized text in Libre Caslon.</p>
            <p className="font-libreCaslon font-bold">This is bold text in Libre Caslon.</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-montserrat text-lg">Montserrat Light (Accent)</h3>
            <p className="font-montserrat font-light text-4xl">Heading in Montserrat Light</p>
            <p className="font-montserrat font-light text-lg">
              This is body text in Montserrat Light. It's used for accents, buttons, and other UI elements.
              It provides a nice contrast to the primary font.
            </p>
            <p className="font-montserrat font-light italic">This is italicized text in Montserrat Light.</p>
            <p className="font-montserrat font-medium">This is medium weight text in Montserrat.</p>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-montserrat font-light mb-4 text-qcsp-primary">UI Components</h2>
        
        {/* Buttons */}
        <div className="mb-8">
          <h3 className="font-montserrat text-lg mb-4">Buttons</h3>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-qcsp-primary hover:bg-qcsp-primary-dark">Primary Button</Button>
            <Button variant="outline" className="border-qcsp-primary text-qcsp-primary hover:bg-qcsp-primary/10">Outline Button</Button>
            <Button className="bg-qcsp-tertiary-darker hover:bg-qcsp-tertiary-darkest">Danger Button</Button>
            <Button className="bg-qcsp-secondary-bright hover:bg-qcsp-secondary-lightest text-qcsp-primary-deep">Accent Button</Button>
            <Button variant="ghost" className="text-qcsp-primary hover:bg-qcsp-primary/10">Ghost Button</Button>
          </div>
        </div>
        
        {/* Cards */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="bg-qcsp-primary text-white">
              <CardTitle>Primary Card</CardTitle>
              <CardDescription className="text-white/80">Card with primary color header</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p>Content with regular styling and background</p>
            </CardContent>
          </Card>
          
          <Card className="border-qcsp-tertiary-darker">
            <CardHeader>
              <CardTitle className="text-qcsp-tertiary-darker">Tertiary Card</CardTitle>
              <CardDescription>Card with tertiary color accent</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p>Content with regular styling and background</p>
            </CardContent>
          </Card>
          
          <Card className="quantum-card">
            <CardHeader>
              <CardTitle>Quantum Card</CardTitle>
              <CardDescription>Card with quantum styling</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p>Content with backdrop blur and subtle border</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Badges */}
        <div className="mb-8">
          <h3 className="font-montserrat text-lg mb-4">Badges</h3>
          <div className="flex flex-wrap gap-4">
            <Badge className="bg-qcsp-primary">Primary</Badge>
            <Badge className="bg-qcsp-secondary text-qcsp-primary-deep">Secondary</Badge>
            <Badge className="bg-qcsp-tertiary-darker">Tertiary</Badge>
            <Badge className="bg-qcsp-secondary-bright text-qcsp-primary-deep">Accent</Badge>
            <Badge variant="outline" className="border-qcsp-primary text-qcsp-primary">Outline</Badge>
          </div>
        </div>
        
        {/* Alerts */}
        <div className="mb-8 space-y-4">
          <h3 className="font-montserrat text-lg mb-4">Alerts</h3>
          
          <Alert className="border-qcsp-primary/30 bg-qcsp-primary/5">
            <Info className="h-4 w-4 text-qcsp-primary" />
            <AlertTitle className="text-qcsp-primary">Information Alert</AlertTitle>
            <AlertDescription>
              This is an informational alert using the primary color.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-qcsp-tertiary-darker/30 bg-qcsp-tertiary/10">
            <AlertTriangle className="h-4 w-4 text-qcsp-tertiary-darker" />
            <AlertTitle className="text-qcsp-tertiary-darker">Warning Alert</AlertTitle>
            <AlertDescription>
              This is a warning alert using the tertiary color.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    </div>
  );
};

export default ColorSchemeShowcase;
