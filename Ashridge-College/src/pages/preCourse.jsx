import '../CSS/preCourse.css'
import { IoBookmarksOutline } from "react-icons/io5";
import { RiShareForwardLine } from "react-icons/ri";
import DonutChart from '../components/chart';
function PreCourse () {
    return (
        <div className='pre-page'>

            <section className='sec1'>
                <div className='left'>
                    <h2>Advanced PMP Exam Preperation</h2>
                    <p><li style={{listStyle: 'none'}}>Beginner</li> <li>4 Hours</li> <li>Earn Certification</li></p>
                </div>
                <div className="right">
                    <button>Start Lesson</button>
                    <a href="#"><IoBookmarksOutline/></a>
                    <a href="#"><RiShareForwardLine/></a>
                </div>
            </section>

            <article className='pre-article'>
                    Get fully prepared for the <span className='marked'>Project Management Professional (PMP<sup>®</sup>)</span> exam with advanced strategies, practice questions, and real-world case studies. This course goes beyond the basics to strengthen your understanding of PMI’s domains — People, Process, and Business Environment — while equipping you with effective test-taking techniques.
                    Through short, focused modules, you’ll review complex project management concepts, tackle situational questions with confidence, and practice under exam-like conditions. Designed for professionals aiming to achieve certification, this course provides the tools and confidence needed to pass the PMP exam on your first attempt.
            </article>

            <section className="sec2">
                <div className="text">
                    <h2>What You’ll Learn</h2>
                    <ul>
                        <li>Master advanced project management concepts across Agile, Hybrid, and Predictive approaches.</li>
                        <li>Apply scheduling and risk management techniques to complex scenarios.</li>
                        <li>Use proven exam strategies for answering situational questions.</li>
                        <li>Manage time effectively during the PMP exam.</li>
                    </ul>
                </div>
                    <img src="../Media/people.png" alt="" />
            </section>
            <section className="sec3">
                <div className="wrapper"><DonutChart/></div>
                <div className="last">
                    <h3>By the End of This Course</h3>
                    <p>You’ll be confident in your ability to approach the PMP exam with advanced knowledge, practical techniques, and a clear strategy for success.</p>
                    <button>Start Lesson</button>
                </div>
            </section>
            
            
        </div>
    )
}
export default PreCourse;