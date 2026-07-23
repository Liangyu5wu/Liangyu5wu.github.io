/* =============================================================================
   Site content — single source of truth.
   Edit this file to add publications, talks, projects, news, teaching.
   No build step required.
   ========================================================================== */

window.SITE = {
  /* ---------------------------------------------------------------- profile */
  profile: {
    name: "Liangyu Wu",
    nameCn: "吴粮宇",
    pronunciation: 'Lee-ahng-yu Woo',
    role: "Physics PhD Candidate",
    org: { name: "Stanford University · Physics Department", url: "https://physics.stanford.edu" },
    avatar: "assets/media/avatar.jpg",
    tagline: "Hunting in the Invisible World",
    interests: [
      "Experimental High-energy Physics",
      "Future Colliders",
      "Microelectronics",
    ],
    // rendered as HTML
    about: `Hey! My name is Liangyu Wu (pronounced <i>"Lee-ahng-yu Woo"</i>).
      I'm a 2nd-year PhD student in the
      <a href="https://physics.stanford.edu/">Physics Department at Stanford University</a>,
      currently working at SLAC National Accelerator Laboratory's
      <a href="https://atlas.slac.stanford.edu">SLAC ATLAS group</a>.
      One of my favorite things is chatting with researchers from all sorts of
      backgrounds to hear about the cool stuff everyone's working on!`,
    research: [
      `My research interests primarily focus on experimental particle physics.
       Currently, I am mainly focused on R&D for detectors in future colliders –
       particularly on dual-readout calorimeters for future FCC-ee, combined with
       Geant4 simulations and on-chip machine learning research for front-end readouts.`,
      `In the ATLAS experiment, I am currently working in the LAr calorimeter on the
       development of 5D calorimetry. This exciting technology will incorporate more
       timing information (x, y, z, t, E) to enhance LHC discovery potential.
       Additionally, I'm conducting the QC test of GBCR (GigaBit Cable Receiver) ASIC,
       which will be used for data transmission in the upgraded ITk Pixels system at the LHC.`,
    ],
    cta: { text: "CV for more details", url: "uploads/resume.pdf" },
    inspire: { text: "Find Me on INSPIRE", url: "https://inspirehep.net/authors/2895194" },
    socials: [
      { type: "email",    label: "E-mail Me", url: "mailto:liangyu5@stanford.edu" },
      { type: "github",   label: "GitHub",    url: "https://github.com/Liangyu5wu" },
      { type: "linkedin", label: "LinkedIn",  url: "https://www.linkedin.com/in/liangyu-wu-aa84b6327/" },
      { type: "orcid",    label: "ORCID",     url: "https://orcid.org/0009-0003-2402-0735" },
    ],
  },

  /* ------------------------------------------------------------- education */
  education: [
    {
      area: "PhD in Physics (in progress)",
      institution: "Stanford University",
      dates: "Sep 2024 – Sep 2029",
      summary: `Currently supervised by <a href="https://profiles.stanford.edu/julia-gonski">Dr. Julia Gonski</a>
                & <a href="https://profiles.stanford.edu/dong-su">Dr. Dong Su</a>.`,
      button: { text: "Stanford Profile", url: "https://profiles.stanford.edu/liangyu-wu" },
    },
    {
      area: "International Exchange Student",
      institution: "University of Maryland, College Park",
      dates: "Aug 2023 – Dec 2023",
      summary: `GPA: 3.925 / 4.0. Courses included Quantum Computing, Programming in the
                Physical Sciences, and Special Problems in Physics (research supervised by
                Prof. Sarah Eno & Prof. Christopher Palmer).`,
    },
    {
      area: "BSc in Physics",
      institution: "Shanghai Jiao Tong University",
      dates: "Sep 2020 – Jun 2024",
      summary: `GPA: 86.1 / 100. Supervised by
                <a href="https://www.physics.sjtu.edu.cn/en/jsml/mengyue.html">Prof. Yue Meng</a>.
                Dissertation: <em>Control of Radon and Radon Daughters in Rare Decay Experiments</em>.`,
      button: { text: "Undergraduate Thesis (PDF)", url: "uploads/SJTU_SP_wly.pdf" },
    },
  ],

  /* ------------------------------------------------------------------ work */
  work: [
    {
      position: "Research Assistant (PhD Thesis)",
      company: "SLAC National Accelerator Laboratory",
      companyUrl: "https://www6.slac.stanford.edu",
      dates: "Sep 2025 – Present",
      note: "Supervised by Dr. Julia Gonski and Dr. Dong Su",
      bullets: [
        "R&D of the eFPGA techniques",
        "R&D of the advanced detectors in future colliders",
        "R&D of the foundation models in high-energy physics",
        "Data transmission test of ITk in ATLAS experiment (HL-LHC)",
        "Primary vertex t0 reconstruction using the ATLAS LAr Calorimeter",
      ],
    },
    {
      position: "Research Assistant (On Rotation)",
      company: "SLAC National Accelerator Laboratory",
      companyUrl: "https://www6.slac.stanford.edu",
      dates: "Jan 2025 – Sep 2025",
      note: "Supervised by Dr. Julia Gonski, Dr. Ariel Schwartzman and Dr. Dong Su",
      bullets: [
        "Vertex t0 timing reconstruction in the LAr Calorimeter for the ATLAS experiment",
        "Light occupancy simulation and energy reconstruction for the R&D of the dSiPMs",
        "On-chip machine learning for waveform analysis and data compression in dual-readout calorimeters",
        "GigaBit Cable Receiver (GBCR) ASIC QC Testing",
      ],
    },
    {
      position: "Research Assistant (On Rotation)",
      company: "SLAC National Accelerator Laboratory",
      companyUrl: "https://www6.slac.stanford.edu",
      dates: "Sep 2024 – Dec 2024",
      note: "Supervised by Dr. Spencer Gessner",
      bullets: ["Update to the FACET-II TCAV GUI and analysis tools"],
    },
    {
      position: "Undergraduate Research Student",
      company: "University of Maryland, College Park",
      companyUrl: "https://umd.edu",
      dates: "Aug 2023 – Aug 2024",
      note: "Supervised by Dr. Sarah Eno and Dr. Christopher Palmer",
      bullets: [
        "Geant4 simulations of single-particle responses for diverse calorimeters with dual-readout",
        "Formula derivation that predicts the dual-readout-corrected energy from scintillator and Cherenkov signals alone",
      ],
    },
  ],

  /* ---------------------------------------------------------------- skills */
  skillGroups: [
    {
      name: "Technical Skills",
      items: [
        { name: "Python",    percent: 80 },
        { name: "C++",       percent: 100 },
        { name: "CERN ROOT", percent: 50 },
      ],
    },
    {
      name: "Hobbies",
      accent: "#f0bf23",
      items: [
        { name: "Basketball",    percent: 100 },
        { name: "NBA 2K Games",  percent: 100 },
        { name: "Music",         percent: 80 },
      ],
    },
  ],

  languages: [
    { name: "Chinese", percent: 60 },
    { name: "English", percent: 40 },
  ],

  awards: [
    { title: "Future Circular Collider Early Career Researcher (ECR) Award", date: "Jun 2026", awarder: "FCC project and Springer Nature" },
    { title: "Shanghai Outstanding Graduate honors", date: "May 2024", awarder: "Shanghai Education Commission" },
  ],

  /* ---------------------------------------------------------- publications */
  // authors: use "admin" to mark self (rendered bold, no link)
  publications: [
    {
      slug: "HAXAD_anomaly",
      title: "Towards anomaly detection searches for new physics signatures including Higgs bosons with weakly supervised machine learning",
      authors: ["C. L. Cheng", "J. Gonski", "R. Li", "Q. Liu", "B. Nachman", "D. Noll", "J. K. Romman", "admin"],
      date: "2026-07-21",
      venue: "arXiv",
      type: "arXiv",
      featured: true,
      tags: ["Machine Learning", "Anomaly Detection", "Higgs"],
      image: "assets/content/HAXAD_anomaly.png",
      caption: "HAXAD feature embedding: signal region / sideband with γγ+jets, Higgs, signal, and background estimate",
      summary: "Extends the Higgs And X Anomaly Detection (HAXAD) strategy — ML feature embedding, background estimation, and weakly supervised classification — toward application on real collider data, with new embeddings, an inference framework for cross-section limits, and broader signal coverage.",
      abstract: "The Higgs boson, with its universal coupling to mass, provides a broadly applicable portal to sectors beyond the Standard Model and is therefore a natural anchor for anomaly detection (AD) at collider experiments. The Higgs And X Anomaly Detection (HAXAD) strategy offers a principled approach to searching for such anomalies occurring in association with a Higgs boson by combining machine-learning-based feature embedding, background estimation, and weakly supervised classification. This work extends the previous HAXAD approach towards the level of maturity required for application to recorded collider data. A major addition is the introduction and comparison of two new embedding strategies, which in turn shape the background estimation and classification. In addition, a new inference framework is developed, yielding signal-agnostic and signal-specific cross section limits and thereby completing the statistical machinery needed for future AD analyses built on HAXAD. The set of investigated signal models is also significantly expanded, allowing for the evaluation of sensitivity on a much broader phase space. Improvements to the method increase signal sensitivity with respect to the original method, and when benchmarked against an example cut-based search on the same final state, HAXAD matches or exceeds the best individual cut-based limits for a wide variety of considered signal models. These developments strengthen the case for HAXAD as a viable and compelling AD-based search strategy with novel discovery potential at colliders.",
      links: { pdf: "https://arxiv.org/pdf/2607.19323", external: "https://arxiv.org/abs/2607.19323" },
      project: "",
    },
    {
      slug: "DRO_FE_ML",
      title: "Machine Learning Enables Real-Time Waveform Decomposition for Dual-Readout Calorimetry",
      authors: ["admin", "Q. Liu", "M. T. Lucchini", "J. Gonski", "M. Campajola", "S. Moneta"],
      date: "2026-04-28",
      venue: "arXiv",
      type: "arXiv",
      featured: true,
      tags: ["Calorimetry", "Machine Learning", "Detector R&D"],
      image: "assets/content/DRO_FE_ML.png",
      caption: "Waveform decomposition for dual-readout calorimetry",
      summary: "ML-based waveform decomposition enables real-time Cherenkov/scintillation separation in dual-readout crystal calorimeters with reduced sampling requirements and FPGA-compatible latency.",
      abstract: "Dual-readout calorimeters achieve superior energy resolution by simultaneously measuring Cherenkov and scintillation signals for event-by-event electromagnetic fraction correction, making them attractive for next-generation Higgs factories. However, full waveform readout required for time-based signal separation presents significant off-detector data rate challenges. We present a systematic comparison of machine learning and template fitting approaches for separating scintillation and Cherenkov light components in homogeneous dual-readout calorimeters across three representative crystal types. ML models achieve comparable signal extraction performance at lower sampling rates than template fitting, with a single model trained over a range of incident particle energies demonstrating robust performance. FPGA-compatible compression achieves latencies suitable for real-time application. This work establishes both baseline template fitting performance and ML-enhanced alternatives for crystal-based dual-readout calorimeters, offering practical pathways towards front-end feature extraction that mitigates data rate challenges in future detector designs for high-luminosity collider environments.",
      links: { pdf: "https://arxiv.org/pdf/2604.26090", external: "https://arxiv.org/abs/2604.26090" },
      project: "On-chip-ml",
      body: `This work addresses critical data rate challenges in dual-readout calorimeters for future collider experiments by demonstrating machine learning approaches that enable real-time waveform decomposition in front-end electronics. Through systematic comparison across three crystal types, we show that ML models match template fitting performance while operating at reduced sampling rates, enabling practical implementation in FPGA firmware. The demonstrated energy-robust training and low-latency inference establish a viable pathway for front-end feature extraction, significantly reducing off-detector bandwidth requirements while maintaining the superior energy resolution characteristics that make dual-readout technology attractive for precision measurements at facilities such as FCC-ee.`,
    },
    {
      slug: "det_opt_agentic",
      title: "Agentic-AI Detector Co-design and Optimization in Vertically-Integrated Differentiable Full Simulations",
      authors: ["W. Chung", "Q. Liu", "admin", "J. Gonski"],
      date: "2026-04-23",
      venue: "arXiv",
      type: "arXiv",
      featured: true,
      tags: ["Detector R&D", "Machine Learning", "AI Agents", "Calorimetry"],
      image: "assets/content/det_opt_agentic.png",
      caption: "Bilevel detector optimization",
      summary: "First demonstration of agentic-AI driven detector optimization using vertically-integrated bilevel framework for dual-readout calorimeters.",
      abstract: "We present the first implementation of AI agents into the design and optimization of detectors in high-energy physics experiments via a bi-level optimization framework that vertically integrates detector geometry, front-end digitization, and high-level reconstruction algorithm parameters in differentiable full simulations. Using the example of a dual-readout, segmented crystal EM calorimeter with a baseline resolution of 3%/√E, we investigate the capabilities and value propositions of AI agents in the identification and reduction of key detector parameters and in the nonlinear traversal of design space. We find that frontier LLM reasoning-models today, without being given additional experiment-specific context, are able to effectively execute complex workflows and proactively suggest generic but relevant avenues for further study or improvement. Here, we demonstrate an AI agent's ability to find an optimal design point amidst three competing performance criteria, showing that effective integration of agents into the complex workflows of frontier research areas can yield higher performance for key physics goals while reducing labor and compute. This study establishes the foundation for a future demonstration of the first fully AI-designed detector for future scientific facilities.",
      links: { pdf: "https://arxiv.org/pdf/2604.21804", external: "https://arxiv.org/abs/2604.21804" },
      project: "",
    },
    {
      slug: "EdgeML_DCH",
      title: "Edge Machine Learning for Cluster Counting in Next-Generation Drift Chambers",
      authors: ["D. Yilmaz", "admin", "J. Gonski", "D. Rankin", "C. Herwig"],
      date: "2025-11-13",
      venue: "arXiv",
      type: "arXiv",
      featured: true,
      tags: ["Detector R&D", "Machine Learning"],
      image: "assets/content/EdgeML_DCH.png",
      caption: "Waveform visualization from Garfield++ Simulation",
      summary: "A demonstration of ML-based cluster counting for drift chambers is presented.",
      abstract: `Drift chambers have long been central to collider tracking, but future machines like a Higgs factory motivate higher granularity and cluster counting for particle ID, posing new data processing challenges. Machine learning (ML) at the "edge", or in cell-level readout, can dramatically reduce the off-detector data rate for high-granularity drift chambers by performing cluster counting at-source. We present machine learning algorithms for cluster counting in real-time readout of future drift chambers. These algorithms outperform traditional derivative-based techniques based on achievable pion-kaon separation. When synthesized to FPGA resources, they can achieve latencies consistent with real-time operation in a future Higgs factory scenario, thus advancing both R&D for future collider detectors as well as hardware-based ML for edge applications in high energy physics.`,
      links: { pdf: "https://arxiv.org/pdf/2511.10540", external: "https://arxiv.org/abs/2511.10540" },
      project: "On-chip-ml",
    },
    {
      slug: "ontheres_of_DRO",
      title: "On the resolution of dual readout calorimeters",
      authors: ["S. Eno", "admin", "M.Y. Aamir", "S.V. Chekanov", "S. Nabili", "C. Palmer"],
      date: "2025-01-29",
      venue: "Nucl. Instrum. Methods Phys. Res. A",
      type: "Journal Article",
      featured: true,
      tags: ["Detector R&D"],
      image: "assets/content/ontheres_of_DRO.png",
      caption: "Shower from a 20 GeV charged pion for crystal calorimeter PbWO",
      summary: "We present a simple formula for the resolution of a dual readout calorimeter, verified with a toy simulation and full simulation results — helping newcomers understand its strengths and limitations.",
      abstract: "Dual readout calorimeters allow state-of-the-art resolutions for hadronic energy measurements. Their various incarnations are leading candidates for the calorimeter systems for future colliders. In this paper, we present a simple formula for the resolution of a dual readout calorimeter, which we verify with a toy simulation and with full simulation results. This formula can help those new to dual readout calorimetry understand its strengths and limitations. The paper also highlights that the dual readout correction works not just to compensate for binding energy loss, but also for energies escaping the calorimeter or clustering algorithm. Formulae are also presented for approximate resolutions and energy scales in terms of different sources of response.",
      links: { doi: "10.1016/j.nima.2025.171080" },
      project: "",
    },
    {
      slug: "Geant4_sim_of_DRO",
      title: "Geant4 simulations of sampling and homogeneous hadronic calorimeters with dual readout for future colliders",
      authors: ["S.V. Chekanov", "S. Eno", "S. Magill", "C. Palmer", "admin", "M.Y. Aamir"],
      date: "2025-01-06",
      venue: "Nucl. Instrum. Methods Phys. Res. A",
      type: "Journal Article",
      featured: true,
      tags: ["Detector R&D"],
      image: "assets/content/Geant4_sim_of_DRO.jpg",
      caption: "An example of the shower produced by a 10 GeV pion interacting in the 40L-PFQ tower",
      summary: "Our simulations demonstrate the effect of inclusion of Cherenkov light in the reconstruction of energies for sampling and homogeneous calorimeters.",
      abstract: "Calorimeters with dual readout measure both scintillation and Cherenkov light produced in their active media. They offer improvements in energy resolution and, therefore, have become increasingly interesting due to the need for precision jet measurements at Higgs factories. This paper presents GEANT4 simulations of single-particle responses in sampling and homogeneous calorimeters, and demonstrates the effect of inclusion of Cherenkov light in the reconstruction of energies.",
      links: { doi: "10.1016/j.nima.2025.170200" },
      project: "",
    },
    {
      slug: "radic",
      title: "Design and experimental application of a radon diffusion chamber for determining diffusion coefficients in membrane materials",
      authors: ["admin"],
      date: "2024-10-08",
      venue: "Journal of Instrumentation (JINST)",
      type: "Journal Article",
      featured: true,
      tags: ["Detector R&D"],
      image: "assets/content/radic.jpg",
      caption: "Diagram depicting the experimental arrangement",
      summary: "We designed a detector for the quantitative assessment of membrane materials' radon blocking capabilities.",
      abstract: "In recent years, the issue of radon emanation and diffusion has become a critical concern for rare decay experiments, such as JUNO and PandaX-4T. This paper introduces a detector design featuring a symmetric radon detector cavity for the quantitative assessment of membrane materials' radon blocking capabilities. The performance of this design is evaluated through the application of Fick's Law and the diffusion equation considering material solubility. Our detector has completed measurements of radon diffusion coefficients for four types of membrane materials currently used in experiments, which also confirms the rationality of this detector design. The findings are instrumental in guiding the selection and evaluation of optimal materials for radon shielding to reduce radon background, contributing to boost sensitivities of rare event research.",
      links: { doi: "10.1088/1748-0221/20/03/P03031" },
      project: "",
    },
    {
      slug: "stability_planetary",
      title: "The stability of unevenly spaced planetary systems",
      authors: ["Sheng Yang", "admin", "Zekai Zheng", "Masahiro Ogihara", "Kangrou Guo", "Wenzhan Ouyang", "Yaxing He"],
      date: "2023-08-15",
      venue: "Icarus",
      type: "Journal Article",
      featured: false,
      tags: ["Planetary dynamics"],
      image: "assets/content/stability_planetary.jpg",
      caption: "The money plot",
      summary: "We focus on the impact of a pair of adjacent planets with a narrower separation on the orbit crossing time, without altering the separation of other planets.",
      abstract: "Studying the orbital stability of multi-planet systems is essential to understand planet formation, estimate the stable time of an observed planetary system, and advance population synthesis models. Although previous studies have primarily focused on ideal systems characterized by uniform orbital separations, in reality a diverse range of orbital separations exists among planets within the same system. This study focuses on investigating the dynamical stability of systems with non-uniform separation. We considered a system with 10 planets with masses of 10⁻⁷ solar masses around a central star with a mass of 1 solar mass. We performed more than 100,000 runs of N-body simulations with different parameters. Results demonstrate that reducing merely one pair of planetary spacing leads to an order of magnitude shorter orbital crossing times that could be formulated based on the Keplerian periods of the closest separation pair. Furthermore, the first collisions are found to be closely associated with the first encounter pair that is likely to be the closest separation pair initially. We conclude that when estimating the orbital crossing time and colliding pairs in a realistic situation, updating the formula derived for evenly spaced systems would be necessary.",
      links: { doi: "10.1016/j.icarus.2023.115757" },
      project: "",
    },
  ],

  /* -------------------------------------------------------------- projects */
  projects: [
    {
      slug: "On-chip-ml",
      title: "eFPGA Technology",
      summary: "Machine Learning At-source",
      date: "2025-10-10",
      tags: ["Detector R&D", "Machine Learning"],
      image: "assets/content/On-chip-ml.png",
      body: `
        <h2>Overall Goals</h2>
        <p><strong>To develop embedded FPGA technology that enables real-time AI/ML deployment on detector hardware for future ultra-high data rate experiments.</strong></p>
        <h2>Edge-Deployed Algorithms</h2>
        <h3>Dual-readout Calorimeter</h3>
        <p><em>Extract C&amp;S components from waveform samples</em></p>
        <figure><img src="assets/content/On-chip-ml-rising.png" alt="Prediction of the C&S components"><figcaption>Prediction of the C&amp;S components</figcaption></figure>
        <p>Github Link: <a href="https://github.com/Liangyu5wu/On-chip_ML_DRO">Models &amp; Plotting</a></p>
        <details><summary>Milestones</summary><ol><li>Developed and evaluated algorithms for e- testbeam data</li></ol></details>
        <h3>Drift Chamber</h3>
        <p><em>Predict ionization cluster numbers (dN/dx) for PID</em></p>
        <figure><img src="assets/content/On-chip-ml-peak.png" alt="Distribution of Electrons in a DCH Cell"><figcaption>Distribution of Electrons in a DCH Cell</figcaption></figure>
        <details><summary>Milestones</summary><ol><li>Developed and evaluated algorithms for a Garfield++ simulation dataset</li></ol></details>
        <h2>eFPGA Co-design</h2>
        <p><strong>Design eFPGA chips with SLAC Technology Innovation Directorate (TID).</strong></p>`,
    },
    {
      slug: "HEP_foundation",
      title: "Foundation Model for HEP",
      summary: "Unsupervised Backbone Model",
      date: "2025-07-11",
      tags: ["Machine Learning"],
      image: "assets/content/HEP_foundation.png",
      body: `
        <p><strong>How to train a foundation model for high-energy physics that can provide benefit in various downstream applications?</strong></p>
        <details><summary>Recent Tasks</summary><ol><li>Get familiar with the current work flow</li></ol></details>`,
    },
    {
      slug: "GBCR",
      title: "GBCR",
      summary: "The GigaBit Cable Receiver (GBCR) ASIC",
      date: "2025-03-31",
      tags: ["LHC Upgrade"],
      image: "assets/content/GBCR.png",
      body: `
        <h2>Introduction</h2>
        <p><strong>The GigaBit Cable Receiver (GBCR) ASIC is designed as an equalizer chip to compensate the ITk pixel data transmission loss in the high frequency range after the twinax Type-1 data E-links at 1.28 Gb/s.</strong></p>
        <p><strong>There are ~4500 GBCR chips in the ITk Pixel system.</strong></p>
        <figure><img src="assets/content/GBCR-itk.png" alt="ATLAS ITK readout system"><figcaption>ATLAS ITk readout system</figcaption></figure>
        <p>The TWiki page for GBCR: <a href="https://twiki.cern.ch/twiki/bin/viewauth/Atlas/GBCR">GBCR</a></p>
        <p>The software link: <a href="https://gitlab.cern.ch/rce/gbcr_qc">rce/gbcr_qc</a></p>
        <p>The GBCR Testing Github: <a href="https://github.com/OSU-HEP-HDL/GBCR-Testing">GBCR-Testing</a></p>
        <h2>Performed QC Tests</h2>
        <ol>
          <li>EQ Amplitude Factors Test</li>
          <li>Disable RX Channel Function Test</li>
          <li>Retiming Mode Function Test</li>
          <li>Retiming Mode &amp; Voted Mode Correlation Test</li>
          <li>RX 5 Channel Retiming Mode Test</li>
        </ol>
        <details><summary>Milestones</summary><ol>
          <li>Developed the GBCR software gitlab repo.</li>
          <li>QC'ed several GBCR3 chips for SEU test.</li>
          <li>QC test procedures.</li>
        </ol></details>`,
    },
    {
      slug: "5D_calo",
      title: "5D Calorimetry",
      summary: "5D Calorimetry R&D",
      date: "2025-03-28",
      tags: ["Detector R&D"],
      image: "assets/content/5D_calo.png",
      body: `
        <p><strong>In 5D calorimetry our goal is to incorporate time information, as captured through the LAr and Tile calorimeters, combined with track measurements for precise vertex t0 reconstruction as a novel feature within the ATLAS experiment framework.</strong></p>
        <h2>dSiPM Study for Future Detectors</h2>
        <p>Github Workspace: <a href="https://github.com/Liangyu5wu/DREAMSim">HG-DREAM G4 simulation: dream 2.06</a></p>
        <h3>Photon Occupancy Study</h3>
        <p>Explore the photon occupancy for different segmentations of the dSiPMs.</p>
        <figure><img src="assets/content/5D_calo-photon.png" alt="Photon distribution display"><figcaption>Photon distribution display in the Cherenkov fiber</figcaption></figure>
        <h3>Incident Angles Study</h3>
        <p>Explore how to maximally utilize the fibers in our calorimeter.</p>
        <h3>Energy Reconstruction &amp; Particle ID with ML</h3>
        <p>Incorporating more timing information and shower structure information to further improve the energy resolution in the calorimeter.</p>
        <details><summary>Recent Tasks</summary><ol>
          <li>Follow the Auto-encoder study.</li>
          <li>CNN for energy regression with dSiPM-level pixels.</li>
        </ol></details>`,
    },
    {
      slug: "Vertex_t0",
      title: "Vertex T0 Timing",
      summary: "Reconstructing Timing Information Using LAr Calorimeter",
      date: "2025-03-28",
      tags: ["LHC Upgrade"],
      image: "assets/content/Vertex_t0.jpg",
      body: `
        <p><strong>How to better utilize the timing capabilities of Liquid Argon (LAr) Calorimeter in ATLAS?</strong></p>
        <h2>Current Status</h2>
        <p><strong>Current ATLAS LAr Calorimeter has good timing resolution of O(100 ps) or better at best cells. (HGTD can reach ~30 ps)</strong></p>
        <p><strong>Can we use LAr cells to achieve O(100 ps) resolution for complex objects?</strong></p>
        <p>Github Link: <a href="https://github.com/Liangyu5wu/Vertex0">Data processing</a></p>
        <figure><img src="assets/content/Vertex_t0-lar.png" alt="ATLAS LAr Calorimeter"><figcaption>ATLAS LAr Calorimeter</figcaption></figure>
        <details><summary>Recent Tasks</summary><ol>
          <li>ML implementation</li>
          <li>US-ATLAS Workshop Slides</li>
          <li>Further distinguishing the b-jets and light-quarks (and gluons).</li>
        </ol></details>`,
    },
  ],

  /* ----------------------------------------------------------------- talks */
  talks: [
    {
      slug: "2026_03_26_itk_Week",
      title: "GBCR Testing",
      event: "ITk Week 2026 (Pixels – electronics & services)",
      eventUrl: "https://indico.cern.ch/event/1540036/#116-gbcr",
      location: "40/S2-C01 - Salle Marie Skłodowska-Curie (CERN), Geneva, Switzerland",
      date: "2026-03-26",
      featured: true,
      summary: "Data Transmission Tests",
      image: "assets/content/talk-2026_03_26_itk_Week.png",
      abstract: "This 15-minute talk presents recent QC test status and results from the GBCR3 conducted recently across SLAC and SMU.",
      project: "GBCR",
    },
    {
      slug: "2025_12_12_ATLAS_Timing_Ws",
      title: "Vertex t0 Reconstruction Using LAr Calorimeter with Outlook for LAr-HGTD Combination",
      event: "ATLAS Timing Workshop",
      eventUrl: "https://indico.cern.ch/event/1613530/timetable/?view=standard#16-vertex-t0-reconstruction-us",
      location: "593/R-010 - Salle 11 (CERN), Geneva, Switzerland",
      date: "2025-12-12",
      featured: false,
      summary: "Vertex t0 reconstruction",
      image: "assets/content/talk-2025_12_12_ATLAS_Timing_Ws.png",
      abstract: "Run 4 simulation studies discussing ideas and challenges for combining LAr and HGTD to improve the determination of the vertex t0, particularly in events with central-central and central-forward topologies.",
      project: "Vertex_t0",
    },
    {
      slug: "2025_12_03_US_ITk_week",
      title: "GBCR QC Testing",
      event: "US ITk Pixels Workshop",
      eventUrl: "https://indico.cern.ch/event/1597859/#89-gbcr-testing",
      location: "B53-Trinity - SLAC National Accelerator Laboratory, Menlo Park, CA",
      date: "2025-12-03",
      featured: true,
      summary: "GBCR QC Tests",
      image: "assets/content/talk-2025_12_03_US_ITk_week.png",
      abstract: "This 15-minute talk presents some QC test results from the GBCR3 conducted recently in the SLAC EPP lab.",
      project: "GBCR",
    },
    {
      slug: "2025_10_08_CPAD_DCH",
      title: "Embedded ML Solutions for Real-time Processing in Future Drift Chambers",
      event: "CPAD 2025 at Penn",
      eventUrl: "https://indico.global/event/14966/contributions/133342",
      location: "Inn at Penn, University of Pennsylvania, Philadelphia, PA",
      date: "2025-10-06",
      featured: true,
      summary: "Online Data Compression",
      image: "assets/content/talk-2025_10_08_CPAD_DCH.jpg",
      abstract: "Cluster counting (dN/dx) offers significant promise for enhanced particle identification (PID) resolution compared to traditional dE/dx methods by measuring the number of primary ionization acts per unit length. However, future detectors such as IDEA operating under high-speed digitization face unprecedented data transfer rate challenges. We are developing advanced ML algorithms that demonstrate superior performance over conventional derivative-based methods for cluster counting tasks. We further investigate optimizing these models to fit within estimated front-end resource constraints while achieving competitive latency performance. This ML-based front-end electronics approach enables real-time data reduction with substantial compression ratios. These capabilities address immediate bandwidth limitations and simultaneously open new possibilities for implementing intelligent real-time data acquisition in future collider experiments. In this presentation, I will discuss our progress in developing these ML-assisted data processing solutions, demonstrate performance comparisons with traditional methods, and discuss the implications of this data reduction capability for drift chamber applications at FCCee.",
      project: "On-chip-ml",
    },
    {
      slug: "2025_10_08_CPAD_dSiPM",
      title: "Developing Digital Silicon Photomultiplier (dSiPM) Specifications for a High-Granularity Calorimeter with Simulations",
      event: "CPAD 2025 at Penn",
      eventUrl: "https://indico.global/event/14966/contributions/133853/",
      location: "Inn at Penn, University of Pennsylvania, Philadelphia, PA",
      date: "2025-10-08",
      featured: false,
      summary: "dSiPM R&D",
      image: "assets/content/talk-2025_10_08_CPAD_dSiPM.jpg",
      abstract: "Calorimeters play a central role in high-energy physics experiments by enabling precise energy measurements and providing critical information for particle identification and event reconstruction. Advances in calorimeter technology are essential to meet the increasingly demanding requirements of future collider experiments, such as the FCC and muon collider, as well as non-collider experiments in neutrino physics, dark matter searches, and astrophysical observations. One of the critical elements in calorimetry is photon detection. We investigate the performance potential of digital silicon photomultipliers (dSiPMs) for high-granularity dual-readout calorimetry, with a focus on timing resolution and photon-counting capabilities. Using detailed simulations, we develop optimized dSiPM specifications tailored for use in fiber calorimeters. These results inform design choices for future detector modules aimed at achieving enhanced time resolution, dynamic range, and reconstruction accuracy.",
      project: "5D_calo",
    },
    {
      slug: "2025_07_23_US_ATLAS",
      title: "Enhancing Timing Information Reconstruction with LAr Calorimeter",
      event: "US ATLAS Summer Workshop 2025",
      eventUrl: "https://indico.cern.ch/event/1477301/",
      location: "U-M Physics Department, Ann Arbor, MI",
      date: "2025-07-21",
      featured: true,
      summary: "Primary Vertex Timing",
      image: "assets/content/talk-2025_07_23_US_ATLAS.png",
      abstract: "The HGTD detector will play a key role in utilizing fast-timing information to suppress pileup effects in the forward region. On the other hand, the LAr calorimeter presents a significant opportunity to expand the HGTD capabilities in topologies with central or central-forward jets, thereby enhancing the application of fast timing in ATLAS. The LAr Calorimeter exhibits excellent intrinsic resolution, and its widespread presence can significantly enhance overall timing performance. However, achieving and fully integrating sub-100 ps LAr time resolution presents substantial challenges due to two key experimental issues: first, the presence of cross-talk and timing calibration effects not represented in the simulation; and second, the impact of pileup contributions to cells, which complicate the isolation of the correct hard-scatter vertex time (vertex t0). In this presentation, I will focus on recent progress in determining the vertex t0 in simulated data, addressing the impact of pileup, and discussing potential limits of performance. I will also briefly discuss ongoing efforts in ATLAS to overcome cross-talk issues and outline the next steps to tackle data-specific challenges.",
      project: "Vertex_t0",
    },
    {
      slug: "2025_05_14_itk_Week",
      title: "Recent Results of GBCR3 Testing @SLAC",
      event: "ITk Week 2025 (Pixels – On-detector Electronics)",
      eventUrl: "https://indico.cern.ch/event/1393708/#b-555609-pixels-on-detector-el",
      location: "40/S2-D01 - Salle Dirac (CERN), Geneva, Switzerland",
      date: "2025-05-14",
      featured: true,
      summary: "Data Transmission Tests",
      image: "assets/content/talk-2025_05_14_itk_Week.jpg",
      abstract: "This 15-minute talk presents some test results from the GBCR3 conducted recently in the SLAC EPP lab, especially some retiming mode function tests.",
      slidesUrl: "uploads/GBCR_ITKweek_0514.pdf",
      project: "GBCR",
    },
    {
      slug: "2025_03_US_ITk_Ws",
      title: "Recent Test Results of GBCR3 @SLAC",
      event: "US ITk Pixels Workshop",
      eventUrl: "https://indico.cern.ch/event/1508742/",
      location: "SLAC National Accelerator Laboratory, Menlo Park, CA",
      date: "2025-03-17",
      featured: false,
      summary: "Data Transmission Tests",
      image: "assets/content/talk-2025_03_US_ITk_Ws.jpg",
      abstract: "This 15-minute talk presents some test results from the GBCR3 conducted recently in the SLAC EPP lab, and discusses several potential bugs that may require attention.",
      slidesUrl: "uploads/GBCR_ITK_workshop.pdf",
      project: "GBCR",
    },
  ],

  /* ------------------------------------------------------------------ news */
  news: [
    {
      slug: "Stanford_start",
      title: "Hello Stanford, My PhD Journey Begins!",
      date: "2024-08-30",
      tags: ["Career"],
      image: "assets/content/news-Stanford_start.jpg",
      summary: "Arrived on campus, preparing for the new phase ahead.",
      body: `<p>Starting to overcome jet lag while settling into my new studio apartment. Many things to tackle, but the sunshine here is lovely!</p>`,
    },
    {
      slug: "SJTU_graduation",
      title: "🎉 SJTU Undergrad Complete!",
      date: "2024-06-30",
      tags: ["Career"],
      image: "assets/content/news-SJTU_graduation.jpg",
      summary: "Graduated with Shanghai Outstanding Graduate honors and A+ thesis defense.",
      body: `
        <h2>Done with My SJTU Journey</h2>
        <p>With the guidance and companionship of many kind souls, I've completed my undergraduate journey at SJTU. This chapter stands as both a pivotal milestone and the genesis of my physics career. Each moment, each season carries its own distinct flavor of memories.</p>
        <p>I'm grateful that during my final semester, I found that sweet balance between preparing my thesis and savoring campus life. Those precious days were nothing short of beautiful. I'm also delighted that my final thesis defense earned an A+ grade, bringing a perfect conclusion to this beautiful graduation season!</p>
        <h3>Some of My Favorite Courses @SJTU</h3>
        <ul><li>Linear Algebra</li><li>Quantum Mechanics I</li><li>Methods of Experimental Nuclear and Particle Physics</li></ul>`,
    },
    {
      slug: "umd_start",
      title: "Beginning My Exchange Student Life at UMD.",
      date: "2023-08-22",
      tags: ["Visiting"],
      image: "assets/content/news-umd_start.jpg",
      summary: "My exchange program begins at Maryland.",
      body: `<p>Starting to select courses and preparing for research. I considered buying a bicycle, but ultimately decided to spend more time walking around campus during these precious few months as a student here. I really love the large lawn in front of the library.</p>`,
    },
  ],

  /* -------------------------------------------------------------- teaching */
  teaching: [
    {
      slug: "ph24_26spring",
      title: "Physics 24 — Electricity, Magnetism, and Optics Laboratory",
      role: "2026 Spring Quarter TA",
      date: "2026-03-22",
      tags: ["Teaching"],
      image: "assets/content/teaching-ph24_26spring.png",
      intro: "This class is the laboratory component of the calculus-based introductory physics sequence focused on electricity, magnetism, and optics, complementing material presented in PH23.",
      body: `
        <h2>Overview</h2>
        <p>The labs in this course are designed to complement material presented in PH23 (Electricity, Magnetism, and Optics).</p>
        <h2>Lab Schedule</h2>
        <table>
          <thead><tr><th>Lab #</th><th>Week of</th><th>Topic</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>January 5</td><td>Introduction to Instrumentation</td></tr>
            <tr><td>2</td><td>January 12</td><td>Electric Potentials</td></tr>
            <tr><td>3</td><td>January 19</td><td>DC Circuits</td></tr>
            <tr><td>4</td><td>February 2</td><td>Magnetism</td></tr>
            <tr><td>5</td><td>February 9</td><td>Faraday's Law</td></tr>
            <tr><td>6</td><td>February 16</td><td>Transformers</td></tr>
            <tr><td>7</td><td>February 23</td><td>Wave Optics</td></tr>
            <tr><td>8</td><td>March 2</td><td>Geometric Optics</td></tr>
            <tr><td>9</td><td>March 9</td><td>Spherical Lenses</td></tr>
          </tbody>
        </table>
        <h2>Resources</h2>
        <p>Online, open source text from Open Stax: <a href="https://openstax.org/books/university-physics-volume-2/pages/5-introduction">University Physics Volume 2</a></p>`,
    },
    {
      slug: "ph45_25fall",
      title: "Physics 45 — Light and Heat",
      role: "2025 Fall Quarter TA",
      date: "2025-09-22",
      tags: ["Teaching"],
      image: "assets/content/teaching-ph45_25fall.jpg",
      intro: "This class is the final course in a sequence of calculus-based, introductory physics courses for scientists and engineers focused on thermodynamics and optics.",
      body: `
        <h2>Class Schedule</h2>
        <table>
          <thead><tr><th>Week</th><th>Monday</th><th>Wednesday</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Temperature, Zeroth Law, Thermal Expansion</td><td>Heat, Calorimetry, Phase Changes, Transfer Mechanisms</td></tr>
            <tr><td>2</td><td>Thermal Radiation, Ideal Gases</td><td>Kinetic Theory of Thermodynamics</td></tr>
            <tr><td>3</td><td>Thermodynamic Systems &amp; The First Law</td><td>Thermodynamic Processes</td></tr>
            <tr><td>4</td><td>Reversibility &amp; Heat Engines</td><td>Refrigerators, Heat Pumps, The Second Law</td></tr>
            <tr><td>5</td><td>The Carnot Cycle</td><td>Entropy</td></tr>
            <tr><td>6</td><td>Light: Propagation, Reflection, &amp; Refraction</td><td>Refraction &amp; Dispersion, Plane Mirrors</td></tr>
            <tr><td>7</td><td>Spherical Mirrors</td><td>Refraction &amp; Thin Lenses</td></tr>
            <tr><td>8</td><td>Compound Lenses and the Eye</td><td>Mechanical Waves</td></tr>
            <tr><td>9</td><td>Huygen's Principle, Multi-Slit Interference</td><td>Thin Film Interference</td></tr>
            <tr><td>10</td><td>Single and Double Slit Diffraction</td><td>Diffraction Gratings &amp; Diffraction Limited Optics</td></tr>
          </tbody>
        </table>
        <h2>Resources</h2>
        <p>Online, open source text from Open Stax: <a href="https://openstax.org/details/books/university-physics-volume-1">University Physics Volume 1-3</a></p>`,
    },
    {
      slug: "ph43_25spring",
      title: "Physics 43 — Electricity and Magnetism",
      role: "2025 Spring Quarter TA",
      date: "2025-03-22",
      tags: ["Teaching"],
      image: "assets/content/teaching-ph43_25spring.jpg",
      intro: "This class is the second course in a calculus-based, introductory physics sequence for scientists and engineers (Phys 40 series) focused on classical electromagnetism (E&M).",
      body: `
        <h2>Video</h2>
        <p>The following 14-minute video may give you some sense of how an electromagnetic field works:</p>
        <div class="video-embed"><iframe src="https://www.youtube.com/embed/XoVW7CRR5JY" title="Electromagnetic field" allowfullscreen loading="lazy"></iframe></div>
        <h2>Class Schedule</h2>
        <table>
          <thead><tr><th>Week</th><th>Tuesday</th><th>Thursday</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Electric Field</td><td>Continuous Charge Distributions</td></tr>
            <tr><td>2</td><td>Gauss's Law</td><td>Gauss's Law &amp; Conductors</td></tr>
            <tr><td>3</td><td>Electric Potential Energy</td><td>The Electric Potential</td></tr>
            <tr><td>4</td><td>Capacitance</td><td>Capacitance &amp; Dielectrics</td></tr>
            <tr><td>5</td><td>Current &amp; Resistance</td><td>DC Circuits</td></tr>
            <tr><td>6</td><td>RC Circuitry</td><td>Magnetic Fields</td></tr>
            <tr><td>7</td><td>Sources of Magnetic Fields</td><td>Sources of Magnetic Fields</td></tr>
            <tr><td>8</td><td>Faraday's Law</td><td>Faraday's Law</td></tr>
            <tr><td>9</td><td>Inductance</td><td>Inductance</td></tr>
            <tr><td>10</td><td>E&amp;M</td><td></td></tr>
          </tbody>
        </table>
        <h2>Resources</h2>
        <p>Online, open source text from Open Stax: <a href="https://openstax.org/books/university-physics-volume-2/pages/5-introduction">University Physics Volume 2</a></p>`,
    },
  ],

  /* --------------------------------------------------------------- section backgrounds */
  backgrounds: {
    hero: "assets/media/ATLAS_Detector.jpg",
    research: "assets/media/ATLAS_D2.jpg",
    publications: "assets/media/LHC_D1.jpg",
    talks: "assets/media/FCC_P1.jpg",
    news: "assets/media/SLAC_P1.jpg",
  },

  footer: {
    copyright: "Liangyu Wu",
    license: "CC BY-NC-ND 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  },
};
