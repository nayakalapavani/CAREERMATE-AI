// CareerMate AI
// Persistent memory using browser localStorage


// Load saved memory when the application starts
window.onload = function () {

    let savedProfile = localStorage.getItem("careerMateProfile");

    if (savedProfile) {

        let profile = JSON.parse(savedProfile);

        document.getElementById("name").value = profile.name;
        document.getElementById("career").value = profile.career;
        document.getElementById("skills").value = profile.skills;

        displayMemory(profile);
        generatePlan(profile);
    }
};


// Save user profile
function saveProfile() {

    let name = document.getElementById("name").value;
    let career = document.getElementById("career").value;
    let skills = document.getElementById("skills").value;

    if (name === "" || career === "" || skills === "") {

        alert("Please fill all the fields.");

        return;
    }


    // Create profile object
    let profile = {

        name: name,
        career: career,
        skills: skills,
        savedDate: new Date().toLocaleString()
    };


    // Persistent Memory
    localStorage.setItem(
        "careerMateProfile",
        JSON.stringify(profile)
    );


    displayMemory(profile);

    generatePlan(profile);


    document.getElementById("memoryMessage").innerHTML =
        "✓ Your information has been remembered!";
}


// Display persistent memory
function displayMemory(profile) {

    document.getElementById("memory").innerHTML =

        "<strong>Name:</strong> " + profile.name +
        "<br><br>" +

        "<strong>Career Goal:</strong> " + profile.career +
        "<br><br>" +

        "<strong>Skills:</strong> " + profile.skills +
        "<br><br>" +

        "<strong>Memory Saved:</strong> " + profile.savedDate;
}


// AI Agent
function askCareerMate() {

    let question =
        document.getElementById("question").value.toLowerCase();


    let savedProfile =
        localStorage.getItem("careerMateProfile");


    if (!savedProfile) {

        document.getElementById("response").innerHTML =
            "Please save your profile first.";

        return;
    }


    let profile = JSON.parse(savedProfile);

    let answer = "";


    // Agent decision making
    if (question.includes("learn") ||
        question.includes("skill")) {

        answer =
            "<strong>CareerMate AI Agent:</strong><br><br>" +

            "Hello " + profile.name + "!<br><br>" +

            "Your goal is <strong>" +
            profile.career +
            "</strong>.<br><br>" +

            "Based on your current skills (" +
            profile.skills +
            "), I recommend improving your programming, " +
            "problem-solving and project-building skills.<br><br>" +

            "<strong>Next Action:</strong> Build one practical project " +
            "and practice coding every day.";
    }


    else if (question.includes("resume")) {

        answer =
            "<strong>CareerMate AI Agent:</strong><br><br>" +

            "Your resume should highlight your skills, " +
            "projects, certifications and achievements.<br><br>" +

            "<strong>Next Action:</strong> Add at least 2 projects " +
            "related to " + profile.career + ".";
    }


    else if (question.includes("job")) {

        answer =
            "<strong>CareerMate AI Agent:</strong><br><br>" +

            "For a " + profile.career +
            " role, start applying for internships and " +
            "entry-level opportunities.<br><br>" +

            "<strong>Next Action:</strong> Prepare your resume, " +
            "GitHub projects and interview skills.";
    }


    else if (question.includes("roadmap")) {

        answer =
            "<strong>CareerMate AI Agent:</strong><br><br>" +

            "Your personalized roadmap:<br><br>" +

            "1. Strengthen programming basics<br>" +
            "2. Learn important technologies<br>" +
            "3. Build projects<br>" +
            "4. Upload projects to GitHub<br>" +
            "5. Prepare for interviews<br>" +
            "6. Apply for internships and jobs";
    }


    else {

        answer =
            "<strong>CareerMate AI Agent:</strong><br><br>" +

            "Hello " + profile.name + "!<br><br>" +

            "I remember that your career goal is " +
            profile.career + ".<br><br>" +

            "You can ask me about your skills, learning plan, " +
            "resume, jobs or career roadmap.";
    }


    document.getElementById("response").innerHTML = answer;
}


// Generate personalized career plan
function generatePlan(profile) {

    let plan = document.getElementById("plan");

    plan.innerHTML =

        "<li>Learn skills required for " +
        profile.career +
        "</li>" +

        "<li>Practice programming and problem solving</li>" +

        "<li>Build practical projects</li>" +

        "<li>Upload projects to GitHub</li>" +

        "<li>Prepare your resume</li>" +

        "<li>Practice interview questions</li>" +

        "<li>Apply for internships and jobs</li>";
}


// Clear persistent memory
function clearMemory() {

    localStorage.removeItem("careerMateProfile");

    document.getElementById("name").value = "";
    document.getElementById("career").value = "";
    document.getElementById("skills").value = "";

    document.getElementById("memory").innerHTML =
        "No information is currently remembered.";

    document.getElementById("memoryMessage").innerHTML = "";

    document.getElementById("plan").innerHTML =
        "<li>Save your profile to generate your career plan.</li>";

    document.getElementById("response").innerHTML = "";
}