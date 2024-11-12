import { signOut } from "../auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <div className="w-30">
        <button type="submit" className="btn btn-secondary rounded text-xl text-nowrap">
          Sign Out
        </button>
      </div>
    </form>
  );
}
