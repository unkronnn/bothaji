const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'smg_huntshowdown',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💥 SMG : Hunt: Showdown - Advanced External Cheat')
            .setDescription(
                `**Advanced external cheat for Hunt: Showdown from SMG group.**\n\n` +
                `Highly customizable aimbot with extensive ESP options and battle mode for enhanced gameplay control.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 85.750 / $5.00\n**7 Days** - IDR 327.000 / $19.00\n**30 Days** - IDR 598.250 / $36.00'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Disk:** GPT\n**BIOS:** UEFI\n**Type:** External Software\n**Spoofer:** Built-in'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: '• **Enable** - Aim bind activation\n• **Auto Switch** - Automatic target switching\n• **Custom Prediction** - Advanced ballistic calculation\n• **FOV Control** - Field of view with color selection\n• **Smooth Control** - Natural aim movement\n• **Max Distance** - Target range limitation\n• **Show Radius** - Visual FOV display\n• **Show Crosshair** - Customizable crosshair\n• **Bone Selection** - Precise hitbox targeting'
                },
                {
                    name: '`👁️` PLAYER ESP',
                    value: '• **Box ESP** - Off/Normal/Corner styles\n• **Filled Boxes** - Color selection options\n• **Name Display** - Player identification\n• **Skeleton ESP** - Bone structure display\n• **Distance Display** - Range calculations\n• **Snapline** - Directional indicators\n• **Health Monitoring** - Vital statistics\n• **Max Distance** - ESP range control'
                },
                {
                    name: '`🧟` ENEMY & WORLD ESP',
                    value: '• **Corpse Detection** - Dead body identification\n• **Grunt ESP** - Basic zombie tracking\n• **Dog Detection** - Canine threat awareness\n• **Water Devil** - Special water zombie\n• **Immolator** - Fire zombie detection\n• **Supply Points** - Equipment locations\n• **Extraction Points** - Exit identification\n• **Clue Tracking** - Bounty hint detection\n• **Trap Awareness** - Dangerous object detection\n• **Attractor Objects** - Environmental indicators\n• **Explosive Objects** - Barrel detection\n• **Weapon Classes** - Revolver, Shotgun, Rifle\n• **Special Items** - Unique object detection'
                },
                {
                    name: '`⚙️` CUSTOMIZATION OPTIONS',
                    value: '• **Settings Management** - Save/Load/Reset\n• **Font Customization** - Name, size, style\n• **Interface Options** - Complete UI control\n• **Keybind System** - Menu and panic buttons\n• **Battle Mode** - Combat optimized settings\n• **Color Selection** - Full customization\n• **Additional Settings** - Advanced options'
                },
                {
                    name: '`⚔️` BATTLE MODE',
                    value: '• **Combat Optimized** - Enhanced battle performance\n• **Quick Access** - Battle-specific keybinds\n• **Enhanced Features** - Combat-focused options\n• **Performance Mode** - Optimized for action\n• **Tactical Advantage** - Battle supremacy tools'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your SMG Hunt: Showdown advanced cheat.'
                }
            )
            .setColor('#DC143C')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'SMG Hunt: Showdown • External • Advanced Customization • Battle Mode',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};