# San Clemente Wildfire Resilience Foundation - Website Handoff

Source: **San Clemente Wildfire Resilience Foundation - Community Overview, August 2026** (5 pages)

This document converts the Community Overview into a practical website build brief. Source copy is preserved as closely as possible. Anything labeled **Proposed** is a web-information-architecture recommendation and is not additional Foundation-approved copy.

---

## 1. Brand / Asset Inventory

### Primary logo

- File: `scwrf-logo.png`
- Extracted directly from the front page of the PDF at its native embedded resolution.
- Dimensions: **1254 x 1254 px**
- Format: PNG, RGB
- Background: white
- Do not recreate from a screenshot; use the extracted asset.
- The mark contains the circular name lockup, three community figures, native plant / landscape imagery, and an orange grazing animal.

Recommended website usage:

- Header: use at a visually smaller size; preserve generous clear space around the circle.
- Hero / About: larger use is appropriate.
- Do not crop the outer circular rule or distort the aspect ratio.
- Avoid placing over busy photography unless a solid white container is retained.

### Secondary source graphic

Page 2 contains a **Local Responsibility Area Fire Hazard Severity Zones** map credited to **City of San Clemente / State Fire Marshal, March 24, 2025**. The PDF version is small (embedded at roughly 380 x 456 px including transparency) and should not be treated as a high-resolution web asset. For production, source the current map from the City / State Fire Marshal if the Foundation has permission to display it.

---

## 2. Proposed Site Map

The source document is compact enough for a strong single-page MVP, but the content naturally supports a small multi-page nonprofit site.

### Recommended multi-page structure

```text
/
├── Home
├── Wildfire Resilience
│   ├── Why Resilience Matters
│   ├── Local Context
│   └── Practical Steps
├── About
│   ├── Vision
│   ├── Purpose
│   ├── Mission
│   ├── Guiding Idea
│   ├── Organizational Role
│   └── Core Values
├── Programs
│   ├── Community Education & Preparedness
│   ├── Environmental Education & Stewardship
│   └── Youth & Career Learning
├── Partners
│   ├── How We Work With Partners
│   └── Roles & Boundaries
├── Get Involved
│   ├── Volunteer
│   └── Community / Partner Interest
├── Resources
└── Contact
```

### Recommended primary navigation

**Home | Wildfire Resilience | About | Programs | Partners | Get Involved | Resources**

Use **Contact** as a button or utility link rather than consuming primary-nav space.

### Important content gaps before launch

The source PDF does **not** provide the following, so these should be collected rather than invented:

- Contact email / phone
- Mailing address
- Board / leadership names and bios
- Donation method or donation language
- Volunteer intake process
- Partner inquiry process
- Social media accounts
- EIN / tax-exempt status language beyond “A California Nonprofit Public Benefit Corporation”
- Privacy policy / terms
- Formal links to City, OCFA, CAL FIRE, Firewise USA, schools, or other partners
- Photography / approved image library
- Current-program status beyond the cautious language in the overview

---

## 3. Recommended Home Page Structure

### Header

- Logo
- Primary navigation
- CTA: **Get Involved** or **Connect With Us** once the corresponding workflow exists

### Hero

**Eyebrow**  
SAN CLEMENTE

**H1**  
Wildfire Resilience Foundation

**Intro / descriptor**  
A citizen-led nonprofit for wildfire prevention, preparedness, stewardship and community action

**Vision statement**  
A wildfire-resilient San Clemente where informed residents, healthy native landscapes, strong partnerships, and shared preparation protect people, neighborhoods, and nature for future generations.

Suggested CTA pair once destinations exist:

- Learn About Wildfire Resilience
- Get Involved

### Why This Matters

Use the “Why a Grassroots Wildfire Resilience Organization” copy with the Local Context callout and hazard map.

### What Wildfire Resilience Means

Use “From Wildfire Prevention to Wildfire Resilience” plus the four practical bullets.

### Our Mission

Condense the Guiding Framework into three cards or bands:

- Vision
- Purpose
- Mission

Keep the “Guiding Idea” as a highlighted statement.

### How We Help

Use “Our Organizational Role,” emphasizing that the Foundation is a **community connector and advocate**, not a replacement for agencies, regulators, HOAs, schools, or contractors.

### Programs We Hope to Build

Three-card section:

- Community Education and Preparedness
- Environmental Education and Stewardship
- Youth and Career Learning

Visually label these as **future / developing activities**, because the source explicitly says they are long-term ideas rather than current promises.

### Core Values

Six compact value blocks:

- Community First
- Facts and Trusted Guidance
- Care for Nature
- Clear Roles
- Safe and Useful Volunteer Service
- Start Small and Grow With Care

### Footer

Recommended areas once information exists:

- Foundation name and logo
- California Nonprofit Public Benefit Corporation
- Contact
- Partner / resource links
- Privacy / terms
- Copyright

---

## 4. Design System Extracted From the PDF

The source design is clean, civic, nature-oriented, and restrained. It uses a lot of white space, dark evergreen headings, medium green accents, warm ochre labels, pale green callout fields, and dark neutral body copy.

### Core document colors

| Role | Color | Hex | Notes |
|---|---|---:|---|
| Primary dark green | RGB 40, 88, 63 | `#28583F` | Main headings / strong brand text |
| Secondary green | RGB 81, 122, 81 | `#517A51` | Subheads / supporting emphasis |
| Ochre / warm gold | RGB 184, 116, 26 | `#B8741A` | Eyebrows, category labels, small emphasis |
| Body charcoal | RGB 45, 48, 46 | `#2D302E` | Main body copy |
| Muted gray | RGB 103, 108, 104 | `#676C68` | Captions, secondary text |
| Pale green | RGB 230, 238, 232 | `#E6EEE8` | Callout / content-panel background |
| Sage panel | RGB 202, 214, 205 | `#CAD6CD` | Table headers / stronger panel fill |
| Light sage | RGB 217, 229, 220 | `#D9E5DC` | Alternate light panel treatment |
| Soft neutral | RGB 239, 241, 239 | `#EFF1EF` | Quiet section background / table cell fill |
| White | RGB 255, 255, 255 | `#FFFFFF` | Primary page background |
| Thin blue accent | RGB 90, 143, 216 | `#5A8FD8` | Appears as a cover divider; use sparingly |

### Logo palette - approximate sampled colors

The logo uses gradients, so these are representative rather than flat source swatches:

| Role | Approx. hex |
|---|---:|
| Deep logo green | `#0F5736` |
| Mid logo green | `#387459` |
| Sage logo green | `#6C936B` |
| Light sage | `#87AA94` |
| Orange | `#CA690C` |
| Light orange highlight | `#DFA36A` |

For UI elements, prefer the **flat document palette** above. Preserve the logo itself as-is rather than recoloring it.

### Typography

Fonts embedded in the PDF:

- **Aptos** - primary body and much of the interface hierarchy
- **Aptos Bold** - headings / emphasized labels
- **Aptos Italic** - subtitle / caption-style emphasis
- **Calibri Bold** - some small heading / label usage
- Arial and Symbol appear minimally

#### Web recommendation

Use **Aptos** if the project has an appropriate web licensing / delivery path. Otherwise use a modern system sans fallback without trying to mimic it with a decorative font:

```css
font-family: Aptos, "Segoe UI", Arial, sans-serif;
```

The visual character depends more on weight, spacing, restrained color, and generous white space than on a distinctive typeface.

### Type hierarchy

Approximate source hierarchy derived from the PDF:

- Hero title: bold, ~28 pt in print
- Page H1: bold, ~20 pt
- Section heading: bold, ~15 pt
- Subsection heading / emphasized statement: bold, ~13 pt
- Body: ~10-11 pt
- Small labels / footer: ~7-9 pt

Recommended responsive web scale:

```text
Display / Hero H1: 48-64 px desktop, 36-42 px mobile
Page H1:           38-48 px desktop, 32-36 px mobile
H2:                28-34 px
H3:                21-24 px
Body:              17-18 px
Small / Eyebrow:   12-14 px, bold, uppercase where appropriate
Caption:           13-14 px
```

### Layout language

- White background dominates.
- Wide margins and substantial vertical breathing room.
- Left-aligned text on content pages.
- Large, dark-green section headings.
- Ochre uppercase eyebrow labels above important sub-sections.
- Pale green rectangular callouts with very little decoration.
- Tables use thin borders and sage header rows.
- Avoid heavy shadows, rounded “app-like” cards, glossy effects, or dense gradients.
- The logo is the most illustrative element; the surrounding site should remain calm and editorial.

### Recommended web spacing

Use an 8 px spacing system:

```text
8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px
```

Suggested content width:

- Standard reading content: 760-880 px
- Wide sections / two-column layouts: 1120-1240 px
- Hero: max 1200 px

### Buttons

Primary:

- Background: `#28583F`
- Text: white
- Medium radius, not pill-shaped
- Strong but restrained hover state

Secondary:

- White or transparent background
- 1 px border in `#28583F`
- Text in `#28583F`

Warm gold `#B8741A` should generally be reserved for labels / highlights rather than becoming the dominant CTA color.

### Accessibility / UI rules

- Use dark green or charcoal for body text; do not use light sage for text on white.
- Keep pale greens as backgrounds, not body-copy colors.
- Do not depend on green/orange alone to communicate status.
- Use semantic headings and meaningful link labels.
- Any wildfire map or infographic should have alt text and a text explanation.
- Preserve the distinction between **current work** and **activities hoped to be built over time**.

---

## 5. Source Content - Web-Ready Inventory

The copy below comes from the Community Overview and can be mapped into the pages above.

### Brand descriptor

**A citizen-led nonprofit for wildfire prevention, preparedness, stewardship and community action**

### Vision

A wildfire-resilient San Clemente where informed residents, healthy native landscapes, strong partnerships, and shared preparation protect people, neighborhoods, and nature for future generations.

### Corporate descriptor

A California Nonprofit Public Benefit Corporation

---

## 6. Why a Grassroots Wildfire Resilience Organization

San Clemente neighborhoods sit near coastal canyons, open space, and wildland plants. Public agencies provide expertise, emergency response, and public safety. But many choices that shape wildfire safety happen at homes, schools, businesses, HOAs, and open spaces. These choices matter every day, long before a fire starts.

### The Local Context

The 2025 CAL FIRE/Office of the State Fire Marshal map shows that large parts of San Clemente are in Very High Fire Hazard Severity Zones. Home insurance costs are also rising fast. Together, these facts make steady wildfire prevention and preparation more urgent.

**Map credit:** City of San Clemente / State Fire Marshal, March 24, 2025.

### From Wildfire Prevention to Wildfire Resilience

Wildfire prevention is essential, but resilience goes further. It means helping the whole community reduce risk and prepare before a fire starts. Residents, HOAs, schools, businesses, nonprofit groups, public agencies, and landscape contractors all have a part to play. They need clear guidance and shared goals.

The Foundation supports education and community programs on wildfire prevention, defensible space, Firewise USA®, native habitat, fuel reduction, emergency preparation, and care for the environment. Workshops, volunteer programs, youth learning, and outreach can help residents understand the risks and take practical steps.

#### In practical terms, wildfire resilience includes:

- Home hardening, defensible space, Zone Zero, fuel reduction, and home emergency plans.
- Careful open-space management that removes dangerous and invasive plants while protecting native habitat.
- Native plant care that supports habitat, healthy soil, water savings, and erosion control.
- Neighborhoods and HOAs taking practical steps toward Firewise USA® recognition.

### Why the Foundation Matters

The Foundation brings the City, OCFA, HOAs, schools, businesses, nonprofits, and residents together. It helps turn separate programs, rules, and resources into shared action. The goal is to protect people, neighborhoods, and nature.

---

## 7. Our Guiding Framework

### Vision | The Future We Seek

**VISION** A wildfire-resilient San Clemente where informed residents, healthy native landscapes, strong partnerships, and shared preparation protect people, neighborhoods, and nature for future generations.

### Purpose | Why We Exist

**Keep wildfire resilience a community priority.**

The Foundation gives residents and local partners a trusted voice and a practical way to work together. This helps San Clemente reduce wildfire risk, prepare for emergencies, care for nature, and protect quality of life.

### Mission | What We Do

**Educate, connect and mobilize the community.**

We connect residents and partners with facts, education, and ways to help. Our work supports wildfire prevention, defensible space, Firewise USA®, native habitat, fuel reduction, emergency preparation, volunteer service, and shared community action.

### Guiding Idea

**Make wildfire resilience clear, practical, and part of daily life - not only an emergency concern.**

---

## 8. Our Organizational Role

### How We Work With the City, OCFA, HOAs, Schools and Other Partners

The Foundation is San Clemente's nonprofit community connector and advocate. We bring residents, the City, OCFA, HOAs, schools, businesses, nonprofits, and other partners together. We help people find clear information, join useful programs, volunteer safely, and support shared goals.

### A Clear Boundary

The Foundation does not replace or direct the City, OCFA, regulators, HOAs, schools, contractors, or other groups. Each partner keeps its own authority, duties, and decisions.

### Foundation / Partner Roles

| The Foundation Helps | Partners Retain |
|---|---|
| Share trusted guidance in plain language. | Authority over public safety, land use, inspections, emergency response, and property rules. |
| Bring residents, volunteers, experts, businesses, nonprofits, and agencies together. | Technical expertise, professional standards, command, and daily operations. |
| Support volunteers, community programs, and neighborhood action. | Control of their own rules, budgets, approvals, staff, and agreements. |
| Share community needs and ideas with partners. | Responsibility for their own services and decisions. |

### The Result

Residents have a clear place to connect and take part. Partner groups can reach more people. San Clemente can build a shared culture of safety, care, and preparation without copying the work of public agencies.

---

## 9. Core Values

### Community First

We are nonpartisan and serve all of San Clemente. We give residents safe and useful ways to volunteer and help their community.

### Facts and Trusted Guidance

We use and share state law, agency guidance, and reliable facts. This helps people understand their choices and make informed decisions.

### Care for Nature

We speak up for wildfire prevention that also protects native plants and habitat. We promote good care of open space. We do not clear land or plant landscaping.

### Clear Roles

We work with the City, OCFA, HOAs, schools, and other partners. We respect each group's role and do not replace public agencies or contractors.

### Safe and Useful Volunteer Service

Every volunteer role will have a clear purpose, safe steps, and responsible leaders. We use time, money, and other resources with care.

### Start Small and Grow With Care

We start with work we can do well. We learn as we go and grow only when we have the people, partners, and funds to do it right.

### Our Focus

We focus on San Clemente. We connect residents and partners, support safe volunteer work, and directly promote wildfire prevention, preparedness, education, and care for the environment.

---

## 10. Activities We Hope to Build Over Time

These are long-term ideas, not current promises. The Foundation will start small. New programs will depend on volunteers, community interest, trusted partners, funding, and needed approvals. Some ideas may take years to build, and some may change as we learn what San Clemente needs.

### Community Education and Preparedness

- In time, we may offer workshops on home hardening, defensible space, Zone Zero, evacuation plans, and home emergency plans.
- We may help neighborhoods learn about Firewise USA® and plan simple wildfire safety steps together.

### Environmental Education and Stewardship

- We may share information about native plants, water-wise yards, and landscapes that can better handle fire.
- With skilled partners, we may offer lessons for residents, HOAs, landscape companies, and public works staff on habitat care, erosion, careful clearing, and native plant protection.

### Youth and Career Learning

- With partner groups, schools and youth may join outdoor learning, FFA, 4-H, service, summer, internship, and leadership programs. These programs may cover gardens, animal care, targeted grazing, plant care, natural resources, education, and public service.

---

## 11. Content / UX Rules for the Build

1. **Do not imply programs already exist when the source says they are future ideas.** The PDF intentionally uses “may,” “hope to build,” and “long-term ideas, not current promises.” Preserve that distinction.
2. **Do not imply the Foundation has public-agency authority.** Its defined role is connector and advocate; the boundary language is important.
3. **Keep San Clemente local.** The source repeatedly frames the organization as specifically serving San Clemente.
4. **Keep wildfire and environmental stewardship together.** The brand is not simply “brush clearance”; native habitat, soil, water, erosion, and responsible open-space care are part of the positioning.
5. **Use practical language.** The Foundation's own guiding idea is to make wildfire resilience “clear, practical, and part of daily life.”
6. **Avoid political visual cues.** The source explicitly describes the Foundation as nonpartisan.
7. **Use authoritative-source attribution.** Where state law, agency guidance, maps, or safety instructions are displayed, show source and date.

---

## 12. Suggested Reusable Web Components

```text
SiteHeader
Hero
VisionCallout
SectionIntro
LocalContextPanel
SourceCitation
PracticalStepsList
MissionCardGrid
GuidingIdeaBanner
PartnerRoleTable
CoreValueGrid
ProgramCard
FutureProgramNotice
ResourceLinkCard
VolunteerCTA
PartnerCTA
SiteFooter
```

### Component visual treatment

- `VisionCallout`, `GuidingIdeaBanner`, `FutureProgramNotice`: pale green background, dark charcoal text, green bold label.
- `MissionCardGrid`, `CoreValueGrid`, `ProgramCard`: minimal borders; avoid strong shadows.
- `PartnerRoleTable`: sage header, thin neutral borders, high readability on mobile; stack rows if necessary.
- `SourceCitation`: muted gray, smaller type, source + date.

---

## 13. Suggested MVP Build Order

### Phase 1 - Public launch

- Home
- About
- Wildfire Resilience
- Programs
- Partners
- Contact / Get Involved form
- Basic Resources page
- Mobile responsive behavior
- Accessibility pass
- Metadata / Open Graph / favicon

### Phase 2 - Content expansion

- News / updates
- Events / workshops
- Volunteer opportunities
- Firewise USA resources
- Neighborhood / HOA resources
- Native-plant / stewardship resources
- Youth program information
- Partner directory
- Donation workflow, if/when approved

---

## 14. SEO / Metadata Starting Point

These are proposed web metadata, not source copy.

**Site title**  
San Clemente Wildfire Resilience Foundation

**Suggested homepage title**  
San Clemente Wildfire Resilience Foundation | Preparedness, Prevention & Community Action

**Suggested homepage description**  
A citizen-led San Clemente nonprofit focused on wildfire prevention, preparedness, environmental stewardship, trusted education, and community action.

Suggested topic clusters:

- San Clemente wildfire resilience
- San Clemente wildfire preparedness
- defensible space San Clemente
- home hardening San Clemente
- Firewise USA San Clemente
- Zone Zero wildfire preparedness
- native habitat wildfire resilience
- wildfire community education
- wildfire volunteer San Clemente

---

## 15. Build Notes

- The PDF is a **brand/content source**, not a pixel-for-pixel web layout specification.
- Preserve the clean, civic tone while adapting hierarchy and spacing for screens.
- The strongest recurring visual language is: **white + evergreen + sage + warm ochre + pale green panels**.
- Use the extracted logo asset rather than tracing or regenerating it.
- Obtain higher-resolution / current versions of any external maps or agency graphics before production use.
- Confirm contact, leadership, legal/tax, donation, volunteer, and partner information before those sections go live.
