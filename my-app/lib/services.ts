import {
  Heart,
  Scissors,
  Waves,
  Gem,
  Droplets,
  Sparkles,
  Sun,
  Wand2,
  Zap,
  Wind,
} from "lucide-react";

export const SERVICES = [
  {
    slug: "made-for-you-facial",
    bookingSlug: "signature-facial",
    title: "Made For You Facial",
    icon: Heart,
    short: "Fully customized deep-cleansing facial.",
    description:
      "A personalized facial tailored to your skin needs. Includes double cleanse, exfoliation, steam, extractions (if needed), facial massage, mask, serum, moisturizer, and SPF.",
    image: "/images/Made_for_You_Facial.webp",
    price: "$110",
    packagePrice: "Package of 6 – $570 (Save $90)",
    duration: "60 minutes",
    bestFor:
      "All skin types — ideal for first-timers or regular skincare maintenance.",
    whyLoveIt: [
      "Fully personalized",
      "Relaxing massage included",
      "Instant refreshed glow",
    ],
    concerns: ["first-time", "general"],
    areas: ["face"],
    benefits: ["Personalized treatment", "Deep cleansing", "Instant refresh"],
    fullDescription: `Experience the ultimate in personalized skincare with our 'Made for You' Facial. This bespoke treatment is meticulously crafted to address your unique skin concerns and goals. Beginning with a comprehensive skin analysis, we combine deep-cleansing techniques with professional-grade masks and serums to restore balance, hydration, and vitality. Whether you seek to combat aging, clear congestion, or simply indulge in a moment of pure relaxation, this facial is designed exclusively for you.`,
    detailedBenefits: [
      "Increases blood circulation to facial skin",
      "Promotes natural collagen production",
      "Reduces puffiness and facial tension",
      "Improves skin elasticity and firmness",
      "Enhances product absorption",
      "Releases facial and neck tension",
      "Promotes lymphatic drainage for detoxification",
      "Gives an instant radiant glow",
      "Reduces appearance of fine lines",
      "Deeply relaxing and stress-relieving",
    ],
    process: [
      {
        step: 1,
        title: "Cleansing",
        description:
          "We start with a gentle cleanser to remove impurities and prepare your skin.",
      },
      {
        step: 2,
        title: "Analysis",
        description:
          "Comprehensive skin analysis to determine your specific skin needs and customize the treatment.",
      },
      {
        step: 3,
        title: "Exfoliation",
        description:
          "Gentle exfoliation to remove dead skin cells and prepare skin for treatment.",
      },
      {
        step: 4,
        title: "Custom Treatment",
        description:
          "Application of customized mask, serum, and treatments based on your skin analysis.",
      },
      {
        step: 5,
        title: "Finishing Touches",
        description:
          "The treatment is finished with moisturizer and SPF protection.",
      },
    ],
    faqs: [
      {
        question: "Is this facial suitable for all skin types?",
        answer:
          "Yes, the Made For You Facial is customized to your specific skin type and concerns, making it suitable for all skin types.",
      },
      {
        question: "How often should I get this facial?",
        answer: "For best results, we recommend a treatment every 4-6 weeks.",
      },
      {
        question: "What makes this facial different from others?",
        answer:
          "This facial is completely personalized based on your skin analysis and specific needs, ensuring optimal results for your unique skin.",
      },
    ],
    aftercare:
      "Avoid sun exposure for 24 hours. Stay hydrated and use a gentle cleanser. Apply moisturizer morning and night. Avoid exfoliants for 48 hours.",
    ingredients: [
      "Custom serums",
      "Professional-grade mask",
      "Moisturizer",
      "SPF",
    ],
    testimonials: [
      {
        name: "Sarah M.",
        text: "My skin has never looked better! The personalized approach made all the difference.",
        rating: 5,
      },
      {
        name: "Jessica T.",
        text: "So relaxing and my skin looks radiant. The customization was perfect for my sensitive skin!",
        rating: 5,
      },
    ],
  },
  {
    slug: "dermaplaning",
    title: "Dermaplaning",
    icon: Sparkles,
    short: "Manual exfoliation for ultra-smooth, glowing skin.",
    description:
      "Manual exfoliation using a sterile blade to remove dead skin and peach fuzz. Includes full facial with a mask, serum, and SPF.",
    image: "/images/dermaplaning.webp",
    price: "$110",
    duration: "60 minutes",
    bestFor:
      "Anyone looking for ultra-smooth, glowing skin — especially before an event or makeup application.",
    whyLoveIt: [
      "Makeup applies flawlessly afterward",
      "Skin feels baby-soft instantly",
      "Non-invasive and relaxing",
      "Immediate glow and smoothness",
    ],
    concerns: ["dull-skin", "texture", "peach-fuzz"],
    areas: ["face"],
    benefits: [
      "Removes dead skin and peach fuzz",
      "Instant brightness",
      "Smoother makeup application",
    ],
    fullDescription: `Dermaplaning is a safe, non-invasive treatment that uses a special tool to gently exfoliate the skin's surface. It effectively removes dead skin cells and fine vellus hair (peach fuzz), revealing a smoother, brighter complexion. This treatment also enhances the absorption of skincare products and creates a flawless canvas for makeup.`,
    detailedBenefits: [
      "Instantly smoother and softer skin",
      "Removes peach fuzz and dead skin cells",
      "Diminishes fine lines and wrinkles",
      "Increases absorption of topical products",
      "Creates a flawless base for makeup",
      "Brightens skin tone",
    ],
    process: [
      {
        step: 1,
        title: "Cleansing",
        description: "Double cleanse to remove makeup and impurities.",
      },
      {
        step: 2,
        title: "Dermaplaning",
        description: "Gentle manual exfoliation using a sterile blade.",
      },
      {
        step: 3,
        title: "Enzyme Peel or Mask",
        description:
          "A gentle enzyme treatment or mask to further brighten and hydrate.",
      },
      {
        step: 4,
        title: "Serums & Moisturizer",
        description: "Application of targeted serums and hydration.",
      },
    ],
    faqs: [
      {
        question: "Will my hair grow back thicker or darker?",
        answer:
          "No, dermaplaning does not change the structure of your hair follicle. Your hair will grow back at the same texture and speed as before.",
      },
      {
        question: "Is it painful?",
        answer:
          "Not at all. Most clients find it very relaxing, similar to the sensation of shaving your legs.",
      },
      {
        question: "Can I wear makeup after?",
        answer:
          "Yes! In fact, your makeup will look better than ever. We just recommend using clean brushes.",
      },
    ],
    aftercare:
      "Avoid direct sun exposure and use SPF daily. Avoid exfoliating acids (AHAs/BHAs) and retinol for 3-5 days. Keep skin hydrated.",
    ingredients: ["Sterile Blade", "Hydrating Serums", "SPF"],
    testimonials: [],
  },
  {
    slug: "zena-algae-peel",
    title: "Zena Algae Peel",
    icon: Waves,
    short:
      "Natural marine algae peel for resurfacing and collagen stimulation.",
    description:
      "A natural mechanical resurfacing peel using marine algae crystals. Lifts pigmentation, smooths texture, reduces acne, stretch marks, and improves overall skin tone with minimal downtime.",
    image: "/images/Zena_Algae_Peel.webp",
    price: "From $200",
    duration: "60 minutes",
    areaPricing: [
      { area: "Face", price: "$200" },
      { area: "Arms / Belly / Leg", price: "$250" },
      { area: "Back", price: "$280" },
      { area: "Butt", price: "$280" },
      { area: "Thighs", price: "$350" },
    ],
    bestFor:
      "Clients with acne, scarring, dull skin, or uneven tone seeking a gentle yet powerful peel.",
    whyLoveIt: [
      "Natural alternative to harsh peels",
      "Improves clarity and smoothness",
      "Minimal downtime",
      "Safe for sensitive skin",
    ],
    concerns: ["acne", "pigmentation", "dull-skin"],
    areas: ["face", "body", "back"],
    benefits: [
      "Reduces acne",
      "Lightens pigmentation",
      "Improves skin texture",
    ],
    fullDescription: `The Zena Algae Peel is a unique, 100% natural peel that offers a range of benefits for the skin. It is particularly effective for treating acne, as it has antibacterial properties and helps to regulate sebum production. It also helps to lighten pigmentation, reduce the appearance of fine lines and wrinkles, and improve overall skin texture.`,
    detailedBenefits: [
      "Reduces acne and inflammation",
      "Lightens pigmentation and sunspots",
      "Reduces the appearance of fine lines and wrinkles",
      "Improves skin texture and tone",
      "Stimulates collagen production",
      "Regulates sebum production",
      "Reduces the appearance of stretch marks",
    ],
    process: [
      {
        step: 1,
        title: "Cleansing",
        description: "The skin is cleansed to remove any makeup, dirt, or oil.",
      },
      {
        step: 2,
        title: "Peel Application",
        description:
          "The Zena Algae Peel powder is mixed with water and applied to the skin.",
      },
      {
        step: 3,
        title: "Massage",
        description: "The peel is massaged into the skin for 5-10 minutes.",
      },
      {
        step: 4,
        title: "Resting",
        description: "The peel is left on the skin to work its magic.",
      },
      {
        step: 5,
        title: "Removal",
        description: "The peel is gently removed with water.",
      },
    ],
    faqs: [
      {
        question: "What does the Zena Algae Peel feel like?",
        answer:
          "The peel feels prickly on the skin, similar to microneedling, but less intense. You may experience some redness and peeling for a few days after the treatment.",
      },
      {
        question: "How many treatments will I need?",
        answer: "A series of 2-4 treatments is recommended for best results.",
      },
    ],
    aftercare:
      "Avoid sun exposure, saunas, and swimming for at least one week after the treatment. Use a gentle cleanser and moisturizer, and apply SPF daily.",
    ingredients: ["100% natural algae powder"],
    testimonials: [],
  },
  {
    slug: "microdermabrasion",
    title: "Microdermabrasion",
    icon: Gem,
    short: "Diamond-tip exfoliation for smoother, brighter skin.",
    description:
      "A gentle yet effective exfoliation using a diamond-tipped wand to remove dead skin cells, followed by hydrating serums, mask, moisturizer, and SPF.",
    image: "/images/Microdermabrasion.webp",
    price: "Starting at $110",
    packagePrice: "Package of 6 – $600 (Save $120)",
    duration: "60 minutes",
    bestFor:
      "Clients with dull, rough, uneven skin tone, fine lines, or mild acne scars.",
    whyLoveIt: [
      "Instant visible results",
      "No downtime",
      "Boosts product absorption",
    ],
    concerns: ["dull-skin", "texture"],
    areas: ["face"],
    benefits: [
      "Reduces fine lines and wrinkles",
      "Improves skin tone and texture",
      "Treats acne and acne scars",
    ],
    fullDescription: `Microdermabrasion is a cosmetic procedure that uses a diamond-tipped wand to gently exfoliate the top layer of skin. This helps to remove dead skin cells, unclog pores, and stimulate collagen production. The result is smoother, brighter, and more even-toned skin.`,
    detailedBenefits: [
      "Reduces the appearance of fine lines and wrinkles",
      "Improves skin tone and texture",
      "Treats acne and acne scars",
      "Reduces the appearance of sun damage and age spots",
      "Unclogs pores and reduces pore size",
      "Stimulates collagen production",
      "Leaves skin feeling soft and smooth",
    ],
    process: [
      {
        step: 1,
        title: "Cleansing",
        description: "The skin is cleansed to remove any makeup, dirt, or oil.",
      },
      {
        step: 2,
        title: "Microdermabrasion",
        description:
          "A diamond-tipped wand is used to gently exfoliate the skin.",
      },
      {
        step: 3,
        title: "Hydrating Mask",
        description:
          "A hydrating mask is applied to soothe and moisturize the skin.",
      },
      {
        step: 4,
        title: "Finishing Touches",
        description:
          "The treatment is finished with a serum, moisturizer, and SPF.",
      },
    ],
    faqs: [
      {
        question: "Is microdermabrasion painful?",
        answer:
          "No, microdermabrasion is a gentle and painless procedure. You may feel a mild scratching sensation as the wand moves across your skin.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "A series of 6-12 treatments is recommended for best results, with a treatment every 2-4 weeks.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "There is no downtime with microdermabrasion. Your skin may be slightly red for a few hours after the treatment, but you can return to your normal activities immediately.",
      },
    ],
    aftercare:
      "Avoid sun exposure for a few days after the treatment and use a gentle cleanser and moisturizer. It is also important to wear SPF to protect your skin.",
    ingredients: ["Diamond-tipped wand"],
    testimonials: [],
  },
  {
    slug: "chemical-peels",
    title: "Dermalogica Lactic Acid Brightening Peels",
    icon: Sun,
    short: "30% Lactic acid peel for intense brightening and hydration.",
    description:
      "A professional-grade brightening peel with 30% lactic acid. Ideal for hyperpigmentation and uneven skin tone, leaving your skin with a healthy, radiant glow.",
    image: "/images/Lactic_Acid_Brightening.webp",
    price: "Starting at $110",
    duration: "60 minutes",
    bestFor:
      "Clients with hyperpigmentation, uneven skin tone, or signs of aging.",
    whyLoveIt: [
      "Intense hydration",
      "Evens out skin tone",
      "No significant downtime",
    ],
    concerns: ["pigmentation", "aging", "dull-skin"],
    areas: ["face"],
    benefits: ["Evens skin tone", "Reduces fine lines", "Brightens skin"],
    fullDescription: `The Dermalogica Lactic Acid Brightening Peel is a professional-grade peel that provides intense exfoliation and hydration. It is ideal for those with hyperpigmentation, uneven skin tone, and signs of aging. The peel is formulated with 30% lactic acid, which helps to remove dead skin cells, stimulate cell renewal, and brighten the skin.`,
    detailedBenefits: [
      "Evens out skin tone and texture",
      "Reduces the appearance of fine lines and wrinkles",
      "Brightens and illuminates the skin",
      "Hydrates and moisturizes the skin",
      "Reduces the appearance of hyperpigmentation",
      "Leaves the skin with a healthy glow",
    ],
    process: [
      {
        step: 1,
        title: "Cleansing",
        description: "The skin is cleansed to remove any makeup, dirt, or oil.",
      },
      {
        step: 2,
        title: "Peel Application",
        description:
          "The lactic acid peel is applied to the skin and left on for a few minutes.",
      },
      {
        step: 3,
        title: "Neutralization",
        description: "The peel is neutralized and removed from the skin.",
      },
      {
        step: 4,
        title: "Hydrating Mask",
        description:
          "A hydrating mask is applied to soothe and moisturize the skin.",
      },
      {
        step: 5,
        title: "Finishing Touches",
        description:
          "The treatment is finished with a serum, moisturizer, and SPF.",
      },
    ],
    faqs: [
      {
        question: "Is this peel suitable for sensitive skin?",
        answer:
          "Yes, this is a very mild peel used for brightening the skin and providing a glowing effect. It is suitable for sensitive skin.",
      },
      {
        question: "Do I need a patch test?",
        answer: "No patch test is required.",
      },
      {
        question: "Is there any downtime?",
        answer: "No. Clients do not experience redness or peeling.",
      },
    ],
    aftercare:
      "Avoid sun exposure and use a gentle cleanser and moisturizer. It is also important to wear SPF to protect your skin.",
    ingredients: ["30% Lactic Acid"],
    testimonials: [],
  },
  {
    slug: "back-facial",
    title: "Back Facial",
    icon: Droplets,
    short: "Deep-cleansing treatment for back acne and texture.",
    description:
      "A deep-cleansing facial for the back including exfoliation, steam, extractions (if needed), purifying mask, and hydration.",
    image: "/images/Back_Facial.webp",
    price: "$135",
    duration: "60 minutes",
    bestFor:
      "Back acne, clogged pores, dry skin, or preparing for special events.",
    whyLoveIt: [
      "Clears congestion",
      "Smooths skin",
      "Often overlooked self-care",
    ],
    concerns: ["acne", "texture"],
    areas: ["back"],
    benefits: [
      "Treats back acne",
      "Deeply cleanses and exfoliates",
      "Hydrates the skin",
    ],
    fullDescription: `The back facial is a treatment that consists of deep cleansing, exfoliation, and extractions. It is performed on your back. In a back facial, an esthetician will use creams and possibly steam to exfoliate and clean your skin before extracting oil and debris. The treatment ends with a detoxifying mask for hydration.`,
    detailedBenefits: [
      "Treats back acne and clogged pores",
      "Deeply cleanses and exfoliates the skin",
      "Hydrates and moisturizes the skin",
      "Leaves the skin on your back feeling soft and smooth",
      "Reduces inflammation and redness",
    ],
    process: [
      {
        step: 1,
        title: "Cleansing",
        description: "The back is cleansed to remove any dirt or oil.",
      },
      {
        step: 2,
        title: "Exfoliation",
        description: "An exfoliating scrub is used to remove dead skin cells.",
      },
      {
        step: 3,
        title: "Extractions",
        description:
          "Extractions are performed to remove any blackheads or whiteheads.",
      },
      {
        step: 4,
        title: "Mask",
        description: "A detoxifying mask is applied to the back.",
      },
      {
        step: 5,
        title: "Moisturizer",
        description: "The treatment is finished with a moisturizer.",
      },
    ],
    faqs: [
      {
        question: "Who is a back facial for?",
        answer:
          "A back facial is for anyone who wants to improve the appearance and health of the skin on their back. It is especially beneficial for those who are prone to back acne.",
      },
      {
        question: "How often should I get a back facial?",
        answer: "We recommend a back facial every 4-6 weeks for best results.",
      },
    ],
    aftercare:
      "Avoid sun exposure for 24 hours and use a gentle cleanser and moisturizer.",
    ingredients: ["Exfoliating scrub", "Detoxifying mask"],
    testimonials: [],
  },
  {
    slug: "aromatherapy-massage",
    title: "Relaxation Massage",
    icon: Sparkles,
    short: "Full-body aromatherapy massage for stress relief.",
    description:
      "A calming full-body massage using light to moderate pressure and soothing essential oils to relax the body and mind.",
    image: "/images/Massage.webp",
    price: "$85",
    duration: "60 minutes",
    bestFor: "Stress relief, better sleep, and gentle wellness reset.",
    whyLoveIt: [
      "Relieves stress & anxiety",
      "Improves circulation",
      "Deep relaxation",
    ],
    concerns: ["relaxation", "stress"],
    areas: ["body"],
    benefits: [
      "Promotes relaxation",
      "Relieves muscle tension",
      "Improves circulation",
    ],
    fullDescription: `A relaxation massage is a smooth, gentle, flowing style that promotes general relaxation, relieves muscular tension, plus improves circulation and range of movement. Your therapist will aim to relax, revive and rejuvenate you at a massage depth that does not cause discomfort.`,
    detailedBenefits: [
      "Promotes relaxation and reduces stress",
      "Relieves muscle tension and stiffness",
      "Improves circulation and blood flow",
      "Increases flexibility and range of motion",
      "Improves sleep quality",
      "Boosts the immune system",
    ],
    process: [
      {
        step: 1,
        title: "Consultation",
        description:
          "The massage therapist will ask you about any areas of concern and your desired pressure.",
      },
      {
        step: 2,
        title: "Massage",
        description:
          "The therapist will use long, smooth, gliding strokes to massage your entire body.",
      },
    ],
    faqs: [
      {
        question:
          "What is the difference between a relaxation massage and a deep tissue massage?",
        answer:
          "A relaxation massage uses lighter pressure and slower strokes to promote relaxation, while a deep tissue massage uses more pressure to target deeper layers of muscle and connective tissue.",
      },
      {
        question: "What should I wear for a relaxation massage?",
        answer:
          "You can wear whatever you feel comfortable in. You will be draped with a sheet during the massage, so you can undress to your comfort level.",
      },
    ],
    aftercare:
      "Drink plenty of water to help flush out toxins. Avoid strenuous activity for the rest of the day.",
    ingredients: ["Massage oil"],
    testimonials: [],
  },
  {
    slug: "waxing",
    title: "Waxing & Lash / Brow Services",
    icon: Wand2,
    short:
      "Professional waxing, lash lifts, brow lamination, and tinting services.",
    description:
      "Professional hair removal using hygienic techniques for smooth skin lasting weeks. Plus lash lift, brow lamination, and tinting services to frame your face beautifully.",
    image: "/images/Hair_Removal.webp",
    price: "From $10",
    duration: "Varies",
    areaPricing: [
      { area: "Brows", price: "$10", category: "Waxing" },
      { area: "Brows & Upper Lip", price: "$15", category: "Waxing" },
      { area: "Lip & Chin", price: "$15", category: "Waxing" },
      { area: "Full Face", price: "$40", category: "Waxing" },
      { area: "Under Arms", price: "$20", category: "Waxing" },
      { area: "Half Arms", price: "$30", category: "Waxing" },
      { area: "Full Arms", price: "$45", category: "Waxing" },
      { area: "Lower Legs", price: "$35", category: "Waxing" },
      { area: "Upper Legs", price: "$40", category: "Waxing" },
      { area: "Full Legs", price: "$65", category: "Waxing" },
      { area: "Full Legs with Bikini", price: "$70", category: "Waxing" },
      { area: "Bikini Line", price: "$20", category: "Waxing" },
      { area: "Belly Line", price: "$20", category: "Waxing" },
      { area: "Brazilian", price: "$50", category: "Waxing" },
      { area: "Back & Chest", price: "$80", category: "Waxing" },
      { area: "Back & Shoulders", price: "$70", category: "Waxing" },
      { area: "Chest & Abdomen", price: "$60", category: "Waxing" },
      { area: "Full Body", price: "$170", category: "Waxing" },
      {
        area: "Brow Lamination & Tint",
        price: "Inquire",
        category: "Lash & Brow",
      },
      { area: "Lash Lift & Tint", price: "Inquire", category: "Lash & Brow" },
      { area: "Eyebrow Wax & Tint", price: "Inquire", category: "Lash & Brow" },
      { area: "Lash Tint Only", price: "Inquire", category: "Lash & Brow" },
      {
        area: "Lash Lift Without Tint",
        price: "Inquire",
        category: "Lash & Brow",
      },
    ],
    bestFor: "Anyone wanting longer-lasting smoothness than shaving.",
    whyLoveIt: [
      "Smooth results for weeks",
      "Gentle & hygienic",
      "Reduces regrowth over time",
    ],
    concerns: ["hair-removal"],
    areas: ["face", "body"],
    benefits: [
      "Long-lasting results",
      "Softer and finer hair regrowth",
      "Exfoliates the skin",
    ],
    fullDescription: `Professional waxing and hair removal for smooth skin lasting weeks. We also offer lash lift, brow lamination, and tinting services to complete your look. Full Body waxing includes Full Legs, Full Arms, Under Arms, and Brazilian.`,
    detailedBenefits: [
      "Long-lasting results (2-8 weeks)",
      "Softer and finer hair regrowth",
      "Exfoliates the skin",
      "Reduces hair growth over time",
      "Quick and efficient",
    ],
    process: [
      {
        step: 1,
        title: "Cleansing",
        description: "The area to be waxed is cleansed and prepped.",
      },
      {
        step: 2,
        title: "Wax Application",
        description:
          "Warm wax is applied to the skin in the direction of hair growth.",
      },
      {
        step: 3,
        title: "Hair Removal",
        description:
          "A cloth strip is placed over the wax and quickly removed, pulling the hair out from the root.",
      },
      {
        step: 4,
        title: "Soothing",
        description:
          "A soothing lotion is applied to the skin to calm any redness or irritation.",
      },
    ],
    faqs: [
      {
        question: "Does waxing hurt?",
        answer:
          "Waxing can be uncomfortable, especially for the first time. However, the pain is brief and most people find that it is well worth the results.",
      },
      {
        question: "How long does my hair need to be for waxing?",
        answer: "Your hair should be at least 1/4 inch long for best results.",
      },
      {
        question: "How often should I get waxed?",
        answer: "We recommend getting waxed every 4-6 weeks.",
      },
    ],
    aftercare:
      "Avoid sun exposure, hot baths, and saunas for 24 hours after waxing. Exfoliate the skin a few days after waxing to prevent ingrown hairs.",
    ingredients: ["Wax"],
    testimonials: [],
  },
  {
    slug: "nano-glow-infusion",
    bookingSlug: "nano-glow-infusion-150",
    title: "Nano Glow Infusion Facial",
    icon: Zap,
    short:
      "Gentle nano infusion to enhance product absorption. Boosts hydration, glow, and skin smoothness.",
    description:
      "Gentle nano infusion to enhance product absorption. Boosts hydration, glow, and skin smoothness. Helps improve tone, texture, and radiance. No downtime — instant refreshed look.",
    image: "/images/nano-glow-infusion.jpg",
    price: "$150",
    duration: "90 minutes",
    bestFor:
      "Treatment targets: acne scarring, aging skin, combination skin, dark spots, dehydration, dry and sensitive skin, hyperpigmentation, mature skin, oily skin, sun damaged skin, and wrinkles.",
    whyLoveIt: [
      "Completely comfortable & painless",
      "Zero downtime",
      "Safe for all skin types, including sensitive",
      "Immediate visible results",
    ],
    concerns: [
      "acne-scars",
      "aging",
      "hyperpigmentation",
      "dehydration",
      "dull-skin",
    ],
    areas: ["face"],
    benefits: ["Smoother skin texture", "Improved hydration", "Radiant glow"],
    fullDescription: `Our Nano Glow Infusion treatment uses advanced nano-tip technology to gently open microscopic channels in the skin's surface — infusing powerful serums including hyaluronic acid, peptides, and vitamins deep into the epidermis where they work most effectively. Unlike traditional microneedling, our Nano Glow Infusion is completely comfortable, requires zero downtime, and is safe for all skin types including sensitive skin. Your skin will be visibly smoother, more hydrated, and radiantly glowing — immediately after your very first session.`,
    detailedBenefits: [
      "Deeply infuses vitamins and antioxidants",
      "Reduces appearance of acne scarring",
      "Smooths fine lines and wrinkles",
      "Improves skin tone and clarity",
      "Boosts natural hydration levels",
      "Safe for sensitive skin and dark spots",
    ],
    process: [
      {
        step: 1,
        title: "Cleansing",
        description: "Double cleanse to prepare the skin for treatment.",
      },
      {
        step: 2,
        title: "Nano Infusion",
        description:
          "Advanced nano-tip technology delivers serums deep into the epidermis.",
      },
      {
        step: 3,
        title: "Soothing Mask",
        description: "Application of a calming mask to enhance the glow.",
      },
      {
        step: 4,
        title: "Finishing Touches",
        description: "Final serums, moisturizer, and SPF application.",
      },
    ],
    faqs: [
      {
        question: "Is this the same as microneedling?",
        answer:
          "No, nano-infusion is non-invasive and painless, using microscopic tips rather than needles. It requires zero downtime.",
      },
      {
        question: "How soon will I see results?",
        answer:
          "You will see an immediate glow and smoother texture right after your first session.",
      },
    ],
    aftercare:
      "Maintain hydration and use SPF daily. Avoid harsh exfoliants for 24 hours.",
    ingredients: ["Hyaluronic Acid", "Peptides", "Vitamins"],
    testimonials: [],
  },
  {
    slug: "pure-oxygen-glow",
    bookingSlug: "pure-oxygen-glow-110",
    title: "Pure Oxygen Glow Facial",
    icon: Wind,
    short:
      "Oxygen infusion to revitalize, brighten, and hydrate skin — perfect before events.",
    description:
      "Oxygen infusion to revitalize, brighten, and hydrate skin while supporting circulation and a natural glow — perfect before events.",
    image: "/images/pure-oxygen-glow.jpg",
    price: "$110",
    duration: "60 minutes",
    bestFor:
      "Dehydrated skin, fine lines, dull complexion, and anyone looking for a quick, effective glow before an event.",
    whyLoveIt: [
      "Instant plumping effect",
      "Refreshing and cooling sensation",
      "Perfect 'Red Carpet' ready skin",
      "Deeply hydrating",
    ],
    concerns: ["dehydration", "dull-skin", "aging"],
    areas: ["face"],
    benefits: [
      "Deeply hydrates and plumps",
      "Reduces appearance of fine lines",
      "Brightens the complexion",
    ],
    fullDescription: `Experience the ultimate breath of fresh air for your skin with our Pure Oxygen Glow facial. This treatment uses pressurized oxygen to infuse a specialty cocktail of hyaluronic acid and antioxidants deep into the skin layers. It's the perfect solution for tired, dull, or dehydrated skin that needs an instant boost of life and radiance.`,
    detailedBenefits: [
      "Immediately plumps the skin",
      "Reduces fine lines and wrinkles",
      "Encourages collagen production",
      "Detoxifies the skin",
      "Enhances overall skin tone and texture",
      "No recovery time needed",
    ],
    process: [
      {
        step: 1,
        title: "Cleansing",
        description: "Gentle cleanse to remove surface impurities.",
      },
      {
        step: 2,
        title: "Oxygen Infusion",
        description:
          "Delivery of pure oxygen and specialized serums using a hand-held wand.",
      },
      {
        step: 3,
        title: "Hydrating Seal",
        description: "Locking in the moisture with a lightweight hydrator.",
      },
      {
        step: 4,
        title: "SPF Protection",
        description: "Finishing with sun protection to maintain that glow.",
      },
    ],
    faqs: [
      {
        question: "What does it feel like?",
        answer:
          "It feels like a cool, refreshing mist on your face. Most clients find it very relaxing.",
      },
      {
        question: "Is it good for acne?",
        answer:
          "Yes, oxygen helps to calm inflammation and can help in the healing process of acne.",
      },
    ],
    aftercare:
      "Avoid heavy makeup for a few hours. Keep skin hydrated with serums.",
    ingredients: ["Pure Oxygen", "Hyaluronic Acid", "Antioxidants"],
    testimonials: [],
  },
  {
    slug: "ultimate-glow-experience",
    bookingSlug: "ultimate-glow-experience-nano-glow-infusion-pure-oxygen-glow",
    title: "Ultimate Glow Experience Facial",
    icon: Sparkles,
    short:
      "Nano Glow Infusion + Pure Oxygen Glow for maximum radiance, hydration, and smooth, glowing skin.",
    description:
      "Nano Glow Infusion and oxygen boost for maximum radiance, hydration, and smooth, glowing skin. The ultimate transformation combining two advanced technologies in one premium session.",
    image: "/images/ultimate-glow-experience.jpg",
    price: "$230",
    duration: "90 minutes",
    bestFor:
      "The ultimate glow seeker wanting the maximum transformation for an event or self-care.",
    whyLoveIt: [
      "Best value combination",
      "Combined benefits of two advanced technologies",
      "Unmatched level of hydration and glow",
    ],
    concerns: ["aging", "dehydration", "dull-skin", "texture", "acne-scars"],
    areas: ["face"],
    benefits: [
      "Maximum hydration",
      "Immediate and lasting radiance",
      "Deepest serum penetration",
    ],
    fullDescription: `The Ultimate Glow Experience is specifically designed for those who want it all. By combining the deep-reaching effects of our Nano Glow Infusion with the immediate plumping and hydrating power of Pure Oxygen, we create a skincare treatment that addresses multiple concerns in one session. Your skin will look and feel its absolute best—superbly hydrated, smooth, and radiantly luminous.`,
    detailedBenefits: [
      "Maximum penetration of potent serums",
      "Intense hydration at multiple levels",
      "Significant reduction in appearance of fine lines",
      "Improved skin elasticity and firmness",
      "Long-lasting 'glass skin' effect",
    ],
    process: [
      {
        step: 1,
        title: "Preparation",
        description: "Double cleanse and professional skin assessment.",
      },
      {
        step: 2,
        title: "Nano Infusion",
        description: "Targeted serum delivery using nano-tip technology.",
      },
      {
        step: 3,
        title: "Oxygen Infusion",
        description: "Cooling oxygen mist to plump and soothe.",
      },
      {
        step: 4,
        title: "Final Rejuvenation",
        description: "A combination of cooling masks and finishing serums.",
      },
    ],
    faqs: [
      {
        question: "Is this treatment session long?",
        answer:
          "Yes, it takes about 90 minutes as it is a comprehensive, multi-step process for maximum results.",
      },
    ],
    aftercare:
      "Continue your home care routine with extra focus on hydration for the next 48 hours.",
    ingredients: [
      "Nano-Infused Serums",
      "Pure Oxygen",
      "Hyaluronic Acid",
      "Peptides",
    ],
    testimonials: [],
  },
  {
    slug: "oxygen-glow-fusion",
    bookingSlug: "oxygen-glow-fusion-treatment-add-on",
    title: "Pure Oxygen Glow Fusion Facial + Add-On",
    icon: Wind,
    short:
      "Customized glow treatment with oxygen + your choice of dermaplaning, facial, or microdermabrasion for smooth radiant skin.",
    description:
      "Customized glow treatment with oxygen + your choice of dermaplaning, facial, or microdermabrasion for smooth radiant skin.",
    image: "/images/oxygen-glow-fusion.jpg",
    price: "$180",
    duration: "90 minutes",
    bestFor:
      "Clients who want a combined treatment experience with oxygen therapy plus their preferred exfoliation or facial add-on.",
    whyLoveIt: [
      "Customizable treatment combination",
      "Oxygen-infused radiance",
      "Choose your perfect add-on",
      "Maximum results in one session",
    ],
    addOns: [
      {
        name: "Dermaplaning",
        description:
          "Expert dermaplaning removes peach fuzz + dead skin for instant smoothness and glow.",
      },
      {
        name: "Made For You Facial",
        description:
          "Customized facial tailored to your unique skin type, concerns, and goals.",
      },
      {
        name: "Diamond Microdermabrasion",
        description:
          "Diamond-tip exfoliation for smoother, brighter, and more radiant skin.",
      },
    ],
    concerns: ["dull-skin", "texture", "dehydration", "aging"],
    areas: ["face"],
    benefits: [
      "Combined treatment power",
      "Personalized add-on choice",
      "Instant radiant glow",
    ],
    fullDescription: `Experience the best of both worlds with our Pure Oxygen Glow Fusion Facial + Treatment Add-On. This premium combination begins with a revitalizing pure oxygen infusion to brighten, hydrate, and rejuvenate your skin. Then, choose your preferred add-on treatment — dermaplaning for ultra-smooth skin, a Made For You Facial customized to your needs, or diamond microdermabrasion for deep exfoliation. The result is a comprehensive, customized treatment that delivers maximum radiance and glow in a single 90-minute session.`,
    detailedBenefits: [
      "Oxygen infusion revitalizes and brightens",
      "Choose from three premium add-on treatments",
      "Deeper product absorption from combined techniques",
      "Addresses multiple skin concerns in one session",
      "Instant visible results with lasting benefits",
      "Customized to your specific skin needs",
    ],
    process: [
      {
        step: 1,
        title: "Consultation & Cleansing",
        description:
          "Skin assessment and double cleanse to prepare for treatment.",
      },
      {
        step: 2,
        title: "Pure Oxygen Infusion",
        description:
          "Pressurized oxygen delivers vitamins and hyaluronic acid deep into the skin.",
      },
      {
        step: 3,
        title: "Your Chosen Add-On",
        description:
          "Dermaplaning, Made For You Facial, or Diamond Microdermabrasion — your pick!",
      },
      {
        step: 4,
        title: "Finishing Touches",
        description:
          "Sealing in moisture with hydrating serums, moisturizer, and SPF protection.",
      },
    ],
    faqs: [
      {
        question: "Which add-on should I choose?",
        answer:
          "It depends on your skin goals! Dermaplaning is great for smoothness and peach fuzz removal, the Made For You Facial addresses your specific concerns, and microdermabrasion is ideal for deep exfoliation and texture improvement. Our esthetician will help you decide during your consultation.",
      },
      {
        question: "Can I change my add-on choice at the appointment?",
        answer:
          "Absolutely! You can finalize your add-on choice during your consultation with Marcia.",
      },
      {
        question: "Is this treatment suitable for sensitive skin?",
        answer:
          "Yes, the treatment can be customized to suit all skin types, including sensitive skin.",
      },
    ],
    aftercare:
      "Avoid sun exposure for 24 hours. Stay hydrated and use a gentle cleanser. Apply moisturizer morning and night. Avoid exfoliants for 48 hours. Use SPF daily.",
    ingredients: [
      "Pure Oxygen",
      "Hyaluronic Acid",
      "Custom Serums",
      "Vitamins",
    ],
    testimonials: [],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
