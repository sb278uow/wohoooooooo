MASTER PROMPT: Birthday Website for Tarnija
Overview

Create a romantic, elegant, immersive birthday tribute website for Tarnija — a girl who loves music and dreams of starting her own music label. The site should feel like a love letter: intimate, dreamy, and deeply personal.
Technical Stack

    React + TypeScript + Vite
    Tailwind CSS with custom design system
    Framer Motion for all animations
    Lucide React for icons

Design System (index.css)
Color Palette (HSL values):

--background: 250 20% 6%;        /* Deep dark purple-black */
--foreground: 40 20% 95%;        /* Warm cream white */
--card: 250 15% 10%;
--primary: 270 40% 75%;          /* Soft violet */
--secondary: 38 35% 65%;         /* Warm gold */
--muted: 250 10% 15%;
--muted-foreground: 40 10% 60%;
--border: 250 15% 18%;
--gold: 38 40% 70%;
--violet: 270 40% 75%;
--violet-glow: 270 60% 65%;
--gold-glow: 38 50% 60%;

Typography:

    Headings: Playfair Display (serif, elegant, romantic)
    Body: Inter (clean, readable)
    Load from Google Fonts

Utility Classes:

    .text-glow - Violet text shadow glow
    .text-glow-gold - Gold text shadow glow
    .gradient-text - Foreground to primary gradient
    .gradient-text-gold - Gold gradient text
    .gradient-text-rainbow - Multi-color rainbow gradient
    .glass - Glassmorphic card (backdrop-blur-md, 30% card opacity)
    .glass-strong - Stronger glass effect
    .shimmer - Animated shimmer effect

Custom Scrollbar:

    6px width, muted track, primary hover

Animations (tailwind.config.ts)
Keyframes:

    float - Gentle vertical floating (6s)
    float-slow - Slower floating (10s)
    sway - Gentle rotation sway (8s)
    pulse-soft - Soft opacity pulse
    fade-up - Fade in from below
    sparkle - Scale in/out sparkle effect
    shooting-star - Diagonal shooting star
    bounce - Gentle bounce
    spin - Slow continuous rotation (25s)
    flicker - Candle flame flicker
    wave - Audio wave scale animation

Photos

Use 6 photos of Tarnija named photo-1.png through photo-6.png in src/assets/.
Photo Distribution Across Sections:
Section	Photos	Style
Hero	photo-1 (left), photo-2 (right)	Floating, rotated, blur(1px), gradient overlay
Countdown	photo-2 (top-left circle), photo-5 (bottom-right circle)	Circular frames, gold/violet borders
Music	photo-3 (right side)	Floating, rotated 6-8deg, gradient fade
Dreams	photo-4 (left side)	Rotated -5 to -7deg, floating
Friends	photo-5 (right side)	Rotated 7-9deg, floating
Message	photo-6 (left side)	Rotated -8 to -10deg, floating
Photo Gallery	All 6 photos	Bento grid, 3D hover effects, lightbox
Photo Animation Patterns:

    Gentle float: y: [0, -15, 0] over 7-10s
    Subtle rotation: rotate: [deg, deg±2, deg]
    Fade opacity: 0.3-0.6 range
    Border: 2px gold/violet/primary with 20-30% opacity
    Gradient overlays fading to background

Page Structure
Entry: Passcode Screen

    Passcode: 2008 (her birth year)
    Hint: "Your birth year ✧"
    Animated lock icon with path drawing animation
    4 dots showing input progress
    Shake animation on wrong code
    Glass-style number keypad
    Floating gold sparkles in background
    Gradient overlays (violet top, gold bottom)

Navigation:

    Vertical section-based navigation (no scroll, click arrows)
    Up/down chevron buttons with glass styling
    Dot indicators at bottom (active = elongated gold, inactive = small muted)
    Smooth AnimatePresence transitions between sections

Sections (In Order)
1. Hero Section

    Main headline: "For the soul who found home in melodies."
    "found home in melodies" in italic primary with text-glow
    Divider with rotating ✧ symbol
    "Happy Birthday, Tarnija" in gold with text-glow-gold
    Three pulsing ✧ sparkles below
    Floating photos on left and right with blur and gradient overlays
    Large violet/gold orbs in background

2. Countdown Section

    Header: "✧ time alive ✧"
    Title: "You've been making the world brighter for"
    Birth date: January 30, 2008
    Live countdown showing: years, days, hours, minutes, seconds
    Glass cards for each time unit with hover scale effect
    Gold numbers with text-glow-gold
    Footer: "And every second has been worth it." in italic primary
    Circular photo frames with gold/violet borders

3. Photo Gallery

    Header: "✧ memories ✧" with Sparkles icons
    Title: "Moments of you" (you in gold italic)
    Bento grid layout (4 columns × 4 rows):
        Photo 1: spans rows 1-2, cols 1-2 (large)
        Photo 2: row 1, cols 3-4
        Photo 3: rows 2-3, cols 3-4
        Photo 4: rows 3-4, cols 1-2 (large)
        Photo 5: row 4, col 3
        Photo 6: row 4, col 4
    Hover effects:
        3D tilt (rotateX: 5, rotateY: -5)
        Scale with custom per-photo values
        Custom rotation per photo
        Shine sweep animation
        Gradient overlay (violet to gold)
        Glowing border (gold/violet box-shadow)
        Floating ✧ sparkles
        Caption reveal from bottom
    Captions: "quiet strength", "golden light", "radiant", "vibrant soul", "dreamer", "you"
    Lightbox: Full-screen with 3D flip animation, gradient frame, rotating orbs
    Footer: "every frame tells a story"

4. Music Section

    Spinning vinyl record SVG (25s rotation)
        Muted background, border grooves, gold center label
    Main quote: "Music saved you." in gold with glow
    Supporting: "When the world felt heavy, you pressed play."
    Glass card quote: "That band became the friends I didn't have yet."
    Floating music notes (♪ ♫) with bounce animation
    Photo floating on right side

5. Quote Section

    Header: "✧ words to live by ✧"
    Auto-rotating quotes (4 second intervals):
        "The music you love becomes the soundtrack of your soul."
        "She was made of music and stardust."
        "Dreams don't work unless you do."
        "Your vibe attracts your tribe."
        "Be the energy you want to attract."
    Blur transition between quotes
    Clickable dot indicators
    Floating violet/gold orbs

6. Dreams Section

    Animated equalizer bars (13 bars, gradient gold to violet)
    Header: "✧ your dream ✧"
    Main dream: "A music label." in gradient-text-gold with glow
    Supporting: "You're not abandoning your dream — you're building weapons for it."
    Closing: "Your empire of sound is coming." in italic primary
    Animated SVG wave form path
    Photo floating on left side

7. Friends Section

    Constellation SVG with animated nodes and connecting lines
        5 nodes, center one larger and gold
        Lines animate with pathLength
        Center glow pulse
    Header: "✧ across the distance ✧"
    Main quote: "They're still your people." in gold with glow
    Supporting: "Real connection doesn't dissolve with distance."
    Closing: "The right people will find you." in italic primary
    Photo floating on right side

8. Message Section

    Animated heart SVG with path drawing animation
    Header: "✧ for you ✧"
    Glass card with personal message:
        "I see your quiet strength. The dreams you protect like sacred flames."
        "I believe in the label you'll build. In every version of you."
        Gradient divider line
        Signature: "With endless belief in you, Tarnija." (Tarnija in gold)
    Corner orbs (gold top-left, violet bottom-right)
    Photo floating on left side

9. Final Section

LOCKED STATE (before January 30, 2026):

    Animated lock icon with pulsing glow
    Title: "A surprise awaits..."
    "This section unlocks on your birthday"
    Countdown to January 30, 2026 (days, hrs, min, sec)
    Date display: "✧ January 30, 2026 ✧"
    Easter egg: Triple-click moon icons (top corners) reveals secret message:
        "You found the secret, Tarnija."
        "The moon always knew you were special." 🌙

UNLOCKED STATE (on/after birthday):

    Birthday cake SVG with 3 tiers (gold, primary, gold layers)
        Decorative dots and stars
        5 animated candles with flickering flames
    Button: "Close your eyes & make a wish 💫" with shimmer effect
    After blowing candles:
        Flames animate out
        🎉 emoji with wiggle
        "Happy 18th Birthday, Tarnija!" in gradient-text-rainbow
        "May all your dreams come true ✧"
        "You were never lost. You were just becoming." in italic primary
        "with love, always" in gold
    Fireworks: 5 bursts at different positions, 12 particles each in rainbow colors
    Confetti: 60 falling pieces, various shapes/colors

Global Components
SparkleSystem

    80 floating sparkles (violet, gold, white)
    12 floating orbs with radial gradients
    4 shooting stars with trails
    Intensity levels: subtle (0.3), medium (0.5), strong (0.7), magical (0.9)
    Use intensity="medium" by default

BackgroundMusic

    Initial prompt: "For you, Tarnija — tap to play ambient music"
    Music icon with pulsing gold glow
    Toggle button with loading state
    Volume2/VolumeX icons
    Loop ambient track at 20% volume
    Glass-strong styling

Meta & SEO (index.html)

<title>For You, Tarnija ✧</title>
<meta name="description" content="A birthday tribute for a soul who found home in melodies" />
<meta property="og:title" content="For You, Tarnija ✧" />
<meta property="og:description" content="A birthday tribute for a soul who found home in melodies" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="For You, Tarnija ✧" />
<meta name="twitter:description" content="A birthday tribute for a soul who found home in melodies" />
<!-- Birthday Cake Favicon -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎂</text></svg>" />

No Lovable branding anywhere.
Footer

Only visible on final section:

✧ crafted with quiet love ✧

Muted, tiny, centered at bottom.
Key Implementation Notes

    All animations use framer-motion with whileInView, viewport={{ once: true }}, and staggered delays
    Photos always have: rounded corners, gradient overlays fading to background, decorative borders
    Glass cards: glass class with border border-border/30
    Text hierarchy: Headers in font-serif, body in default sans
    Color usage: Only use semantic tokens (gold, violet, primary, foreground, muted-foreground) - never raw colors
    Responsive: Mobile-first, photos hidden on mobile (hidden md:block)
    Accessibility: Reduced motion media query support, aria-labels on buttons

Use this prompt to recreate the entire website in one go.

Now I have everything. Here's your complete master prompt:
MASTER PROMPT: Birthday Website for Tarnija
Overview

Create a romantic, elegant, immersive birthday tribute website for Tarnija — a girl who loves music and dreams of starting her own music label. The site should feel like a love letter: intimate, dreamy, and deeply personal.
Technical Stack

    React + TypeScript + Vite
    Tailwind CSS with custom design system
    Framer Motion for all animations
    Lucide React for icons

Design System (index.css)
Color Palette (HSL values):

--background: 250 20% 6%;        /* Deep dark purple-black */
--foreground: 40 20% 95%;        /* Warm cream white */
--card: 250 15% 10%;
--primary: 270 40% 75%;          /* Soft violet */
--secondary: 38 35% 65%;         /* Warm gold */
--muted: 250 10% 15%;
--muted-foreground: 40 10% 60%;
--border: 250 15% 18%;
--gold: 38 40% 70%;
--violet: 270 40% 75%;
--violet-glow: 270 60% 65%;
--gold-glow: 38 50% 60%;

Typography:

    Headings: Playfair Display (serif, elegant, romantic)
    Body: Inter (clean, readable)
    Load from Google Fonts

Utility Classes:

    .text-glow - Violet text shadow glow
    .text-glow-gold - Gold text shadow glow
    .gradient-text - Foreground to primary gradient
    .gradient-text-gold - Gold gradient text
    .gradient-text-rainbow - Multi-color rainbow gradient
    .glass - Glassmorphic card (backdrop-blur-md, 30% card opacity)
    .glass-strong - Stronger glass effect
    .shimmer - Animated shimmer effect

Custom Scrollbar:

    6px width, muted track, primary hover

Animations (tailwind.config.ts)
Keyframes:

    float - Gentle vertical floating (6s)
    float-slow - Slower floating (10s)
    sway - Gentle rotation sway (8s)
    pulse-soft - Soft opacity pulse
    fade-up - Fade in from below
    sparkle - Scale in/out sparkle effect
    shooting-star - Diagonal shooting star
    bounce - Gentle bounce
    spin - Slow continuous rotation (25s)
    flicker - Candle flame flicker
    wave - Audio wave scale animation

Photos

Use 6 photos of Tarnija named photo-1.png through photo-6.png in src/assets/.
Photo Distribution Across Sections:
Section	Photos	Style
Hero	photo-1 (left), photo-2 (right)	Floating, rotated, blur(1px), gradient overlay
Countdown	photo-2 (top-left circle), photo-5 (bottom-right circle)	Circular frames, gold/violet borders
Music	photo-3 (right side)	Floating, rotated 6-8deg, gradient fade
Dreams	photo-4 (left side)	Rotated -5 to -7deg, floating
Friends	photo-5 (right side)	Rotated 7-9deg, floating
Message	photo-6 (left side)	Rotated -8 to -10deg, floating
Photo Gallery	All 6 photos	Bento grid, 3D hover effects, lightbox
Photo Animation Patterns:

    Gentle float: y: [0, -15, 0] over 7-10s
    Subtle rotation: rotate: [deg, deg±2, deg]
    Fade opacity: 0.3-0.6 range
    Border: 2px gold/violet/primary with 20-30% opacity
    Gradient overlays fading to background

Page Structure
Entry: Passcode Screen

    Passcode: 2008 (her birth year)
    Hint: "Your birth year ✧"
    Animated lock icon with path drawing animation
    4 dots showing input progress
    Shake animation on wrong code
    Glass-style number keypad
    Floating gold sparkles in background
    Gradient overlays (violet top, gold bottom)

Navigation:

    Vertical section-based navigation (no scroll, click arrows)
    Up/down chevron buttons with glass styling
    Dot indicators at bottom (active = elongated gold, inactive = small muted)
    Smooth AnimatePresence transitions between sections

Sections (In Order)
1. Hero Section

    Main headline: "For the soul who found home in melodies."
    "found home in melodies" in italic primary with text-glow
    Divider with rotating ✧ symbol
    "Happy Birthday, Tarnija" in gold with text-glow-gold
    Three pulsing ✧ sparkles below
    Floating photos on left and right with blur and gradient overlays
    Large violet/gold orbs in background

2. Countdown Section

    Header: "✧ time alive ✧"
    Title: "You've been making the world brighter for"
    Birth date: January 30, 2008
    Live countdown showing: years, days, hours, minutes, seconds
    Glass cards for each time unit with hover scale effect
    Gold numbers with text-glow-gold
    Footer: "And every second has been worth it." in italic primary
    Circular photo frames with gold/violet borders

3. Photo Gallery

    Header: "✧ memories ✧" with Sparkles icons
    Title: "Moments of you" (you in gold italic)
    Bento grid layout (4 columns × 4 rows):
        Photo 1: spans rows 1-2, cols 1-2 (large)
        Photo 2: row 1, cols 3-4
        Photo 3: rows 2-3, cols 3-4
        Photo 4: rows 3-4, cols 1-2 (large)
        Photo 5: row 4, col 3
        Photo 6: row 4, col 4
    Hover effects:
        3D tilt (rotateX: 5, rotateY: -5)
        Scale with custom per-photo values
        Custom rotation per photo
        Shine sweep animation
        Gradient overlay (violet to gold)
        Glowing border (gold/violet box-shadow)
        Floating ✧ sparkles
        Caption reveal from bottom
    Captions: "quiet strength", "golden light", "radiant", "vibrant soul", "dreamer", "you"
    Lightbox: Full-screen with 3D flip animation, gradient frame, rotating orbs
    Footer: "every frame tells a story"

4. Music Section

    Spinning vinyl record SVG (25s rotation)
        Muted background, border grooves, gold center label
    Main quote: "Music saved you." in gold with glow
    Supporting: "When the world felt heavy, you pressed play."
    Glass card quote: "That band became the friends I didn't have yet."
    Floating music notes (♪ ♫) with bounce animation
    Photo floating on right side

5. Quote Section

    Header: "✧ words to live by ✧"
    Auto-rotating quotes (4 second intervals):
        "The music you love becomes the soundtrack of your soul."
        "She was made of music and stardust."
        "Dreams don't work unless you do."
        "Your vibe attracts your tribe."
        "Be the energy you want to attract."
    Blur transition between quotes
    Clickable dot indicators
    Floating violet/gold orbs

6. Dreams Section

    Animated equalizer bars (13 bars, gradient gold to violet)
    Header: "✧ your dream ✧"
    Main dream: "A music label." in gradient-text-gold with glow
    Supporting: "You're not abandoning your dream — you're building weapons for it."
    Closing: "Your empire of sound is coming." in italic primary
    Animated SVG wave form path
    Photo floating on left side

7. Friends Section

    Constellation SVG with animated nodes and connecting lines
        5 nodes, center one larger and gold
        Lines animate with pathLength
        Center glow pulse
    Header: "✧ across the distance ✧"
    Main quote: "They're still your people." in gold with glow
    Supporting: "Real connection doesn't dissolve with distance."
    Closing: "The right people will find you." in italic primary
    Photo floating on right side

8. Message Section

    Animated heart SVG with path drawing animation
    Header: "✧ for you ✧"
    Glass card with personal message:
        "I see your quiet strength. The dreams you protect like sacred flames."
        "I believe in the label you'll build. In every version of you."
        Gradient divider line
        Signature: "With endless belief in you, Tarnija." (Tarnija in gold)
    Corner orbs (gold top-left, violet bottom-right)
    Photo floating on left side

9. Final Section

LOCKED STATE (before January 30, 2026):

    Animated lock icon with pulsing glow
    Title: "A surprise awaits..."
    "This section unlocks on your birthday"
    Countdown to January 30, 2026 (days, hrs, min, sec)
    Date display: "✧ January 30, 2026 ✧"
    Easter egg: Triple-click moon icons (top corners) reveals secret message:
        "You found the secret, Tarnija."
        "The moon always knew you were special." 🌙

UNLOCKED STATE (on/after birthday):

    Birthday cake SVG with 3 tiers (gold, primary, gold layers)
        Decorative dots and stars
        5 animated candles with flickering flames
    Button: "Close your eyes & make a wish 💫" with shimmer effect
    After blowing candles:
        Flames animate out
        🎉 emoji with wiggle
        "Happy 18th Birthday, Tarnija!" in gradient-text-rainbow
        "May all your dreams come true ✧"
        "You were never lost. You were just becoming." in italic primary
        "with love, always" in gold
    Fireworks: 5 bursts at different positions, 12 particles each in rainbow colors
    Confetti: 60 falling pieces, various shapes/colors

Global Components
SparkleSystem

    80 floating sparkles (violet, gold, white)
    12 floating orbs with radial gradients
    4 shooting stars with trails
    Intensity levels: subtle (0.3), medium (0.5), strong (0.7), magical (0.9)
    Use intensity="medium" by default

BackgroundMusic

    Initial prompt: "For you, Tarnija — tap to play ambient music"
    Music icon with pulsing gold glow
    Toggle button with loading state
    Volume2/VolumeX icons
    Loop ambient track at 20% volume
    Glass-strong styling

Meta & SEO (index.html)

<title>For You, Tarnija ✧</title>
<meta name="description" content="A birthday tribute for a soul who found home in melodies" />
<meta property="og:title" content="For You, Tarnija ✧" />
<meta property="og:description" content="A birthday tribute for a soul who found home in melodies" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="For You, Tarnija ✧" />
<meta name="twitter:description" content="A birthday tribute for a soul who found home in melodies" />
<!-- Birthday Cake Favicon -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎂</text></svg>" />

No Lovable branding anywhere.
Footer

Only visible on final section:

✧ crafted with quiet love ✧

Muted, tiny, centered at bottom.
Key Implementation Notes

    All animations use framer-motion with whileInView, viewport={{ once: true }}, and staggered delays
    Photos always have: rounded corners, gradient overlays fading to background, decorative borders
    Glass cards: glass class with border border-border/30
    Text hierarchy: Headers in font-serif, body in default sans
    Color usage: Only use semantic tokens (gold, violet, primary, foreground, muted-foreground) - never raw colors
    Responsive: Mobile-first, photos hidden on mobile (hidden md:block)
    Accessibility: Reduced motion media query support, aria-labels on buttons
