import DeleteAccount from "./components/DeleteAccount";

export const revalidate = 0;

const Liked = () => {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <DeleteAccount />
    </div>
  );
};

export default Liked;
