import {
    BoolMetaPixel,
    Vector2MetaPixel,
    Vector2NormalizedMetaPixel,
    FloatMetaPixel,
    IntMetaPixel,
    PairMetaPixel,
} from "./MetaPixelTypes.js";

const Metapixels = {
    0: new BoolMetaPixel(0, "Hat Is Tail", "Enables hat offset"),
    1: new Vector2MetaPixel(1, "Hat Offset", "Hat offset position in pixels"),
    2: new BoolMetaPixel(
        2,
        "Use Duck Color",
        "If this metapixel exists, White (255, 255, 255) and Grey(157, 157, 157) will be recolored to duck colors."
    ),
    3: new BoolMetaPixel(
        3,
        "Hat No-Flip",
        "If this metapixel exists, the hat will not be flipped with the direction of the duck."
    ),

    //Capes
    //-------------------------------------------------------------------------------
    10: new Vector2MetaPixel(10, "Cape Offset", "Cape offset position in pixels"),
    11: new BoolMetaPixel(11, "Cape Is Foreground", "If this metapixel exists, the cape will be drawn over the duck."),
    12: new Vector2NormalizedMetaPixel(12, "Cape Sway Modifier", "Affects cape length, and left to right sway.", true),
    13: new Vector2NormalizedMetaPixel(
        13,
        "Cape Wiggle Modifier",
        "Affects how much the cape wiggles in the wind.",
        true
    ),
    14: new FloatMetaPixel(14, "Cape Taper Start", "Affects how narrow the cape/trail is at the top/beginning."),
    15: new FloatMetaPixel(15, "Cape Taper End", "Affects how narrow the cape/trail is at the bottom/end."),
    16: new FloatMetaPixel(16, "Cape Alpha Start", "Affects how transparent the cape/trail is at the top/beginning."),
    17: new FloatMetaPixel(17, "Cape Alpha End", "Affects how transparent the cape/trail is at the bottom/end."),
    20: new BoolMetaPixel(
        20,
        "Cape Is Trail",
        "If this metapixel exists, the cape will be a trail instead of a cape (think of the rainbow trail left by the TV object)."
    ),

    //Particles
    //-------------------------------------------------------------------------------
    30: new Vector2MetaPixel(
        30,
        "Particle Emitter Offset",
        "The offset in pixels from the center of the hat where particles will be emitted."
    ),
    31: new IntMetaPixel(
        31,
        "Particle Default Behavior",
        "B defines a particle behavior from a list of presets: 0 = No Behavior, 1 = Spit, 2 = Burst, 3 = Halo, 4 = Exclamation"
    ),
    32: new PairMetaPixel(
        32,
        "Particle Emit Shape",
        "G: 0 = Point, 1 = Circle, 2 = Box   B: 0 = Emit Around Shape Border Randomly, 1 = Fill Shape Randomly, 2 = Emit Around Shape Border Uniformly"
    ),
    33: new Vector2MetaPixel(33, "Particle Emit Shape Size", "X and Y size of the particle emitter (in pixels)"),
    34: new IntMetaPixel(34, "Particle Count", "The number of particles to emit."),
    35: new FloatMetaPixel(35, "Particle Lifespan", "Life span of the particle, in seconds."),
    36: new Vector2NormalizedMetaPixel(36, "Particle Velocity", "Initial velocity of the particle."),
    37: new Vector2NormalizedMetaPixel(37, "Particle Gravity", "Gravity applied to the particle."),
    38: new Vector2NormalizedMetaPixel(
        38,
        "Particle Friction",
        "Friction applied to the particle (The value it's velocity is multiplied by every frame).",
        true
    ),
    39: new Vector2NormalizedMetaPixel(39, "Particle Alpha", "G = Start alpha, B = End alpha", true),
    40: new Vector2NormalizedMetaPixel(40, "Particle Scale", "G = Start scale, B = End scale", true),
    41: new Vector2NormalizedMetaPixel(41, "Particle Rotation", "G = Start rotation, B = End rotation"),
    42: new Vector2MetaPixel(42, "Particle Offset", "Additional X Y offset of particle."),
    43: new BoolMetaPixel(
        43,
        "Particle Background",
        "If this metapixel exists, particles will be rendered behind the duck."
    ),
    44: new BoolMetaPixel(
        44,
        "Particle Anchor",
        "If this metapixel exists, particles will stay anchored around the hat position when it's moving."
    ),

    45: new BoolMetaPixel(
        45,
        "Particle Animated",
        "If this metapixel exists, particles will animate through their frames. Otherwise, a frame will be picked randomly."
    ),
    46: new BoolMetaPixel(46, "Particle Animation Loop", "If this metapixel exists, the particle animation will loop."),
    47: new BoolMetaPixel(
        47,
        "Particle Animation Random Frame",
        "If this metapixel exists, the particle animation will start on a random frame."
    ),
    48: new FloatMetaPixel(48, "Particle Animation Speed", "How quickly the particle animates."),
    49: new BoolMetaPixel(
        49,
        "Particle Anchor Orientation",
        "If this metapixel exists, particles will flip and rotate to orient with the hat."
    ),

    60: new FloatMetaPixel(
        60,
        "Quack Delay",
        "Amount of time in between pressing the quack button and the quack frame appearing.",
        2.0
    ),
    61: new FloatMetaPixel(
        61,
        "Quack Hold",
        "Minimum amount of time to keep the quack frame held, even if the quack button is released.",
        2.0
    ),
    62: new BoolMetaPixel(
        62,
        "Quack Suppress Requack",
        "If this metapixel exists, a new quack will not be allowed to begin until Quack Delay and Quack Hold are finished."
    ),

    //Strange
    //-------------------------------------------------------------------------------
    70: new BoolMetaPixel(70, "Wet Lips", "If this metapixel exists, the hat will have 'wet lips'."),
    71: new BoolMetaPixel(71, "Mechanical Lips", "If this metapixel exists, the hat will have 'mechanical lips'."),

    // FIX THIS. Create Randomizer
    //Special
    //-------------------------------------------------------------------------------
    100: new IntMetaPixel(
        100,
        "Randomize Parameter X",
        "If present, the previously defined metapixel value will have a random number between G and B applied to its X value each time it's used. This will generally only work with particles..",
        true
    ),
    101: new IntMetaPixel(
        101,
        "Randomize Parameter Y",
        "If present, the previously defined metapixel value will have a random number between G and B applied to its X value each time it's used. This will generally only work with particles..",
        true
    ),
    102: new IntMetaPixel(
        102,
        "Randomize Parameter",
        "If present, the previously defined metapixel value will have a random number between G and B applied to its X and Y values each time it's used. This will generally only work with particles..",
        true
    ),
};

export default Metapixels;
