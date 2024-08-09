import React, { useState } from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaCheckCircle } from 'react-icons/fa'; // Import LinkedIn and checkmark icons
import candidates from '../candidates.json'; // Import the candidates JSON file

const jobTitles = [
    'Software Engineer',
    'Product Manager',
    'Data Scientist',
    'UX Designer',
    'Sales Manager'
];

function TalentAcquisition() {
    const [jobTitle, setJobTitle] = useState(jobTitles[0]); // Default to the first job title
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [location, setLocation] = useState('');
    const [salaryRange, setSalaryRange] = useState('');
    const [jobs, setJobs] = useState([]);
    const [matchedCandidates, setMatchedCandidates] = useState([]);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [selectedJobTitle, setSelectedJobTitle] = useState(''); // Store the selected job title
    const [contactedCandidates, setContactedCandidates] = useState([]); // Track contacted candidates

    const handleSubmit = (e) => {
        e.preventDefault();
        const newJob = { jobTitle, description, skills, location, salaryRange };
        setJobs([...jobs, newJob]);
        setDescription('');
        setSkills('');
        setLocation('');
        setSalaryRange('');
    };

    const handleDelete = (index) => {
        const updatedJobs = jobs.filter((_, i) => i !== index);
        setJobs(updatedJobs);
    };

    const handleSourceCandidates = (title) => {
        const matches = candidates.filter(candidate => candidate.title.toLowerCase() === title.toLowerCase());
        setMatchedCandidates(matches);
        setSelectedJobTitle(title); // Store the job title when sourcing candidates
    };

    const handleContactCandidate = (candidate) => {
        setSelectedCandidate(candidate);
    };

    const handleClosePopup = () => {
        setSelectedCandidate(null);
    };

    const handleSendMessage = () => {
        // Mark the candidate as contacted
        setContactedCandidates([...contactedCandidates, selectedCandidate.name]);
        setSelectedCandidate(null);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <BriefcaseIcon className="h-6 w-6 text-blue-600 mr-2" />
                Talent Acquisition
            </h2>
            <p className="mb-4">Create a new job posting:</p>
            <form onSubmit={handleSubmit}>
                {/* Job Title Dropdown */}
                <div className="mb-4">
                    <label className="block text-gray-700">Job Title</label>
                    <select
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                    >
                        {jobTitles.map((title, index) => (
                            <option key={index} value={title}>
                                {title}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Required Skills</label>
                    <input
                        type="text"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Salary Range</label>
                    <input
                        type="text"
                        value={salaryRange}
                        onChange={(e) => setSalaryRange(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Post Job
                </button>
            </form>

            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Posted Jobs</h3>
                {jobs.length === 0 ? (
                    <p>No jobs posted yet.</p>
                ) : (
                    <ul className="list-disc list-inside">
                        {jobs.map((job, index) => (
                            <li key={index} className="mb-2">
                                <strong>{job.jobTitle}</strong> - {job.location} - {job.salaryRange}
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="text-red-600 ml-4"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => handleSourceCandidates(job.jobTitle)}
                                    className="text-blue-600 ml-4"
                                >
                                    Source Candidates
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {matchedCandidates.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Matched Candidates</h3>
                    <ul className="list-disc list-inside">
                        {matchedCandidates.map((candidate, index) => (
                            <li key={index} className="mb-2 flex items-center">
                                <strong>{candidate.name}</strong> - {candidate.title} at {candidate.company} - {candidate.location} - {candidate.experience}
                                <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer" className="ml-2">
                                    <FaLinkedin className="h-5 w-5 text-blue-700" />
                                </a>
                                {contactedCandidates.includes(candidate.name) ? (
                                    <FaCheckCircle className="h-5 w-5 text-green-600 ml-4" />
                                ) : (
                                    <button
                                        onClick={() => handleContactCandidate(candidate)}
                                        className="text-green-600 ml-4"
                                    >
                                        Contact Candidate
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {selectedCandidate && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Contact {selectedCandidate.name.split(' ')[0]}</h3>
                        <p className="mb-4">
                            Hi {selectedCandidate.name.split(' ')[0]}, I see you're currently working at {selectedCandidate.company} as a {selectedCandidate.title}. I just opened a new role on my team for a {selectedJobTitle}. Are you currently looking for new opportunities?
                        </p>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleSendMessage}
                                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                            >
                                Send
                            </button>
                            <button
                                onClick={handleClosePopup}
                                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TalentAcquisition;
