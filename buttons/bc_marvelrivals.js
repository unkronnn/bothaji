const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'bc_marvelrivals',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('💎 BC : Marvel Rivals - Premium Internal Cheat')
            .setDescription(
                `**Premium internal cheat for Marvel Rivals from BC group.**\n\n` +
                `High-performance internal cheat with flash drive support and advanced radar system.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**30 Days** - IDR 304.250 / $18.67'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 x64 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD\n**Disk:** GPT & MBR\n**BIOS:** UEFI & Legacy\n**Type:** Internal Software\n**Client:** Steam & Epic Games\n**Flash Drive:** Yes\n**Spoofer:** No'
                },
                {
                    name: '`🎯` ADVANCED AIMBOT',
                    value: '• **Enable** - Toggle aimbot activation\n• **Lock Target** - Target persistence\n• **Dynamic FOV** - Adaptive field of view\n• **Draw FOV** - Visual field indicator\n• **FOV Control** - Range configuration\n• **Smooth Control** - Natural movement\n• **Custom Keybinds** - Personalized controls\n• **Visible Only** - Smart targeting\n• **Priority System** - Target selection\n• **Bone Selection** - Precision targeting'
                },
                {
                    name: '`👁️` COMPREHENSIVE VISUAL ESP',
                    value: '• **Box ESP** - Bounding boxes with types\n• **Thickness Control** - Line width adjustment\n• **Corner Style** - Box customization\n• **Skeleton ESP** - Bone structure display\n• **Head Detection** - Head tracking\n• **Filled Options** - Solid box fills\n• **Health Display** - Vital statistics\n• **Name Identification** - Player information\n• **Hero Names** - Character display\n• **Distance Tracking** - Range calculations'
                },
                {
                    name: '`📡` ADVANCED RADAR SYSTEM',
                    value: '• **General Radar**\n  - **Radar Type** - Multiple display modes\n  - **Position X/Y** - Customizable placement\n  - **Size Control** - Adjustable dimensions\n  - **Distance Range** - Configurable coverage\n\n• **Player Radar**\n  - **Enable Tracking** - Player monitoring\n  - **Point Clamp** - Boundary limits\n  - **Point Types** - Various indicators\n  - **Point Size** - Adjustable markers'
                },
                {
                    name: '`🔧` INTERFACE FEATURES',
                    value: '• **Menu Key** - Insert key for access\n• **Panic Key** - Emergency shutdown\n• **Clean Interface** - Professional design\n• **Easy Navigation** - User-friendly layout\n• **Quick Settings** - Fast configuration'
                },
                {
                    name: '`💾` PORTABILITY FEATURES',
                    value: '• **Flash Drive Support** - Run from USB\n• **Portable Mode** - No installation needed\n• **Multi-Device Use** - Transfer between computers\n• **Secure Storage** - Safe file management'
                },
                {
                    name: '`💎` BC ADVANTAGES',
                    value: '• **Multi-Client Support** - Steam & Epic Games\n• **Flash Drive Compatible** - Portable operation\n• **Advanced Radar** - Comprehensive tracking system\n• **Professional Interface** - Clean design\n• **Internal Performance** - Maximum efficiency'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your BC Marvel Rivals premium cheat.'
                }
            )
            .setColor('#00CED1')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'BC Marvel Rivals • Internal • Flash Drive Support • Advanced Radar',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};