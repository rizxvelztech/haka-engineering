/* ============================================================
   PT HAKA ENGINEERING INDONESIA - CONTENT DATA
   Edit values in this file to update website content.
   No database or backend required.
   ============================================================ */

const COMPANY = {
  name: "PT HAKA ENGINEERING INDONESIA",
  shortName: "Haka Engineering",
  website: "https://www.himura.co.id",
  email: "marketing@himura.co.id",
  phone: "+62 877 7905 5387 / +62 851 5969 0059",
  whatsapp: "6287779055387", // digits only, no + or spaces (for wa.me links)
  address: "Karawang, Jawa Barat, Indonesia",
  mapsEmbed: "https://www.google.com/maps?q=Karawang,Jawa+Barat,Indonesia&output=embed",
  mapsLink: "https://maps.google.com/?q=Karawang,Jawa+Barat,Indonesia",
  description:
    "PT Haka Engineering Indonesia merupakan perusahaan yang bergerak di bidang general trading dan jasa mesin industri, dengan fokus pada kebutuhan engineering, maintenance, fabrication, electrical, dan dukungan teknis industri."
};

/* Services */
const SERVICES = [
  {
    id: "industrial-engineering",
    number: "01",
    title: "Industrial Engineering",
    short: "Engineering design and technical solutions tailored to industrial processes.",
    description:
      "We provide engineering support for industrial facilities—covering design, technical analysis, and process improvement aligned with operational needs.",
    details:
      "Our industrial engineering service assists clients in planning, designing, and improving industrial systems. We combine technical study with practical field experience to deliver solutions that fit the operating environment.",
    features: [
      "Engineering design and drafting",
      "Technical analysis and consultation",
      "Process improvement support",
      "Project planning assistance"
    ],
    image: "assets/images/services/engineering.jpg"
  },
  {
    id: "machinery-maintenance",
    number: "02",
    title: "Machinery Maintenance",
    short: "Preventive and corrective maintenance for industrial machinery.",
    description:
      "Scheduled and on-demand maintenance services to help keep industrial machinery running reliably and reduce unexpected downtime.",
    details:
      "We support maintenance activities for industrial machinery, from routine inspection to corrective repair. Services are coordinated around client operational schedules to minimize disruption.",
    features: [
      "Preventive maintenance",
      "Corrective and breakdown repair",
      "Inspection and troubleshooting",
      "Spare part coordination"
    ],
    image: "assets/images/services/maintenance.jpg"
  },
  {
    id: "fabrication-welding",
    number: "03",
    title: "Fabrication & Welding",
    short: "Custom metal fabrication and welding for industrial needs.",
    description:
      "Fabrication and welding work for industrial components, structures, and custom metal parts based on client requirements.",
    details:
      "Our fabrication service covers cutting, forming, and welding of metal components for industrial use. Work is carried out according to drawings and specifications provided by the client.",
    features: [
      "Custom metal fabrication",
      "Welding and assembly",
      "Structural and component work",
      "Drawing-based production"
    ],
    image: "assets/images/services/fabrication.jpg"
  },
  {
    id: "electrical-engineering",
    number: "04",
    title: "Electrical Engineering",
    short: "Electrical system support for industrial facilities.",
    description:
      "Electrical engineering support covering installation, maintenance, and troubleshooting for industrial electrical systems.",
    details:
      "We provide electrical engineering services for industrial environments, including panel work, wiring, and system troubleshooting—carried out with attention to safety and standards.",
    features: [
      "Electrical installation support",
      "Panel and control work",
      "Troubleshooting and repair",
      "System inspection"
    ],
    image: "assets/images/services/electrical.jpg"
  },
  {
    id: "machinery-equipment",
    number: "05",
    title: "Machinery & Equipment",
    short: "Supply and support for industrial machinery and equipment.",
    description:
      "General trading and supply of industrial machinery, equipment, and components to support operational needs.",
    details:
      "Through our general trading activities, we help clients source industrial machinery, equipment, and components. We coordinate with suppliers to match technical requirements.",
    features: [
      "Industrial machinery supply",
      "Equipment and component sourcing",
      "Technical specification support",
      "Supplier coordination"
    ],
    image: "assets/images/services/machinery.jpg"
  },
  {
    id: "industrial-support",
    number: "06",
    title: "Industrial Support",
    short: "Technical and operational support for industrial activities.",
    description:
      "General technical and operational support services for industrial facilities and projects.",
    details:
      "Our industrial support services cover a range of technical assistance needs—helping clients address operational requirements with a practical, responsive approach.",
    features: [
      "Technical assistance",
      "Operational support",
      "Project coordination",
      "On-site support"
    ],
    image: "assets/images/services/support.jpg"
  }
];

/* Product catalog — edit manually */
const PRODUCTS = [
  {
    id: "roller",
    name: "Conveyor Roller",
    category: "Components",
    short: "Heavy-duty rollers for conveyor systems and material handling.",
    description: "High-quality conveyor rollers designed for durability and smooth operation in industrial material handling systems.",
    specs: { "Material": "Steel / Stainless", "Application": "Conveyor System", "Type": "Return / Impact", "Customization": "Available" },
    image: "assets/images/products/roller.png"
  },
  {
    id: "pallet",
    name: "Wooden Pallet",
    category: "Equipment",
    short: "Standard and custom wooden pallets for storage and logistics.",
    description: "Durable wooden pallets designed to support heavy loads during storage and transportation in industrial environments.",
    specs: { "Material": "Wood", "Type": "Standard / Custom", "Load Capacity": "Heavy Duty", "Application": "Logistics" },
    image: "assets/images/products/pallet.png"
  },
  {
    id: "tangga",
    name: "Industrial Ladder",
    category: "Equipment",
    short: "Safety ladders for industrial access and maintenance.",
    description: "Heavy-duty ladders designed for safe access in industrial facilities, warehouses, and maintenance areas.",
    specs: { "Material": "Aluminum / Steel", "Type": "Step / Extension", "Application": "Industrial Access", "Safety": "Anti-Slip" },
    image: "assets/images/products/tangga.png"
  },
  {
    id: "gear",
    name: "Gear Components",
    category: "Components",
    short: "Precision gears for machinery and power transmission.",
    description: "Custom and standard gears manufactured for reliable power transmission in industrial machinery.",
    specs: { "Material": "Metal / Steel", "Process": "Machining", "Application": "Power Transmission", "Tolerance": "High Precision" },
    image: "assets/images/products/gear.png"
  },
  {
    id: "hub-bushing",
    name: "Hub Bushing",
    category: "Components",
    short: "Bushing components for shaft and hub connections.",
    description: "Durable hub bushings used to secure components to shafts, reducing wear and vibration in machinery.",
    specs: { "Material": "Metal / Bronze", "Type": "Taper Lock / Standard", "Application": "Shaft Connection", "Finish": "Machined" },
    image: "assets/images/products/hubBushing.jpg"
  },
  {
    id: "bushing",
    name: "Industrial Bushing",
    category: "Components",
    short: "Heavy-duty bushings for industrial machinery support.",
    description: "Industrial bushings designed to absorb vibration and reduce friction between moving parts.",
    specs: { "Material": "Bronze / Polymer", "Type": "Sleeve / Flanged", "Application": "Machinery Support", "Durability": "High" },
    image: "assets/images/products/bushing.png"
  },
  {
    id: "silo-1",
    name: "Industrial Silo Type 1",
    category: "Equipment",
    short: "Storage silos for bulk materials.",
    description: "Large capacity silos designed for storing bulk materials in manufacturing and processing facilities.",
    specs: { "Material": "Steel", "Capacity": "Custom", "Application": "Bulk Storage", "Design": "Vertical" },
    image: "assets/images/products/Silo1.jpeg"
  },
  {
    id: "silo-2",
    name: "Industrial Silo Type 2",
    category: "Equipment",
    short: "Custom silo configurations for specific operational needs.",
    description: "Silo systems engineered for specific bulk material storage requirements, ensuring efficient loading and unloading.",
    specs: { "Material": "Steel", "Capacity": "Custom", "Application": "Bulk Storage", "Design": "Custom" },
    image: "assets/images/products/Silo2.jpeg"
  },
  {
    id: "deck-4",
    name: "Structural Deck Type 4",
    category: "Fabrication",
    short: "Heavy-duty structural decks for platforms and flooring.",
    description: "Fabricated structural decks designed to support heavy loads in industrial platforms and walkways.",
    specs: { "Material": "Steel / Metal", "Process": "Fabrication", "Application": "Platform Flooring", "Load Capacity": "Heavy" },
    image: "assets/images/products/deck4.jpeg"
  },
  {
    id: "deck-5",
    name: "Structural Deck Type 5",
    category: "Fabrication",
    short: "Custom metal decking for industrial environments.",
    description: "Custom-fabricated metal decking solutions to meet specific structural and safety requirements.",
    specs: { "Material": "Steel / Metal", "Process": "Fabrication", "Application": "Platform Flooring", "Customization": "Available" },
    image: "assets/images/products/deck5.jpeg"
  },
  {
    id: "rangka",
    name: "Steel Frame Structure",
    category: "Fabrication",
    short: "Industrial steel framing for structural support.",
    description: "Precision-fabricated steel frames used to support equipment, platforms, and structural loads.",
    specs: { "Material": "Steel", "Process": "Cutting & Welding", "Application": "Structural Support", "Finish": "As Required" },
    image: "assets/images/products/rangka.jpeg"
  },
  {
    id: "conveyor",
    name: "Industrial Conveyor",
    category: "Conveyor",
    short: "Custom and standard conveyor systems for material handling.",
    description: "Conveyor systems designed for smooth material flow in industrial production lines.",
    specs: { "Type": "Belt / Roller", "Material": "Steel / PVC", "Application": "Material Handling", "Customization": "Available" },
    image: "assets/images/products/conv.jpeg"
  },
  {
    id: "canopy",
    name: "Industrial Canopy",
    category: "Fabrication",
    short: "Protective metal canopies for industrial areas.",
    description: "Fabricated metal canopies designed to protect equipment and personnel from weather elements.",
    specs: { "Material": "Steel / Aluminum", "Application": "Weather Protection", "Design": "Custom", "Installation": "Available" },
    image: "assets/images/products/canopy.jpeg"
  },
  {
    id: "cover",
    name: "Machinery Cover",
    category: "Fabrication",
    short: "Protective covers for industrial machinery.",
    description: "Custom covers fabricated to protect machinery components from dust, debris, and environmental factors.",
    specs: { "Material": "Metal / Sheet", "Process": "Fabrication", "Application": "Machinery Protection", "Customization": "Available" },
    image: "assets/images/products/cover.jpeg"
  },
  {
    id: "panel",
    name: "Electrical Panel Box",
    category: "Electrical",
    short: "Enclosures for electrical and control systems.",
    description: "Industrial panel boxes designed to safely house electrical components and control systems.",
    specs: { "Material": "Metal", "Application": "Electrical Enclosure", "Protection": "Dust / Water Resistant", "Customization": "Available" },
    image: "assets/images/products/panel.jpeg"
  },
  {
    id: "regulator",
    name: "Gas Regulator",
    category: "Equipment",
    short: "Pressure regulators for industrial gas systems.",
    description: "Reliable gas regulators designed to maintain consistent pressure in industrial applications.",
    specs: { "Material": "Metal / Brass", "Application": "Gas Control", "Function": "Pressure Regulation", "Safety": "Industrial Standard" },
    image: "assets/images/products/regulator.jpeg"
  },
  {
    id: "tank-1",
    name: "Industrial Tank Type 1",
    category: "Equipment",
    short: "Storage tanks for liquid and chemical materials.",
    description: "Durable tanks designed for the safe storage of liquids and chemicals in industrial settings.",
    specs: { "Material": "Steel / Stainless", "Capacity": "Custom", "Application": "Liquid Storage", "Type": "Vertical / Horizontal" },
    image: "assets/images/products/tank.jpeg"
  },
  {
    id: "tank-2",
    name: "Industrial Tank Type 2",
    category: "Equipment",
    short: "Custom tank solutions for specific operational needs.",
    description: "Custom-engineered tanks to meet specific storage and processing requirements.",
    specs: { "Material": "Steel / Stainless", "Capacity": "Custom", "Application": "Liquid Storage", "Design": "Custom" },
    image: "assets/images/products/tank2.jpeg"
  },
  {
    id: "manifold",
    name: "Industrial Manifold",
    category: "Components",
    short: "Fluid distribution manifolds for industrial systems.",
    description: "Precision manifolds designed to distribute fluids or gases efficiently across multiple lines.",
    specs: { "Material": "Metal", "Application": "Fluid / Gas Distribution", "Process": "Machining", "Customization": "Available" },
    image: "assets/images/products/manifold.jpeg"
  }
];

const PRODUCT_CATEGORIES = ["All", "Conveyor", "Components", "Equipment", "Fabrication", "Electrical"];

/* Projects — PLACEHOLDER DATA.
   These are illustrative examples only.
   Replace with actual company project documentation when available. */
const PROJECTS = [
  // --- PROYEK BARU (2026) ---
  {
    id: "project-pagar",
    title: "Pembangunan Pagar & Struktur",
    category: "Engineering",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-pagar.jpg"
  },
  {
    id: "project-panel",
    title: "Instalasi Panel Listrik",
    category: "Electrical",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-panel.jpg"
  },
  {
    id: "project-pengecoran",
    title: "Pengecoran Lantai Pabrik",
    category: "Fabrication",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-pengecoran.jpg"
  },
  {
    id: "project-tank",
    title: "Instalasi Pipa & Tangki",
    category: "Maintenance",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-tank.jpg"
  },
  {
    id: "project-lantai-hijau",
    title: "Epoxy Lantai Area Produksi",
    category: "Fabrication",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-lantai-hijau.jpg"
  },
  {
    id: "project-crane",
    title: "Pengangkatan Material Baja",
    category: "Engineering",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-crane.jpg"
  },
  {
    id: "project-manhole",
    title: "Perbaikan Manhole Tangki",
    category: "Maintenance",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-manhole.jpg"
  },
  {
    id: "project-cat",
    title: "Pengecatan & Coating Industri",
    category: "Fabrication",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-cat.jpg"
  },
  {
    id: "project-forklift",
    title: "Pengiriman Panel Box",
    category: "Electrical",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-forklift.jpg"
  },
  {
    id: "project-semen",
    title: "Pekerjaan Struktur & Scaffolding",
    category: "Engineering",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-semen.jpg"
  },
  {
    id: "project-bekisting",
    title: "Pembuatan Bekisting Beton",
    category: "Fabrication",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-bekisting.jpg"
  },
  {
    id: "project-instalasi-atas",
    title: "Pemasangan Instalasi Atas",
    category: "Electrical",
    year: "2026",
    description: "",
    image: "assets/images/projects/proyek-instalasi-atas.jpg"
  },

  // --- PROYEK LAMA (Contoh/Placeholder) ---
  {
    id: "project-1",
    title: "Industrial Line Support",
    category: "Maintenance",
    year: "2024",
    description: "Ilustrasi dukungan pemeliharaan jalur produksi.",
    image: "assets/images/projects/project-1.jpg"
  },
  {
    id: "project-2",
    title: "Custom Fabrication Work",
    category: "Fabrication",
    year: "2024",
    description: "Ilustrasi fabrikasi komponen logam.",
    image: "assets/images/projects/project-2.jpg"
  },
  {
    id: "project-3",
    title: "Machinery Installation",
    category: "Engineering",
    year: "2023",
    description: "Ilustrasi instalasi mesin industri.",
    image: "assets/images/projects/project-3.jpg"
  }
];

const PROJECT_CATEGORIES = ["All", "Maintenance", "Fabrication", "Engineering", "Electrical"];

/* Why choose us */
const WHY_CHOOSE_US = [
  {
    title: "Practical Engineering",
    desc: "Solutions grounded in real industrial operating conditions and technical requirements.",
    icon: "engineering"
  },
  {
    title: "Responsive Support",
    desc: "Coordinated response to maintenance and technical support needs.",
    icon: "support"
  },
  {
    title: "Integrated Services",
    desc: "Engineering, maintenance, fabrication, and electrical support under one coordination.",
    icon: "integrated"
  }
];