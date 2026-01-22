import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import '../../styles/Cli.scss'

const Cli = ({windowName, setWindowState}) => {
    const commands = {
        help: {
            description: 'List all available commands.',
            usage: 'help',
            fn: () => {
                return `about       - Learn who I am
skills      - Display my technical stack
projects    - View my recent work (MERN, PHP, Java)
edu         - Show my dual-degree background
contact     - Get my social links
clear       - Clear the terminal screen`
            }
        },
        about: {
            description: 'Who is Akram?',
            usage: 'about',
            fn: () => "I am an aspiring Web Developer and a dedicated student pursuing a BCA (2023-27) alongside a B.Sc. in Physics. I love building full-stack applications and solving complex problems through code."
        },
        skills: {
            description: 'My technical toolbox.',
            usage: 'skills',
            fn: () => "Frontend: React, Next.js, Vue, Tailwind CSS\nBackend: Node.js, Express, PHP\nDatabase: MongoDB, MySQL\nLanguages: JavaScript, Java, PHP, C"
        },
        projects: {
            description: 'List of my top projects.',
            usage: 'projects',
            fn: () => `1. FinTrack - MERN Stack Expense Tracker
2. Attendance Analytics System - Internal Hackathon Project
3. Hospital Management - Java Swing & MySQL
Type 'open <project_name>' (coming soon) to view details.`
        },
        edu: {
            description: 'Academic background.',
            usage: 'edu',
            fn: () => "• BCA (Bachelor of Computer Application) | 2023 - 2027\n• B.Sc. Physics (Distance Education - NSOU) | 2023 - 2026"
        },
        contact: {
            description: 'Ways to reach me.',
            usage: 'contact',
            fn: () => "Email: yourname@example.com\nLinkedIn: linkedin.com/in/yourprofile\nGitHub: github.com/yourusername"
        },
        clear: {
            description: 'Clear the terminal screen.',
            usage: 'clear',
            fn: () => {
                // reload the page to clear terminal
                window.location.reload()
                return 'Clearing...'
            }
        }
    }

    const welcomeMessage = (
        <div>
            <pre style={{ color: '#00ff00', lineHeight: '1.2' }}>
            </pre>
            <p>Welcome to my macOS Portfolio Terminal.</p>
            <p>Type <span style={{ color: '#ffff00' }}>'help'</span> to see all available commands.</p>
            <hr />
        </div>
    )

    return (
        <MacWindow windowName={windowName} setWindowState={setWindowState}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'skramizraza:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                    noDefaults={true}
                    style={{
                        backgroundColor: 'rgba(25, 25, 25, 0.9)',
                        minHeight: '400px',
                        borderRadius: '0 0 10px 10px'
                    }}
                    contentStyle={{ color: '#f0f0f0' }}
                    inputStyle={{ color: '#ffffff' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli