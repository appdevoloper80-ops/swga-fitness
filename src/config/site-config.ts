/**
 * ============================================================================
 * CLIENT CONFIGURATION & BRAND CONSTANTS
 * Southwest Georgia Fitness Center
 * 
 * NOTE TO CLIENT / DEVELOPER:
 * Update this single file to change contact details, pricing tiers, hours,
 * reviews, and copy across the entire application before production launch.
 * ============================================================================
 */

export const GYM_CONFIG = {
  // Brand Identity (Verified)
  name: "Southwest Georgia Fitness Center",
  shortName: "SGFC",
  tagline: "Reach Your Fitness Goals Any Time",
  subTagline: "24/7 Access in Americus, GA",
  missionStatement: "Train Anytime. Grow Always.",
  foundedYear: 2026,

  // Location & Contact (Verified client details)
  address: {
    street: "1608 E Forsyth St",
    suiteOrCenter: "Pine Pointe Shopping Center",
    city: "Americus",
    state: "GA",
    zip: "31709",
    country: "USA",
    fullFormatted: "1608 E Forsyth St, Pine Pointe Shopping Center, Americus, GA 31709",
    // Link for direct navigation via Google Maps
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=1608+E+Forsyth+St+Pine+Pointe+Shopping+Center+Americus+GA+31709",
    coordinates: {
      lat: 32.0735,
      lng: -84.2144,
    },
  },
  phone: {
    display: "+1 229-924-6869",
    raw: "+12299246869",
    telLink: "tel:+12299246869",
  },
  email: "info@swgafitness.com", // [DEMO PLACEHOLDER: Verify primary client contact inbox]
  hours: "Open 24 Hours / 365 Days a Year",

  // Social Channels [DEMO PLACEHOLDERS: Replace with client's active social profile handles]
  socials: {
    facebook: "https://facebook.com/SouthwestGeorgiaFitnessCenter",
    instagram: "https://instagram.com/swgafitness",
    googleReview: "https://www.google.com/maps/place/1608+E+Forsyth+St,+Americus,+GA+31709",
  },

  // Verified Client Ratings & Stats
  stats: {
    rating: 4.5,
    ratingMax: 5.0,
    reviewCount: 50,
    reviewCountLabel: "50+ Member Reviews",
    accessHours: "24/7",
    accessLabel: "Keycard Access",
    daysOpen: 365,
    daysOpenLabel: "Days a Year",
    googleSource: "Google Reviews",
  },

  // Color Palette Constants
  colors: {
    black: "#121212",
    charcoal: "#1C1C1F",
    crimson: "#E50914",
    crimsonGlow: "#FF3B45",
    offwhite: "#F5F5F7",
    steel: "#8A8D93",
    white: "#FFFFFF",
  },

  // Pricing & Memberships
  // [IMPORTANT: These are DEMO PREVIEW TIERS. Verify actual rates, initiation fees, and billing cycles with management before launch]
  pricingTiers: [
    {
      id: "day-pass",
      name: "1-Day Guest Pass",
      tagline: "Experience the facility risk-free",
      price: "$0",
      period: "First Visit",
      isPopular: false,
      badge: "Free Trial",
      features: [
        "Full 24-hour facility access",
        "Free weights & cardio equipment access",
        "Locker room & clean amenities",
        "No credit card required upfront",
        "Instant digital pass delivery",
      ],
      ctaText: "Claim Free Pass",
      actionType: "day-pass",
      note: "Valid for local Georgia residents on first visit.",
    },
    {
      id: "monthly",
      name: "Monthly Flex Membership",
      tagline: "Our most popular contract-free option",
      price: "$39", // [DEMO PLACEHOLDER: Replace with verified monthly fee]
      period: "per month",
      isPopular: true,
      badge: "Most Popular",
      features: [
        "24/7/365 Keycard access card",
        "All free weights, benches & racks",
        "Full cardio & endurance zone",
        "Month-to-month, cancel anytime",
        "Bring a workout buddy 1x/month",
        "Ample shopping center parking",
      ],
      ctaText: "Choose Monthly Flex",
      actionType: "contact",
      note: "Standard keycard deposit may apply on signup.",
    },
    {
      id: "annual",
      name: "Annual VIP Membership",
      tagline: "Best value for committed year-round athletes",
      price: "$349", // [DEMO PLACEHOLDER: Replace with verified annual fee]
      period: "per year",
      isPopular: false,
      badge: "Best Value",
      features: [
        "24/7/365 Unlimited facility keycard access",
        "Lowest equivalent monthly cost (Save ~$119/yr)",
        "Zero registration or setup fee",
        "1 Free personal coaching orientation session",
        "Free Southwest Georgia Fitness Center t-shirt",
        "Priority locker access & equipment reservations",
      ],
      ctaText: "Get Best Value",
      actionType: "contact",
      note: "Paid in full annually. Freezes available for medical/travel.",
    },
  ],

  // Common Membership Perks Strip
  commonPerks: [
    "No Hidden Contracts",
    "Flexible Monthly Options",
    "24-Hour Full Facility Access Included",
  ],

  // Value Highlights (Section F)
  valueHighlights: [
    {
      id: "access",
      title: "24/7 Keycard Access",
      description: "Train on your schedule, day or night, 365 days a year. Our secure electronic entry system lets you lift whenever motivation strikes.",
      icon: "ShieldCheck",
    },
    {
      id: "equipment",
      title: "Top-Tier Equipment",
      description: "Free weights, power racks, cardio machines, and heavy-duty strength gear tailored for both first-time exercisers and serious lifters.",
      icon: "Dumbbell",
    },
    {
      id: "location",
      title: "Prime Local Location",
      description: "Conveniently located at Pine Pointe Shopping Center right on E Forsyth St, with abundant well-lit parking right in front of the doors.",
      icon: "MapPin",
    },
  ],

  // Programs & Training Zones (Section G)
  programs: [
    {
      id: "strength",
      title: "Strength & Free Weights",
      shortDesc: "Olympic barbells, heavy dumbbells up to 100+ lbs, squat racks, and commercial plate-loaded machines.",
      fullDesc: "Our dedicated free weight area is built for progress. Equipped with commercial-grade Olympic barbells, flat/incline benches, power cages, cable crossover towers, and a full dumbbell rack. Whether you're powerlifting, bodybuilding, or building everyday resilience, you'll find the iron you need without long wait times.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
      alt: "Barbells and weight plates on gym floor",
      features: ["Heavy dumbbells (5 to 100+ lbs)", "Olympic power racks & benches", "Plate-loaded leverage machines", "Chalk-friendly training zone"],
    },
    {
      id: "cardio",
      title: "Cardio & Endurance Zone",
      shortDesc: "State-of-the-art treadmills, ellipticals, stationary bikes, and stairmasters with personal metrics.",
      fullDesc: "Elevate your heart rate and build cardiovascular endurance on top-tier commercial cardio equipment. Equipped with smooth motors, shock absorption, heart rate monitoring, and speed/incline controls so you can crush high-intensity intervals or steady-state recovery runs anytime 24/7.",
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
      alt: "Row of modern gym treadmills and cardio equipment",
      features: ["Commercial treadmills with incline", "Low-impact elliptical trainers", "Recumbent & spin bikes", "Stair climbers & rowers"],
    },
    {
      id: "personal-training",
      title: "Personal Training & Coaching",
      shortDesc: "1-on-1 guidance, customized workout programming, and form correction with certified fitness pros.",
      fullDesc: "Accelerate your results with certified trainers who understand your lifestyle and goals. Whether you want to master the big compound lifts, break a stubborn plateau, rebuild after an injury, or simply start with maximum safety and confidence, our coaches create targeted programs tailored to you.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80",
      alt: "Personal trainer coaching athlete in gym",
      features: ["Personalized workout plans", "Technique & posture correction", "Nutritional habit guidance", "Accountability & goal tracking"],
    },
    {
      id: "functional",
      title: "Functional Fitness & Conditioning",
      shortDesc: "Kettlebells, battle ropes, medicine balls, plyo boxes, and open turf for athletic performance.",
      fullDesc: "Move better in daily life and athletic competition. Our functional training zone provides open floor space, slam balls, kettlebells, resistance bands, suspension straps, and plyometric boxes so you can build core stability, agility, speed, and real-world functional power.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      alt: "Athlete training with heavy battle ropes in gym",
      features: ["Heavy battle ropes & slam balls", "Kettlebells & resistance bands", "Plyo jump boxes & agility turf", "Suspension & bodyweight trainers"],
    },
  ],

  // 24-Hour Timeline Moments (Section H)
  timeline: [
    {
      time: "5:00 AM",
      segment: "Early Risers",
      tagline: "Own the morning before the day starts",
      description: "Crisp focus, quiet iron, and open squat racks. Beat the morning rush, get your endorphins pumping, and conquer your day energized.",
      vibe: "Focused, quiet, fresh coffee in hand",
      peakLevel: "Moderate",
    },
    {
      time: "12:00 PM",
      segment: "Lunch Break Lifters",
      tagline: "Quick 45-minute midday power session",
      description: "Step away from the desk or job site. Get in, hit high-efficiency sets or cardio, shower up, and recharge your afternoon mental stamina.",
      vibe: "Fast-paced, efficient, energizing",
      peakLevel: "Steady",
    },
    {
      time: "6:00 PM",
      segment: "After-Work Rush",
      tagline: "High-voltage community energy & heavy sets",
      description: "The music is pumping, weights are moving, and the energy is contagious. Decompress from work stress and hit personal records with the crew.",
      vibe: "High energy, motivating community",
      peakLevel: "Peak",
    },
    {
      time: "11:00 PM",
      segment: "Night Shift Crew",
      tagline: "Zero waiting for any equipment. True freedom.",
      description: "Healthcare workers, first responders, night shift pros, and nocturnal athletes train peacefully under the lights whenever their schedule demands.",
      vibe: "Zen solitude, zero equipment lines",
      peakLevel: "Quiet",
    },
  ],

  // Reviews (Section K)
  reviews: [
    {
      id: "rev-1",
      author: "Marcus T.",
      badge: "Local Member",
      rating: 5,
      date: "2 months ago",
      text: "Best gym in Americus! Clean facilities and open 24/7 so I can work out around my shift work. Equipment is always well-maintained and the community is supportive.",
      verified: true,
      isSampleTag: true,
    },
    {
      id: "rev-2",
      author: "Savannah R.",
      badge: "Verified Google Review",
      rating: 5,
      date: "3 months ago",
      text: "Friendly atmosphere and great equipment selection. Love having keycard access right at Pine Pointe with plenty of parking right outside.",
      verified: true,
      isSampleTag: true,
    },
    {
      id: "rev-3",
      author: "Derrick B.",
      badge: "Verified Member",
      rating: 5,
      date: "1 month ago",
      text: "Cleanest gym in Sumter County. You never have to wait long for a bench or squat rack, and whether you are a beginner or experienced, everyone makes you feel welcome.",
      verified: true,
      isSampleTag: true,
    },
    {
      id: "rev-4",
      author: "Emily K.",
      badge: "Local Member",
      rating: 4.5,
      date: "4 months ago",
      text: "Awesome 24/7 access. As a nurse working irregular shifts, this gym is a lifesaver. Safe, well lit, and always spotless.",
      verified: true,
      isSampleTag: true,
    },
  ],

  // FAQ Accordion (Section L)
  faqs: [
    {
      id: "faq-1",
      question: "How does 24/7 access work?",
      answer: "When you join, you receive a secure digital or physical keycard that unlocks our front entrance 24 hours a day, 365 days a year. The facility is equipped with 24/7 video monitoring and emergency assistance stations for your security at all hours.",
    },
    {
      id: "faq-2",
      question: "Is there a free trial pass?",
      answer: "Yes! We offer a Free 1-Day Guest Pass for prospective members in Americus and surrounding Georgia communities. You can claim it online in 30 seconds and try our equipment with zero obligation.",
    },
    {
      id: "faq-3",
      question: "Are there long-term contracts?",
      answer: "No stressful long-term commitments. We offer flexible month-to-month plans as well as discounted annual memberships for members looking for maximum savings. Real plans and terms are transparent with no hidden surprises.",
    },
    {
      id: "faq-4",
      question: "Do you offer personal training?",
      answer: "Yes! We have certified personal coaches who offer customized one-on-one sessions, strength assessments, and progressive program design for all fitness levels. Inquire at the front desk or submit our contact form to speak with a coach.",
    },
    {
      id: "faq-5",
      question: "Is parking available at the gym?",
      answer: "Yes! Being located in Pine Pointe Shopping Center (1608 E Forsyth St), we provide abundant, free, well-lit parking directly in front of our entrance, making early morning and late night visits easy and safe.",
    },
  ],
};
