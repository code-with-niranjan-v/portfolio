export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  category: 'android' | 'web' | 'ai';
  screenshots: string[];
  videos?: string[];
  githubLink: string;
  technologies: string[];
}

export interface TechStack {
  category: string;
  technologies: string[];
}

export interface MediaViewerProps {
  isOpen: boolean;
  onClose: () => void;
  media: {
    type: 'image' | 'video';
    url: string;
  };
}