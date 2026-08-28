// Sample entries rendered until reviewed submissions fill the archive.
// Every entry follows this shape:
// { slug, title, khmerName, category, contributor, region, summary }
// Khmer names are first-class content — never transliterate or strip them.

const sampleEntries = [
  {
    slug: "fish-amok",
    title: "Fish Amok",
    khmerName: "អាម៉ុកត្រី",
    category: "Curry",
    contributor: "[My Grandmother, My Mother]",
    region: "Cambodia, Phnom Penh",
    summary:
      "River fish steamed in a coconut-rich kroeung custard inside banana leaves — soft, mildly sweet, and widely called Cambodia's national dish.",
  },
  {
    slug: "somlor-korko",
    title: "Somlor Korko",
    khmerName: "សម្លកកូរ",
    category: "Soup",
    contributor: "[My Grandmother, My Mother]",
    region: "Cambodia, Phnom Penh",
    summary:
      "The 'stirring soup' — green kroeung, prahok, and roasted rice simmered with catfish, pork, pumpkin, and green papaya until every spoonful tastes of the whole pot.",
  },
  {
    slug: "prahok-ktis",
    title: "Prahok Ktis",
    khmerName: "ប្រហុកខ្ទិះ",
    category: "Dip",
    contributor: "[My Grandmother, My Mother]",
    region: "Cambodia, Phnom Penh",
    summary:
      "Fermented fish paste simmered down with minced pork, coconut cream, lemongrass, and chili until rich and gently sweet — scooped up with crisp raw vegetables.",
  },
];

export default sampleEntries;
