import {
  Heart,
  Scissors,
  Waves,
  Gem,
  Droplets,
  Sparkles,
  Sun,
  Wand2,
} from "lucide-react";

export const SERVICES = [
  {
    slug: "made-for-you-facial",
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
    slug: "zena-algae-peel",
    title: "Zena Algae Peel",
    icon: Waves,
    short:
      "Natural marine algae peel for resurfacing and collagen stimulation.",
    description:
      "A natural mechanical resurfacing peel using marine algae crystals. Lifts pigmentation, smooths texture, reduces acne, stretch marks, and improves overall skin tone with minimal downtime.",
    image: "/images/Zena_Algae_Peel.webp",
    price: "From $180",
    duration: "40 minutes",
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
          "This peel may not be suitable for those with very sensitive skin. We recommend a patch test before the full treatment.",
      },
      {
        question: "How many treatments will I need?",
        answer: "A series of 3-6 treatments is recommended for best results.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "You may experience some redness and mild peeling for a few days after the treatment.",
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
      {
        step: 3,
        title: "Finishing Touches",
        description: "The massage will end with some gentle stretches.",
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
    title: "Waxing Hair Removal",
    icon: Wand2,
    short: "Professional waxing for smooth, long-lasting results.",
    description:
      "Professional hair removal using hygienic techniques for smooth skin lasting weeks. Suitable for face and body.",
    image: "/images/Hair_Removal.webp",
    price: "From $10",
    duration: "Varies",
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
    fullDescription: `Waxing is a popular hair removal method that is effective for removing hair from all parts of the body. It is a great alternative to shaving, as it provides longer-lasting results and can help to reduce hair growth over time.`,
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
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
