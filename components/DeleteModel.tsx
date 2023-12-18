import { useRouter } from "next/navigation";
import Model from "./Model";
import useDeleteModel from "@/hooks/useDeleteModel";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";

const DeleteModel = () => {
  const router = useRouter();
  const supabase = useSupabaseClient();
  const { onClose, isOpen } = useDeleteModel();

  const handleDelete = async () => {
    try {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();

      if (sessionError) throw sessionError.message;
      if (!sessionData || !sessionData.session?.user)
        throw "No session data or user found.";

      const sessionUser = sessionData.session.user.id;
      if (!sessionUser) throw "Current user not found.";

      const { error: deleteSongsError } = await supabase
        .from("songs")
        .delete()
        .eq("user_id", sessionUser);
      if (deleteSongsError)
        throw `Delete songs error: ${deleteSongsError.message}`;

      const { error: deleteUserError } = await supabase
        .from("users")
        .delete()
        .eq("id", sessionUser);
      if (deleteUserError)
        throw `Delete user error: ${deleteUserError.message}`;

      await supabase.auth.admin.deleteUser(sessionUser)
      await supabase.auth.signOut();
      onClose();
      return router.push("/");
    } catch (error) {
      toast.error(String(error));
    }
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
