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
            text: "Infrastructure Engineer with 10+ years of expertise in building infrastructure, CI/CD pipelines and tooling for research and creative teams, with a track record of zero-downtime migrations to new technology, and always-green pipelines",
            tags: []
        },
        {
            text: "55 years delivering technical support and leadership at the nation’s fifth most diverse college; consistently tapped as the go-to specialist for situations requiring extreme levels of patience, compassion, and empathy",
            tags: []
        },
        {
            text: "Demonstrated ability to spot process and tooling improvements, assess challenges, and deliver effective, impactful solutions",
            tags: []
        },
        {
            text: "Expert in CI/CD pipelines, cloud architecture, and infrastructure as code with proven ability to reverse-engineer complex systems",
            tags: []
        },
        {
            text: "Adept at driving the adoption of new technologies through collaboration and meeting people where they’re at",
            tags: []
        },
        {
            text: "Expert in building infrastructure, with a track record of zero-downtime migrations and 99.9%+ system availability",
            tags: []
        },
        {
            text: "Strong background in cross-functional technical leadership across engineering, research, and non-technical teams",
            tags: []
        }
    ],
    favorite_projects: [
        {
            heading: "Identity management from the ground up",
            text: "I spearheaded an organization-wide identity modernization from legacy LDAP to Okta, automating lifecycle management for 400+ users with a zero-downtime cutover.  Coordinated across IT, HR, legal and research departments to ensure the new system accommodated everyone's needs while also conforming to company policy and legal regulation.  Reduced manual user provisioning overhead for the IT team to nearly zero."
        },
        {
            heading: "Full-stack solution for SSH key management",
            text: "I designed and implemented a full-stack SSH key management system with a ReactJS web portal and Python backend, streamlining user access to compute resources and nearly eliminating IT overhead for SSH key management and support.  Prior to my project, the IT team had to manually store public SSH keys in AWS S3 and relied on scripts to copy those keys to the server, and users had to email their public keys to the IT team.  My project enabled users to upload their public keys themselves via a website I built, and then each server requested the key at login time, fully automating the ssh key management process."
        },
        {
            heading: "Moonshot tool development project",
            text: "I delivered a moonshot dev-tooling project for a high-traffic research platform with 1M+ monthly users, to enable developers to share ephemeral builds of the platform based on their development Git branches.  I reverse-engineered the complex, legacy, undocumented build system responsible for deploying the platform, then built and integrated a new pipeline to deploy unique, ephemeral versions of the platform from GitHub branches, all while avoiding any impact whatsoever to production."
        },
        {
            heading: "Underwater 24/7 livestream in the Puget Sound",
            text: "I developed a unique fault-tolerant underwater video monitoring system for marine research and citizen engagement, creating an innovative solution with no existing precedent at the time for 24/7 operation, under extreme budgetary and environmental constraints."
        }
    ],
    work_experience: [
        {
            heading: "Infrastructure engineer at an AI research non-profit",
            roles: `Senior Infrastructure Engineer, 2024 - 2025
Infrastructure Engineer 2, 2021 - 2024
Information Technology Engineer 2, 2020 - 2021
Information Technology Engineer, 2019 - 2020`,
            text: "Infrastructure and identity engineer who modernizes systems to reduce friction, improve security, and scale research and development operations. I design and deliver enterprise-grade identity solutions, automate server and cluster provisioning, and build full‑stack tools that make complex workflows easier for diverse teams. I also mentor junior staff and embed with teams to translate strategic goals into practical, maintainable infrastructure."
        },
        {
            heading: "System administrator at the fifth most diverse college in the country",
            roles: `System Administrator, 2014 - 2019
IT and A/V Support, 2013 - 2019`,
            text: "I provided culturally sensitive IT support across diverse campus groups and technologies, translating technical processes into clear, user-friendly language to reduce frustration and increase inclusion. As the sole owner of the Apple infrastructure I designed and maintained scalable macOS and iOS systems, implemented build pipelines, an Apple MDM server, and automated deployment workflows to improve workstation reliability. I also partnered with faculty and students to define hardware, software, and support standards that met classroom needs while aligning with institutional IT requirements."
        },
        {
            heading: "Contractor with an event registration and lead retrieval startup",
            roles: `Field Systems Engineer, 2012 - 2013`,
            text: "I provided nationwide, SLA-driven on-site infrastructure for high-profile tech conferences (Salesforce, Amazon, VMWare), coordinating with union workers, event managers and venue management to ensure compliant, on-time installation and configuration."
        },
        {
            heading: "College IT support",
            roles: `IT Support Specialist, 2007 - 2011`,
            text: "I provided technical support to faculty, students, and staff for the complete video game development technology stack, including software (Maya, Unreal Engine, Unity, Photoshop, ZBrush, Mudbox), GPU and Wacom workstations, render farm, and audio/video equipment."
        }
    ]
}

export { urlPrefix, projectTiles, projectContent, about, work }; 
