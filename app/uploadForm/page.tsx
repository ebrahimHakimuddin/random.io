import SignIn from "../components/signInButton/signInButton";
import { auth } from "../auth";
import SignOut from "../signOutButton/signOutButton";

export default async function uploadForm() {
  const session = await auth();
  // console.log(session);
  if (!session) {
    return (
      <div className="flex h-screen justify-center items-center">
        <SignIn />
      </div>
    );
  }

  if (session?.user!.name === process.env.AUTH_USER_UPLOADFORM) {
    return (
      <div className="flex flex-col p-20 h-screen justify-center items-center">
        Authorised User
        <SignOut />
      </div>
    );
  } else {
    <div className="flex flex-col h-screen justify-center items-center">
      Unauthorised User
      <SignOut />
    </div>;
  }
}
