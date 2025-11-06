const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'fecurity_apexlegends',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Fecurity : Apex Legends')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 80.000 / $4.50
**7 DAY**   — IDR 341.500 / $20.00
**30 DAY**  — IDR 582.750 / $35.00

A premium product for the game Apex Legend from Fecurity group.

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
• **Game Client:** Steam, Origin & EA
• **In-built Spoofer:** Yes (FREE!)
• **Software Type:** Hybrid

### 🔥**Premium Feature List:**

**Aim Features:**
• Enable/disable checkbox
• Aim at shoot functionality
• Visibility check
• Enemy only targeting
• Controllable horizontal & vertical amount (0 - 30°/s)
• Changeable FOV (0 - 15°)
• **Recoil compensation**
• Draw FOV circle
• Target switch delay
• Unique hitbox system

**Visual ESP (Players):**
• Enable/disable checkbox
• Enemy only display
• Box ESP
• Box outline
• Health display
• Shield display
• Skeleton ESP
• Maximum distance control
• Player info (nickname, distance, weapon)

**Visual ESP (Loot):**
• Enable/disable checkbox
• Maximum distance setting
• **Categories:** Ammo, Shotguns, Snipers, Light, Heavy, Rare, Armor, Knockdown, Misc, Backpack, Energy, Grenade, Attachments
• Loot ESP keybind

**Visual ESP (Misc):**
• Nightmode with factor control (0 - 5)
• Camera field of view changer (0 - 5.5)
• Freecam with keybind

**Miscellaneous Features:**
• Nightmode with factor control (0-5)
• Field of view control (0-5)
• Freecam with keybind
• Developer Mode
• Menu Key & DPI settings
• Force Reload option
• Cache Delay control
• Different distance units (meters, yards, feet)

### 💎**Hybrid Advantages:**
✅ **Free Built-in Spoofer** - Save money on separate purchase
✅ **Hybrid Technology** - Best of external and internal
✅ **StreamProof** - Safe for streaming
✅ **Universal Client Support** - Works on all platforms
✅ **Full Resolution Support** - Including fullscreen
✅ **Premium Quality** - Trusted Fecurity brand

---
**Premium hybrid cheat with built-in protection!**`)
            .addFields(
                {
                    name: '`⚠️` HYBRID TECHNOLOGY',
                    value: 'Combines external safety with internal performance for the best experience.'
                },
                {
                    name: '`🛡️` FREE SPOOFER',
                    value: 'Built-in spoofer included - no need to purchase separately!'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Fecurity Apex Legends cheat.'
                }
            )
            .setColor('#9370DB')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Fecurity Apex Legends • Premium Hybrid Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};