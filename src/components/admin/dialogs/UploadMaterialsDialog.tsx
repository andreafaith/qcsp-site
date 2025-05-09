
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Upload, File } from 'lucide-react';

interface UploadMaterialsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const UploadMaterialsDialog = ({ open, onOpenChange }: UploadMaterialsDialogProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the actual material upload
    toast.success('Materials uploaded successfully');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-qcsp-primary" />
            Upload Learning Materials
          </DialogTitle>
          <DialogDescription>
            Upload new quantum computing learning materials for members.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="material-title">Material Title</Label>
              <Input id="material-title" required placeholder="Enter material title" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="material-category">Category</Label>
              <select 
                id="material-category" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qcsp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="basics">Quantum Computing Basics</option>
                <option value="algorithms">Quantum Algorithms</option>
                <option value="hardware">Quantum Hardware</option>
                <option value="software">Quantum Software Development</option>
                <option value="ml">Quantum Machine Learning</option>
                <option value="error">Quantum Error Correction</option>
              </select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="material-description">Description</Label>
              <Textarea id="material-description" placeholder="Describe the material" rows={3} />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="material-file">Upload File</Label>
              <div className="flex items-center justify-center w-full">
                <label htmlFor="material-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <File className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500">PDF, PPT, ZIP or other files (MAX. 100MB)</p>
                  </div>
                  <Input id="material-file" type="file" className="hidden" />
                </label>
              </div> 
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="material-access">Access Level</Label>
              <select 
                id="material-access" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qcsp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">All Members</option>
                <option value="premium">Premium Members Only</option>
                <option value="institutional">Institutional Members</option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-qcsp-primary hover:bg-qcsp-primary-dark">
              Upload Material
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadMaterialsDialog;
