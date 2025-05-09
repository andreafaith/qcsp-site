
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { FileBarChart, Download } from 'lucide-react';

interface GenerateReportsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GenerateReportsDialog = ({ open, onOpenChange }: GenerateReportsDialogProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the report generation
    toast.success('Report generated successfully');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileBarChart className="h-5 w-5 text-qcsp-primary" />
            Generate Reports
          </DialogTitle>
          <DialogDescription>
            Generate statistical reports for QCSP analytics.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="report-type">Report Type</Label>
              <select 
                id="report-type" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qcsp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="membership">Membership Statistics</option>
                <option value="event">Event Participation</option>
                <option value="activity">Member Activity</option>
                <option value="resource">Resource Usage</option>
                <option value="financial">Financial Summary</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="report-from">Date From</Label>
                <input 
                  type="date" 
                  id="report-from" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qcsp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="report-to">Date To</Label>
                <input 
                  type="date" 
                  id="report-to" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qcsp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="report-format">Format</Label>
              <select 
                id="report-format" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qcsp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="pdf">PDF Report</option>
                <option value="excel">Excel Spreadsheet</option>
                <option value="csv">CSV File</option>
              </select>
            </div>
            
            <div className="space-y-3 p-4 bg-gray-50 rounded-md">
              <p className="text-sm font-medium text-gray-900">Available Reports</p>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                <div>
                  <p className="text-sm font-medium">Monthly Membership Report</p>
                  <p className="text-xs text-gray-500">Last generated: May 1, 2025</p>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 rounded">
                <div>
                  <p className="text-sm font-medium">Q1 Event Participation</p>
                  <p className="text-xs text-gray-500">Last generated: Apr 5, 2025</p>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-qcsp-primary hover:bg-qcsp-primary-dark">
              Generate Report
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateReportsDialog;
