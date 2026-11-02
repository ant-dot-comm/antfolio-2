# Typography system

One typeface, eight text styles, one rule: **every piece of text on the site uses a `type-*` class.** The classes live in `src/index.scss` inside `@layer components`, so a Tailwind color utility on the same element (for example `text-white`) always wins over the style's default color.

## Typeface

**Poppins**, loaded from Google Fonts in `public/index.html` with weights **400, 500, 600 and 800**.

| Weight | Use |
|---|---|
| 400 Regular | Section titles, project titles, body, small text |
| 500 Medium | Lead text, emphasized body lines, buttons |
| 600 Semibold | Sub-headings, labels |
| 800 | Not used by the scale (loaded for the original design) |

Weight 300 is **not** loaded. `font-light` falls back to 400, so don't use it in new work. The hero wordmark (`HeaderNames.js`) still has `font-light` on "antoni" and renders at 400, same as it always has.

## The scale

| Class | Size | Line height | Weight | Default color | Use for |
|---|---|---|---|---|---|
| `type-h2` | 40 → 64px (fluid) | 1.1 | 400 | none (set `text-theme-primary` or `text-white`) | Section titles: Selected Work, What I Do, Experience, How I Got Here, Say Hello |
| `type-h3` | 24 → 34px (fluid) | 1.2 | 400 | gray-800 | Project titles |
| `type-h4` | 20px | 1.4 | 600 | gray-800 | Row and item headings: What I Do disciplines, Experience companies |
| `type-lead` | 18 → 20px (fluid) | 1.5 | 500 | gray-800 | The tagline under the hero |
| `type-body` | 16px | 1.625 | 400 | gray-700 | Paragraphs and descriptions (add `font-medium text-gray-800` for an emphasized line) |
| `type-small` | 14px | 1.5 | 400 | gray-600 | Supporting detail, meta, the agents note body |
| `type-label` | 13px | 1.25 | 600 | inherits | Nav links, tool chips, Experience years, badges, small UI text |
| `type-button` | 16px | 1.25 | 500 | inherits | Buttons (`ButtonLink` applies it) |

The hero wordmark ("antoni" / "commodore") is a display treatment, not part of the scale. It keeps its own `clamp()` sizes in `HeaderNames.js`.

Fluid sizes use `clamp()`, so they scale smoothly between phone and wide desktop without breakpoint jumps.

## Hierarchy rules

1. **One `h1`**: the name wordmark. Then `h2` per section, `h3` per item inside a section, `h4` for rows inside an item. Never skip a level for visual size. Pick the class that matches the level.
2. **Section titles outrank everything below them.** `type-h2` is the largest text after the wordmark, and carries the theme color. Item headings (`type-h3`) use the same regular weight but are smaller and dark, so a project never outweighs or reads as a new section.
3. **Nothing below 13px.** `type-label` is the floor. Don't use Tailwind's `text-xs` (10px) or `text-sm` (12px) for text; this project's Tailwind config remaps those sizes.
4. **Body copy is 16px with 1.625 line height.** Don't add `leading-*` to paragraphs; the class already sets it.
5. **Color follows role.** Headings gray-800, body gray-700, supporting text gray-600. Theme color is for section titles, labels like the Experience years, and links. On dark theme-color backgrounds (Say Hello, the agents note), add `text-white` to each text element.
6. **Emphasis inside a style** uses weight (`font-medium`, `font-semibold`) or `italic`, not a different size.

## Where each style is used

| Area | Element | Class |
|---|---|---|
| Header | Nav links (pills on desktop, menu on mobile) | `type-label` |
| Header | "Creative Technologist" badge | `type-label`, `md:text-base` on desktop |
| Header | "Twilight in Gotham" badge | `type-label` |
| Hero tagline | Quote | `type-lead` |
| Any section | Section title (`Section.js`) | `type-h2` |
| Selected Work | Project title | `type-h3` |
| Selected Work | Description | `type-body` |
| Selected Work | Buttons | `type-button` (via `ButtonLink`) |
| What I Do | Discipline name | `type-h4` |
| What I Do | Statement | `type-body font-medium text-gray-800` |
| What I Do | Detail | `type-small` |
| What I Do | Tool chips | `type-label` |
| What I Do | Agents note | `type-body font-semibold` (headline), `type-small` (body), `type-label` (sign-off), all `text-white` |
| Experience | Years | `type-label text-theme-primary-dark` |
| Experience | Company | `type-h4` |
| Experience | Job title | `type-body font-medium text-gray-800` |
| Experience | Description | `type-body` |
| Experience | Education: label, degree, school | `type-label text-theme-primary-dark`, `type-body font-medium text-gray-800`, `type-small` |
| About | Story paragraphs | `type-body` (on the wrapper) |
| Say Hello | Body | `type-body text-white` |

## Adding new text

1. Decide what the text *is* (section title, item heading, paragraph, meta, label), not how big it should look.
2. Use the matching `type-*` class and the matching HTML element.
3. Only add a color utility when the default doesn't fit (theme color, or white on a dark background).
4. If nothing fits, add a new style to `src/index.scss` and to this doc, instead of one-off `text-*` sizes in a component.
