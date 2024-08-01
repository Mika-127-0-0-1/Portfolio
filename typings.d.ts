interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageinfo";
    name: string;
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    phoneNumber: string;
    heroImage: Image;
    profilePic: Image;
}

export interface Technology extends SanityBody {
    _type: "skill";
    title: string;
    progress: number;
    image: Image;
}

export interface Skill extends SanityBody {
    _type: "skill";
    title: string;
    progress: number;
    image: Image;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    linkToBuild: string;
    summary: string;
    image: Image;
    technologies: Technology[];
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}
