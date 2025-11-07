const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'mason_caliber',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔫 Mason : Caliber - Premium External Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 83.500 / $5.00
**7 DAY**   — IDR 199.500 / $12.00
**30 DAY**  — IDR 389.250 / $23.00

A premium product for the game Caliber from Mason group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Game Launcher
• **Software Type:** External

### 🔥**Aimbot Features:**

**Aimbot System:**
• Enable Aimbot toggle
• **Aim Key** - Custom trigger key binding
• **Aim Radius** - Set trigger area for aimbot activation
• **Aim Precision** - Adjustable accuracy settings
• **Aim Spot** - Target body parts: Head, Chest, or both
• **Auto Switch** - Automatically switch to next target
• **Smart Targeting** - Advanced target acquisition

### 🔍**Visual ESP Features:**
• Enable ESP toggle
• **Bounding Box** - 2D square display on opponents
• **Snaplines** - Visual lines to enemy positions
• **Player Role** - Display enemy roles and classes
• **Player Weapon** - Show weapons in enemy hands
• **Player Health** - Display opponent health status
• **Distance Display** - Show distance to enemies
• **Team Recognition** - Ignore friendly players
• **Render Distance** - Maximum visibility range
• **Crosshair Ignore** - Exclude scoped target from ESP/aimbot
• **Clear Ignore List** - Reset ignored players

### ⚙️**Interface Features:**
• **Menu Key** - Custom menu opening key binding
• **Save CPU** - Resource optimization mode
• **Crosshair Display** - Central monitor crosshair
• **Aim Radius Display** - Visual trigger area indicator

### 💎**Mason Advantages:**
✅ **External Technology** - Maximum security and stability
✅ **Team-Based Features** - Role identification and weapon detection
✅ **StreamProof** - Complete streaming safety
✅ **Multi-Client Support** - Steam and Game Launcher compatibility
✅ **Precision Aimbot** - Accurate targeting with customization
✅ **Advanced ESP** - Comprehensive visual information
✅ **CPU Optimization** - Performance-friendly operation
✅ **Budget-Friendly** - Competitive pricing for quality features

### 🎮**Perfect For:**
• Tactical team players seeking advantage
• Squad-based combat operators
• Players who need role identification
• Streamers requiring essential features
• Users who prefer external safety
• Budget-conscious tactical gamers
• Players wanting weapon and role information

### 🔫**Caliber Features:**
• **Tactical Gameplay** - Team-based special forces combat
• **Role System** - Different classes with unique abilities
• **Modern Combat** - Realistic weapons and equipment
• **Strategic Teamwork** - Coordinated squad operations
• **Close Quarters Battle** - Intense CQB scenarios

### 🎯**Key Features:**
• **Role Identification** - See enemy roles and classes
• **Weapon Detection** - Know what enemies are carrying
• **Team Recognition** - Smart friendly player detection
• **Precision Control** - Adjustable aimbot radius and accuracy
• **CPU Optimization** - Resource-efficient performance
• **Multi-Client Support** - Works with Steam and Game Launcher

---
**Premium external cheat for tactical Caliber team operations!**`)
            .addFields(
                {
                    name: '`👥` ROLE SYSTEM',
                    value: 'Advanced role identification for tactical squad awareness.'
                },
                {
                    name: '`🔫` WEAPON DETECTION',
                    value: 'See weapons in enemy hands for strategic advantage.'
                },
                {
                    name: '`⚡` CPU OPTIMIZED',
                    value: 'Performance-friendly design with resource saving features.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Mason Caliber premium cheat.'
                }
            )
            .setColor('#00CED1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Mason Caliber • External • Tactical Team Combat • Role Identification',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};