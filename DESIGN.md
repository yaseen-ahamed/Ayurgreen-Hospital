---
name: Serene Healing Identity
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#9b3e3b'
  on-tertiary: '#ffffff'
  tertiary-container: '#ba5551'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#7f2928'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
  surface-subtle: '#EAECF0'
  surface-white: '#FFFFFF'
  forest-dark: '#064E3B'
  mint-light: '#D1FAE5'
typography:
  display-lg:
    fontFamily: manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: manrope
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is crafted for a modern Ayurvedic healthcare context, blending ancient wellness principles with contemporary medical professionalism. The brand personality is **restorative, trustworthy, and organic**. It aims to evoke a sense of "clinical calm"—where the efficiency of modern medicine meets the tranquility of nature.

The chosen style is **Modern Corporate with Biophilic influences**. It prioritizes extreme clarity, generous whitespace, and high-quality imagery of nature and traditional treatments. The interface uses subtle depth and soft transitions to reduce cognitive load for patients and caregivers, ensuring a stress-free digital experience that mirrors the physical environment of a premier healing center.

## Colors

The palette is anchored by a sophisticated spectrum of greens that represent growth, vitality, and Ayurvedic herbal traditions. 

- **Primary Green (#059669):** Used for key brand moments, primary actions, and critical navigation. It provides high legibility and a sense of clinical authority.
- **Secondary Green (#10B981):** A vibrant accent used for secondary interactions, success states, and decorative elements that suggest energy.
- **Neutral Core (#111827):** A deep charcoal used for high-contrast typography and structural borders, ensuring the interface feels grounded.
- **Surface Palette:** We utilize `#EAECF0` for subtle section backgrounds and `#FFFFFF` for primary cards and content areas to maintain a clean, breathable aesthetic.

## Typography

The typography strategy pairs **Manrope** for headlines and **Inter** for functional copy. Manrope’s geometric yet friendly construction adds a modern, refined touch to the medical context.

- **Headlines:** Use Manrope with semi-bold weights to establish a clear information hierarchy. Tracking is slightly tightened on larger display sizes to maintain a compact, professional look.
- **Body & Labels:** Inter is utilized for its exceptional legibility in technical and clinical contexts. 
- **Hierarchy:** We use a generous vertical scale. Lead paragraphs (Body LG) should be used for treatment descriptions to ensure high readability for all age groups.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop to maintain a premium, editorial feel, transitioning to a fluid layout for mobile devices.

- **Grid:** A 12-column grid is used for desktop (1280px max-width) with 24px gutters.
- **Rhythm:** An 8px base unit governs all padding and margins. 
- **White Space:** High-level sections (e.g., Treatment Categories, About Us) should be separated by large vertical gaps (48px - 80px) to prevent the interface from feeling cluttered, emphasizing a "calm" atmosphere.
- **Mobile Adaptivity:** On mobile, margins shrink to 16px, and multi-column grids collapse into a single-column stack with standardized 24px spacing between cards.

## Elevation & Depth

This design system uses **Tonal Layering** combined with **Ambient Shadows** to create a soft, non-intimidating sense of depth.

- **Surfaces:** The base background is white. Secondary content blocks use the subtle gray (`#EAECF0`).
- **Shadows:** Use extremely soft, low-opacity shadows (e.g., `y-4, blur-20, opacity-0.05`) with a slight green tint (`#059669`) to make cards feel like they are floating gently above the surface. 
- **Outlines:** In place of heavy shadows for interactive elements like input fields, use 1px solid borders in `#EAECF0`, which transition to the primary green on focus.

## Shapes

To reinforce the organic and approachable nature of Ayurveda, we avoid sharp corners. 

- **Radius:** A standard 0.5rem (8px) radius is applied to buttons, input fields, and small cards. 
- **Large Components:** Hero images and major content containers use `rounded-xl` (1.5rem / 24px) to create a soft, welcoming framing effect.
- **Icons:** Should follow a "Linear-Rounded" style—2px stroke width with rounded caps and joins to match the UI's geometry.

## Components

- **Buttons:** Primary buttons use the `#059669` fill with white text. They should have ample horizontal padding (24px) to feel substantial. Secondary buttons use a transparent background with a 1px border of the primary color.
- **Cards:** Treatment cards should feature a top-aligned image with a 24px padding for the text content below. Use a subtle shadow on hover to indicate interactivity.
- **Input Fields:** Use a subtle background fill of `#EAECF0` with no border in its default state, appearing as a clean, soft pocket in the UI.
- **Chips/Badges:** For indicating "Specialties" or "Availability," use a light mint background (`#D1FAE5`) with dark green text (`#064E3B`).
- **Specialized Components:** 
    - **Doctor Profiles:** Circular avatars with a 2px green border.
    - **Booking Calendar:** A clean, grid-based interface using the neutral palette, with the primary green reserved for selected dates.