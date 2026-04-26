import { createSlice } from "@reduxjs/toolkit";
import pic from "../images/insitude.jpg"
import course1 from "../images/ppp.jpg"
import course2 from "../images/loab.png"
import course3 from "../images/course3.jpg"
import course4 from "../images/course4.jpg"
import course5 from "../images/course5.png"
import course6 from "../images/c.jpg"
import course7 from "../images/course7.jpg"
import course8 from "../images/course8.jpg"
import course9 from "../images/course9.png"
import course10 from "../images/course10.jpg"
import course11 from "../images/course11.png"
import course12 from "../images/course16.png"
import course13 from "../images/course13.jpg"
import course14 from "../images/course14.jpg"
import course15 from "../images/course15.png"
import course16 from "../images/course16.jpg"
import course17 from "../images/course17.png"
import course18 from "../images/course18.png"
import course19 from "../images/course19.jpg"
import course20 from "../images/course20.png"
import course21 from "../images/course21.jpg"
import course22 from "../images/course22.jpg"
import course23 from "../images/course23.png"
import course24 from "../images/course244.png"
import course25 from "../images/course25.jpg"
import { act } from "react";
import Signup from "../screens/Signup";



const initialState = {
  coursesdata: [
    {

      id: 85,
      bgheading: "FULL STACK (web)",
      text: 'Learn to build dynamic applications using PHP, MySQL, HTML, CSS and JavaScript',

      courseheading: [
        "Full stack web development courses in Rawalpindi",
        "Full stack web development courses in Rawalpindi institute is providing by FIT computer institute. Full stack Web development skill is very easy to learn and get money form online platform like facebook freelancing etc.",
        "Web development computer institute providing computer courses in rawalpindi pakistan. we are aslo providing c plus plus courses in rawalpindi( c++ course institute in rawalpindi ) web development course in rawalpindi ( web development institute ) , Mobile app development course in rawalpindi , Node js course in rawalpindi",
      ],
      FixPrice :"Rs : 35000/-PKR",
       topimage:course1,
      feedetail: [

        {
          coursetitle: "  Three Months Web Development Course in Rawalpindi",

          courseinstallment: "  RS. 25,000/-",

          coursefee: "RS. 23,000/-"
        },
        {
          coursetitle: "Full Stack Web Development Course in Rawalpindi",
          courseinstallment: "RS. 35,000/-",
          coursefee: "RS. 33,000/-"

        }
      ],

      detailParagraphs: [
        "Full Stack Web Development Course in rawalpindi branch Details",
        "Unlock the world of web development and embark on a transformative learning journey with our comprehensive Full Stack Web Development Course in Rawalpindi.",
        "In our web development course you got on hand experiences working on real time projects. We are working on US base technology . Our projects contain highly complication through this you learn many more things like problem solving, web design structure , project management.",
        "Our Full Stack Web Development Course is specially designed for matric and fsc student that will develop dynamic and responsive web applications from start to finish. Throughout the course, you will got proficiency in both front-end and back-end web development . come and enroll best full stack web development courses in rawalpindi"
      ],
      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "Full Stack PHP Web Developer:",
          items: [
            "Front End Designing [ course contents ]",
            "PHP [ course contents ]",
            "Internship"
          ]
        },
        {
          title: "Full Stack Dot Net Web Developer:",
          items: [
            "Front End Designing [ course contents ]",
            "ASP .NET [ course contents ]",
            "Internship"
          ]
        },
        {
          title: "CPanel:",
          items: [
            "Domains and cPanel",
            "Web Hosting",
            "Uploading of website",
            "create database in cPanel",
            "Working with File manager",
            "How to create Email ids",
            "How to check errors in Website",
            "Installation of SSL"
          ]
        },
        {
          title: "SEO:",
          items: [
            "On Page SEO",
            "Google Friendly Coding",
            "Page Ranking",
            "Keywords",
            "Baclinks"
          ]
        },
        {
          title: "Freelancing",
          items: [
            "Freelancing training for earn money.",
            'Note: After complete this course that will be rewarded a certficate.'
          ]
        }
      ],


      feebtn: "35000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 103,
      bgheading: "MERN stack (Web)",
      text: 'Learn to build fast full-stack web applications using MongoDB, Express, React & Node.js',
       topimage:course2,

      courseheading: [

        'MERN stack course in Rawalpindi',
        ' If you are search MERN stack course trainig center or MERN stack institute in rawalpindi so FIT Computer institute providing MERN stack node js courses in rawalpindi. MERN stack skill is very easy to learn and get money form online platform like facebook freelancing etc. computer institute providing computer courses in rawalpindi pakistan. we are aslo providing c plus plus courses in rawalpindi( c++ course institute in rawalpindi ) web development course in rawalpindi ( web development institute ) , Mobile app development course in rawalpindi , Node js course in rawalpindi'

      ],
       topimage:course2,


      detailParagraphs: [

        'MERN stack course details',
        'MERN stack is a popular JS library for building user interfaces, particularly single-page applications. MERN stack Course in rawalpindi on MERN stack typically cover a range of topics to help you understand and master the fundamentals of building web applications using React. Heres an outline of what you might expect to learn in a MERN stack course'

      ],

          FixPrice :"Rs : 50000/-PKR",


      feedetail: [

        {
          coursetitle: "  Three Months React JS Designing Course",

          courseinstallment: " RS.38 ,000/",

          coursefee: "RS.30 ,000/-"
        },
        {
          coursetitle: "six Months React JS and Node JS courses",
          courseinstallment: "	RS. 50,000/-",
          coursefee: "RS. 45,000/-"

        }
      ],
      learnSections: [
        {
          title: '  Introduction of React.js',
          items: [
            "Introduction and history of react.js",
            "What is React.js and why is it used?",
            "Understanding the virtual DOM (Document Object Model).",
            "Setting up the development environment.",
            "Introduction to JSX syntax and its benefits.",
            "Embedding JavaScript expressions within JSX.",
            "Transforming JSX into regular JavaScript.",
            "Creating functional and class components.",
            "Passing data to components using props.",
            "Managing component reusability and modularity.",
            "Managing component state and understanding its purpose.",
            "Lifecycle methods and their usage.",
            "Updating component state and re-rendering.",
            "Prime Eligibility",
            "Attaching event handlers to components.",
            'Rendering lists of items using the map() function.',
            "Handling form input elements in React.",
            "Keeping form input values controlled by React state.",


          ]
        },
        {

          title: "  Accessing MongoDB from Node.js:",
          items: [
            "Getting Started",
            "The Connection URL",
            "Obtaining a Collection",
            "Inserting Documents.",
            "Updating a Document.",
            "Querying for Documents.",
            "Deleting a Document.",
            "Connection Pooling.",
            "Summary.",
          ]
        },

        {
          title: 'Freelancing',
          items: [


            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate."
          ]
        }
        ,



      ],
      feebtn: "50,000/- PKR",
      buybtn: "BUY NOW"

    },

    {
      id: 84,
      bgheading: "Graphic Designing ",
      text: 'Adobe PhotoShop, Adobe Illustrator,Corel Draw and Adobe inDesign',

       topimage:course3,

      courseheading: [
        "Graphic Designing course in rawalpindi",
        "If you are search graphic designing trainig center or graphic designing institute in rawalpindi so FIT Computer institute providing graphic designing courses in rawalpindi. Graphic designing skill is very easy to learn and get money form online platform like facebook freelancing etc. computer institute providing computer courses in rawalpindi pakistan. we are aslo providing c plus plus courses in rawalpindi( c++ course institute in rawalpindi ) web development course in rawalpindi ( web development institute ) , Mobile app development course in rawalpindi , Node js course in rawalpindi"
      ],

      detailParagraphs: [
        "Course Details",
        "Prepare a career in the high growth field of Graphic design ,no experience or degree required.With a professional training designed by graphic design institute in rawalpindi ,get a fast track to a competative paid job. graphic design institute is the best computer institute in rawalpindi/islamabad.there are currently 99,000 U.S. jobs openings in creative web designing ,UI/UX with a median salary of $92,000.",
        "Graphic Designing courses in rawalpindi focus on the interaction that user have with the products like poster making,logo designing,photoshop ,websites ,apps and physical objects . our course will prepare you for a entry level job. You will create design on paper ,digital design tools like adobe phtoshop,Figma,Adobe XD,Adobe Photoshop",
        "Graphic design 1 Month Course Fee = Rs. 9,000/-",
        "Graphic design 2 Months Course Fee = Rs. 18,000/-",
        "Graphic design 3 Months Course Fee = Rs. 22,000/-",
        "you can pay your course fee in installment.",
        "Note: Adobe InDesign(Ai) are include in just 6 Month Graphic Desinging Course.UI Mean you make user interface not UI/UX if you want to enroll in the course of UI/UX which have you make the layout of Mobile App and website you must learn Adobe XD(Axd) tool for this course please contact with FIT computer institute.",


      ],

          FixPrice :"Rs : 22000",


      feedetail: [

        {
          coursetitle: " One Month Graphics Designing Short Course",

          courseinstallment: " -",

          coursefee: "	RS. 9,000/-"
        },
        {
          coursetitle: "Two Months Graphics Designing Short Course",
          courseinstallment: "	RS. 18,000/-",
          coursefee: "RS. 15,000/-"

        },
        {
          coursetitle: "Three Months Graphics Designing Course",
          courseinstallment: "RS. 22,000/-",
          coursefee: "	RS. 20,000/-"

        }
      ],

      learnSections: [
        {
          title: 'Adobe Illustrator Professional:',
          items: [
            "Introduction",
            "Whether it’s a graphic designer, web designer, photographer or digital media expert, Adobe Illustrator is the tool used for digital creative purpose.",
            "It also covers the fundamentals which are required to learn to master the designing skills on Illustrator.",
            "Concept of layers in Illustrator",
            "Concept of masking in Illustrator",
            "Logo design and its fundamentals",
            "Evolution of the alphabet and letter-form design",
            "Working with clients",
            "Process of creating mobile layouts",
            "Process of creating website layouts",
            "Color and its use in digital space",
            "Defining a perspective grid",
            "Drawing artwork in perspective",
            "Saving & Printing your artwork",
            "Saving for the web",
            "Creating and editing gradients",
            "Aligning and distributing objects",
            "Creating files for print & Web",
            "Blur, Gaussian blur",
            "Various tools, tool options",
            "Logo Designing",
            "Brochure Designing",
            "Visiting Cards and Letterheads",
            "Facebook Coverages",
            "3D Logos and 3D Objects",
            "Learn how to create Info Graphics designs",
          ]
        },

        {

          title: '  Adobe Photoshop Professional:',
          items: [
            "Introduction",
            "Adobe Photoshop is a photo editing tool. Adobe Photoshop Professional course is designed as job oriented course for graphics and web designers.",
            "Impact of various photographic compositions",
            "The process of cropping and manipulate photographs to enhance meaning",
            "Layout and advert design/editorial design",
            "Professional layout examples",
            "Process of creating mobile layouts",
            "Process of creating assets for mobile apps (looking at specific design/layout sizes commonly used in mobile app design)",
            "Resolution and quality issues",
            "Viewing/opening documents",
            "Toolbar",
            "Background v layer, creating layers",
            "Changing background",
            "Preserving data",
            "Re-arranging",
            "Hiding, locking/unlocking",
            "Naming, deleting",
            "Layer opacity",
            "Shadow effect",
            "Glow effect",
            "Bevel & Emboss effect",
            "Warp Text",
            "Text with underline and Strikethrough",
            "Text with mask",
            "Color Overlay",
            "Gradient Overlay",
            "Pattern Overlay",
            "Stroke",
            "Image sizes (handout)",
            "Image size vs. canvas size",
            "Cropping (and resizing), plus manual",
            "Image modes",
            "Save options, file formats for InDesign, web etc.",
            "Paths to Illustrator",
            "Keyboard shortcuts",
          ]
        },
        {
          title: ' Corel Draw:',
          items: [
            "Exploring the CorelDraw Screen",
            "File Management",
            "Freehand Tool",
            "Rectangle Tool",
            "Ellipse Tool",
            "Setting Up the Page",
            "Deleting, Moving, Scaling, Rotating & Skewing",
            "Shape Tool - Used to give shape(curve) to a line",
            "Knife Tool - Used to cut an object from node to node",
            "Erase Tool",
            "Using Multiple Workspaces",
            "Customizing the Toolbars",
            "Using Shortcuts",
            "Saving Defaults",
            "Setting File Backup",
            "Outline Pen",
            "Outline Colo",
            "No Outline",
            "Outline Thickness",


          ]
        },
        {
          title: '  Adobe InDesign Professional:',

          items: [
            "Create magazines, newspapers",
            "Create E-Books,flyers.",
            "Postcards, stickers, comics.",
          ]
        },
        {
          title: 'Excercises:',
          items: [
            "icon",
            "Brochures",
            "UI mockups",
            "Banners",
            "Business Cards",
            "Facebooks ads and cover",
            "Info Graphics Designs",
            "Drawing and sketching",
            "Other design exercise games",
            "Redesign an existing brand",
            "Ebook Cover and Layout",
            "Branding Starter Kit",
            "Wallpaper in Adobe Illustrator and Adobe Photoshop",
            "Creating Advertisments with Urdu text",

          ]
        },

        {
          title: 'Freelancing',
          items: [
            " This Course also included Freelancing training for earn money. ",
            "  Note: When student complete his course that will be rewarded certficate."
          ]
        },


      ],

      feebtn: '22000/-PKR',
      buybtn: 'BUY NOW'


    },

    {
      id: 81,
      bgheading: "Front End Web Developement ",
      text: 'HTML ,CSS ,Javascript and Wordpress',
      courseheading: [
        "Best Web Development Course In Rawalpindi",
        ' Earn online money through freelancing and web designing course. In this course you learn html , css , javascript bootstrap and freelance training. Get this golden opportunity fast.'
      ],
       FixPrice :"Rs : 25000/-PKR",

       topimage:course4,


      feedetail: [

        {
          coursetitle: " Three Months Web development Course in Rawalpindi",

          courseinstallment: "  RS. 25,000/-",

          coursefee: "	RS. 22,000/-"
        },
        {
          coursetitle: "Six Months Web development Course in Rawalpindi",
          courseinstallment: "	RS. 35,000/-",
          coursefee: "RS. 32,000/-"

        }
      ],

      detailParagraphs: [
        "Web Development Course Details",
        "Pakistan is currently in need of dollars. FIT Computer institute is providing its students with the opportunity to earn an online dollar by taking web design and web development courses. You are destined to become a professional web developer after completing this course.",
      ],
      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: " Introduction:",
          items: [
            "  Introduction to web designing   ",
            "    Editors and Browsers     ",
            "Domain and Hosting ",
            "Differentiate between Static and Dynamic Websites"
          ]
        },
        {
          title: " HTML 5:",
          items: [
            "Introduction",
            "Basic Syntax of html document",
            "Elements & Attributes",
            "Headings & Paragraphs",
            "Links & Lists",
            "Symbols & Entities",
            "Images & Color Codes",
            "Table",
            "Form",
            "Iframes & Comments",
            "Media Elements",
            "HTML 5 Semantic Elements",
            "Meta tags",

          ]
        },
        {
          title: " CSS 3.0:",
          items: [
            "Introduction and Syntax of CSS",
            "Styling of Headings and Paragraphs",
            "  Styling with id & Class    ",
            " Inline and Block level Elements ",
            "  Height Width of Elements    ",
            " Working with Borders",
            " Styling with Background images   ",
            " Styling of Buttons  ",
            " Styling of Forms     ",
            " Box Model ",
            "    Positions  ",
            " Animations",
            "   Transitions ",
            "  Styling with Icons ",
            "   Using of External Fonts   ",
            " Styling with Pseudo class ",
            "     Gradients ",
            " Box Shadow & Box Sizing",
            "  Creation of Menu and Dropdown menu  ",
            " Responsive Web layout with Media Queries  ",
            "   Web Layout with Flex Box   ",

          ]
        },
        {
          title: "JavaScript:",
          items: [
            "  Introduction ",
            " Syntax  ",
            "   Popup Boxes",
            "  Variables ",
            " Operators  ",
            "  Functions ",
            "   Conditional Statements",
            " Array  ",
            "  Loops",

            "  Events ",
            " Animations With Javascript  ",
            "Form Validation   ",
            "   CSS in Javascript",
            " Objects  ",

          ]
        },
        {
          title: "Bootstrap:",
          items: [
            " Grid system  ",
            " Jumbotron  ",
            " Responsive navigation bar  ",
            " Slider  ",
            " Typography  ",
            "  Tables & Forms ",
            " Buttons & Messages Alerts  ",
            "  Pagination & Spinners ",
            "   Modal & Cards",
            "  Responsive web layout ",
          ]
        },
        {
          title: "  jQuery:",
          items: [
            "  Introduction ",
            "Syntax   ",
            "  Selectors ",
            "  Events ",
            "  Get/Set ",
            " Add/Remove  ",
            " CSS Classes  ",
            " Traversing  ",
            "   Animations With Jquery",
            " Professionals Uses of Jquery  ",
            "   ",]
        },
        {
          title: "CPanel:",
          items: [
            " Introduction of Domains and cPanel  ",
            " Understanding of Web Hosting  ",
            " Uploading of website  ",
            " How to create database in cPanel  ",
            "  Working with File manager ",
            "  How to create Email ids ",
            " How to check errors in Website  ",
            " Installation of SSL Certificate  ",

          ]
        },
        {
          title: "SEO:",
          items: [
            "  On Page SEO ",
            "   Google Friendly Coding",
            " Page Ranking  ",
            "Keywords",
            " Backlinks  ",

          ]
        },

        {
          title: "Wordpress",
          items: [
            " Freelancing ",
            "  This Course also included Freelancing training for earn money.",
            " Note: When student complete his course that will be rewarded certficate.  ",


          ]
        }
      ],


      feebtn: "25000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 92,
      text: " Learn to build powerful Android & iOS apps using modern tools",
      bgheading: "Mobile app development",
      courseheading: [
        "Mobile app development course in rawalpindi",
        "  If you are search mobile app trainig center or Mobile app development institute in rawlpindi you in right place so FIT computer institute providing mobile app development course in rawalpindi.",
        " Mobile app development skill is very easy to learn and get money form online platform like facebook freelancing etc. computer institute providing computer courses in rawalpindi pakistan. we are aslo providing c plus plus courses in rawalpindi( c++ course institute in rawalpindi ) web development course in rawalpindi ( web development institute ) , Mobile app development course in rawalpindi , Node js course in rawalpindi   "
      ],
       FixPrice :"Rs : 25000/-PKR",

       topimage:course5,
 
      feedetail: [

        {
          coursetitle: "  Three Months Mobile App Development Course in Rawalpindi",

          courseinstallment: "  RS. 25,000/-",

          coursefee: "RS. 24,000/-"
        },

      ],

      detailParagraphs: [
        "Mobile app development course details",
        "Mobile App technology now a days increase day by day and the common operation system is use android most of the Companies. We provide training of android app development course in Rawalpindi, Islamabad.",
        "This course design for professionals and specially for student that want to make earning or make career in this technology in which we include firebase with Room database that are best name in mobile technology for database and interact with play store how to publish app and how to ASO of Application. So if a student or Professional that earn money with freelancing then this easy way to start career in mobile Apps.",
      ],
      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "Android Beginner",
          items: [
            "Introduction to Android",
            "Create Your First Android",
            "Layouts, Views and Resources",
            "InternsText and Scrolling Views",
            "Understanding Activities and Intents",
            "The Activity Lifecycle and Managing State",
            "Drawables Styles, and Themes",
            "Material Design",
            "Providing Resources for Adaptive Layouts",
            "AsyncTask and AsyncTaskLoader",
            "Testing, debugging, and using support libraries",
            "Menus",
            "Java interface",
            "Native library implementation",
            "Building the sample native library",
            "Using native functions in Java code",
            "InternSecurity and Permissionsship",
            "Triggering, scheduling and optimizing background tasks",
            "Preferences and Settings",
            "Notifications",
            "Scheduling Alarms",
            "Services",
            "Web Views",
            "Shared Preferences",


          ]
        },
        {
          title: "Android Advance",
          items: [

            "Introduction to kotlin",
            "Room Database",
            "Google Map",
            "SQLite Database",
            "Sharing data with content providers",
            "Share Data Through Content Providers",
            "Third Party Api",
            "Interface",
            "Firebase",
            "JSON",
            "Rest Api",
            "Ads Integration",
            "Admob Integration",
            "Publish App On Play store",
            "Note: At the end of the course we will provide Internship",


          ]
        },
        {
          title: "Android Projects:",
          items: [
            "Android-based Function Generator",
            "Software-defined Radio",
            "Home Automation System using Arduino Uno",
            "Android Bluetooth-based Chatting App",
            "Smart Travel Guide Application",
            "Surveillance Camera",
            "Android Controlled Robot",
            "Home Automation System",
            "Arduino-based Visitor Alarm",
            "Arduino-based GPS Clock",
            "DC Motor Controller",
            "Automatic Battery Charger",
            "Railway Level Gate Crossing",
            "Military Spying and Bomb Disposal Robot",
            "Remote Password Security",
            "Password-based Circuit Breaker",
            "Firefighter Robot",
            "Antenna Positioning System",
            "Hovercraft",


          ]
        },
        {
          title: "Freelancing:",
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate.",

          ]
        },

      ],


      feebtn: "25000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 88,
      bgheading: "JAVA Programming",
      text: "Basic java,Advance JAVA & Desktop Software",
      courseheading: [
        "Java Programming Course In Rawalpindi",
        ' Earn online money through freelancing and java course.'
      ],
          FixPrice :"Rs : 18000/-PKR",

       topimage:course6,

      feedetail: [

        {
          coursetitle: " Three Months java programming Course in Rawalpindi",

          courseinstallment: "  RS. 18000/-",

          coursefee: "	RS. 18,000/-"
        },

      ],

      detailParagraphs: [
        "JAVA Course Details",
        "Pakistan is currently in need of dollars. FIT Computer institute is providing its students with the opportunity to earn an online dollar by taking web design and web development courses. You are destined to become a professional web developer after completing this course.",

      ],
      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: " Java Basic::",
          items: [
            " Java Introduction   ",
            "    Java Language Basics Intro     ",
            "Architecture of the Java Virtual Machine ",
            "Java Language Specification",
            "Java Memory Model - JMM",
            "The Java Dynamic Compilation",
            "Operators and Conditionals",
            "Expressions, Statements and Blocks",
            "Variables",
            "Data Types",
            "size of and typed",
            "Conditions",
            "Decision Making Statement",
            "Logical operators",
            "Selection / Multiple Selection",
            "Iterations/Loops",
            "Loops and Branching",
            "Classes and Interfaces",
            "Singleton Types",
            "Arrays",



          ]
        },
        {
          title: " Java Advance:",
          items: [
            "Creating Objects with Factories",
            "Inner Classes and Closures",
            "Introduction to Polymorphism",
            "Using Interface for Types",
            "Inheritance, Polymorphism and Abstract types",
            "Overriding, Overloading and Abstract Methods",
            "Dynamic Binding, designing for runtime efficiency",
            "Handling Exceptions Try, Catch, and Finally Blocks",
            "Creating Custom Exceptions",
            "Atomic and volatile variables",
            "Synchronization for code blocks and methods",
            "Common Data Structures trees and Graphs",
            "Callable interface and futures",
            "Types of java Applications, Desktop",



          ]
        },
        {
          title: " Projects in Java:",
          items: [
            "Airline reservation system",
            "Gas booking system",
            "Video Streaming",
            "Online shopping platform",
            "Restaurant Management System",
            "Cinema booking system",
            "Bus reservation system",
            "Car Rental System",
            "Event management system",
            "Invoice Billing System",
            "Mail server project",




          ]
        },
        {
          title: "Freelancing",
          items: [
            "  This Course also included Freelancing training. ",
            "Note: After the completion of course students will rewarded certficate",


          ]
        },

      ],


      feebtn: "18000/- PKR",
      buybtn: "BUY NOW"

    },

    {
      id: 86,
      bgheading: '6 Month Certificate Courses',
       topimage:course7,

      text: [
        "App Developement",
        "Web Developement ",
        "Graphic Desingning"

      ],
      courseheading: [
        "Six Months Certificate Courses in Rawalpindi Pakistan",

        "If you are search graphic design trainig center or graphic design institute in rawlpindi so FIT computer institute providing graphic design course in rawalpindi. Graphic design skill is very easy to learn and get money form online platform like facebook freelancing etc. computer institute providing computer courses in rawalpindi pakistan. we are aslo providing c plus plus courses in rawalpindi( c++ course institute in rawalpindi ) web development course in rawalpindi ( web development institute ) , Mobile app development course in rawalpindi , Node js course in rawalpindi"
      ],

      detailParagraphs: [
        "Course Details",
        "short courses computer Institute is now launching these six months courses with internship. these course insclude Web development course in rawalpindi",
        "Wait no more to start learning today and become a professional in six months with two certificates. One certificate will be awarded for courses completion and another for doing internship."

      ],
        FixPrice :"Rs : 90000/-PKR",



      feedetail: [

        {
          coursetitle: " 3 month Short Course in Rawalpindi",
          courseinstallment: "RS. 22,000/-PKR",
          coursefee: "	RS. 20,000/-"
        },
        {
          coursetitle: " 6 month Short Course in Rawalpindi",
          courseinstallment: "RS. 35,000/-PKR",
          coursefee: "	RS. 32,000/-"
        },

      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: " Graphics Designer in 6 months:",
          items: [
            "1st Month: Adobe Photoshop [ adobe photoshop course contents ]",
            "2nd Month: Corel Draw [ corel draw course contents ]",
            "3rd Month: Adobe Illustrator with InDesign [ adobe illustrator course contents ]",
            "4th Month:Web Designing",
            "HTML",
            "CSS",
            "Wordpress",
            "Internship",



          ]
        },
        {
          title: " Full Stack PHP Web Developer in 6 months:",
          items: [

            "Front End Designing [ web designing course contents ]",
            "PHP Programming [ php mysql course contents ]",
            "Wordpress",
            "SEO Techniques",
            "Internship",




          ]
        },
        {
          title: "Android Development in 6 months:",
          items: [
            "Java Programming [ java programming course contents ]",
            "Android Development[ Android Development course contents ]",
            "AndroInternshipid",
            "Freelancing Training",



          ]
        },
        {
          title: "Freelancing:",
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate.",

          ]
        },

      ],


      feebtn: "25000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 91,
      bgheading: 'Coral Draw',
      text: "Flyer Designing, Visiting card Desingning and logo Designing and  Web Developement.",
       topimage:course8,


      courseheading: [
        "Coral Draw Course in Rawalpindi Pakistan",
        ""
      ],

      detailParagraphs: [
        "Course Details",
        "Wait no more to start learning today and become a professional in six months with two certificates. One certificate will be awarded for courses completion and another for doing internship.",
      ],
         FixPrice :"Rs : 9000/-PKR",



      feedetail: [

        {
          coursetitle: " 2-3 month Corel Draw Course ",
          courseinstallment: "-",
          coursefee: "	RS. 9,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: " Corel Draw Course Outline:",
          items: [
            "Exploring the CorelDraw Screen",
            "File Management",
            "Freehand Tool",
            "Rectangle Tool",
            "Ellipse Tool",
            "Setting Up the Page",
            "Deleting, Moving, Scaling, Rotating & Skewing",
            "Shape Tool - Used to give shape(curve) to a line",
            "Knife Tool - Used to cut an object from node to node",
            "Erase Using Multiple Workspaces",
            "Customizing the Toolbars",
            "Using Shortcuts",
            "Saving Defaults",
            "Setting File Backup",
            "Outline Pen",
            "Outline Color",
            "No Outline",
            "Outline Thickness"

          ]
        },


        {
          title: "Freelancing:",
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate.",

          ]
        },

      ],


      feebtn: "9000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 87,
      bgheading: 'C++ Computer Course',
      text: "Basic Programming,Advance Level oop & Data structure Algorithm",

       topimage:course9,

      courseheading: [
        "Computer basic course in lslamabad rawalpindi 2024",
        "   C C++ / C plus plus course in rawalpindi 2024 programme which is introduced by web development institute or traning center in rawalpindi 2024. FIT computer institute is the one of best the computer institute in rawalpindi and islamabad. FIT computer institute providing computer short courses in rawalpindi islamabad from 2012. why we say FIT is one of the best computer institute in rawalpindi and islamabad beacuse our student get highr postion in different departments. our students reviews explain what i provide the student. student also say's FIT is one of the best computer institute in rawalpindi islamabad. FIT institute also providing web development course in rawalpindi , Mobile App development course in rawalpindi , Graphic Designing course in rawalpindi and Best MS Office course in rawalpindi"
      ],

      detailParagraphs: [
        "Course Details",

      ],
           FixPrice :"Rs : 10500/-PKR",



      feedetail: [

        {
          coursetitle: " C++ Course in Rawalpindi",
          courseinstallment: "-",
          coursefee: "	RS. 12500/-PKR"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "   Introduction to C++:",
          items: [
            "Program Structure",
            "Compile & Execute C++ Program",
            "Semicolons & Blocks in C++",
            "C++ Keywords",

          ]
        },
        {
          title: " Variables:",
          items: [

            "Variable Definition in C++",
            "Variable Declaration in C++",
            "Variables Scope",
            "Data Types",
            "Local variables",
            "Global variables",
            "size of and typed",
            "Decision Making Statement",
            "Logical operators",
            "Selection / Multiple Selection",
            "Iterations/Loops",
            "sorting",

            "Buble sort",
            "selection sort",



          ]
        },
        {
          title: " Arrays:",
          items: [
            "Static array",
            "Dynamic Array",
            "One Dimension Array",
            "Two Dimension Array",





          ]
        },
        {
          title: "  Pointers:",
          items: [
            "What are Pointers?",
            "Using Pointers in C++",
            "Pointers in C++",
            "Null Pointers",
            "Pointer Arithmetic",
            "Pointers vs Arrays",
            "Array of Pointers",
            "Pointer to a Pointer",
            "Passing Pointers to Functions",
            "Return Pointer from Functions",
            "Strings Functions",
            "File handling",
            "Definition of function",
            "Pass by value",
            "Pass by Reference",
            "Function calling",
            "Operators",
            "Built-in Functions",
            "User-defined Functions",
            "Inline Functions",
            "Recursion",
            "Class String",
            "Dynamic Memory"


          ]
        },

        {
          title: 'C++ with OOP:',
          items: [

            "Classes",
            "Constructor/Destructor",
            "Inheritance",
            "Type of Inheritance",
            "Polymorphism",
            "Operator Overloading",
            "Encapsulation",
            "Friend Functions",
            "Friend Classes",
            "Virtual Functions",
            "Type Conversion",
            "Exception Handling",
            "Base and Derived class",
            "Function overloading",

          ]



        },
        {

          title: 'Project in C++:',
          items: [
            " Bank Management System",
            " Calendar Application",
            " Contact Management System",
            " Cricket Score Sheet",
            " Customer Billing System",
            " Cyber Management System",
            " Department Store Management System",
            " Employee Record System",
            " Hangman Game",
            " Hospital Management System",
            " Library Management System",
            " Medical Store Management System",
            " Modern Periodic Table",
            " Pacman Game",
            " Personal Diary Management System",
            " Phonebook Application",
            " Quiz Game",
            " School Billing System",
            " Snake Game",
            " Student Record System",
            " Telecom Billing System",
            " Tic-Tac-Toe Game",
            "  Typing Tutor"


          ]
        },
        {
          title: "Freelancing",
          items: [
            "This Course also included Freelancing training for earn money.",
            " Note: When student complete his course that will be rewarded certficate. "
          ]

        }

      ],


      feebtn: "12500/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 82,
      bgheading: 'Microsoft Office Course',
      text: "MS Word, MS Excel and MS Powerpoint",
      courseheading: [
        "MS Office Courses in Rawalpindi Pakistan",
        ""
      ],
       topimage:course10,
      FixPrice :"Rs : 10500/-PKR",

      detailParagraphs: [
        "Course Details",
        " MS office course special design for students and professionals . In this course, you will get training about computer, how to use computer which have you make application salary slip letters and other actives in office work. This is not just a course, we also train you how to work in professional field. We will provide training of MS Word which have MS Excel, MS office and MS power point and basic knowledge of computer , which have internet email or typing. The outline of course is mention here.19,876 Total Students "
      ],


      feedetail: [

        {
          coursetitle: " 2 month MS Offiice course in Rawalpindi",
          courseinstallment: " -",
          coursefee: "	RS. 10500/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "   Basics of Computer:",
          items: [
            "Introduction to Computer",
            "Input Output Devices",
            "Software and Hardware",
            "Understanding of Hard disk and RAM",
            "Using of Keyboards",
            "Typing drill",





          ]
        },
        {
          title: "   Microsoft Windows:",
          items: [

            "Turn on/off Computer",
            "Settings of Desktop",
            "Start menu",
            "Settings of Date/Time",
            "Creating New Folder",
            "Working of Recycle bin",
            "Changing Icons",
            "Working of My computer",
            "Settings with Control Panel",

          ]
        },
        {
          title: "  Microsoft Word Professional:",
          items: [
            "Introduction to MS word",
            "Creating a new document",
            "Action Buttons and Quick Access Tollbar",
            "Zoom in/out",
            "Different Views",
            "Tabs and Ribbons",
            "Saving document",
            "Working with Clipboard",
            "Working with Font",
            "Working with Paragraph",
            "Applying Different Styles on Documents",
            "Find and Replace",
            "Working with pictures and Shapes",
            "Creating Tables",
            "Inserting Charts",
            "Inserting Textbox",
            "Header and Footers",
            "Practice of Different Professional Documents",
            "Working with Equations and Symbols",
            "Applying Watermark",
            "Page Color and Page Borders",
            "Page Setup",
            "Using of Columns",
            "Inserting of Footnote and Endnote",
            "Creating of Table of Contents",
            "Mail Merge",
            "Spelling Grammar",
            "Margins of Documents",
            "Secure Documents",
            "Printing of Documents",
            "Exporting of Documents",
          ]
        },
        {
          title: "Microsoft Excel Professional::",
          items: [
            "Introduction",
            "Name Box and Formula bar",
            "Working with Rows and Columns",
            "Creating sheets",
            "Formatting Cells",
            "Styling of Cells",
            "Use of fill and Clear",
            "Sorting and Filtering",
            "Conditional Formatting",
            "Find and Select",
            "Inserting Charts",
            "Different Formulas and Functions",
            "Pivot tables",
            "Secure Workbook",
            "Printing of Sheets",
            "Data Validation",
            "Importing Data",
            "Data Tools",
            "Creating and Running Macros",
            "Practices of Different Professionals Sheets"

          ]
        },
        {
          title: 'Microsoft PowerPoint Professional:',
          items: [
            "Introduction",
            "Selecting Themes",
            "Customizing Themes",
            "Working with Slides",
            "Slides Layout",
            "Inserting Audio and Video",
            "Appling Transitions",
            "Appling Sounds on Transitions",
            "Appling Animations on Text and Pictures",
            "Setting Animations Timing",
            "Some Advanced Animations",
            "Understanding of Slide Show",
            "Converting Slide Show into Video",
            "Creation of a Professional Presentation",
            "Typing Tutor",
            "Typing Drills on Typing Tutor to Increase Typing Speed."
          ]
        },

        {
          title: 'Freelancing',
          items: [
            " This Course also included Freelancing training ",
            " Note: After the completion of course students will rewarded certficate"
          ]

        }

      ],


      feebtn: "10500/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 83,
      bgheading: 'PHP MySQL Course',
      text: "Learn to build dynamic, database-driven web applications using PHP and MySQL.",
       topimage:course11,

      courseheading: [

        "Php MySQL Course in Rawalpindi"
        , "This course for student and professional because this course covers all content that use in market as internship, we trained student as a developer then they can start our career in market as freelancer or as job. During degree every student want to earn money if he/she have any skill then they can start freelancing and freelancing is best choice for earning this skill help to student for earning money a better choice for final year students. We do training of PHP and Laravel course in Rawalpindi Islamabad."
      ],

          FixPrice :"Rs : 25000/-PKR",


      detailParagraphs: [
        "Course Details",
        "This course for student and professional because this course covers all content that use in market as internship, we trained student as a developer then they can start our career in market as freelancer or as job. During degree every student want to earn money if he/she have any skill then they can start freelancing and freelancing is best choice for earning this skill help to student for earning money a better choice for final year students. We do training of PHP and Laravel course in Rawalpindi Islamabad."
      ],


      feedetail: [

        {
          coursetitle: " 3 month php course in Rawalpindi",
          courseinstallment: "-",
          coursefee: "	RS. 25,000/-PKR"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "    Introduction of Php:",
          items: [
            "Introduction and history of PHP",
            "Web Servers(Xampp , Wampp and Lampp ",
            "Differentiate Between Dynamic And Static Websites",
            "Syntax Of PHP",
            "Variables and Constants",
            "Predefined Functions",
            "User defined Functions",
            "String Functions",
            "Operators",
            "Arrays",
            "Loops",
            "Conditional Statements",
            "How to get input from users",
            "Understanding of GET and Post Method",
            "Creating Login and Logout System",
            "Sessions and Cookies",
            "File System",
            "Sending Emails With mail function",

          ]
        },
        {
          title: "  Data Base:",
          items: [


            "Introduction of phpMyAdmin",
            "Creating Database",
            "Creating Tables and Columns in Database",
            "Insertion of Data in Tables",
            "Edit and Delete Data",
            "Import and Export Database",
            "Deleting of Tables and Database",
            "Renaming of Tables and Database",
            "Working with CRUD Operations",
            "Connection Between Database and PHP Script",
            "CRUD Operations with the help of Queries",






          ]
        },
        {
          title: "  CPanel:",
          items: [
            "Introduction of Domains and cPanel",
            "Understanding of Web Hosting",
            "IntUploading of websiteernship",
            "How to create database in cPanel",
            "Working with File manager",
            "How to create Email ids",
            "How to check errors in Website",
            "Installation of SSL Certificate",




          ]
        },
        {
          title: "Freelancing:",
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate.",

          ]
        },

      ],


      feebtn: "25000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 89,
      bgheading: 'Adobe Photoshop',
      text: "Learn professional photo editing and creative visuals — from basics to advanced techniques.",
       topimage:course12,
      
      courseheading: [
        "Adobe Photoshop Course in Rawalpindi",
        "Adobe Photoshop is a photo editing tool. Photoshop continues to fortify its position as the best photo editing software around. Our Adobe Photoshop Professional course is best for graphics and web designers. If you need layered image editing, including typography, 3D modeling, and drawing, you need Photoshop. It also adds support for SVG OpenType fonts and getting started easier, with new templates and in-program search."
      ],

      detailParagraphs: [
        "Course Details",
        "Adobe Photoshop is a photo editing tool. Photoshop continues to fortify its position as the best photo editing software around. Our Adobe Photoshop Professional course is best for graphics and web designers. If you need layered image editing, including typography, 3D modeling, and drawing, you need Photoshop. It also adds support for SVG OpenType fonts and getting started easier, with new templates and in-program search."
      ],

        FixPrice :"Rs : 9000/-PKR",


      feedetail: [

        {
          coursetitle: " 1 month Adobe Photoshop Course in Rawalpindi",
          courseinstallment: "-",
          coursefee: "	RS. 9,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: " Adobe Photoshop Course Outline:",
          items: [
            "Photo Editing",
            "Photo extraction from background",
            "Colors fixing and improvement",
            "Image Mixing",
            "Image enhancements",
            "Special effects with photos",
            "PDF Presentations",
            "Batch operation with Actions",
            "Logo Designing",
            "The key elements of this course are:",




          ]
        },
        {
          title: " Photoshop Course Content / Syllabus:",
          items: [

            "Bitmaps and vectors",
            "Image modes",
            "Image size and resolution",
            "Image color concepts",


          ]
        },
        {
          title: "Basic Tools and Color:",
          items: [
            "Overview of the Toolset",
            "Brushes and brush types",
            "Adjusting brushes",
            "Color using eye dropper",
            "Numerical color",
            "Pantone color",
            "The background image",
            "Erasing and canvas color",






          ]
        },
        {
          title: "Selection:",
          items: [
            "Essential shortcuts",
            "The marquee tools",
            "Adding and subtracting selections",
            "Automatic selection using the wand tool",
            "Auto selection using the quick selection brush",
            "Manual cut-out techniques",
            "Transforming a selection",
            "Understanding selection edges",
            "Refining selection edges",
            "Saving / reloading a selection",
          ]
        },
        {
          title: 'Layers:',
          items: [
            "Layer blending modes",
            "Layer opacity",
            "Transforming layers",
            "Working with multiple layers",

          ]
        },
        {
          title: 'Layer Masks:',
          items: [

            "Introduction to layer masks",
            "Creating a layer mask from a selection",
            "Modifying a layer mask using the paintbrush tool",
            "The gradient tool and masks",

          ]
        },
        {
          title: 'Image adjustments:',
          items: [
            "Using adjustment layers",
            "Levels explained",
            "Color balance and color considerations",
            "Hue and saturation",
            "Changing certain color in image",
          ]
        },
        {
          title: 'Image adjustments:',
          items: [
            "Fixing raw photo",
            "Creating Professional Visiting Card",
            "Creating Wallpapers",
            "Creating Professional Logos",
            "Different Icons and symbols",

          ]
        },
        {
          title: 'Freelancing',
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate"
          ]

        }

      ],


      feebtn: "9000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 90,
      bgheading: 'ASP .NET MVC COURSE',
      text: "Learn to build secure, applications using ASP.NET from fundamentals to real projects",
       topimage:course13,

      courseheading: [
        "'ASP .NET Course in Rawalpindi Pakistan",

        "ASP.NET MVC course in Rawalpindi is a web application framework developed by Microsoft that implements the model–view–controller pattern. It is no longer in active development. It is open-source software, apart from the ASP.NET Web Forms component, which is proprietary."],

      detailParagraphs: [
        "Course Details",
        "ASP.NET MVC course in Rawalpindi is a web application framework developed by Microsoft that implements the model–view–controller pattern. It is no longer in active development. It is open-source software, apart from the ASP.NET Web Forms component, which is proprietary."
      ],

           FixPrice :"Rs : 30000/-PKR",


      feedetail: [

        {
          coursetitle: " 2-3 Asp .NET Course in Rawalpindi",
          courseinstallment: "-",
          coursefee: "	RS. 30,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: " Asp.net Mvc course Outline:",
          items: [
            "Overview introduction of Asp.net",
            "Adding Styles and Classes to Your Web Pages",
            "Borders, Backgrounds, and Floating Divs",
            "Building Web Page Layouts with CSS",
            "Application State",
            "Multithreading Issues",
            "Cookies",
            "HTML Server Controls",
            "Web Forms Server Controls",
            "Rich Controls",
            "Validation Controls",
            "USER CONTROL",
            "Models",
            "Views",
            "Security",
            "Routing",
            "Performance",
            "Testing and Debuging",
            "Web API",
            "integration",
            "Exploring a Razor Pages Application",
            "Exploring a Web API Application",
            "Exploring an MVC Application",
            "Working with Static Files",
            "Creating custom middleware",
            "Using dependency injection",
            "Injecting a service to a controller",
            "Adding controllers and actions to an MVC application",
            "Configuring routes by using the routing table",
            "Configuring routes using attributes",
            "Adding an action filer",
            "Adding a model",
            "Working with Forms",
            "Add Validation",
            "Adding Entity Framework Core",
            "Use Entity Framework Core to retrieve and store data",
            "Use Entity Framework Core to connect to Microsoft SQL Server",

          ]
        },
        {
          title: " Project in Asp.net:",
          items: [

            "Behavioral Analysis using Gamification Techniques",
            "Online Charity Management System",
            "Online Attorney Appointment Scheduling Software",
            "Online Salon & Spa Booking System",
            "Online Newspaper Delivery Management System",
            "Ecommerce Backend Security using Biometric Authentication",
            "Online Unused Medicine Donation for NGOs",
            "Online Course and Examination Management System",
            "Business Promotion and Offer Trend Analysis",
            "Smart Health Disease Prediction Using Naive Bayes",

          ]
        },

        {
          title: "Freelancing:",
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate.",

          ]
        },

      ],


      feebtn: "30,000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 93,
      bgheading: 'React Native App',
      text: "React Native, Javascript and Firebase",
       topimage:course14,

      courseheading: [
        "React Native App Course in Rawalpindi Pakistan",
        " In freelancing and in a job every company want a professional developer. FIT Computer institute design a mobile app development course in Rawalpindi branch. This course gives you a core understating about hybrid and native mobile app development. "
        , "React native mobile app development course design for creating hybrid apps like android ,ios . we are also provide multi courses if you want to check list of computer short course its given below."
      ],

      detailParagraphs: [
        "Course Details",
        "Prepare a career in the high growth field of mobile app designing ,no experience or degree required.With a professional training designed by react native institute in rawalpindi ,get a fast track to a competative paid job. FIT computer is the best computer institute in rawalpindi/islamabad.there are currently 99,000 U.S. jobs openings in creative android app designing , ios app development with a median salary of $92,000.",
        "React native mobile app development course is designing for understanding main concept of android app and ios app . If you skip these concept you Clint didn’t satisfied with your mobile app that will develop by you. So why you are wait come and enroll yourself in our most advanced mobile app development course"

      ],

         FixPrice :"Rs : 35000/-PKR",


      feedetail: [


        {
          coursetitle: " App Development course in rawalpindi",
          courseinstallment: "RS. 37,000/-PKR",
          coursefee: "	RS. 35,000/-"
        },

      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "   Basic concepts:",
          items: [
            "Introduction to React Native course",
            "Advantages of React Native",
            "Comparison with other mobile development frameworks",
            "Installation of Node.js and npm",
            "Configuring the React Native CLI",
            "Setting up Android emulators/simulators",
            "Setting up iOS emulators/simulators",
            "Understanding React Native components",
            "JSX syntax and usage",
            "Styling React Native components",
            "InternsLayout techniques for responsive UIship",
            "InternsWorking with text componentship",
            "Handling images in React Native",
            "Creating buttons and implementing interactivity",
            "Implementing input fields for user input",
            "InternsHandling user gestures and touch eventship",
            "Introduction to React Navigation library",

          ]
        },
        {
          title: "  React native course core concepts:",
          items: [

            "Implementing stack navigation",
            "Creating tab navigators",
            "Implementing drawer navigation",
            "Passing parameters between screens",
            "Deep linking in React Native apps",
            "Handling navigation events",
            "Managing component-level state with React Hooks",
            "useState Hook for managing state",
            "useEffect Hook for handling side effects",
            "useContext Hook for accessing global state",
            "Introduction to Redux for state management",
            "Add Redux in a React Native app",
            "Creating actions and reducers in Redux",
            "Connecting components to Redux store",
            "Managing asynchronous actions with Redux Thunk",
            "Introduction to MobX for state management",
            "Observing state changes in React components",
            "Making HTTP requests with Fetch",
            "Handling RESTful APIs in React Native",
            "Retrieving and displaying data from APIs",
            "Uploading files to a server",
            "Downloading files and videos in a React Native app",
            "Implementing user authentication with APIs",
            "Integrating OAuth for third-party authentication",
            "Get accessing the device camera in React Native",
            "InternsAdd and show photos from the photo libraryhip",
            "Implementing geolocation services in React Native",
            "Working with device sensors and orientation",
            "Sending push notifications to users",
            "Displaying local notifications in the app",
            "Integrating native code in React Native",
            "Create custom native modules for specific functionality",
            "Accessing device-specific APIs and functionalities",
            "Using Jest and Enzyme for testing",
            "Debugging React Native apps with console",
            "Debugging using Chrome DevTools",
            "Handling common debugging scenarios",
            "InterResolving error messages in React Nativenship",
            "Implementing code splitting for optimized performance",
            "Add lazy loading components for increased app performance",
            "Memory management techniques in React Native",
            "Reducing app size for better performance",
            "Profiling and optimizing rendering performance",
            "Generating APK files for Android",
            "Generating IPA files for iOS",
            "Signing APK and release APK management for Android",
            "Publishing apps on Google Play Store",
            "Publishing apps on Apple App Store",
            "InternsHandling app updates and versioninghip",
            "Implementing localization in React Native apps",
            "Internationalization considerations in mobile apps",
            "Accessibility guidelines for inclusive app design",
            "Integrating third-party libraries in React Native",
            "Exploring React Native documentation",
            "Official resources for learning React Native",
            "Recommended websites for React Native updates",
            "Staying up-to-date with new React Native releases",
            "Create a complete React Native application from start",
            "Applying learned concepts to real-world problems",
            "Implementing industry-standard practices and patterns",
            "Error handling in React Native apps",
            "Implementing loading indicators and progress bars",
            "Implementing animations in React Native",
            "Implementing offline functionality with React Native",
            "Implementing navigation transitions and animations",
            "Developed responsive layouts for different screen sizes",
            "Add dark mode in a React Native app",
            "Implementing form validation in React Native",
            "Handling data persistence in React Native",
            "Implementing search functionality in React Native",
            "Implementing in-app purchases in React Native",
            "Implementing real-time communication with WebSocket",
            "Add chat functionality in a React Native app",
            "Implementing maps and location-based services",
            "Implementing data visualization in React Native",
            "Implementing offline synchronization with APIs",
            "Implementing biometric authentication in React Native",







          ]
        },

        {
          title: "Freelancing:",
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate.",

          ]
        },

      ],


      feebtn: "35000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 94,
      bgheading: 'Certificate in IT',
      text: "MS Office, C++ & Graphic 1 Module",
       topimage:course15,
      
      courseheading: [
        "Certificate in IT Course in Rawalpindi Pakistan",
"This course in specially Designing for non IT Persons Who have no idea of Information technology .they can start there career with the help of this course the course cover up all need of student that are use full in market. In this course will you learn complete MS office + Graphic Designing + Programming fundamental. An IT certification is a designation demonstrating a professional's competency in a certain aspect of technology. Professional certification is the process by which a person proves that he or she has the knowledge, experience and skills to perform a specific job and the tasks in which they have been trained. We offer this couse in Rawalpindi Islamabad with a good manner."
      ],

      detailParagraphs: [
        "Course Details",
        "This course in specially Designing for non IT Persons Who have no idea of Information technology .they can start there career with the help of this course the course cover up all need of student that are use full in market. In this course will you learn complete MS office + Graphic Designing + Programming fundamental. An IT certification is a designation demonstrating a professional's competency in a certain aspect of technology. Professional certification is the process by which a person proves that he or she has the knowledge, experience and skills to perform a specific job and the tasks in which they have been trained. We offer this couse in Rawalpindi Islamabad with a good manner."
      ],

           FixPrice :"Rs : 35000/-PKR",


      feedetail: [

        {
          coursetitle: " 2-3 month certificate in IT Course in Rawalpindi",
          courseinstallment: "RS. 37,000/-PKR",
          coursefee: "	RS. 35,000/-"
        },

      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "   Microsoft Office:",
          items: [
            "Microsoft Word",
            "Microsoft Excel",
            "Microsoft Powerpoint",
            "Typing Speed Excercises",





          ]
        },
        {
          title: "    Programming Fundementals:",
          items: [

            "Introduction to C++:",
            "Program Structure",
            "InternCompile & Execute C++ Programship",
            "Semicolons & Blocks in C++",
            "C++ Keywords",






          ]
        },
        {
          title: "Android Development in 6 months:",
          items: [
            "Java Programming [ java programming course contents ]",
            "Android Development[ Android Development course contents ]",
            "AndroInternshipid",
            "Freelancing Training",



          ]
        },
        {
          title: "Variables::",
          items: [
            "Variable Definition in C++",
            "Variable Declaration in C++",
            "Variables Scope",
            "Data Types",
            "Local variables",
            "Global variables",
            "size of and typed",
            "Conditions",
            "lkjfklDecision Making Statementajfs",
            "Logical operators",
            "Selection / Multiple Selection",
            "Iterations/Loops",
            "sorting",
            "Buble sort",
            "selection sort",
          ]
        },

        {

          title: 'Arrays:',
          items: [
            "Static array",
            "Dynamic Array",
            "One Dimension Array",
            "Two Dimension Array",


          ]
        },
        {
          title: 'Pointers',
          items: [
            "What are Pointers?",
            "Using Pointers in C++",
            "Pointers in C++",
            "Null Pointers",
            "Pointer Arithmetic",
            "Pointers vs Arrays",
            "Array of Pointers",
            "Pointer to a Pointer",
            "Passing Pointers to Functions",
            "Return Pointer from Functions",
            "Strings Functions",
            "File handling",
            "Definition of function",
            "Pass by value",
            "Pass by Reference",
            "Function calling",
            "Operators",
            "Built-in Functions",
            "User-defined Functions",
            "Inline Functions",
            "Recursion",
            "Class String",
            "Dynamic Memory",


          ]
        },
        {
          title: 'Graphics Designing:',
          items: [
            "ADOBE ILLUSTRATOR PORFESSIONAL",
            "Whether it’s a graphic designer, web designer, photographer or digital media expert, Adobe Illustrator is the tool used for digital creative purpose.",
            "It also covers the fundamentals which are required to learn to master the designing skills on Illustrator.",
            "Concept of layers in Illustrator",
            "Concept of masking in Illustrator",
            "Logo design and its fundamentals",
            "Evolution of the alphabet and letter-form design",
            "Working with clients",
            "Process of creating mobile layouts",
            "Process of creating website layouts",
            "Color and its use in digital space",
            "Defining a perspective grid",
            "Drawing artwork in perspective",
            "Saving & Printing your artwork",
            "Saving for the web",
            "Creating and editing gradients",
            "Creating and editing gradients",
            "Aligning and distributing objects",
            "Creating files for print & Web",
            "Blur, Gaussian blur",
            "Various tools, tool options",
            "Logo Designing",
            "Brochure Designing",
            "Visiting Cards and Letterheads",
            "Facebook Coverages",
            "3D Logos and 3D Objects",
            "Learn how to create Info Graphics designs",


          ]
        },
        {
          title: 'Freelancing',
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course Students will rewarded certficate."
          ]
        }

      ],


      feebtn: "25000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 95,
      bgheading: 'C#',
      text: "Basic c sharp ,Visual Programming and Setup of Software",
       topimage:course16,

      courseheading: [
        "c# course in Rawalpindi",
"In 2022 Modern programming language that is use to Game Development(GD), Software Development(SD) and Web site development(WD). Most of the windows software develop through this language You will also learn basic SQL Server for your database need during the C# course. C# is an object-oriented programming language(OOP) from Microsoft or Windows. Basically Microsoft designed C sharp as its flagship programming language for the dot NET environment. We do trading of C# Course in Rawalpindi Islamabad Pakistan"
      ],

      detailParagraphs: [
        "Course Details",

        " In 2022 Modern programming language that is use to Game Development(GD), Software Development(SD) and Web site development(WD). Most of the windows software develop through this language You will also learn basic SQL Server for your database need during the C# course. C# is an object-oriented programming language(OOP) from Microsoft or Windows. Basically Microsoft designed C sharp as its flagship programming language for the dot NET environment. We do trading of C# Course in Rawalpindi Islamabad Pakistan"
      ],

          FixPrice :"Rs : 25000/-PKR",

 
      feedetail: [

        {
          coursetitle: " 2-3 month Course in Rawalpindi",
          courseinstallment: "RS 17,000/-PKR",
          coursefee: "	RS. 16,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "C# Course Outline:  ",
          items: [
            "First C# Console Application",
            'Namespaces',
            'Data Types',
            'Conversions',
            'Control Structures',
            'Subroutines and Functions',
            'Parameter Passing',
            'Strings',
            'Arrays',
            'Console I/O',
            'Formatting',
            'EXPECTION HNADLING',
            'Classes',
            'Access Control',
            'Methods and Properties',
            'Asymmetric Accessor Accessibility',
            'Static Data and Methods',
            'Inheritance',
            'Overriding Methods',
            'Abstract Classes',
            'Sealed Classes',
            'Access Control and Assemblies',
            'Components',
            'Interfaces',
            'System. Object',
            '.NET and COM',
            'Collections',
            'I Enumerable and I Enumerator',
            'Copy Semantics in C#',
            'Generic Types',
            'Type-Safe Collections',
            'Attributes',
          ]
        },
        {
          title: " C# Advance Desktop Applications:",
          items: [

            "Dot Net Framework",
            "Basic Structure Conditional Statements",
            "Windows Form Application n Calculator Example",
            "Employee Salary, Exception Handling",
            "Checkbox, Combo box",
            "Combo box",
            "Picture box. dialog result, color dialog",
            "DataGridView, Message box overload",
            "Date Time Picker",
            "List View Example",
            "2-layerArchitecture",
            "ADO.File Streaming",



          ]
        },
        {
          title: "Projects in C#:",
          items: [
            "Student Fees management system",
            "Shop Management System",
            "Hotel Management System",
            "Hotel Management System",
            "online computer and computer",
            "Library Management",
            "Sales Management System",
            "Blood Bank",
            "Restaurant Management System",
            "Hotel Management System",
            "Bank Management System",
            "Coffee Shop Management System",
            "medical store management",
            "Inventory Management System",

          ]
        },
        {
          title: "Freelancing:",
          items: [


            "This Course also included Freelancing training for earn money.",
            "Note: When student complete his course that will be rewarded certficate."
          ]
        },




      ],


      feebtn: "16000/- PKR",
      buybtn: "BUY NOW"
    },
    {
      id: 96,
      bgheading: 'Adobe Illustrator',
      text: "Flyer Designing,Visiting card Designing & Logo Designing ",
       topimage:course17,

      courseheading: [
        "Adobe Illustrator course in Rawalpindi",
"Adobe Illustrator skillful course is for graphics designers and university students. Adobe Illustrator is the most effective tool to begin earning online as a freelancer. Upon completion, you will be able to design the foremost effective graphics and begin earning on freelancing websites.",
"Adobe illustrator is a program used by each artists and graphic designers to make vector graphics. These graphics can then be used for company logos, information graphics, promotional uses or perhaps personal work, each in print and digital form.",
"Vector graphics is the use of geometrical primitives such as points, lines, curves, and shapes or polygons—all of which are based on mathematical expressions—to represent images in computer graphics."
      ],

      detailParagraphs: [
        "Course Details",

        "Adobe Illustrator skillful course is for graphics designers and university students. Adobe Illustrator is the most effective tool to begin earning online as a freelancer. Upon completion, you will be able to design the foremost effective graphics and begin earning on freelancing websites.",
        "Adobe illustrator is a program used by each artists and graphic designers to make vector graphics. These graphics can then be used for company logos, information graphics, promotional uses or perhaps personal work, each in print and digital form.",
        "Vector graphics is the use of geometrical primitives such as points, lines, curves, and shapes or polygons—all of which are based on mathematical expressions—to represent images in computer graphics."],

      FixPrice :"Rs : 9000/-PKR",

      feedetail: [

        {
          coursetitle: " 2-3 month Adobe Illustrator Course ",
          courseinstallment: "-",
          coursefee: "	RS. 9,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "Adobe Illustrator Outline : ",
          items: [
            'Concept of layers in Illustrator',
            'Concept of masking in Illustrator',
            'Logo design and its fundamentals',
            'Evolution of the alphabet and letter-form design',
            'Working with clients',
            'Process of creating mobile layouts',
            'Process of creating website layouts',
            'Color and its use in digital space',
            'Defining a perspective grid',
            'Drawing artwork in perspective',
            'Saving & Printing your artwork',
            'Saving for the web',
            'Creating and editing gradients',
            'Aligning and distributing objects',
            'Creating files for print & Web',
            'Blur, Gaussian blur',
            'Various tools, tool options',
            'Logo Designing',
            'Brochure Designing',
            'Visiting Cards and Letterheads',
            'Facebook Coverages',
            '3D Logos and 3D Objects',
            'Learn how to create Info Graphics designs',

          ]
        },

        {
          title: "Freelancing:",
          items: [


            "This Course also included Freelancing training for earn money.",
            "Note: When student complete his course that will be rewarded certficate."
          ]
        },

      ],

      feebtn: "9000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id: 97,
      bgheading: 'python programming ',
      text: "Learn powerful programming for web, data, automation, and AI — from basics to real projects. ",
       topimage:course18,

      courseheading: [
        "python programming course in rawalpindi",
        "If you are search python programming trainig center or python programming institute in rawalpindi so FIT Computer institute providing python programming courses in rawalpindi. python programming skill is very easy to learn and get money form online platform like facebook freelancing etc. computer institute providing computer courses in rawalpindi pakistan. we are aslo providing c plus plus courses in rawalpindi( c++ course institute in rawalpindi ) web development course in rawalpindi ( web development institute ) , Mobile app development course in rawalpindi , Node js course in rawalpindi",
      ],
      
      


      detailParagraphs: [
        "Course Details",

        "Prepare a career in the high growth field of python programming ,no experience or degree required.With a professional training designed by python programming institute in rawalpindi ,get a fast track to a competative paid job. python programming institute is the best computer institute in rawalpindi/islamabad.there are currently 99,000 U.S. jobs openings in creative web designing ,UI/UX with a median salary of $92,000",
      ],
      FixPrice :"Rs : 35000/-PKR",

      feedetail: [

        {
          coursetitle: " 3 month Python Course ",
          courseinstallment: "RS. 37000/- PKR",
          coursefee: "	RS. 35,000/- PKR"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "Python Programming Language Section: Python Basic ",
          items: [
            "Python Introduction",
            "Python Installation & IDE & Python Syntax",
            "Comments & Indentation",
            "Variables & Casting",
            "Python Input / Output",
            "Python Data Types",
"Python Strings",
"Python Operators",
"Python if else",
"While Loops",
"For Loops",
"Python Tuples",
"Python Python List and Break",
"Python Sets",
"Python Dictionaries",
"Lambda Function",
"Variables Scope",
"Python Modules",

              
          ]
        },
            {
          title: "Section: Python Advanced ",
          items: [
            "Python Classes and Objects",
                "Python Inheritance",
                "Access Modifiers in Python",              
                "Operator Overloading in Python",              
                "Magic Methods in Python",              
                "__main__ and __name__ in Python",              
                "Python Exception Handling",              
                "File Handling in Python",              
                "Python MySQL",              

          ]
        },

        {
          title: "Freelancing:",
          items: [


            "This Course also included Freelancing training for earn money.",
            "Note: When student complete his course that will be rewarded certficate."
          ]
        },

      ],

      feebtn: "35000/- PKR",
      buybtn: "BUY NOW"
    },

     {
      id: 98,
      bgheading: 'Game Developement',
      text: "Learn to create exciting 2D & 3D games using modern engines — from game design to publishing.",
       topimage:course19,
      
      courseheading: [
        "Game Developement in Rawalpindi",
        "Suppose you want to learn game development for mobile games and pc games. FIT Computer Institute designed a game development course in the Rawalpindi branch. This course contains basic to advanced-level concepts. The tools are very advanced in our game development course."
      ],

      detailParagraphs: [
        "Course Detail of Game developemnt",
"  Suppose you want to learn game development for mobile games and pc games. FIT Computer Institute designed a game development course in the Rawalpindi branch. This course contains basic to advanced-level concepts. The tools are very advanced in our game development course."
      ],
      FixPrice :"Rs : 50000/-PKR",


      feedetail: [

        {
          coursetitle: " 1 month Adobe Photoshop Course in Rawalpindi",
          courseinstallment: "RS, 50,000/-PKR",
          coursefee: "	RS. 45,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "  1st Month C# Programming:",
          items: [
"1st Month C# Programming:",
"Programming Overview",
"Installation of Visual Studio",
"Variables",
"Data Types",
"User Input",
"Operators",
"If else",
"Switch",
"Loops",
"Arrays",
"Methods",
"OOPS:",
"Classes / Objects",
"Access modifiers",
"Constructors",
"Properties",
"Inheritance",
"Polymorphism",
"Abstraction",
"2nd & 3rd Month Unity 3D:",
"Installation of Unity 3D",
"Introduction to Unity Editor",
"Game Objects",
"Scenes",
"Unity C# Script",
"Camera & Directional light",
"Start() and Update() Method",
"Serialize Field",
"CineMachine",
"Time.deltaTime",
"Collision",
"Triggers",
"Rigid body",
"Reference Caching",
"Tags",
"Audio SFX / Multiple Audio Clips",
"Input System (PC)",
"Assets",
"Scene Manager",
"Canvas",
"Panels",
"Particles Effects",
"Project 1: Game for PC",
"Input System (Mobile)",
"Touch & Buttons",
"Project 2: Game for Android",
"Terrain",
"Project 3: (Final) Car Game:",
"Car Controller",
"Follow Camera Script",
"Road Architect",
"Traffic System",
"Painting Terrain",






          ]
        },
       
        {
          title: 'Freelancing',
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate"
          ]

        }

      ],


      feebtn: "50,000/- PKR",
      buybtn: "BUY NOW"
    },

     {
      id:  99,
      bgheading: 'React.js ',
      text: "Introduction to React.js, jsx(Javascript XML) and Firebase DB",
       topimage:course20,

      courseheading: [
        "React.js course in Rawalpindi",
       "If you are search react js trainig center or React JS institute in rawalpindi so FIT Computer institute providing React designing courses in rawalpindi. Graphic designing skill is very easy to learn and get money form online platform like facebook freelancing etc. computer institute providing computer courses in rawalpindi pakistan. we are aslo providing c plus plus courses in rawalpindi( c++ course institute in rawalpindi ) web development course in rawalpindi ( web development institute ) , Mobile app development course in rawalpindi , Node js course in rawalpindi" 
      ],

      detailParagraphs: [
        "React js course course details",
"React.js is a popular JS library for building user interfaces, particularly single-page applications. React js Course in rawalpindi on React.js typically cover a range of topics to help you understand and master the fundamentals of building web applications using React. Here's an outline of what you might expect to learn in a React.js course:" 
     ],

      FixPrice :"Rs : 35000/-PKR",

      feedetail: [

        {
          coursetitle: " 1 month Adobe Photoshop Course in Rawalpindi",
          courseinstallment: "RS, 37,000/-PKR",
          coursefee: "	RS. 35,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "  Introduction of React.js:",
          items: [
"Introduction and history of react.js",
"What is React.js and why is it used?",
"Understanding the virtual DOM (Document Object Model).",
"Setting up the development environment",
"Introduction to JSX syntax and its benefits.",
"Embedding JavaScript expressions within JSX.",
"Transforming JSX into regular JavaScript.",
"Creating functional and class components.",
"Passing data to components using props.",
"Managing component reusability and modularity.",
"Managing component state and understanding its purpose.",
"Lifecycle methods and their usage.",
"Updating component state and re-rendering.",
"Prime Eligibility",
"Attaching event handlers to components.",
"Rendering lists of items using the map() function.",

"Handling form input elements in React.",
"Keeping form input values controlled by React state.",

          ]
        },
       
        {
          title: 'Freelancing',
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate"
          ]

        }

      ],


      feebtn: "35,000/- PKR",
      buybtn: "BUY NOW"
    },

    {
      id:  100,
      bgheading: 'Social Media Marketing (SMM)',
      text: "Digital marketing and SEO Freelnacing",
       topimage:course21,
      courseheading: [
        "Digital Marketing course in Rawalpindi",
       "If you are search react js trainig center or React JS institute in rawalpindi so FIT Computer institute providing React designing courses in rawalpindi. Graphic designing skill is very easy to learn and get money form online platform like facebook freelancing etc. computer institute providing computer courses in rawalpindi pakistan. we are aslo providing c plus plus courses in rawalpindi( c++ course institute in rawalpindi ) web development course in rawalpindi ( web development institute ) , Mobile app development course in rawalpindi , Node js course in rawalpindi" ,
   "With the rapid advancement of technology and the growing importance of online work, Digital Marketing has become a key factor in the success and growth of every business. FIT Computer Institute is offering you a digital marketing course under the supervision of the best teachers. By learning digital marketing skills, you can earn money through various online platforms such as Facebook, Google Ads, and more. We are also providing C plus plus course in Rawalpindi(c++ course institute in rawalpindi), web development course in Rawalpindi, Mobile app development course in Rawalpindi,Node js course in Rawalpindi."
      ],

      detailParagraphs: [
        "Course details",
"Digital marketing course in rawalpindi is best way to grow your business now a days. If you leave this platform you will 70 % loss your traffic. Due to every person have mobile phone and they can search about his content like Seo course institute in rawalpindi. They go on online search engine like Instagram , google, Facebook, or many other social platform.",
"Our SEO and digital marketing course in rawalpindi make for those students and persons that want quick earning and want a job in market in early. We design course in 3 month short courses in rawalpindi that totally practical. So enroll now in this SEO and digital marketing course in rawalpindi and limited seats are available."    

],
      FixPrice :"Rs : 22000/-PKR",


      feedetail: [

        {
          coursetitle: "2-3  React js course",
          courseinstallment: "-",
          coursefee: "	RS. 22,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "  Social Media Platform Target audience:",
          items: [
         "How to create Facebook ads",
         "How to target audience",
         "How to fix your budget",
         "How to fix your bidding",
         "Running paid campaigns on both Facebook and Instagram",
         "Curating content and creatives for your ads",
         "Monthly reporting",
         "Design Post for Social Media Platform",



          ]
        },

                {
          title: "  On-page SEO:",
          items: [
"Title tag optimization",
"Meta tag optimization",
"Headings",
"URL optimization",
"Image optimization and alt tags",
"Content optimization",
"Mobile-friendliness",
"User experience",
"Page speed optimization",


          ]
        },
                        {
          title: "   Off-page SEO:",
          items: [
"Social media accounts Maintaining",
"Google Business Profile create",
"HeadinImplementing a blog on your sitegs",
"URL optimization",
"Creating linkable infographics",
"Networking with high-quality sites",



          ]
        },


                             {
          title: "   Google Ads:",
          items: [
" Create ads account",
" Search keywords for ads",
" goole trending",
" create ads",
" set budget",
          ]
        },
                               {
          title: "     Youtube Ads:",
          items: [
          "Create ads account",
          "Search keywords for ads", 
          "goole trending", 
          "create ads", 
          "set budget", 
          

          
          
          
          ]
        },

                                {
          title: "    Freelancing:",
          items: [
          "How to make id Freelancer.com and upwork.com",
          "How to take project in Freelancing Market", 
          "How to get Reviews the right clients", 
          "How to earning with Blogs.", 
          
          ]
        },

                                 {
          title: "    Internship::",
          items: [
          "Working on live different website for ranking",
          "Work on local Business optimization", 
          "Leading to job internship", 
          
          ]
        },
       
        {
          title: 'Freelancing',
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate"
          ]

        }

      ],


      feebtn: "22,000/- PKR",
      buybtn: "BUY NOW"
    },

       {
      id:  101,
      bgheading: 'Ui/UX Courses',
      text: "UI/UX ,Adobe XD and Website Layout",
       topimage:course22,

      courseheading: [
        "UI/UX design courses in rawalpindi",
         "If you are searching ui ux designing courses in rawalpindi pakistan. you are in correct place . FIT Computer institute know offering ui/ux design course in rawalpindi/islamabad. As a web development institute we are also offering . web development courses in rawalpindi"
       
      ],

      detailParagraphs: [
        "UI/UX Design Course Details",
"ui ux designing institute in Rawalpindi providing UI (User Interface) and UX (User Experience) design are two critical components of any digital product, such as websites, mobile applications, and software. UI design focuses on the look and feel of a product, while UX design focuses on its functionality, usability, and overall user experience. UI design involves creating the visual elements of a digital product, such as its layout, color scheme, typography, and imagery. The goal of UI design is to create an aesthetically pleasing and engaging interface that enhances the user’s interaction with the product"
],
      FixPrice :"Rs : 35000/-PKR",


      feedetail: [

        {
          coursetitle: "2-3 UI/UX  course",
          courseinstallment: "RS. 37,000-/PKR",
          coursefee: "	RS. 35,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: " UI Part",
          items: [
"All about adobe XD",
"All about Figma",
"Visual Design Practical",
"Portfolio Creation",
"Preparation for Interview",
"Designing Mockup",
"All about visual design",



          ]
        },

                {
          title: "  On-page SEO:",
          items: [
"UI Course Structure",
"What is User Interface",
"Fundamentals of Design",
"Finding and Using Design Inspirations",



          ]
        },
                        {
          title: "   Understanding UI Layouts",
          items: [
"Analyzing Aesthetics",
"Alignment, Spacing, and Consistency",
"Raster and Vector Designs",




          ]
        },


                             {
          title: "    Designing UI’s:",
          items: [
"Introduction to Wireframes",
"Design using Photoshop and Illustrator",
"Prototyping using Adobe XD",


          ]
        },
                               {
          title: "   Introduction to Web & Mobile UI Design:",
          items: [
          "Types of Layouts",
          "Web and Mobile Friendly Design", 
          "Layout Composition and Visualization", 
          "Grids based Design", 
     
          ]
        },


                                       {
          title: "   Color and Typography:",
          items: [
             "Color Theory and Schemes",     
             "Types of Interface (Solid & Gradient)",     
             "Typography Terminology",     
             "Choosing and Pairing Fonts",     

          ]
        },

                                          {
          title: "     UI Design Patterns/Components:",
          items: [
       "Icons and Forms",
       "Search",
       "Checkout Flow",
       "Information Flow",

          ]
        },


                                             {
          title: "    Portfolio Design & Showcase:",
          items: [
       "Design UI’s Mockup",
       "Create Design Portfolio",
       "Present your Designs",
       "Work Showcase on different platforms",

          ]
        },


                                                 {
          title: "   UX Course Structure",
          items: [
       "What is User Interface/User Experience",
       "UI vs UX and its Importance",
       "Elements of UX Design",

          ]
        },

                                                  {
          title: "  Understanding UX:",
          items: [
       "UX is Everywhere/Business and UX",
       "User Research and Empathy",
       "Fundamentals of Information Architecture",

          ]
        },


                                                    {
          title: "  Learning UX Tools & Techniques:",
          items: [
       "Wireframing using XD",
       "Design and Prototyping using",
       "Figma and Adobe XD",

          ]
        },

{
                 title: "   In-depth UI Design & Components:",
          items: [
       "Design Guidelines (Web, Android, Ios, Material)",
       "Colors, Grids, and Typography",
       "UI Patterns",

          ]
        },


        {
                 title: "Introduction to Web & Mobile UX Design:",
          items: [
"Responsive VS Adaptive",
"Layout Composition and Visualization",
"Image Sprites",
"Mobile Usability Research (Desktop vs Mobile Differences)",
"Discover-ability of Mobile Applications",
"Case Study",

          ]
        },



        
                                {
          title: "   Task-Based Design:",
          items: [
      "Brainstorming and Ideation",
"User Personas",
"Improving UX with Task Analysis",
"How to think about new problems",
"Case Study",


          
          ]
        },


                                {
          title: "  Portfolio Design & Showcase:",
          items: [
      "Design UI’s Mockup",
"Course Evaluation",
"Work Showcase on different platforms",     
          ]
        },


        
                                {
          title: "  Software",
          items: [
      "Adobe XD (Prototype & Development)",
"Sketch/Figma (Mockup & Prototype)",
"InVision (Overview)",  
"All Understanding about UI/UX",   
"All about Wire framing and App designing Details",   
"A minor Use of Adobe illustrator and adobe Photoshop",   
"All Understanding about UI/UX",   
"All about Wire framing and App designing Details",   
"Detail covered Adobe Illustrator.",   
"Detail covered Adobe Photoshop.",   
"UI/UX Portfolio Designing.",   
   


          ]
        },


                                        {
          title: " Freelancing",
          items: [
      "This Course also included Freelancing training.",
"Note: After the completion of course students will rewarded certficate",
    
          ]
        },
                                 {
          title: "    Internship::",
          items: [
          "Working on live different website for ranking",
          "Work on local Business optimization", 
          "Leading to job internship", 
          
          ]
        },
       
        {
          title: 'Freelancing',
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate"
          ]

        }

      ],


      feebtn: "22,000/- PKR",
      buybtn: "BUY NOW"
    },

       {
      id:  102,
      bgheading: 'Amazon ',
      text: "Dropshipping, Sales and Self Publishing",
       topimage:course23,

      courseheading: [
        "Amazon course in Rawalpindi",
"Discover top-rated Amazon courses in Rawalpindi for aspiring entrepreneurs and sellers. Gain expertise in Amazon FBA, PPC, listing optimization, and more. Enhance your marketing skills with comprehensive Amazon seller training. Unlock the secrets of successful Amazon account management and brand registry. Learn effective strategies for dropshipping, wholesale, and product research. Join our Amazon courses in Rawalpindi to maximize your success on the world's largest online marketplace. Enroll today and boost your Amazon business!. we are aslo providing c plus plus courses in rawalpindi( c++ course institute in rawalpindi ) web development course in rawalpindi ( web development institute ) , Mobile app development course in rawalpindi , Node js course in rawalpindi"
      ],

      detailParagraphs: [
        "Amazon course details",
   "Looking to excel in your Amazon business? Enroll in our comprehensive Amazon courses in Rawalpindi and unlock the secrets to success on the world's largest online marketplace. Our expert-led training covers essential topics like Amazon FBA, PPC, listing optimization, and more. Gain valuable insights into product research strategies and discover how to effectively manage your Amazon seller account. From mastering brand registry to implementing profitable dropshipping and wholesale techniques, our courses provide the tools you need to thrive. Join us in Rawalpindi and take your Amazon business to new heights. Enroll now and start dominating the Amazon marketplace with confidence! FBA stands for Fulfillment by means of Amazon. It is a provider presented by Amazon that permits dealers to save their products in Amazon's success facilities. With FBA, sellers can advantage from Amazon's good sized logistics community and customer service infrastructure to handle order fulfillment, delivery, and customer support. When the usage of FBA, dealers ship their products to Amazon's achievement centers, wherein the stock is stored. Amazon looks after picking, packing, and transport the products to customers on behalf of the vendor. Additionally, FBA gives capabilities including Amazon Prime eligibility, which permits sellers' products to be eligible for fast and loose transport to Prime individuals."
],

      FixPrice :"Rs : 30000/-PKR",

      feedetail: [

        {
          coursetitle: " 1 month Adobe Photoshop Course in Rawalpindi",
          courseinstallment: "-",
          coursefee: "	RS. 30,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "  Introduction of Amazon:",
          items: [
"Introduction and history of Amazon",
"Product Research",
"Sourcing and Suppliers",
"Listing Optimization",
"Inventory Management",
"Shipping and Logistics",
"Amazon Advertising",
"Branding and Marketing",
"Account Management and Performance",
"Scaling and Growth Strategies",
"Case Studies and Success Stories",
"Ongoing Support and Updates",
"Fulfillment Service",
"Prime Eligibility",
"Inventory Management",
"Customer Service",
"Multi-Channel Fulfillment",
"Global Selling",


          ]
        },
       
        {
          title: 'Freelancing',
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate"
          ]

        }

      ],


      feebtn: "30,000/- PKR",
      buybtn: "BUY NOW"
    },

       {
      id:  104,
      bgheading: 'Flutter app development  ',
      text: "Learn to build beautiful, cross-platform mobile apps for Android & iOS with a single codebase.",
       topimage:course24,

      courseheading: [
        "Flutter mobile app development course in rawalpindi",
"If you are search mobile app development trainig center or flutter app development course institute in rawalpindi so FIT Computer institute providing mobile app designing courses in rawalpindi. we are aslo providing c plus plus courses in rawalpindi( c++ course institute in rawalpindi ) web development course in rawalpindi ( web development institute ) , Mobile app development course in rawalpindi , Node js course in rawalpindi "  
    ],

      detailParagraphs: [
        "Flutter mobile app development course Details",
'Hi developers, Welcome to our Flutter mobile app development course in rawalpindi. Our course, it is especially designed by our senior developer. He has 3 years of experience in the flutter field.',
"This app development course includes Android app development and iOS app development in Rawalpindi and Islamabad. The Flutter app development course is the most advanced course in the mobile app development field.",
"This development technology is the most advanced technology, and the job pool is large; that’s why every company demands 4 to 6 developers. So nowadays I suggest only the Flutter app development course in rawalpindi."
],
      FixPrice :"Rs : 40000/-PKR",


      feedetail: [

        {
          coursetitle: " Android app development Course",
          courseinstallment: "35,000/-",
          coursefee: "		RS. 32,000/-"
        },

            {
          coursetitle: " React Native Course",
          courseinstallment: "35,000/-",
          coursefee: "		RS. 32,000/-"
        },


            {
          coursetitle: " Flutter app development Course",
          courseinstallment: "40,000/-",
          coursefee: "		RS. 35,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: "Module 1: Introduction to Flutter & Dart",
          items: [
                 "What is Flutter? Features & Benefits",
                 "Flutter vs. React Native vs. Native Development",
                 "Understanding the Flutter Architecture",
                 "Introduction to Dart Programming (Syntax, Variables, Data Types)",
                 "Flutter Development Environment (Android Studio, VS Code)",
              
          ]
        },
          {
          title: "Module 2: Dart Fundamentals for Flutter",
          items: [
                 "Functions, Control Flow, & Loops in Dar",
                 "Object-Oriented Programming (OOP) in Dart",
              "Handling Asynchronous Programming with Futures & Streams",
              "Exception Handling & Error Management",              

          ]
        },


            {
          title: "Module 3: Understanding Flutter Widgets & UI Components",
          items: [
         "Introduction to Widgets (Stateless & Stateful Widgets)",
         "Using Material Design & Cupertino Widgets",
         "Layouts in Flutter (Column, Row, Stack, GridView, ListView)",
         "Styling & Theming Flutter Applications",
         "Handling User Input with TextField & Buttons",
        
          ]
        },


           {
          title: "Module 4: Navigation & Routing in Flutter",
          items: [
         "Navigating Between Screens (Navigator & Routes)",
"Passing Data Between Screens",
"Bottom Navigation & Drawer Navigation",        
"kjkjImplementing Deep Linking in Flutterjkkj",        

          ]
        },
           {
          title: "Module 5: State Management in Flutter",
          items: [
   "Understanding State Management Approaches",
   "Managing State with Provider",       
   "Using Riverpod & GetX for Scalable State Management",       
   "Advanced State Management with BLoC Pattern",       


          ]
        },

            {
          title: "Module 6: Working with Forms & User Input",
          items: [
   "Handling Forms with Form Widget & TextControllers",
   "Input Validation & Error Messages",       
   "Multi-Step Forms & Auto-Save Features",       


          ]
        },

            {
          title: "Module 7: API Integration & Database Management",
          items: [
"Fetching Data from REST APIs with HTTP & Dio",
"Handling JSON Data & Serialization",      
"Using Firebase Firestore & Realtime Database",      
"Local Database Storage with SQLite & Hive",      



          ]
        },


              {
          title: "Module 8: Authentication & Security in Flutter",
          items: [
"User Authentication with Firebase Auth",
"OAuth Authentication (Google, Facebook, Apple Login)",
"Implementing Biometric Authentication (Face ID, Fingerprint)",
"Secure API Calls & Data Encryption",



          ]
        },


              {
          title: "Module 9: Working with Native Features & Plugins",
          items: [
"Accessing Device Camera & Gallery",
"Google Maps & Location Services",
"Push Notifications with Firebase Cloud Messaging (FCM)",
"Background Services & App Permissions",



          ]
        },


                  {
          title: "Module 10: Performance Optimization & Debugging",
          items: [
"Debugging with Flutter DevTools",
"Optimizing Flutter App Performance",
"Reducing App Size & Memory Usage",
"Implementing Lazy Loading & Code Splitting",



          ]
        },

                    {
          title: "Module 11: Testing & Quality Assurance",
          items: [
"Unit & Integration Testing with Flutter Test",
"UI Testing with Flutter Driver",
"Debugging & Logging in Flutter Applications",



          ]
        },

                  {
          title: "Module 12: Deployment & Publishing Apps",
          items: [
"Preparing Apps for Play Store & App Store",
"Generating & Managing App Signing Keys",
"Automating Builds with CI/CD (Codemagic, GitHub Actions)",
"Handling Version Control & App Updates"



          ]
        },
       

               {
          title: "Module 13: Final Project & Certification Preparation",
          items: [
"Best Practices for Maintainable & Scalable Code",
"Preparing for Flutter Certification",
"Career Paths in Flutter Development",



          ]
        },
        {
          title: 'Freelancing',
          items: [
            "This Course also included Freelancing training.",
            "Note: After the completion of course students will rewarded certficate"
          ]

        }

      ],


      feebtn: "40,000/- PKR",
      buybtn: "BUY NOW"
    },

       {
      id:  105,
      bgheading: 'Beautician Course ',
      text: "Hair ,Makeup skin and Ficaial Section",
       topimage:course25,

      courseheading: [
        "Beautician Course in Rawalpindi",
 "If you are searching for a professional beautician training center or beautician institute in Rawalpindi, then FIT computer institute (FIT) is offering the best Beautician Course in Rawalpindi. Beautician skills are easy to learn and can help you earn money through salon work or online platforms. Our institute provides professional beautician and makeup courses in Rawalpindi, Pakistan, covering everything from hairstyling and makeup to skincare and bridal looks. We are also offering other professional short courses such as Hair Styling Course in Rawalpindi, Makeup Artist Course in Rawalpindi, and Skin Care & Facial Course in Rawalpindi."
    ],

      detailParagraphs: [
        " course details",
"Prepare a career in the high growth field of beautician course ,no experience or degree required.With a professional training designed by beautician institute in rawalpindi ,get a fast track to a competative paid job. beautician course institute is the best beautician institute in rawalpindi/islamabad.",
"Beautician Course in Rawalpindi focuses on practical beauty skills and modern salon techniques such as makeup, hairstyling, skin care, and facial treatments. Our course will prepare you for an entry-level job in the beauty and salon industry. You will learn hands-on beauty techniques, hair cutting and coloring, makeup artistry, and skin treatments using professional tools and products under expert supervision."

     ],
      FixPrice :"Rs : 30000/-PKR",



      feedetail: [

        {
          coursetitle: " 3 Months beautician course in rawalpind",
          courseinstallment: "RS. 30,000/-",
          coursefee: "	RS. 28,000/-"
        },
          {
          coursetitle: " 6 Months beautician course in rawalpindi",
          courseinstallment: "RS. 80,000/-",
          coursefee: "	RS. 75,000/-"
        },


      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: " Basic Level Beautician Course:",
          items: [
                 "Threading and Face Wax Techniques",
                 "Eyebrow and Upper Lips Shaping",
                 "Manicure and Pedicure",
                 "Face Cleaning and Polishing",
                 "Facials and Skin Care Basics",
                 "Hair Styles and Cutting (Layer, U-Cut, Step Cut)",
                 "Hair Dye and Hair Treatments",
                 "Party and Bridal Makeup (2 Types)",

          ]
        },

          {
          title: "  Professional Level Beautician Course:",
          items: [
                 "Hair Section",
                  "10 Professional Hair Cuts",
                  "Fashion and Creative Hair Dye (Mixing & Techniques)",
                  "Hair Balayage, Ombre & Sombré",
                  "Fantasy Hair Coloring",
                  "Rebonding, Keratin, Extenso & Botox Treatments",
                  "Hair Glossing, Protein & Rarexser Treatments",
                     "Professional Hair Styling Techniques"


          ]
        },

            {
          title: "  Skin and Facial Section",
          items: [
                 "Basic and Herbal Facials",
                 "Serum, Zafrani & Hydra Facials",
              "Skin Treatments and Polishing",
              "Full Body Shine & Body Polish",
             




          ]
        },

             {
          title: "     Hands-On Practical Sessions",
          items: [
                      "Students receive professional-level training from expert beauticians. Every student practices in a real salon setup to gain practical skills in bridal makeup, hair treatments, and skincare.",

            
          ]
        },
       

                {
          title: "     Hands-On Practical Sessions",
          items: [
                     "WHY CHOOSE FIT COMPUTER INSTITUDE?",
                        "Cutting-edge beautician programs designed to international standards",
                        "Modern classrooms and fully equipped beauty labs",
                        "Skilled and supportive instructors",
                        "Career-focused, hands-on training",
                        "Strong partnerships with top salons and beauty brands",
                        "Globally recognized certificates and diplomas",
                        "Strong partnerships with top salons and beauty brands",
                        "Globally recognized certificates and diplomas",
                        "Affordable fees and easy enrollment process"

            
          ]
        },

                  {
          title: "    Career Opportunities",
          items: [
  "After completing the course, students can work in beauty salons, open their own salon, or work internationally with recognized certification from FIT."
            
          ]
        },
        {
          title: 'Freelancing',
          items: [
            "This course also includes freelancing guidance for earning money online using your beauty and makeup skills.",
            "Note: A diploma certificate will be awarded upon successful completion of the course."
          ]

        },
          {
          title: 'Contact & Enrollment',
          items: [
       "FIT Computer institute (FIT)",
       "Beautician Diploma Course for Women in Rawalpindi & Islamabad",

"Contact: 03445701828",
"Enroll Now — Limited Seats Available!"


          ]

        }

      ],


      feebtn: "30,000/- PKR",
      buybtn: "BUY NOW"
    },
     {
      id:  106,
      bgheading: 'Shopfiy Course ',
    

      courseheading: [
        "Shopify course in Rawalpindi Islamabad",
"Shopify course in Rawalpindi and Islamabad offers training classes for individuals looking to start an e-commerce business in the digital world. FIT Computer Institute provides a great opportunity for students to learn the skills needed to run successful businesses, both for their clients and themselves. Our Shopify store design course equips you with the guidance necessary to create and manage a successful online store. In these Shopify training classes, students learn how to design a store, with support from our developers who guide them in creating a professional online presence. Students can begin their own online business through hands-on practical work and expert guidance from experienced developers. The computer training institutes in Rawalpindi and Islamabad offer comprehensive training that covers every aspect of Shopify through a well-structured curriculum, live practical sessions, and real-world business examples."
    ],

      detailParagraphs: [
        " course details",
"Prepare for a high-income career in the fast-growing field of Shopify store design — no degree or prior experience needed. Our professional shopfiy training course in Rawalpindi / Islamabad gives you a fast track to building your own profitable online store or getting paid work in eCommerce management. There are currently thousands of global opportunities in Shopify store management, product research, and Facebook advertising — with freelancers earning $800 to $3,000+ per month"

     ],
      FixPrice :"Rs : 30000/-PKR",



      feedetail: [

        {
          coursetitle: " One Month Shopify course",
          courseinstallment: "-",
          coursefee: "	RS. 15,000/-PKR"
        },
          {
          coursetitle: " Two Months Shopify course plus digital marketing",
          courseinstallment: "	RS. 35,000/-",
          coursefee: "	RS. RS. 32,000/-"
        },
 {
          coursetitle: " Three Months Shopify course plus digital marketing course and DropShipping",
          courseinstallment: "	RS. 50,000/-",
          coursefee: "	RS. 40,000/-"
        },

      ],

      learnTitle: "What you’ll learn?",

      learnSections: [
        {
          title: " Shopify Store Setup & Configuration",
          items: [
                 "Shopify is one of the world’s leading eCommerce platforms. This professional course is designed to help students build, customize, and manage a complete Shopify store from scratch without any coding knowledge.",
                 "Introduction to Shopify Dashboard",
                 "Understanding Shopify Plans & Settings",
                 "Store Setup & General Configuration",
                 "Domain Connection & DNS Setup",
                 "Theme Installation & Customization",
                 "Using Shopify Theme Editor",
                 "Creating Professional Homepage Layout",
                 "Header, Footer & Navigation Menu Setup",
                 "Creating Pages (About Us, Contact Us, Policies)",
                 "Shipping Settings Configuration",
                 "Payment Gateway Integration",
                 "Tax Settings Setup",
                 "Store Currency & Language Settings",



                 

          ]
        },

          {
          title: " Product Management & Store Optimization",
          items: [
                 "Learn how to professionally add and manage products in Shopify and optimize your store for better performance and user experience.",
                 "Adding Simple & Variable Products",
                 "Product Titles, Descriptions & SEO Optimization",
                 "Product Images Optimization",
                 "Pricing, Compare Price & Inventory Management",
                 "Creating Product Collections",
                 "Manual & Automated Collections",
                 "Product Tags & Categories",
                 "Creating Digital Products",
                 "Product Variants (Size, Color, etc.)",
                 "Bulk Product Import & Export (CSV)",
                 "Upsell & Cross-sell Product Setup",
                 "Store Speed Optimization Basics",


                 


          ]
        },

            {
          title: "  Shopify Apps & Advanced Features",
          items: [
                 "Installing & Managing Shopify Apps",
                 "Product Review Apps Setup",
                 "Live Chat Integration",
                 "Email Notification Customization",
                 "Order Management System",
                 "Customer Management ",
                 "Discount Codes Creation",
                 "Automatic Discounts Setup",
                 "Abandoned Cart Settings",
                 "Shopify Reports & Analytics Overview",

              
          ]
        },

             {
          title: "   Shopify Store Design Customization",
          items: [
                  "Theme Customization Advanced Settings",
                  "Basic Liquid Editing (Introduction)",
                  "Custom Sections & Blocks",
                  "Banner Creation & Sliders",
                  "Mobile Responsive Design",
                  "Creating Landing Pages",
                  "Trust Badges & Store Branding",
                  "Creating Professional Product Pages",


            
          ]
        },
       

                {
          title: "    Practical Exercises",
          items: [
                     "Build a Complete Shopify Store from Scratch",,
                             "Create a Branded Homepage Layout",
                             "Upload & Optimize 10 Products ",
                             "Create Collections & Navigation Structure",
                             "Configure Payment & Shipping Settings",
                             "Design a High-Converting Product Page",
                             "  Launch a Demo Store",
                        


            
          ]
        },

 
        {
          title: 'Freelancing',
          items: [
            "This course also includes freelancing guidance for earning money online using your beauty and makeup skills.",
            "Note: A diploma certificate will be awarded upon successful completion of the course."
          ]

        },
      

      ],


      feebtn: "15,000/- PKR",
      buybtn: "BUY NOW"
    },

  ],


  user: null,
  gap:null,
  studentattendence: false,
  setcourseid:null,
  formid:null,
  submissionid:null,
  otp:null,
  signupdata:null

};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
   addpost : (state,action)=>{
state.posts.push(action.payload)
   },

    adduser : (state,action)=>{
state.user=action.payload;
   },

   studentattendence :(state,action) =>{
    state.studentattendence = action.payload
   },

   setgap:(state,action)=>{
    state.gap=action.payload
   },

   user:(state,action)=>{
    state.user=action.payload
   },

   setcourseid :(state,action)=>{
    state.setcourseid=action.payload
   },

   setformid: (state,action)=>{
state.formid =action.payload
   },

   setsubmissionid :(state,action)=>{
    state.submissionid=action.payload
   },
   setotp:(state,action)=>{
    state.otp=action.payload
   },
   setsignupdata :(state,action)=>{
    state.signupdata=action.payload
   }

  

  }
});

export const { addpost, adduser,  studentattendence,setgap,user,setcourseid,setformid ,setsubmissionid,setotp,setsignupdata } = coursesSlice.actions;

export default coursesSlice.reducer;

