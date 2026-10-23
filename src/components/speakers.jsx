import { useState } from "react"
import david from "../plenaryspeakersImages/David.png"
import ralph from "../plenaryspeakersImages/Ralph.png"
import amit from "../plenaryspeakersImages/Amit.png"
import huinan from "../plenaryspeakersImages/Huinan.png"
import roger from "../plenaryspeakersImages/Roger.png"
import sanjeev from "../plenaryspeakersImages/Sanjeev.png"
import ashok from "../plenaryspeakersImages/Ashok.png"
import dhirendra from "../plenaryspeakersImages/Dhirendra.png"
import jitendra from "../plenaryspeakersImages/Jitendra.png"
import ketul from "../plenaryspeakersImages/Ketul.png"
import ashutosh from "../plenaryspeakersImages/Ashutosh.png"
import bikramjit from "../plenaryspeakersImages/Bikramjit.png"
import chandan from "../plenaryspeakersImages/Chandan.png"
import prashant from "../plenaryspeakersImages/Prashant.png"
import gilson from "../plenaryspeakersImages/Gilson.png"
import savyasachi from "../plenaryspeakersImages/Savyasachi.png"
import vinoy from "../plenaryspeakersImages/Vinoy.png"
import Daniel from "../plenaryspeakersImages/Daniel.png"

import anamika from "../internationalspeakersImages/Anamika.png"
import binata from "../internationalspeakersImages/Binata.png"
import deepankar from "../internationalspeakersImages/Deepankar.png"
import finosh from "../internationalspeakersImages/Finosh.png"
// import manishekhar from "../internationalspeakersImages/manishekhar.png"
import mrinal from "../internationalspeakersImages/Mrinal.png"
import pranav from "../internationalspeakersImages/Pranav.png"
import sriya from "../internationalspeakersImages/Sriya.png"
import Sumrita from "../internationalspeakersImages/Sumrita.png"
import Deepak2 from "../internationalspeakersImages/Deepak.png"
import Syed from "../internationalspeakersImages/Syed.png"


import abhijit from "../nationalspeakersImages/Abhijit.png"
import anil from "../nationalspeakersImages/Anil.png"
import anjali from "../nationalspeakersImages/Anjali.png"
import atul from "../nationalspeakersImages/Atul.png"
import bhanu from "../nationalspeakersImages/Bhanu.png"
import bhavuk from "../nationalspeakersImages/Bhavuk.png"
import biman from "../nationalspeakersImages/Biman.png"
import bishnu from "../nationalspeakersImages/Bishnu.png"
import dipti from "../nationalspeakersImages/Dipti.png"
import kaushik from "../nationalspeakersImages/Kaushik.png"
import manish from "../nationalspeakersImages/Manish.png"
import namrata from "../nationalspeakersImages/Namrata.png"
import neetu from "../nationalspeakersImages/Neetu.png"
import rehan from "../nationalspeakersImages/Rehan.png"
import sarvdeep from "../nationalspeakersImages/Sarvdeep.png"
import sujata from "../nationalspeakersImages/Sujata.png"
import vikas from "../nationalspeakersImages/Vikas.png"
import vishal from "../nationalspeakersImages/Vishal.png"
// import pravin from "../nationalspeakersImages/pravin.png"
import Keshav from "../nationalspeakersImages/Keshav.png"
import Kanagaraj from "../nationalspeakersImages/Kanagaraj.png"
import Falguni from "../nationalspeakersImages/Falguni.png"
import Shalmoli from "../nationalspeakersImages/Shalmoli.png"
import Debrupa from "../nationalspeakersImages/Debrupa.png"
import Harikrishna from "../nationalspeakersImages/Harikrishna.png"
import Subha from "../nationalspeakersImages/Subha.png"
import Dinesh from "../nationalspeakersImages/Dinesh.png"
import Kulbhushan from "../nationalspeakersImages/Kulbhushan.png"
import Akshay from "../nationalspeakersImages/Akshay.png"
import Ambarish from "../nationalspeakersImages/Ambarish.png"
import Sujeet from "../nationalspeakersImages/Sujeet.png"
import Saroj from "../nationalspeakersImages/Saroj.png"
import Rekha from "../nationalspeakersImages/Rekha.png"
import Sunita from "../nationalspeakersImages/Sunita.png"
import Sheetal from "../nationalspeakersImages/Sheetal.png"
import Danish from "../nationalspeakersImages/Danish.png"
import Deepak from "../nationalspeakersImages/Deepak.png"
import Pankaj from "../nationalspeakersImages/Pankaj.png"
import Ajay from "../nationalspeakersImages/Ajay.png"
import Jayanta from "../nationalspeakersImages/Jayanta.png"
import Govinda from "../nationalspeakersImages/Govinda.png"
import Keerti from "../nationalspeakersImages/Keerti.png"
import Apurba from "../nationalspeakersImages/Apurba.png"
import Arnab from "../nationalspeakersImages/Apurba.png"
import Mishra from "../nationalspeakersImages/Misra.png"
import Deepak1 from "../nationalspeakersImages/Deepak1.png"
import Raviraj from "../nationalspeakersImages/Raviraj.png"
import Rajesh from "../nationalspeakersImages/Rajesh.png"
import Kavin from "../nationalspeakersImages/Kavin.png"
import Bikram from "../nationalspeakersImages/Bikram.png"
import Sitanshu from "../nationalspeakersImages/Sitanshu.png"
import Love from "../nationalspeakersImages/Love.png"
import Savneet from "../nationalspeakersImages/Savneet.png"
import Dhiraj from "../nationalspeakersImages/Dhiraj.png"
import Arpan from "../nationalspeakersImages/Arpan.png"
import Indranil from "../nationalspeakersImages/Indranil.png"
import Kashif from "../nationalspeakersImages/Kashif.png"
import Sabareeswaran from "../nationalspeakersImages/Sabareeswaran.png"
import Sumit from "../nationalspeakersImages/Sumit.png"
import Piyali from "../nationalspeakersImages/Piyali.png"
import Raghavan from "../nationalspeakersImages/Raghavan.png"
import Ramya from "../nationalspeakersImages/Ramya.png"
import Deepthy from "../nationalspeakersImages/Deepthy.png"
import Pradip from "../nationalspeakersImages/Pradip.png"
import Bharath from "../nationalspeakersImages/Bharath.png"
import Bikesh from "../nationalspeakersImages/Bikesh.png"
import Suresh from "../nationalspeakersImages/Suresh.png"
import SujeetN from "../nationalspeakersImages/SujeetN.png"
import SaurabhG from "../nationalspeakersImages/SaurabhG.png"
import Naveen from "../nationalspeakersImages/Naveen.png"
import Mamoni from "../nationalspeakersImages/Mamoni.png"
import Shiny from "../nationalspeakersImages/Shiny.png"
import Rishikesh from "../nationalspeakersImages/Rishikesh.png"
import Souptick from "../nationalspeakersImages/Souptick.png"
import Arvind from "../nationalspeakersImages/Arvind.png"
import Parvaiz from "../nationalspeakersImages/Parvaiz.png"
import Abdul from "../nationalspeakersImages/Abdul.png"
import Shirsendu from "../nationalspeakersImages/Shirsendu.png"
import Suveen from "../nationalspeakersImages/Suveen.png"
import Madhu from "../nationalspeakersImages/Madhu.png"
import Subhadeep from "../nationalspeakersImages/Subhadeep.png"
import Prodyut from "../nationalspeakersImages/Prodyut.png"
import Cota from "../nationalspeakersImages/Cota.png"
import Vivek from "../nationalspeakersImages/Vivek.png"
import Manju from "../nationalspeakersImages/Manju.png"
import Saurabh from "../nationalspeakersImages/Saurabh.png"
import Pavan from "../nationalspeakersImages/Pavan.png"
import Pallab from "../nationalspeakersImages/Pallab.png"
import Arindam from "../nationalspeakersImages/Arindam.png"
import Prasoon from "../nationalspeakersImages/Prasoon.png"
import Sneha from "../nationalspeakersImages/Sneha.png"
import Emon from "../nationalspeakersImages/Emon.png"
import Himanshu from "../nationalspeakersImages/Himansu.png"
import Chinmaya from "../nationalspeakersImages/Chinmaya.png"
import Bidyut from "../nationalspeakersImages/Bidyut.png"
import Dipankar from "../nationalspeakersImages/Dipankar.png"
import Kanagaraj1 from "../nationalspeakersImages/Kanagaraj1.png"
import Gorachand from "../nationalspeakersImages/Gorachand.png"
import Saba from "../nationalspeakersImages/Saba.png"
import Priya from "../nationalspeakersImages/Priya.png"
import Vinay from "../nationalspeakersImages/Vinay.png"
import Deba from "../nationalspeakersImages/Deba.png"
import Shyam from "../nationalspeakersImages/Shyam.png"
import Asish from "../nationalspeakersImages/Asish.png"
import Marinmoy from "../nationalspeakersImages/Marinmoy.png"
import AjayK from "../nationalspeakersImages/AjayK.png"
import Mukesh from "../nationalspeakersImages/Mukesh.png"
import Shalini from "../nationalspeakersImages/Shalini.png"
import ShyamS from "../nationalspeakersImages/ShyamS.png"
import MukeshD from "../nationalspeakersImages/MukeshD.png"

const speakers = {
  plenary: [
    {
      name: "Prof. David B. Burr",
      title: "Professor",
      affiliation: "Indiana University, USA",
      image: david,
      category: "Keynote",
    },
    {
      name: "Prof. (Dr.) Ralph Müller",
      title: "Professor",
      affiliation: "ETH Zurich, Switzerland",
      image: ralph,
      category: "Keynote",
    },
    {
      name: "Prof. Amit Bandyopadhyay",
      title: "Chair, Professor",
      affiliation: "Washington State University, USA",
      image: amit,
      category: "Keynote",
    },
    {
      name: "Prof. Huinan Hannah Liu",
      title: "Professor",
      affiliation: "University of California at Riverside (UCR), USA",
      image: huinan,
      category: "Keynote",
    },
    {
      name: "Prof. Roger Jagdish Narayan",
      title: "Distinguished Professor of BME",
      affiliation: "NC State University, USA",
      image: roger,
      category: "Keynote",
    },
    {
      name: "Prof. Sanjeev Shroff",
      title: "Chair of Bioengineering",
      affiliation: "University of Pittsburgh, USA",
      image: sanjeev,
      category: "Keynote",
    },
    {
      name: "Prof. Ashok Kumar ",
      title: "Professor, President (SBAOI)",
      affiliation: "IIT Kanpur, India ",
      image: ashok,
      category: "Keynote",
    },
    {
      name: "Prof. Dhirendra S Katti",
      title: "Professor, President (STERMI), Director",
      affiliation: "IIT Goa, India",
      image: dhirendra,
      category: "Keynote",
    },
    {
      name: "Dr. Jitendra Sharma",
      title: "Professor",
      affiliation: "Managing Director, Founder, and CEO of AMTZ, India",
      image: jitendra,
      category: "Keynote",
    },
    {
      name: "Prof. Ketul C. Popat",
      title: "Chair , Professor",
      affiliation: "George Mason University, USA",
      image: ketul,
      category: "Keynote",
    },
    {
      name: "Prof. Ashutosh Khandha",
      title: "Professor ",
      affiliation: "University of Delaware, USAA",
      image: ashutosh,
      category: "Keynote",
    },
    {
      name: "Prof. Bikramjit Basu",
      title: " Professor",
      affiliation: "Director, CSIR-CGCRI",
      image: bikramjit,
      category: "Keynote",
    },
    {
      name: "Prof. Chandan K. Sen",
      title: "Professor, Asso. Vice Chancellor",
      affiliation: "University of Pittsburgh, USA",
      image: chandan,
      category: "Keynote",
    },
    {
      name: "Dr. Prashant N. Kumta",
      title: "Chair Professor",
      affiliation: "University of Pittsburgh, USA",
      image: prashant,
      category: "Keynote",
    },
    {
      name: "Prof. Gilson Khang",
      title: "Professor",
      affiliation: "Jeonbuk National University, Korea",
      image: gilson,
      category: "Keynote",
    },
    {
      name: "Prof. Savyasachi C. Thakkar",
      title: "Chair of Orthopaedic Surgery",
      affiliation: "Johns Hopkins University, USA",
      image: savyasachi,
      category: "Keynote",
    },
    {
      name: "Prof. Vinoy Thomas",
      title: "Professor",
      affiliation: "University of Alabama , USA",
      image: vinoy,
      category: "Keynote",
    },
    {
      name: "A/Prof. Daniel E Heath",
      title: " Associate Professor",
      affiliation: "The University of Melbourne, Australia",
      image: Daniel,
      category: "Keynote",
    },
  ],

  international: [
    {
      name: "Dr. Deepankar DeMazumder",
      title: "Researcher",
      affiliation: "University of Pittsburgh, USA",
      image: deepankar,
      category: "International",
    },
    {
      name: "Prof. Anamika Prasad",
      title: "Professor",
      affiliation: "Florida International University, USA",
      image: anamika,
      category: "International",
    },
    // {
    //   name: "Prof. Manishkumar Kumar",
    //   title: "Professor",
    //   affiliation: "University of Pittsburgh, USA",
    //   image: manishekhar,
    //   category: "International",
    // },
    {
      name: "Prof. Pranav Soman",
      title: "Professor",
      affiliation: "Syracuse University, USA",
      image: pranav,
      category: "International",
    },
    {
      name: "Prof. Finosh G Thankam",
      title: "Researcher",
      affiliation: "University of Health Sciences, USA",
      image: finosh,
      category: "International",
    },
    {
      name: "Dr. Binata Joddar",
      title: "Assistant Professor",
      affiliation: "Oregon State University, USA",
      image: binata,
      category: "International",
    },
    {
      name: "Prof. Sriya Srinivasan",
      title: "Professor",
      affiliation: "Kempier Institute, USA",
      image: sriya,
      category: "International",
    },
    {
      name: "Dr. Mrinal Kanti Musib",
      title: "Professor",
      affiliation: "NUS, Singapore",
      image: mrinal,
      category: "International",
    },
    {
      name: "Dr. Sumrita Bhat",
      title: "CEO & Founder at Conlis ",
      affiliation: "Global Inc., Canada",
      image: Sumrita,
      category: "International",
    },
    {
      name: "Dr. Deepak Raina",
      title: "Lund University Sweden",
      affiliation: "",
      image: Deepak2,
      category: "International",
    },
    {
      name: "Dr. Syed Asif S A",
      title: "MD, Industron Technical Services",
      affiliation: " Pvt. Ltd, USA & India ",
      image: Syed,
      category: "International",
    },
  ],

  national: [
    {
      name: "Prof. Rehan Haq",
      title: "Head, Ortho",
      affiliation: "AIIMS Bhopa",
      image: rehan,
      category: "National",
    },
    {
      name: "Prof. Bishnu Prasad Patro",
      title: "Head, Ortho",
      affiliation: "AIIMS Bhubaneswar",
      image: bishnu,
      category: "National",
    },
    {
      name: "Prof. Bhavuk Garg",
      title: "Professor Ortho",
      affiliation: "AIIMS, New Delhi",
      image: bhavuk,
      category: "National",
    },
    {
      name: "Col. Dr. Manish Prasad",
      title: "Prof. & Senior Adviser",
      affiliation: "Orthopaedics, Hospital Delhi",
      image: manish,
      category: "National",
    },
    {
      name: "Prof. Anil K Bhat",
      title: "Dean, Prof. & Head",
      affiliation: "KMC, Manipal",
      image: anil,
      category: "National",
    },
    {
      name: "Dr. Vikas Jain",
      title: "Founder",
      affiliation: "Aarogyam 3D Design",
      image: vikas,
      category: "National",
    },
    {
      name: "Prof. Kaushik Chatterjee",
      title: "Professor & Chair, Bioengineering",
      affiliation: "IISc Bengaluru",
      image: kaushik,
      category: "National",
    },
    {
      name: "Prof. Neetu Singh",
      title: "Head, Biomedical",
      affiliation: "IIT Delhi",
      image: neetu,
      category: "National",
    },
    {
      name: "Prof. Biman B. Mandal",
      title: "Professor",
      affiliation: "IIT, Guwahati",
      image: biman,
      category: "National",
    },
    {
      name: "Dr. Dipti Kakkar Thukral",
      title: "ANRF, DST, Delhi",
      affiliation: "",
      image: dipti,
      category: "National",
    },
    {
      name: "Dr. Bhanu Duggal",
      title: "Professor & HOD, Cardiology",
      affiliation: "AIIMS, Rishikesh",
      image: bhanu,
      category: "National",
    },
    {
      name: "Prof. Namrata Gundiah",
      title: "Professor, Mechanical Engg.",
      affiliation: "IISc Bengaluru",
      image: namrata,
      category: "National",
    },
    {
      name: "Prof. Sujata Mohanty",
      title: "Professor, Stem Cell",
      affiliation: "AIIMS Delhi",
      image: sujata,
      category: "National",
    },
    {
      name: "Prof. Atul Parashar",
      title: "Prof. & Head, Plastic Surgery",
      affiliation: "PGIMER, Chandigarh",
      image: atul,
      category: "National",
    },
    {
      name: "Prof. Vishal Kumar",
      title: "Additional Prof. Ortho.",
      affiliation: "PGIMER, Chandigarh",
      image: vishal,
      category: "National",
    },
    {
      name: "Prof. Sarvdeep Singh Dhatt",
      title: "Professor, Ortho.",
      affiliation: "PGIMER Chandigarh",
      image: sarvdeep,
      category: "National",
    },
    {
      name: "Prof. Anjali Aggarwal",
      title: "Prof. & Head, Anatomy",
      affiliation: "PGIMER, Chandigarh",
      image: anjali,
      category: "National",
    },
    {
      name: "Prof. Abhijit  Majumder",
      title: "Professor, Chemical Engg.",
      affiliation: "IIT Bombay",
      image: abhijit,
      category: "National",
    },
    // {
    //   name: "Prof. Pravin Salunke",
    //   title: "Professor, Neurosurgery",
    //   affiliation: "PGIMER, Chandigarh",
    //   image: pravin,
    //   category: "National",
    // },
    {
      name: "Prof. Kumar Keshav",
      title: "Orthopaedic",
      affiliation: "SGPGIMS, Lucknow",
      image: Keshav,
      category: "National",
    },
    {
      name: "Prof. Kanagaraj  Subramani",
      title: "Professor, Mechanical Eng.",
      affiliation: "IIT Guwahati",
      image: Kanagaraj,
      category: "National",
    },
    {
      name: "Prof. Falguni Pati",
      title: "Prof. Head, Biomed",
      affiliation: "IIT Hyderabad",
      image: Falguni,
      category: "National",
    },
    {
      name: "Prof. Shalmoli Bhattacharyya",
      title: "Head, Biophysics",
      affiliation: "PGIMER, Chandigarh",
      image: Shalmoli,
      category: "National",
    },
    {
      name: "Prof. Debrupa Lahiri",
      title: "Metallurgical & Material Engg.",
      affiliation: "IIT Roorkee",
      image: Debrupa,
      category: "National",
    },

    {
      name: "Dr. P.R. Harikrishna Varma",
      title: "Head, Biomedical Technology Wing",
      affiliation: "SCTIMST, Trivandrum",
      image: Harikrishna,
      category: "National",
    },
    {
      name: "Prof. Subha Narayan Rath",
      title: "Prof. Biomedical Engg.",
      affiliation: "IIT Hyderabad",
      image: Subha,
      category: "National",
    },
    {
      name: "Dr. Dinesh Kalyanasundaram",
      title: "Associate Prof. Biomedical",
      affiliation: "IIT Delhi",
      image: Dinesh,
      category: "National",
    },

    {
      name: "Prof. Kulbhushan Tikoo",
      title: "Professor & Dean",
      affiliation: "NIPER Mohali",
      image: Kulbhushan,
      category: "National",
    },
    {
      name: "Dr. Akshay Srivastava",
      title: "Associate Prof.,  Medical Device",
      affiliation: "Niper Ahmedabad",
      image: Akshay,
      category: "National",
    },
    {
      name: "Prof. Ambarish Kunwar",
      title: "Prof., Biosciences & Bioengineering",
      affiliation: " IIT Bombay",
      image: Ambarish,
      category: "National",
    },

    {
      name: "Prof. Amit Dutt",
      title: "Prof. Genetics",
      affiliation: "University of Delhi",
      image: amit,
      category: "National",
    },
    {
      name: "Prof. Sujeet Kumar Sinha",
      title: "Professor, Mechanical Engg.",
      affiliation: "IIT Delhi",
      image: Sujeet,
      category: "National",
    },
    {
      name: "Dr. Saroj Kumar",
      title: "Add. Prof. Biophysics",
      affiliation: "AIIMS, New Delhi",
      image: Saroj,
      category: "National",
    },

    {
      name: "Dr. Rekha Lalwani ",
      title: "Professor Anatomy",
      affiliation: "AIIMS, Bhopal",
      image: Rekha,
      category: "National",
    },
    {
      name: "Prof. Sunita Athavale",
      title: "Professor, Anatomy",
      affiliation: "AIIMS, Bhopal",
      image: Sunita,
      category: "National",
    },
    {
      name: "Dr. Sheetal Kotgirwar",
      title: "Professor, Anatomy",
      affiliation: "AIIMS, Bhopal ",
      image: Sheetal,
      category: "National",
    },
    {
      name: "Dr. Danish Javed",
      title: "SMO, AYUSH",
      affiliation: "AIIMS Bhopal",
      image: Danish,
      category: "National",
    },
    {
      name: "Prof. K. K. Deepak",
      title: "Visiting Prof., Biomedical Engg.",
      affiliation: "IIT Delhi",
      image: Deepak,
      category: "National",
    },
    {
      name: "Dr. Pankaj K. Sharma",
      title: "Asso. Prof., Ortho",
      affiliation: "AIIMS Bathinda",
      image: Pankaj,
      category: "National",
    },
    {
      name: "Prof. Ajay Tijore",
      title: "Asst. Prof., Bioengineering",
      affiliation: "IISc Bangalore",
      image: Ajay,
      category: "National",
    },
    {
      name: "Dr. Jayanta Bhattacharyya",
      title: "Asso. Prof. Biomedical",
      affiliation: "IIT Delhi",
      image: Jayanta,
      category: "National",
    },
    {
      name: "Dr. Govinda Kapusetti ",
      title: "Asso. Prof., Medical Device ",
      affiliation: "NIPER Kolkata",
      image: Govinda,
      category: "National",
    },
    {
      name: "Dr. Keerti Jain",
      title: "Asso. Prof., Pharmaceuticals",
      affiliation: "NIPER Raebareli",
      image: Keerti,
      category: "National",
    },
    {
      name: "Dr. Apurba Patra",
      title: "Asso. Prof., Anatomy",
      affiliation: "AIIMS Bathinda",
      image: Apurba,
      category: "National",
    },
    {
      name: "Dr. Arnab Chanda",
      title: "Asso. Prof., Biomedical",
      affiliation: "IIT Delhi",
      image: Arnab,
      category: "National",
    },
    {
      name: "Dr. S K Misra",
      title: "Asso. Prof. BSBE",
      affiliation: "IIT Kanpur",
      image: Mishra,
      category: "National",
    },
    {
      name: "Dr. Deepak Neradi",
      title: "Asst. Prof. Ortho",
      affiliation: "AIIMS, Bhubaneswar",
      image: Deepak1,
      category: "National",
    },
    {
      name: "Dr. Raviraj Vankayala",
      title: "Asso. Prof., Bioscience & Bioengg.",
      affiliation: "IIT Jodhpur",
      image: Raviraj,
      category: "National",
    },
    {
      name: "Dr. Rajesh Ghosh",
      title: "Asso. Prof., Mechanical ",
      affiliation: "IIT Mandi",
      image: Rajesh,
      category: "National",
    },
    {
      name: "Prof. Kavin Khatri",
      title: "Ortho, PGIMER Sangrur",
      affiliation: "",
      image: Kavin,
      category: "National",
    },
    {
      name: "Dr. Bikram Keshari Kar",
      title: "Asso. Prof., Ortho",
      affiliation: "AIIMS Raipur",
      image: Bikram,
      category: "National",
    },
    {
      name: "Dr. Sitanshu Barik",
      title: "Asso. Prof. Ortho",
      affiliation: "AIIMS Nagpur",
      image: Sitanshu,
      category: "National",
    },
    {
      name: "Dr. Love Kapoor",
      title: "Asst. Prof., Orthopaedics",
      affiliation: "AIIMS Delhi",
      image: Love,
      category: "National",
    },
    {
      name: "Dr. Savneet Kaur",
      title: "Asso. Prof., Molecular &",
      affiliation: "Cellular Medicine, ILBS, Delhi",
      image: Savneet,
      category: "National",
    },
    {
      name: "Dr. Dhiraj D. Bhatia ",
      title: "Asso. Prof., Biological Science ",
      affiliation: "IIT Gandhinagar",
      image: Dhiraj,
      category: "National",
    },
    {
      name: "Dr. Arpan Haldar",
      title: "Asso. Prof., Anatomy",
      affiliation: "AIIMS Deoghar",
      image: Arpan,
      category: "National",
    },
    {
      name: "Dr. Indranil Banerjee",
      title: "Asso. Prof., BSBE",
      affiliation: "IIT Jodhpur ",
      image: Indranil,
      category: "National",
    },
    {
      name: "Dr. Kashif Akhtar Ahmed",
      title: "Asst. Prof., Ortho",
      affiliation: "AIIMS Guwahati ",
      image: Kashif,
      category: "National",
    },
    {
      name: "Dr. Sabareeswaran A.",
      title: "Scientist-G",
      affiliation: "SCTIMST, Trivandrum",
      image: Sabareeswaran,
      category: "National",
    },
    {
      name: "Dr. Sumit Murab",
      title: "Asst. Prof., BSBE",
      affiliation: "IIT Mandi",
      image: Sumit,
      category: "National",
    },
    {
      name: "Dr. Piyali Basak",
      title: "Asso. Prof., Biosciences & Bioengg.",
      affiliation: "Jadavpur University, Kolkata",
      image: Piyali,
      category: "National",
    },
    {
      name: "Prof. S. Raghavan",
      title: "Prof. (HAG)Retd.",
      affiliation: "NIT Trichy",
      image: Raghavan,
      category: "National",
    },
    {
      name: "Dr. Ramya Rmdoss",
      title: "Professor & Head",
      affiliation: "Saveetha University, Chennai",
      image: Ramya,
      category: "National",
    },
    {
      name: "Dr. Deepthy Menon",
      title: "Professor",
      affiliation: "AIMS, Kochi",
      image: Deepthy,
      category: "National",
    },
    {
      name: "Prof. Pradip Paik",
      title: "Professor, Asso. Dean,",
      affiliation: "IIT BHU",
      image: Pradip,
      category: "National",
    },
    {
      name: "Dr. Bharath Raja Guru",
      title: "Professor",
      affiliation: "MIT, Manipal ",
      image: Bharath,
      category: "National",
    },
    {
      name: "Dr. Bikesh Kumar Singh",
      title: "Asso. Professor, NIT Raipur",
      affiliation: "",
      image: Bikesh,
      category: "National",
    },
    {
      name: "Dr. Suresh PS",
      title: "Asso. Professor, NIT Calicut",
      affiliation: "",
      image: Suresh,
      category: "National",
    },
    {
      name: "Dr. Sujeet N Charugulla",
      title: "Cluster Head Medical Affairs",
      affiliation: "Dr. Reddy’s Lab",
      image: Sujeet,
      category: "National",
    },
    {
      name: "Dr. Saurabh Gupta",
      title: "Asso.  Professor, NIT Raipur",
      affiliation: "",
      image: SaurabhG,
      category: "National",
    },
    {
      name: "Dr. Naveen Kumar Singh",
      title: "Asst. Prof. Biomedical Engg.",
      affiliation: "IIT Delhi",
      image: Naveen,
      category: "National",
    },
    {
      name: "Dr. Mamoni Dash",
      title: "Scientist, ILS Bhubaneswar",
      affiliation: "",
      image: Mamoni,
      category: "National",
    },
    {
      name: "Dr. Shiny Velayudhan",
      title: "Scientist – F, SCTIMST, Thiruvananthapuram",
      affiliation: "",
      image: Shiny,
      category: "National",
    },
    {
      name: "Dr. Rishikesh Pandey",
      title: "Asst. Prof. BSBE",
      affiliation: "IIT Roorkee",
      image: Rishikesh,
      category: "National",
    },
    {
      name: "Dr. Souptick Chanda ",
      title: "Asst. Prof., BSBE",
      affiliation: "IIT Guwahati",
      image: Souptick,
      category: "National",
    },
    {
      name: "Dr. Saroj Kumar",
      title: "Add. Prof. Biophysics",
      affiliation: "AIIMS, New Delhi",
      image: Saroj,
      category: "National",
    },
    {
      name: "Mr. Arvind Kumar Prajapati",
      title: "Scientist/Engineer 'D', ",
      affiliation: "SCTIMST, Thiruvananthapuram",
      image: Arvind,
      category: "National",
    },
    {
      name: "Dr. Parvaiz Ahmad Shiekh",
      title: "DST INSPIRE Faculty",
      affiliation: "IIT Delhi",
      image: Parvaiz,
      category: "National",
    },
    {
      name: "Dr. Abdul Rasheed P",
      title: "Ramalingaswami Fellow",
      affiliation: "IIT Palakkad",
      image: Abdul,
      category: "National",
    },
    {
      name: "Dr. Shirsendu Ghosh",
      title: "Asst. Professor, IIT Jammu",
      affiliation: "",
      image: Shirsendu,
      category: "National",
    },

    {
      name: "Prof. Suveen Kumar",
      title: "Asst. Professor",
      affiliation: "NIPER Ahmedabad",
      image: Suveen,
      category: "National",
    },
    {
      name: "Dr. Madhu Gupta",
      title: "Assistant professor",
      affiliation: "University of Lucknow",
      image: Madhu,
      category: "National",
    },
    {
      name: "Dr. Subhadeep Roy",
      title: "Asst. Professor, MRSB",
      affiliation: "BIT Mesra ,Ranchi",
      image: Subhadeep,
      category: "National",
    },
    {
      name: "Dr. Prodyut Dhar",
      title: "Asst. Prof., Biochemical",
      affiliation: "IIT BHU",
      image: Prodyut,
      category: "National",
    },
    {
      name: "Dr. Cota Navin Gupta ",
      title: "Asst. Prof., Bioscience & Bioengg.",
      affiliation: "IIT Guwahati",
      image: Cota,
      category: "National",
    },
    {
      name: "Dr. Vivek Verma",
      title: "Asst. Professor, IIT Patna",
      affiliation: "",
      image: Saroj,
      category: "National",
    },
    {
      name: "Dr. Manju S.",
      title: "Scientist ‘F”",
      affiliation: "SCTIMST, Trivandrum",
      image: Manju,
      category: "National",
    },
    {
      name: "Dr. Saurabh Kumar",
      title: "Assistant Professor",
      affiliation: "NIPER Guwahati",
      image: Saurabh,
      category: "National",
    },
    {
      name: "Dr. Pavan Girish Pandit",
      title: "Assistant Professor",
      affiliation: "NIT Surathkal",
      image: Pavan,
      category: "National",
    },
    {
      name: "Dr. Pallab Datta",
      title: "Assistant Professor",
      affiliation: "NIPER Kolkata ",
      image: Pallab,
      category: "National",
    },
    {
      name: "Dr. Arindam Bit ",
      title: "Asst. Professor , NIT Raipur",
      affiliation: "",
      image: Arindam,
      category: "National",
    },
    {
      name: "Dr. Prasoon Kumar",
      title: "Assistant Professor",
      affiliation: "NIT Rourkela",
      image: Prasoon,
      category: "National",
    },
    {
      name: "Dr. Sneha Singh",
      title: "Asst. Professor",
      affiliation: "BIT Mesra, Ranchi",
      image: Sneha,
      category: "National",
    },
    {
      name: "Dr. Emon Barua",
      title: "Assistant Professor",
      affiliation: "MANIT Bhopal",
      image: Emon,
      category: "National",
    },
    {
      name: "Dr. Himansu Sekhar Nanda",
      title: "Assistant Professor ",
      affiliation: "IIITDM-Jabalpur",
      image: Himanshu,
      category: "National",
    },
    {
      name: "Dr. Chinmaya Mahapatra",
      title: "Assistant Professor",
      affiliation: "NIT Raipur",
      image: Chinmaya,
      category: "National",
    },
    {
      name: "Dr. Bidyut Pal",
      title: "Assistant Professor",
      affiliation: "IIEST Shibpur",
      image: Bidyut,
      category: "National",
    },
    {
      name: "Dr. Dipankar Das",
      title: "Assistant Professor",
      affiliation: "NIPER, Mohali",
      image: Dipankar,
      category: "National",
    },
    {
      name: "Dr. P. Kanagaraj",
      title: "Assistant  Professor",
      affiliation: "SRM, Kattankulathur",
      image: Kanagaraj1,
      category: "National",
    },
    {
      name: "Dr. Gorachand Dutta",
      title: "Asst. Prof., Medical Science",
      affiliation: "IIT Kharagpur",
      image: Gorachand,
      category: "National",
    },
    {
      name: "Dr. Saba Naqvi",
      title: "Asst. Professor",
      affiliation: "NIPER Raebareli",
      image: Saba,
      category: "National",
    },
    {
      name: "Dr. Priya Vashisth",
      title: "Asst.  Professor, IIT Delhi",
      affiliation: "",
      image: Priya,
      category: "National",
    },
    {
      name: "Dr. Vinay Sharma",
      title: "Asst. Professor, IIT Jammu",
      affiliation: "",
      image: Vinay,
      category: "National",
    },
    {
      name: "Dr. Deba Prasad Dash",
      title: "Asst. Professor",
      affiliation: "TIET, Patiala",
      image: Deba,
      category: "National",
    },
    {
      name: "Prof. Shyam S. Sharma",
      title: "Professor & Head; Dept. of Pharmacology & Toxicology",
      affiliation: "NIPER, Mohali",
      image: ShyamS,
      category: "National",
    },
    {
      name: "Prof. Asish Pal",
      title: "Scientist-F (Professor) Principal Investigator",
      affiliation: "INST, Mohali",
      image: Asish,
      category: "National",
    },
    {
      name: "Dr. Marinmoy De",
      title: "Asso. Prof. Dept. of Organic Chemistry",
      affiliation: "IISC, Bengaluru",
      image: Marinmoy,
      category: "National",
    },
    {
      name: "Dr. Ajay Kumar Rajput",
      title: "Asso. Prof. Department of",
      affiliation: "Orthopedics, UPUMS, Saifai, UP",
      image: AjayK,
      category: "National",
    },
    {
      name: "Dr. Mukesh Dhanka",
      title: "Asso. Prof. Dept. of ",
      affiliation: "Biotechnology, NIT, Raipur",
      image: MukeshD,
      category: "National",
    },
    {
      name: "Dr. Shalini Mani",
      title: "Asso. Prof. Dept. of",
      affiliation: "Biotechnology,JIIT, Noida",
      image: Shalini,
      category: "National",
    },
    
  ],
}

export default function Speakers() {
  const [hovered, setHovered] = useState(null)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-800 selection:bg-indigo-200/60">

      <header className="text-center pt-20 pb-10">
          <span className="text-4xl lg:text-5xl font-serif">
            <span className="text-red-600">Spe</span>akers
          </span>
      </header>
      <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up pb-10"
          style={{ animationDelay: "0.2s" }}
        >
          Meet the distinguished leaders and experts guiding Bio-MANTHAN, a
          premier biomedicine research symposium at IIT Ropar
        </p>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(25px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="container mx-auto px-6 pb-24">
        <Section title="Plenary Speakers" gradient="from-indigo-600 to-blue-500">
          <Grid list={speakers.plenary} hovered={hovered} setHovered={setHovered} />
        </Section>

        <Section title="International Speakers" gradient="from-purple-500 to-pink-500">
          <Grid list={speakers.international} hovered={hovered} setHovered={setHovered} small />
        </Section>

        <Section title="National Speakers" gradient="from-orange-500 to-red-500">
          <Grid list={speakers.national} hovered={hovered} setHovered={setHovered} tiny />
        </Section>
      </div>
    </main>
  )
}

function Section({ title, gradient, children }) {
  return (
    <section className="mb-24 text-center">
      <h2 className={`text-3xl font-bold`}>
        {title}
      </h2>
      <div className="mx-auto w-28 h-[3px] rounded-full bg-gradient-to-r from-transparent via-slate-400/60 to-transparent my-6" />
      {children}
    </section>
  )
}

function Grid({ list, hovered, setHovered, small, tiny }) {
  return (
    <div className={`border py-10 px-10 rounded-2xl grid gap-6 ${tiny ? "md:grid-cols-4" : small ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
      {list.map((sp, i) => (
        <Card
          key={i}
          speaker={sp}
          index={i}
          active={hovered === i}
          setHovered={setHovered}
          delay={i * 0.1}
          size={tiny ? "tiny" : small ? "small" : "default"}
        />
      ))}
    </div>
  )
}

function Card({ speaker, index, active, setHovered, delay, size }) {
  const pad = size === "tiny" ? "p-3" : size === "small" ? "p-4" : "p-6"
  const img = size === "tiny" ? "w-28 h-28" : size === "small" ? "w-32 h-32" : "w-40 h-40"

  return (
    <div
      style={{ animation: `fadeInUp .55s ease-out ${delay}s both` }}
      className="border my-2 border-gray-400 mx-2  rounded-2xl group cursor-pointer"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
    >
      <div className={`rounded-2xl ${pad} border border-slate-200 bg-white/80 backdrop-blur-lg shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${active ? "shadow-indigo-400/30 scale-[1.04]" : ""}`}>

        <div className={`relative ${img} mx-auto mb-4`}>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-300 to-pink-300 blur-lg opacity-0 group-hover:opacity-70 transition duration-500"></div>
          <img src={speaker.image} alt={speaker.name} className="rounded-full w-full h-full object-cover border border-slate-200 group-hover:border-slate-300 transition-all group-hover:scale-105" />
        </div>

        <h3 className="font-semibold text-slate-800 text-lg mb-1 group-hover:text-indigo-600 transition-all">
          {speaker.name}
        </h3>

        <p className="text-sm text-slate-500 mb-1">
          {speaker.title}
        </p>

        <p className="text-xs text-slate-400 group-hover:text-slate-600 transition-all line-clamp-2">
          {speaker.affiliation}
        </p>
      </div>
    </div>
  )
}
