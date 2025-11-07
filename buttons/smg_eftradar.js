const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'smg_eftradar',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('📍 SMG : EFT (Radar) - External Radar Specialist with Comprehensive Loot Detection')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 128.750 / $7.50
**7 DAY**   — IDR 408.750 / $24.00
**30 DAY**  — IDR 897.250 / $54.00

A premium product for the game Escape From Tarkov from SMG group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Official Launcher
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 📍**Advanced Radar System:**
• **Container Display** - All container types visualization
• **Maximum Distance Control** - Adjustable radar range
• **Corpse Detection** - Dead body identification with:
  - Price display
  - Distance calculation
  - Minimum price filtering
• **Item Detection** - Comprehensive loot tracking with:
  - Price information
  - Distance measurement
  - Value threshold filtering

### 🔑**Radar Loot Categories:**
• **Keys** - All door and container keys
• **Containers** - Storage equipment display
• **Barter Items** - Trade goods tracking
• **Provisions** - Food and drink items
• **Gear** - Equipment and armor
• **Medical Supplies** - Health items display
• **Sights** - Optics and scopes
• **Suppressors** - Silencers and muzzle devices
• **Weapons** - Firearms tracking
• **Ammunition** - Ammo types and quantities
• **Magazines** - Ammo clips and drums
• **Tactical Devices** - Grenades and tactical gear
• **Weapon Parts** - Components and attachments
• **Special Equipment** - Rare and unique items
• **Ammo Boxes** - Bulk ammunition containers
• **Maps** - Navigation items

### 👥**Player Detection:**
• **Player Distance** - Range calculation
• **Player Positioning** - Location tracking
• **Movement Tracking** - Real-time position updates

### 🎨**Radar Customization:**
• **Color Configuration** - Customizable color schemes
• **Russian Language Support** - Native language interface

### ⚙️**Advanced Settings:**
• **Radar Width/Height** - Dimension customization
• **Alpha Transparency** - Opacity control
• **Zoom Scale** - Magnification adjustment

### 💾**Configuration Management:**
• **Load Config** - Saved settings import
• **Save Config** - Current settings export
• **Reset Config** - Default settings restoration

### 📍**SMG Advantages:**
✅ **Specialized Radar** - Dedicated radar functionality
✅ **Comprehensive Loot** - All item categories covered
✅ **Built-in Spoofer** - Complete hardware protection
✅ **External Safety** - Minimal detection risk
✅ **Stream Protection** - Content creator safe
✅ **Price Filtering** - Value-based item display
✅ **Customizable Interface** - Full visual control

### 🔫**Perfect For:**
• Players specializing in radar-based gameplay
• Loot farming enthusiasts
• Streamers requiring radar functionality
• Users wanting comprehensive item detection
• Players with official launcher
• Those seeking external safety
• Users requiring built-in spoofer protection

### 🎯**Key Features:**
• **Specialized Radar System** - Dedicated radar with comprehensive detection
• **Comprehensive Loot Tracking** - All item categories with price filtering
• **Built-in Spoofer** - Complete hardware protection included
• **External Design** - Safe and undetectable implementation

---
**Specialized external radar with comprehensive loot detection and built-in spoofer for tactical Escape From Tarkov navigation!**`)
            .addFields(
                {
                    name: '`📍` SPECIALIZED RADAR SYSTEM',
                    value: 'Dedicated radar functionality with comprehensive player and item detection capabilities.'
                },
                {
                    name: '`💰` COMPREHENSIVE LOOT TRACKING',
                    value: 'All item categories with price filtering, distance calculation, and value threshold control.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your SMG EFT Radar premium cheat.'
                }
            )
            .setColor('#228B22')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'SMG EFT Radar • External • Specialized Radar • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};