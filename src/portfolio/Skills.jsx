import React, { useEffect, useState } from 'react'
import './Skills.css';
import { FaPython, FaReact, FaNode, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaDocker, FaAws } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiFlutter, SiTypescript, SiTailwindcss, SiBootstrap, SiPostman, SiFigma, SiMysql, SiPostgresql, SiFirebase, SiNextdotjs, SiGraphql } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import { BiLogoVisualStudio } from "react-icons/bi";

function SkillSection({ title, description, skills, delay }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`skill-section ${isVisible ? 'fade-up' : ''}`}>
            <div className="section-header">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="skills-list">
                {skills.map((skill, index) => (
                    <SkillCard 
                        key={index}
                        skill={skill.skill}
                        icon={skill.icon}
                        progress={skill.progress}
                        color={skill.color}
                        delay={skill.delay + delay}
                    />
                ))}
            </div>
        </div>
    );
}

function SkillCard({ skill, icon, progress, color, delay }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className={`skill-card ${isVisible ? 'animate' : ''}`}>
            <div className="skill-content">
                <div className="skill-left">
                    <div className="skill-icon" style={{ color: color }}>
                        {icon}
                    </div>
                    <div className="skill-info">
                        <h4>{skill}</h4>
                    </div>
                </div>
                <span className="progress-percentage">{progress}%</span>
            </div>
            <div className="skill-progress">
                <div className="progress-track">
                    <div 
                        className="progress-fill" 
                        style={{ 
                            width: isVisible ? `${progress}%` : '0%',
                            backgroundColor: color,
                            transitionDelay: `${delay + 300}ms`
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

function Skills() {
    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        document.title = "Portfolio - Skills";
        
        // Trigger header animation
        const timer = setTimeout(() => {
            setHeaderVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const frontendSkills = [
        { skill: 'React', icon: <FaReact />, progress: 90, color: '#61DAFB', delay: 100 },
        { skill: 'JavaScript', icon: <FaJs />, progress: 95, color: '#F7DF1E', delay: 200 },
        { skill: 'TypeScript', icon: <SiTypescript />, progress: 85, color: '#3178C6', delay: 300 },
        { skill: 'Next.js', icon: <SiNextdotjs />, progress: 80, color: '#000000', delay: 400 },
        { skill: 'HTML5', icon: <FaHtml5 />, progress: 95, color: '#E34F26', delay: 500 },
        { skill: 'CSS3', icon: <FaCss3Alt />, progress: 90, color: '#1572B6', delay: 600 }
    ];

    const backendSkills = [
        { skill: 'Node.js', icon: <FaNode />, progress: 85, color: '#339933', delay: 100 },
        { skill: 'Express.js', icon: <SiExpress />, progress: 80, color: '#000000', delay: 200 },
        { skill: 'Python', icon: <FaPython />, progress: 75, color: '#3776AB', delay: 300 },
        { skill: 'GraphQL', icon: <SiGraphql />, progress: 70, color: '#E10098', delay: 400 },
        { skill: 'MongoDB', icon: <SiMongodb />, progress: 80, color: '#47A248', delay: 500 },
        { skill: 'PostgreSQL', icon: <SiPostgresql />, progress: 75, color: '#336791', delay: 600 }
    ];

    const otherTools = [
        { skill: 'Git', icon: <FaGitAlt />, progress: 90, color: '#F05032', delay: 100 },
        { skill: 'Docker', icon: <FaDocker />, progress: 75, color: '#2496ED', delay: 200 },
        { skill: 'AWS', icon: <FaAws />, progress: 70, color: '#FF9900', delay: 300 },
        { skill: 'Figma', icon: <SiFigma />, progress: 80, color: '#F24E1E', delay: 400 }
    ];

    return (
        <div className='skills-page'>
            <div className={`skills-header ${headerVisible ? 'fade-in' : ''}`}>
                <div className="header-content">
                    <span className="section-badge">My Expertise</span>
                    <h1 className="main-title">Technical Skills</h1>
                    <p className="subtitle">
                        Passionate about creating amazing digital experiences with modern technologies
                    </p>
                </div>
                <div className="header-decoration">
                    <div className="floating-shapes">
                        <div className="shape shape-1"></div>
                        <div className="shape shape-2"></div>
                        <div className="shape shape-3"></div>
                    </div>
                </div>
            </div>

            <div className="skills-sections">
                <SkillSection 
                    title="Frontend Development"
                    description="Creating responsive and interactive user interfaces"
                    skills={frontendSkills}
                    delay={200}
                />
                
                <SkillSection 
                    title="Backend Development"
                    description="Building robust server-side applications and APIs"
                    skills={backendSkills}
                    delay={400}
                />
                
                <SkillSection 
                    title="Tools & Technologies"
                    description="Development tools and other technologies I work with"
                    skills={otherTools}
                    delay={600}
                />
            </div>
        </div>
    )
}

export default Skills;
