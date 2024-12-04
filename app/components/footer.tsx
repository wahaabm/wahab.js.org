"use client";

import React from "react";
import { useTheme } from "next-themes"; // Import the hook

import {
    FaXTwitter,
    FaGithub,
    FaInstagram,
    FaRss,
    FaLinkedinIn,
} from "react-icons/fa6";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="text-xl md:text-2xl lg:text-3xl" />
        </a>
    );
}

function SocialLinks() {
    return (
        <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90 ">
            <SocialLink href={socialLinks.email} icon={HiOutlineMail} />
            <SocialLink href={socialLinks.github} icon={LuGithub} />
            <SocialLink href={socialLinks.linkedin} icon={LuLinkedin} />
            <a href="/rss.xml" target="_self">
                <FaRss className="text-xl md:text-2xl lg:text-3xl" />
            </a>
        </div>
    );
}

export default function Footer() {
    const { theme } = useTheme(); // Get current theme (light or dark)

    return (
        <small className="block pt-5 lg:mt-24 mt-16 text-[#1C1C1C] dark:text-[#D4D4D4] border-t-2 border-gray-300 dark:border-gray-700">
            <div className="flex items-center justify-between ">
                <div className="flex flex-row items-center space-x-2">
                    <span
                        className={
                            theme === "dark"
                                ? "ic--round-copyright-dark"
                                : "ic--round-copyright"
                        }
                    ></span>
                    <time className="text-base">{YEAR}</time>
                    <span>|</span>
                    <a
                        className="no-underline text-base"
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {metaData.title}
                    </a>
                </div>
                <SocialLinks />
            </div>

            <style jsx>{`
                @media screen and (max-width: 480px) {
                    small {
                        padding-top: 2rem;
                        padding-bottom: 4rem;
                    }
                }
            `}</style>
        </small>
    );
}
