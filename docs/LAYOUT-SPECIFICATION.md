# SCWRF Layout Specification

**Version:** 1.0  
**Created:** 2026-08-27  
**Status:** Active Standard

---

## Problem Statement

The website had three inconsistent width systems and excessive padding, creating visual inconsistency as users navigate between pages. The header would align differently with content on each page.

## Solution: Unified Layout System

### Standard Content Width: 1200px

**One width for all pages:** `content-hero` (1200px)

| Class Name | Width | Status |
|------------|-------|--------|
| `content-hero` | 1200px | **STANDARD** - Use for all page content |
| `content-reading` | 820px | **DEPRECATED** - Do not use |
| `content-wide` | 1180px | **DEPRECATED** - Do not use |
| `max-w-7xl` | 1280px | **DEPRECATED** - Do not use |

### Standard Section Padding

**All page sections use this pattern:**

```tsx
<section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[color]">
  <div className="content-hero mx-auto">
    {/* Content */}
  </div>
</section>
```

| Breakpoint | Vertical Padding | Horizontal Padding |
|------------|------------------|-------------------|
| Mobile (< 640px) | `py-12` (48px) | `px-4` (16px) |
| Tablet (640-1024px) | `py-16` (64px) | `sm:px-6` (24px) |
| Desktop (> 1024px) | `py-16` (64px) | `lg:px-8` (32px) |

### Component Padding Standards

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| **SectionIntro** (top margin) | `mt-12` (48px) | `md:mt-16` (64px) | - |
| **SectionIntro** (bottom margin) | `mb-6` (24px) | - | - |
| **Cards** (MissionCardGrid, ProgramCard, CoreValueGrid) | `p-4` (16px) | `sm:p-6` (24px) | - |
| **Panels** (VisionCallout, LocalContextPanel, FutureProgramNotice) | `p-4` (16px) | `sm:p-6` (24px) | `md:p-8` (32px) |

### Page Template

Every page follows this structure:

```tsx
export default function PageName() {
  return (
    <article>
      {/* Section 1 */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="content-hero mx-auto">
          <h1>Page Title</h1>
          {/* Content */}
        </div>
      </section>

      {/* Section 2 - alternating background */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-soft-neutral">
        <div className="content-hero mx-auto">
          {/* Content */}
        </div>
      </section>

      {/* Continue alternating backgrounds */}
    </article>
  );
}
```

---

## Implementation Checklist

### Files to Update

**Components (8 files):**
- [ ] `app/components/SectionIntro.tsx` - Reduce margins
- [ ] `app/components/MissionCardGrid.tsx` - Reduce card padding
- [ ] `app/components/ProgramCard.tsx` - Reduce card padding
- [ ] `app/components/CoreValueGrid.tsx` - Reduce card padding
- [ ] `app/components/VisionCallout.tsx` - Reduce panel padding
- [ ] `app/components/LocalContextPanel.tsx` - Reduce panel padding
- [ ] `app/components/FutureProgramNotice.tsx` - Reduce panel padding
- [ ] `app/components/PartnerRoleTable.tsx` - Verify padding

**Pages (9 files):**
- [ ] `app/page.tsx` (home) - Change max-w-7xl to content-hero
- [ ] `app/about/page.tsx` - Change content-reading/content-wide to content-hero
- [ ] `app/wildfire-resilience/page.tsx` - Change content-reading to content-hero
- [ ] `app/programs/page.tsx` - Change max-w-[820px] to content-hero
- [ ] `app/partners/page.tsx` - Change max-w-[820px]/max-w-[1180px] to content-hero
- [ ] `app/get-involved/page.tsx` - Change max-w-[820px] to content-hero
- [ ] `app/resources/page.tsx` - Change max-w-[1180px] to content-hero
- [ ] `app/contact/page.tsx` - Change content-reading to content-hero
- [ ] `app/donate/page.tsx` - Change max-w-3xl to content-hero

**Total:** 17 files

---

## Before/After Examples

### Section Padding

```tsx
// ❌ BEFORE (excessive)
<section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">

// ✅ AFTER (standard)
<section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
```

### Content Width

```tsx
// ❌ BEFORE (inconsistent)
<div className="max-w-7xl mx-auto">        // Home: 1280px
<div className="content-reading">          // About: 820px
<div className="content-wide">             // About grids: 1180px
<div className="max-w-[820px]">            // Programs: 820px

// ✅ AFTER (unified)
<div className="content-hero mx-auto">     // All pages: 1200px
```

### SectionIntro Margins

```tsx
// ❌ BEFORE (excessive)
<div className="mt-16 md:mt-24 mb-8">      // 64-96px top, 32px bottom

// ✅ AFTER (reduced)
<div className="mt-12 md:mt-16 mb-6">      // 48-64px top, 24px bottom
```

### Card Padding

```tsx
// ❌ BEFORE (excessive)
<div className="p-5 sm:p-8">               // 20-32px

// ✅ AFTER (reduced)
<div className="p-4 sm:p-6">               // 16-24px
```

### Panel Padding

```tsx
// ❌ BEFORE (excessive)
<div className="p-6 sm:p-8 lg:p-10 xl:p-12">  // 24-48px

// ✅ AFTER (reduced)
<div className="p-4 sm:p-6 md:p-8">           // 16-32px
```

---

## Testing Checklist

After implementation, verify:

- [ ] All pages have identical content width (1200px)
- [ ] Header aligns perfectly with content on every page
- [ ] Section padding is consistent (48-64px)
- [ ] Card padding is reduced (16-24px)
- [ ] Panel padding is reduced (16-32px)
- [ ] SectionIntro margins are reduced (48-64px top, 24px bottom)
- [ ] Build succeeds with no errors
- [ ] Mobile responsiveness still works
- [ ] No horizontal scroll on any page

---

## Rationale

**Why 1200px?**
- Middle ground between 1180px and 1280px
- Already defined in design system as `content-hero`
- Provides good balance for both text and grid layouts
- Matches the Hero component (the visual standard)

**Why reduce padding by 30-40%?**
- Previous padding was excessive (40-128px)
- Created too much white space
- Made content feel disconnected
- New padding (48-64px sections, 16-32px components) is more balanced

**Why unified width?**
- Visual consistency across pages
- Header aligns perfectly with content
- Users don't experience "jumping" when navigating
- Professional, polished appearance

---

## Maintenance

When adding new pages or components:

1. **Always use `content-hero`** for content width
2. **Always use `py-12 md:py-16`** for section padding
3. **Always use `px-4 sm:px-6 lg:px-8`** for horizontal padding
4. **Follow the page template** structure
5. **Test on mobile, tablet, desktop** breakpoints

---

**Document Owner:** Chief Architect  
**Last Updated:** 2026-08-27  
**Next Review:** After layout fixes are deployed
