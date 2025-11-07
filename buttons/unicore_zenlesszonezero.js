const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'unicore_zenlesszonezero',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 Unicore : Zenless Zone Zero - Internal Advanced Combat & Teleport')
            .setDescription(`
### 🧾**Pricing**
**2 DAY**   — IDR 59.250 / $3.50
**7 DAY**   — IDR 112.750 / $6.50
**30 DAY**  — IDR 274.750 / $16.00

A premium product for the game Zenless Zone Zero from Unicore group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all build) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** No
• **Game Client:** Zenless Zone Launcher & Epic Games
• **Run from flash drive:** No
• **Built-in Spoofer:** No
• **Software Type:** Internal

### 👁️**Visuals Features:**
• **Name** - Character name display
• **Distance** - Distance calculation
• **Box** - Rectangle overlays
• **Xray** - See through walls
• **Radar** - Mini-map system
• **Monster** - Enemy detection
• **NPC** - Non-player character awareness
• **Animal** - Animal detection
• **Other Character** - Additional character types
• **Treasure Chest** - Loot box detection
• **Collectable** - Item collection awareness
• **Teleport** - Teleportation points
• **Sonance Casket** - Special item detection
• **Destroyable** - Destructible object detection
• **Destroyable Ores** - Resource identification
• **Other Item** - Miscellaneous item awareness
• **Show Debug Names** - Debug information
• **Adjustable custom ESP Builder** - Customizable ESP

### ⚔️**Combat Features:**
• **Kill Aura** - Area damage system
• **Rapid Fire (no lag)** - Fast attack system
• **Aimbot** - Auto targeting
• **Character Buffs Unlocker** - Unlock character enhancements
• **Auto Echo Absorb** - Automatic echo collection
• **Dumb Enemies** - Weaken enemy AI
• **Magnetizer** - Item attraction system

### 🎮**Player Features:**
• **Noclip** - Walk through walls
• **Infinite Stamina** - Unlimited endurance
• **Godmode** - Invincibility
• **Suicide** - Instant death
• **No Fall Damage** - Fall protection
• **Character Transparency** - Character visibility
• **Auto Loot** - Automatic item collection

### 🌟**Teleports Features:**
• **Mouse Teleport** - Click to teleport
• **Teleport to Mark on Map** - Map-based teleportation
• **Quest Teleport** - Quest destination teleport
• **Auto Teleport with configs** - Automated teleportation

### ⚙️**Utility Features:**
• **Crosshair changer** - Custom crosshair
• **FPS Unlocker** - Frame rate unlock
• **Resolution Scale** - Resolution adjustment
• **Fullbright** - Enhanced brightness
• **Gamma** - Gamma correction
• **Watermark** - Custom watermark
• **Remove Toon Outline** - Visual enhancement
• **Adjustable Config System** - Configuration management

### 💎**Unicore Advantages:**
✅ **Internal Software** - Superior performance integration
✅ **Comprehensive Combat** - Complete battle system
✅ **Advanced Teleportation** - Multiple teleport methods
✅ **Visual ESP** - Complete awareness system
✅ **Player Protection** - Safety features included
✅ **Regular Updates** - Latest game compatibility
✅ **Professional Quality** - Industry-leading features

---
**Internal cheat with comprehensive combat, teleportation, and visual ESP for ultimate Zenless Zone Zero dominance!**`)
            .addFields(
                {
                    name: '`⚔️` COMPREHENSIVE COMBAT',
                    value: 'Kill aura, rapid fire, aimbot, and character enhancement systems.'
                },
                {
                    name: '`🌟` ADVANCED TELEPORTS',
                    value: 'Mouse teleport, quest teleport, and automated teleportation systems.'
                },
                {
                    name: '`👁️` PROFESSIONAL ESP',
                    value: 'Complete awareness system with customizable ESP builder.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Unicore Zenless Zone Zero premium cheat.'
                }
            )
            .setColor('#FF4500')
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Unicore Zenless Zone Zero • Internal • Advanced Combat & Teleport • Professional ESP',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};