const baseUrl = import.meta.env.BASE_URL

export interface PageLink {
  label: string;
  url: string;
  componentName: string;
}
export const AppLinks: PageLink[] = [
  {label: 'Home', url: `${baseUrl}/#`, componentName: 'Home'},
  {label: 'HelloWorld', url: `${baseUrl}/#HelloWorld`, componentName: 'HelloWorld'},
  {label: 'CatGallery', url: `${baseUrl}/#CatGallery`, componentName: 'CatGallery'},
  {label: 'My Profile', url: `${baseUrl}/#UserProfile`, componentName: 'UserProfile'},
]