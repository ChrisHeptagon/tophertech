import Image from "next/image"
import Link from "next/link"
import React from "react";

export const Header = () => {
    return (
        <div className="bg-[#3a5eff]">
            <div className="flex flex-wrap items-center justify-between p-4">
                <div className="flex items-center">
                    <Link className="flex items-center" href="/">
                            <Image src="/images/tophertech_logo.svg" width="100" height="100" alt="TopherTech Logo" />
                            <span className="text-[#000000] font-bold text-2xl">TopherTech</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
