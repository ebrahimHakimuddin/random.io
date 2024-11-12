
import db from ".";
import { usersTable } from "./schema";

export default async function getCards () {
    const data = await db.select().from(usersTable);
    return data;
  };

export async function postCards (formData:any){
  const posted_data = await db.insert(usersTable).values({
    appName: formData.get("appName") as string,
    imgLink: formData.get("imgLink") as string,
    route: formData.get("appRoute") as string,
    desc: formData.get("appDesc") as string,
  });
  // return true;
}