const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'crookedarc_arcraiders',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚙️ Crooked Arm\'s : Arc Raiders')
            .setDescription(`
### 🧾**Pricing**
**1 DAY**   — IDR 116.750 / $7.00
**7 DAY**   — IDR 445.250 / $26.00
**31 DAY**  — IDR 822.750 / $49.00

A premium product for the game Arc Raiders from Crooked Arm's group.

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
• Name display
• Line connections
• Health display
• Box type selection
• Skeleton ESP
• Line skeleton size control
• Skeleton draw distance
• Distance display

**Bots ESP:**
• 3D Box display
• Name & Distance
• Display distance control

**Advanced Aimbot:**
• Enable human aimbot (Danger mode)
• Visibility check
• Aiming at knocked players
• Lock target feature
• Target switch delay (ms)
• AIM Preset options
• Distances for smooth / jitter
• Smooth control
• Jitter control
• Inertia system
• Overshoot chance
• Overshoot amount
• Micro pause chance
• Draw FOV circle
• FOV control
• Distance targeting
• **Bones selection:** Head, Neck, Left elbow, Right elbow, Body, Pelvis, Left knee, Right knee
• Hotkey selection

**Radar System:**
• Enable radar
• Show robots
• Backlight distance
• Position by X/Y
• Size control
• Alpha transparency

**Loot ESP:**
• **Containers:** All types with display distance
• **Weapons:** Launchers, Rifles, Melee weapons
• **Items:** Consumables, Throwables, Deployables
• **Equipment:** Modifications, Gadgets, Armor
• **Crafting:** Reagents, Parts, Backpacks
• **Resources:** Generators, Currency, Recipes
• Show item count (if any)
• Display distance control

**Color Customization:**
• Visible players color
• Invisible players color
• My team players color
• Target player color
• **Custom colors for all item types** (Containers, Weapons, Items, etc.)

**Miscellaneous Features:**
• Active grenades & mines detection
• Key to disable loot display
• Open menu keybind

---
**Most comprehensive Arc Raiders cheat with advanced features!**`)
            .addFields(
                {
                    name: '`⚠️` EXTERNAL CHEAT',
                    value: 'External software with maximum customization and safety features.'
                },
                {
                    name: '`💾` PORTABLE',
                    value: 'Can run from flash drive for maximum convenience and security.'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Crooked Arm\'s Arc Raiders cheat.'
                }
            )
            .setColor('#4682B4')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Crooked Arm\'s Arc Raiders • Advanced External Technology',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            ephemeral: true
        });
    },
};