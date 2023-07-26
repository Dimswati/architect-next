type Testimonial = {
    id: number;
    testimonial: string;
    imageUrl: string;
    author: string;
    service: string;
}

type Project = {
    id: number;
    title: string;
    tags: string[];
    imageUrl: string;
}

type Client = {
    id: number;
    clientName: string;
    imageUrl: string;
}

type TeamMember = {
    id: number;
    name: string;
    imageUrl: string;
    position: string;
    description: string;
}

type HomeSlider = {
    id: number
    imageUrl: string
    title: string
    subTitle: string
}

interface ServiceType {
    __typename: string
    databaseId: number
    title: string
    slug: string
    featuredImage: {
        __typename: string
        node: {
            sourceUrl: string
        }
    }
    serviceFields: {
        __typename: string
        description: string
    }
}

interface ProjectType {
    __typename: string
    slug: string
    title: string
    date: string
    featuredImage: {
        __typename: string
        node: {
            sourceUrl: string
        }
    }
    groups: {
        __typename: string
        nodes: {
            name: string,
            slug: string
        }[]
    }
    projectFields: {
        __typename: string
        rating: number,
        client: string
    }
}

interface MemberType {
    __typename: string
    databaseId: 123
    title: string
    slug: string
    featuredImage: {
        __typename: string
        node: {
            sourceUrl: string
        }
    }
}
