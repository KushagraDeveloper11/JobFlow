import Navbar from "./components/Navbar"
import Header from "./components/Header"
import SearchBar from "./components/Searchbar"
import JobCard from "./components/Jobcard"
import LoadingIcon from "./components/LoadingIcon"
// import jobData from "./JobDummyData"
import { useEffect, useState } from "react"
import { collection, query, orderBy, where, getDocs } from "firebase/firestore";
import {db} from "./firebase.config"

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);
  const [loading,setLoading]=useState(false);

  const fetchJobs = async() => {
    setCustomSearch(false);
    setLoading(true);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
    setLoading(false);
  }

//   const fetchJobsCustom = async (jobCriteria) => {
//     setCustomSearch(true);
//     const tempJobs = [];
//     let jobsRef = collection(db, "jobs");
    
//     // Initialize a query object
//     let q = query(jobsRef);

//     // Conditionally add filters based on criteria
//     if (jobCriteria.type) {
//         q = query(q, where("type", "==", jobCriteria.type));
//     }
//     if (jobCriteria.title) {
//         q = query(q, where("title", "==", jobCriteria.title));
//     }
//     if (jobCriteria.experience) {
//         q = query(q, where("experience", "==", jobCriteria.experience));
//     }
//     if (jobCriteria.location) {
//         q = query(q, where("location", "==", jobCriteria.location));
//     }

//     // Always order by "postedOn" at the end
//     q = query(q, orderBy("postedOn", "desc"));

//     try {
//         const req = await getDocs(q);
//         req.forEach((job) => {
//             tempJobs.push({
//                 ...job.data(),
//                 id: job.id,
//                 postedOn: job.data().postedOn.toDate(),
//             });
//         });

//         if (tempJobs.length === 0) {
//             console.log("No jobs found matching the criteria.");
//         }

//         setJobs(tempJobs);
//     } catch (error) {
//         console.error("Error fetching custom jobs:", error);
//     }
// };



  const fetchJobsCustom = async(jobCriteria) => {
    setCustomSearch(true);
    setLoading(true);
    const tempJobs = []
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location) ,orderBy("postedOn", "desc"));
    const req = await getDocs(q);

    req.forEach((job) => {
      // console.log(doc.id, " => ", doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      })
    });
    setJobs(tempJobs);
    setLoading(false);
  }


  useEffect(() => {
    fetchJobs()
  },[])

  const resetFilters = () => {
    fetchJobs(); // Reset jobs to the default list
  };

  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom}/>
      {customSearch && 
          <button onClick={resetFilters} className="mb-4">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white hover:bg-blue-700 hover:text-white">
            Clear Filters
          </p>
        </button>
      }
      {loading ? (
        <LoadingIcon /> // Replace with your loading icon component
      ) : (
        jobs.map((job) => <JobCard key={job.id} {...job} />)
      )}
    </div>
  )
}

export default App