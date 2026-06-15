export type BlogPost = {
  slug: string;
  category: "Fitness tips" | "Services" | "Wellness" | "Nutrition";
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole: string;
  authorInitials: string;
  date: string;
  readTime: string;
  views: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "home-training-beats-gym-delhi-ncr",
    category: "Fitness tips",
    title:
      "5 reasons why home personal training beats the gym — especially in Delhi NCR",
    excerpt:
      "Skip the commute, skip the crowd. We break down why a certified trainer at your doorstep delivers faster, safer results.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
    author: "Rahul Kapoor",
    authorRole: "Head coach, CoachKart Delhi NCR",
    authorInitials: "RK",
    date: "June 10, 2025",
    readTime: "5 min read",
    views: "1.2k views",
    content: `
      <p>If you live in Delhi NCR, you already know the gym struggle. Peak-hour traffic, crowded machines, parking nightmares — and that's before you've even warmed up. Home personal training flips the script entirely, and here's exactly why more residents are making the switch.</p>
      <h2>1. Zero commute, zero wasted time</h2>
      <p>The average Delhi resident spends 20–40 minutes getting to and from a gym. That's nearly an hour of your day gone before a single rep. With a CoachKart trainer arriving at your door, your session starts on your schedule.</p>
      <h2>2. Truly personalized programming</h2>
      <p>Gym trainers split their attention across dozens of clients simultaneously. A home trainer is 100% focused on you — your form, your pace, your goals.</p>
      <h2>3. Safer for beginners and seniors</h2>
      <p>Starting out or returning after injury? Home sessions let your trainer control the equipment, the space, and the intensity — minimizing injury risk dramatically.</p>
      <h2>4. Consistency becomes dramatically easier</h2>
      <p>When your trainer comes to you, the excuse disappears. CoachKart clients average 3.8 sessions per week compared to the gym industry average of 1.6.</p>
      <h2>5. It costs less than you think</h2>
      <p>When you factor in gym fees, commute costs, and skipped sessions, home training with CoachKart often works out to better value — especially with our ₹299 demo session offer.</p>
    `,
  },
  {
    slug: "morning-yoga-under-20-minutes",
    category: "Wellness",
    title:
      "Morning yoga routines that take under 20 minutes — and actually work",
    excerpt:
      "Improve flexibility, reduce stress and kickstart your day with these expert-curated sequences.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=80",
    author: "Priya Sharma",
    authorRole: "Certified yoga instructor, CoachKart",
    authorInitials: "PS",
    date: "June 3, 2025",
    readTime: "4 min read",
    views: "890 views",
    content: `
      <p>Most people skip morning yoga because they think it needs an hour. It doesn't. These sequences are designed by CoachKart's certified instructors to fit into any morning — even a busy one.</p>
      <h2>The 5-minute flexibility sequence</h2>
      <p>Cat-cow, child's pose, and a standing forward fold. Three poses, one flowing sequence, and your spine will thank you for the rest of the day.</p>
      <h2>The 15-minute energizing flow</h2>
      <p>Sun salutation A (×3), warrior 1, warrior 2, and a seated twist. This sequence activates your entire body and builds heat without overwhelming beginners.</p>
      <h2>Tips to stay consistent</h2>
      <p>Keep your mat out and visible. Practice before checking your phone. Even one pose is better than none — progress compounds over time.</p>
    `,
  },
  {
    slug: "science-of-fat-loss",
    category: "Fitness tips",
    title: "The science of fat loss: what your trainer wishes you already knew",
    excerpt:
      "Cut through the noise — here's what actually drives fat loss, explained simply by CoachKart coaches.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=900&q=80",
    author: "Amit Verma",
    authorRole: "Certified personal trainer, ACE",
    authorInitials: "AV",
    date: "May 28, 2025",
    readTime: "6 min read",
    views: "2.1k views",
    content: `
      <p>Fat loss is simple in theory and hard in practice — mostly because of misinformation. Let's clear it up.</p>
      <h2>Calories in vs calories out</h2>
      <p>Everything else is secondary. A calorie deficit is the only non-negotiable requirement for fat loss. Keto, intermittent fasting, HIIT — they work because they help create a deficit, not for any other magic reason.</p>
      <h2>Why strength training matters more than cardio</h2>
      <p>Muscle tissue burns more calories at rest than fat tissue. Building muscle with a certified trainer — even 2–3 sessions per week — raises your base metabolic rate permanently.</p>
      <h2>Sleep and stress: the missing variables</h2>
      <p>Poor sleep raises cortisol, which promotes fat storage and increases hunger signals. Managing stress isn't optional — it's a core part of body composition.</p>
    `,
  },
  {
    slug: "society-fitness-program-delhi",
    category: "Services",
    title:
      "How CoachKart's society fitness program is transforming apartments in Delhi",
    excerpt:
      "Group workouts, Zumba sessions and wellness programs are turning apartment buildings into fitness communities.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900&q=80",
    author: "Neha Gupta",
    authorRole: "Community wellness lead, CoachKart",
    authorInitials: "NG",
    date: "May 20, 2025",
    readTime: "3 min read",
    views: "670 views",
    content: `
      <p>Apartment communities across Delhi NCR are discovering that fitness is better together. CoachKart's society program brings certified group fitness coaches directly to your building's common area, park, or terrace.</p>
      <h2>What's included in a society package</h2>
      <p>Weekly Zumba, strength training, and yoga sessions — scheduled at times that work for residents. No equipment needed beyond what we bring.</p>
      <h2>How it builds community</h2>
      <p>Exercise is one of the strongest social bonding activities. Residents who work out together report higher satisfaction with their housing community — and better adherence to fitness goals.</p>
      <h2>How to get started</h2>
      <p>Contact our team via WhatsApp with your society name, approximate resident count, and preferred schedule. We'll have a proposal to you within 24 hours.</p>
    `,
  },
  {
    slug: "what-to-eat-before-after-workout",
    category: "Nutrition",
    title:
      "What to eat before and after your home workout session — a simple guide",
    excerpt:
      "Fuel your sessions right. Our coaches break down pre and post-workout nutrition without the complexity.",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80",
    author: "Sunita Mehta",
    authorRole: "Nutrition coach, CoachKart",
    authorInitials: "SM",
    date: "May 14, 2025",
    readTime: "4 min read",
    views: "1.4k views",
    content: `
      <p>What you eat around your workout matters almost as much as the workout itself. Here's the CoachKart coach-approved simple framework.</p>
      <h2>Before your session (60–90 mins prior)</h2>
      <p>A light meal with easily digestible carbohydrates and some protein. Think: banana with peanut butter, oats with milk, or a small bowl of poha. Avoid heavy fats or fibre right before training.</p>
      <h2>After your session (within 30–60 mins)</h2>
      <p>Protein + carbohydrates together. This is when your muscles are most receptive. Options: paneer with roti, dal rice, eggs on toast, or a simple protein shake with fruit.</p>
      <h2>Hydration: the most ignored variable</h2>
      <p>Drink 400–500ml of water in the 2 hours before training. During a home session, keep water accessible — there's no reason not to sip regularly.</p>
    `,
  },
  {
    slug: "senior-fitness-at-home",
    category: "Services",
    title:
      "Senior fitness at home: why more families are booking CoachKart for parents",
    excerpt:
      "Safe, gentle, and effective — home fitness for seniors is one of CoachKart's fastest-growing services.",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=900&q=80",
    author: "Dr. Ravi Anand",
    authorRole: "Senior wellness specialist, CoachKart",
    authorInitials: "RA",
    date: "May 6, 2025",
    readTime: "5 min read",
    views: "980 views",
    content: `
      <p>Adult children across Delhi NCR are increasingly investing in structured fitness for their parents — and for good reason. Regular supervised movement dramatically improves senior quality of life.</p>
      <h2>What makes senior home training different</h2>
      <p>CoachKart trainers working with seniors are specifically screened for patience, gentleness, and knowledge of common age-related conditions: arthritis, osteoporosis, hypertension, and diabetes.</p>
      <h2>The core benefits</h2>
      <p>Improved balance reduces fall risk — the leading cause of senior hospitalization. Strength training preserves bone density. Gentle mobility work keeps joints functional and pain levels manageable.</p>
      <h2>How families get started</h2>
      <p>Book a ₹299 demo session for your parent. Our trainer assesses their current fitness level, discusses any conditions with the family, and designs a safe, progressive program from the very first session.</p>
    `,
  },
];

export const CATEGORY_COLORS: Record<string, string> = {
  "Fitness tips": "bg-orange-50 text-orange-800",
  Services: "bg-teal-50 text-teal-800",
  Wellness: "bg-purple-50 text-purple-800",
  Nutrition: "bg-green-50 text-green-800",
};