import { FollowerInfo } from "@/lib/types";
import React from "react";
import { useToast } from "./ui/use-toast";

interface FollowButtonProps {
  userId: string;
  initialState: FollowerInfo;
}

const FollowButton: React.FC<FollowButtonProps> = ({
  userId,
  initialState,
}) => {
  const { toast } = useToast();

  return <div>FollowButton</div>;
};

export default FollowButton;
