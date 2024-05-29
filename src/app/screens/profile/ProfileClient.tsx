import { useEffect, useState } from "react";
import { supabase } from "../../crud/createClient";
import { Hidden } from "@mui/material";
import HeaderClient from "../../components/headerclient/HeaderClient";
import SmallHeaderClient from "../../components/smallheaderclient/SmallHeaderClient";

interface Users {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
}

function ProfileClient() {
  const [user, setUser] = useState<Users | null>(null);

  async function fetchUser() {
    const { data, error } = await supabase
      .from("user")
      .select("*")
      .eq("role", "client")
      .single();

    if (error) {
      console.error("Error fetching user:", error);
      return;
    }

    setUser(data);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Hidden smDown>
        <HeaderClient />
      </Hidden>
      <Hidden smUp>
        <SmallHeaderClient />
      </Hidden>
      <div className="pt-40 px-8 md:px-10">
        <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-8">
          <div>
            <img
              className="w-40 md:w-full"
              src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
              alt="profile"
            />
          </div>
          <div>
            {user && (
              <div className="flex flex-col pt-8 sm:pt-0">
                <p className="text-black font-medium text-xl sm:text-2xl md:text-3xl">
                  Nombre
                </p>
                <p className="text-black font-bold text-xl sm:text-5xl md:text-4xl pb-8">
                  {user.name}
                </p>
                <p className="text-black font-medium text-xl sm:text-2xl md:text-3xl">
                  Email
                </p>
                <p className="text-black font-bold text-xl sm:text-5xl md:text-4xl pb-8">
                  {user.email}
                </p>
                <p className="text-black font-medium text-xl sm:text-2xl md:text-3xl">
                  Role
                </p>
                <p className="text-black font-bold text-xl sm:text-5xl md:text-4xl">
                  {user.role}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileClient;
