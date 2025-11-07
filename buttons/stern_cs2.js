const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'stern_cs2',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⭐ Stern : Counter Strike 2 - Premium with Skin Changer')
            .setDescription(`
### 🧾**Pricing**
**30 DAY**  — IDR 97.500 / $5.70

A premium product for Counter Strike 2 from Stern group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Official Launcher
• **Software Type:** External

### 🔥**Advanced Aimbot Features:**

**Professional Aimbot System:**
• **Enable Aimbot** - Toggle aiming assistance
• **FOV Aim** - Customizable targeting area
• **Dynamic FOV** - Adaptive field of view
• **Visible Check** - Only target visible enemies
• **Random Bones** - Variable bone selection
• **Scope Only** - Activate only when scoping
• **Ignore Flash** - Continue aiming through flash effects
• **TriggerBot** - Automatic firing system
• **FOV Arrow** - Visual targeting indicator
• **Aim Key** - Custom activation button
• **Priority System** - Target prioritization
• **FOV Value** - Precise area control
• **Smooth Value** - Natural aim movement
• **Aim Delay** - Target acquisition timing
• **Hit Chance** - Accuracy optimization
• **Trigger Delay** - Firing timing control
• **Min Dynamic FOV** - Minimum adaptive range
• **FOV Distance** - Range-based targeting

### 🔍**Advanced Visual ESP:**

**Player ESP Features:**
• **Skeleton ESP** - Complete bone structure visualization
• **Head Circle** - Critical target highlighting
• **Box ESP** - Player boundary display
• **Gradient Box** - Enhanced box styling
• **Eye Direction** - Player view direction indication
• **Player Distance** - Exact distance measurement
• **Player Health** - HP status monitoring
• **Player Ammo** - Ammunition count display
• **Kill Count** - Elimination tracking
• **Tracers** - Bullet path visualization
• **Player Money** - Economic status display
• **Player Flash** - Flash effect indication
• **Player Defuse** - Bomb defusal status
• **Weapon Display** - Icon or text weapon options

**Grenade ESP System:**
• **Molotov Detection** - Fire grenade visualization
• **Smoke Display** - Smoke grenade awareness
• **Flash Indication** - Flash grenade detection
• **HE Grenade** - Explosive grenade tracking
• **Circle Radius** - Explosion area display
• **Icon Display** - Visual grenade identification
• **Name Display** - Grenade type information

### 🗺️**Advanced Radar System:**
• **Enable Radar** - Minimap activation
• **Show Teammates** - Friendly player visibility
• **Max Distance** - Radar range control
• **Radar Size** - Adjustable dimensions

### ⚙️**Other Premium Features:**
• **ESP Plant C4** - Bomb plant detection
• **ESP Spectators** - Observer monitoring
• **Particle Effects** - Enhanced visual effects
• **Crosshair** - Custom aiming reference
• **Crosshair Configurations** - Multiple crosshair options

### 🎨**Exclusive Skin Changer:**
• **Complete Skin Access** - All CS2 skins available
• **Inventory Customization** - Personalize your loadout
• **Weapon Skins** - Customize firearm appearance
• **Knife Skins** - Premium melee weapon options
• **Glove Skins** - Hand customization
• **Agent Skins** - Character appearance
• **Stickers & Patches** - Additional cosmetic options

### 💎**Stern Advantages:**
✅ **PREMIUM SKIN CHANGER** - Complete inventory customization
✅ **ADVANCED AIMBOT** - Professional-grade targeting with dynamic FOV
✅ **COMPREHENSIVE ESP** - Detailed player and grenade information
✅ **EXTERNAL TECHNOLOGY** - Maximum security and stability
✅ **STREAMPROOF PROTECTION** - Safe for content creation
✅ **MULTI-LAUNCHER SUPPORT** - Steam and Official Launcher compatibility
✅ **ADVANCED FEATURES** - Hit chance, dynamic FOV, particle effects
✅ **PROFESSIONAL INTERFACE** - Customizable crosshair configurations
✅ **PREMIUM QUALITY** - High-end features at competitive pricing

### 🎮**Perfect For:**
• Players seeking complete skin customization
• Competitive users requiring advanced aimbot features
• CS2 enthusiasts wanting comprehensive ESP
• Streamers needing skin changer and ESP
• Players who value professional-grade features
• Users wanting dynamic targeting systems
• Gamers seeking premium external technology
• Players who want full inventory personalization

### 🎨**Skin Changer Excellence:**
• **Complete Inventory Access** - All available CS2 skins
• **Real-time Updates** - Latest skin additions
• **Instant Application** - Immediate skin changes
• **Safe Usage** - Undetectable skin modifications
• **Custom Loadouts** - Personalized weapon combinations

---
**Premium external cheat with exclusive skin changer and advanced features!**`)
            .addFields(
                {
                    name: '`⭐` SKIN CHANGER',
                    value: 'Complete inventory customization with all CS2 skins.'
                },
                {
                    name: '`🎯` DYNAMIC AIMBOT',
                    value: 'Advanced targeting with hit chance and dynamic FOV.'
                },
                {
                    name: '`🎨` PREMIUM FEATURES',
                    value: 'Particle effects, grenade ESP, and professional interface.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Stern CS2 premium cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Stern CS2 • External • Skin Changer • Premium Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};