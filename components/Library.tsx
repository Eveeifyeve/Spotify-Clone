"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModel from "@/hooks/useAuthModel";
import { useUser } from "@/hooks/useUser";
import useUploadModel from "@/hooks/useUploadModel";
import { Song } from "@/types";
import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
}

const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModel = useAuthModel();
  const uploadModel = useUploadModel();
  const { user, subscription } = useUser();
  const onClick = () => {
    if (!user) {
      return authModel.onOpen();
    }

    return uploadModel.onOpen();
  };
  return (
    <div className="flex flex-col">
      <div className="flex item-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition "
        />
      </div>
      <div className="flex flex-col gap-y-4 mt-4 px-3">
        {songs?.map((item) => (
          <>
            <MediaItem onClick={() => {}} key={item.id} data={item} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Library;
