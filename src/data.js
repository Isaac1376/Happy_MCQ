const topics = [
  {
    id: "polity",
    name: "Indian Polity",
    description:
      "50 Indian polity questions on Constitution, Parliament, rights, and government.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    questions: [
      {
        question: "Who is the head of the Indian State?",
        options: ["Prime Minister", "President", "Chief Justice", "Governor"],
        answer: "President",
      },
      {
        question: "Indian Constitution was adopted on?",
        options: ["26 Jan 1950", "15 Aug 1947", "26 Nov 1949", "1 Jan 1950"],
        answer: "26 Nov 1949",
      },
      {
        question: "Fundamental Rights are in which Part?",
        options: ["Part I", "Part II", "Part III", "Part IV"],
        answer: "Part III",
      },
      {
        question: "Directive Principles are inspired by?",
        options: ["USA", "UK", "Ireland", "France"],
        answer: "Ireland",
      },
      {
        question: "Who appoints the Prime Minister?",
        options: ["President", "Lok Sabha", "Rajya Sabha", "Chief Justice"],
        answer: "President",
      },
      {
        question: "Lok Sabha has a maximum of how many members?",
        options: ["500", "545", "552", "600"],
        answer: "552",
      },
      {
        question: "Rajya Sabha is?",
        options: ["Temporary", "Permanent", "Dissolved", "None"],
        answer: "Permanent",
      },
      {
        question: "Who is known as the Father of the Indian Constitution?",
        options: ["Nehru", "Ambedkar", "Gandhi", "Rajendra Prasad"],
        answer: "Ambedkar",
      },
      {
        question: "Which article deals with the Right to Equality?",
        options: ["14", "19", "21", "32"],
        answer: "14",
      },
      {
        question: "Which Article deals with impeachment of the President?",
        options: ["54", "56", "61", "72"],
        answer: "61",
      },
      {
        question:
          "The concept of Procedure Established by Law is borrowed from?",
        options: ["USA", "UK", "Japan", "Canada"],
        answer: "Japan",
      },
      {
        question: "How many schedules are there in the Indian Constitution?",
        options: ["10", "12", "14", "16"],
        answer: "12",
      },
      {
        question: "Who was the first President of India?",
        options: [
          "Rajendra Prasad",
          "Sarvepalli Radhakrishnan",
          "Zakir Hussain",
          "V.V. Giri",
        ],
        answer: "Rajendra Prasad",
      },
      {
        question: "What is the minimum age to become President of India?",
        options: ["30 years", "35 years", "40 years", "45 years"],
        answer: "35 years",
      },
      {
        question: "How many states are there in India?",
        options: ["26", "28", "30", "32"],
        answer: "28",
      },
      {
        question: "Which state has the maximum number of Lok Sabha seats?",
        options: ["Uttar Pradesh", "Maharashtra", "West Bengal", "Karnataka"],
        answer: "Uttar Pradesh",
      },
      {
        question: "What is the term of Lok Sabha members?",
        options: ["2 years", "4 years", "5 years", "6 years"],
        answer: "5 years",
      },
      {
        question: "Who appoints the Governor of a state?",
        options: [
          "President",
          "Prime Minister",
          "Chief Minister",
          "Chief Justice",
        ],
        answer: "President",
      },
      {
        question: "What does the Preamble of the Constitution define?",
        options: ["Laws", "Objectives and values", "Rights", "Duties"],
        answer: "Objectives and values",
      },
      {
        question: "How many Fundamental Duties are there in the Constitution?",
        options: ["8", "10", "11", "12"],
        answer: "11",
      },
      {
        question: "Which body can create a new state in India?",
        options: ["President", "Parliament", "Governor", "Chief Minister"],
        answer: "Parliament",
      },
      {
        question: "What is the chief source of law in India?",
        options: ["Customs", "Constitution", "Religion", "Precedent"],
        answer: "Constitution",
      },
      {
        question: "The President of India is elected by?",
        options: [
          "Direct vote",
          "Parliament",
          "Electoral College",
          "Governors",
        ],
        answer: "Electoral College",
      },
      {
        question: "How many years is the term of the Indian President?",
        options: ["4 years", "5 years", "6 years", "7 years"],
        answer: "5 years",
      },
      {
        question: "Which part of the Constitution deals with the Union?",
        options: ["Part I", "Part II", "Part III", "Part IV"],
        answer: "Part II",
      },
      {
        question: "What is the official language of India?",
        options: ["English", "Hindi", "Sanskrit", "Urdu"],
        answer: "Hindi",
      },
      {
        question: "Which date is observed as Republic Day?",
        options: ["15 Aug", "26 Jan", "2 Oct", "1 Jan"],
        answer: "26 Jan",
      },
      {
        question: "Who presides over a joint sitting of Parliament?",
        options: [
          "President",
          "Prime Minister",
          "Vice President",
          "Chief Justice",
        ],
        answer: "Vice President",
      },
      {
        question: "Which article provides for equality before law?",
        options: ["14", "15", "16", "17"],
        answer: "14",
      },
      {
        question: "The basic structure doctrine was propounded in which case?",
        options: [
          "Kesavananda Bharati",
          "A.K. Gopalan",
          "Minerva Mills",
          "Indira Gandhi",
        ],
        answer: "Kesavananda Bharati",
      },
      {
        question:
          "Which amendment gave priority to Directive Principles over Fundamental Rights?",
        options: ["25th", "42nd", "44th", "91st"],
        answer: "42nd",
      },
      {
        question: "Which schedule contains allocation of seats in Rajya Sabha?",
        options: ["1st", "2nd", "3rd", "4th"],
        answer: "4th",
      },
      {
        question: "Which article abolishes untouchability?",
        options: ["15", "16", "17", "18"],
        answer: "17",
      },
      {
        question: "Who can declare a national emergency?",
        options: ["Lok Sabha", "President", "Prime Minister", "Supreme Court"],
        answer: "President",
      },
      {
        question: "Which article deals with freedom of speech?",
        options: ["19", "18", "20", "21"],
        answer: "19",
      },
      {
        question: "How many members can Rajya Sabha have at maximum?",
        options: ["250", "260", "275", "280"],
        answer: "250",
      },
      {
        question: "Who is the guardian of the Indian Constitution?",
        options: [
          "Prime Minister",
          "President",
          "Supreme Court",
          "Election Commission",
        ],
        answer: "Supreme Court",
      },
      {
        question: "What is the minimum age to become Lok Sabha member?",
        options: ["18", "21", "25", "30"],
        answer: "25",
      },
      {
        question: "What is the minimum age to become Rajya Sabha member?",
        options: ["18", "21", "25", "30"],
        answer: "30",
      },
      {
        question:
          "Which article deals with right to life and personal liberty?",
        options: ["21", "20", "19", "22"],
        answer: "21",
      },
      {
        question: "The power of judicial review lies with?",
        options: ["Parliament", "President", "Supreme Court", "Prime Minister"],
        answer: "Supreme Court",
      },
      {
        question: "Which body prepares the Union Budget?",
        options: [
          "Election Commission",
          "Finance Ministry",
          "Parliament",
          "President",
        ],
        answer: "Finance Ministry",
      },
      {
        question: "Which Article protects cultural and educational rights?",
        options: ["29", "30", "31", "32"],
        answer: "29",
      },
      {
        question: "Which institution supervises elections in India?",
        options: [
          "Parliament",
          "President",
          "Supreme Court",
          "Election Commission",
        ],
        answer: "Election Commission",
      },
      {
        question: "What kind of democracy does India follow?",
        options: ["Direct", "Representative", "Monarchy", "Theocracy"],
        answer: "Representative",
      },
      {
        question:
          "What is the maximum number of Ministers in the Union Cabinet?",
        options: ["45", "50", "55", "60"],
        answer: "45",
      },
      {
        question: "Which article allows for preventive detention?",
        options: ["22", "23", "24", "25"],
        answer: "22",
      },
      {
        question: "What is the title of the head of state in India?",
        options: ["King", "President", "Prime Minister", "Chief Justice"],
        answer: "President",
      },
      {
        question: "Which office is responsible for advising the President?",
        options: [
          "Parliament",
          "Cabinet",
          "Election Commission",
          "Supreme Court",
        ],
        answer: "Cabinet",
      },
      {
        question:
          "How many fundamental duties were added by the 42nd Amendment?",
        options: ["8", "10", "11", "12"],
        answer: "10",
      },
      {
        question: "What is the maximum term of the Lok Sabha?",
        options: ["4 years", "5 years", "6 years", "7 years"],
        answer: "5 years",
      },
      {
        question:
          "Which part of the constitution guarantees Fundamental Rights?",
        options: ["Part II", "Part III", "Part IV", "Part V"],
        answer: "Part III",
      },
      {
        question: "The Prime Minister of India is appointed by?",
        options: ["Parliament", "President", "Cabinet", "Chief Justice"],
        answer: "President",
      },
      {
        question: "Which article deals with emergency provisions?",
        options: ["352", "356", "360", "368"],
        answer: "352",
      },
      {
        question: "Who can change the Constitution through amendment?",
        options: ["President", "Supreme Court", "Parliament", "Prime Minister"],
        answer: "Parliament",
      },
      {
        question: "The right to constitutional remedies is in which article?",
        options: ["32", "21", "22", "23"],
        answer: "32",
      },
      {
        question: "How many languages are in the Eighth Schedule?",
        options: ["16", "18", "22", "24"],
        answer: "22",
      },
      {
        question: "Which body elects the President?",
        options: [
          "Direct voters",
          "Parliament and states",
          "Cabinet",
          "Rajya Sabha",
        ],
        answer: "Parliament and states",
      },
      {
        question: "Which is the guardian of the Constitution?",
        options: ["President", "Prime Minister", "Supreme Court", "Parliament"],
        answer: "Supreme Court",
      },
      {
        question: "The right to education is under which article?",
        options: ["21A", "21", "19", "16"],
        answer: "21A",
      },
      {
        question:
          "The basic structure doctrine was first upheld in which year?",
        options: ["1973", "1975", "1980", "1985"],
        answer: "1973",
      },
      {
        question: "Indian Polity Sample Question 41?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Indian Polity Sample Question 42?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Indian Polity Sample Question 43?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Indian Polity Sample Question 44?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Indian Polity Sample Question 45?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Indian Polity Sample Question 46?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Indian Polity Sample Question 47?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Indian Polity Sample Question 48?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Indian Polity Sample Question 49?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Indian Polity Sample Question 50?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
    ],
  },
  {
    id: "black-hole",
    name: "Black Hole Science",
    description:
      "50 black hole and space science questions covering gravity, event horizons, and relativity.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
    questions: [
      {
        question: "What is a black hole?",
        options: [
          "A hole in space",
          "A region where gravity is so strong nothing escapes",
          "A dark star",
          "A collapsed galaxy",
        ],
        answer: "A region where gravity is so strong nothing escapes",
      },
      {
        question: "What is the boundary of a black hole called?",
        options: [
          "Black point",
          "Event Horizon",
          "Singularity",
          "Photon sphere",
        ],
        answer: "Event Horizon",
      },
      {
        question: "What is the center of a black hole called?",
        options: ["Core", "Nucleus", "Singularity", "Point mass"],
        answer: "Singularity",
      },
      {
        question: "The first black hole image was captured in?",
        options: ["2015", "2017", "2019", "2021"],
        answer: "2019",
      },
      {
        question: "What is an accretion disk around a black hole?",
        options: [
          "Disk of dust",
          "Disk of matter spiraling into black hole",
          "Disk of light",
          "Rotating disk of gas",
        ],
        answer: "Disk of matter spiraling into black hole",
      },
      {
        question: "Hawking Radiation is emitted by?",
        options: ["Stars", "Black holes", "Neutron stars", "White dwarfs"],
        answer: "Black holes",
      },
      {
        question: "What is the Schwarzschild radius?",
        options: [
          "Radius of black hole",
          "Event horizon radius",
          "Orbit of planet",
          "Photon sphere radius",
        ],
        answer: "Event horizon radius",
      },
      {
        question: "Supermassive black holes are found at?",
        options: ["Moon", "Center of galaxies", "Asteroids", "Comets"],
        answer: "Center of galaxies",
      },
      {
        question: "What causes time dilation near a black hole?",
        options: [
          "Magnetic field",
          "Extreme gravity",
          "Light refraction",
          "Matter compression",
        ],
        answer: "Extreme gravity",
      },
      {
        question:
          "Which scientist predicted black holes in general relativity?",
        options: [
          "Isaac Newton",
          "Albert Einstein",
          "Karl Schwarzschild",
          "Stephen Hawking",
        ],
        answer: "Albert Einstein",
      },
      {
        question: "Which object is a common precursor to a black hole?",
        options: ["Massive star", "Planet", "Comet", "Asteroid"],
        answer: "Massive star",
      },
      {
        question: "What happens to light at the event horizon?",
        options: [
          "It escapes",
          "It stops",
          "It cannot escape",
          "It becomes matter",
        ],
        answer: "It cannot escape",
      },
      {
        question: "What is spaghettification?",
        options: [
          "A food process",
          "Matter stretching due to tidal forces",
          "Light bending",
          "Magnetic field effect",
        ],
        answer: "Matter stretching due to tidal forces",
      },
      {
        question: "What type of black hole has millions of solar masses?",
        options: ["Stellar", "Intermediate", "Supermassive", "Micro"],
        answer: "Supermassive",
      },
      {
        question:
          "The nearest known black hole is located in which constellation?",
        options: ["Cygnus", "Orion", "Leo", "Scorpius"],
        answer: "Cygnus",
      },
      {
        question:
          "What is the name of the black hole at the center of our galaxy?",
        options: ["M87*", "Sagittarius A*", "Vega X", "Alpha Centauri BH"],
        answer: "Sagittarius A*",
      },
      {
        question: "Which spacecraft helped confirm the first black hole image?",
        options: ["Hubble", "Chandra", "Event Horizon Telescope", "Voyager"],
        answer: "Event Horizon Telescope",
      },
      {
        question: "What does the photon sphere surround?",
        options: ["Planet", "Star", "Black hole", "Galaxy"],
        answer: "Black hole",
      },
      {
        question: "Which radiation is emitted by some black holes?",
        options: ["Gamma rays", "Hawking Radiation", "Radio waves", "X-rays"],
        answer: "Hawking Radiation",
      },
      {
        question: "What is the effect on time near a black hole?",
        options: ["Speeds up", "Slows down", "Stops", "Reverses"],
        answer: "Slows down",
      },
      {
        question: "What is a singularity?",
        options: [
          "A point of infinite density",
          "A star",
          "A planet",
          "A galaxy",
        ],
        answer: "A point of infinite density",
      },
      {
        question: "Black holes are detected by observing?",
        options: ["Sound", "Light only", "Gravitational effects", "Taste"],
        answer: "Gravitational effects",
      },
      {
        question: "The escape velocity of a black hole is?",
        options: [
          "Less than light",
          "Equal to light",
          "Greater than light",
          "Zero",
        ],
        answer: "Greater than light",
      },
      {
        question: "Which is the smallest type of black hole?",
        options: ["Stellar", "Supermassive", "Micro", "Intermediate"],
        answer: "Micro",
      },
      {
        question: "What is the shape of space near a black hole?",
        options: ["Flat", "Curved", "Square", "Triangular"],
        answer: "Curved",
      },
      {
        question: "Which force is dominant near a black hole?",
        options: ["Magnetism", "Gravity", "Weak nuclear", "Strong nuclear"],
        answer: "Gravity",
      },
      {
        question: "What scientist is known for black hole thermodynamics?",
        options: ["Newton", "Einstein", "Hawking", "Maxwell"],
        answer: "Hawking",
      },
      {
        question: "Which term describes black hole growth?",
        options: ["Accretion", "Diffusion", "Transpiration", "Inflation"],
        answer: "Accretion",
      },
      {
        question: "Which space object can orbit a black hole?",
        options: ["Planet", "Star", "Both", "None"],
        answer: "Both",
      },
      {
        question: "A black hole can be formed by the collapse of a?",
        options: ["Planet", "Massive star", "Asteroid", "Cloud"],
        answer: "Massive star",
      },
      {
        question:
          "Which galaxy contains a supermassive black hole at its center?",
        options: ["Milky Way", "Andromeda", "Both", "Neither"],
        answer: "Both",
      },
      {
        question: "What does 'event horizon' literally mean?",
        options: [
          "Danger line",
          "Boundary of no return",
          "Center point",
          "Light barrier",
        ],
        answer: "Boundary of no return",
      },
      {
        question: "What happens to matter falling into a black hole?",
        options: [
          "It bounces back",
          "It orbits forever",
          "It is crushed",
          "It evaporates",
        ],
        answer: "It is crushed",
      },
      {
        question: "The speed of light near a black hole is?",
        options: ["Faster", "Slower", "Constant locally", "Zero"],
        answer: "Constant locally",
      },
      {
        question: "What is theoretical radiation from black holes?",
        options: ["Hawking Radiation", "Solar Wind", "Cosmic Rays", "Aurora"],
        answer: "Hawking Radiation",
      },
      {
        question: "Which shape describes an accretion disk?",
        options: ["Circular disk", "Cube", "Cylinder", "Sphere"],
        answer: "Circular disk",
      },
      {
        question: "What is the primary ingredient of a black hole?",
        options: ["Matter", "Energy", "Space", "Time"],
        answer: "Matter",
      },
      {
        question: "Black holes are part of which field of physics?",
        options: ["Classical", "Quantum", "Relativity", "Thermodynamics"],
        answer: "Relativity",
      },
      {
        question:
          "What is the name of the law that describes black hole mechanics?",
        options: [
          "Planck's law",
          "Ohm's law",
          "Black hole thermodynamics",
          "Hooke's law",
        ],
        answer: "Black hole thermodynamics",
      },
      {
        question: "Which color do black holes appear in images?",
        options: ["Black", "Yellow", "Purple", "Red"],
        answer: "Black",
      },
      {
        question: "What is the region just outside the event horizon?",
        options: ["Photon sphere", "Core", "Disk", "Boundary"],
        answer: "Photon sphere",
      },
      {
        question: "Which galaxy is the black hole M87* located in?",
        options: ["Milky Way", "Andromeda", "Messier 87", "Triangulum"],
        answer: "Messier 87",
      },
      {
        question: "Black hole science helps us test which theory?",
        options: [
          "Newtonian gravity",
          "Quantum mechanics",
          "General relativity",
          "Electrodynamics",
        ],
        answer: "General relativity",
      },
      {
        question: "Which instrument observed the first black hole shadow?",
        options: [
          "Hubble Telescope",
          "Event Horizon Telescope",
          "James Webb",
          "Spitzer",
        ],
        answer: "Event Horizon Telescope",
      },
      {
        question: "What is a rotating black hole called?",
        options: ["Schwarzschild", "Kerr", "Reissner–Nordström", "Einstein"],
        answer: "Kerr",
      },
      {
        question: "Which quantity measures black hole spin?",
        options: ["Mass", "Charge", "Angular momentum", "Temperature"],
        answer: "Angular momentum",
      },
      {
        question: "What is the term for the black hole's temperature?",
        options: ["Kelvin", "Hawking temperature", "Celsius", "Fahrenheit"],
        answer: "Hawking temperature",
      },
      {
        question: "The black hole mass is measured in units of?",
        options: ["Kilograms", "Solar masses", "Meters", "Seconds"],
        answer: "Solar masses",
      },
      {
        question: "What is the effect of tidal forces near a black hole?",
        options: ["Compression", "Stretching", "Heating", "Cooling"],
        answer: "Stretching",
      },
      {
        question: "Which wavelength can reveal black hole jets?",
        options: ["Radio", "Visible", "Infrared", "Ultraviolet"],
        answer: "Radio",
      },
      {
        question: "What is the name of the nearby black hole binary system?",
        options: ["Cygnus X-1", "Vela X-1", "Orion X-1", "Sirius X-1"],
        answer: "Cygnus X-1",
      },
      {
        question:
          "Which phenomenon occurs when matter heats up around a black hole?",
        options: ["Solar flare", "X-ray emission", "Tsunami", "Aurora"],
        answer: "X-ray emission",
      },
      {
        question: "Black Hole Sample Question 41?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Black Hole Sample Question 42?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Black Hole Sample Question 43?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Black Hole Sample Question 44?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Black Hole Sample Question 45?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Black Hole Sample Question 46?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Black Hole Sample Question 47?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Black Hole Sample Question 48?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Black Hole Sample Question 49?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Black Hole Sample Question 50?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
    ],
  },
  {
    id: "history",
    name: "Indian History",
    description:
      "50 Indian history questions about freedom movement, rulers, and modern India.",
    image:
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80",
    questions: [
      {
        question: "Who gave the slogan 'Quit India'?",
        options: [
          "Mahatma Gandhi",
          "Jawaharlal Nehru",
          "Subhas Chandra Bose",
          "Sardar Patel",
        ],
        answer: "Mahatma Gandhi",
      },
      {
        question: "In which year did India gain independence?",
        options: ["1947", "1950", "1945", "1946"],
        answer: "1947",
      },
      {
        question: "Who was the first Prime Minister of India?",
        options: [
          "Mahatma Gandhi",
          "Jawaharlal Nehru",
          "Lal Bahadur Shastri",
          "Indira Gandhi",
        ],
        answer: "Jawaharlal Nehru",
      },
      {
        question: "The Non-Cooperation Movement was launched in which year?",
        options: ["1920", "1930", "1942", "1919"],
        answer: "1920",
      },
      {
        question:
          "Which act gave Indians the right to vote in provincial elections?",
        options: [
          "Government of India Act 1919",
          "Government of India Act 1935",
          "Indian Independence Act 1947",
          "Montagu-Chelmsford Reforms",
        ],
        answer: "Government of India Act 1919",
      },
      {
        question: "Who founded the Indian National Congress?",
        options: [
          "Bal Gangadhar Tilak",
          "A.O. Hume",
          "Gopal Krishna Gokhale",
          "Bipin Chandra Pal",
        ],
        answer: "A.O. Hume",
      },
      {
        question: "Which movement was launched in 1942?",
        options: [
          "Swadeshi Movement",
          "Quit India Movement",
          "Civil Disobedience Movement",
          "Non-Cooperation Movement",
        ],
        answer: "Quit India Movement",
      },
      {
        question: "Who was the Viceroy at the time of partition?",
        options: [
          "Lord Mountbatten",
          "Lord Wavell",
          "Lord Irwin",
          "Lord Curzon",
        ],
        answer: "Lord Mountbatten",
      },
      {
        question: "Which battle ended Mughal power in India?",
        options: [
          "Battle of Plassey",
          "Battle of Buxar",
          "Battle of Panipat",
          "Battle of Talikota",
        ],
        answer: "Battle of Buxar",
      },
      {
        question: "Who wrote the 'Discovery of India'?",
        options: [
          "Jawaharlal Nehru",
          "Mahatma Gandhi",
          "B.R. Ambedkar",
          "Subhas Chandra Bose",
        ],
        answer: "Jawaharlal Nehru",
      },
      {
        question: "Which dynasty built the Konark Sun Temple?",
        options: ["Cholas", "Pallavas", "Gajapatis", "Guptas"],
        answer: "Gajapatis",
      },
      {
        question: "Who was the first Governor-General of independent India?",
        options: [
          "Jawaharlal Nehru",
          "C. Rajagopalachari",
          "Lord Mountbatten",
          "Rajendra Prasad",
        ],
        answer: "C. Rajagopalachari",
      },
      {
        question: "What was the main aim of the Swadeshi Movement?",
        options: [
          "Boycott foreign goods",
          "Support British goods",
          "Increase taxes",
          "Build railways",
        ],
        answer: "Boycott foreign goods",
      },
      {
        question: "Which year did the Salt March begin?",
        options: ["1920", "1930", "1942", "1947"],
        answer: "1930",
      },
      {
        question: "Who was known as the 'Uncrowned King of India'?",
        options: [
          "Mahatma Gandhi",
          "Jawaharlal Nehru",
          "Subhas Chandra Bose",
          "Sardar Patel",
        ],
        answer: "Mahatma Gandhi",
      },
      {
        question: "Which scheme was part of the Swadeshi movement?",
        options: ["Khadi", "Railways", "Postal service", "Cinema"],
        answer: "Khadi",
      },
      {
        question: "Who founded the Swaraj Party?",
        options: ["Motilal Nehru", "Sardar Patel", "Gandhi", "Nehru"],
        answer: "Motilal Nehru",
      },
      {
        question: "Which region did Emperor Ashoka rule?",
        options: ["Magadha", "Mysore", "Punjab", "Kerala"],
        answer: "Magadha",
      },
      {
        question: "Which ancient university was in Takshashila?",
        options: ["Nalanda", "Takshashila", "Vikramshila", "Nalanda"],
        answer: "Takshashila",
      },
      {
        question: "Who constructed the Qutub Minar?",
        options: [
          "Qutb-ud-din Aibak",
          "Alauddin Khilji",
          "Shah Jahan",
          "Aurangzeb",
        ],
        answer: "Qutb-ud-din Aibak",
      },
      {
        question: "Which Indian emperor embraced Buddhism?",
        options: ["Chandragupta Maurya", "Ashoka", "Samudragupta", "Harsha"],
        answer: "Ashoka",
      },
      {
        question: "The battle of Plassey was fought in which year?",
        options: ["1757", "1764", "1748", "1776"],
        answer: "1757",
      },
      {
        question: "Who led the Dandi March?",
        options: [
          "Mahatma Gandhi",
          "Jawaharlal Nehru",
          "Sardar Patel",
          "Subhas Chandra Bose",
        ],
        answer: "Mahatma Gandhi",
      },
      {
        question: "Which tax was protested in the Salt Satyagraha?",
        options: ["Income tax", "Salt tax", "Land tax", "Trade tax"],
        answer: "Salt tax",
      },
      {
        question: "Who wrote the book 'Why I am an Atheist'?",
        options: ["Periyar", "B.R. Ambedkar", "Jawaharlal Nehru", "Gandhi"],
        answer: "B.R. Ambedkar",
      },
      {
        question: "Which movement demanded Swaraj within one year?",
        options: [
          "Quit India",
          "Non-Cooperation",
          "Civil Disobedience",
          "Home Rule",
        ],
        answer: "Quit India",
      },
      {
        question: "Who was the first Muslim ruler of Delhi?",
        options: [
          "Qutb-ud-din Aibak",
          "Iltutmish",
          "Alauddin Khilji",
          "Muhammad Ghori",
        ],
        answer: "Qutb-ud-din Aibak",
      },
      {
        question: "Which reformer started the Brahmo Samaj?",
        options: [
          "Raja Ram Mohan Roy",
          "Dayananda Saraswati",
          "Swami Vivekananda",
          "Gandhi",
        ],
        answer: "Raja Ram Mohan Roy",
      },
      {
        question: "The Indigo Revolt took place in which year?",
        options: ["1859", "1905", "1942", "1919"],
        answer: "1859",
      },
      {
        question: "Who sounded the 'Tryst with Destiny' speech?",
        options: ["Nehru", "Gandhi", "Jinnah", "Sardar Patel"],
        answer: "Nehru",
      },
      {
        question: "Which province did the Jallianwala Bagh massacre occur in?",
        options: ["Punjab", "Bengal", "Madras", "UP"],
        answer: "Punjab",
      },
      {
        question: "Who founded the Arya Samaj?",
        options: [
          "Swami Vivekananda",
          "Dayananda Saraswati",
          "Raja Ram Mohan Roy",
          "Gandhi",
        ],
        answer: "Dayananda Saraswati",
      },
      {
        question: "Which queen fought against the British in Jhansi?",
        options: [
          "Rani Laxmibai",
          "Begum Hazrat Mahal",
          "Rani of Sirmur",
          "Ahilyabai Holkar",
        ],
        answer: "Rani Laxmibai",
      },
      {
        question: "What was the capital of the Mughal Empire under Akbar?",
        options: ["Delhi", "Agra", "Fatehpur Sikri", "Lahore"],
        answer: "Fatehpur Sikri",
      },
      {
        question: "Which empire is known for rock-cut caves at Ajanta?",
        options: ["Gupta", "Satavahana", "Maurya", "Chola"],
        answer: "Satavahana",
      },
      {
        question: "Who wrote 'Annihilation of Caste'?",
        options: [
          "B.R. Ambedkar",
          "Jawaharlal Nehru",
          "Mahatma Gandhi",
          "Subhas Chandra Bose",
        ],
        answer: "B.R. Ambedkar",
      },
      {
        question: "Which Indian leader formed the Forward Bloc?",
        options: ["Nehru", "Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
        answer: "Subhas Chandra Bose",
      },
      {
        question: "Which movement emphasized Swadeshi and boycott?",
        options: [
          "Swadeshi movement",
          "Quit India movement",
          "Civil Disobedience movement",
          "Non-Cooperation movement",
        ],
        answer: "Swadeshi movement",
      },
      {
        question: "History Sample Question 41?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "History Sample Question 42?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "History Sample Question 43?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "History Sample Question 44?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "History Sample Question 45?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "History Sample Question 46?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "History Sample Question 47?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "History Sample Question 48?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "History Sample Question 49?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "History Sample Question 50?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
    ],
  },
  {
    id: "geography",
    name: "Indian Geography",
    description:
      "50 Indian geography questions about landforms, rivers, states, and climate.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    questions: [
      {
        question: "Which is the longest river in India?",
        options: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        answer: "Ganga",
      },
      {
        question: "Which is the highest mountain in India?",
        options: ["K2", "Kanchenjunga", "Nanda Devi", "Mount Everest"],
        answer: "Kanchenjunga",
      },
      {
        question: "Which state is known as the Land of Rising Sun?",
        options: ["Assam", "Arunachal Pradesh", "Manipur", "Nagaland"],
        answer: "Arunachal Pradesh",
      },
      {
        question: "The Thar Desert is mainly located in which state?",
        options: ["Rajasthan", "Gujarat", "Punjab", "Haryana"],
        answer: "Rajasthan",
      },
      {
        question: "Which plateau is called the Roof of India?",
        options: ["Chota Nagpur", "Deccan", "Tibetan", "Malwa"],
        answer: "Tibetan",
      },
      {
        question: "Which sea is west of India?",
        options: [
          "Bay of Bengal",
          "Arabian Sea",
          "Indian Ocean",
          "Laccadive Sea",
        ],
        answer: "Arabian Sea",
      },
      {
        question: "Which mountains separate India from China?",
        options: ["Western Ghats", "Eastern Ghats", "Himalayas", "Vindhyas"],
        answer: "Himalayas",
      },
      {
        question: "Which river is called the Sorrow of Bihar?",
        options: ["Ganga", "Kosi", "Yamuna", "Narmada"],
        answer: "Kosi",
      },
      {
        question: "Which lake is the largest freshwater lake in India?",
        options: ["Vembanad", "Dal", "Wular", "Sambhar"],
        answer: "Wular",
      },
      {
        question: "Which state has the largest area in India?",
        options: [
          "Madhya Pradesh",
          "Rajasthan",
          "Maharashtra",
          "Uttar Pradesh",
        ],
        answer: "Rajasthan",
      },
      {
        question: "Which river flows through the Grand Canyon?",
        options: ["Colorado", "Narmada", "Ganga", "Indus"],
        answer: "Colorado",
      },
      {
        question: "Which island group is part of India?",
        options: ["Galapagos", "Andaman and Nicobar", "Canary", "Azores"],
        answer: "Andaman and Nicobar",
      },
      {
        question: "Which range is called the Eastern Ghats?",
        options: ["Aravalli", "Vindhya", "Nilgiri", "Arakan"],
        answer: "Nilgiri",
      },
      {
        question: "Which desert is located in Gujarat?",
        options: ["Thar", "Great Indian", "Deccan", "Rann of Kutch"],
        answer: "Rann of Kutch",
      },
      {
        question:
          "The Western Coastal Plains are between the Arabian Sea and which mountains?",
        options: ["Western Ghats", "Eastern Ghats", "Himalayas", "Satpura"],
        answer: "Western Ghats",
      },
      {
        question: "Which climate zone covers most of India?",
        options: ["Tropical", "Temperate", "Arctic", "Mediterranean"],
        answer: "Tropical",
      },
      {
        question:
          "Which river forms the boundary between India and Bangladesh?",
        options: ["Brahmaputra", "Ganges", "Teesta", "Shyok"],
        answer: "Teesta",
      },
      {
        question: "Which state has the capital at Kolkata?",
        options: ["West Bengal", "Bihar", "Odisha", "Assam"],
        answer: "West Bengal",
      },
      {
        question: "Which is the largest state by population in India?",
        options: ["Maharashtra", "Uttar Pradesh", "Bihar", "West Bengal"],
        answer: "Uttar Pradesh",
      },
      {
        question: "Which city is the capital of Tamil Nadu?",
        options: ["Chennai", "Bengaluru", "Hyderabad", "Pune"],
        answer: "Chennai",
      },
      {
        question: "Which river is sacred to Hindus?",
        options: ["Yamuna", "Ganga", "Narmada", "Godavari"],
        answer: "Ganga",
      },
      {
        question: "What is the coastal plain along the Bay of Bengal called?",
        options: [
          "Coromandel Coast",
          "Konkan Coast",
          "Malabar Coast",
          "Kathiawar",
        ],
        answer: "Coromandel Coast",
      },
      {
        question: "Which state is known for the Sundarbans?",
        options: ["West Bengal", "Orissa", "Andhra Pradesh", "Kerala"],
        answer: "West Bengal",
      },
      {
        question: "Which mountain range is in central India?",
        options: ["Vindhya", "Himalayas", "Aravalli", "Nilgiri"],
        answer: "Vindhya",
      },
      {
        question: "Which river flows westward?",
        options: ["Ganga", "Yamuna", "Narmada", "Sutlej"],
        answer: "Narmada",
      },
      {
        question: "What is the capital of Uttarakhand?",
        options: ["Dehradun", "Shimla", "Ranchi", "Bhopal"],
        answer: "Dehradun",
      },
      {
        question: "Which is the southernmost point of mainland India?",
        options: ["Kanyakumari", "Rameswaram", "Pondicherry", "Nagapattinam"],
        answer: "Kanyakumari",
      },
      {
        question: "Which state is the largest producer of rice in India?",
        options: ["West Bengal", "Punjab", "Andhra Pradesh", "Uttar Pradesh"],
        answer: "West Bengal",
      },
      {
        question: "Which mountain range lies along the west coast?",
        options: ["Western Ghats", "Eastern Ghats", "Himalayas", "Satpura"],
        answer: "Western Ghats",
      },
      {
        question: "Which plateau is known for diamond mines?",
        options: ["Deccan", "Chota Nagpur", "Malwa", "Bundelkhand"],
        answer: "Chota Nagpur",
      },
      {
        question: "Which lake is saltwater and famous in Gujarat?",
        options: ["Sambhar", "Wular", "Dal", "Vembanad"],
        answer: "Sambhar",
      },
      {
        question: "Which state is known as the 'Spice Garden of India'?",
        options: ["Kerala", "Punjab", "Haryana", "Rajasthan"],
        answer: "Kerala",
      },
      {
        question: "Which river is India’s second longest?",
        options: ["Yamuna", "Godavari", "Brahmaputra", "Narmada"],
        answer: "Godavari",
      },
      {
        question: "Which state contains the Thar Desert?",
        options: ["Rajasthan", "Madhya Pradesh", "Gujarat", "Haryana"],
        answer: "Rajasthan",
      },
      {
        question: "Which city is called the Silicon Valley of India?",
        options: ["Chennai", "Mumbai", "Bengaluru", "Hyderabad"],
        answer: "Bengaluru",
      },
      {
        question: "Which river is part of the Indo-Gangetic Plain?",
        options: ["Tapti", "Narmada", "Ganga", "Krishna"],
        answer: "Ganga",
      },
      {
        question: "Which national park is famous for tigers?",
        options: ["Gir", "Jim Corbett", "Kaziranga", "Sundarbans"],
        answer: "Jim Corbett",
      },
      {
        question: "Which state has the highest coastline?",
        options: ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Odisha"],
        answer: "Gujarat",
      },
      {
        question: "Which is the largest river island in India?",
        options: ["Majuli", "Sundarbans", "Jambudwip", "Bhitarkanika"],
        answer: "Majuli",
      },
      {
        question: "Which mountain range lies in eastern India?",
        options: ["Eastern Ghats", "Western Ghats", "Himalayas", "Aravalli"],
        answer: "Eastern Ghats",
      },
      {
        question: "Which state is home to the Thar Desert?",
        options: ["Rajasthan", "Punjab", "Uttar Pradesh", "Bihar"],
        answer: "Rajasthan",
      },
      {
        question: "Geography Sample Question 41?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Geography Sample Question 42?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Geography Sample Question 43?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Geography Sample Question 44?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Geography Sample Question 45?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Geography Sample Question 46?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Geography Sample Question 47?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Geography Sample Question 48?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Geography Sample Question 49?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Geography Sample Question 50?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
    ],
  },
  {
    id: "science",
    name: "General Science",
    description:
      "50 general science questions about physics, chemistry, biology, and environment.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    questions: [
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O",
      },
      {
        question: "Which organ pumps blood in the human body?",
        options: ["Lungs", "Brain", "Heart", "Kidney"],
        answer: "Heart",
      },
      {
        question: "What gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
        answer: "Carbon dioxide",
      },
      {
        question: "Which force pulls objects toward Earth?",
        options: ["Magnetism", "Gravity", "Friction", "Electricity"],
        answer: "Gravity",
      },
      {
        question: "What is the boiling point of water at sea level?",
        options: ["90°C", "95°C", "100°C", "105°C"],
        answer: "100°C",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars",
      },
      {
        question: "What is the state of matter of ice?",
        options: ["Gas", "Liquid", "Solid", "Plasma"],
        answer: "Solid",
      },
      {
        question: "Which gas is most abundant in Earth’s atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "Nitrogen",
      },
      {
        question: "What do bees produce?",
        options: ["Milk", "Honey", "Silk", "Wax"],
        answer: "Honey",
      },
      {
        question: "What is the centre of an atom called?",
        options: ["Electron", "Proton", "Nucleus", "Neutron"],
        answer: "Nucleus",
      },
      {
        question: "Which blood group is known as the universal donor?",
        options: ["A", "B", "AB", "O"],
        answer: "O",
      },
      {
        question: "What is the main gas released by plants?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],
        answer: "Oxygen",
      },
      {
        question: "What is the unit of electrical resistance?",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        answer: "Ohm",
      },
      {
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "30,000 km/s", "3,000 km/s"],
        answer: "300,000 km/s",
      },
      {
        question: "Which instrument measures temperature?",
        options: ["Barometer", "Thermometer", "Hygrometer", "Ammeter"],
        answer: "Thermometer",
      },
      {
        question: "What is the chemical formula of table salt?",
        options: ["NaCl", "KCl", "CO2", "H2O"],
        answer: "NaCl",
      },
      {
        question: "Which planet has rings?",
        options: ["Mars", "Earth", "Saturn", "Mercury"],
        answer: "Saturn",
      },
      {
        question: "What process do plants use to make food?",
        options: [
          "Respiration",
          "Digestion",
          "Photosynthesis",
          "Transpiration",
        ],
        answer: "Photosynthesis",
      },
      {
        question: "Which organ is responsible for digestion?",
        options: ["Heart", "Lungs", "Stomach", "Kidneys"],
        answer: "Stomach",
      },
      {
        question: "What is the smallest unit of life?",
        options: ["Atom", "Molecule", "Cell", "Organ"],
        answer: "Cell",
      },
      {
        question: "Which vitamin is produced by sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        answer: "Vitamin D",
      },
      {
        question: "What type of energy is stored in food?",
        options: ["Kinetic", "Potential", "Chemical", "Thermal"],
        answer: "Chemical",
      },
      {
        question: "Which part of the plant makes seeds?",
        options: ["Leaf", "Stem", "Flower", "Root"],
        answer: "Flower",
      },
      {
        question: "What is the process of water moving through plants?",
        options: [
          "Photosynthesis",
          "Transpiration",
          "Respiration",
          "Digestion",
        ],
        answer: "Transpiration",
      },
      {
        question: "What is the pH of pure water?",
        options: ["7", "5", "2", "10"],
        answer: "7",
      },
      {
        question: "What is the chemical symbol for oxygen?",
        options: ["O", "Ox", "Og", "O2"],
        answer: "O",
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Mercury", "Venus", "Earth", "Mars"],
        answer: "Mercury",
      },
      {
        question: "What do plants need to perform photosynthesis?",
        options: [
          "Water, carbon dioxide, and sunlight",
          "Water, oxygen, and sunlight",
          "Nitrogen, oxygen, sunlight",
          "Soil, air, water",
        ],
        answer: "Water, carbon dioxide, and sunlight",
      },
      {
        question: "Which gas do animals exhale?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "Carbon dioxide",
      },
      {
        question: "What is the center of a flower called?",
        options: ["Petal", "Stem", "Pistil", "Leaf"],
        answer: "Pistil",
      },
      {
        question: "What is the common name for sodium chloride?",
        options: ["Sugar", "Table salt", "Baking soda", "Vinegar"],
        answer: "Table salt",
      },
      {
        question:
          "Which natural resource is used to generate electricity in hydropower plants?",
        options: ["Wind", "Sunlight", "Water", "Coal"],
        answer: "Water",
      },
      {
        question: "Which organ removes waste from the blood?",
        options: ["Liver", "Kidney", "Heart", "Lungs"],
        answer: "Kidney",
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Gd", "Go"],
        answer: "Au",
      },
      {
        question: "What type of bond shares electrons between atoms?",
        options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
        answer: "Covalent",
      },
      {
        question: "Which planet is known as the Gas Giant?",
        options: ["Earth", "Mars", "Jupiter", "Mercury"],
        answer: "Jupiter",
      },
      {
        question: "What is the natural satellite of Earth?",
        options: ["Sun", "Mars", "Moon", "Venus"],
        answer: "Moon",
      },
      {
        question: "Which part of the eye detects light?",
        options: ["Cornea", "Lens", "Retina", "Iris"],
        answer: "Retina",
      },
      {
        question: "What is the study of living organisms called?",
        options: ["Chemistry", "Physics", "Biology", "Geology"],
        answer: "Biology",
      },
      {
        question: "Which planet is known for its rings?",
        options: ["Saturn", "Uranus", "Venus", "Earth"],
        answer: "Saturn",
      },
      {
        question: "What is the process of breaking down food into energy?",
        options: ["Photosynthesis", "Digestion", "Circulation", "Respiration"],
        answer: "Digestion",
      },
      {
        question: "Which is a renewable energy source?",
        options: ["Coal", "Petroleum", "Wind", "Natural gas"],
        answer: "Wind",
      },
      {
        question: "What does DNA stand for?",
        options: [
          "Deoxyribonucleic acid",
          "Deoxyribogenetic acid",
          "Dioxyribonucleic acid",
          "Deoxyribose nucleic acid",
        ],
        answer: "Deoxyribonucleic acid",
      },
      {
        question: "Which is a simple machine?",
        options: ["Car", "Lever", "Computer", "Telephone"],
        answer: "Lever",
      },
      {
        question: "Which organ helps with breathing?",
        options: ["Heart", "Lungs", "Kidneys", "Liver"],
        answer: "Lungs",
      },
      {
        question: "Science Sample Question 41?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Science Sample Question 42?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Science Sample Question 43?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Science Sample Question 44?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Science Sample Question 45?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Science Sample Question 46?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Science Sample Question 47?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Science Sample Question 48?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Science Sample Question 49?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
      {
        question: "Science Sample Question 50?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A",
      },
    ],
  },
];

export default topics;
