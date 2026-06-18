import type { EventData } from '@/types/event.types';

// Career Counselling Seminar 2026 — full data extracted from Events.tsx
export const careerSeminar2026: EventData = {
  id: 'career-seminar-2026',
  title: 'Career Counselling Seminar',
  subtitle: 'SATSANG VIHAR BHUBANESWAR',
  venue: 'Convention Hall, SOA Campus 2, Near SUM Hospital, Bhubaneswar',
  date: 'March 28, 2026',
  registrationStatus: 'closed',
  schedule: [
    {
      time: '09:00 AM – 10:00 AM',
      title: 'Registration & Orientation',
      description: 'Welcome of students and seminar overview, networking, Refreshment',
    },
    {
      time: '10:00 AM – 11:00 AM',
      title: 'Inaugural Session',
      description: 'Diya Prajwalan and Theme Song Dedicated to young Students',
    },
    {
      time: '11:00 AM – 01:00 PM',
      title: 'Career Counselling Session',
      subSpeakers: [
        {
          name: 'Mr. Surya Prakash Mahapatra',
          role: 'Global Head of AI Skilling, Wipro Ltd',
          topic: '"From career confusion to career clarity"',
        },
        {
          name: 'Dr. Sutanu Chakraborty',
          role: 'Professor, Dept. of Computer Science & Engineering, IIT Madras',
          topic: '"Y"our "Y"earning within: making the "Y" (WHY) matter"',
        },
        {
          name: 'Mr. Kalinga Keshari Rath',
          role: 'MD, EVOS Buildcon Pvt. Ltd.',
          topic: 'Entrepreneurship in youth generation',
        },
        {
          name: 'Dr. Jubilee Purkayastha',
          role: 'Scientist F & Joint Director, INMAS DRDO, Ministry of Defence, Govt. of India',
          topic: 'The philosophy of right livelihood: Career guidance for conscious Youth',
        },
      ],
      description: 'Interactive Q & A Session (Moderated discussion with all speakers)',
    },
    {
      time: '01:00 PM – 01:30 PM',
      title: 'Lunch Break',
      description: 'Take a break and enjoy lunch',
    },
    {
      time: '01:30 PM – 02:00 PM',
      title: 'Rhythm & Resonance',
      description:
        'Celebrating Harmony in Life, Purpose and Career Path: A Musical Reflection by Kamalakhya Parida, Bedashree Aparna Sahoo and Dipta. S Mohanty',
    },
  ],
  plenaryPanels: [
    {
      id: 'civil-defence',
      title: 'Civil, Staff & Defence Services',
      timeRange: '2:00 PM - 2:40 PM',
      theme: '"Uniform and Administration: Two paths, One Mission – Nation First"',
      moderator: {
        name: 'Dr. Jubilee Purkayastha',
        role: 'Scientist F & Joint Director, INMAS DRDO, Ministry of Defence, Govt. of India',
      },
      speakers: [
        { name: 'Lt. Raj Kumar Thakur', role: 'Armed Forces, Government of India' },
        { name: 'Mr. Shantanu Singh', role: 'IFS Officer, UPSC Civil Services, Govt of India' },
        { name: 'Mr. Pradyumna Mohapatra', role: 'IES, General Manager, ITS, BSNL, Balasore, Govt. of India' },
        { name: 'Mr. Purusottam Mishra', role: '(OAS) Assistant Collector, Govt. of Odisha' },
        { name: 'Er. Pratyush Kumar Pradhan', role: 'Superintending Engineer, Water Resource Department, Govt. of Odisha' },
        { name: 'Mr. Narasingha Jethi', role: 'IES, DDG, DD ODIA, Prasar Bharati, Govt of India' },
      ],
    },
    {
      id: 'higher-education',
      title: 'Higher Education & Research',
      timeRange: '2:45 PM - 3:25 PM',
      theme: '"The Research Practice Nexus: Aligning ourselves with Purpose"',
      moderator: {
        name: 'Dr. Sutanu Chakraborty',
        role: 'Professor, Dept. of Computer Science & Engineering, IIT Madras',
      },
      speakers: [
        { name: 'Dr. Pravakar Mohanty', role: "Scientist 'E' & Joint Director (R&D), Dept. of Science & Technology, Govt. of India" },
        { name: 'Mr. Sanchari Kundu', role: 'PhD Scholar, Virginia Tech USA' },
        { name: 'Dr. Sudhanshu Sekhar Sahoo', role: 'HOS, Mechanical Science, Associate Prof., OUTR' },
        { name: 'Dr. Abheek Ghosh', role: 'Postdoctoral Fellow, Oxford University' },
        { name: 'Dr. Bibhu Prasad Panda', role: 'Assistant Prof., SOA' },
      ],
    },
    {
      id: 'management-corporate',
      title: 'Management, Corporate and Business with Engineering Industries',
      timeRange: '3:30 PM - 4:10 PM',
      theme: '"Preparing for corporate careers in an uncertain world: skills, Mindset, and Strategy for the next decade"',
      moderator: {
        name: 'Mr. Surya Prakash Mahapatra',
        role: 'Global Head – Talent Transformation, Wipro Ltd.',
      },
      speakers: [
        { name: 'Mr. Kalinga Keshari Rath', role: 'MD, EVOS Buildcon Pvt. Ltd.' },
        { name: 'Mr. Biswojit Gouda', role: 'Senior Salesforce Consultant, Minneapolis' },
        { name: 'Dr. Partha Tripathy', role: 'PhD, PPP Specialist IFC in Worldbank' },
        { name: 'Er. Prasanta Kumar Panda', role: 'Principal Data Scientist, TCS, Bhubaneswar' },
        { name: 'Titash Nandi', role: 'IIM Ahmedabad, Operation Design Lead at Curefit / Ex Consultant Deloitte' },
      ],
    },
    {
      id: 'agriculture-technology',
      title: 'Agriculture & Technology',
      timeRange: '3:30 PM - 5:00 PM',
      theme: 'Insights, outcomes and future of Agri-allied',
      moderator: {
        name: 'Dr. Hrushikesh Senapati',
        role: 'Former Dean, OUAT, Bhubaneswar',
      },
      speakers: [
        { name: 'Dr. Trinath Mahararana', role: 'Former Professor & Head, OUAT, Bhubaneswar' },
        { name: 'Dr. Pramod Kumar Rout', role: 'Principal Scientist and Scientific Adviser (Animal Science), ICAR, New Delhi' },
        { name: 'Dr. Kalikinkar Bandyopadhyay', role: 'Principal Scientist, ICAR-(IIWM), Bhubaneswar' },
        { name: 'Dr. Priya Ranjan Sahoo', role: 'Aquaculture Specialist, Living Stone International University, South Africa' },
        { name: 'Mr. Hari Prasanna Sahoo', role: 'PhD Scholar, BHU' },
      ],
    },
  ],
  counsellingDomains: [
    {
      id: 'civil-staff-defence',
      title: 'Civil, Staff & Defence',
      speakers: [
        { name: 'Lt. Raj Kumar Thakur', role: 'Armed Forces' },
        { name: 'Mr. Shantanu Singh', role: 'Officer, Indian Foreign Services (IFS), UPSC, Civil Services, Government of India' },
        { name: 'Mr. Pradyumna Mohapatra', role: 'IES, General Manager, ITS, BSNL, Balasore, Govt. of India' },
        { name: 'Dr. Pravakar Mohanty', role: "Scientist 'E' & Joint Director (R&D), Dept. of Science & Technology, Government of India" },
        { name: 'Mr. Purusottam Mishra', role: '(OAS) Assistant Collector, Balasore, Govt. of Odisha' },
        { name: 'Er. Pratyush Kumar Pradhan', role: 'Superintending Engineer, Water Resource Development, Govt. of Odisha' },
        { name: 'Dr. Jubilee Purkayastha', role: 'Scientist F & Joint Director, INMAS DRDO' },
      ],
    },
    {
      id: 'management-engineering',
      title: 'Management & Engineering Industries',
      speakers: [
        { name: 'Mr. Surya Prakash Mahapatra', role: 'Global Head – Talent Transformation, Wipro Ltd.' },
        { name: 'Mr. Kalinga Keshari Rath', role: 'MD, EVOS Buildcon Pvt. Ltd.' },
        { name: 'Mr. Siddharth Das', role: 'AI Engineer at FORD, USA' },
        { name: 'Mr. Biswojit Gouda', role: 'Senior Salesforce Consultant, Minneapolis' },
        { name: 'Mr. Parkruti Ranjan Sahoo', role: 'IIM Raipur' },
        { name: 'Mr. Shirendu Banik', role: 'IIM Amritsar' },
        { name: 'Mrs. Mahasweta Behera', role: 'Manager, Customer Success' },
        { name: 'Er. Prasanta Kumar Panda', role: 'Principal Data Scientist, TCS, Bhubaneswar' },
        { name: 'Ms. Pratikshya Pattnaik', role: 'Human Capital at Deloitte USI' },
        { name: 'Titash Nandi', role: 'IIM Ahmedabad, Operation Design Lead at Curefit / Ex Consultant Deloitte' },
        { name: 'Kaibalya Kumar Sahoo', role: 'Assistant Manager at Odisha Hydro Power Corporation' },
      ],
    },
    {
      id: 'higher-education-research',
      title: 'Higher Education & Research',
      speakers: [
        { name: 'Dr. Sutanu Chakraborty', role: 'Professor, Dept. of Computer Science & Engineering, IIT Madras' },
        { name: 'Dr. Lingaraj Sahoo', role: 'Professor, Dept. of Bioscience and Bioengineering, IIT Guwahati & Adj. Prof., Jifu University, Japan' },
        { name: 'Dr. Abheek Ghosh', role: 'PhD Scholar, Oxford University' },
        { name: 'Mr. Rishikeshan Pradhan', role: 'PhD Scholar, NISER Bhubaneswar' },
        { name: 'Mr. Sanchari Kundu', role: 'PhD Scholar, Virginia Tech USA' },
        { name: 'Dr. Sudhanshu Sekhar Sahoo', role: 'Associate Professor, OUTR' },
        { name: 'Dr. Batakrishna Tripathy', role: 'Assistant Prof., SOA' },
      ],
    },
    {
      id: 'agricultural-technology',
      title: 'Agricultural Technology',
      speakers: [
        { name: 'Dr. Hrushikesh Senapati', role: 'Former Dean, OUAT' },
        { name: 'Dr. Trinath Mahararana', role: 'Former Professor & Head, Odisha University of Agriculture and Technology (OUAT), Bhubaneswar' },
        { name: 'Dr. Pramod Kumar Rout', role: 'Former Principal Scientist (Animal Science), Indian Council of Agricultural Research (ICAR), New Delhi' },
        { name: 'Dr. Kalikinkar Bandyopadhyay', role: 'Principal Scientist, ICAR-Indian Institute of Water Management (IIWM), Bhubaneswar' },
        { name: 'Dr. Priya Ranjan Sahoo', role: 'Aquaculture Specialist, Living Stone International University, South Africa' },
        { name: 'Mr. Hari Prasanna Sahoo', role: 'PhD Scholar, BHU' },
      ],
    },
  ],
};
