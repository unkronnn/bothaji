const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fkn_deeprockgalactic',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🔥 FKN : Deep Rock Galactic - Internal Super Features Cheat')
            .setDescription(`
### 🧾**Pricing**
**7 DAY**   — IDR 99.500 / $6.00
**30 DAY**  — IDR 171.500 / $10.00
**LIFETIME** — IDR 343.000 / $20.00

A premium product for the game Deep Rock Galactic from FKN group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎮**Additional Information:**
• **Game Resolutions:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from Flash Drive:** -
• **Software Type:** Internal
• **Built-in Spoofer:** -

### 👁️**Visual Features:**
• **Boxes** - Bounding box display around entities
• **Names** - Name identification for players and objects
• **Distance** - Range information display
• **Color Editor** - Customizable color schemes

### 🎯**Aimbot Features:**
• **Aimbot V1** - Basic aimbot functionality
• **Aimbot V3** - Advanced aimbot with enhanced features
• **Magic Bullets** - Bullet trajectory manipulation

### ✏️**Crosshair Features:**
• **Edit** - Custom crosshair design
• **Sizes** - Adjustable crosshair dimensions
• **Color** - Customizable crosshair colors

### ⚙️**Miscellaneous Features:**
• **Super Damage** - Increased damage output
• **No Recoil** - Remove weapon recoil completely
• **Super Jump** - Enhanced jumping ability
• **Fly Hack** - Flight capability
• **Infinite Ammo** - Unlimited ammunition
• **Infinite Grenades** - Unlimited grenade supply
• **Infinite Flares** - Unlimited flare usage
• **Grappler Editor** - Speed, Distance, Limit adjustments
• **No Cooldown** - Remove cooldowns (Weapons, Mining)
• **No Reload** - Instant weapon reloading
• **Auto Reload** - Automatic reloading
• **No Overheat** - Remove weapon overheating
• **Quick Reload** - Faster reload times
• **No Cooldown Flares** - Remove flare cooldowns
• **Flares Always On** - Permanent flare activation
• **Quick Production Flares** - Faster flare creation
• **Free Supply Pods** - Unlimited supply drops
• **Instant Revive** - Immediate teammate revival
• **Auto Revive** - Automatic revival system
• **God Mode** - Invincibility mode
• **Custom Camera** - Multiple camera views (FPV, TPV, FPV, DPV)
• **Max Health** - Maximum health status
• **Always Spot Light On** - Permanent illumination
• **Quick Deposit** - Fast resource depositing
• **Super Speed** - Enhanced running speed
• **Auto Recovery** - Automatic health regeneration
• **Add Credits** - Increase credit balance
• **Remove Credits** - Decrease credit balance
• **Add Perk Points** - Increase perk points
• **Add Progress** - Advance mission progress
• **Remove Progress** - Decrease mission progress
• **Add Stars** - Increase mission rating
• **Remove Stars** - Decrease mission rating

### 💎**FKN Advantages:**
✅ **Internal Technology** - Maximum performance and responsiveness
✅ **God Mode** - Complete invincibility for survival
✅ **Super Features** - Extensive game manipulation options
✅ **Lifetime Option** - Permanent access available
✅ **Comprehensive Visuals** - Complete game awareness
✅ **Advanced Aimbot** - Multiple aimbot versions
✅ **Resource Control** - Credits and progress manipulation
✅ **Quality of Life** - Numerous convenience features

### 🎮**Perfect For:**
• Casual players wanting to enjoy the game without frustration
• Speedrunners looking to complete missions quickly
• Players seeking maximum power and control
• Those who want to explore without limitations
• Users wanting lifetime access
• Players who need resource management
• Streamers wanting entertaining content

### ⛏️**Deep Rock Galactic Features:**
• **Co-op Gameplay** - 1-4 player team mining
• **Procedural Caves** - Unique cave generation
• **Resource Mining** - Mineral collection
• **Alien Creatures** - Hostile cave inhabitants
• **Mission System** - Objectives and rewards

### 🎯**Key Features:**
• **God Mode** - Complete invincibility for maximum survival
• **Super Features** - Extensive game manipulation with 50+ features
• **Resource Control** - Complete credit and progress management
• **Lifetime Access** - Permanent ownership option available
• **Internal Performance** - Maximum responsiveness and stability
• **Advanced Aimbot** - Multiple targeting systems

---
**Internal cheat with god mode and super features for ultimate Deep Rock Galactic domination!**`)
            .addFields(
                {
                    name: '`🔥` GOD MODE',
                    value: 'Complete invincibility with unlimited health and survival capabilities.'
                },
                {
                    name: '`⚡` SUPER FEATURES',
                    value: '50+ features including flight, super damage, infinite resources, and teleportation.'
                },
                {
                    name: '`💰` RESOURCE CONTROL',
                    value: 'Complete credit, progress, and mission rating manipulation.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your FKN Deep Rock Galactic premium cheat.'
                }
            )
            .setColor('#FF4500')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'FKN Deep Rock Galactic • Internal • God Mode • Super Features',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};