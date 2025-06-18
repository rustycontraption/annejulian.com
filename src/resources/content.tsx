const urlPrefix = "https://static.annejulian.net/static/img/";

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
            text: "I fabricated this simple bracket to route the old throttle cable to the new carburator at the correct angle.",
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
            text: "Let's figure out how to put a Tomos moped motor in this chinese pitbike.",
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
            text: "The silencer kept vibrating off the bike.  This final solution included a dirtbike style soft joint between silencer and exhaust chamber to absorb vibrations, and a strap to hold the silencer on after it inevitabely worked its way free.",
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
Motors: Brotherhobby returner r5 x3 and DYS SE Pro 2205 x1,
`,
            img: null
        },
        {
            text: "ELRS and VTX antenna mount",
            img: `${urlPrefix}drone/antenna.webp`,
            model: ``
        },
        {
            text: "Camera bumper",
            img: `${urlPrefix}drone/cam_bumper.webp`,
            model: ``
        },
        {
            text: "",
            img: `${urlPrefix}drone/top.webp`
        }
    ],
    gs750: [
        {
            text: "Unfortunately I don't have any pictures of the bike prior to chopping the back off and welding on the tail hoop.  Afterwards I didn't have a seat so I bolted on this skateboard.",
            img: `${urlPrefix}gs750/skateboard.webp`
        },
        {
            text: "The back frame portion I cut off also had the rear fender mounts so I had to find a new way to mount the rear fender.  There were some existing tabs on the frame I could use but they were too far apart. I also had to relocate the fuse box.  I accomplished both by modeling and 3D printing this fuse box mount that mounts to the same frame tabs.",
            img: `${urlPrefix}gs750/gs750_spacer_fusebox.webp`
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
            img: `${urlPrefix}gs750/standoffs.jpg`
        },
        {
            text: "The single front brake barely stopped by bike.  I swapped the entire front end with one from a similar model that had dual disc brakes.  Dual brakes necessitated replacing the front master cylinder with one that supported two hydraulic lines. ",
            img: `${urlPrefix}gs750/gs750_front_brake.webp`
        },
        {
            text: "The rear turn signals are 3D printed with some standard little LED marker lights found on eBay.  The new rear shocks were necessary for ride quality and safety.  The leather grip tape on the tail hoop just looked nice.",
            img: `${urlPrefix}gs750/gs750_taillight.webp`
        },
        {
            text: "Switching the handlebars to clip-ons meant they no longer cleared the gas tank.  I hammered in both sides of the tank to make room.",
            img: `${urlPrefix}gs750/gas_tank.webp`
        }
    ],
}

const projectTiles = [
    { link: '/rabbit', tileImg: "https://static.annejulian.net/static/img/rabbit/rabbit.png", tileText: "keep a 40 year old car alive", key: 'rabbit' },
    { link: '/miniped', tileImg: "https://static.annejulian.net/static/img/miniped/mastminiped.jpg", tileText: "build a moped minibike", key: 'miniped' },
    { link: '/dive', tileImg: "https://static.annejulian.net/static/img/dive/mastdive.jpg", tileText: "show the world the Salish Sea", key: 'dive' },
    { link: '/drone', tileImg: "https://static.annejulian.net/static/img/drone/hero.webp", tileText: "learn to fly", key: 'drone' },
    { link: '/gs750', tileImg: "https://static.annejulian.net/static/img/gs750/hero.webp", tileText: "build a custom motorcycle", key: 'gs750' }
];

export { projectTiles, projectContent }; 
