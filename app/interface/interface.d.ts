interface IProject {
    name: string;
    isResponsive: boolean;
    time: string;
    description: string;
    stacks: string;
    attachment: string[];
    link: string;
    contributor: IContributor[] | [];
}

interface IContributor {
    name: string;
    linkedin: string;
}