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
    rabbit: [],
    miniped: [],
    dive: [
        {
            text: "The Highlign College MaST Center wanted a 24/7 underwater livestream of the happenings under their dock.",
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
            text: "We used Logitech c920 webcams because (at the time) they had an H.264 hardware encoder.",
            img: `${urlPrefix}dive/crab_jellyfish.webp`
        },
        {
            text: "MaST wanted three cameras but the USB busses available didn't have enough throughput to support more than one H.264 stream at a time so used three separate laptops, ",
            img: `${urlPrefix}dive/pylons.webp`
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
    { link: '/rabbit', tileImg: "https://static.annejulian.net/static/img/rabbit/rabbit.png", tileText: "lorem ipsum dolor sit amet", key: 'rabbit' },
    { link: '/miniped', tileImg: "https://static.annejulian.net/static/img/miniped/mastminiped.jpg", tileText: "lorem ipsum dolor sit amet", key: 'miniped' },
    { link: '/dive', tileImg: "https://static.annejulian.net/static/img/dive/mastdive.jpg", tileText: "lorem ipsum dolor sit amet", key: 'dive' },
    { link: '/drone', tileImg: "https://static.annejulian.net/static/img/drone/hero.webp", tileText: "lorem ipsum dolor sit amet", key: 'drone' },
    { link: '/gs750', tileImg: "https://static.annejulian.net/static/img/gs750/hero.webp", tileText: "lorem ipsum dolor sit amet", key: 'gs750' }
];

export { projectTiles, projectContent }; 
