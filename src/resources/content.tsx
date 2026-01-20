const urlPrefix = "https://d2l2tjqqxralki.cloudfront.net/img/";

const projectTiles = [
    { link: '/boat', tileImg: `${urlPrefix}boat/hero.webp`, tileText: "don't sink", key: 'boat' },
    { link: '/drone', tileImg: `${urlPrefix}drone/hero.webp`, tileText: "learn to fly", key: 'drone' },
    { link: '/dive', tileImg: `${urlPrefix}dive/mastdive.jpg`, tileText: "show the world the Salish Sea", key: 'dive' },
    { link: '/miniped', tileImg: `${urlPrefix}miniped/mastminiped.jpg`, tileText: "build a ridiculous moped", key: 'miniped' },
    { link: '/rabbit', tileImg: `${urlPrefix}rabbit/rabbit.png`, tileText: "keep a 40 year old car alive", key: 'rabbit' },
    { link: '/gs750', tileImg: `${urlPrefix}gs750/hero.webp`, tileText: "build a custom motorcycle", key: 'gs750' }
];

export interface ProjectLogItem {
    text: string;
    img: string | null;
    model?: string;
}

export interface ProjectContent {
    [key: string]: ProjectLogItem[];
}

const projectContent: ProjectContent = {
    rabbit: [
        {
            text: "The diesel engine died and the only engine the local junkyard had that would fit was a gasoline engine from a much newer model.  The mounting bracket bolt pattern was the same as the old diesel block so fitting it to the chassis was the easy part.  I wanted to do this conversion with minimal modification to the stock systems so that it could be easily swapped back to diesel at some point in the future; that was the hard part.",
            img: null
        },
        {
            text: "The replacement gas engine was fuel injected.  Carburation simplified the install by removing the necessity of wiring a more complex fuel injection system.",
            img: `${urlPrefix}rabbit/carb.webp`
        },
        {
            text: "I fabricated this simple bracket to route the old throttle cable to the new carburetor at the correct angle.",
            img: `${urlPrefix}rabbit/throttlecable.webp`
        },
        {
            text: "One model of Rabbit sold in Europe in the 70s came with a gas engine and a mechanical fuel pump.  VW used the exact same engine design for diesel and gas engines for almost 30 years so the mechanical fuel pump bolted right on to the newer engine.",
            img: `${urlPrefix}rabbit/fuelpump.webp`
        },
        {
            text: "I've found drawing things out to visualize the connections between things to be extremely helpful for most tasks.",
            img: `${urlPrefix}rabbit/sketching.webp`
        },
        {
            text: "Prior to the ignition coil, ignition systems are still only 12v so this cheap little fusebox worked great, despite appearances.",
            img: `${urlPrefix}rabbit/fusebox.webp`
        },
        {
            text: "The water pump pulley alignment proved to be one of the most difficult problems to solve on this project.",
            img: `${urlPrefix}rabbit/pulley.webp`
        },
    ],
    miniped: [
        {
            text: "Let's figure out how to put a Tomos moped motor in this Chinese pitbike.",
            img: `${urlPrefix}miniped/pitbike.webp`
        },
        {
            text: "Prototyping motor mount brackets.",
            img: `${urlPrefix}miniped/mountmockup.webp`
        },
        {
            text: "Using the 3D printed prototype brackets as a template, I cut steel brackets out of some scrap steel with a plasma cutter.  They weren't intended to be a permanent solution.",
            img: `${urlPrefix}miniped/transmission.webp`
        },
        {
            text: "Prototyping how to fit the tiny Tomos rear sprocket on a rear wheel designed to have a large motorcycle type rear sprocket.",
            img: `${urlPrefix}miniped/testsprocket.webp`
        },
        {
            text: "The final rear sprocket solution.",
            img: `${urlPrefix}miniped/rearwheel.webp`
        },
        {
            text: "I rebuilt the Tomos motor while I was at it.",
            img: `${urlPrefix}miniped/bits.webp`
        },
        {
            text: "Version one of the exhaust always had a leak at the header pipe that I never did solve.",
            img: `${urlPrefix}miniped/exhaustv1.webp`
        },
        {
            text: "The silencer kept vibrating off the bike.  This final solution included a dirtbike style soft joint between silencer and exhaust chamber to absorb vibrations, and a strap to hold the silencer on after it inevitably worked its way free.",
            img: `${urlPrefix}miniped/muffler.webp`
        },
        {
            text: "Pitbikes lack all the lights and controls of a street legal bike.  I adapted various moped parts, like headlight and handlebar controls, to allow for street riding.",
            img: `${urlPrefix}miniped/controls.webp`
        },
        {
            text: "I cut up an intake and welded it back together to angle to the left side instead of the right, to avoid interfering with the exhaust chamber.",
            img: `${urlPrefix}miniped/intake.webp`
        },
    ],
    dive: [
        {
            text: "The Highline College MaST Center wanted a 24/7 underwater livestream of the happenings under their dock, at three different depths.",
            img: `${urlPrefix}dive/sunset.webp`
        },
        {
            text: "Their budget was essentially $0 so I used old equipment the college had slated for recycling.",
            img: `${urlPrefix}dive/two_crabs.webp`,
        },
        {
            text: "The 'server room' was a rack hidden behind a wall of fish tanks with a perpetual puddle of salt water on the floor.",
            img: `${urlPrefix}dive/seahawks.webp`,
        },
        {
            text: "I used Logitech c920 webcams because (at the time) they had an H.264 hardware encoder.",
            img: `${urlPrefix}dive/crab_jellyfish.webp`
        },
        {
            text: "The MaST Center constructed a two-stories tall PVC pipe enclosure with viewports webcams and strapped it to the dock.  I ran very long USB cables up the pipe into the server room via a gap in the roof.",
            img: `${urlPrefix}dive/pylons.webp`
        },
        {
            text: "The USB busses available didn't have enough throughput to support more than one H.264 stream at a time so used three separate laptops, one per webcam.",
            img: `${urlPrefix}dive/pipefish.webp`
        },
        {
            text: "VLC's command line tool, cvlc, transcoded the H.264 streams to RTMP and served them to the network.  Cron jobs to detect network connectivity, cvlc's activity, and the RTMP stream ensured the 24/7 uptime requirement.",
            img: `${urlPrefix}dive/kelp_crab.webp`
        }
    ],
    drone: [
        {
            text: `Parts list:
Video TX: Walksnail Avatar HD Nano,
Flight controller: iFlight blitz f7405,
RX: Radiomaster XR1,
PDB & ESCs: DYS 4in1,
Motors: Three Brotherhobby returner r5 and one DYS SE Pro 2205`,
            img: `${urlPrefix}drone/top.webp`
        },
        {
            text: "The ELRS and VTX antenna mounts prevent the antennas from getting caught in the props.",
            img: `${urlPrefix}drone/antenna.webp`,
            model: `${urlPrefix}drone/3d_antenna_mounts.webp`
        },
        {
            text: "The camera bumpers prevent damage to the camera in the event of a head-on crash.",
            img: `${urlPrefix}drone/cam_bumper.webp`,
            model: `${urlPrefix}drone/3d_cam_guard.webp`
        },
        {
            text: "Getting all the electronic components to fit on the frame is the primary challenge in building a drone.",
            img: `${urlPrefix}drone/electronics.webp`
        },
        {
            text: "Soldering wires to compact boards can be tricky.",
            img: `${urlPrefix}drone/soldering.webp`
        }
    ],
    gs750: [
        {
            text: "Unfortunately I don't have any pictures of the bike prior to chopping the back off and welding on the tail hoop.  Afterwards I didn't have a seat so I bolted on this skateboard.",
            img: `${urlPrefix}gs750/skateboard.webp`
        },
        {
            text: "The back frame portion I cut off also had the rear fender mounts so I had to find a new way to mount the rear fender.  There were some existing tabs on the frame I could use but they were too far apart. I also had to relocate the fuse box.  I accomplished both by modeling and 3D printing this fuse box mount that mounts to the same frame tabs.",
            img: `${urlPrefix}gs750/gs750_spacer_fusebox.webp`,
            model: `${urlPrefix}gs750/3d_fusebox.webp`
        },
        {
            text: "I cut the tray from sheet metal and mounted it to the frame under the seat with zip ties.",
            img: `${urlPrefix}gs750/tray.webp`
        },
        {
            text: "The skateboard grip tape was destroying my jeans so I decided to make a real seat.  I laid masking tape over the bike frame and laid fiberglass over it to make the seat pan.",
            img: `${urlPrefix}gs750/fiberglass.webp`
        },
        {
            text: "I took the fiberglass seat pan to a local upholsterer for foam and a custom vinyl cover.",
            img: `${urlPrefix}gs750/seat.webp`
        },
        {
            text: "Sitting directly on the frame, the new seat vibrated so badly the bike was unridable.",
            img: `${urlPrefix}gs750/standoffs.webp`,
            model: `${urlPrefix}gs750/3d_seat_standoff.webp`
        },
        {
            text: "The single front brake barely stopped my bike.  I swapped the entire front end with one from a similar model that had dual disc brakes.  Dual brakes necessitated replacing the front master cylinder with one that supported two hydraulic lines. ",
            img: `${urlPrefix}gs750/gs750_front_brake.webp`
        },
        {
            text: "The rear turn signals are 3D printed with some standard little LED marker lights found on eBay.  The new rear shocks were necessary for ride quality and safety.  The leather grip tape on the tail hoop just looked nice.",
            img: `${urlPrefix}gs750/gs750_taillight.webp`,
            model: `${urlPrefix}gs750/3d_turn_signals.webp`
        },
        {
            text: "Switching the handlebars to clip-ons meant they no longer cleared the gas tank.  I hammered in both sides of the tank to make room.",
            img: `${urlPrefix}gs750/gas_tank.webp`
        }
    ],
    boat: [

        {
            text: "Living aboard quickly taught me how to participate in, and rely on, a community.  I couldn't have gotten my old water heater out of its nook behind the engine if a friend hadn't offered to cut it apart with a Sawzall while it was still in the boat.",
            img: `${urlPrefix}boat/water_heater_removal.webp`
        },
        {
            text: "It took an entire afternoon and evening, a rented Sawzall, and several beers but they got it out!",
            img: `${urlPrefix}boat/old_water_heater.webp`
        },
        {
            text: "I used HDPE for a mount for the new water heater.  The only heater I could find that would fit through the access hatch was quite a bit smaller than the old one.",
            img: `${urlPrefix}boat/waterheater.webp`
        },
        {
            text: "I couldn't use my diesel cabin heater until I replaced the old copper pipe and brass fittings.  I filled the new pipe with sand to prevent it from collapsing when I bent it.  It took a few tries but I finally got it.",
            img: `${urlPrefix}boat/stove_pipe.png`
        },
        {
            text: "Many of the windows leaked.  Resealing them turned out to be one of the longest ongoing projects on the boat due to old sealant causing the gelcoat underneath to fail, broken aluminum frames that had to welded together or replaced, and half-done attempts by previous owners.  A few friends helped over the course a month to scrape and sand.",
            img: `${urlPrefix}boat/window_scraping.webp`
        },
        {
            text: "The old fresh water pump contained materials not safe for potable water, the diaphragm in the accumulator tank (not pictured) was disintegrating, and all the old hoses were brittle and gross.  I replaced the entire fresh water system, except for the tanks, which I treated with sanitizer.",
            img: `${urlPrefix}boat/water_pump.webp`
        },
        {
            text: "Most people don't have to remove their kitchen sink and cabinetry to work on their home's diesel tractor engine.",
            img: `${urlPrefix}boat/engine_access.webp`
        },
        {
            text: "The intentional holes in the hull, through-hulls, are a common cause of sinking when they fail.  A friend helped me cut out the old ones (inset) with a holesaw.  I glassed in new G10 backing plates to replace the wood ones and installed the new through-hulls with 3M sealant.",
            img: `${urlPrefix}boat/thruhull_inset.webp`
        },
    ],
}

const about = {
    words: [
        "a systems architect",
        "an artist",
        "a disruptor",
        "a liveaboard",
        "a mechanic",
        "a software engineer",
        "a wanderer",
        "a sailor"
    ],
    entries: [
        {
            title: "Sailor",
            text: "A sailboat is a sideways airplane half submerged in water - it has booms and sheets instead of flaps and ailerons, and without the fear of falling out of the sky it allows for a lot more chaos and shenanigans, even while gliding quietly along.  There's something about this unique combination of peace and chaos, self-sufficiency and complete reliance on nature, that draws a particular kind of person.  The community that exists around sailing, and living on sailboats in particular, is the first community I found that I felt I truly belonged in.",
            img: `${urlPrefix}about/sailor.webp`
        }
    ],
    masonry: [
        {
            title: "Liveaboard",
            text: "I live on my small sailboat, afloat on the Salish Sea in the Pacific Northwest.  I own very little - mostly only what will fit in the boat - and I spend much of my free time on boat maintenance.  Living aboard is hard work and requires sacrificing many of the creature comforts modern society offers, but the tradeoff is worth it to me.",
            imgs:
                [`${urlPrefix}about/liveaboard/blakely_harbor.webp`,
                `${urlPrefix}about/liveaboard/gaptooth.jpg`,
                `${urlPrefix}about/liveaboard/july_raftup.webp`,
                ]
        },
        {
            title: "Wanderer",
            text: "Spanish has two words for 'to know', one for knowing things and one for knowing people.  The word for knowing a person is also used for knowing a place - I really like that.  I want to meet places like new friends and get to know them.  Like getting to know anyone, that takes listening well, learning with an open mind, behaving with humility and respect, and patience.  To do that I think you need to wander a place and wait for it to come to you.",
            imgs: [
                `${urlPrefix}about/wanderer/romeria.webp`,
                `${urlPrefix}about/wanderer/port_hardy.webp`,
                `${urlPrefix}about/wanderer/rainbow_gathering.webp`,
                `${urlPrefix}about/wanderer/bangkok_market.webp`,
                `${urlPrefix}about/wanderer/ireland.webp`,
                `${urlPrefix}about/wanderer/gambler.webp`,
            ]
        },
        {
            title: "Artist",
            text: "For reasons unknown to anyone, some people are imbued with the impulse to draw pictures - I imagine the satisfaction I got from drawing dragons as a kid is the same as whomever drew the buffalo in Lascaux 30,000 years ago.  When it came time to go to college I chose to study the arts, admittedly because I didn't think I could stand college long enough to get a degree if I studied anything else.  Now I mostly draw the places I go so that I remember them better.",
            imgs: [
                `${urlPrefix}about/artist/bigsummit.webp`,
                `${urlPrefix}about/artist/koh_tao.webp`,
                `${urlPrefix}about/artist/surat_thani.webp`,
                `${urlPrefix}about/artist/chiang_mai_rooftop.webp`,
                `${urlPrefix}about/artist/cenote.webp`,
                `${urlPrefix}about/artist/urban_chedi.webp`
            ]
        }
    ]
}

const work = {
    prof_summary: [
        {
            lead: "Versatile Infrastructure Architect with 10+ years of experience",
            text: "architecting and scaling mission-critical infrastructure for research, education, and enterprise environments. Expert in leading organization-wide technical transformations from manual processes to automated zero-trust architectures while driving adoption through cross-functional influence and stakeholder alignment.",
            tags: []
        },
        {
            lead: "Proven track record of making high-impact architectural decisions",
            text: "that enable business outcomes: architected identity management frameworks serving 400+ researchers, and built collaboration infrastructure supporting platforms with 1M+ monthly users. Specialized in solving ambiguous, complex problems at the intersection of infrastructure, security, and developer experience.",
            tags: []
        },
        {
            lead: "Deep technical expertise in cloud architecture (AWS/GCP), identity management, IaC, CI/CD, and full-stack development.",
            text: "Known for translating business needs into scalable technical solutions and mentoring engineers on architecture and best practices.",
            tags: []
        },
    ],
    skills: [
        {
            heading: "Infrastructure & DevOps",
            list: [
                "System administration (Linux, Windows, macOS)",
                "CI/CD (GitHub Actions, Jenkins, TeamCity, AWS Amplify)",
                "IaC (Ansible, Terraform, AWS CloudFormation)",
                "Cloud orchestration (AWS/GCP)",
                "Virtualization (vSphere, LXC, Docker, Kubernetes)",
                "SaaS (Microsoft Office365, Google Workspace)",
                "Networking (subnet design, VLANs, DHCP, DNS, Wake-on-LAN, Cisco IOS)"
            ]
        },
        {
            heading: "Identity & Security",
            list: [
                "Okta",
                "AWS IAM/Identity Center",
                "Google Admin",
                "LDAP",
                "role-based access control",
                "SCIM",
                "SAML",
                "OAuth/OIDC",
                "Zero-Trust architecture"
            ]
        },
        {
            heading: "Collaboration & Leadership",
            list: [
                "Technical leadership",
                "Cross-functional coordination",
                "Mentoring",
                "Agile/Scrum",
                "Stakeholder communication",
                "Post-incident reviews",
                "Change management",
                "Design and code reviews"
            ]
        },
        {
            heading: "Compliance & Regulation",
            list: [
                "Export Administration Regulations",
                "Family Educational Rights and Privacy Act"
            ]
        },
        {
            heading: "Programming & Development",
            list: [
                "Python",
                "Git",
                "ReactJS",
                "Bash",
                "Full-stack web development",
                "API development",
                "Mobile app development (Dart/Flutter)",
                "Software development lifecycle",
            ]
        },

    ],
    key_projects: [
        "Led enterprise-wide identity transformation from a checklist on a piece of paper to Okta, architecting zero-trust identity framework for multinational workforce with ~20 employee types. Orchestrated cross-functional initiative across HR, Legal, and Operations to establish a unified role-based access-control framework. Designed Okta-centric architecture with secure identity data handling, developed Python migration tooling ensuring data integrity through production cutovers, and implemented SCIM/SAML/OAuth/OIDC integrations across all enterprise systems. Reduced identity management overhead by ~100% while strengthening security posture.",
        "Transformed GPU AI research server fleet from manual configuration handled by researchers to centralized Infrastructure-as-Code with Ansible and Jenkins, eliminating configuration drift across hybrid on-prem/cloud environments. Coordinated with five diverse research teams to gather requirements, architected a role-based sudo solution, and drove adoption through cross-functional stakeholder alignment and demonstrating value.",
        "Solved a critical collaboration bottleneck, enabling developers to share test instances of an AI-driven research platform with 1M+ monthly users. Reverse-engineered complex, legacy, undocumented build system, then designed and implemented new CI/CD pipeline using AWS infrastructure to deploy unique, isolated versions from GitHub branches. Improved efficiency, ability to maintain the platform, and developer performance.",
        "Architected and delivered full-stack SSH key management platform (ReactJS/OAuth frontend, Python API, distributed bash automation), enabling researcher self-service. Hands-on development across the full stack while also designing the architecture. Reduced SSH support tickets by 98% while improving security posture through centralized and automated key management.",
    ],
    work_experience: [
        {
            heading: "Senior Infrastructure Engineer",
            roles: `at the world's only non-profit, open-source AI research lab
Jan 2019 - June 2025`,
            text: [
                "Built and managed mission-critical AI research infrastructure serving 400+ researchers across hybrid on-prem/AWS/GCP environments, achieving 99% uptime. Balanced performance, cost, security, and researcher autonomy while partnering with engineering and research teams to assess technical challenges, advise on infrastructure design, and deliver custom tooling that was previously out of reach.",
                "Architected a high-impact collaboration tool for developers of an AI-driven platform with 1M+ monthly users. Reverse-engineered the complex, legacy, undocumented platform build system, then built and integrated a new pipeline to deploy unique, ephemeral versions of the platform from GitHub branches, all with zero impact to production.",
                "Led organizational strategy for Okta, identity lifecycle, and IT security, partnering with research and engineering leaders to modernize identity workflows, automate onboarding pipelines, and drive enterprise‑wide integration into Okta.",
                "Mentored junior engineers on architectural thinking, automation patterns, and security best practices.Led cross - functional technical initiatives coordinating researchers, engineers, and administrators.",
                "Established data governance framework spanning distributed identity systems (Okta, AWS IAM, Google Admin, Active Directory, OpenLDAP). Implemented automated provisioning pipelines and SCIM/OAuth/OIDC/SAML integrations across all enterprise systems, eliminating manual processes and closing security gaps.",
                "Architected and delivered full-stack solutions (Python APIs, ReactJS frontends, GoLang services) to solve complex infrastructure challenges. Automated multi-account AWS infrastructure with Terraform including VPC peering, tunneling, and cross-cloud networking.",
                "Implemented Jamf MDM for macOS fleet, establishing configuration management and Apple Business Manager integration.",
            ]
        },
        {
            heading: "System administrator",
            roles: `at the fifth most diverse college in the country
2013 - December 2018`,
            text: [
                "Architected and deployed enterprise macOS management platform, automating image deployment and configuration serving 13,000+ students and staff. Saved $10K+ annually in licensing costs and reduced macOS tickets to 0.32% of total tickets through effective automation and documentation.",
                "Automated Windows deployment pipeline by developing hardware-independent imaging workflow using vSphere, sysprep, and Group Policy, and worked around limitations in commercial tooling to deliver a scalable solution.",
                "Administered enterprise Active Directory (1,000+ users across multiple domains), maintained 99%+ uptime for student-facing systems, and ensured FERPA compliance. Collaborated with faculty to balance user needs with institutional security and compliance requirements.",
                "Built zero-budget 24/7 underwater live-stream system for Marine Science Center using repurposed hardware and custom automation, showcasing creative problem-solving under resource constraints.",
            ]
        },
        {
            heading: "Field Systems Engineer (Contractor)",
            roles: `with an event registration technology provider for some of the world's largest tech conferences
2012 - 2013`,
            text: [
                "Provided nationwide, SLA-driven on-site infrastructure for high-profile tech conferences (Salesforce, Amazon, VMWare), coordinating with union workers, event managers and venue management to ensure compliant, on-time installation and configuration."
            ]
        },
        {
            heading: "IT Support Specialist",
            roles: `work study while attending college
2007 - 2011`,
            text: [
                "Provided technical support to faculty, students, and staff for the complete video game development technology stack, including software (Maya, Unreal Engine, Unity, Photoshop, ZBrush, Mudbox), GPU and Wacom workstations, render farm, and audio/video equipment."]
        }
    ]
}

export { urlPrefix, projectTiles, projectContent, about, work }; 
