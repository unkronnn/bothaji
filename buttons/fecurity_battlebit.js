const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_battlebit',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : BattleBit Remastered')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 130.000 / $7.50
**7 DAY**   — IDR 443.750 / $26.00
**30 DAY**  — IDR 766.000 / $46.00

A premium product for the game Battlebit from Fecurity group.

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
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** Hybrid

### 🔥**Advanced Aimbot Features:**

**Aimbot (Silentbot):**
• Enable toggle
• **Silent Aim** - Undetectable aiming
• **Magic Aimbot** - Advanced targeting system
• Aim At Shoot functionality
• Aim At Scope support
• Enemy only targeting
• Draw FOV circle
• Hitbox Priority selection
• Hitscan Hitbox Priority
• Configurable FOV (0-15)
• Target Switch Delay
• Nearest Coefficient
• Magic Key assignment
• Two aim keys support

### 🔍**Visual ESP Features:**
• Enable toggle
• Enemy only display
• Box ESP
• Box outline
• Health display
• Skeleton ESP
• Maximum distance control
• Player info (Nickname, distance, etc.)

### ⚙️**Miscellaneous Features:**
• **Override FOV**
• Override FOV Speed Hack
• **Instant Hit** - Immediate damage
• **Instant ADS** - Instant aim down sight
• **Unlock Fire Modes**
• **No Spread** - Perfect accuracy
• **No Recoil** - Zero weapon recoil
• **No Boltcatch**
• **No Ballistic**

### 🔧**Developer Mode:**
• Enable toggle
• Distance Unit options (Meters, Feet, Yards, Kilometers)
• Menu Keybind
• Menu DPI control

### 💎**Fecurity Advantages:**
✅ **Hybrid Technology** - Best of external and internal
✅ **Free Built-in Spoofer** - No separate purchase needed
✅ **Silent Aim** - Most advanced and undetectable aiming
✅ **Instant Features** - Instant hit, ADS, no recoil
✅ **StreamProof** - Safe for streaming
✅ **Full Resolution Support** - Including fullscreen
✅ **Premium Brand** - Trusted Fecurity quality
✅ **Advanced Developer Mode** - Professional customization

### 🎮**Perfect For:**
• Competitive players needing advanced aimbot
• Users wanting silent, undetectable cheating
• Players who want maximum control
• Streamers requiring StreamProof protection
• Players who prefer fullscreen gaming
• Those who want hybrid technology benefits

### ⚔️**Key Features:**
• **Silent Aim** - Revolutionary undetectable aiming technology
• **Magic Aimbot** - Advanced targeting algorithms
• **Instant Features** - Immediate response times
• **Complete Weapon Control** - No spread, no recoil, unlock fire modes
• **Developer Mode** - Professional customization options

---
**Advanced hybrid cheat with silent aim and instant features!**`)
            .addFields(
                {
                    name: '`🔇` SILENT AIM',
                    value: 'Revolutionary silent aiming technology for maximum stealth.'
                },
                {
                    name: '`⚡` INSTANT FEATURES',
                    value: 'Instant hit, instant ADS, no recoil - immediate response times.'
                },
                {
                    name: '`🛡️` FREE SPOOFER',
                    value: 'Built-in spoofer included - no need to purchase separately!'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity BattleBit cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity BattleBit Remastered • Silent Aim • Hybrid Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};