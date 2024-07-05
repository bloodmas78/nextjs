"use client";

import Link from "next/link";

export default function Error(){
    return <div>
        <h2>Error... Go to Home</h2>
        <Link href="/" />
    </div>
}