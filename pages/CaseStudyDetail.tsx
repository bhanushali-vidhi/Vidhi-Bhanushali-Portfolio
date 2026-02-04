import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CaseStudyDetail } from '../types';
import { DoodleUnderline, DoodleStar, DoodleArrow } from '../components/Doodles';

// --- SVG Components for Workflows ---

const ManualWorkflowSVG = () => (
  <svg viewBox="0 0 300 580" className="w-full h-auto max-w-[320px] mx-auto filter drop-shadow-sm">
    <defs>
      <marker id="arrow-manual" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#333" />
      </marker>
    </defs>
    <style>
      {`
        .manual-box { fill: #fee2e2; stroke: #ef4444; stroke-width: 2px; rx: 8px; }
        .manual-text { font-family: 'Crimson Text', serif; font-size: 14px; font-weight: 600; fill: #1f2937; text-anchor: middle; dominant-baseline: middle; }
        .manual-arrow { stroke: #333; stroke-width: 2px; fill: none; marker-end: url(#arrow-manual); }
      `}
    </style>
    
    <g transform="translate(50, 10)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Document Upload</text>
    </g>
    <path d="M150,55 L150,85" className="manual-arrow" />

    <g transform="translate(50, 85)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Manual Document Reading</text>
    </g>
    <path d="M150,130 L150,160" className="manual-arrow" />

    <g transform="translate(50, 160)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Copy Details to Excel</text>
    </g>
    <path d="M150,205 L150,235" className="manual-arrow" />

    <g transform="translate(50, 235)">
      <rect x="0" y="0" width="200" height="60" className="manual-box" />
      <text x="100" y="20" className="manual-text">Check Govt Websites</text>
      <text x="100" y="40" className="manual-text">Manually</text>
    </g>
    <path d="M150,295 L150,325" className="manual-arrow" />

    <g transform="translate(50, 325)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Compare Data by Eye</text>
    </g>
    <path d="M150,370 L150,400" className="manual-arrow" />

    <g transform="translate(50, 400)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Mark Verified / Unverified</text>
    </g>
    <path d="M150,445 L150,475" className="manual-arrow" />

    <g transform="translate(50, 475)">
      <rect x="0" y="0" width="200" height="45" className="manual-box" />
      <text x="100" y="22.5" className="manual-text">Repeat for Next Document</text>
    </g>
  </svg>
);

const AIWorkflowSVG = () => (
  <svg viewBox="0 0 500 650" className="w-full h-auto font-sans text-xs filter drop-shadow-sm">
     <defs>
      <marker id="arrow-ai" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
        <path d="M0,0 L0,6 L9,3 z" fill="#333" />
      </marker>
    </defs>
    <style>
      {`
        .ai-box { fill: #dbeafe; stroke: #2563eb; stroke-width: 2px; rx: 8px; }
        .ai-diamond { fill: #fff7ed; stroke: #f97316; stroke-width: 2px; }
        .ai-box-green { fill: #dcfce7; stroke: #16a34a; stroke-width: 2px; rx: 8px; }
        .ai-box-red { fill: #fee2e2; stroke: #ef4444; stroke-width: 2px; rx: 8px; }
        .ai-text { font-family: 'Crimson Text', serif; font-size: 14px; font-weight: 600; fill: #1f2937; text-anchor: middle; dominant-baseline: middle; }
        .ai-arrow { stroke: #333; stroke-width: 2px; fill: none; marker-end: url(#arrow-ai); }
        .ai-label { font-family: 'Crimson Text', serif; font-size: 11px; fill: #4b5563; }
      `}
    </style>

    {/* Center Column X=250 */}
    
    {/* 1. Document Upload */}
    <g transform="translate(175, 10)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Document Upload</text>
    </g>
    <path d="M250,50 L250,70" className="ai-arrow" />

    {/* 2. Preprocessing & OCR */}
    <g transform="translate(175, 70)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Preprocessing & OCR</text>
    </g>
    <path d="M250,110 L250,130" className="ai-arrow" />

    {/* 3. Field Extraction */}
    <g transform="translate(175, 130)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Field Extraction</text>
    </g>
    <path d="M250,170 L250,190" className="ai-arrow" />

    {/* 4. Decision: Data Complete? */}
    <g transform="translate(250, 230)">
      <polygon points="0,-40 60,0 0,40 -60,0" className="ai-diamond" />
      <text x="0" y="0" className="ai-text">Data Complete?</text>
    </g>
    
    {/* No Path to Manual Review */}
    <path d="M190,230 L100,230 L100,530" className="ai-arrow" strokeDasharray="4" />
    <rect x="115" y="220" width="25" height="18" fill="#f3f4f6" />
    <text x="127" y="233" textAnchor="middle" className="ai-label">No</text>

    {/* Yes Path to Verification */}
    <path d="M250,270 L250,300" className="ai-arrow" />
    <rect x="237" y="275" width="26" height="18" fill="#f3f4f6" />
    <text x="250" y="288" textAnchor="middle" className="ai-label">Yes</text>

    {/* 5. Verification Checks */}
    <g transform="translate(175, 300)">
      <rect x="0" y="0" width="150" height="40" className="ai-box" />
      <text x="75" y="20" className="ai-text">Verification Checks</text>
    </g>
    <path d="M250,340 L250,370" className="ai-arrow" />

    {/* 6. Decision: Match Status */}
    <g transform="translate(250, 410)">
      <polygon points="0,-40 60,0 0,40 -60,0" className="ai-diamond" />
      <text x="0" y="0" className="ai-text">Match Status</text>
    </g>

    {/* Mismatch -> Unverified */}
    <path d="M207,428 L150,470" className="ai-arrow" /> 
    <rect x="150" y="435" width="55" height="18" fill="#e5e7eb" />
    <text x="177" y="448" textAnchor="middle" className="ai-label">Mismatch</text>

    <g transform="translate(75, 470)">
      <rect x="0" y="0" width="120" height="40" className="ai-box-red" />
      <text x="60" y="20" className="ai-text">Unverified</text>
    </g>
    <path d="M135,510 L135,530" className="ai-arrow" />

    {/* Match -> Verified */}
    <path d="M250,450 L250,470" className="ai-arrow" />
    <rect x="230" y="450" width="40" height="18" fill="#e5e7eb" />
    <text x="250" y="463" textAnchor="middle" className="ai-label">Match</text>

    <g transform="translate(200, 470)">
      <rect x="0" y="0" width="100" height="40" className="ai-box-green" />
      <text x="50" y="20" className="ai-text">Verified</text>
    </g>

    {/* Partial -> Partially Verified */}
    <path d="M293,428 L350,470" className="ai-arrow" />
    <rect x="300" y="435" width="40" height="18" fill="#e5e7eb" />
    <text x="320" y="448" textAnchor="middle" className="ai-label">Partial</text>

    <g transform="translate(325, 470)">
      <rect x="0" y="0" width="120" height="40" className="ai-box-green" />
      <text x="60" y="20" className="ai-text">Partially Verified</text>
    </g>

    {/* Merge Verified/Partial to Claim Processing */}
    <path d="M250,510 L270,530 L300,530" className="ai-arrow" fill="none" />
    <path d="M385,510 L365,530 L350,530" className="ai-arrow" fill="none" />

    {/* Manual Review Final Box */}
    <g transform="translate(75, 530)">
      <rect x="0" y="0" width="120" height="40" className="ai-box-red" />
      <text x="60" y="20" className="ai-text">Manual Review</text>
    </g>

    {/* Claim Processing Final Box */}
    <g transform="translate(280, 530)">
      <rect x="0" y="0" width="140" height="40" className="ai-box" />
      <text x="70" y="20" className="ai-text">Claim Processing</text>
    </g>

  </svg>
);


// Mock Data for the detail view
const caseStudiesData: Record<string, CaseStudyDetail> = {
  '1': {
    id: '1',
    title: 'Reducing Document Verification Time by 95%',
    category: 'Product Design',
    description: 'Enabled 3–4× higher case throughput by reducing document verification time by 95% through automation.',
    imageUrl: 'https://picsum.photos/1200/800?random=1',
    link: '#',
    client: 'Deloitte India (Internal)',
    year: 'Sep 2023 - Present',
    role: 'Product Designer',
    tools: ['Figma', 'Miro', 'User Research'],
    challenge: 'An automobile company receives hundreds of documents daily (invoices, buyer details, etc.) for verification. The manual process took 15–20 minutes per document, was error-prone, and caused severe backlogs during peak sales seasons. Verification of ID details was also unreliable manually.',
    approach: 'We reimagined the workflow by mapping the manual process and identifying bottlenecks. We then designed an AI-powered verification system. My focus was on rethinking the UX to be fast, reliable, and user-friendly, moving from a manual entry system to an exception-handling model.',
    solution: 'An AI-powered document verification system that extracts, verifies, and structures data automatically. The system uses OCR for scanning, cross-verifies with government APIs, and only flags exceptions for manual review. We also developed a dashboard to visualize trends.',
    results: [
      'Verification time reduced by 95% (<60s vs 20mins)',
      'Accuracy increased by 92% via API cross-checks',
      'Manual effort reduced by 80%',
      'Approvals became 5x faster',
      'Team size reduced from 25 to 3-4 people'
    ],
    contentImages: [
      'https://placehold.co/800x600/e2e8f0/475569?text=Manual+Workflow+Diagram',
      'https://placehold.co/800x600/dbeafe/1e40af?text=AI+Automation+Workflow',
      'https://placehold.co/600x400/fff/000?text=Hand-drawn+Wireframe+1',
      'https://placehold.co/600x400/fff/000?text=Hand-drawn+Wireframe+2',
      'https://placehold.co/600x400/fff/000?text=Dashboard+Concept'
    ]
  }
};

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const study = id ? caseStudiesData[id] : null;

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper">
        <div className="text-center font-serif">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/" className="text-blue-600 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto px-6 pt-32 pb-20">
      
      {/* Navigation Header */}
      <div className="mb-12">
        <Link to="/" className="inline-flex items-center text-lg font-hand font-bold text-pencil hover:text-ink transition-colors transform hover:-translate-x-1">
          <ArrowLeft size={20} className="mr-2" />
          Back to Work
        </Link>
      </div>

      {/* Hero Section */}
      <header className="mb-16">
        <div className="inline-block relative">
             <span className="text-lg font-hand font-bold tracking-wider text-blue-600 uppercase mb-4 block transform -rotate-1">
              Chapter: {study.category}
            </span>
            <DoodleStar className="absolute -top-6 -right-8 w-10 h-10 text-yellow-400 opacity-60" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-ink mb-6 leading-tight">
          Speeding Up Document Verification by 20× Through AI-Driven Automation
        </h1>

        <div className="bg-yellow-50 border-2 border-dashed border-yellow-200 p-4 rounded-lg mb-8 transform -rotate-1">
          <p className="text-sm font-serif italic text-gray-600">
            <strong>Disclaimer:</strong> This project is under Non-Disclosure Agreement. Below is a brief insight into the process and outcomes.
          </p>
        </div>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y-2 border-dashed border-gray-300">
          <div>
             <span className="block text-sm font-hand text-gray-400 mb-1">Role</span>
            <span className="font-serif font-bold text-lg text-ink">Product Designer</span>
          </div>
          <div>
            <span className="block text-sm font-hand text-gray-400 mb-1">Team</span>
            <span className="font-serif font-bold text-lg text-ink">ML Engineer, Full Stack Dev</span>
          </div>
          <div>
            <span className="block text-sm font-hand text-gray-400 mb-1">Timeline</span>
            <span className="font-serif font-bold text-lg text-ink">Sep 2023 - Present</span>
          </div>
          <div>
            <span className="block text-sm font-hand text-gray-400 mb-1">Tools</span>
            <span className="font-serif font-bold text-lg text-ink">{study.tools.join(', ')}</span>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <div className="grid md:grid-cols-12 gap-12 mb-20">
        
        {/* Sidebar / Context */}
        <div className="md:col-span-3 hidden md:block">
           <div className="sticky top-32">
             <h3 className="text-xl font-hand font-bold text-ink mb-4 underline decoration-wavy decoration-blue-300">Contents</h3>
             <ul className="space-y-3 text-lg font-serif text-pencil italic">
               <li><a href="#problem" className="hover:text-ink">Problem Statement</a></li>
               <li><a href="#ideation" className="hover:text-ink">Ideation & Workflows</a></li>
               <li><a href="#solution" className="hover:text-ink">The AI Solution</a></li>
               <li><a href="#wireframes" className="hover:text-ink">Wireframes</a></li>
               <li><a href="#results" className="hover:text-ink">Outcomes</a></li>
             </ul>
           </div>
        </div>

        {/* Main Text Content */}
        <div className="md:col-span-9 space-y-20">
          
          {/* Problem Statement */}
          <section id="problem">
            <h2 className="text-3xl font-serif font-bold text-ink mb-6 flex items-center">
                Problem Statement
                <DoodleUnderline className="ml-4 w-32 text-red-300 opacity-50" />
            </h2>
            <p className="text-xl text-ink font-serif leading-relaxed mb-6">
              {study.challenge}
            </p>
            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
               <h4 className="font-bold font-hand text-lg mb-2 text-red-800">Key Pain Points:</h4>
               <ul className="list-disc ml-5 space-y-1 font-serif text-ink">
                 <li>15–20 minutes manual verification per document.</li>
                 <li>High human error due to fatigue.</li>
                 <li>Unreliable verification of government ID details.</li>
                 <li>Backlogs affecting downstream approvals.</li>
               </ul>
            </div>
          </section>

          {/* Ideation & Workflows */}
          <section id="ideation">
            <h2 className="text-3xl font-serif font-bold text-ink mb-8">Ideation: Rethinking the Workflow</h2>
            
            {/* 3-Column Layout: Diagram - Card - Diagram */}
            <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-4 mb-12">
              
              {/* Left: Manual Diagram */}
              <div className="flex-1 w-full flex flex-col items-center">
                 <div className="w-full bg-white p-2 sketch-border transform -rotate-1 shadow-md mb-6 hover:rotate-0 transition-transform">
                    <ManualWorkflowSVG />
                 </div>
                 <h4 className="font-hand font-bold text-2xl text-red-500 mb-4 border-b-2 border-red-200 pb-1">Manual (Before)</h4>
                 <ul className="list-disc pl-5 font-serif text-lg text-ink space-y-2 leading-relaxed self-start">
                   <li>Manual Reading & Data Entry</li>
                   <li>Check Govt Websites Manually</li>
                   <li>Eyeball Comparison</li>
                   <li>Repeat for Next Document</li>
                 </ul>
              </div>

              {/* Middle: Text Card (Deep Purple style) */}
              <div className="w-full lg:w-1/3 bg-[#3e0a78] text-white p-8 rounded-[20px] sketch-border relative z-10 mx-2 transform rotate-1 flex flex-col justify-center items-center text-center shadow-xl">
                 <div className="text-5xl mb-6">👮‍♀️</div>
                 <h3 className="font-hand text-2xl leading-relaxed mb-6 font-bold">
                   Created user journeys for the Security Guard on how vehicles will <span className="underline decoration-wavy decoration-yellow-400">enter or exit</span> the Gate.
                 </h3>
                 <p className="font-serif text-lg text-purple-100 leading-snug">
                   Planned the necessary documents required for Gate In/Out.
                 </p>
              </div>

              {/* Right: AI Diagram */}
              <div className="flex-1 w-full flex flex-col items-center">
                 <div className="w-full bg-white p-2 sketch-border transform rotate-1 shadow-md mb-6 hover:rotate-0 transition-transform">
                    <AIWorkflowSVG />
                 </div>
                 <h4 className="font-hand font-bold text-2xl text-blue-600 mb-4 border-b-2 border-blue-200 pb-1">AI (After)</h4>
                 <ul className="list-disc pl-5 font-serif text-lg text-ink space-y-2 leading-relaxed self-start">
                   <li>Automated OCR & Extraction</li>
                   <li>Data Completeness Checks</li>
                   <li>Instant Match/Mismatch Status</li>
                   <li>Exception Handling Only</li>
                 </ul>
              </div>

            </div>
          </section>

          {/* Solution Details */}
          <section id="solution">
             <h2 className="text-3xl font-serif font-bold text-ink mb-6">The Solution</h2>
             <p className="text-xl text-ink font-serif leading-relaxed mb-6">
               We built an AI-powered system that reads documents in any format (scanned, typed, handwritten).
             </p>
             <div className="grid md:grid-cols-3 gap-6">
               <div className="bg-white p-6 shadow-sm border-2 border-gray-100 rounded-xl">
                 <h3 className="font-bold font-serif text-lg mb-2">1. OCR & Formatting</h3>
                 <p className="text-sm font-serif text-gray-600">Scans and writes information automatically to a predefined tabular format.</p>
               </div>
               <div className="bg-white p-6 shadow-sm border-2 border-gray-100 rounded-xl">
                 <h3 className="font-bold font-serif text-lg mb-2">2. API Verification</h3>
                 <p className="text-sm font-serif text-gray-600">Cross-verifies extracted data with government databases instantly.</p>
               </div>
               <div className="bg-white p-6 shadow-sm border-2 border-gray-100 rounded-xl">
                 <h3 className="font-bold font-serif text-lg mb-2">3. Exception Handling</h3>
                 <p className="text-sm font-serif text-gray-600">Only unverified documents are flagged for manual review, reducing workload.</p>
               </div>
             </div>
          </section>

          {/* Wireframes Carousel */}
          <section id="wireframes">
            <div className="relative">
              <h2 className="text-3xl font-serif font-bold text-ink mb-2">Low Fidelity Wireframes</h2>
              <DoodleArrow className="absolute top-0 right-0 w-16 h-16 text-gray-300 transform rotate-12" />
            </div>
            <p className="text-lg text-ink font-serif leading-relaxed mb-8">
              We sketched low-fidelity layouts to imitate the familiar "Excel-like" interface the team was used to, reducing the learning curve.
            </p>
            
            {/* Scrollable Carousel Container */}
            <div className="relative -mx-6 px-6 overflow-x-auto pb-8 snap-x flex space-x-6 scrollbar-hide">
               {study.contentImages.slice(2).map((img, idx) => (
                 <div key={idx} className="snap-center flex-shrink-0 w-[80%] md:w-[600px]">
                    <div className="bg-white p-3 sketch-border shadow-lg">
                      <img src={img} alt={`Wireframe ${idx + 1}`} className="w-full h-auto rounded-md" />
                      <p className="text-center font-hand mt-2 text-gray-500">Initial Sketch Concept {idx + 1}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-8 space-y-6">
               <h3 className="text-xl font-bold font-serif">Improvements from Testing</h3>
               <ul className="list-disc ml-5 space-y-2 font-serif text-ink">
                 <li><strong>Visuals:</strong> Added a dashboard with line graphs and pie charts to help managers scan trends (as requested during testing).</li>
                 <li><strong>Visibility:</strong> Moved the "Status" column to the front and color-coded it (Green/Red) to fix visibility issues where it blended into the table.</li>
               </ul>
            </div>
          </section>

          {/* Results */}
          <section id="results" className="bg-yellow-50 p-8 sketch-border relative transform rotate-1">
             <div className="absolute -top-4 left-1/2 w-8 h-8 rounded-full bg-blue-300 border border-black transform -translate-x-1/2 z-10 shadow-sm"></div>
            <h2 className="text-3xl font-serif font-bold text-ink mb-8 text-center relative z-10">Key Outcomes</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {study.results.map((result, idx) => (
                <div key={idx} className="flex items-start">
                  <DoodleStar className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-ink font-serif text-lg font-medium">{result}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

    </article>
  );
};

export default CaseStudyDetail;