# Homepage Mockup Review

Purpose: capture the visual system from the generated Ochre & Chrome homepage mockup so it can be implemented faithfully later.

Generated asset:
[ig_04e6d0136e9d72660169f030112cd08191938db46f663c6aa6.png](C:/Users/pasca/.codex/generated_images/019dd237-0934-71b1-aed7-3f9a67252aa8/ig_04e6d0136e9d72660169f030112cd08191938db46f663c6aa6.png)

## Overall Read

The mockup lands in a strong editorial-commerce space. It reads as a premium interiors publication with a shoppable layer, not as a blog and not as an ecommerce catalog. The page feels image-led, tactile, and materially rich, with a dark cinematic opening that transitions into warm cream editorial sections below.

## Page Structure

1. Dark immersive hero with top navigation, H1, short subcopy, two CTAs, and a lead magnet card
2. Shop by Aesthetic split cards: Neo Deco and Afrohemian
3. Latest Styling Guides editorial 3-card row
4. Metrics strip in navy
5. Testimonial moment with supporting image
6. The Curated Cart 4-up product grid
7. Trend Report feature with large image and navy inset list card
8. Social / lifestyle strip
9. Footer

This is slightly richer than the original 6-section homepage plan, but the added metrics and testimonial sections improve pacing and proof without breaking the brand.

## Hero Composition

- The hero is the strongest part of the mockup.
- It uses a full-bleed interior photograph with deep shadows, brass lighting, velvet seating, marble surfaces, and warm drapery.
- The H1 sits large on the left in editorial serif with a strong 3-line composition.
- Supporting text is short and readable, held away from the brightest part of the image.
- Primary CTA is ochre. Secondary CTA is quieter and text-first.
- The lead magnet card overlaps the lower part of the hero and creates a clean transition into the lighter sections below.

Implementation note:
Keep the hero mostly image-driven. Do not replace it with a neutral text block or a standard split layout.

## Typography System

- Large editorial serif for H1 and major section titles
- Clean sans for body copy and product metadata
- Small uppercase labels to introduce sections
- Strong contrast between display text and supporting copy

The type scale is restrained rather than loud. It feels expensive because the line lengths are short and the whitespace is generous.

## Color Behavior

- The page uses a two-world palette:
- Deep navy and near-black tones in the hero, metrics strip, and footer
- Warm cream and oatmeal surfaces for the main content body
- Ochre for the primary action color
- Terracotta and brass tones appear in imagery more than in UI chrome

Implementation note:
Preserve the cream-body / dark-anchor contrast. It gives the page rhythm and prevents the editorial sections from feeling washed out.

## Section Rhythm

- The page alternates between dense image moments and calmer cream sections
- Major sections have consistent vertical spacing
- Cards are used, but the layout avoids repetitive "same-size box" patterns
- The right slice uses a strong product grid, then a large feature image, then a compressed footer cluster

The rhythm feels curated because each section changes scale and media ratio without changing the overall brand language.

## Component Language

- Cards use subtle 4px to 8px corner radii
- Product cards are quiet and cream-based, with isolated objects and minimal metadata
- Editorial cards rely on imagery first, then short serif titles
- Navigation is thin and understated
- The metrics strip works because it is compact and typographic, not dashboard-like
- The trend report section uses a strong inset navy panel as a contrasting information block

## Imagery Rules Visible In The Mockup

- Full-bleed lifestyle imagery for the hero
- Tall and square editorial crops for category and guide sections
- Isolated product cutouts on warm neutral backgrounds for the commerce section
- Large atmospheric image block for the trend report
- Small supporting lifestyle crops near the footer

The internal image system is coherent. Different image modes are used, but each sits inside a clear frame and shared palette world.

## What To Preserve In Build

- The dark cinematic hero
- The overlapping lead magnet card
- The split aesthetic cards
- The cream editorial body with navy anchors
- The isolated product grid treatment
- The trend report composition with image plus inset list panel
- The serif-led hierarchy and quiet sans support

## What To Tighten During Implementation

- The hero headline is slightly longer than ideal for the skill defaults; keep the same wording but tune line breaks carefully
- Some footer content is visually dense and should be simplified in code
- The social strip near the footer can become cleaner if reduced to three stronger images instead of four smaller ones
- The page should keep the same mood while using real, licensed photography and clearer responsive rules

## Build Recommendation

When this gets implemented, the frontend should prioritize:

- art-directed photography before decorative graphics
- fixed media ratios
- serif headline restraint
- generous vertical spacing
- a clean mobile collapse that preserves the hero image priority
- a restrained button system with ochre used sparingly
