const { EmbedBuilder } = require('discord.js');
const config = require('../config/config.json');

module.exports = {
    customId: 'ancient_marvelrivals',
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('⚡ Ancient : Marvel Rivals - Advanced External Cheat')
            .setDescription(
                `**Advanced external cheat for Marvel Rivals from Ancient group.**\n\n` +
                `Sophisticated aimbot with prediction and complete configuration management system.`
            )
            .addFields(
                {
                    name: '`💰` PRICING',
                    value: '**1 Day** - IDR 80.000 / $4.50\n**7 Days** - IDR 341.500 / $20.00\n**30 Days** - IDR 666.000 / $40.00'
                },
                {
                    name: '`💻` SYSTEM REQUIREMENTS',
                    value: '**OS:** Windows 10/11 (all builds)\n**CPU:** Intel & AMD\n**GPU:** Nvidia & AMD (1000 series+)\n**Disk:** GPT\n**BIOS:** UEFI\n**Type:** External Software\n**Spoofer:** Built-in'
                },
                {
                    name: '`🎯` ADVANCED AIM SYSTEM',
                    value: '• **Enable** - Toggle aimbot activation\n• **Draw FOV** - Visual field of view\n• **FOV Value** - Adjustable range slider\n• **Use Smoothing** - Natural movement\n• **Smooth Value** - Precision control\n• **Prediction** - Ballistic calculation\n• **Aim Delay** - Timing adjustment\n• **Dual Aim Keys** - Primary/Secondary binds\n• **Aim Bones** - Head/Neck/Body selection\n• **Visibility Check** - Smart targeting\n• **Teammate Filter** - Friendly protection\n• **Lock Target** - Target persistence'
                },
                {
                    name: '`👁️` VISUAL ESP SYSTEM',
                    value: '• **Enable ESP** - Toggle visual system\n• **Colored Boxes** - Customizable bounding boxes\n• **Health Display** - Vital statistics\n• **Colored Skeletons** - Bone structure display\n• **Distance Colors** - Range-based coloring\n• **Character Names** - Identification display\n• **Target Marking** - Priority indicators\n• **Teammate Display** - Friendly tracking\n• **Visibility Filter** - Smart ESP'
                },
                {
                    name: '`⚙️` PERFORMANCE FEATURES',
                    value: '• **FPS Limiter** - 60-240 FPS range\n• **FPS Display** - Performance monitoring\n• **CPU Optimization** - Efficient resource usage\n• **Performance Control** - Smooth gameplay'
                },
                {
                    name: '`🛠️` CONFIGURATION SYSTEM',
                    value: '• **Save Config** - Store custom settings\n• **Load Config** - Apply saved configurations\n• **Delete Config** - Remove unwanted configs\n• **Share Config** - Export settings\n• **Profile System** - Multiple setting profiles\n• **Quick Switch** - Fast config changes'
                },
                {
                    name: '`🔧` TECHNICAL REQUIREMENTS',
                    value: '• **GPU Requirement** - Nvidia/AMD 1000 series+\n• **UEFI Required** - Modern BIOS support\n• **GPT Format** - Modern partition scheme\n• **Laptop Support** - I-GPU disable from BIOS needed\n• **Built-in Spoofer** - Complete protection'
                },
                {
                    name: '`⚡` ANCIENT ADVANTAGES',
                    value: '• **Advanced Prediction** - Sophisticated ballistics\n• **Configuration Management** - Complete settings control\n• **Dual Aim System** - Flexible keybinds\n• **Performance Optimized** - FPS management\n• **Professional Grade** - High-end features'
                },
                {
                    name: '`📞` PURCHASE',
                    value: 'Contact our staff to get your Ancient Marvel Rivals advanced cheat.'
                }
            )
            .setColor('#4B0082')
            .setImage("https://media.discordapp.net/attachments/1412314599637651477/1434088815982547074/standard.gif?ex=69070ec9&is=6905bd49&hm=72938a9ccd33e000e36c93734e848d14d61c4208845c812a3496d250e63a7c68&=&width=936&height=120")
            .setThumbnail("https://media.discordapp.net/attachments/1412314599637651477/1434088772135424041/file.png.jpeg?ex=69070ebf&is=6905bd3f&hm=87262a13b8a787b6785849841506946668fc482be83748ec3e54c04133d32849&=&format=webp&width=700&height=700")
            .setFooter({
                text: 'Ancient Marvel Rivals • External • Advanced Aimbot • Config Management',
                iconURL: interaction.guild.iconURL()
            });

        await interaction.reply({
            embeds: [embed],
            components: [],
            flags: [64]
        });
    },
};