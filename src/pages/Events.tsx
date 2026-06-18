import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Events = () => {
  return (
    <Layout>
      <section className="py-16 md:py-24 bg-[#243447] min-h-screen">
        <div className="max-w-5xl mx-auto px-4">

          {/* TITLE */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-7xl font-bold text-white">
              Career Counselling Seminar
            </h1>

            <p className="text-gray-400 mt-2">
              SATSANG VIHAR BHUBANESWAR
            </p>
          </motion.div>

          {/* REGISTER BUTTON */}
          <div className="text-center mb-16">
            <a
             
              className="px-8 py-6 bg-[#0b1e3a] hover:bg-[#0b1e3a] text-white font-semibold rounded-lg transition"
            >
              Registration closed
            </a>
          </div>

          <h2 className="text-5xl font-bold text-white mb-6 text-center">
            Event Schedule
          </h2>

          <div className="space-y-6">

            {/* SESSION 1 */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                09:00 AM – 10:00 AM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Registration & Orientation 
                </h3>

                <p className="text-gray-400 text-sm">
                  Welcome of students and seminar overview netwroking, Refreshment 
                </p>
              </div>
            </div>

            {/* SESSION 2 */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                10:00 AM – 11:00 AM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Inaugural Session
                </h3>

                <p className="text-gray-400 text-sm">
                  Diya Prajwalan and Theme Song Dedicated to young Students
                </p>
              </div>
            </div>

        {/* SESSION 5 */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                11:00 AM – 01:00 PM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Career Counselling Session
                </h3>

                <ul className="space-y-2 text-gray-300 text-sm">
 <li>
                   11:00 Am-11:30 AM : Mr. Surya Prakash Mahapatra (Global Head ofAI Skilling, Wipro Ltd) 
                    <div className="text-gray-400 text-xs">
                    Topic: “From career confusion to career 
clarity”
                    </div>
                  </li>

                  <li>
                    11:30 Am-12:00 PM : Dr. Sutanu Chakraborty
                    <div className="text-gray-400 text-xs">
(Professor, Department of Computer Science & Engineering, Indian Institute of Technology (IIT)Madras) </div>
                  
                    <div className="text-gray-400 text-xs">
                    Topic: “Y”our “Y”earning within: making the “Y” (WHY) matter”
                    </div>
                  </li>

                  <li>
                    12:00 Am-12:30 PM :  Mr. Kalinga Keshari Rath 
                    <div className="text-gray-400 text-xs">
                      (MD, EVOS Buildcon Pvt. Ltd.)
                    </div>
                    <div className="text-gray-400 text-xs">
                      Topic: Entrepreneurship in youth generation
                    </div>
                  </li>

                            <li>
                    12:30 PM-1:00 PM : Dr. Jubilee Purkayastha
                    <div className="text-gray-400 text-xs">
                      (Scientist F & Joint Director, INMAS DRDO ,Ministry Of Defence , Govt. OF India)  </div>
                    <div className="text-gray-400 text-xs">
                      Topic: The philosophy of right livelihood: Career guidance for conscious Youth
                    </div>
                  </li>

         
                  <li>
                    <strong>Interactive Q & A Session</strong>
                 <div className="text-gray-400 text-xs">
  (Moderated discussion with all speakers)
</div>
                  </li>

                </ul>
              </div>
            </div>

            {/* LUNCH */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                01:00 PM – 01:30 PM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Lunch Break
                </h3>

                <p className="text-gray-400 text-sm">
                  Take a break and enjoy lunch
                </p>
              </div>
            </div>

            {/* RHYTHM SESSION */}
            <div className="flex gap-6">
              <div className="text-white font-semibold w-32">
                01:30 PM – 02:00 PM
              </div>

              <div className="bg-[#132a4d] p-5 rounded-lg border-r-4 border-white flex-1">
                <h3 className="text-white font-bold text-lg">
                  Rhythm & Resonance
                </h3>

                <p className="text-gray-400 text-sm">
                  Celebrating Harmony in Life, Purpose and 
Career Path: A Musical Reflection by 
Kamalakhya Parida, Bedashree Aparna Sahoo 
and Dipta. S Mohanty
                </p>
              </div>
            </div>

            {/* PLENARY SESSION */}
            <div className="flex gap-6">

              <div className="text-white font-semibold w-32">
                02:00 PM – 05:00 PM
              </div>

              <div className="bg-[#132a4d] p-6 rounded-lg border-r-4 border-white flex-1">

                <h3 className="text-white font-bold text-lg mb-6">
                 Domain-Specific Plenary 
Sessions Concurrent 
sessions.
                </h3>

                <div className="grid md:grid-cols-2 gap-8">

                  {/* P1 */}
                  <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Civil, Staff & Defence Services(2:00 PM - 2:40 PM)
                    </h3>

                    <p className="text-gray-400 italic mb-4">
                      Theme: “Uniform and Administration: Two paths, One Mission – Nation First”
                    </p>

                    <div className="bg-[#1f2937] p-4 rounded-lg mb-4 border-l-4 border-orange-500">
                      <p className="text-orange-400 text-xs font-bold">MODERATOR</p>
                      <p className="text-white font-semibold">
                        Dr. Jubilee Purkayastha
                      </p>
                      <div className="text-gray-400 text-xs">
Scientist F & Joint Director, INMAS DRDO ,Ministry Of Defence , Govt. OF India
</div>
                    </div>

                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>Lt. Raj Kumar Thakur</li>
                      <div className="text-gray-400 text-xs">
(Armed force, Government of India)
</div>
                      <li>Mr. Shantanu Singh</li>
                      <div className="text-gray-400 text-xs">
 (IFS Officer, UPSC Civil Services, Govt of India)
</div>
                      <li>Mr. Pradyumna Mohapatra</li>
                      <div className="text-gray-400 text-xs">
(IES, General Manager, ITS, BSNL, Balasore, Govt. Of India)

</div>
                      
                      
                      <li>Mr. Purusottam Mishra</li>
                      <div className="text-gray-400 text-xs">
 (OAS) Assistant Collector, Govt. of Odisha)
</div>
                        <li>	Er.Pratyush Kumar Pradhan </li>
                      <div className="text-gray-400 text-xs">
(Superintending Engineer, Water Resource Department, Govt. of Odisha)
</div>
                        <li>Mr. Narasingha Jethi </li>
                      <div className="text-gray-400 text-xs">
                      (IES, DDG, DD ODIA, Prasar Bharati, Govt of India)
</div>
                    </ul>
                  </div>

                  {/* P2 */}
                  <div className="bg-[#111827] p-8 rounded-2xl shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Higher Education & Research (2:45 PM - 3:25Pm)
                    </h3>
 <p className="text-gray-400 italic mb-4">
                      Theme : “The Research Practice Nexus : Aligning ‘y’ ourselves with Purpose”
                    </p>

                    <div className="bg-[#1f2937] p-4 rounded-lg mb-4 border-l-4 border-orange-500">
                      <p className="text-orange-400 text-xs font-bold">MODERATOR</p>
                      <p className="text-white font-semibold">
                        Dr. Sutanu Chakraborty
                      </p>
                      <div className="text-gray-400 text-xs">
(Professor, Department of Computer Science & Engineering, IIT Madras)
</div>
                    </div>

                    <ul className="space-y-2 text-gray-300 text-sm">
                                            <li>Dr. Pravakar Mohanty</li>
                       <div className="text-gray-400 text-xs">
 (Scientist ‘E’ & Joint Director (R&D), Department of Science & Technology, Government of India)
</div>
                     
                       
                      <li>Mr. Sanchari Kundu</li>
                       <div className="text-gray-400 text-xs">
 (PhD. Scholar, Virginia Tech USA)
</div>
                      <li>Dr. Sudhanshu Sekhar Sahoo</li>
                       <div className="text-gray-400 text-xs">
 (HOS, Mechanical Science Associate Prof. OUTR)
</div>
                      <li>Dr. Abheek Ghosh</li>
                     <div className="text-gray-400 text-xs">
(Postdoctoral Fellow, Oxford university)
</div>
                      <li> Dr. Bibhu Prasad Panda </li>
                     <div className="text-gray-400 text-xs">
(Assistant prof. SOA)
</div>
                    
                    </ul>
                  </div>
                  {/* P3 */}
<div className="bg-[#111827] p-8 rounded-2xl shadow-lg">

<h3 className="text-xl font-bold text-white mb-4">
Management, Corporate and Business with Engineering Industries(3:30 PM -4:10 PM)
</h3>

<p className="text-gray-400 italic mb-4">
Theme : “Preparing for corporate careers in an uncertain world : skills, 
Mindset, and Strategy for the next decade”
</p>

<div className="bg-[#1f2937] p-4 rounded-lg mb-4 border-l-4 border-orange-500">
<p className="text-orange-400 text-xs font-bold">MODERATOR</p>
<p className="text-white font-semibold">
Mr. Surya Prakash Mahapatra
</p>
<div className="text-gray-400 text-xs">
(Global Head –Talent Transformation, Wipro Ltd.)
</div>
</div>

<ul className="space-y-3 text-gray-300 text-sm">

<li>
Mr. Kalinga Keshari Rath
<div className="text-gray-400 text-xs">
(MD, EVOS Buildcon Pvt. Ltd.)
</div>
</li>


<li>
Mr. Biswojit Gouda
<div className="text-gray-400 text-xs">
 (Senior Salesforce Consultant ,Minneapolis)
</div>
</li>
  <li>
 Dr. Partha Tripathy
<div className="text-gray-400 text-xs">
(PhD, PPP Specialist IFC In Worldbank)
</div>
</li>







<li>
Er. Prasanta Kumar Panda
<div className="text-gray-400 text-xs">
(Principal Data Scientist , TCS, BBSR)
</div>
</li>



<li>
Titash Nandi
<div className="text-gray-400 text-xs">
 (IIM Ahmedabad,Operation Design Lead at Curefit/Ex Consultant Deloitte)

</div>
</li>



</ul>

</div>
                  {/* P4 */}
<div className="bg-[#111827] p-8 rounded-2xl shadow-lg">

<h3 className="text-xl font-bold text-white mb-4">
Agriculture & Technology
</h3>

<p className="text-gray-400 italic mb-4">
Theme : Insights, outcomes and future of Agri-allied.
</p>

<div className="bg-[#1f2937] p-4 rounded-lg mb-4 border-l-4 border-orange-500">
<p className="text-orange-400 text-xs font-bold">MODERATOR</p>
<p className="text-white font-semibold">
Dr. Hrushikesh Senapati
</p>
<div className="text-gray-400 text-xs">
(Former Dean, OUAT, BBSR)
</div>
</div>

<ul className="space-y-3 text-gray-300 text-sm">

<li>
Dr. Trinath Mahararana
<div className="text-gray-400 text-xs">
 (Former Professor & Head, OUAT, BBSR)
</div>
</li>

<li>
Dr. Pramod Kumar Rout
<div className="text-gray-400 text-xs">
(Principal Scientist and Scientific Adviser (Animal Science), (ICAR), New Delhi)
</div>
</li>

<li>
Dr. Kalikinkar Bandyopadhyay
<div className="text-gray-400 text-xs">
(Principal Scientist, ICAR-(IIWM), BBSR)
</div>
</li>

<li>
Dr. Priya Ranjan Sahoo
<div className="text-gray-400 text-xs">
(Aquaculture Specialist, Living Stone International University, South Africa)
  </div>
</li>


<li>
Mr. Hari Prasanna Sahoo
<div className="text-gray-400 text-xs">
 (PhD. Scholar, BHU)
</div>
</li>
  

</ul>
 

</div>
               

                </div>

              </div>

            </div>

          </div>
        </div>
           <section className="py-12 bg-[#243447] text-white relative">
  <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:items-start gap-8">

    {/* Left Side: Parallel Session + Grid Boxes */}
    <div className="flex-1">
      {/* Parallel Session Header with blinking dot */}
      <div className="flex items-center mb-4">
        <span className="w-5 h-5 rounded-full bg-orange-500 animate-ping mr-3"></span>
        <h3 className="text-orange-500 font-bold text-lg uppercase">
          Parallel Session
        </h3>
      </div>

      {/* One-to-One Career Counselling */}
      <p className="text-white text-3xl md:text-4xl font-semibold mb-8">
        One-to-One Career Counselling
      </p>

      {/* Grid Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
        <div className="bg-[#1f2a36] w-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-xl font-bold text-gradient-saffron mb-3">Civil,Staff & Defence</h4>
          <ul className="list-disc list-inside space-y-1 text-white">
            
                      <li>	Lt. Raj Kumar Thakur</li>
                       <div className="text-gray-400 text-xs">
 Armed Forces
</div>
             <li>	Mr. Shantanu Singh</li>
                       <div className="text-gray-400 text-xs">
 Officer, Indian Foreign Services (IFS), UPSC, Civil Services,Government of India
</div>
             <li>	Mr.Pradyumna Mohapatra </li>
                       <div className="text-gray-400 text-xs">
 IES, General Manager,ITS,BSNL,Balasore, Govt. Of India 
</div>
 <li>	Dr. Pravakar Mohanty </li>
                       <div className="text-gray-400 text-xs">
Scientist ‘E’ & Joint Director (R&D), Department of Science & Technology, Government of India
</div>
             <li>	Mr.Purusottam Mishra  </li>
                       <div className="text-gray-400 text-xs">
(OAS) Assistant Collector, Balasore, Govt.Of Odisha
</div>
            
      <li>	Er.Pratyush Kumar Pradhan   </li>
                       <div className="text-gray-400 text-xs">
Supreintending Engineer,Water Resource Development, Govt.Of Odisha
</div> 
            <li>Dr. Jubilee Purkayastha   </li>
                       <div className="text-gray-400 text-xs">
Scientist F & Joint Director, INMAS DRDO
</div>
          </ul>
        </div>

       <div className="bg-[#1f2a36] w-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-xl font-bold text-gradient-saffron mb-3">Management & Engineering Industries</h4>
          <ul className="list-disc list-inside space-y-1 text-white">
            <li>	Mr. Surya Prakash Mahapatra  </li>
                       <div className="text-gray-400 text-xs">
Global Head – Talent Transformation, Wipro Ltd.
</div>
             <li>	Mr.Kalinga Keshari Rath  </li>
                       <div className="text-gray-400 text-xs">
MD, EVOS buildcon Pvt.Ltd.
</div>
            <li>	Mr.Siddharth Das   </li>
                       <div className="text-gray-400 text-xs">
AI Engineer at FORD, USA
</div>
            <li>	Mr.Biswojit Gouda  </li>
                       <div className="text-gray-400 text-xs">
Seniour Salesforce Consultant ,Minneapolis
</div>
            <li>	Mr.Parkruti Ranjan Sahoo   </li>
                       <div className="text-gray-400 text-xs">
IIM Raipur
</div>
            <li>	Mr.Shirendu Banik  </li>
                       <div className="text-gray-400 text-xs">
IIM Amritsar
</div>
            <li>	Mrs.Mahasweta Behera  </li>
                       <div className="text-gray-400 text-xs">
Manager,Customer Success
</div>
            <li>Er. Prasanta Kumar Panda </li>
                       <div className="text-gray-400 text-xs">
Principal Data Scientist ,TCS, Bhubaneswar
</div>
            <li>	Ms.Pratikshya Pattnaik   </li>
                       <div className="text-gray-400 text-xs">
Human Capital at Dellolite USI
</div>
            <li>	Titash Nandi   </li>
                       <div className="text-gray-400 text-xs">
IIM Ahmedabad, Operation Design Lead at Curefit /Ex Consultant DELOITTE
</div>
            <li>	Kaibalya Kumar Sahoo   </li>
                       <div className="text-gray-400 text-xs">
Assistant Manager at Odisha Hydro Power Corporation
</div>
          </ul>
        </div>

        <div className="bg-[#1f2a36] w-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-xl font-bold text-gradient-saffron mb-3">Higher Education & Research</h4>
          <ul className="list-disc list-inside space-y-1 text-white">
<li>Dr. Sutanu Chakraborty  </li>
                       <div className="text-gray-400 text-xs">
Professor, Department of Computer Science & Engineering, IIT Madras
</div>
            <li>	Dr.Lingaraj Sahoo   </li>
                       <div className="text-gray-400 text-xs">
Professor, Dept. of Bioscience   and Bioengineering, IIT Guwahati & Adj.Prof. Jifu University, JAPAN
</div>
            <li>	Dr.Abheek Ghosh   </li>
                       <div className="text-gray-400 text-xs">
PhD. Scholar, Oxford university
</div>
            <li>Mr. Rishikeshan Pradhan   </li>
                       <div className="text-gray-400 text-xs">
PhD. Scholar, NISER BBSR
</div>
            <li>	Mr.Sanchari Kundu   </li>
                       <div className="text-gray-400 text-xs">
PhD.Scholar, virgenia tech USA
</div>
            <li>	Sudhanshu Sekhar Sahoo </li>
                       <div className="text-gray-400 text-xs">
Prof. OUTR
</div>
            <li>	Dr. Batakrishna Tripathy  </li>
                       <div className="text-gray-400 text-xs">
Assistant Prof. SOA
</div>
          
          </ul>
        </div>

        <div className="bg-[#1f2a36] w-full p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-xl font-bold text-gradient-saffron mb-3">Agricultural Technology</h4>
          <ul className="list-disc list-inside space-y-1 text-white">
           <li>	Dr. Hrushikesh Senapati   </li>
                       <div className="text-gray-400 text-xs">
Former Dean, OUAT
</div>
            <li> Dr.Trinath Mahararana </li>
                       <div className="text-gray-400 text-xs">
Former Professor & Head,    Odisha University of Agriculture and Technology (OUAT), Bhubaneswar.
</div>
            <li>	Dr.Pramod Kumar Rout </li>
                       <div className="text-gray-400 text-xs">
Former Principal Scientist (Animal Science), Indian Council of Agricultural Research (ICAR), New Delhi
</div>
            <li>Dr.Kalikinkar Bandyopadhyay </li>
                       <div className="text-gray-400 text-xs">
Principal Scientist, ICAR -Indian Institute of Water Management (IIWM), Bhubaneswar
</div>
            <li>	Dr.Priya Ranjan Sahoo </li>
                       <div className="text-gray-400 text-xs">
Aquaculture Specialist, Living Stone International University, South Africa
</div>
            <li>	Mr.Hari Prasanna Sahoo   </li>
                       <div className="text-gray-400 text-xs">
PhD.Scholar Agriculture BHU
</div>
          </ul>
        </div>
      </div>
    </div>

    {/* Right Side: Time Box */}
    <div className="flex-shrink-0 mt-8 md:mt-0">
      <div className="bg-black text-blue-400 font-bold text-lg md:text-xl px-6 py-4 rounded-xl shadow-lg text-center">
        2:00 PM to 5:00 PM
      </div>
    </div>

  </div>
</section>
      </section>
    </Layout>
  );
};

export default Events;

