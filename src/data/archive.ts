// Smaller and older work. One row per project or per course, not per repo.
export interface ArchiveItem {
  name: string;
  year: string;
  what: string;
  stack: string;
  context: string;
  repo?: string;
}

export const archive: ArchiveItem[] = [
  {
    name: 'School registration system',
    year: '2024',
    what: 'Desktop course registration for students, teachers and admins. MVC, design patterns, JUnit tests.',
    stack: 'Java · JDBC · SQLite',
    context: 'Vanier, Programming Patterns',
    repo: 'MatthewMacri/Programming-Patterns-Project',
  },
  {
    name: 'Car reservation system',
    year: '2024',
    what: 'Bilingual desktop app for booking rental cars, with an admin side for the fleet.',
    stack: 'C# · .NET · SQLite',
    context: 'Vanier, Application Development',
    repo: 'MatthewMacri/Application-Development-Project',
  },
  {
    name: 'C$50 Finance',
    year: '2024',
    what: "Stock-trading simulator. Harvard's problem set; I wrote the routes, queries and portfolio logic.",
    stack: 'Python · Flask · SQLite',
    context: 'CS50x coursework',
    repo: 'MatthewMacri/Finance-CS50-Project',
  },
  {
    name: 'Weather lookup',
    year: '2024',
    what: 'City search, forecast, embedded map and search history kept in local storage.',
    stack: 'JavaScript · jQuery',
    context: 'Vanier, Internet Programming',
    repo: 'MatthewMacri/Internet-Programming-Project',
  },
  {
    name: 'Flutter labs',
    year: '2025',
    what: 'About twenty small apps from App Dev II: Firestore CRUD, navigation, API fetching.',
    stack: 'Flutter · Dart · Firebase',
    context: 'Vanier, Application Development II',
  },
  {
    name: 'Java and C# assignments',
    year: '2024',
    what: 'Design-pattern and desktop-app assignments that led up to the two projects above.',
    stack: 'Java · C#',
    context: 'Vanier coursework',
  },
];
