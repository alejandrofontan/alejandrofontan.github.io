
const pubCode = {
  "vslamlab": {
    "link": "https://github.com/VSLAM-LAB/VSLAM-LAB",
    "short_url": "/VSLAM-LAB/VSLAM-LAB",
    "image": "VSLAM-LAB-Git.png", "title": "VSLAM-LAB – A Unified Framework for Visual SLAM Benchmarking",
    "description": "An open-source, reproducible framework for benchmarking Visual SLAM baselines and datasets — all in one place.",
    "stars": "> 350 stars on GitHub"
  },
  "bommietoolkit": {
    "link": "https://github.com/BommieToolkit/BommieToolkit",
    "short_url": "/BommieToolkit/BommieToolkit",
    "image": "BommieToolkit-Git.png", "title": "BommieToolkit: End-to-End 3D Reconstruction Tools for Coral Reefs",
    "description": "End-to-end toolkit for 3D reconstruction of coral reefs using a GoPro stereo rig, Kalibr for calibration, COLMAP for structure-from-motion, and Nerfstudio for Gaussian Splatting–based scene representation."
  }, 
  "anyfeature": {
    "link": "https://github.com/alejandrofontan/AnyFeature-VSLAM",
    "short_url": "/alejandrofontan/AnyFeature-VSLAM",
    "image": "AnyFeature-VSLAM-Git.png", "title": "AnyFeature-VSLAM: Automating the Usage of Any Chosen Feature into Visual SLAM",
    "description": "An automated visual SLAM library for Monocular cameras capable of switching to a chosen type of feature effortlessly and without manual intervention."
  },  
  
  // "spatial_hash": {
  //   "link": "https://github.com/MIT-SPARK/Spatial-Hash",
  //   "short_url": "/MIT-SPARK/Spatial-Hash",
  //   "image": "../news/spatial_hash.png", "title": "Spatial-Hash",
  //   "description": "A lighweight C++ library for spatial data structures based on voxel block hashing."
  // },
  // "clio": {
  //   "link": "https://github.com/MIT-SPARK/Clio",
  //   "short_url": "/MIT-SPARK/Clio",
  //   "image": "clio.jpg", "title": "Clio",
  //   "description": "A novel approach for building task-driven 3D scene graphs in real-time with embedded open-set semantics. We draw inspiration from the classical Information Bottleneck principle to form task-relevant clusters of object primitives given a set of natural language tasks — such as ''Read brown textbook'' — and by clustering the scene into task-relevant semantic regions such as “Kitchenette” or “Workspace”."
  // },
  // "lhtp": {
  //   "link": "https://github.com/MIT-SPARK/LP2",
  //   "short_url": "/MIT-SPARK/LP2",
  //   "image": "lhtp.gif", "title": "Language-based Probabilistic Long-term Prediction (LP<sup>2</sup>)",
  //   "description": "An approach for long-term (up to 60s) prediction of human trajectories in complex environments, where humans may interact with the scene. We use 3D Dynamic Scene Graphs to represent important concepts in an environment a human might interact with. Large language models (LLM) allow to predict a tree of possible future interactions. We then translate these into a probabilistic spatio-temporal distribution using Continuous-time Markov-chains (CTMC)."
  // },
  // "khronos": {
  //   "link": "https://github.com/MIT-SPARK/Khronos",
  //   "short_url": "/MIT-SPARK/Khronos",
  //   "image": "khronos.png", "title": "Khronos",
  //   "description": "A unified approach for Spatio-temporal Metric-Semantic SLAM (SMS). Khronos reasons about both short-term dynamics (e.g. people moving around the robot) and long-term changes (e.g. items being rearranged) in the environment. It jointly optimizes for motion estimation, change detection, the robot rtrajectory, and dense semantic reconstruction. The resulting spatio-temporal map represents the scene and its evolution at every time step and is icnrementally built during online robot operation."
  // },
  // "panopticmapping": {
  //   "link": "https://github.com/ethz-asl/panoptic_mapping",
  //   "short_url": "ethz-asl/panoptic_mapping",
  //   "image": "pan.png", "title": "Panoptic Mapping",
  //   "description": "A general framework for semantic volumetric mapping. We provide, among other, a submap-based approach that leverages panoptic scene understanding towards adaptive spatio-temporally consistent volumetric mapping,	as well as regular, monolithic semantic mapping. Multi-resolution 3D reconstruction, active and inactive panoptic submaps for temporal consistency, online change detection, and more."
  // },
  // "dynablox": {
  //   "link": "https://github.com/ethz-asl/dynablox",
  //   "short_url": "ethz-asl/dynablox",
  //   "image": "dynablox.gif", "title": "Dynablox",
  //   "description": "An online volumetric mapping-based framework for real-time detection of diverse dynamic objects in complex environments. Our framework is agnostic to object and environment type and can operate in real-time. We provide an efficient integration with voxblox with only minimal computation overhead."
  // },
  // "neuralblox": {
  //   "link": "https://github.com/ethz-asl/neuralblox",
  //   "short_url": "ethz-asl/neuralblox",
  //   "image": "neuralblox.png", "title": "NeuralBlox",
  //   "description": "Incremental volumetric mapping for robot planning based on implicit neural representations. We provide our framework for online fusion of neural representations, and code to train extend different models. Main implementation by Stefan Lionar."
  // },
  // "3dvsg": {
  //   "link": "https://github.com/ethz-asl/3d_vsg",
  //   "short_url": "ethz-asl/3d_vsg",
  //   "image": "3d_vsg.png", "title": "3D Variable Scene Graphs (3D VSGs)",
  //   "description": "Long-term semantic scene change prediction using 3D Variable Scene Graphs (3D VSGs). Implementation of our model DeltaVSG, including data, training, inference, and evaluation tools. Main implementation by Samuel Looper."
  // },
  // "active3d": {
  //   "link": "https://github.com/ethz-asl/mav_active_3d_planning",
  //   "short_url": "ethz-asl/mav_active_3d_planning",
  //   "image": "active_3d.gif", "title": "MAV Active 3D Planning",
  //   "description": "A modular framework for online informative path planner (IPP) design. We provide a modular framework for creating, evaluating and employing primarily sampling based, receding horizon algorithms that optimize a gain while minimizing a cost. Online-IPP for Exploration, 3D Reconstruction, and more."
  // },
  // "glocal": {
  //   "link": "https://github.com/ethz-asl/glocal_exploration",
  //   "short_url": "ethz-asl/glocal_exploration",
  //   "image": "glocal.gif", "title": "GLocal Exploration",
  //   "description": "A modular system for efficient Global and Local exploration planning and mapping in large scale environments, accounting for past pose corrections due to state estimation drift. In a submap-based approach, multiple layers of both mapping and planning are combined to achieve robustness to drift while maintaining efficiency in large scale environments."
  // },
  // "cvaeplanning": {
  //   "link": "https://github.com/ethz-asl/cvae_exploration_planning",
  //   "short_url": "ethz-asl/cvae_exploration_planning",
  //   "image": "cvae_planning.gif", "title": "CVAE Exploration Planning",
  //   "description": "A new approach to local exploration planning by combining learning and the sampling-based planning paradigm! This package provides an open-source implementation of the simulator, datasets, models, and planners presented in our paper on learning sampling-based local exploration."
  // }, 
  // "eal": {
  //   "link": "https://github.com/ethz-asl/active_learning_for_segmentation",
  //   "short_url": "ethz-asl/active_learning_for_segmentation",
  //   "image": "eal.gif", "title": "Active Learning For Segmentation",
  //   "description": "Active Learning For Segmentation</a>. A complete pipeline for fully autonomous domain adaptation of semantic segmentation models. we provide simulation, uncertainty estmiation, uncertainty-aware semantic mapping, and informative path planning modules to observe high uncertainty areas and autonomously improve the semantic segmentation over time. Main implementation by René Zurbrügg."
  // },
  // "ssc": {
  //   "link": "https://github.com/ethz-asl/ssc_exploration",
  //   "short_url": "ethz-asl/ssc_exploration",
  //   "image": "ssc.gif", "title": "SC Explorer",
  //   "description": "Incremental fusion of 3D scene completion for efficient exploration mapping and planning. Multi-layer map integration of completions with the measured data for safe, efficient, and interpretable exploration."
  // },
  // "unrealairsim": {
  //   "link": "https://github.com/ethz-asl/unreal_airsim",
  //   "short_url": "ethz-asl/unreal_airsim",
  //   "image": "airsim.png", "title": "Unreal AirSim",
  //   "description": "This repo contains simulation tools and utilities to perform realistic simulations based on Unreal Engine (UE4), using microsoft AirSim as interface to UE4."
  // },
  // "unrealcv": {
  //   "link": "https://github.com/ethz-asl/unreal_cv_ros",
  //   "short_url": "ethz-asl/unreal_cv_ros",
  //   "image": "unrealcv.png", "title": "Unreal CV ROS",
  //   "description": "A package to allow ROS based simulation of a MAV equipped with a 3D-reconstruction sensor. The simulation is performed inside an Unreal Engine 4 (UE4) game. The node-game communcation is carried out utilizing the UnrealCV computer vision plugin for UE4."
  // },
  // "configutilities_new": {
  //   "link": "https://github.com/MIT-SPARK/config_utilities",
  //   "short_url": "MIT-SPARK/config_utilities",
  //   "image": "config_utilities.png", "title": "Config Utilities",
  //   "description": "A completely new and revamped set of utility tools to make working with config structs for C++ libraries more uniform, readable, and convenient."
  // },
  // "configutilities": {
  //   "link": "https://github.com/ethz-asl/config_utilities",
  //   "short_url": "ethz-asl/config_utilities",
  //   "image": "config.jpg", "title": "Config Utilities (legacy)",
  //   "description": "Utility tools to make working with config structs for ROS (and non-ROS) C++ libraries more uniform, readable, and convenient."
  // },
  // "pheno": {
  //   "link": "https://github.com/ethz-asl/plant_stress_phenotyping",
  //   "short_url": "ethz-asl/plant_stress_phenotyping",
  //   "image": "pheno.jpg", "title": "Plant Stress Phenotyping",
  //   "description": "Computer Vision-based crop phenotyping routines."
  // }

}

