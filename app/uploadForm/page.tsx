// "use client"
import SignIn from "../components/signInButton/signInButton";
import { auth } from "../auth";
import SignOut from "../signOutButton/signOutButton";
import { postCards } from "../db/queries";

export default async function uploadForm() {
  const session = await auth();
  if (!session) {
    return (
      <div className="flex h-screen justify-center items-center">
        <SignIn />
      </div>
    );
  }

  if (session?.user!.name === process.env.AUTH_USER_UPLOADFORM) {
    return (
      <div className="flex flex-col  h-screen justify-center items-center">
        <form
          action={async (formData) => {
            "use server";
            const result = await postCards(formData);
          }}
        className="p-5">
          <div className="card p-5 bg-base-500 border-2">
            <div className="p-5">
              <input
                name="appName"
                type="text"
                placeholder="App Name"
                className="input input-bordered p-2  w-full max-w-xs"
              />
            </div>
            <div className="p-5">
              <input
                name="appRoute"
                type="text"
                placeholder="App Route"
                className="input input-bordered p-2  w-full max-w-xs"
              />
            </div>
            <div className="p-5">
              <input
                name="imgLink"
                type="text"
                placeholder="Image Link"
                className="input input-bordered size-12 p-2 w-full max-w-xs"
              />
            </div>
            <div className="p-5">
              <textarea
                name="appDesc"
                placeholder="App Description"
                className="input input-bordered size-24 p-2 w-full max-w-xs"
              />
            </div>
            <div className="flex flex-row justify-center">
              <div className="w-30">
                <button
                  type="submit"
                  className="btn btn-primary rounded text-xl text-nowrap"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
        <SignOut />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col h-screen justify-center items-center">
        Unauthorised User
        <SignOut />
      </div>
    );
  }
}
