
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { UserPlus } from 'lucide-react';

interface AddUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddUserDialog = ({ open, onOpenChange }: AddUserDialogProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the user creation
    toast.success('User added successfully');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-qcsp-primary" />
            Add New User
          </DialogTitle>
          <DialogDescription>
            Create a new user account for QCSP membership.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="user-name">Full Name</Label>
              <Input id="user-name" required placeholder="Enter user's full name" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="user-email">Email Address</Label>
              <Input id="user-email" type="email" required placeholder="Enter email address" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="user-password">Password</Label>
                <Input id="user-password" type="password" required placeholder="Set password" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="user-confirm-password">Confirm Password</Label>
                <Input id="user-confirm-password" type="password" required placeholder="Confirm password" />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="user-type">Membership Type</Label>
              <select 
                id="user-type" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qcsp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="individual">Individual</option>
                <option value="student">Student</option>
                <option value="institutional">Institutional</option>
              </select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="user-role">User Role</Label>
              <select 
                id="user-role" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qcsp-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            
            <div className="flex items-start space-x-2">
              <Input id="send-welcome" type="checkbox" className="mt-1 h-4 w-4" checked />
              <Label htmlFor="send-welcome" className="text-sm">Send welcome email with login details</Label>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-qcsp-primary hover:bg-qcsp-primary-dark">
              Add User
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
