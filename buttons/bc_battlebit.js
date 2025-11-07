const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'bc_battlebit',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ BC : BattleBit Remastered')
            .setDescription(`
### 🧾**Pricing**
**30 DAY**  — IDR 608.750 / $37.36

A premium product for the game BattleBit from BC group.

### 💻**System Compatibility:**
• **Processors:** Intel & AMD
• **OS:** Windows 10 x64 (all builds) & 11 x64 (21H2, 22H2, 23H2, 24H2)
• **Graphics:** Nvidia & AMD
• **Disk Format:** GPT & MBR
• **BIOS Mode:** UEFI & Legacy

### 🎯**Additional Information:**
• **Game Resolutions:** Windowed
• **Game Mode:** Any
• **StreamProof:** Yes
• **Game Client:** Steam
• **Run from flash drive:** Yes
• **Software Type:** External

### 🔥**Aimbot Features:**
• Aim toggle
• Bone selection
• Key binding
• FOV control
• Speed adjustment
• LBM (Left Mouse Button) support

### 🔍**Visual ESP Features:**
• Name display
• Weapon display
• Bone indicator
• Health bar
• Line to player
• Custom crosshair
• Distance indicator
• Size adjustment

### 📡**Radar System:**
• Draw Radar toggle
• Type selection
• Radar distance control
• Radar scale adjustment
• CTRL keybind
• ALT keybind

### 💎**BC Advantages:**
✅ **Portable** - Can run from flash drive
✅ **External Technology** - Maximum security
✅ **StreamProof** - Safe for streaming
✅ **Simple Interface** - Easy to use
✅ **Lightweight** - Focused on essential features
✅ **Customizable** - FOV, speed, distance controls
✅ **Comprehensive ESP** - Complete battlefield awareness
✅ **Radar System** - Tactical positioning advantage

### 🎮**Perfect For:**
• Players wanting essential features
• Users who prefer external safety
• Streamers needing clean ESP
• Players focused on tactical awareness
• Users who want portable software
• Those who prefer simple, effective solutions

### ⚔️**Key Features:**
• **Clean ESP** - Name, weapon, health, distance
• **Aimbot** - Bone targeting with FOV control
• **Radar** - Tactical battlefield overview
• **Customizable** - Adjustable FOV, speed, distances
• **Portable Design** - Can run from flash drive

### 📝**Usage Instructions:**
1. Open menu with **F6** or **Home** key
2. Configure aimbot settings (bone, FOV, speed)
3. Customize visual ESP (name, weapon, health)
4. Adjust radar settings for tactical advantage
5. Save settings for future sessions

---
**Lightweight external cheat with radar and essential features!**`)
            .addFields(
                {
                    name: '`💾` PORTABLE',
                    value: 'Can run from flash drive for maximum convenience and security.'
                },
                {
                    name: '`📡` RADAR SYSTEM',
                    value: 'Complete battlefield radar for tactical positioning advantage.'
                },
                {
                    name: '`🎮` SIMPLE INTERFACE',
                    value: 'Easy to use with F6/Home menu access and essential features only.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BC BattleBit cheat.'
                }
            )
            .setColor('#1E90FF')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BC BattleBit Remastered • External • Radar • Portable',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};