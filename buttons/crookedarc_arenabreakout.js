const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'crookedarc_arenabreakout',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚙️ Crooked Arm\'s : Arena Breakout: Infinite')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 116.750 / $7.00
**7 DAY**   — IDR 348.000 / $20.00
**31 DAY**  — IDR 706.250 / $42.00

A premium product for the game Arena Breakout: Infinite from Crooked Arm's group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 (all builds) & 11 (21H2, 22H2, 23H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT
• **BIOS Mode:** UEFI

### 🎯**Additional Information:**
• **Game Resolutions:** Windowed (Fullscreen requires specific methods)
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam & Official Launcher
• **Run from flash drive:** Yes
• **Software Type:** External

### 🔥**Advanced Feature List:**

**Players ESP:**
• Only visible players
• My team players display
• Name, Team, Level, Category
• Health, Weapon in hands
• Ammo count, Item cost
• Corpse detection
• Line connections
• Box types (2D, 3D, Skeleton)
• Skeleton line thickness control
• Distance display

**Bots ESP:**
• Only visible bots
• Name, Level, Category
• Weapon in hands
• Ammo count, Item cost
• Corpse detection
• Line connections
• Box types (2D, 3D, Skeleton)
• Skeleton display options
• Distance display

**Radar System:**
• Enable radar
• Show players & bots
• Display distance control
• Position by X/Y
• Size adjustment

**Loot ESP:**
• Open loot list with sorting
• Sort by Name or Price
• Categories: Weapons, Adapters, Ammo, Equipment, Medical, Provisions, Keys, Quest items
• Item rarity color coding
• Item durability & count display
• Item pricing
• Price filtering
• Distance control

**Aimbot Features:**
• Enable aimbot with prediction
• Compensate breath & recoil in optic scope
• Aiming at knocked players
• Aiming at bots (Wild player mode)
• Visibility check
• Snapline display
• Smoothing control
• FOV display and control
• Target switch delay
• Distance targeting
• Bone selection (Head, Neck, Elbows, Body, Pelvis, Knees)
• Hotkey assignment

**Misc Features:**
• Disable weapon recoil (Danger)
• Show ammo count
• Draw crosshair with color control

**Color Customization:**
• Change colors for visibility states
• Custom colors for players, bots, corpses, team players
• Loot category colors (Weapons, Ammo, Medicine, Equipment, etc.)

### 💎**Crooked Arm's Advantages:**
✅ **Portable** - Can run from flash drive
✅ **Comprehensive ESP** - Complete player/bot/loot awareness
✅ **Advanced Aimbot** - Professional targeting with prediction
✅ **Loot Intelligence** - Price-based sorting and filtering
✅ **Full Customization** - Colors and settings control
✅ **StreamProof** - Safe for streaming

---
**Most comprehensive external cheat with advanced features!**`)
            .addFields(
                {
                    name: '`💾` PORTABLE',
                    value: 'Can run from flash drive for maximum convenience and security.'
                },
                {
                    name: '`🔍` LOOT INTELLIGENCE',
                    value: 'Advanced loot ESP with price sorting and rarity filtering.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Crooked Arm\'s Arena Breakout cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Crooked Arm\'s Arena Breakout: Infinite • Advanced External Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};