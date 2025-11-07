const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'umbrella_deadlock',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('☂️ Umbrella : Deadlock - Internal Hero Combo Cheat')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 40.250 / $2.00
**7 DAY**   — IDR 139.000 / $8.00
**14 DAY**  — IDR 209.000 / $12.50
**30 DAY**  — IDR 295.000 / $17.50
**90 DAY**  — IDR 785.500 / $47.00
**180 DAY** — IDR 1.448.000 / $86.50

A premium product for the game Deadlock from Umbrella group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Any Windows Version x64
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Fullscreen, Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Built-in Spoofer:** Yes
• **Software Type:** Internal

### 🦸**Hero Combo Features:**
• **Abrams** - Tank hero combos
• **Bebop** - Support hero combos
• **Grey Talon** - DPS hero combos
• **Haze** - Assassin hero combos
• **Mo&Krill** - Duo hero combos
• **Paradox** - Controller hero combos
• **Shiv** - Fighter hero combos
• **Vindicta** - Hunter hero combos
• **Wraith** - Stealth hero combos

### 👁️**Visual Features:**
• **Enable Toggle** - Section activation control
• **Max Distance** - Rendering distance control
• **Box Type** - Multiple enemy box modes
• **Skeleton** - Enemy bone structure display
• **Glow** - Glow outline around enemies
• **Offscreen Indicators** - Enemy position with distance and HP
• **Unlock Minimap** - Show all enemies on minimap
• **Hero Icons** - Highlight hero icons above enemies
• **Orbs** - Highlight collectible orbs
• **Spectator List** - Display watching player names

### 🎯**Aimbot (Legit Bot) Features:**
• **Enable Toggle** - Section activation control
• **Bind** - Custom aimbot activation key
• **Type** - Default, PSilent, Only Yaw modes
• **Backtrack** - Hitbox rewind capability
• **FOV** - Aimbot working radius
• **Smooth Type** - Smooth adjustment method
• **Smooth Factor** - Smooth adjustment intensity
• **PSilent Hitchance** - PSilent trigger probability
• **Aim Bones** - Bone selection for targeting
• **Targets** - Priority target selection logic
• **Auto Fire** - Automatic shooting settings
• **Ignore** - Exclude specific target categories
• **Target Selection** - Closest to crosshair, By distance, By lowest HP
• **Lock Target** - Maintain lock until key release or target exit

### 🔥**Aimbot (Rage Bot) Features:**
• **Enable Toggle** - Section activation control
• **Auto Fire** - Automatic enemy/soul shooting
• **Targets** - Target settings configuration
• **Target Priority** - Priority logic configuration
• **Target Selection** - Closest to crosshair, By distance
• **BackTrack** - Hitbox rewind capability
• **Magic Bullet** - Bullet redirection feature

### 🌍**World Features:**
• **Enable Toggle** - Section activation control
• **Disable Skybox** - Sky removal for visibility
• **Skybox Color** - Custom sky color configuration
• **Skybox Brightness** - Sky brightness control
• **Props Color** - Object color customization
• **Light Color** - Light and shadow color control
• **Light Brightness** - Light intensity control
• **World Color** - World environment color
• **FOV Changer** - Field of view modification

### ⚙️**Miscellaneous Features:**
• **Auto Dash Jump** - Automatic trick with Shift key
• **Auto Active Reload** - Automatic active reload execution
• **Speed Hack** - Instant movement over obstacles and rooftops
• **Model Inverse** - Underground appearance to enemies (requires climbing)
• **Auto Parry** - Automatic melee attack blocking

### 💎**Umbrella Advantages:**
✅ **Internal Technology** - Maximum performance and responsiveness
✅ **Built-in Spoofer** - Complete protection suite
✅ **Hero Combo System** - Complete hero ability automation
✅ **Dual Aimbot System** - Legit and Rage bot modes
✅ **Advanced Visuals** - Complete game awareness
✅ **World Customization** - Complete visual control
✅ **Automation Features** - Automatic gameplay mechanics
✅ **Flexible Pricing** - Multiple duration options

### 🎮**Perfect For:**
• Competitive Deadlock players
• Hero combo enthusiasts
• Users wanting maximum performance
• Players seeking hero automation
• Those needing advanced features
• Streamers requiring protection
• Players wanting complete control

### 🔮**Deadlock Features:**
• **Hero Diversity** - Unique character abilities
• **Combo System** - Ability chaining mechanics
• **Fast Combat** - Quick reaction gameplay
• **Team Strategy** - Coordinated team play
• **Competitive Ranking** - Skill-based progression

### 🎯**Key Features:**
• **Hero Combo System** - Complete hero ability automation
• **Dual Aimbot** - Both legit and rage bot modes
• **Built-in Spoofer** - Complete protection integration
• **Advanced Visuals** - Complete game awareness system
• **World Customization** - Complete visual environment control
• **Automation** - Automatic gameplay mechanics

---
**Internal cheat with hero combo system and dual aimbot for ultimate Deadlock domination!**`)
            .addFields(
                {
                    name: '`🦸` HERO COMBOS',
                    value: 'Complete automation system for all 9 heroes with ability combos.'
                },
                {
                    name: '`🎯` DUAL AIMBOT',
                    value: 'Both legit and rage bot modes with advanced targeting features.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete protection suite with internal technology for maximum performance.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Umbrella Deadlock premium cheat.'
                }
            )
            .setColor('#4169E1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Umbrella Deadlock • Internal • Hero Combos • Built-in Spoofer',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};