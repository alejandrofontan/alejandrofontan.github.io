const journalVenues = {
  "RAL": "IEEE Robotics and Automation Letters (RA-L)",
  "Postdocket": "The Postdocket",
  "PlantMethods": "Plant Methods"
}

const pubJournals = [
  // {
  //   "authors": ["F. Rockenbauer", "J. Lim", "M. Müller", "R. Siegwart", "L. Schmid"],
  //   "title": "Traversing Mars: Cooperative Informative Path Planning to Efficiently Navigate Unknown Scenes",
  //   "venue": journalVenues["RAL"],
  //   "thumbimage": "MarsIPP.jpg",
  //   "thumblink": "https://github.com/ethz-asl/scouting-ipp",
  //   "year": "2025",
  //   "pages": "vol. 10, no. 2, pp. 1776 - 1783",
  //   "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/10783051" },{ "name": "ArXiv", "link": "https://arxiv.org/abs/2406.05313" }, {"name": "Code", "link": "https://github.com/ethz-asl/scouting-ipp"}]
  // },
  // {
  //   "authors": ["N. Gorlo", "L. Schmid", "L. Carlone"],
  //   "title": "Long-Term Human Trajectory Prediction using 3D Dynamic Scene Graphs",
  //   "venue": journalVenues["RAL"],
  //   "thumbimage": "LP2.jpg",
  //   "thumblink": "https://github.com/MIT-SPARK/LP2",
  //   "year": "2024",
  //   "pages": "vol. 9, no. 12, pp. 10978 - 10985",
  //   "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/10720207" },{ "name": "ArXiv", "link": "https://arxiv.org/abs/2405.00552" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=mzumT3T0dYw" }, { "name": "Code", "link": "https://github.com/MIT-SPARK/LP2" }]
  // },
  // {
  //   "authors": ["D. Maggio", "Y. Chang", "N. Hughes", "M. Trang", "D. Griffith", "C. Dougherty", "E. Cristofalo", "L. Schmid", "L. Carlone"],
  //   "title": "Clio: Real-time Task-Driven Open-Set 3D Scene Graphs",
  //   "venue": journalVenues["RAL"],
  //   "thumbimage": "Clio.jpg",
  //   "thumblink": "https://github.com/MIT-SPARK/Clio",
  //   "year": "2024",
  //   "pages": "vol. 9, no. 10, pp. 8921-8928",
  //   "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/10659066" }, { "name": "ArXiv", "link": "http://arxiv.org/abs/2404.13696" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=m-HJO10qhSQ" }, { "name": "Code", "link": "https://github.com/MIT-SPARK/Clio" }, { "name": "Media", "link": "https://news.mit.edu/2024/helping-robots-focus-on-objects-that-matter-0930" }]
  // },
  // {
  //   "authors": ["A. Ahmad", "I. Arora", "S. Cataldi", "J. Cottet", "E. El Khoury", "B. Gnangnon", "T. Kinder", "R. Lafer-Sousa", "M. Levinstein", "L. Majure", "L. Nguyen", "L. Schmid", "M. Smith", "E. Ventriglia", "S. Wang"],
  //   "title": "What Does It Take to Successfully Advocate for Postdoctoral Scholars?",
  //   "venue": journalVenues["Postdocket"],
  //   "thumbimage": "Postdocket.jpg",
  //   "thumblink": "https://www.nationalpostdoc.org/page/POSTDOCket_2201#section4",
  //   "year": "2024",
  //   "pages": "National Postdoctoral Association, vol. 22, no. 1",
  //   "links": [{ "name": "Journal", "link": "https://www.nationalpostdoc.org/page/POSTDOCket_2201#section4" }]
  // },
  // {
  //   "authors": ["L. Schmid", "O. Andersson", "A. Sulser", "P. Pfreundschuh", "R. Siegwart"],
  //   "title": "Dynablox: Real-time Detection of Diverse Dynamic Objects in Complex Environments",
  //   "venue": journalVenues["RAL"],
  //   "thumbimage": "Dynablox.jpg",
  //   "thumblink": "https://github.com/ethz-asl/dynablox",
  //   "year": "2023",
  //   "pages": "vol. 8, no. 10, pp. 6259-6266",
  //   "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/10218983" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2304.10049" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=NA13fRWlqRQ" }, { "name": "Code", "link": "https://github.com/ethz-asl/dynablox" } ]
  // },
  // {
  //   "authors": ["R. Zurbrugg", "H. Blum", "C. Cadena", "R. Siegwart", "L. Schmid"],
  //   "title": "Embodied Active Domain Adaptation for Semantic Segmentation via Informative Path Planning",
  //   "venue": journalVenues["RAL"],
  //   "thumbimage": "EAL.jpg",
  //   "thumblink": "https://github.com/ethz-asl/active_learning_for_segmentation",
  //   "year": "2022",
  //   "pages": " vol. 7, no. 4, pp. 8691-8698",
  //   "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/9816133" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2203.00549" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=FeFPEdZzT3w" }, { "name": "Code", "link": "https://github.com/ethz-asl/active_learning_for_segmentation" }]
  // },
  // {
  //   "authors": ["L. Schmid", "C. Ni", "Y. Zhong", "R. Siegwart", "O. Andersson"],
  //   "title": "Fast and Compute-efficient Sampling-based Local Exploration Planning via Distribution Learning",
  //   "venue": journalVenues["RAL"],
  //   "thumbimage": "CVAE_Exp.jpg",
  //   "thumblink": "https://github.com/ethz-asl/cvae_exploration_planning",
  //   "year": "2022",
  //   "pages": "vol. 7, no. 2, pp. 7810-7817",
  //   "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/9807401" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2202.13715" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=Hj5yI8VtlXk" }, { "name": "Code", "link": "https://github.com/ethz-asl/cvae_exploration_planning" }]
  // },
  // {
  //   "authors": ["L. Schmid", "V. Reijgwart", "L. Ott", "J. Nieto", "R. Siegwart", "C. Cadena"],
  //   "title": "A Unified Approach for Autonomous Volumetric Exploration of Large Scale Environments under Severe Odometry Drift",
  //   "venue": journalVenues["RAL"],
  //   "thumbimage": "GLocal.jpg",
  //   "thumblink": "https://github.com/ethz-asl/glocal_exploration",
  //   "year": "2021",
  //   "pages": "vol. 6, no. 3, pp. 4504-4511",
  //   "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/9387110" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2010.09859" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=WInjZvoCDCM" }, { "name": "Code", "link": "https://github.com/ethz-asl/glocal_exploration" }]
  // },
  // {
  //   "authors": ["L. Schmid", "M. Pantic", "R. Khanna", "L. Ott", "R. Siegwart", "J. Nieto"],
  //   "title": "An Efficient Sampling-based Method for Online Informative Path Planning in Unknown Environments",
  //   "venue": journalVenues["RAL"],
  //   "thumbimage": "Active3D.jpg",
  //   "thumblink": "https://github.com/ethz-asl/mav_active_3d_planning",
  //   "year": "2020",
  //   "pages": "vol. 5, no. 2, pp. 1500-1507",
  //   "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/8968434" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/1909.09548" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=lEadqJ1_8Do" }, { "name": "Code", "link": "https://github.com/ethz-asl/mav_active_3d_planning" }]
  // },
  // {
  //   "authors": ["R. Khanna", "L. Schmid", "A. Walter", "J. Nieto", "R. Siegwart", "F. Liebisch"],
  //   "title": "A Spatio Temporal Spectral Framework for plant Stress Phenotyping",
  //   "venue": journalVenues["PlantMethods"],
  //   "thumbimage": "Plants.jpg",
  //   "thumblink": "https://github.com/ethz-asl/plant_stress_phenotyping",
  //   "year": "2019",
  //   "pages": "vol. 15, no. 1, pp. 1-18",
  //   "links": [{ "name": "Journal", "link": "https://plantmethods.biomedcentral.com/articles/10.1186/s13007-019-0398-8" }, { "name": "Code", "link": "https://github.com/ethz-asl/plant_stress_phenotyping" }]
  // }
]

