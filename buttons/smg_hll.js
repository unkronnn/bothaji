const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'smg_hll',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💥 SMG : Hell Let Loose - Advanced External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 85.750 / $5.00
**7 DAY**   — IDR 306.500 / $18.00
**30 DAY**  — IDR 598.250 / $36.00

A premium product for the game Hell Let Loose from SMG group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** External
• **Built-in Spoofer:** Yes

### 🔥**Key Features:**
• **Advanced Aimbot System**
  - Enable (aim bind) with automatic target change
  - Own control for manual override
  - Visibility check for smart targeting
  - AIM radius (FOV) with customizable settings
  - AIM smoothness for natural movement
  - Maximum distance targeting
  - Display radius (FOV) with color selection and advanced settings
  - Display Sight with customizable colors
  - Dice selection for randomized targeting

• **Enhanced Visuals**
  - Square ESP (Off/Ordinary/Angles) with multiple styles
  - Name ESP with color selection and advanced settings
  - Weapon ESP with color choice and additional settings
  - Skeleton ESP with color selection and additional settings
  - Range ESP with color choice and additional settings
  - Role ESP with color choice and additional settings
  - Visibility Check (Invisible Enemy Text/Visible Enemy Text + advanced settings)
  - Health monitoring
  - Teammates Display for friendly identification
  - Max distance configuration

• **World ESP Features**
  - Transport detection with color selection and additional settings
  - Reconnaissance Transport with color selection and additional settings
  - Stocks with color choice and additional settings
  - Garrisons with color choice and additional settings
  - Tanks with color choice and additional settings
  - Outposts with color choice and additional settings
  - Artillery with color choice and additional settings
  - Grenades with color selector and additional settings

• **Advanced Misc Functions**
  - View angle adjustment (30 - 130) for tactical advantage
  - Zoom hack with bind button + zoom value (0 - 40)
  - Disable recoil for perfect accuracy
  - Quick aiming for faster target acquisition
  - Speedhack with bind button + speedhack value (1.2 - 2.5) (RISK)
  - Configurable for risk/reward balance

• **Settings Management**
  - Save Settings for custom configurations
  - Load Settings for quick setup
  - Reset Settings for default values
  - Font Name customization
  - Font size adjustment
  - Change font for personalized display
  - Reset font for standard view

• **Keybinds Configuration**
  - Menu (Select button) for quick access
  - Panic button (Select button) for emergency disable

### 💎**SMG Advantages:**
✅ **Built-in Spoofer** - Complete protection suite
✅ **Advanced Radar** - Comprehensive battlefield awareness
✅ **Speedhack** - Risk/reward speed enhancement
✅ **Zoom Hack** - Tactical zoom capability
✅ **Full Customization** - Extensive settings control
✅ **Risk Management** - Configurable risk features
✅ **StreamProof** - Safe for content creation
✅ **Professional Quality** - High-end performance

### 🎮**Perfect For:**
• Advanced Hell Let Loose players
• Users wanting risk features
• Players requiring speed advantages
• Streamers needing built-in protection
• Those seeking advanced customization
• Users wanting tactical advantages
• Competitive tactical gamers

### ⚔️**Hell Let Loose Features:**
• **Intense Combat** - 50v50 tactical warfare
• **Strategic Positioning** - Tactical battlefield control
• **Vehicle Warfare** - Tanks and transport
• **Artillery Support** - Long-range tactical elements
• **Dynamic Battlefields** - Changing tactical situations

### 🎯**Key Features:**
• **Built-in Spoofer** - Complete protection integration
• **Advanced Radar** - Comprehensive battlefield awareness
• **Speedhack Function** - Risk-based speed enhancement
• **Zoom Hack** - Tactical zoom capability
• **Full Customization** - Extensive settings control
• **Risk Management** - Configurable risk features

### 💡**Why Choose SMG:**
• **Built-in Protection** - Spoofer included for security
• **Advanced Features** - Speedhack and zoom capabilities
• **Comprehensive Radar** - Full battlefield awareness
• **Extensive Customization** - Complete settings control
• **Risk Options** - Advanced features for experienced users
• **Professional Quality** - High-end performance with protection

---
**Advanced external cheat for Hell Let Loose with built-in spoofer and advanced tactical features!**`)
            .addFields(
                {
                    name: '`⚡` SPEEDHACK FEATURE',
                    value: 'Risk-based speed enhancement with configurable values (1.2 - 2.5).'
                },
                {
                    name: '`🔍` ZOOM HACK',
                    value: 'Tactical zoom capability with bind button and adjustable values (0 - 40).'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite integrated for maximum security.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your SMG Hell Let Loose advanced cheat.'
                }
            )
            .setColor('#DC143C')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'SMG Hell Let Loose • External • Built-in Spoofer • Advanced Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};