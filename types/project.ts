export interface Project {
  id: number;
  title: string;
  repo_name: string;
  description: string;
  primary_language: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  featured: boolean;
}
