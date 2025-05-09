
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Calendar } from 'lucide-react';

interface CreateEventDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateEventDialog = ({ open, onOpenChange }: CreateEventDialogProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the actual event creation
    toast.success('Event created successfully');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-qcsp-primary" />
            Create New Event
          </DialogTitle>
          <DialogDescription>
            Fill out the form below to create a new event for QCSP members.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="event-title">Event Title</Label>
              <Input id="event-title" required placeholder="Enter event title" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="event-date">Date</Label>
                <Input id="event-date" type="date" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-time">Time</Label>
                <Input id="event-time" type="time" required />
              </div>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="event-venue">Venue</Label>
              <Input id="event-venue" required placeholder="Enter venue or online platform" />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="event-description">Description</Label>
              <Textarea id="event-description" placeholder="Describe the event" rows={4} />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="event-capacity">Capacity</Label>
              <Input id="event-capacity" type="number" min={1} placeholder="Maximum number of participants" />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-qcsp-primary hover:bg-qcsp-primary-dark">
              Create Event
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEventDialog;
