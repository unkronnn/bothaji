const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_bloodhunt',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🧛 Fecurity : BloodHunt - Premium Hybrid Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 100.000 / $6.00
**7 DAY**   — IDR 273.250 / $16.00
**30 DAY**  — IDR 499.500 / $30.00

A premium product for the game BloodHunt from Fecurity group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2, 25H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Software Type:** Hybrid
• **In-built Spoofer:** Yes (FREE!)

### 🔥**Advanced Aimbot Features:**

**Aimbot System:**
• Enable Aimbot toggle
• **Aimbot Type:** Vectored or Silent aim
• FOV control adjustment
• Aim Smoothing for natural movement
• Target Switch Delay for strategic targeting
• Hitscan Coefficient for precise shots
• Aim At Scope (ADS) functionality
• Visible Only targeting
• Hitbox Priority system
• Multiple Aim Keys (Primary, Secondary, Toggle)
• **Recoil Compensation** - Zero weapon recoil
• Hitscan Hitbox Priority (Head, Neck, Chest, Arms, Legs)

### 🔍**Visual ESP Features:**
• Enable toggle
• Enemy only display
• Box ESP
• Outline Box ESP
• Health display
• Skeleton ESP with thickness control
• Maximum Distance adjustment
• Full Player Info (Name, Distance, Weapon)

### ⚙️**Miscellaneous Features:**
• **Override FOV** - Custom field of view
• **Add FOV** - Enhanced visibility
• **Invisible Opacity** - Control transparency
• **Developer Mode** - Professional customization
• **Menu Key** - Custom key binding
• **DPI Adjustment** - Interface scaling
• **Force Reload Menu** - Quick menu refresh
• **Distance Unit Selection** (Meters, Feet, Yards, Kilometers)

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Best of external and internal performance
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **StreamProof** - Complete streaming safety
✅ **Full Resolution Support** - Including fullscreen
✅ **Premium Fecurity Quality** - Trusted brand reliability
✅ **Advanced Aimbot** - Vectored and Silent aim options
✅ **Professional ESP** - Skeleton, boxes, health, distance
✅ **Customization** - FOV, opacity, interface controls

### 🎮**Perfect For:**
• Competitive BloodHunt players seeking advantage
• Battle Royale enthusiasts
• Streamers requiring StreamProof protection
• Players who want hybrid technology benefits
• Users who prefer fullscreen gaming
• Competitive operators needing tactical advantage
• Players who want maximum performance

### 🏹️**BloodHunt Features:**
• **Battle Royale Gameplay** - Large-scale survival combat
• **Competitive Ranking** - Climb the leaderboards
• **Strategic Gameplay** - Tactical positioning and planning
• **Realistic Combat** - Ballistic physics and weapon behavior
• **Map Awareness** - Critical for survival advantage

### 🎯**Key Features:**
• **Dual Aim Types** - Choose between Vectored and Silent aim
• **Advanced ESP** - Skeleton with customizable thickness
• **Recoil Compensation** - Zero weapon recoil for perfect accuracy
• **Professional Interface** - Developer mode with advanced controls
• **Custom FOV** - Enhanced visibility for tactical advantage

---
**Premium hybrid cheat for competitive BloodHunt survival!**`)
            .addFields(
                {
                    name: '`🔥` HYBRID TECHNOLOGY',
                    value: 'Maximum performance combining external safety with internal power.'
                },
                {
                    name: '`🧛` SILENT AIM',
                    value: 'Revolutionary silent aiming technology for undetectable advantage.'
                },
                {
                    name: '`🛡️` FREE SPOOFER',
                    value: 'Built-in spoofer included - no need to purchase separately!'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity BloodHunt premium cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity BloodHunt • Premium Hybrid Technology • StreamProof',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};