# Alden Ardiwinata Putra Portfolio Website

A personal portfolio website for Alden Ardiwinata Putra, built with Next.js, React, TypeScript, and Tailwind CSS. The site presents education history, professional experience, academic publications, personal projects, skills, certifications, social links, and a downloadable CV.

The project is designed as a single-page portfolio with responsive section layouts. Desktop visitors receive richer descriptions, while mobile visitors receive shorter summaries, key highlights, and compact tag lists to reduce reading fatigue.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Vercel Speed Insights
- ESLint with Next.js config

## Main Features

- Responsive single-page portfolio layout
- Fixed navigation with desktop and mobile menus
- Dark and light theme toggle with local storage persistence
- Intro welcome overlay animation
- Hero section with profile image and call-to-action buttons
- About section with biography, skills, certifications, CV link, and social links
- Education timeline with desktop hover details and mobile expandable cards
- Work experience section with responsive desktop/mobile copy
- Publications section with DOI/publication links
- Projects section with screenshots, descriptions, technology tags, and external links
- Centralized content management through `app/data/portfolioData.ts`

## Page Sections

The homepage is assembled in `app/page.tsx` in this order:

1. `Welcome`
2. `Navigation`
3. `Hero`
4. `About`
5. `Education`
6. `WorkExperience`
7. `Publications`
8. `Projects`
9. `Footer`

Each main section lives in `app/components/sections`.

## Project Structure

```text
portfolio_alden_new/
|-- app/
|   |-- components/
|   |   |-- layout/
|   |   |   |-- Footer.tsx
|   |   |   |-- Navigation.tsx
|   |   |   `-- ThemeProvider.tsx
|   |   |-- sections/
|   |   |   |-- About.tsx
|   |   |   |-- Education.tsx
|   |   |   |-- Hero.tsx
|   |   |   |-- Projects.tsx
|   |   |   |-- Publications.tsx
|   |   |   |-- Welcome.tsx
|   |   |   `-- WorkExperience.tsx
|   |   `-- ui/
|   |       |-- Button.tsx
|   |       |-- Card.tsx
|   |       |-- Section.tsx
|   |       `-- ThemeToggle.tsx
|   |-- data/
|   |   `-- portfolioData.ts
|   |-- types/
|   |   `-- index.ts
|   |-- utils/
|   |   `-- theme.ts
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- public/
|   |-- CV Alden ATS Mei 2026.pdf
|   |-- project and profile images
|   `-- favicon.svg
|-- package.json
|-- tsconfig.json
`-- README.md
```

## Content Management

Most portfolio content is stored in:

```text
app/data/portfolioData.ts
```

The content schema is defined in:

```text
app/types/index.ts
```

This keeps the page components focused on rendering while the personal data, projects, publications, education, skills, and work experience can be edited from one central file.

## Desktop and Mobile Content Strategy

The project uses one shared content source with optional mobile-specific fields. This avoids maintaining two separate portfolios while still allowing mobile visitors to see concise content.

For example, project entries can include:

```ts
{
  title: "Long desktop title",
  shortTitle: "Short mobile title",
  description: "Detailed desktop description.",
  mobileDescription: "Concise mobile summary.",
  mobileHighlights: [
    "Key result or responsibility",
    "Important method or tool",
    "Main outcome"
  ],
  technologies: ["Full", "Desktop", "Technology", "List"],
  featuredTechnologies: ["Mobile", "Tags"]
}
```

Mobile-specific fields currently used by the UI include:

- `mobileBio`
- `shortTitle`
- `mobileDescription`
- `mobileHighlights`
- `featuredTechnologies`
- `mobileMeta`
- `shortName`
- `mobileDesc`
- `featuredTechstack`

If a mobile field is missing, the component falls back to the desktop field.

## Editing Personal Information

To update the portfolio owner information, edit the `personal` object in `app/data/portfolioData.ts`.

Common fields:

- `name`
- `title`
- `description`
- `email`
- `location`
- `url`
- `headshotUrl`

Profile and project images should be placed in the `public/` directory, then referenced with a root-relative path such as:

```ts
imageUrl: "/project-image.png"
```

## Editing About, Skills, and Certifications

The `about` object controls:

- desktop biography
- mobile biography
- hard skills
- soft skills
- certifications
- CV URL

The CV is stored in `public/` and linked through:

```ts
cvUrl: "/CV Alden ATS Mei 2026.pdf"
```

## Editing Projects

Projects are stored in the `projects` array.

Each project can include:

- `id`
- `title`
- `shortTitle`
- `description`
- `mobileDescription`
- `mobileHighlights`
- `technologies`
- `featuredTechnologies`
- `githubUrl`
- `demoUrl`
- `driveUrl`
- `imageUrl`

The Projects UI shows fuller details on desktop and condensed summaries on mobile.

## Editing Work Experience

Work experience entries are stored in the `workExperiences` array.

Each entry can include:

- `name`
- `shortName`
- `desc`
- `mobileDesc`
- `mobileHighlights`
- `image`
- `techstack`
- `featuredTechstack`
- `link`

Desktop uses the full role name and description. Mobile uses shorter role names, concise descriptions, and bullet highlights.

## Editing Publications

Publications are stored in the `publications` array.

Each publication can include:

- `title`
- `shortTitle`
- `description`
- `mobileDescription`
- `mobileMeta`
- `technologies`
- `featuredTechnologies`
- `driveUrl`
- `imageUrl`

The `driveUrl` field is also used for DOI links or external publication links.

## Editing Education

Education entries are stored in the `education` array.

Each education item can include:

- `level`
- `school`
- `degree`
- `duration`
- `achievements`
- `gpa`
- `activities`
- `volunteering`
- `courses`

Desktop displays the education journey as a horizontal timeline with hover details. Mobile displays stacked cards with expandable details.

## Theme System

Theme behavior is handled by:

- `app/components/layout/ThemeProvider.tsx`
- `app/components/ui/ThemeToggle.tsx`
- `app/utils/theme.ts`
- the inline theme initialization script in `app/layout.tsx`

The selected theme is stored in `localStorage` as `light` or `dark`.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local Next.js development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server after running `npm run build`.

```bash
npm run lint
```

Runs ESLint checks.

On Windows PowerShell, if `npm` is blocked by script execution policy, use:

```bash
npm.cmd run dev
npm.cmd run build
npm.cmd run lint
```

## Build and Verification

Before deploying, run:

```bash
npm.cmd run lint
npm.cmd run build
```

The project currently builds successfully. Lint may report warnings related to regular `<img>` elements and unused imports; these do not block the production build, but they can be cleaned later by switching to `next/image` and removing unused variables.

## Deployment

This project is suitable for deployment on Vercel.

Recommended flow:

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js build settings.
4. Deploy.

Default Vercel settings:

```text
Build command: npm run build
Output directory: .next
Install command: npm install
```

## Maintenance Notes

- Keep portfolio text in `app/data/portfolioData.ts`.
- Keep TypeScript schema updates in `app/types/index.ts`.
- Add images and documents to `public/`.
- Prefer adding mobile-specific copy only when desktop text feels too dense on small screens.
- When adding a new content field, update both the TypeScript interface and the component that renders it.
- Run `npm.cmd run build` after larger content or layout changes.

## License

This is a personal portfolio project. Reuse of the code structure is fine, but personal content, images, CV, publications, and identity-specific assets belong to Alden Ardiwinata Putra.
