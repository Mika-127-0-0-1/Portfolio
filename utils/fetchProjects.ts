import { Project } from "@/typings";

export const fetchProject = async() => {
    const res = await fetch(`${process.env.SANITY_STUDIO_BASE_URL}/api/getProjects`);

    const data = await res.json();
    const projects: Project[] = data.projects;

    // colsole.log("fetcking", projects);
    return projects;
}