export interface Question {
  id: number;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export const examData: Question[] = [
  {
    id: 1,
    question: "Which of the following structures is absent from all prokaryotic cells but always present in eukaryotic microbes such as yeasts?",
    options: {
      A: "70 S ribosomes",
      B: "Nuclear envelope",
      C: "Peptidoglycan cell wall",
      D: "Circular DNA plasmids"
    },
    correctAnswer: "B",
    explanation: "Only eukaryotes have a double-membraned nuclear envelope; prokaryotes lack it."
  },
  {
    id: 2,
    question: "In the five-kingdom classification scheme, viruses are excluded primarily because they",
    options: {
      A: "possess RNA genomes instead of DNA",
      B: "cannot be stained by Gram procedures",
      C: "lack independent metabolic activity and reproduce only inside host cells",
      D: "have envelopes derived from host membranes"
    },
    correctAnswer: "C",
    explanation: "Viruses are acellular parasites—no independent metabolism, must replicate inside host."
  },
  {
    id: 3,
    question: "The kingdom Fungi is distinguished from Plantae chiefly on the basis of",
    options: {
      A: "heterotrophic absorptive nutrition and chitinous cell walls",
      B: "presence of cellulose and chlorophyll-b",
      C: "storage of energy as starch and oils",
      D: "the appearance of vascular tissue and true roots"
    },
    correctAnswer: "A",
    explanation: "Fungi are absorptive heterotrophs with chitin; plants are autotrophs with cellulose."
  },
  {
    id: 4,
    question: "Rhizobium bacteria form nodules on legume roots. The direct ecological benefit to the plant is",
    options: {
      A: "enhanced phosphorus uptake",
      B: "fixation of atmospheric nitrogen to ammonia",
      C: "mycorrhizal water absorption",
      D: "protection from herbivores through toxin production"
    },
    correctAnswer: "B",
    explanation: "Rhizobium fixes N₂ → NH₃ inside root nodules."
  },
  {
    id: 5,
    question: "A Gram-negative bacillus will appear __________ after Gram staining and microscopic evaluation.",
    options: {
      A: "purple-black and rod-shaped",
      B: "pink-red and rod-shaped",
      C: "purple-black and coccoid",
      D: "pink-red and spiral"
    },
    correctAnswer: "B",
    explanation: "Gram-negative rods appear pink/red after de-colourisation and safranin counter-stain."
  },
  {
    id: 6,
    question: "The capsid symmetry of the Tobacco Mosaic Virus (TMV) is best described as",
    options: {
      A: "icosahedral",
      B: "spherical",
      C: "helical",
      D: "complex brick-shaped"
    },
    correctAnswer: "C",
    explanation: "TMV's protein subunits wind as a helical tube around its RNA."
  },
  {
    id: 7,
    question: "Which ONE of the following combinations correctly pairs a fungal group with its dominant reproductive spore type?",
    options: {
      A: "Basidiomycota — ascospores",
      B: "Zygomycota — zygospores",
      C: "Ascomycota — basidiospores",
      D: "Deuteromycota — swarm spores"
    },
    correctAnswer: "B",
    explanation: "Zygomycetes form thick-walled zygospores during sexual reproduction."
  },
  {
    id: 8,
    question: "The term \"facultative anaerobe\" refers to a bacterium that",
    options: {
      A: "can grow only in the complete absence of oxygen",
      B: "performs photosynthesis in anaerobic ponds",
      C: "switches between aerobic respiration and fermentation depending on O₂ availability",
      D: "obtains energy solely from inorganic oxidation (chemolithotrophy)"
    },
    correctAnswer: "C",
    explanation: "Facultative anaerobes toggle between O₂ respiration and fermentation."
  },
  {
    id: 9,
    question: "The binomial scientific name of an organism consists of",
    options: {
      A: "family and genus",
      B: "genus and species",
      C: "order and family",
      D: "species and strain"
    },
    correctAnswer: "B",
    explanation: "Genus + species comprise a binomen (e.g., Homo sapiens)."
  },
  {
    id: 10,
    question: "A plant exhibiting crassulacean acid metabolism (CAM) is most likely to display which adaptation?",
    options: {
      A: "Open stomata predominantly during daylight hours",
      B: "Storage of malic acid in vacuoles overnight",
      C: "Nitrogen fixation in leaf mesophyll",
      D: "Lack of any cuticular wax on leaves"
    },
    correctAnswer: "B",
    explanation: "CAM plants store malic acid at night; stomata shut by day."
  },
  {
    id: 11,
    question: "The leaf cuticle is primarily composed of",
    options: {
      A: "lignin",
      B: "sporopollenin",
      C: "cutin and waxes",
      D: "suberin"
    },
    correctAnswer: "C",
    explanation: "Cuticle = cutin + wax layers—waterproof barrier."
  },
  {
    id: 12,
    question: "Which plant tissue provides BOTH mechanical support and conduction of water?",
    options: {
      A: "Phloem fibres",
      B: "Sclereids",
      C: "Xylem vessels",
      D: "Collenchyma"
    },
    correctAnswer: "C",
    explanation: "Xylem vessels conduct water and add structural support (lignin)."
  },
  {
    id: 13,
    question: "One characteristic feature of Bryophyta is the dominance of the __________ generation in its life cycle.",
    options: {
      A: "sporophyte diploid",
      B: "gametophyte haploid",
      C: "endosperm triploid",
      D: "embryonic zygote"
    },
    correctAnswer: "B",
    explanation: "In bryophytes the haploid gametophyte dominates."
  },
  {
    id: 14,
    question: "In flowering plants, double fertilisation results in a diploid zygote and a",
    options: {
      A: "diploid endosperm",
      B: "triploid endosperm",
      C: "triploid nucellus",
      D: "tetraploid cotyledon"
    },
    correctAnswer: "B",
    explanation: "Second sperm + two polar nuclei → triploid endosperm."
  },
  {
    id: 15,
    question: "The term \"heterospory\" refers to the production of",
    options: {
      A: "one type of asexual spore only",
      B: "distinct microspores and megaspores on the same or different individuals",
      C: "conidia on aerial hyphae",
      D: "multiple flagella on algal zoospores"
    },
    correctAnswer: "B",
    explanation: "Heterospory = micro- & megaspores, precursor to seeds."
  },
  {
    id: 16,
    question: "A parallel-veined leaf, fibrous root system, and presence of a single cotyledon are diagnostic of",
    options: {
      A: "dicotyledons",
      B: "gymnosperms",
      C: "monocotyledons",
      D: "pteridophytes"
    },
    correctAnswer: "C",
    explanation: "Monocots = one cotyledon, parallel veins, fibrous roots."
  },
  {
    id: 17,
    question: "Stomatal aperture widens when guard cells",
    options: {
      A: "lose potassium ions and become flaccid",
      B: "actively accumulate potassium ions, drawing in water osmotically",
      C: "convert malate to starch during daylight",
      D: "secrete abscisic acid under non-stress conditions"
    },
    correctAnswer: "B",
    explanation: "K⁺ influx → water influx → turgid guard cells → pore opens."
  },
  {
    id: 18,
    question: "All of the following are primary meristems EXCEPT",
    options: {
      A: "protoderm",
      B: "procambium",
      C: "ground meristem",
      D: "vascular cambium"
    },
    correctAnswer: "D",
    explanation: "Vascular cambium is a secondary, not primary, meristem."
  },
  {
    id: 19,
    question: "The type of body symmetry most typical of Cnidaria is",
    options: {
      A: "bilateral",
      B: "pentaradial",
      C: "radial",
      D: "asymmetrical"
    },
    correctAnswer: "C",
    explanation: "Cnidarians show radial symmetry (e.g., jellyfish)."
  },
  {
    id: 20,
    question: "In vertebrate animals, the notochord is replaced during development by the",
    options: {
      A: "spinal cord",
      B: "dorsal fin",
      C: "vertebral column",
      D: "post-anal tail"
    },
    correctAnswer: "C",
    explanation: "In vertebrates notochord replaced by vertebral column."
  },
  {
    id: 21,
    question: "An endothermic animal is one that",
    options: {
      A: "relies entirely on environmental heat sources",
      B: "can elevate metabolic heat to maintain relatively constant internal body temperature",
      C: "produces heat only during activity and not at rest",
      D: "migrates to maintain preferred temperature"
    },
    correctAnswer: "B",
    explanation: "Endotherms generate internal heat for stable body T."
  },
  {
    id: 22,
    question: "Which ONE of the following structures is part of the mammalian excretory system?",
    options: {
      A: "Seminiferous tubule",
      B: "Loop of Henle",
      C: "Thyroid follicle",
      D: "Islets of Langerhans"
    },
    correctAnswer: "B",
    explanation: "Loop of Henle is nephron's concentrating limb."
  },
  {
    id: 23,
    question: "Annelida differs from Platyhelminthes because annelids possess",
    options: {
      A: "flame cells for osmoregulation",
      B: "a true coelom and metameric segmentation",
      C: "radial symmetry",
      D: "intracellular digestion only"
    },
    correctAnswer: "B",
    explanation: "Annelids = true coelom + segmentation; flatworms lack both."
  },
  {
    id: 24,
    question: "Homeostasis of blood glucose is regulated chiefly by antagonistic hormones secreted from the",
    options: {
      A: "thyroid gland",
      B: "pancreas (islets of Langerhans)",
      C: "adrenal cortex",
      D: "pineal gland"
    },
    correctAnswer: "B",
    explanation: "Blood glucose feedback: insulin/glucagon from pancreas."
  },
  {
    id: 25,
    question: "A hydrostatic skeleton is characteristic of",
    options: {
      A: "earthworms",
      B: "houseflies",
      C: "penguins",
      D: "sea gulls"
    },
    correctAnswer: "A",
    explanation: "Earthworm moves via hydrostatic skeleton (fluid + muscles)."
  },
  {
    id: 26,
    question: "The primary function of the insect Malpighian tubules is",
    options: {
      A: "gas exchange",
      B: "sound reception",
      C: "osmoregulation and excretion",
      D: "hematopoiesis"
    },
    correctAnswer: "C",
    explanation: "Insects' Malpighian tubules handle N-waste & water balance."
  },
  {
    id: 27,
    question: "Axenic culture of bacteria means growth",
    options: {
      A: "on nutrient agar lacking any antibiotics",
      B: "in association with obligate pathogens",
      C: "free from contamination by any other living organism",
      D: "at high salt concentration only"
    },
    correctAnswer: "C",
    explanation: "Axenic = pure culture, no contaminating species."
  },
  {
    id: 28,
    question: "An endospore can be destroyed reliably by",
    options: {
      A: "pasteurisation at 72 °C for 15 s",
      B: "ultraviolet radiation for 30 s",
      C: "autoclaving at 121 °C, 15 psi for 15 min",
      D: "freezing at −20 °C overnight"
    },
    correctAnswer: "C",
    explanation: "Autoclaving 121 °C/15 min is spore-killing gold standard."
  },
  {
    id: 29,
    question: "One feature used to identify Basidiomycota under the microscope is the presence of",
    options: {
      A: "asci in ascocarps",
      B: "zygosporangia",
      C: "basidia with external basidiospores",
      D: "rhizoids"
    },
    correctAnswer: "C",
    explanation: "Basidiomycetes bear spores externally on basidia."
  },
  {
    id: 30,
    question: "A lichen is best described as a stable symbiosis between",
    options: {
      A: "a green alga or cyanobacterium and a fungus",
      B: "two unrelated fungal species",
      C: "a moss gametophyte and an alga",
      D: "a bacterium and a protozoan"
    },
    correctAnswer: "A",
    explanation: "Lichen = alga/cyanobacterium + fungus mutualism."
  },
  {
    id: 31,
    question: "The phloem translocates mainly",
    options: {
      A: "urea from roots to leaves",
      B: "amino acids and sucrose from sources to sinks",
      C: "water exclusively upward",
      D: "fatty acids downward only"
    },
    correctAnswer: "B",
    explanation: "Phloem moves sucrose/AA from sources → sinks."
  },
  {
    id: 32,
    question: "A plant that produces leaves reduced to spines and carries out photosynthesis in fleshy stems is an example of ecological adaptation to",
    options: {
      A: "xeric (arid) habitats",
      B: "hydric (aquatic) habitats",
      C: "mesic forest floor",
      D: "alpine tundra"
    },
    correctAnswer: "A",
    explanation: "Spine leaves, succulent stems = xerophyte survival."
  },
  {
    id: 33,
    question: "Peristalsis is a process associated with the",
    options: {
      A: "xylem sap stream",
      B: "human alimentary canal",
      C: "pulsating heart of insects",
      D: "movement of cilia in Paramecium"
    },
    correctAnswer: "B",
    explanation: "Peristalsis = rhythmic gut contractions in animals."
  },
  {
    id: 34,
    question: "At high altitude, the partial pressure of oxygen decreases. Mammals respond acutely by",
    options: {
      A: "reducing red blood-cell count",
      B: "increasing ventilation rate and cardiac output",
      C: "decreasing 2,3-BPG in erythrocytes",
      D: "lowering erythropoietin secretion"
    },
    correctAnswer: "B",
    explanation: "Initial high-altitude response = ↑breathing & HR."
  },
  {
    id: 35,
    question: "The loop of Henle generates a concentration gradient in the kidney medulla primarily through",
    options: {
      A: "counter-current multiplication",
      B: "simple diffusion of glucose",
      C: "secretion of bile salts",
      D: "Krebs cycle reactions"
    },
    correctAnswer: "A",
    explanation: "Loop of Henle's counter-current multiplier makes hyper-medulla."
  },
  {
    id: 36,
    question: "The phylum Porifera exhibits which type of body symmetry?",
    options: {
      A: "Bilateral",
      B: "Radial",
      C: "Asymmetrical (or lacks definite symmetry)",
      D: "Pentamerous"
    },
    correctAnswer: "C",
    explanation: "Most sponges lack set symmetry → asymmetrical."
  },
  {
    id: 37,
    question: "Cnidocytes in cnidarians contain organelles called",
    options: {
      A: "nematocysts",
      B: "rhopalia",
      C: "spicules",
      D: "flame cells"
    },
    correctAnswer: "A",
    explanation: "Nematocyst is the stinging thread in cnidocytes."
  },
  {
    id: 38,
    question: "The simplest multicellular animal often cited in textbooks is",
    options: {
      A: "Leucosolenia",
      B: "Obelia",
      C: "Hydra",
      D: "Trichoplax"
    },
    correctAnswer: "D",
    explanation: "Trichoplax (phylum Placozoa) = simplest multicellular animal."
  },
  {
    id: 39,
    question: "Planaria (free-living flatworm) differs from parasitic flatworms such as Taenia solium because Planaria",
    options: {
      A: "lacks digestive system entirely",
      B: "possesses ciliated epidermis and eyespots",
      C: "contains a tapeworm scolex",
      D: "has no regeneration ability"
    },
    correctAnswer: "B",
    explanation: "Planaria = free-living, ciliated epidermis + eyespots."
  },
  {
    id: 40,
    question: "A bacteriophage is a virus that infects",
    options: {
      A: "bacteria",
      B: "fungi",
      C: "protozoa",
      D: "algae"
    },
    correctAnswer: "A",
    explanation: "Bacteriophages specifically infect bacteria."
  },
  {
    id: 41,
    question: "HIV is classified in the Baltimore Group VI because it",
    options: {
      A: "has double-stranded RNA genome",
      B: "possesses a reverse transcriptase enzyme which synthesises DNA from RNA",
      C: "integrates chloroplast DNA into host genome",
      D: "replicates only in bacterial cells"
    },
    correctAnswer: "B",
    explanation: "HIV is +ssRNA retrovirus with reverse transcriptase (Group VI)."
  },
  {
    id: 42,
    question: "Yeasts are unicellular fungi that reproduce predominantly by",
    options: {
      A: "budding",
      B: "binary fission",
      C: "conjugation",
      D: "fragmentation of mycelia"
    },
    correctAnswer: "A",
    explanation: "Yeast division = budding most of the time."
  },
  {
    id: 43,
    question: "Monotrichous bacteria possess",
    options: {
      A: "a tuft of flagella at one pole",
      B: "flagella distributed over entire surface",
      C: "a single flagellum at one pole",
      D: "paired flagella at both poles"
    },
    correctAnswer: "C",
    explanation: "Monotrichous: single polar flagellum."
  },
  {
    id: 44,
    question: "The plant kingdom is commonly divided into how many major groups in traditional textbooks?",
    options: {
      A: "Two",
      B: "Three",
      C: "Four",
      D: "Five"
    },
    correctAnswer: "C",
    explanation: "Traditional plant texts list four main divisions."
  },
  {
    id: 45,
    question: "Selaginella is sometimes called the \"amphibian of the plant kingdom\" because",
    options: {
      A: "it lives equally well in salt and fresh water",
      B: "it shows features intermediate between bryophytes and ferns",
      C: "its gametophyte is parasitic on animals",
      D: "its sporophyte is fully independent"
    },
    correctAnswer: "B",
    explanation: "Selaginella bridges bryophytes & pteridophytes → \"amphibian\"."
  },
  {
    id: 46,
    question: "A plant body not differentiated into root, stem, or leaves is termed a",
    options: {
      A: "phyllode",
      B: "thallus",
      C: "cladode",
      D: "runner"
    },
    correctAnswer: "B",
    explanation: "Undifferentiated plant body = thallus."
  },
  {
    id: 47,
    question: "The two main root systems in higher plants are",
    options: {
      A: "fibrous and taproot",
      B: "prop and climbing",
      C: "aerial and contractile",
      D: "mucilage and haustorial"
    },
    correctAnswer: "A",
    explanation: "Two chief root types: taproot & fibrous."
  },
  {
    id: 48,
    question: "A vascular bundle is NOT found in",
    options: {
      A: "maize stem",
      B: "tomato petiole",
      C: "moss capsule",
      D: "sunflower root"
    },
    correctAnswer: "C",
    explanation: "Moss capsules (non-vascular) lack vascular bundles."
  },
  {
    id: 49,
    question: "One diagnostic characteristic of organisms placed in Kingdom Plantae is that they",
    options: {
      A: "are strictly heterotrophic",
      B: "possess cell walls containing cellulose",
      C: "produce glycogen as storage material",
      D: "exhibit chitinous exoskeleton"
    },
    correctAnswer: "B",
    explanation: "Plant cell walls contain cellulose (diagnostic)."
  },
  {
    id: 50,
    question: "During seed germination, the plumule develops into the",
    options: {
      A: "primary root",
      B: "shoot system",
      C: "seed coat",
      D: "cotyledon storage leaf"
    },
    correctAnswer: "B",
    explanation: "Plumule → shoot (leaves/stem) during germination."
  },
  {
    id: 51,
    question: "Histology of mammalian tissues reveals that epithelial cells lining kidney tubules are typically",
    options: {
      A: "stratified squamous",
      B: "simple cuboidal",
      C: "pseudo-stratified ciliated",
      D: "transitional"
    },
    correctAnswer: "B",
    explanation: "Kidney tubule lining = simple cuboidal epithelium."
  },
  {
    id: 52,
    question: "Osmosis differs from simple diffusion because osmosis",
    options: {
      A: "moves solvent (water) across a selectively permeable membrane",
      B: "requires ATP expenditure",
      C: "transports large proteins",
      D: "can never be reversed by pressure changes"
    },
    correctAnswer: "A",
    explanation: "Osmosis = solvent flow across semi-permeable membrane."
  },
  {
    id: 53,
    question: "In the mammalian heart, oxygenated blood leaves the left ventricle via the",
    options: {
      A: "pulmonary artery",
      B: "pulmonary vein",
      C: "aorta",
      D: "superior vena cava"
    },
    correctAnswer: "C",
    explanation: "Oxygen-rich blood exits LV via aorta."
  },
  {
    id: 54,
    question: "The symbiotic nitrogen-fixing cyanobacterium found in the leaf cavities of Azolla fern is",
    options: {
      A: "Anabaena azollae",
      B: "Nostoc commune",
      C: "Oscillatoria princeps",
      D: "Gloeocapsa magma"
    },
    correctAnswer: "A",
    explanation: "Anabaena azollae lives in leaf pockets of Azolla."
  },
  {
    id: 55,
    question: "Transpiration is affected least by",
    options: {
      A: "wind velocity",
      B: "relative humidity",
      C: "leaf surface area",
      D: "soil nitrate concentration"
    },
    correctAnswer: "D",
    explanation: "Transpiration barely linked to soil nitrate levels."
  },
  {
    id: 56,
    question: "Abscisic acid (ABA) plays a significant physiological role in plants by",
    options: {
      A: "promoting stem elongation",
      B: "inducing stomatal closure during water stress",
      C: "stimulating seed germination",
      D: "increasing fruit ripening rate"
    },
    correctAnswer: "B",
    explanation: "ABA closes stomata in water stress."
  },
  {
    id: 57,
    question: "The adaptive value of counter-current flow in fish gills is to",
    options: {
      A: "minimise energy required for ventilation",
      B: "maximise diffusion gradient for oxygen uptake along the entire lamella",
      C: "equalise water and blood oxygen levels quickly",
      D: "prevent carbon dioxide excretion"
    },
    correctAnswer: "B",
    explanation: "Counter-current keeps gradient → max O₂ diffusion."
  },
  {
    id: 58,
    question: "When preparing permanent microscope slides, xylene is used chiefly for",
    options: {
      A: "fixing proteins in tissue",
      B: "clearing dehydrated tissue to allow paraffin infiltration",
      C: "staining lignified cell walls",
      D: "mounting coverslips with resin"
    },
    correctAnswer: "B",
    explanation: "Xylene clears dehydrated tissue → wax infiltration."
  },
  {
    id: 59,
    question: "Proper handling of biological wares in a student laboratory includes all EXCEPT",
    options: {
      A: "labelling glassware with waterproof marker",
      B: "discarding used scalpels in open wastebasket",
      C: "autoclaving contaminated Petri dishes",
      D: "wearing nitrile gloves when using formalin"
    },
    correctAnswer: "B",
    explanation: "Open trash scalpels violate sharps protocol (so \"B\" is the bad practice)."
  },
  {
    id: 60,
    question: "In a transverse section of a young dicot stem, the endodermis is identifiable as",
    options: {
      A: "the innermost layer of the cortex containing starch grains",
      B: "a central region housing vascular bundles",
      C: "a thin outermost layer with cuticle",
      D: "a ring of stone cells just beneath the epidermis"
    },
    correctAnswer: "A",
    explanation: "Endodermis = starch-packed innermost cortical layer (\"starch sheath\")."
  }
];

export const examConfig = {
  title: "Lerion Study Bio 102 Exam",
  duration: 120, // 120 minutes
  totalQuestions: 60,
  passingScore: 50, // 50/60 = 83.3%
  instructions: [
    "This is a Computer-Based Test (CBT) for Biology 102",
    "Answer ALL sixty (60) multiple-choice questions",
    "Choose the single best option (A – D) for each question",
    "You have 120 minutes to complete the exam",
    "Questions are automatically saved as you answer them",
    "You can navigate between questions using the question grid",
    "Review your answers before submitting the exam"
  ]
};