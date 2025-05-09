
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Send, Bell } from 'lucide-react';

interface SendAnnouncementDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SendAnnouncementDialog = ({ open, onOpenChange }: SendAnnouncementDialogProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle sending the announcement
    toast.success('Announcement sent successfully');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-qcsp-primary" />
            Send Announcement
          </DialogTitle>
          <DialogDescription>
            Send an announcement to QCSP members.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="announcement-title">Announcement Title</Label>
              <Input id="announcement-title" required placeholder="Enter announcement title" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="announcement-recipients">Recipients</Label>
              <select 
                id="announcement-recipients" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qcsp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="all">All Members</option>
                <option value="individual">Individual Members</option>
                <option value="institutional">Institutional Members</option>
                <option value="student">Student Members</option>
              </select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="announcement-content">Announcement Content</Label>
              <Textarea 
                id="announcement-content" 
                placeholder="Write your announcement here..." 
                rows={5} 
                required
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="announcement-priority">Priority Level</Label>
              <select 
                id="announcement-priority" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qcsp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="normal">Normal</option>
                <option value="important">Important</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            
            <div className="flex items-start space-x-2">
              <Input id="announcement-email" type="checkbox" className="mt-1 h-4 w-4" />
              <Label htmlFor="announcement-email" className="text-sm">Also send via email</Label>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-qcsp-primary hover:bg-qcsp-primary-dark flex items-center gap-2">
              <Send className="h-4 w-4" /> Send Announcement
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SendAnnouncementDialog;
