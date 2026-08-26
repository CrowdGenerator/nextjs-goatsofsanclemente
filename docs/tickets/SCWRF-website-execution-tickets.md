# San Clemente Wildfire Resilience Foundation - Website Execution Tickets

**Project:** SCWRF Website MVP  
**Created:** 2026-08-26  
**Status:** Ready for Execution  
**Total Tickets:** 26  
**Estimated Timeline:** 4-5 days

---

## Project Overview

This document contains all execution tickets for building the San Clemente Wildfire Resilience Foundation website MVP. The project is built on Next.js 16.3.3 with React 19, TypeScript, and Tailwind CSS 4.

### Key Project Decisions

- **Font:** Inter (Google Fonts) with system sans fallback
- **Contact Email:** hello@goatsofsanclemente.com
- **Placeholder Names:** Bob Smith variants (Bob Smith, Bob A. Smith, Bob Smith Jr., Dr. Bob Smith)
- **Placeholder Images:** Use scwrf-logo.png in graphic boxes
- **Donate CTA:** Separate button in header AND navigation
- **Partner Links:** Use provided URLs as placeholders
- **Contact Form:** Visual form with Resend integration (API key required for production)
- **Hazard Map:** Placeholder div with "MAP GOES HERE" text

### Critical Content Rules

1. **Programs are FUTURE** - Use "may offer", "hope to build", "long-term ideas"
2. **Foundation is CONNECTOR** - NOT a replacement for agencies
3. **San Clemente SPECIFIC** - Local focus throughout
4. **Nonpartisan** - Avoid political visual cues
5. **Facts-based** - Cite sources and dates
6. **Wildfire + stewardship together** - Brand is not simply "brush clearance"; native habitat, soil, water, erosion are part of positioning

### Known Content Gaps (Pre-Launch)

The following information is not yet available and uses placeholders in the MVP. These must be collected before production launch:

- EIN / tax-exempt status language (placeholder: "EIN: XX-XXXXXXX")
- Mailing address
- Board / leadership real names and bios (using Bob Smith placeholders)
- Donation platform / payment processor
- Volunteer intake process details
- Partner inquiry workflow
- Approved photography / image library
- Privacy policy / terms of service text
- Higher-resolution hazard map from City / State Fire Marshal

### Design System Specifications

**Color Palette:**
- Primary Green: #28583F
- Secondary Green: #517A51
- Ochre: #B8741A
- Body Charcoal: #2D302E
- Muted Gray: #676C68
- Pale Green: #E6EEE8
- Sage Panel: #CAD6CD
- Light Sage: #D9E5DC
- Soft Neutral: #EFF1EF
- Thin Blue Accent: #5A8FD8 (use sparingly, cover divider only)

**Typography:**
- Font: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif
- Display/H1: 48-64px (desktop), 36-42px (mobile)
- H2: 28-34px
- H3: 21-24px
- Body: 17-18px
- Small/Eyebrow: 12-14px (bold, uppercase)
- Caption: 13-14px

**Button Styling:**
- Border radius: 6-8px (medium, not pill-shaped)
- Hover: background darkens by ~10%, smooth transition (150-200ms)
- Focus: visible focus ring for accessibility
- Active: subtle scale or darken effect

**Spacing:** 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px

**Content Widths:**
- Reading content: 760-880px
- Wide sections: 1120-1240px
- Hero: max 1200px

---

## PHASE 0: Foundation Setup

### TICKET-001: Design System Implementation

**Phase:** 0 - Foundation Setup  
**Priority:** High  
**Estimated Effort:** 2-3 hours  
**Dependencies:** None

**Description:**

Implement the complete design system for the SCWRF website in `app/globals.css`. This includes all color variables, typography scale, spacing system, and base component styles. The design system must match the specifications from the handoff document and provide a solid foundation for all subsequent component development.

**Technical Details:**

- Create CSS custom properties (variables) for all colors in the palette
- Implement Inter font loading from Google Fonts
- Define typography scale with responsive sizes
- Create spacing utility classes based on 8px grid
- Implement button styles (primary and secondary variants)
- Add base styles for common elements (headings, paragraphs, links)
- Ensure color contrast meets WCAG AA standards
- Do NOT use green/orange alone to communicate status - always pair with text or icons
- Use dark green or charcoal for body text; never use light sage for text on white

**Acceptance Criteria:**

- [ ] All 11 colors from the palette are accessible as CSS variables (including white and thin blue accent)
- [ ] Inter font loads correctly from Google Fonts
- [ ] System sans fallback works when Inter is unavailable
- [ ] Typography scale renders at correct sizes on desktop and mobile
- [ ] Spacing utilities work with 8px grid values
- [ ] Primary button has #28583F background with white text
- [ ] Secondary button has white background with #28583F border and text
- [ ] Buttons have appropriate hover states (background darkens ~10%, smooth 150-200ms transition)
- [ ] Buttons have visible focus rings for keyboard navigation
- [ ] Button border-radius is 6-8px (medium, not pill-shaped)
- [ ] No console errors related to font loading
- [ ] Build succeeds with no CSS errors

---

### TICKET-002: Layout Enhancement

**Phase:** 0 - Foundation Setup  
**Priority:** High  
**Estimated Effort:** 2 hours  
**Dependencies:** TICKET-001

**Description:**

Enhance the base layout in `app/layout.tsx` to include proper metadata, font loading, analytics integration, and favicon setup. The layout serves as the foundation for all pages and must include SEO-critical elements from the start.

**Technical Details:**

- Update metadata with site title, description, and Open Graph tags
- Add Inter font loading via next/font/google
- Integrate Vercel Analytics component
- Integrate Vercel Speed Insights component
- Generate favicon from scwrf-logo.png (or create simple favicon)
- Ensure proper HTML structure with lang attribute
- Add viewport meta tag configuration

**Acceptance Criteria:**

- [ ] Site title displays as "San Clemente Wildfire Resilience Foundation"
- [ ] Meta description matches handoff document specification
- [ ] Open Graph tags present (title, description, image, url)
- [ ] Twitter card tags present
- [ ] Inter font loads via next/font/google
- [ ] Vercel Analytics component renders (visible in page source)
- [ ] Vercel Speed Insights component renders (visible in page source)
- [ ] Favicon displays in browser tab
- [ ] HTML lang="en" attribute present
- [ ] Build succeeds with no errors

---

### TICKET-003: Tailwind Configuration

**Phase:** 0 - Foundation Setup  
**Priority:** Medium  
**Estimated Effort:** 1 hour  
**Dependencies:** TICKET-001

**Description:**

Extend the Tailwind CSS configuration to include custom colors, spacing values, and font families that match the SCWRF design system. This ensures Tailwind utility classes work seamlessly with the brand palette and typography.

**Technical Details:**

- Extend theme.colors with all SCWRF brand colors
- Add custom spacing values beyond default Tailwind scale
- Configure fontFamily to include Inter as primary
- Ensure custom values don't conflict with Tailwind defaults
- Test that custom Tailwind classes work in components

**Acceptance Criteria:**

- [ ] Custom color classes work (e.g., text-primary-green, bg-pale-green)
- [ ] All 11 brand colors accessible via Tailwind classes (including thin-blue-accent)
- [ ] Custom spacing values work (e.g., p-18 for 72px)
- [ ] Font family classes work (e.g., font-sans uses Inter)
- [ ] No conflicts with default Tailwind classes
- [ ] Build succeeds with no Tailwind errors
- [ ] Tailwind IntelliSense recognizes custom values (if using VS Code)

---

## PHASE 1: Core Components

### TICKET-004: Layout Components (Header + Footer)

**Phase:** 1 - Core Components  
**Priority:** High  
**Estimated Effort:** 5-6 hours  
**Dependencies:** TICKET-001, TICKET-002, TICKET-003

**Description:**

Build the two main layout components: SiteHeader and SiteFooter. These components appear on every page and must be responsive, accessible, and match the design system. The header includes the logo, navigation links, Donate CTA button, and mobile hamburger menu. The footer includes the logo, legal text, partner links, and contact information.

**Technical Details:**

**SiteHeader.tsx:**
- Logo (scwrf-logo.png) on left, links to home
- Navigation links: Home, Wildfire Resilience, About, Programs, Partners, Get Involved, Resources
- Donate button (CTA) on right, links to /donate (separate prominent button, not a nav link)
- Contact link as utility link (NOT in primary nav per handoff recommendation)
- Mobile: Hamburger menu with same structure, Contact link visible in mobile menu
- Sticky header on scroll
- Proper z-index to stay above content

**SiteFooter.tsx:**
- Logo with "A California Nonprofit Public Benefit Corporation" text
- Quick Links column: Home, About, Programs, Contact
- Partner Links column with URLs:
  - Facebook Group: https://www.facebook.com/groups/4224960284458772/
  - Goat Grazing Pilot: https://www.sanclemente.gov/FormCenter/Public-Works-6/Goat-Grazing-Pilot-Program-67
  - City of San Clemente: https://www.sanclemente.gov
- Contact: hello@goatsofsanclemente.com
- Privacy and Terms placeholder links
- Copyright: © 2026 San Clemente Wildfire Resilience Foundation
- EIN placeholder: "EIN: XX-XXXXXXX" (to be updated before production)

**Acceptance Criteria:**

- [ ] Logo displays at appropriate size in header
- [ ] All 7 navigation links present and functional
- [ ] Donate button displays with primary button styling
- [ ] Mobile hamburger menu works on screens < 768px
- [ ] Menu closes when link is clicked
- [ ] Header is sticky on scroll
- [ ] Footer displays logo with nonprofit text
- [ ] All 3 partner links work and open in new tab
- [ ] Contact email displays correctly
- [ ] Privacy and Terms links present (can be placeholder #)
- [ ] Copyright text displays with current year
- [ ] EIN placeholder text displays in footer
- [ ] Contact link accessible from footer (utility link placement)
- [ ] Both components are fully responsive
- [ ] Keyboard navigation works for all links
- [ ] Build succeeds with no errors

---

### TICKET-005: Hero + Callout Components

**Phase:** 1 - Core Components  
**Priority:** High  
**Estimated Effort:** 3 hours  
**Dependencies:** TICKET-001, TICKET-003

**Description:**

Build three key content components: Hero, VisionCallout, and GuidingIdeaBanner. These components are used prominently on the home page and other pages to highlight key messages. They must use the correct color palette and typography from the design system.

**Technical Details:**

**Hero.tsx:**
- Eyebrow text: "SAN CLEMENTE" (ochre, uppercase, bold)
- H1: "Wildfire Resilience Foundation"
- Intro: "A citizen-led nonprofit for wildfire prevention, preparedness, stewardship and community action"
- Vision statement (full text from handoff doc)
- Two CTA buttons: "Learn About Wildfire Resilience" and "Get Involved"
- White background, generous padding

**VisionCallout.tsx:**
- Pale green background (#E6EEE8)
- Dark charcoal text
- Green bold label (optional)
- Content area for vision statement or similar
- Padding and spacing per design system

**GuidingIdeaBanner.tsx:**
- Pale green background
- "Guiding Idea" label in green bold
- Main text: "Make wildfire resilience clear, practical, and part of daily life - not only an emergency concern."
- Centered text, generous padding

**Acceptance Criteria:**

- [ ] Hero displays eyebrow in ochre color
- [ ] Hero H1 displays at correct size (48-64px desktop, 36-42px mobile)
- [ ] Hero intro text displays correctly
- [ ] Vision statement displays with proper formatting
- [ ] Both CTA buttons display and link to correct pages
- [ ] VisionCallout has pale green background
- [ ] VisionCallout text is dark charcoal
- [ ] GuidingIdeaBanner has pale green background
- [ ] GuidingIdeaBanner label is green and bold
- [ ] All three components are responsive
- [ ] Typography matches design system specifications
- [ ] Build succeeds with no errors

---

### TICKET-006: Content Section Components

**Phase:** 1 - Core Components  
**Priority:** Medium  
**Estimated Effort:** 2 hours  
**Dependencies:** TICKET-001, TICKET-003

**Description:**

Build three reusable content section components: SectionIntro, SourceCitation, and PracticalStepsList. These components provide consistent styling for content sections across multiple pages.

**Technical Details:**

**SectionIntro.tsx:**
- Reusable section header component
- Props: title (string), subtitle (optional string)
- Title: Dark green (#28583F), bold, H2 size
- Subtitle: Muted gray (#676C68), smaller text
- Consistent spacing above and below

**SourceCitation.tsx:**
- Muted gray text (#676C68)
- Smaller font size (13-14px)
- Props: source (string), date (optional string)
- Format: "Source: [source], [date]" or "Source: [source]"

**PracticalStepsList.tsx:**
- Styled bullet list
- Props: items (array of strings)
- Dark charcoal text
- Custom bullet styling (could use ochre or green)
- Consistent spacing between items

**Acceptance Criteria:**

- [ ] SectionIntro displays title in dark green
- [ ] SectionIntro displays subtitle in muted gray (if provided)
- [ ] SectionIntro spacing is consistent with design system
- [ ] SourceCitation displays in muted gray
- [ ] SourceCitation uses smaller font size
- [ ] SourceCitation formats source and date correctly
- [ ] PracticalStepsList displays all items
- [ ] PracticalStepsList has custom bullet styling
- [ ] PracticalStepsList has consistent spacing
- [ ] All three components accept props correctly
- [ ] All three components are responsive
- [ ] Build succeeds with no errors

---

### TICKET-007: Grid Components

**Phase:** 1 - Core Components  
**Priority:** Medium  
**Estimated Effort:** 3 hours  
**Dependencies:** TICKET-001, TICKET-003

**Description:**

Build three grid-based components: MissionCardGrid, CoreValueGrid, and ProgramCard. These components display content in card layouts and must be responsive, stacking on mobile and displaying in grids on larger screens.

**Technical Details:**

**MissionCardGrid.tsx:**
- 3-card layout for Vision, Purpose, Mission
- Props: cards (array of {title, content})
- Cards have minimal borders, no strong shadows
- White background
- Grid: 3 columns on desktop, 1 column on mobile
- Consistent spacing between cards

**CoreValueGrid.tsx:**
- 6 value blocks in grid
- Props: values (array of {title, description})
- Compact blocks with title and description
- Grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- White or soft neutral background

**ProgramCard.tsx:**
- Individual program card
- Props: title, description, isFuture (boolean)
- "Future / Developing" label if isFuture is true
- Minimal borders, no strong shadows
- White background
- Consistent with other card styles

**Acceptance Criteria:**

- [ ] MissionCardGrid displays 3 cards in row on desktop
- [ ] MissionCardGrid stacks to 1 column on mobile
- [ ] CoreValueGrid displays 6 cards in 3-column grid on desktop
- [ ] CoreValueGrid displays 2 columns on tablet
- [ ] CoreValueGrid displays 1 column on mobile
- [ ] ProgramCard displays "Future / Developing" label when isFuture is true
- [ ] ProgramCard label uses ochre or similar accent color
- [ ] All cards have minimal borders (no heavy shadows)
- [ ] All cards have consistent padding and spacing
- [ ] All components are responsive
- [ ] All components accept props correctly
- [ ] Build succeeds with no errors

---

### TICKET-008: Specialized Components

**Phase:** 1 - Core Components  
**Priority:** Medium  
**Estimated Effort:** 5 hours  
**Dependencies:** TICKET-001, TICKET-003

**Description:**

Build seven specialized components: PartnerRoleTable, LocalContextPanel, MapPlaceholder, FutureProgramNotice, VolunteerCTA, PartnerCTA, and ResourceLinkCard. These components serve specific purposes on certain pages and must match the design system.

**Technical Details:**

**PartnerRoleTable.tsx:**
- Responsive table with sage header (#CAD6CD)
- Props: rows (array of {foundation, partners})
- Two columns: "The Foundation Helps" and "Partners Retain"
- Thin neutral borders
- Stacks on mobile (rows become cards)

**LocalContextPanel.tsx:**
- Pale green background panel
- Contains map placeholder and context text
- Props: title, content, mapPlaceholder (boolean)
- Includes SourceCitation component

**MapPlaceholder.tsx:**
- Div with "MAP GOES HERE" text
- Uses scwrf-logo.png as placeholder image
- Pale green background with dashed border
- Centered text and logo
- Height: 300-400px

**FutureProgramNotice.tsx:**
- Pale green callout box
- Bold heading: "Important Note"
- Text explaining programs are future ideas
- Green bold label
- Padding per design system

**VolunteerCTA.tsx:**
- Action button component
- Props: text, href
- Primary button styling
- Can be used inline or as block

**ResourceLinkCard.tsx:**
- Card with title, description, and link
- Props: title, description, href
- Minimal borders
- Link styled as button or text link

**PartnerCTA.tsx:**
- Call-to-action banner for the Partners page
- Props: title, description, buttonText, buttonHref
- Pale green background (#E6EEE8)
- Green bold label or heading
- Button linking to contact or get-involved page
- Consistent with other CTA styling

**Acceptance Criteria:**

- [ ] PartnerRoleTable displays with sage header
- [ ] PartnerRoleTable has thin neutral borders
- [ ] PartnerRoleTable stacks on mobile (rows become cards)
- [ ] LocalContextPanel has pale green background
- [ ] LocalContextPanel includes map placeholder
- [ ] LocalContextPanel includes source citation
- [ ] MapPlaceholder displays "MAP GOES HERE" text
- [ ] MapPlaceholder displays logo image
- [ ] MapPlaceholder has dashed border
- [ ] FutureProgramNotice has pale green background
- [ ] FutureProgramNotice has bold heading
- [ ] FutureProgramNotice text is clear and prominent
- [ ] VolunteerCTA displays as primary button
- [ ] VolunteerCTA links to correct href
- [ ] ResourceLinkCard displays title and description
- [ ] ResourceLinkCard link is clickable
- [ ] PartnerCTA displays with pale green background
- [ ] PartnerCTA button links to correct href
- [ ] All seven components are responsive
- [ ] All components accept props correctly
- [ ] Build succeeds with no errors

---

## PHASE 2: MVP Pages

### TICKET-009: Home Page

**Phase:** 2 - MVP Pages  
**Priority:** High  
**Estimated Effort:** 4-5 hours  
**Dependencies:** All Phase 1 components

**Description:**

Build the home page (`app/page.tsx`) using the components from Phase 1. The home page is the primary landing page and must include all key sections from the handoff document. Content must match the handoff document exactly, preserving the distinction between current work and future programs.

**Technical Details:**

**Sections (in order):**
1. Hero section (Hero component)
2. Why This Matters (LocalContextPanel with map placeholder)
3. What Wildfire Resilience Means (SectionIntro + PracticalStepsList)
4. Our Mission (MissionCardGrid with Vision, Purpose, Mission)
5. How We Help (text section about organizational role)
6. Programs We Hope to Build (3 ProgramCards with isFuture=true)
7. Core Values (CoreValueGrid with 6 values)

**Content:**
- All copy from handoff document sections 3, 6, 7, 8, 9
- Preserve "may offer", "hope to build" language for programs
- Emphasize "connector and advocate" role
- Include source citations where appropriate

**Acceptance Criteria:**

- [ ] All 7 sections display in correct order
- [ ] Hero displays with correct eyebrow, H1, intro, vision
- [ ] Hero CTAs link to correct pages
- [ ] Why This Matters section includes map placeholder
- [ ] What Wildfire Resilience Means includes 4 practical steps
- [ ] Our Mission displays 3 cards (Vision, Purpose, Mission)
- [ ] How We Help emphasizes connector/advocate role
- [ ] Programs section shows 3 program cards with "future" labels
- [ ] Core Values displays all 6 values
- [ ] All content matches handoff document
- [ ] "Future" language preserved for programs
- [ ] Page is fully responsive
- [ ] No console errors
- [ ] Build succeeds

---

### TICKET-010: About Page

**Phase:** 2 - MVP Pages  
**Priority:** High  
**Estimated Effort:** 4-5 hours  
**Dependencies:** All Phase 1 components

**Description:**

Build the About page (`app/about/page.tsx`) with Vision, Purpose, Mission, Guiding Idea, Organizational Role, and Core Values sections. Include placeholder board member section with Bob Smith variants.

**Technical Details:**

**Sections:**
1. Page title: "About the Foundation"
2. Vision section (VisionCallout)
3. Purpose section
4. Mission section
5. Guiding Idea (GuidingIdeaBanner)
6. Organizational Role (text + PartnerRoleTable)
7. Core Values (CoreValueGrid with expanded descriptions)
8. Our Focus subsection (text emphasizing San Clemente local focus)
9. Board/Leadership (placeholder with Bob Smith names)

**Board Placeholders:**
- Bob Smith, Chair
- Bob A. Smith, Vice Chair
- Bob Smith Jr., Treasurer
- Dr. Bob Smith, Secretary

**Acceptance Criteria:**

- [ ] Page title displays correctly
- [ ] Vision section uses VisionCallout component
- [ ] Purpose section displays correct content
- [ ] Mission section displays correct content
- [ ] Guiding Idea uses GuidingIdeaBanner component
- [ ] Organizational Role includes PartnerRoleTable
- [ ] Core Values displays all 6 values with expanded descriptions
- [ ] "Our Focus" subsection present with text: "We focus on San Clemente. We connect residents and partners, support safe volunteer work, and directly promote wildfire prevention, preparedness, education, and care for the environment."
- [ ] Board section displays 4 Bob Smith variants
- [ ] Board members have placeholder logos (scwrf-logo.png)
- [ ] All content matches handoff document
- [ ] Page is fully responsive
- [ ] No console errors
- [ ] Build succeeds

---

### TICKET-011: Wildfire Resilience Page

**Phase:** 2 - MVP Pages  
**Priority:** High  
**Estimated Effort:** 3 hours  
**Dependencies:** All Phase 1 components

**Description:**

Build the Wildfire Resilience page (`app/wildfire-resilience/page.tsx`) with sections on why resilience matters, local context, the shift from prevention to resilience, and practical steps.

**Technical Details:**

**Sections:**
1. Page title: "Wildfire Resilience"
2. Why Resilience Matters (text section)
3. Local Context (LocalContextPanel with map placeholder)
4. From Wildfire Prevention to Wildfire Resilience (text)
5. Practical Steps (PracticalStepsList with 4 bullets)

**Content:**
- All copy from handoff document section 6
- Include map credit: "City of San Clemente / State Fire Marshal, March 24, 2025"
- 4 practical steps from handoff doc

**Acceptance Criteria:**

- [ ] Page title displays correctly
- [ ] Why Resilience Matters section displays correct content
- [ ] Local Context includes map placeholder
- [ ] Map placeholder displays "MAP GOES HERE"
- [ ] Source citation displays with correct credit and date
- [ ] Prevention to Resilience section displays correct content
- [ ] Practical Steps displays all 4 bullets
- [ ] All content matches handoff document
- [ ] Page is fully responsive
- [ ] No console errors
- [ ] Build succeeds

---

### TICKET-012: Programs Page

**Phase:** 2 - MVP Pages  
**Priority:** High  
**Estimated Effort:** 2-3 hours  
**Dependencies:** All Phase 1 components

**Description:**

Build the Programs page (`app/programs/page.tsx`) with three program sections and a prominent Future Program Notice. All programs must be clearly labeled as future/developing activities.

**Technical Details:**

**Sections:**
1. Page title: "Programs"
2. Future Program Notice (prominent, at top)
3. Community Education and Preparedness (ProgramCard with isFuture=true)
4. Environmental Education and Stewardship (ProgramCard with isFuture=true)
5. Youth and Career Learning (ProgramCard with isFuture=true)

**Content:**
- All copy from handoff document section 10
- Preserve "may", "hope to build", "long-term ideas" language
- Future Program Notice explains programs are not current promises

**Acceptance Criteria:**

- [ ] Page title displays correctly
- [ ] Future Program Notice is prominent at top of page
- [ ] Future Program Notice has pale green background
- [ ] All 3 programs display with ProgramCard component
- [ ] All 3 programs have "future" labels
- [ ] Community Education content matches handoff doc
- [ ] Environmental Education content matches handoff doc
- [ ] Youth and Career Learning content matches handoff doc
- [ ] "May offer", "hope to build" language preserved
- [ ] Page is fully responsive
- [ ] No console errors
- [ ] Build succeeds

---

### TICKET-013: Partners Page

**Phase:** 2 - MVP Pages  
**Priority:** High  
**Estimated Effort:** 2-3 hours  
**Dependencies:** All Phase 1 components

**Description:**

Build the Partners page (`app/partners/page.tsx`) with sections on how the foundation works with partners, roles and boundaries table, and a partner list with placeholder logos.

**Technical Details:**

**Sections:**
1. Page title: "Partners"
2. How We Work With Partners (text section)
3. A Clear Boundary (text section)
4. Foundation / Partner Roles (PartnerRoleTable)
5. The Result (text section)
6. Our Partners (grid of partner logos with placeholder images)

**Content:**
- All copy from handoff document section 8
- PartnerRoleTable with data from handoff doc
- Partner logos: Use scwrf-logo.png in placeholder boxes

**Acceptance Criteria:**

- [ ] Page title displays correctly
- [ ] How We Work section displays correct content
- [ ] Clear Boundary section displays correct content
- [ ] PartnerRoleTable displays with correct data
- [ ] PartnerRoleTable has sage header
- [ ] PartnerRoleTable is responsive (stacks on mobile)
- [ ] The Result section displays correct content
- [ ] Our Partners section displays placeholder logos
- [ ] Placeholder logos use scwrf-logo.png
- [ ] All content matches handoff document
- [ ] Page is fully responsive
- [ ] No console errors
- [ ] Build succeeds

---

### TICKET-014: Get Involved Page

**Phase:** 2 - MVP Pages  
**Priority:** Medium  
**Estimated Effort:** 2-3 hours  
**Dependencies:** All Phase 1 components

**Description:**

Build the Get Involved page (`app/get-involved/page.tsx`) with volunteer information and a community/partner interest form. The form is visual only for now (no backend submission).

**Technical Details:**

**Sections:**
1. Page title: "Get Involved"
2. Volunteer section (text + VolunteerCTA button)
3. Community / Partner Interest Form (visual form)

**Form Fields:**
- Name (text input)
- Email (email input)
- Interest Type (select: Volunteer, Partner, Other)
- Message (textarea)
- Submit button

**Acceptance Criteria:**

- [ ] Page title displays correctly
- [ ] Volunteer section displays informative text
- [ ] VolunteerCTA button displays and links to contact page
- [ ] Interest form displays all 4 fields
- [ ] Form fields are properly labeled
- [ ] Form has submit button
- [ ] Form is visual only (no submission logic yet)
- [ ] Form is responsive
- [ ] Form fields are accessible (keyboard navigation)
- [ ] Page is fully responsive
- [ ] No console errors
- [ ] Build succeeds

---

### TICKET-015: Resources Page

**Phase:** 2 - MVP Pages  
**Priority:** Medium  
**Estimated Effort:** 1-2 hours  
**Dependencies:** All Phase 1 components

**Description:**

Build the Resources page (`app/resources/page.tsx`) with placeholder resource cards. Content is placeholder for now, but structure should match the design system.

**Technical Details:**

**Sections:**
1. Page title: "Resources"
2. Intro text (placeholder)
3. Resource cards grid (ResourceLinkCard components)

**Placeholder Resources (with URLs):**
- Firewise USA - https://www.nfpa.org/public-education-and-research/wildfire/firewise
- CAL FIRE - https://www.fire.ca.gov
- Orange County Fire Authority (OCFA) - https://www.ocfa.org
- City of San Clemente - https://www.sanclemente.gov
- Defensible Space Guide - https://www.fire.ca.gov/what-we-do/engineering-and-building/defensible-space
- Home Hardening Guide - https://www.fire.ca.gov/what-we-do/engineering-and-building/home-hardening

**Acceptance Criteria:**

- [ ] Page title displays correctly
- [ ] Intro text displays (can be placeholder)
- [ ] 6 resource cards display in grid
- [ ] Each card has title, description, and link
- [ ] Cards use ResourceLinkCard component
- [ ] Grid is responsive (3 columns desktop, 1 mobile)
- [ ] Links are clickable and point to correct external URLs
- [ ] External links open in new tab with rel="noopener noreferrer"
- [ ] Page is fully responsive
- [ ] No console errors
- [ ] Build succeeds

---

### TICKET-016: Contact Page

**Phase:** 2 - MVP Pages  
**Priority:** High  
**Estimated Effort:** 3-4 hours  
**Dependencies:** All Phase 1 components

**Description:**

Build the Contact page (`app/contact/page.tsx`) with a functional contact form using Resend for email delivery. The form sends to hello@goatsofsanclemente.com.

**Technical Details:**

**Sections:**
1. Page title: "Contact Us"
2. Intro text
3. Contact form

**Form Fields:**
- Name (text input, required)
- Email (email input, required)
- Subject (text input, required)
- Message (textarea, required)
- Submit button

**Backend:**
- API route: `app/api/contact/route.ts`
- Use Resend SDK for email delivery
- Validate form data
- Return success/error responses

**Environment Variables:**
- RESEND_API_KEY (required for production)
- CONTACT_EMAIL (hello@goatsofsanclemente.com)

**Acceptance Criteria:**

- [ ] Page title displays correctly
- [ ] Intro text displays
- [ ] Contact form displays all 4 fields
- [ ] All fields are required
- [ ] Form validates on submit
- [ ] Form submits to API route
- [ ] API route sends email via Resend (if API key present)
- [ ] Success message displays after successful submission
- [ ] Error message displays on failure
- [ ] Form clears after successful submission
- [ ] If no API key, form logs to console and shows success
- [ ] Form is responsive
- [ ] Form is accessible (keyboard navigation, labels)
- [ ] No console errors
- [ ] Build succeeds

---

### TICKET-017: Donate Page

**Phase:** 2 - MVP Pages  
**Priority:** Medium  
**Estimated Effort:** 1 hour  
**Dependencies:** TICKET-005 (Hero component)

**Description:**

Build the Donate page (`app/donate/page.tsx`) with a "Coming Soon" message. This page is linked from the Donate CTA button in the header and navigation.

**Technical Details:**

**Sections:**
1. Simple hero or header
2. "Coming Soon" message
3. Explanatory text
4. Return to home link

**Content:**
- "Donation Platform Coming Soon"
- "We're working on setting up a secure donation platform. Check back soon!"
- Link back to home page

**Acceptance Criteria:**

- [ ] Page displays "Coming Soon" message prominently
- [ ] Explanatory text displays
- [ ] Return to home link is present and functional
- [ ] Page is accessible from Donate CTA in header
- [ ] Page is accessible from Donate link in navigation
- [ ] Page is responsive
- [ ] No console errors
- [ ] Build succeeds

---

## PHASE 3: Polish & Launch Prep

### TICKET-018: Mobile Responsiveness

**Phase:** 3 - Polish & Launch  
**Priority:** High  
**Estimated Effort:** 3-4 hours  
**Dependencies:** All Phase 2 pages

**Description:**

Test and fix mobile responsiveness across all pages and components. Ensure the site works correctly on mobile devices (320px and up), tablets (768px and up), and desktop (1024px and up).

**Technical Details:**

**Test Breakpoints:**
- Mobile: 320px, 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1440px, 1920px

**Focus Areas:**
- Hamburger menu functionality
- Table stacking on mobile
- Grid layouts (3-col → 2-col → 1-col)
- Touch-friendly buttons (min 44px tap target)
- Font sizes readable on mobile
- Images scale correctly
- No horizontal scroll

**Acceptance Criteria:**

- [ ] All pages render correctly at 320px width
- [ ] All pages render correctly at 768px width
- [ ] All pages render correctly at 1024px width
- [ ] Hamburger menu opens and closes correctly
- [ ] Hamburger menu links are clickable
- [ ] Tables stack correctly on mobile (PartnerRoleTable)
- [ ] Grids stack correctly (MissionCardGrid, CoreValueGrid, etc.)
- [ ] All buttons are at least 44px tall
- [ ] All text is readable at mobile sizes
- [ ] Images scale without distortion
- [ ] No horizontal scroll on any page
- [ ] No layout breaks on any breakpoint
- [ ] Tested on Chrome, Safari, Firefox (mobile and desktop)

---

### TICKET-019: Accessibility Pass

**Phase:** 3 - Polish & Launch  
**Priority:** High  
**Estimated Effort:** 3-4 hours  
**Dependencies:** All Phase 2 pages

**Description:**

Conduct a full accessibility audit and fix any issues. Ensure the site meets WCAG 2.1 AA standards for color contrast, semantic HTML, keyboard navigation, and ARIA labels.

**Technical Details:**

**Audit Areas:**
- Color contrast (WCAG AA: 4.5:1 for normal text, 3:1 for large text)
- Semantic HTML (proper heading hierarchy, landmark regions)
- Keyboard navigation (all interactive elements focusable)
- ARIA labels (for icons, buttons, complex widgets)
- Alt text (for all images)
- Focus indicators (visible focus rings)
- Form labels (all inputs have associated labels)

**Tools:**
- Lighthouse accessibility audit
- axe DevTools
- Manual keyboard navigation test

**Acceptance Criteria:**

- [ ] Lighthouse accessibility score is 90+
- [ ] All color contrasts meet WCAG AA (4.5:1 for normal text)
- [ ] Heading hierarchy is correct (h1 → h2 → h3, no skips)
- [ ] All interactive elements are keyboard focusable
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] All images have alt text (or alt="" for decorative)
- [ ] All form inputs have associated labels
- [ ] ARIA labels present where needed
- [ ] Landmark regions present (header, nav, main, footer)
- [ ] Skip to main content link present (optional but recommended)
- [ ] No accessibility violations in axe DevTools
- [ ] Site is usable with keyboard only

---

### TICKET-020: SEO & Metadata

**Phase:** 3 - Polish & Launch  
**Priority:** High  
**Estimated Effort:** 3-4 hours  
**Dependencies:** All Phase 2 pages

**Description:**

Implement comprehensive SEO and metadata for all pages. Include page titles, descriptions, Open Graph tags, Twitter cards, sitemap, and robots.txt.

**Technical Details:**

**Per-Page Metadata:**
- Unique title for each page
- Unique description for each page
- Open Graph tags (title, description, image, url, type)
- Twitter card tags (card, title, description, image)

**Global SEO:**
- `app/sitemap.xml` (dynamic sitemap)
- `app/robots.ts` (robots.txt configuration)
- Canonical URLs
- Structured data (JSON-LD for Organization and NonprofitType)
- Internal linking strategy between related pages

**Topic Clusters (from handoff):**
- San Clemente wildfire resilience
- San Clemente wildfire preparedness
- defensible space San Clemente
- home hardening San Clemente
- Firewise USA San Clemente
- Zone Zero wildfire preparedness
- native habitat wildfire resilience
- wildfire community education
- wildfire volunteer San Clemente

**Content:**
- Use metadata suggestions from handoff document section 14
- Site title: "San Clemente Wildfire Resilience Foundation"
- Homepage title: "San Clemente Wildfire Resilience Foundation | Preparedness, Prevention & Community Action"
- Homepage description: "A citizen-led San Clemente nonprofit focused on wildfire prevention, preparedness, environmental stewardship, trusted education, and community action."

**Acceptance Criteria:**

- [ ] All pages have unique titles
- [ ] All pages have unique descriptions
- [ ] All pages have Open Graph tags
- [ ] All pages have Twitter card tags
- [ ] Sitemap.xml generates dynamically
- [ ] Sitemap includes all pages
- [ ] Robots.txt is present and configured
- [ ] Canonical URLs are set
- [ ] Metadata matches handoff document suggestions
- [ ] Open Graph image is set (use logo or create OG image)
- [ ] No duplicate meta tags
- [ ] Topic clusters reflected in page content and headings
- [ ] Internal linking connects related pages (e.g., Wildfire Resilience ↔ Programs, Partners ↔ Get Involved)
- [ ] Structured data validates (use Google Rich Results Test)
- [ ] Build succeeds with no errors

---

### TICKET-021: Performance Optimization

**Phase:** 3 - Polish & Launch  
**Priority:** Medium  
**Estimated Effort:** 2-3 hours  
**Dependencies:** All Phase 2 pages

**Description:**

Optimize site performance for fast load times and good Core Web Vitals. Focus on image optimization, font loading, bundle size, and Lighthouse performance score.

**Technical Details:**

**Image Optimization:**
- Use next/image for all images
- Proper sizing and formats (WebP, AVIF)
- Lazy loading for below-fold images
- Proper width/height attributes

**Font Loading:**
- Use next/font/google for Inter
- Font display: swap
- Preload critical fonts

**Bundle Optimization:**
- Analyze bundle with @next/bundle-analyzer
- Remove unused dependencies
- Code splitting (automatic with Next.js)

**Performance Targets:**
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

**Acceptance Criteria:**

- [ ] All images use next/image component
- [ ] All images have proper width/height attributes
- [ ] Inter font loads with font-display: swap
- [ ] Lighthouse Performance score is 90+
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Total Blocking Time < 200ms
- [ ] Cumulative Layout Shift < 0.1
- [ ] Bundle size is reasonable (< 200KB initial JS)
- [ ] No unnecessary dependencies
- [ ] Build succeeds with no errors

---

## PHASE 4: Final Review

### TICKET-022: Content Verification

**Phase:** 4 - Final Review  
**Priority:** High  
**Estimated Effort:** 2 hours  
**Dependencies:** All previous tickets

**Description:**

Conduct a final review of all content to ensure it matches the handoff document exactly. Verify that "future programs" language is preserved, "connector/advocate" positioning is maintained, and all Bob Smith placeholders are in place.

**Technical Details:**

**Review Checklist:**
- Compare all page content to handoff document
- Verify "may offer", "hope to build" language for programs
- Verify "connector and advocate" language for foundation role
- Verify Bob Smith names are used for board members
- Verify placeholder images use scwrf-logo.png
- Verify all source citations are present
- Verify no content implies programs currently exist
- Verify no content implies foundation has agency authority

**Acceptance Criteria:**

- [ ] All page content matches handoff document
- [ ] Programs use "may offer", "hope to build" language
- [ ] Foundation described as "connector and advocate"
- [ ] No language implies programs currently exist
- [ ] No language implies foundation has agency authority
- [ ] Bob Smith names used for all board members
- [ ] Placeholder images use scwrf-logo.png
- [ ] All source citations present and correct
- [ ] San Clemente-specific focus maintained
- [ ] Nonpartisan tone maintained
- [ ] No political visual cues

---

### TICKET-023: Final Testing & Build

**Phase:** 4 - Final Review  
**Priority:** High  
**Estimated Effort:** 2-3 hours  
**Dependencies:** All previous tickets

**Description:**

Conduct final testing across browsers and devices, verify all links work, test contact form submission, and perform a final production build. Ensure the site is ready for deployment.

**Technical Details:**

**Testing:**
- Cross-browser test (Chrome, Firefox, Safari, Edge)
- Mobile device test (iOS Safari, Android Chrome)
- Contact form submission test
- Link validation (all internal and external links)
- Form validation test

**Build:**
- Production build (`npm run build`)
- Verify no build errors
- Verify no console errors
- Test production build locally (`npm start`)

**Acceptance Criteria:**

- [ ] Site renders correctly in Chrome
- [ ] Site renders correctly in Firefox
- [ ] Site renders correctly in Safari
- [ ] Site renders correctly in Edge
- [ ] Site renders correctly on iOS Safari
- [ ] Site renders correctly on Android Chrome
- [ ] All internal links work (no 404s)
- [ ] All external partner links work
- [ ] Contact form submits successfully
- [ ] Contact form shows success message
- [ ] Contact form validates correctly
- [ ] Production build succeeds with no errors
- [ ] No console errors in production build
- [ ] Production build runs locally without errors
- [ ] All pages accessible and render correctly
- [ ] Site is ready for deployment

---


### TICKET-024: Not Found (404) Page

**Phase:** 2 - MVP Pages  
**Priority:** Low  
**Estimated Effort:** 1 hour  
**Dependencies:** TICKET-001, TICKET-003

**Description:**

Create a custom 404 Not Found page (`app/not-found.tsx`) that matches the SCWRF design system. This page displays when users navigate to a non-existent route. It should be friendly, on-brand, and help users find their way back to valid content.

**Technical Details:**

- Use Next.js `not-found.tsx` convention
- Display friendly message: "Page Not Found" or "We couldn't find that page"
- Include brief explanatory text
- Provide link back to home page
- Include links to key pages (Wildfire Resilience, About, Contact)
- Use design system colors and typography
- Optional: Include search suggestion or site map links
- Responsive design

**Acceptance Criteria:**

- [ ] Custom 404 page renders for invalid routes
- [ ] Page displays friendly error message
- [ ] Home link is present and functional
- [ ] Links to key pages are present
- [ ] Page uses design system styling
- [ ] Page is responsive
- [ ] Build succeeds with no errors

---

### TICKET-025: Content Data Files

**Phase:** 2 - MVP Pages  
**Priority:** Medium  
**Estimated Effort:** 2-3 hours  
**Dependencies:** TICKET-001

**Description:**

Create centralized content data files to separate content from component logic. This makes the site easier to maintain and update. All page copy from the handoff document should be organized into TypeScript data files that components can import.

**Technical Details:**

Create data files in `content/` or `data/` directory:

- `hero.ts` - Hero section content (eyebrow, H1, intro, vision, CTAs)
- `vision-purpose-mission.ts` - Guiding framework cards
- `core-values.ts` - 6 core values with titles and descriptions + "Our Focus"
- `programs.ts` - 3 program descriptions with future-language
- `partner-roles.ts` - PartnerRoleTable data rows
- `wildfire-resilience.ts` - Resilience content, practical steps, local context
- `organizational-role.ts` - How We Work, Clear Boundary, The Result
- `resources.ts` - Resource links with URLs and descriptions
- `metadata.ts` - SEO metadata for each page

**Acceptance Criteria:**

- [ ] All page content extracted into data files
- [ ] Data files are properly typed with TypeScript interfaces
- [ ] Content matches handoff document exactly
- [ ] "Future" language preserved for programs in data files
- [ ] Components import from data files instead of hardcoding content
- [ ] Data files are organized in logical directory structure
- [ ] Build succeeds with no errors
- [ ] No content is duplicated between data files

---

### TICKET-026: Internal Linking & Topic Clusters

**Phase:** 3 - Polish & Launch  
**Priority:** Medium  
**Estimated Effort:** 1-2 hours  
**Dependencies:** TICKET-020, All Phase 2 pages

**Description:**

Implement internal linking strategy across all pages to improve SEO and user navigation. Ensure related pages link to each other using descriptive anchor text that incorporates the topic clusters from the handoff document.

**Technical Details:**

**Internal Links to Add:**
- Home → Wildfire Resilience (from "What Wildfire Resilience Means" section)
- Home → Programs (from "Programs We Hope to Build" section)
- Home → Get Involved (from hero CTA)
- Wildfire Resilience → Programs (related education programs)
- Wildfire Resilience → Resources (for further reading)
- Programs → Get Involved (volunteer CTA)
- Partners → Get Involved (partnership inquiry)
- About → Wildfire Resilience (mission context)
- Resources → Wildfire Resilience (topic context)
- Get Involved → Contact (form link)

**Topic Cluster Keywords to Weave Into Content:**
- San Clemente wildfire resilience
- San Clemente wildfire preparedness
- defensible space San Clemente
- home hardening San Clemente
- Firewise USA San Clemente
- Zone Zero wildfire preparedness
- native habitat wildfire resilience
- wildfire community education
- wildfire volunteer San Clemente

**Acceptance Criteria:**

- [ ] All pages have at least 2 internal links to related pages
- [ ] Internal links use descriptive anchor text (not "click here")
- [ ] Topic cluster keywords appear naturally in headings and body text
- [ ] No orphan pages (every page reachable from home)
- [ ] Navigation flow is logical and user-friendly
- [ ] Build succeeds with no errors

---

## Ticket Summary

**Total Tickets:** 26

**By Phase:**
- Phase 0 (Foundation): 3 tickets
- Phase 1 (Components): 5 tickets
- Phase 2 (Pages): 12 tickets
- Phase 3 (Polish): 5 tickets
- Phase 4 (Review): 2 tickets

**By Priority:**
- High: 15 tickets
- Medium: 10 tickets
- Low: 1 ticket

**Total Estimated Effort:** 68-92 hours (4-5 days)

---

## Execution Order

1. **Phase 0** (Day 1 Morning): TICKET-001 → TICKET-002 → TICKET-003
2. **Phase 1** (Day 1 Afternoon): TICKET-004 → TICKET-005 → TICKET-006 → TICKET-007 → TICKET-008
3. **Phase 2** (Day 2): TICKET-009 → TICKET-010 → TICKET-011 → TICKET-012 → TICKET-013 → TICKET-014 → TICKET-015 → TICKET-016 → TICKET-017 → TICKET-024 → TICKET-025
4. **Phase 3** (Day 3): TICKET-018 → TICKET-019 → TICKET-020 → TICKET-021 → TICKET-026
5. **Phase 4** (Day 4): TICKET-022 → TICKET-023

---

**Document Version:** 2.0  
**Last Updated:** 2026-08-26  
**Status:** Architect Review Complete - Ready for Execution
