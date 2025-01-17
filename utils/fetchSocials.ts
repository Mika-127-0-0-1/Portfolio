import { Social } from "@/typings";

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.SANITY_STUDIO_BASE_URL}/api/getSocials`);

    const data = await res.json();
    const socials: Social[] = data.socials;

    // colsole.log("fetcking", socials);
    return socials;
}