import { Experience } from "@/typings";

export const fetchExperiences = async() => {
    const res = await fetch(`${process.env.SANITY_STUDIO_BASE_URL}/api/getExperience`);

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    // colsole.log("fetcking", experiences);
    return experiences;
}