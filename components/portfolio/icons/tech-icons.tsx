import { SVGProps } from "react"

export function PlaywrightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#2EAD33" fillOpacity="0.15" />
      <path d="M12 30C12 22 16 14 24 14C32 14 36 22 36 30" stroke="#2EAD33" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="24" cy="30" r="8" fill="#2EAD33" fillOpacity="0.2" stroke="#2EAD33" strokeWidth="2" />
      <circle cx="24" cy="30" r="3" fill="#2EAD33" />
      <path d="M20 30H28" stroke="#2EAD33" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 26V34" stroke="#2EAD33" strokeWidth="1.5" strokeLinecap="round" />
      {/* Playwright "PW" text */}
      <text x="24" y="20" textAnchor="middle" fill="#2EAD33" fontSize="7" fontWeight="bold" fontFamily="Arial,sans-serif" opacity="0.5">PW</text>
    </svg>
  )
}

export function SeleniumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#43B02A" fillOpacity="0.15" />
      {/* Shield shape */}
      <path d="M24 10L36 16V24C36 32 30 37 24 39C18 37 12 32 12 24V16L24 10Z" fill="#43B02A" fillOpacity="0.15" stroke="#43B02A" strokeWidth="2" />
      <path d="M24 14L32 18V24C32 30 28 34 24 35.5C20 34 16 30 16 24V18L24 14Z" fill="#43B02A" fillOpacity="0.25" />
      {/* Selenium "S" curve */}
      <path d="M20 22C20 20 22 19 24 20C26 21 26 23 24 24C22 25 22 27 24 28C26 29 28 28 28 26" stroke="#43B02A" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function JenkinsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#D24939" fillOpacity="0.15" />
      {/* Jenkins head/face */}
      <circle cx="24" cy="22" r="12" fill="#D24939" fillOpacity="0.2" stroke="#D24939" strokeWidth="2" />
      <circle cx="20" cy="20" r="2" fill="#D24939" />
      <circle cx="28" cy="20" r="2" fill="#D24939" />
      {/* Mustache */}
      <path d="M18 25C18 25 21 27 24 25C27 27 30 25 30 25" stroke="#D24939" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Body */}
      <rect x="18" y="30" width="12" height="10" rx="2" fill="#D24939" fillOpacity="0.2" stroke="#D24939" strokeWidth="1.5" />
      <path d="M21 35L24 38L27 35" stroke="#D24939" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function CypressIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#69D3A7" fillOpacity="0.15" />
      {/* Cy logo - infinity-like with shield */}
      <path d="M24 10C16 10 10 16 10 24C10 32 16 38 24 38" stroke="#69D3A7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M24 10C32 10 38 16 38 24C38 32 32 38 24 38" stroke="#69D3A7" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
      {/* Leaf shape */}
      <path d="M16 24C16 20 20 17 24 20C28 17 32 20 32 24" stroke="#69D3A7" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M20 28L22 30L20 32" stroke="#69D3A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 28L26 30L28 32" stroke="#69D3A7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  )
}

export function AppiumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#EE6D55" fillOpacity="0.15" />
      {/* Phone silhouette */}
      <rect x="14" y="10" width="20" height="28" rx="4" fill="#EE6D55" fillOpacity="0.2" stroke="#EE6D55" strokeWidth="2" />
      <rect x="17" y="14" width="14" height="14" rx="2" fill="#EE6D55" fillOpacity="0.3" />
      {/* Screen content - Appium "A" */}
      <circle cx="24" cy="21" r="3" fill="#EE6D55" fillOpacity="0.5" />
      {/* Home button */}
      <circle cx="24" cy="32" r="2" fill="none" stroke="#EE6D55" strokeWidth="1.5" />
      {/* Automation arrows */}
      <path d="M12 18L8 22L12 26" stroke="#EE6D55" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <path d="M36 18L40 22L36 26" stroke="#EE6D55" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    </svg>
  )
}

export function DockerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#2496ED" fillOpacity="0.15" />
      {/* Docker whale shape */}
      <path d="M10 28H38C38 32 34 37 24 37C14 37 10 32 10 28Z" fill="#2496ED" fillOpacity="0.2" stroke="#2496ED" strokeWidth="2" />
      {/* Containers stacked */}
      <rect x="12" y="22" width="6" height="5" rx="1" fill="#2496ED" fillOpacity="0.5" />
      <rect x="20" y="22" width="6" height="5" rx="1" fill="#2496ED" fillOpacity="0.7" />
      <rect x="28" y="22" width="6" height="5" rx="1" fill="#2496ED" fillOpacity="0.5" />
      <rect x="20" y="15" width="6" height="5" rx="1" fill="#2496ED" fillOpacity="0.4" />
      <rect x="28" y="15" width="6" height="5" rx="1" fill="#2496ED" fillOpacity="0.3" />
      <rect x="36" y="24" width="4" height="3" rx="0.8" fill="#2496ED" fillOpacity="0.4" />
    </svg>
  )
}

export function PostmanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#FF6C37" fillOpacity="0.15" />
      {/* Postman eye shape */}
      <circle cx="24" cy="24" r="14" fill="#FF6C37" fillOpacity="0.15" stroke="#FF6C37" strokeWidth="2" />
      {/* Eye detail */}
      <ellipse cx="24" cy="24" rx="8" ry="5" fill="#FF6C37" fillOpacity="0.2" />
      <circle cx="24" cy="24" r="3" fill="#FF6C37" fillOpacity="0.6" />
      <circle cx="24" cy="24" r="1.5" fill="#FF6C37" />
      {/* Curved "smile" */}
      <path d="M18 26C18 26 20 30 24 30C28 30 30 26 30 26" stroke="#FF6C37" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export function GitHubActionsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#2088FF" fillOpacity="0.15" />
      {/* Workflow icon */}
      <circle cx="18" cy="16" r="5" fill="#2088FF" fillOpacity="0.2" stroke="#2088FF" strokeWidth="1.5" />
      <circle cx="30" cy="24" r="5" fill="#2088FF" fillOpacity="0.3" stroke="#2088FF" strokeWidth="1.5" />
      <circle cx="18" cy="32" r="5" fill="#2088FF" fillOpacity="0.2" stroke="#2088FF" strokeWidth="1.5" />
      {/* Connection arrows */}
      <path d="M22 19L27 21" stroke="#2088FF" strokeWidth="2" strokeLinecap="round" />
      <path d="M27 27L22 29" stroke="#2088FF" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 19V22" stroke="#2088FF" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 26V29" stroke="#2088FF" strokeWidth="2" strokeLinecap="round" />
      {/* Play triangle */}
      <path d="M28 23L30 24.5L28 26Z" fill="#2088FF" />
    </svg>
  )
}

export function PythonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#3776AB" fillOpacity="0.15" />
      {/* Python logo */}
      <path d="M24 10C18 10 15 12 15 16V20C15 24 17 26 22 26H26C30 26 33 28 33 32V36C33 40 30 42 24 42" stroke="#3776AB" strokeWidth="2.5" fill="none" />
      <path d="M24 42C18 42 15 40 15 36V32C15 28 17 26 22 26H26C30 26 33 24 33 20V16C33 12 30 10 24 10" stroke="#FFD43B" strokeWidth="2.5" fill="none" />
      <circle cx="19" cy="15" r="1.5" fill="#3776AB" />
      <circle cx="29" cy="37" r="1.5" fill="#FFD43B" />
    </svg>
  )
}

export function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#3178C6" fillOpacity="0.15" />
      {/* TS Blue square */}
      <rect x="12" y="12" width="24" height="24" rx="4" fill="#3178C6" fillOpacity="0.3" stroke="#3178C6" strokeWidth="2" />
      {/* TS text */}
      <text x="24" y="22" textAnchor="middle" fill="#3178C6" fontSize="11" fontWeight="bold" fontFamily="Arial,sans-serif">TS</text>
      {/* Square bracket */}
      <rect x="16" y="24" width="4" height="8" rx="0.5" fill="#3178C6" fillOpacity="0.5" />
      <rect x="28" y="24" width="4" height="8" rx="0.5" fill="#3178C6" fillOpacity="0.5" />
    </svg>
  )
}

export function JiraIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#2684FF" fillOpacity="0.15" />
      {/* Jira logo - triangle layers */}
      <path d="M14 14L24 24L14 34" stroke="#2684FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 14L34 24L24 34" stroke="#2684FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fillOpacity="0.4" fill="#2684FF" />
      <circle cx="24" cy="24" r="4" fill="#2684FF" fillOpacity="0.6" />
    </svg>
  )
}

export function TestRailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#65C179" fillOpacity="0.15" />
      <rect x="12" y="12" width="24" height="24" rx="4" fill="#65C179" fillOpacity="0.2" stroke="#65C179" strokeWidth="2" />
      {/* Checkboxes */}
      <rect x="16" y="17" width="4" height="4" rx="1" fill="#65C179" fillOpacity="0.5" />
      <rect x="16" y="24" width="4" height="4" rx="1" fill="#65C179" fillOpacity="0.5" />
      <rect x="16" y="31" width="4" height="4" rx="1" fill="#65C179" fillOpacity="0.3" />
      {/* Check marks */}
      <path d="M23 19L25 21L29 17" stroke="#65C179" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 26L25 28L29 24" stroke="#65C179" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function NodeJSIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#339933" fillOpacity="0.15" />
      {/* Node.js hexagon shape */}
      <path d="M24 8L38 16V32L24 40L10 32V16L24 8Z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="2" />
      <path d="M24 15L32 19.5V28.5L24 33L16 28.5V19.5L24 15Z" fill="#339933" fillOpacity="0.25" />
      {/* Node.js "JS" text */}
      <text x="24" y="26" textAnchor="middle" fill="#339933" fontSize="8" fontWeight="bold" fontFamily="Arial,sans-serif">JS</text>
      <circle cx="24" cy="33" r="1.5" fill="#339933" fillOpacity="0.6" />
    </svg>
  )
}

export const QA_TOOL_ICONS: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
  playwright: PlaywrightIcon,
  selenium: SeleniumIcon,
  jenkins: JenkinsIcon,
  cypress: CypressIcon,
  appium: AppiumIcon,
  docker: DockerIcon,
  postman: PostmanIcon,
  githubactions: GitHubActionsIcon,
  python: PythonIcon,
  typescript: TypeScriptIcon,
  jira: JiraIcon,
  testrail: TestRailIcon,
  nodejs: NodeJSIcon,
}