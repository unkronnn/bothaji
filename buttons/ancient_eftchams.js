const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_eftchams',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏛️ Ancient : EFT Chams - External with Chams & Spoofer')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 60.000 / $3.50
**7 DAY**   — IDR 119.500 / $7.00
**30 DAY**  — IDR 249.750 / $15.00

A premium product for the game Escape From Tarkov from Ancient group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (build 21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD (1000 series+)
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎮**Additional Information:**
• **Game Resolution:** Borderless & Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Official Launcher
• **Run from Flash Drive:** No
• **Built-in Spoofer:** Yes
• **Software Type:** External

### 🎨**Chams Features:**
• **PMC Chams** - Visible and invisible colors
• **Team Chams** - Squad member identification
• **Scav Chams** - AI scav visibility
• **AI Chams** - Bot enemy detection
• **Boss Chams** - Special enemy highlighting

### 💰**Loot ESP:**
• **Loot < 10k** - Color-coded low-value items
• **Loot > 10k** - Mid-value item highlighting
• **Loot > 50k** - High-value item display
• **Loot > 100k** - Premium item identification
• **Loot > 500k** - Ultra-rare item highlighting

### 💀**Corpse ESP:**
• **Corpse < 10k** - Low-value corpse identification
• **Corpse > 10k** - Mid-value corpse highlighting
• **Corpse > 50k** - High-value corpse display
• **Corpse > 100k** - Premium corpse identification
• **Corpse > 500k** - Ultra-valuable corpse highlighting

### 🛠️**Miscellaneous Features:**
• **NoRecoil** - Complete weapon recoil elimination
• **NoSway** - Remove weapon sway effects
• **NoVisor** - Disable visor effects
• **InstantADS** - Instant aim down sights
• **Inf Stamina** - Unlimited stamina

### ⚙️**Advanced Configuration:**
• **Preset Configuration** - Load and save presets
• **Loot Selector** - Filter by type (All, Mods, Weapons, Magazines, etc.)
• **Config Management** - Save, load, and create configs

### 🏛️**Ancient Advantages:**
✅ **Built-in Spoofer** - Complete hardware protection
✅ **Chams System** - Advanced player visualization
✅ **Comprehensive Loot ESP** - All loot tiers with pricing
✅ **External Safety** - Minimal detection risk
✅ **Stream Protection** - Content creator safe
✅ **Preset Management** - Easy configuration saves
✅ **Budget Friendly** - Most affordable option

### 🔫**Perfect For:**
• Budget-conscious players
• Users needing chams visualization
• Loot farming enthusiasts
• Streamers requiring safety
• Players wanting external safety
• Those with Steam/Official Launcher
• Users seeking comprehensive loot detection

### 🎯**Key Features:**
• **Advanced Chams** - Complete player and AI visualization
• **Comprehensive Loot ESP** - All loot tiers with value filtering
• **Built-in Spoofer** - Complete hardware protection included
• **External Design** - Safe and undetectable implementation

---
**External cheat with advanced chams system and built-in spoofer for effective Escape From Tarkov raids!**`)
            .addFields(
                {
                    name: '`🎨` ADVANCED CHAMS',
                    value: 'Complete visualization system for PMC, Scav, AI, and Boss enemies with customizable colors.'
                },
                {
                    name: '`💰` COMPREHENSIVE LOOT ESP',
                    value: 'All loot tiers displayed with value filtering from <10k to >500k rubles.'
                },
                {
                    name: '`🛡️` BUILT-IN SPOOFER',
                    value: 'Complete hardware protection system included for maximum security.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient EFT Chams premium cheat.'
                }
            )
            .setColor('#8B4513')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient EFT Chams • External • Built-in Spoofer • Advanced Visualization',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};