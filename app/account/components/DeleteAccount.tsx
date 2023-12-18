"use client";

import Button from "@/components/Button";
import useDeleteModel from "@/hooks/useDeleteModel";


const DeleteAccountButton = () => {
  const { onOpen } = useDeleteModel();

  return (
    <Button
      onClick={onOpen}
      className="bg-red-600 w-[200px] text-black font-semibold"
    >
      Delete your account
    </Button>
  );
};

export default DeleteAccountButton;
