import { useRouter } from "next/navigation";
import Model from "./Model";
import useDeleteModel from "@/hooks/useDeleteModel";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";

const DeleteModel = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { onClose, isOpen } = useDeleteModel();

  // --------

  const handleDelete = async () => {
    const { data: sessionData, error: sessionError } =
      await supabase.auth.getSession();

    if (sessionError && !sessionData) {
      toast.error("Sorry we ran into an error.");
    }

    const currentUser = sessionData.session?.user.id;

    if (!currentUser) {
      toast.error("Current user not found.");
      return;
    }

    await supabase.auth.signOut();

    // Wait for the deletion operations to complete
    await supabase.from("songs").delete().eq("user_id", currentUser);
    await supabase.from("users").delete().eq("id", currentUser);
    await supabase.auth.admin.deleteUser(currentUser);
    onClose();
    router.push("/");
  };

  return (
    <Model
      title="Delete Account"
      description="Are you sure you want to delete your account?"
      isOpen={isOpen}
      onChange={onClose}
    >
      <button onClick={handleDelete}>Confirm Delete</button>
    </Model>
  );
};

export default DeleteModel;
