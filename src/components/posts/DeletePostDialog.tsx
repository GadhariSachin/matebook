import { PostData } from "@/lib/types";
import React from "react";
import { useDeletePostMutation } from "./mutations";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import LoadingButton from "../ui/LoadingButton";
import { Button } from "../ui/button";

interface DeletePostDialogProps {
  post: PostData;
  open: boolean;
  onClose: () => void;
}

const DeletePostDialog: React.FC<DeletePostDialogProps> = ({
  post,
  open,
  onClose,
}) => {
  const mutation = useDeletePostMutation();

  function handleOpenChange(open: boolean) {
    if (!open || !mutation.isPending) {
      onClose();
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>Delete Post</DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this post?
        </DialogDescription>
        <DialogFooter>
          <LoadingButton
            variant={"destructive"}
            onClick={() => mutation.mutate(post.id, { onSuccess: onClose })}
            loading={mutation.isPending}
          >
            Delete
          </LoadingButton>
          <Button
            variant="outline"
            onClick={onClose}
            disabled={mutation.isPending}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeletePostDialog;
