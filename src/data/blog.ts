export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
  metaTitle: string;
  metaDescription: string;
}

export const blogCategories = [
  { slug: "government-schemes", name: "Government Schemes" },
  { slug: "certificates", name: "Certificates" },
  { slug: "business", name: "Business Registrations" },
  { slug: "agriculture", name: "Agriculture" },
  { slug: "education", name: "Education" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "pm-kisan-samman-nidhi-2025",
    title: "PM Kisan Samman Nidhi: Complete Guide 2025",
    excerpt: "Everything you need to know about PM Kisan Yojana — eligibility, benefits, registration process, and how to check your installment status.",
    category: "Government Schemes",
    date: "2025-01-15",
    readTime: "5 min",
    content: [
      "PM Kisan Samman Nidhi is one of the most beneficial schemes for farmers in India. Under this scheme, eligible farmer families receive ₹6,000 per year in three equal installments of ₹2,000 each.",
      "## Who is Eligible?",
      "All farmer families who own cultivable land are eligible for PM Kisan. However, the following categories are excluded: Institutional landholders, former and present holders of constitutional posts, income tax payers, and professionals like doctors, engineers, lawyers.",
      "## How to Register?",
      "Registration can be done at your nearest CSC (Common Service Center) like Prisha Online Multiservices. You need Aadhaar card, land records (7/12 extract), and bank account details.",
      "## Checking Installment Status",
      "You can check your installment status on the PM Kisan website using your Aadhaar number or bank account number. We can also help you check the status at our center.",
      "## Common Issues",
      "Many farmers face issues like name mismatch between Aadhaar and land records, incorrect bank details, or missing installments. We help resolve all these issues quickly.",
    ],
    metaTitle: "PM Kisan Samman Nidhi Guide 2025 | Prisha Online",
    metaDescription: "Complete guide to PM Kisan Yojana 2025. Eligibility, registration, installment status, and troubleshooting. Visit Prisha Online Multiservices.",
  },
  {
    slug: "how-to-apply-income-certificate",
    title: "How to Apply for Income Certificate in Maharashtra",
    excerpt: "Step-by-step guide to applying for income certificate in Maharashtra — documents required, online process, and processing time.",
    category: "Certificates",
    date: "2025-02-10",
    readTime: "4 min",
    content: [
      "Income Certificate is an important document required for various government schemes, scholarships, and reservation benefits. In Maharashtra, you can apply for income certificate both online and offline.",
      "## Documents Required",
      "You will need: Aadhaar Card, Ration Card, Electricity Bill, Passport Size Photo, Income Proof (Salary slip or Bank statement), and an affidavit if required.",
      "## Online Process",
      "Visit the Maharashtra e-District portal (mahabhulekh.maharashtra.gov.in). Register with your Aadhaar number, fill the application form, upload documents, and submit. Note the application reference number.",
      "## Offline Process",
      "You can also apply at the Tehsil office. We at Prisha Online Multiservices handle the complete process for you — from document preparation to application submission.",
      "## Processing Time",
      "Income certificate usually takes 15-30 working days to process. You can track the status online using your application reference number.",
    ],
    metaTitle: "Income Certificate Maharashtra | How to Apply | Prisha Online",
    metaDescription: "Step-by-step guide to applying for income certificate in Maharashtra. Documents, online process, and processing time. Prisha Online Multiservices.",
  },
  {
    slug: "gst-registration-guide",
    title: "GST Registration Guide for Small Businesses",
    excerpt: "Complete guide to GST registration for small businesses in India — who needs it, documents required, process, and benefits.",
    category: "Business Registrations",
    date: "2025-03-05",
    readTime: "6 min",
    content: [
      "GST (Goods and Services Tax) registration is mandatory for businesses with annual turnover above ₹20 lakhs (₹10 lakhs for special category states). Even if your turnover is below the threshold, voluntary registration has many benefits.",
      "## Who Needs GST Registration?",
      "Businesses with turnover above ₹20L, e-commerce sellers, interstate traders, casual taxable persons, and those liable to pay tax under reverse charge.",
      "## Documents Required",
      "PAN Card of business/owner, Aadhaar Card, Business address proof, Bank statement/cancelled cheque, Business registration document, Passport size photo, and Digital Signature (for companies).",
      "## Registration Process",
      "Apply on the GST portal (gst.gov.in). Fill Part A with PAN, mobile, and email. Verify with OTP. Fill Part B with business details and documents. Submit and wait for ARN. GSTIN is issued within 7-15 working days.",
      "## Benefits of GST Registration",
      "Legal business recognition, input tax credit, interstate trade permission, e-commerce eligibility, and improved business credibility.",
    ],
    metaTitle: "GST Registration Guide | Small Business | Prisha Online",
    metaDescription: "Complete GST registration guide for small businesses. Who needs it, documents, process, and benefits. Expert help at Prisha Online Multiservices.",
  },
  {
    slug: "scholarship-guide-students",
    title: "Scholarship Guide for Students 2025",
    excerpt: "Comprehensive list of government scholarships for students — central, state, minority, SC/ST/OBC scholarships with application process.",
    category: "Education",
    date: "2025-04-20",
    readTime: "7 min",
    content: [
      "Education is expensive, but government scholarships can significantly reduce the financial burden. Here's a comprehensive guide to various scholarships available for students in India.",
      "## Central Government Scholarships",
      "National Scholarship Portal (NSP) hosts multiple central scholarships: Post Matric Scholarship, Merit Cum Means Scholarship, Central Sector Scheme, and many more.",
      "## Maharashtra State Scholarships",
      "Maharashtra offers various state scholarships through the MahaDBT portal: Post Matric Scholarship for SC/ST/OBC, EBC concession, and minority scholarships.",
      "## Minority Scholarships",
      "Ministry of Minority Affairs offers Pre-Matric, Post-Matric, and Merit-cum-Means scholarships for students from minority communities.",
      "## How to Apply?",
      "Most scholarships are applied online through NSP or MahaDBT portals. We at Prisha Online Multiservices help students with the complete application process — from identifying the right scholarship to submitting the application.",
    ],
    metaTitle: "Scholarship Guide 2025 | Government Scholarships | Prisha Online",
    metaDescription: "Complete scholarship guide for students 2025. Central, state, minority scholarships. Application help at Prisha Online Multiservices.",
  },
  {
    slug: "ayushman-bharat-guide",
    title: "Ayushman Bharat Yojana: Complete Guide",
    excerpt: "Everything about Ayushman Bharat — eligibility, benefits, how to get the card, and list of covered treatments.",
    category: "Government Schemes",
    date: "2025-05-15",
    readTime: "5 min",
    content: [
      "Ayushman Bharat (PM-JAY) is the world's largest government-funded health insurance scheme. It provides health cover of ₹5 lakh per family per year to over 10 crore vulnerable families.",
      "## Who is Eligible?",
      "Families identified in the SECC 2011 database are eligible. There is no restriction on family size, age, or gender. All pre-existing conditions are covered.",
      "## Benefits",
      "₹5 lakh health insurance per family per year, cashless treatment at empaneled hospitals, coverage for 1,500+ medical procedures, no premium for eligible families.",
      "## How to Get the Card?",
      "Check your eligibility on the PM-JAY website or visit Prisha Online Multiservices. We help you check eligibility and get the Ayushman card.",
      "## Covered Treatments",
      "The scheme covers hospitalization, surgery, medicines, diagnostics, and follow-up care for over 1,500 procedures including cardiac surgery, cancer treatment, and orthopedic procedures.",
    ],
    metaTitle: "Ayushman Bharat Guide | Health Insurance | Prisha Online",
    metaDescription: "Complete guide to Ayushman Bharat Yojana. Eligibility, benefits, card process, and covered treatments. Prisha Online Multiservices.",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(p => p.slug);
}
