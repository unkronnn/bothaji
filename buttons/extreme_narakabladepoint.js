const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'extreme_narakabladepoint',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Extreme : Naraka Bladepoint - Full External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 95.000 / $5.50
**7 DAY**   — IDR 329.750 / $19.00
**30 DAY**  — IDR 732.750 / $43.00

A premium product for the game Naraka Bladepoint from Extreme group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam, Epic Games & Official Naraka Launcher
• **Built-in Spoofer:** No
• **Software Type:** External

### 👁️**Visual Features:**
• **ESP BOX** - Draws a rectangle around enemy
• **ESP Line** - Draws a line to players
• **ESP Info** - Draws information about players (Health, Nickname, Hero, Armor, Weapon, Anger, Distance)
• **ESP bones** - Draws bones
• **Radar** - Drawing 2D radar with enemy
• **Item ESP** - Draws information about items
• **ChestEsp** - Draws information about lootbox

### 🎯**Aim Features:**
• **Aimbot** (default key for work - CAPSLOCK)
• **Enable** - Enable aimbot functionality
• **Silent** - Enables bullet redirection mode (the sight does not move)
• **Magic bullet** - Allows you to shoot through a wall (up to 21 meters)
• **Bone** - Bone selection
• **FOV** - Aimbot work radius
• **Smooth** - Smoothness of aiming (When set to 1, aiming is instantaneous)
• **VisibleCheck** - Check for the visibility of the target

### 🎭**Player Modifications:**
• **IgnoreParry** - Ignoring enemy parries (50% chance)
• **AntiStun** - Disables almost all stun animations that occur during combat (Type 2 - work only for long sword)
• **DisableDamage** - Disable all received damage (work only with bots)
• **InfiniteStamina** - Unlimited stamina
• **Infinite Dragon (for nunchacks)** - Infinite charge nunchacks of golden focus
• **InfiniteSlide** - Unlimited sliding
• **UpperHelper** - The opponent will be thrown higher with an uppercut

### ⚡**Advanced Features:**
• **ChainEditor** - Edit hook, change distance and speed
• **Teleport** - Teleport (in the subsetting you can choose: to the mark or to the near one, to the enemy (by default ALT key))
• **Autoparry** - Enable autoparry
• **CheckOnScreen** - Check enemy on screen for work autoparry
• **UnderStun** - Autoparry work understun (helper for pinger)
• **EditSlide** - Customization of slide settings (maximum speed)
• **EditJump** - Customization of height, speed, jump force

### 🎨**Misc Features:**
• **Skinchanger** - Unlock all outfits and weapons

### 💎**Extreme Advantages:**
✅ **External Software** - Safe and reliable performance
✅ **Visual ESP** - Complete enemy information display
✅ **Advanced Aimbot** - Precision targeting with multiple options
✅ **Player Modifications** - Game-changing abilities
✅ **Teleport System** - Tactical positioning advantage
✅ **StreamProof** - Safe for streaming
✅ **Multiple Client Support** - Works with all game launchers

### 🎮**Perfect For:**
• Competitive Naraka Bladepoint players
• Users wanting maximum visual awareness
• Players seeking tactical advantages
• Streamers requiring safety
• Those wanting complete control
• Users needing advanced features
• Players who prefer external performance

### ⚔️**Naraka Bladepoint Features:**
• **Melee Combat** - Close-quarters fighting system
• **Hero Abilities** - Unique character powers
• **Parkour Movement** - Agile traversal mechanics
• **Battle Royale** - Last man standing gameplay
• **Mythical Setting** - Eastern-inspired world

### 🎯**Key Features:**
• **Visual ESP** - Complete enemy and item awareness
• **Advanced Aimbot** - Precision targeting system
• **Player Modifications** - Enhanced combat abilities
• **Teleport System** - Tactical repositioning
• **External Design** - Safe and efficient performance

---
**External cheat with comprehensive ESP, aimbot, player modifications and teleport system for ultimate Naraka Bladepoint dominance!**`)
            .addFields(
                {
                    name: '`👁️` VISUAL ESP',
                    value: 'Complete enemy and item information display with advanced ESP features.'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: 'Precision targeting with silent aim, magic bullets, and customizable settings.'
                },
                {
                    name: '`⚡` PLAYER MODS',
                    value: 'Game-changing abilities including infinite stamina, anti-stun, and parry ignore.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Extreme Naraka Bladepoint premium cheat.'
                }
            )
            .setColor('#FF6B35')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Extreme Naraka Bladepoint • External • Visual ESP & Aimbot • Player Modifications',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};