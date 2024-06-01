"use client";
import axios from "axios";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useEffect, useRef } from "react";


const Navbar = () => {
  const router = useRouter();

  const [loginbox, setloginbox] = useState<boolean>(false);

  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getRandomNumber = () => Math.floor(Math.random() * 1000);
        const apiUrl = `https://api.multiavatar.com/${getRandomNumber()}`;

        const response = await axios.get(apiUrl);
        const svgDataUri = `data:image/svg+xml,${encodeURIComponent(
          response.data
        )}`;
        setAvatarUrl(svgDataUri);
      } catch (error) {
        console.error("Error fetching avatar:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex gap-4">

        <Link href="/profile">
          {true && (
            <img src="/login_logo.png" alt="Avatar" style={{ width: 80 }} />
          )}{" "}
        </Link>

        <ConnectWallet />

      
      </div>
    </div>
  );
};

export default Navbar;